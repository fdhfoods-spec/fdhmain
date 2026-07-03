'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Leaf, Truck, Award, Shield, Users } from 'lucide-react'

const reasons = [
  {
    icon: CheckCircle2,
    title: 'Verified Vendors',
    description: 'All vendors are thoroughly vetted and background checked for quality and authenticity',
  },
  {
    icon: Truck,
    title: 'Scheduled Delivery',
    description: 'Choose your preferred delivery slot - we deliver fresh products right on your schedule',
  },
  {
    icon: Leaf,
    title: 'Farm Fresh Quality',
    description: 'Products harvested at peak freshness and delivered within 24 hours maximum',
  },
  {
    icon: Award,
    title: 'Quality Guarantee',
    description: 'Not satisfied? 30-day money-back guarantee, no questions asked',
  },
  {
    icon: Shield,
    title: 'Food Safety First',
    description: 'FSSAI compliant storage and handling with cold-chain integrity maintained',
  },
  {
    icon: Users,
    title: 'Support Local',
    description: 'Direct support to local farmers and small businesses in your community',
  },
]

export function PremiumWhyChoose() {
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
    <section className="w-full bg-gradient-to-b from-white via-green-50 to-white py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Why Choose FDH?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We&apos;re not just a marketplace. We&apos;re a commitment to freshness, quality, and building trust with every delivery.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="group relative bg-white rounded-3xl p-8 border border-gray-100 hover:border-primary transition-all hover:shadow-xl"
              >
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-transparent to-orange-50 opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity -z-10" />

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all"
                >
                  <Icon className="w-7 h-7 text-primary group-hover:text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>

                {/* Accent Line */}
                <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-secondary w-0 group-hover:w-full transition-all rounded-b-3xl" />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
