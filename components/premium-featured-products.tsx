'use client'

import { motion } from 'framer-motion'
import { Heart, ShoppingCart, Star, Check } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { useStore } from '@/lib/store'

const products = [
  {
    id: 1,
    name: 'Premium Chicken Breast',
    vendor: 'Fresh Farms Co.',
    price: '₹450',
    originalPrice: '₹550',
    rating: 4.9,
    reviews: 324,
    image: '/premium-fresh-produce.png',
    badge: 'Best Seller',
  },
  {
    id: 2,
    name: 'Wild Caught Salmon',
    vendor: 'Ocean Valley',
    price: '₹850',
    originalPrice: '₹1050',
    rating: 4.8,
    reviews: 156,
    image: '/premium-fresh-produce.png',
    badge: 'Limited Stock',
  },
  {
    id: 3,
    name: 'Organic Spinach Bundle',
    vendor: 'Green Earth Farm',
    price: '₹120',
    originalPrice: '₹180',
    rating: 5.0,
    reviews: 89,
    image: '/premium-fresh-produce.png',
    badge: 'Fresh Today',
  },
  {
    id: 4,
    name: 'Farm Fresh Apples',
    vendor: 'Orchard Masters',
    price: '₹280',
    originalPrice: '₹380',
    rating: 4.9,
    reviews: 212,
    image: '/premium-fresh-produce.png',
    badge: 'Seasonal',
  },
]

export function PremiumFeaturedProducts() {
  const [favorites, setFavorites] = useState<Set<number>>(new Set())
  const [addedItems, setAddedItems] = useState<Set<number>>(new Set())
  const [toastMessage, setToastMessage] = useState<string>('')
  const { addItem } = useStore()

  const toggleFavorite = (id: number) => {
    const newFavorites = new Set(favorites)
    if (newFavorites.has(id)) {
      newFavorites.delete(id)
    } else {
      newFavorites.add(id)
    }
    setFavorites(newFavorites)
  }

  const handleAddToCart = (product: typeof products[0]) => {
    const priceNum = parseInt(product.price.replace('₹', ''))
    addItem({
      id: product.id,
      name: product.name,
      price: priceNum,
      image: product.image,
      weight: '500g',
      vendorName: product.vendor,
    })
    
    // Show success state
    setAddedItems(prev => new Set(prev).add(product.id))
    setToastMessage(`Added ${product.name} to cart`)
    
    setTimeout(() => {
      setAddedItems(prev => {
        const next = new Set(prev)
        next.delete(product.id)
        return next
      })
      setToastMessage('')
    }, 2000)
  }

  const containerVariants = {
    animate: {
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section className="w-full bg-gradient-to-b from-white to-green-50 py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-between items-end mb-16"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Best sellers from our verified vendors, updated daily
            </p>
          </div>
          <motion.button
            whileHover={{ x: 5 }}
            className="hidden md:block text-primary font-semibold hover:underline"
          >
            View All →
          </motion.button>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 group hover:shadow-2xl transition-all"
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />

                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                    {product.badge}
                  </span>
                </div>

                {/* Favorite Button */}
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all"
                >
                  <Heart
                    className="w-5 h-5"
                    fill={favorites.has(product.id) ? 'currentColor' : 'none'}
                  />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Vendor */}
                <p className="text-sm text-muted-foreground mb-2">
                  {product.vendor}
                </p>

                {/* Name */}
                <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-2">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-orange-400 text-orange-400"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({product.reviews})
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-2xl font-bold text-foreground">
                    {product.price}
                  </span>
                  <span className="text-sm text-muted-foreground line-through">
                    {product.originalPrice}
                  </span>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => handleAddToCart(product)}
                  className={`w-full rounded-2xl py-3 font-semibold flex items-center justify-center gap-2 transition-all ${
                    addedItems.has(product.id)
                      ? 'bg-green-600 text-white'
                      : 'bg-primary text-white hover:bg-primary/90'
                  }`}
                >
                  {addedItems.has(product.id) ? (
                    <>
                      <Check className="w-5 h-5" />
                      Added!
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-5 h-5" />
                      Add to Cart
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
