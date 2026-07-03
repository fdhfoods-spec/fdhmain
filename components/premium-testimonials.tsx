'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Working Mom, Mumbai',
    content: 'FDH has been a lifesaver! The freshness and quality are unmatched. My family loves it, and I love the convenience.',
    rating: 5,
    avatar: '👩‍💼',
  },
  {
    name: 'Rajesh Kumar',
    role: 'Health Conscious, Delhi',
    content: 'Finally, a platform where I can trust the quality. Knowing my produce comes directly from verified local vendors gives me peace of mind.',
    rating: 5,
    avatar: '👨‍🍳',
  },
  {
    name: 'Anjali Desai',
    role: 'Homemaker, Bangalore',
    content: 'The subscription plan has made meal planning so easy. Fresh vegetables every week, and the pricing is very reasonable.',
    rating: 5,
    avatar: '👩‍🌾',
  },
  {
    name: 'Vikram Singh',
    role: 'Fitness Enthusiast, Pune',
    content: 'Premium quality meat and fish for my fitness goals. The cold chain maintenance is excellent, and delivery is always on time.',
    rating: 5,
    avatar: '💪',
  },
]

export function PremiumTestimonials() {
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
    <section className="w-full bg-gradient-to-b from-green-50 to-white py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Loved by 50,000+ Families
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from our customers about their experience with FDH
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-primary hover:shadow-xl transition-all"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-orange-400 text-orange-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground mb-6 leading-relaxed text-lg">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-bold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
