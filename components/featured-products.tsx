'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ShoppingCart, Check, Info } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useStore } from '@/lib/store'


// Products loaded dynamically from Zustand store

export function FeaturedProducts() {
  const [activeFilter, setActiveFilter] = useState('all')
  const { addItem, items, products } = useStore()

  const filters = [
    { label: 'All Fresh Today', value: 'all' },
    { label: 'Chicken', value: 'chicken' },
    { label: 'Mutton', value: 'mutton' },
    { label: 'Fish & Seafood', value: 'fish' },
    { label: 'Ready-to-Cook', value: 'ready-to-cook' },
    { label: 'Marinated', value: 'marinated' },
  ]

  const filteredProducts = activeFilter === 'all'
    ? products
    : products.filter(p => p.category === activeFilter)

  return (
    <section id="bestsellers" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans font-semibold text-xs tracking-widest uppercase text-secondary mb-2 block">
            Fresh Today
          </span>
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-primary tracking-tight">
            Our Bestselling Cuts
          </h2>
          <p className="mt-4 text-foreground/75 text-base">
            Hand-selected, double-sanitized and double-checked by our experts before delivery.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${
                activeFilter === filter.value
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-white text-foreground/70 border border-gray-100 hover:border-gray-300 hover:text-primary'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => {
              const inCart = items.some((i) => i.id === product.id)
              const discount = Math.round(
                ((product.originalPrice - product.price) / product.originalPrice) * 100
              )

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  key={product.id}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_-15px_rgba(15,61,46,0.08)] hover:border-primary/10 transition-all duration-300 flex flex-col h-full"
                >
                  {/* Image wrapper */}
                  <div className="relative aspect-[4/3] bg-muted overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    
                    {/* Floating Badges */}
                    {product.badge && (
                      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur text-primary text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-md shadow-sm">
                        {product.badge}
                      </div>
                    )}
                    {discount > 0 && (
                      <div className="absolute top-4 right-4 bg-secondary text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-sm">
                        {discount}% OFF
                      </div>
                    )}
                  </div>

                  {/* Info Card */}
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    
                    {/* Rating & Reviews */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3.5 h-3.5 ${
                              i < Math.floor(product.rating)
                                ? 'fill-amber-400 text-amber-400'
                                : 'text-gray-200'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs font-bold text-foreground">
                        {product.rating}
                      </span>
                      <span className="text-[10px] text-foreground/40 font-medium">
                        ({product.reviews} reviews)
                      </span>
                    </div>

                    {/* Product Name */}
                    <h3 className="font-sans font-bold text-lg text-primary mb-1 group-hover:text-secondary transition-colors duration-200">
                      {product.name}
                    </h3>
                    
                    {/* Weight & Packaging details */}
                    <div className="flex items-center gap-1.5 mb-6 text-foreground/60 text-xs font-medium">
                      <span>Net weight: {product.weight}</span>
                      <span className="w-1 h-1 rounded-full bg-gray-300" />
                      <span className="flex items-center gap-0.5 text-secondary">
                        <Info className="w-3 h-3" /> Vacuum Sealed
                      </span>
                    </div>

                    {/* Price and Cart Action */}
                    <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between gap-4">
                      
                      {/* Price column */}
                      <div className="flex flex-col">
                        <div className="flex items-baseline gap-1.5">
                          <span className="text-xl font-extrabold text-primary">
                            ₹{product.price}
                          </span>
                          {product.originalPrice > product.price && (
                            <span className="text-xs text-foreground/40 line-through">
                              ₹{product.originalPrice}
                            </span>
                          )}
                        </div>
                        <span className="text-[9px] text-foreground/40 leading-none">
                          All taxes included
                        </span>
                      </div>

                      {/* Cart CTA */}
                      <Button
                        onClick={() =>
                          addItem({
                            id: product.id,
                            name: product.name,
                            weight: product.weight,
                            price: product.price,
                            image: product.image,
                          })
                        }
                        className={`font-semibold text-xs tracking-wider uppercase px-4 py-5 rounded-lg flex-1 flex items-center justify-center gap-1.5 shadow-sm transition-all duration-300 ${
                          inCart
                            ? 'bg-secondary hover:bg-secondary text-white'
                            : 'bg-primary hover:bg-primary/95 text-white'
                        }`}
                      >
                        {inCart ? (
                          <>
                            <Check className="w-4 h-4" />
                            Added
                          </>
                        ) : (
                          <>
                            <ShoppingCart className="w-4 h-4" />
                            Add To Cart
                          </>
                        )}
                      </Button>
                    </div>

                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  )
}
