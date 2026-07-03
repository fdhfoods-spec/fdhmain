'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setSubmitted(true)
      setEmail('')
      // Reset after 3 seconds
      setTimeout(() => setSubmitted(false), 3000)
    }, 1000)
  }

  return (
    <section className="py-24 bg-gradient-to-b from-white via-accent/5 to-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Content Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          
          {/* Header */}
          <div className="mb-8">
            <span className="font-sans font-semibold text-xs tracking-widest uppercase text-secondary mb-2 block">
              Stay in the Loop
            </span>
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-primary tracking-tight mb-4">
              Fresh News & Exclusive Offers
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed">
              Subscribe to our newsletter for farm-fresh updates, exclusive discounts, home chef features, and seasonal specials delivered straight to your inbox.
            </p>
          </div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-3 mb-6"
          >
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary pointer-events-none" />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-border bg-white focus:outline-none focus:ring-2 focus:ring-secondary/50 placeholder:text-foreground/50 transition-all"
                required
              />
            </div>
            <Button
              type="submit"
              disabled={isLoading || submitted}
              className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 disabled:opacity-50"
            >
              {submitted ? 'Subscribed!' : isLoading ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </motion.form>

          {/* Success Message */}
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center justify-center gap-2 text-secondary font-semibold mb-6"
            >
              <Check className="w-5 h-5" />
              Thank you! Check your inbox for exclusive offers.
            </motion.div>
          )}

          {/* Privacy Note */}
          <p className="text-xs text-foreground/60">
            We respect your privacy. Unsubscribe anytime. No spam, just fresh farm updates!
          </p>

          {/* Benefits Badges */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: '📧', label: 'Weekly Tips' },
              { icon: '🏷️', label: 'Exclusive Deals' },
              { icon: '👨‍🍳', label: 'Chef Specials' },
              { icon: '🌱', label: 'Seasonal Fresh' },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-xl p-4 border border-border"
              >
                <div className="text-2xl mb-2">{benefit.icon}</div>
                <p className="text-xs font-semibold text-foreground">
                  {benefit.label}
                </p>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  )
}
