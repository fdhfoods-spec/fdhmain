'use client'

import { motion } from 'framer-motion'
import { Search, ShoppingCart, Truck, CheckCircle } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Browse & Select',
    description: 'Explore our curated selection of fresh products from verified local vendors',
  },
  {
    number: '02',
    icon: ShoppingCart,
    title: 'Add to Cart',
    description: 'Build your order and choose your preferred delivery slot with just a few taps',
  },
  {
    number: '03',
    icon: Truck,
    title: 'Schedule Delivery',
    description: 'Pick your preferred time slot - we deliver fresh products right to your door',
  },
  {
    number: '04',
    icon: CheckCircle,
    title: 'Enjoy Fresh',
    description: 'Receive farm-fresh products with our 24-hour freshness guarantee',
  },
]

export function PremiumHowItWorks() {
  return (
    <section className="w-full bg-white py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From farm to your table in 4 simple steps
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent hidden lg:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                  className="relative"
                >
                  {/* Step Number Circle */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center font-bold text-2xl mx-auto mb-6 shadow-lg relative z-10"
                  >
                    {step.number}
                  </motion.div>

                  {/* Content */}
                  <div className="bg-gradient-to-b from-white to-green-50 rounded-3xl p-8 border border-gray-100 text-center">
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow Connector */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-4 top-24 z-20">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
