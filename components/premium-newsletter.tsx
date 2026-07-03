'use client'

import { motion } from 'framer-motion'
import { Mail, ArrowRight } from 'lucide-react'
import { useState } from 'react'

export function PremiumNewsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <section className="w-full bg-white py-24 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary via-green-600 to-secondary rounded-3xl p-12 md:p-16 text-white text-center overflow-hidden relative"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -ml-16 -mb-16" />

          <div className="relative z-10">
            {/* Icon */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6"
            >
              <Mail className="w-8 h-8 text-white" />
            </motion.div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Stay Fresh. Stay Informed.
            </h2>
            <p className="text-lg opacity-90 mb-10 max-w-2xl mx-auto">
              Get weekly recipe ideas, exclusive vendor spotlights, and special subscriber-only deals delivered to your inbox.
            </p>

            {/* Newsletter Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-6 py-4 rounded-2xl bg-white/10 border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-8 py-4 bg-white text-primary rounded-2xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all whitespace-nowrap"
              >
                {submitted ? 'Subscribed! 🎉' : (
                  <>
                    Subscribe
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            </motion.form>

            {/* Benefits */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { emoji: '📧', text: 'Weekly Tips & Recipes' },
                { emoji: '🎁', text: 'Exclusive Deals' },
                { emoji: '👨‍🌾', text: 'Vendor Stories' },
              ].map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="text-center"
                >
                  <span className="text-3xl mb-2 block">{benefit.emoji}</span>
                  <p className="text-white/90">{benefit.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
