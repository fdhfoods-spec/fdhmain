import { Suspense } from 'react'
import { Header } from '@/components/header'
import { PremiumHero } from '@/components/premium-hero'
import { PremiumCategories } from '@/components/premium-categories'
import { PremiumFeaturedProducts } from '@/components/premium-featured-products'
import { PremiumWhyChoose } from '@/components/premium-why-choose'
import { PremiumSubscription } from '@/components/premium-subscription'
import { PremiumHowItWorks } from '@/components/premium-how-it-works'
import { PremiumTestimonials } from '@/components/premium-testimonials'
import { PremiumTrust } from '@/components/premium-trust'
import { PremiumFAQ } from '@/components/premium-faq'
import { PremiumNewsletter } from '@/components/premium-newsletter'
import { PremiumFooter } from '@/components/premium-footer'
import { AuthModal } from '@/components/auth-modal'

export default function Home() {
  return (
    <>
      <Suspense fallback={<div className="h-20 bg-white animate-pulse w-full" />}>
        <Header />
      </Suspense>
      <main>
        <PremiumHero />
        <PremiumCategories />
        <PremiumFeaturedProducts />
        <PremiumWhyChoose />
        <PremiumSubscription />
        <PremiumHowItWorks />
        <PremiumTestimonials />
        <PremiumTrust />
        <PremiumFAQ />
        <PremiumNewsletter />
      </main>
      <PremiumFooter />
      <AuthModal />
    </>
  )
}
