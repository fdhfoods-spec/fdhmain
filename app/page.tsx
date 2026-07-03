import { Suspense } from 'react'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { TrustSection } from '@/components/trust'
import { Categories } from '@/components/categories'
import { SearchSection } from '@/components/search-section'
import { FeaturedProducts } from '@/components/featured-products'
import { WhyChooseUs } from '@/components/why-choose-us'
import { ProcessSection } from '@/components/process'
import { Testimonials } from '@/components/testimonials'
import { MobileApp } from '@/components/mobile-app'
import { HomeChefSection } from '@/components/home-chef'
import { SubscriptionSection } from '@/components/subscription'
import { FAQSection } from '@/components/faq'
import { NewsletterSection } from '@/components/newsletter'
import { Footer } from '@/components/footer'
import { AuthModal } from '@/components/auth-modal'

export default function Home() {
  return (
    <>
      <Suspense fallback={<div className="h-20 bg-slate-950 animate-pulse w-full" />}>
        <Header />
      </Suspense>
      <main>
        <Hero />
        <Categories />
        <SearchSection />
        <FeaturedProducts />
        <WhyChooseUs />
        <HomeChefSection />
        <SubscriptionSection />
        <ProcessSection />
        <Testimonials />
        <TrustSection />
        <FAQSection />
        <MobileApp />
        <NewsletterSection />
      </main>
      <Footer />
      <AuthModal />
    </>
  )
}
