'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'How fresh is the meat delivered?',
      answer: 'All our meat is sourced fresh daily from verified local vendors and prepared in WHO-compliant clean-rooms. We maintain a cold chain at 0-4°C and deliver within 24-48 hours of slaughter to ensure maximum freshness and quality.',
    },
    {
      question: 'Can I schedule my delivery?',
      answer: 'Yes! You can choose from multiple delivery slots - immediate dispatch or scheduled delivery up to 7 days in advance. Select your preferred date and time slot during checkout, and we\'ll deliver at your convenience.',
    },
    {
      question: 'Do you support subscriptions?',
      answer: 'Absolutely! We offer three subscription plans - Weekly (₹999), Monthly (₹3,999), and Family (₹8,999). Subscribers enjoy exclusive discounts (10-20%), priority delivery, and free shipping on all orders.',
    },
    {
      question: 'How do refunds work?',
      answer: 'If you\'re not satisfied with any product, we offer a 100% refund within 7 days of delivery. Simply contact our support team with a photo of the product, and we\'ll process your refund immediately. Your satisfaction is our priority.',
    },
    {
      question: 'Can I become a home chef on FDH?',
      answer: 'Yes! We\'re always looking for talented home chefs. Apply on our platform, go through our verification process, and start taking orders. It\'s simple onboarding, easy inventory management, and fast weekly payouts.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major payment methods: Credit Cards, Debit Cards, UPI, Net Banking, and Cash on Delivery (in select areas). All online transactions are secure and encrypted.',
    },
    {
      question: 'How is the meat packaged?',
      answer: 'Every order is packaged in double vacuum-sealed bags, placed in insulated boxes with ice packs, and delivered within 24 hours. This maintains the cold chain and ensures meat freshness throughout delivery.',
    },
    {
      question: 'Are your vendors verified?',
      answer: 'Yes, all vendors on FDH go through rigorous quality checks, health certifications, and hygiene audits. We verify FSSAI compliance, ISO 22000, and HACCP certifications before they can sell on our platform.',
    },
  ]

  return (
    <section className="py-24 bg-muted/40">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-sans font-semibold text-xs tracking-widest uppercase text-secondary mb-2 block">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-primary tracking-tight">
            Got Questions? We Have Answers
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="border border-border rounded-xl overflow-hidden bg-white hover:shadow-md transition-shadow duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left font-sans font-semibold text-foreground hover:bg-muted/30 transition-colors duration-200"
              >
                <span className="text-lg">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-secondary flex-shrink-0" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-5 border-t border-border bg-muted/20 text-foreground/80 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-16 text-center">
          <p className="text-foreground/70 mb-4">
            Didn&apos;t find your answer?
          </p>
          <a
            href="mailto:support@fdh.com"
            className="inline-flex items-center gap-2 font-sans font-semibold text-secondary hover:text-primary transition-colors"
          >
            Contact our support team
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
