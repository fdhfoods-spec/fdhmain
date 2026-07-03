'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Check, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function SubscriptionSection() {
  const plans = [
    {
      id: 'weekly',
      name: 'Weekly Plan',
      price: '₹999',
      period: '/week',
      description: 'Perfect for trying out our service',
      features: [
        'Weekly delivery slot',
        '10% discount on orders',
        'Priority customer support',
        'Free delivery on orders above ₹500',
      ],
      cta: 'Start Weekly',
      popular: false,
    },
    {
      id: 'monthly',
      name: 'Monthly Plan',
      price: '₹3,999',
      period: '/month',
      description: 'Our most popular choice',
      features: [
        'Flexible weekly deliveries',
        '15% discount on all orders',
        'Exclusive early access to new products',
        'Free delivery on all orders',
        'Personalized meal recommendations',
      ],
      cta: 'Subscribe Monthly',
      popular: true,
    },
    {
      id: 'family',
      name: 'Family Plan',
      price: '₹8,999',
      period: '/month',
      description: 'For households of 4+',
      features: [
        'Unlimited weekly deliveries',
        '20% discount on all orders',
        'Monthly bonus vouchers',
        'Free delivery + priority handling',
        'Dedicated account manager',
      ],
      cta: 'Subscribe Family',
      popular: false,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
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
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans font-semibold text-xs tracking-widest uppercase text-secondary mb-2 block">
            Smart Subscriptions
          </span>
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-primary tracking-tight mb-4">
            Subscribe & Save
          </h2>
          <p className="text-foreground/70 text-lg leading-relaxed">
            Choose a subscription plan that works for you and enjoy exclusive benefits with every delivery.
          </p>
        </div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.id}
              variants={cardVariants}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                plan.popular
                  ? 'ring-2 ring-secondary shadow-2xl md:scale-105'
                  : 'border border-border'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-secondary to-orange-500 text-white py-2 px-4 text-center text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2">
                  <Zap className="w-4 h-4" />
                  Most Popular
                </div>
              )}

              {/* Card Content */}
              <div className={`bg-white p-8 ${plan.popular ? 'pt-16' : ''}`}>
                
                {/* Plan Title & Price */}
                <h3 className="text-2xl font-sans font-bold text-primary mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-foreground/60 mb-6">
                  {plan.description}
                </p>

                <div className="mb-6">
                  <span className="text-4xl font-sans font-bold text-primary">
                    {plan.price}
                  </span>
                  <span className="text-foreground/60 ml-2">
                    {plan.period}
                  </span>
                </div>

                {/* CTA Button */}
                <Button
                  className={`w-full font-semibold py-6 mb-8 transition-all duration-300 ${
                    plan.popular
                      ? 'bg-secondary hover:bg-secondary/90 text-white'
                      : 'bg-muted text-primary hover:bg-muted/80'
                  }`}
                >
                  {plan.cta}
                </Button>

                {/* Features List */}
                <div className="space-y-4">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/80">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature Image & Benefits */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-square rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src="/subscription-family.png"
              alt="Happy family with fresh food"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Right - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-sans font-bold text-primary mb-6">
              Why Subscribe?
            </h3>
            
            <div className="space-y-6">
              {[
                {
                  title: 'Consistent Quality',
                  desc: 'Same premium quality delivered on your schedule',
                },
                {
                  title: 'Better Value',
                  desc: 'Save up to 20% with our subscription plans',
                },
                {
                  title: 'Convenience',
                  desc: 'Set it once and enjoy regular deliveries',
                },
                {
                  title: 'Exclusive Access',
                  desc: 'First access to limited edition products and special offers',
                },
                {
                  title: 'Flexible Management',
                  desc: 'Pause, skip, or modify deliveries anytime',
                },
                {
                  title: 'Priority Support',
                  desc: 'Dedicated support team for subscription members',
                },
              ].map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-sans font-bold text-foreground mb-1">
                      {benefit.title}
                    </h4>
                    <p className="text-sm text-foreground/70">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
