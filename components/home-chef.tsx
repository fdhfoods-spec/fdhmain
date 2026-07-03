'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Star, Clock, MapPin, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HomeChefSection() {
  const [activeChef, setActiveChef] = useState(0)

  const chefs = [
    {
      id: 1,
      name: 'Priya Sharma',
      cuisine: 'North Indian',
      location: 'South Delhi',
      rating: 4.9,
      reviews: 342,
      todayMenu: ['Butter Chicken', 'Dal Makhani', 'Naan'],
      image: '/chef-1.png',
      deliverySlots: '12:00 PM - 2:00 PM, 6:00 PM - 8:00 PM',
    },
    {
      id: 2,
      name: 'Anjali Gupta',
      cuisine: 'South Indian',
      location: 'Bangalore',
      rating: 4.8,
      reviews: 289,
      todayMenu: ['Masala Dosa', 'Sambar', 'Rasam'],
      image: '/chef-2.png',
      deliverySlots: '11:30 AM - 1:30 PM, 5:30 PM - 7:30 PM',
    },
    {
      id: 3,
      name: 'Meera Deshpande',
      cuisine: 'Maharashtrian',
      location: 'Mumbai',
      rating: 4.7,
      reviews: 215,
      todayMenu: ['Puran Poli', 'Usal', 'Bhakri'],
      image: '/chef-3.png',
      deliverySlots: '12:00 PM - 2:00 PM, 6:30 PM - 8:30 PM',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-24 bg-gradient-to-b from-white to-muted/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-sans font-semibold text-xs tracking-widest uppercase text-secondary mb-2 block">
            Authentic Homemade Meals
          </span>
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-primary tracking-tight mb-4">
            Support Local Home Chefs
          </h2>
          <p className="text-foreground/70 text-lg leading-relaxed">
            Order authentic homemade food prepared by verified home chefs in your neighbourhood. Every meal prepared with love, delivered with care.
          </p>
        </div>

        {/* Chefs Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {chefs.map((chef, index) => (
            <motion.div
              key={chef.id}
              variants={cardVariants}
              className={`group relative cursor-pointer transition-all duration-300 ${
                activeChef === index ? 'ring-2 ring-secondary' : ''
              }`}
              onClick={() => setActiveChef(index)}
            >
              {/* Chef Image */}
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-muted mb-6">
                <Image
                  src={chef.image}
                  alt={chef.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
              </div>

              {/* Chef Info Card */}
              <div className="bg-white rounded-xl p-5 shadow-md border border-border group-hover:shadow-lg transition-all duration-300">
                <div className="mb-4">
                  <h3 className="font-sans font-bold text-lg text-primary mb-1">
                    {chef.name}
                  </h3>
                  <p className="text-sm font-semibold text-secondary mb-2">
                    {chef.cuisine} Cuisine
                  </p>
                  <div className="flex items-center gap-2 text-sm text-foreground/60">
                    <MapPin className="w-4 h-4 text-secondary" />
                    {chef.location}
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4 pb-4 border-b border-border">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(chef.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-foreground">
                    {chef.rating} ({chef.reviews} reviews)
                  </span>
                </div>

                {/* Today's Menu */}
                <div className="mb-4">
                  <p className="text-xs font-bold text-foreground/60 uppercase tracking-wider mb-2">
                    Today&apos;s Menu
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {chef.todayMenu.map((item, i) => (
                      <span
                        key={i}
                        className="text-xs font-semibold bg-accent text-accent-foreground px-3 py-1 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Delivery Slots */}
                <div className="mb-4">
                  <p className="text-xs font-bold text-foreground/60 uppercase tracking-wider mb-2 flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Delivery Slots
                  </p>
                  <p className="text-sm text-foreground/80">
                    {chef.deliverySlots}
                  </p>
                </div>

                {/* Order Button */}
                <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold">
                  Order Now
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Apply as Chef CTA */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/20 rounded-2xl p-8 text-center">
          <h3 className="font-sans font-bold text-2xl text-primary mb-3">
            Are You a Home Chef?
          </h3>
          <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
            Join our community and reach thousands of customers eager for authentic homemade meals. Simple onboarding, easy inventory management, and fast payouts.
          </p>
          <Button className="bg-secondary hover:bg-secondary/90 text-white font-semibold inline-flex items-center gap-2">
            Apply as Home Chef
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
