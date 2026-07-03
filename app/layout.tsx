import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { SupabaseInitializer } from '@/components/supabase-initializer'

export const metadata: Metadata = {
  title: 'Fresh Direct Home (FDH) | Farm-Fresh Meat, Seafood & Local Vendors',
  description: 'FDH is a trusted marketplace delivering farm-fresh meat, seafood, vegetables, fruits, and dairy from verified local vendors. Scheduled delivery ensures maximum freshness. Discover authentic home chef meals and subscription plans.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0F3D2E' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background scroll-smooth">
      <body className="font-sans antialiased bg-background text-foreground">
        <SupabaseInitializer />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
