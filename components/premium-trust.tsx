'use client'

import { motion } from 'framer-motion'
import { Shield, CheckCircle, Award, Zap } from 'lucide-react'

const trustPoints = [
  {
    icon: Shield,
    title: 'FSSAI Certified',
    description: 'All products meet Food Safety and Standards Authority of India guidelines',
  },
  {
    icon: Award,
    title: 'Vendor Verified',
    description: '100% of vendors undergo background checks and quality audits',
  },
  {
    icon: CheckCircle,
    title: 'Quality Guaranteed',
    description: '30-day money-back guarantee if you&apos;re not satisfied with freshness',
  },
  {
    icon: Zap,
    title: '24hr Freshness',
    description: 'Products delivered within 24 hours of processing maximum',
  },
]

export function PremiumTrust() {
  const containerVariants = {
    animate: {
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
  }

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
            Trust You Can Count On
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Quality, safety, and reliability are at the heart of everything we do
          </p>
        </motion.div>

        {/* Trust Points */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {trustPoints.map((point, index) => {
            const Icon = point.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-b from-white to-green-50 rounded-3xl p-8 border-2 border-green-100 hover:border-primary text-center transition-all hover:shadow-xl"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-6"
                >
                  <Icon className="w-8 h-8" />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {point.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Additional Trust Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-white text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Your Satisfaction is Our Promise
          </h3>
          <p className="text-lg opacity-90 max-w-3xl mx-auto mb-8">
            Not happy with your order? Get a full refund within 30 days, no questions asked. We stand behind every product we deliver.
          </p>
          <button className="px-8 py-3 bg-white text-primary rounded-2xl font-semibold hover:shadow-lg transition-all">
            View Our Guarantee
          </button>
        </motion.div>
      </div>
    </section>
  )
}
