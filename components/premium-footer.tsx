'use client'

import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'

export function PremiumFooter() {
  const containerVariants = {
    animate: {
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  }

  return (
    <footer className="w-full bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Fresh Direct Home</h3>
            <p className="text-gray-300 leading-relaxed">
              Connecting families with fresh, verified local vendors. Farm to table in 24 hours.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors text-sm">
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {['About Us', 'Blog', 'Careers', 'Press'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6">Products</h4>
            <ul className="space-y-3">
              {['Fresh Meat', 'Seafood', 'Vegetables', 'Fruits'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              {['Help Center', 'Contact Us', 'Track Order', 'Return Policy'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gray-800 mb-8" />

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-gray-400 text-sm">
            © 2024 Fresh Direct Home. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-primary text-sm transition-colors">
              Cookies
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
      >
        ↑
      </motion.button>
    </footer>
  )
}
