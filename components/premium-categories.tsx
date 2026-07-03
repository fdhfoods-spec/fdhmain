'use client'

import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'

const categories = [
  { name: 'Fresh Meat', icon: '🥩', count: '250+ products' },
  { name: 'Seafood', icon: '🐟', count: '180+ products' },
  { name: 'Vegetables', icon: '🥬', count: '320+ products' },
  { name: 'Fruits', icon: '🍎', count: '290+ products' },
  { name: 'Dairy', icon: '🥛', count: '150+ products' },
  { name: 'Pantry', icon: '🛒', count: '400+ products' },
]

export function PremiumCategories() {
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
    <section className="w-full bg-white py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse our curated selection of fresh products from verified local vendors
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((category) => (
            <motion.button
              key={category.name}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative bg-white border-2 border-gray-100 rounded-3xl p-8 text-left transition-all hover:border-primary hover:shadow-xl"
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity" />

              <div className="relative">
                {/* Icon */}
                <div className="text-6xl mb-6">{category.icon}</div>

                {/* Title and Count */}
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {category.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {category.count}
                </p>

                {/* Arrow Icon */}
                <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                  Explore
                  <ChevronRight className="w-5 h-5" />
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
