'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import Image from 'next/image'

const plans = [
  {
    name: 'Weekly Plan',
    price: '₹999',
    period: 'per week',
    description: 'Perfect for couples or small families',
    benefits: [
      '2 kg assorted vegetables',
      '1 kg fresh meat/fish',
      '1 kg fruits',
      'Free scheduled delivery',
      'Priority customer support',
    ],
    featured: false,
  },
  {
    name: 'Monthly Plan',
    price: '₹3,999',
    period: 'per month',
    description: 'Most popular for families',
    benefits: [
      '12 kg assorted vegetables',
      '6 kg fresh meat/fish',
      '8 kg fruits',
      'Free scheduled delivery',
      '24/7 priority support',
      'Exclusive vendor discounts',
      'Early access to new products',
    ],
    featured: true,
  },
  {
    name: 'Family Plan',
    price: '₹8,999',
    period: 'per month',
    description: 'For larger families and meal prep',
    benefits: [
      '30 kg assorted vegetables',
      '15 kg fresh meat/fish',
      '20 kg fruits',
      'Free express delivery',
      'Dedicated account manager',
      'Custom orders allowed',
      'Special seasonal bundles',
      'Monthly recipe guides',
    ],
    featured: false,
  },
]

export function PremiumSubscription() {
  const containerVariants = {
    animate: {
      transition: { staggerChildren: 0.15 }
    }
  }

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  return (
    <section className="w-full bg-white py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-square rounded-3xl overflow-hidden">
              <Image
                src="/subscription-delivery.png"
                alt="Subscription delivery"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
                Subscribe & Save
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Get fresh, verified products delivered on your schedule with exclusive subscription benefits and priority support.
              </p>
            </div>

            <div className="space-y-4">
              {[
                'Flexible scheduling - pause or cancel anytime',
                'Free delivery on all subscription orders',
                'Exclusive subscriber-only deals up to 25% off',
                'Priority access to limited stock items',
              ].map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="flex items-start gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-primary flex-shrink-0 flex items-center justify-center mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg text-foreground">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <button className="px-8 py-4 bg-primary text-white rounded-2xl font-semibold text-lg hover:shadow-lg transition-all inline-block">
              Explore Plans →
            </button>
          </motion.div>
        </div>

        {/* Pricing Plans */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-4xl font-bold text-foreground text-center mb-16">
            Simple, Transparent Pricing
          </h3>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className={`rounded-3xl p-8 border-2 transition-all ${
                  plan.featured
                    ? 'bg-primary text-white border-primary shadow-2xl scale-105'
                    : 'bg-white border-gray-100 hover:border-primary'
                }`}
              >
                <div className="mb-8">
                  <h4 className={`text-2xl font-bold mb-2 ${plan.featured ? 'text-white' : 'text-foreground'}`}>
                    {plan.name}
                  </h4>
                  <p className={plan.featured ? 'text-blue-100' : 'text-muted-foreground'}>
                    {plan.description}
                  </p>
                </div>

                <div className="mb-8">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className={`text-lg ${plan.featured ? 'text-blue-100' : 'text-muted-foreground'}`}>
                    {' '}{plan.period}
                  </span>
                </div>

                <button
                  className={`w-full py-3 rounded-2xl font-semibold mb-8 transition-all ${
                    plan.featured
                      ? 'bg-white text-primary hover:bg-gray-100'
                      : 'bg-primary text-white hover:bg-primary/90'
                  }`}
                >
                  Choose Plan
                </button>

                <div className="space-y-4">
                  {plan.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 ${plan.featured ? 'text-white' : 'text-primary'}`} />
                      <span className={plan.featured ? 'text-white' : 'text-foreground'}>
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
