'use client'

import { motion } from 'framer-motion'
import { ChevronRight, Leaf, Truck, Shield } from 'lucide-react'
import Image from 'next/image'

export function PremiumHero() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  }

  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden pt-24">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-white opacity-40" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial="initial"
            animate="animate"
            variants={{
              animate: {
                transition: { staggerChildren: 0.2 }
              }
            }}
          >
            {/* Trust Badge */}
            <motion.div
              variants={fadeIn}
              className="inline-block"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200">
                <Leaf className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  Trusted by 50,000+ Families
                </span>
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeIn}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground"
            >
              Farm Fresh
              <br />
              <span className="text-primary">Delivered</span>
              <br />
              to Your Door
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeIn}
              className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed"
            >
              Verified local vendors, premium quality products, and scheduled delivery slots. Experience the freshness of a farmer&apos;s market in the convenience of your home.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button className="group px-8 py-4 bg-primary text-white rounded-2xl font-semibold text-lg transition-all hover:shadow-lg hover:scale-105 flex items-center justify-center gap-2">
                Shop Now
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 border-2 border-primary text-primary rounded-2xl font-semibold text-lg hover:bg-primary hover:text-white transition-all">
                Learn More
              </button>
            </motion.div>

            {/* Trust Metrics */}
            <motion.div
              variants={fadeIn}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200"
            >
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary">4.9★</p>
                <p className="text-sm text-muted-foreground mt-2">Average Rating</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary">24hr</p>
                <p className="text-sm text-muted-foreground mt-2">Fresh Guarantee</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary">100%</p>
                <p className="text-sm text-muted-foreground mt-2">Verified Vendors</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden">
              <Image
                src="/premium-fresh-produce.png"
                alt="Fresh produce"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating Trust Cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-2xl max-w-xs border border-gray-100"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <Truck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Scheduled Delivery</p>
                  <p className="text-xs text-muted-foreground">Choose your preferred slot</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute -top-8 -right-8 bg-white rounded-2xl p-6 shadow-2xl max-w-xs border border-gray-100"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Quality Guarantee</p>
                  <p className="text-xs text-muted-foreground">30-day money back</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
