'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    question: 'How do you ensure product freshness?',
    answer: 'Products are harvested at peak freshness and delivered within 24 hours maximum. We maintain strict cold-chain protocols with temperature-monitored packaging throughout transit.',
  },
  {
    question: 'Can I reschedule my delivery?',
    answer: 'Yes! You can reschedule anytime through your dashboard. Change your delivery slot up to 6 hours before the scheduled time with no charges.',
  },
  {
    question: 'Are the vendors really verified?',
    answer: 'Absolutely. Every vendor undergoes thorough background checks, farm/business audits, and FSSAI certification verification before joining our platform.',
  },
  {
    question: 'What if I\'m not satisfied with my order?',
    answer: 'We offer a 30-day money-back guarantee. If you\'re not satisfied with the freshness or quality, simply contact our support team for a full refund.',
  },
  {
    question: 'Do you deliver to my area?',
    answer: 'We currently deliver to major cities including Mumbai, Delhi, Bangalore, Pune, and Hyderabad. Check your pincode on our website to confirm delivery availability.',
  },
  {
    question: 'Can I customize my subscription?',
    answer: 'Yes! You can pause, skip, or modify your subscription anytime. Add or remove items from your regular deliveries based on your needs.',
  },
]

export function PremiumFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const containerVariants = {
    animate: {
      transition: { staggerChildren: 0.05 }
    }
  }

  const itemVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  }

  return (
    <section className="w-full bg-gradient-to-b from-white via-green-50 to-white py-24 px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Have questions? We&apos;ve got answers to help you get the most out of FDH
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="border-2 border-gray-100 rounded-2xl overflow-hidden hover:border-primary transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-start justify-between bg-white hover:bg-green-50 transition-all"
              >
                <h3 className="text-lg font-semibold text-foreground text-left">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 ml-4"
                >
                  <ChevronDown className="w-6 h-6 text-primary" />
                </motion.div>
              </button>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-8 py-6 bg-green-50 border-t-2 border-gray-100">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground text-lg mb-4">
            Didn&apos;t find your answer?
          </p>
          <button className="text-primary font-semibold hover:underline text-lg">
            Contact our support team →
          </button>
        </motion.div>
      </div>
    </section>
  )
}
