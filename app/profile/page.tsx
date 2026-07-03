'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useStore } from '@/lib/store'
import {
  User,
  ShoppingBag,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Clock,
  ArrowLeft,
  ChevronRight,
  RefreshCw,
  CheckCircle,
  Package,
  Truck,
  LogOut,
  ShieldCheck,
  Plus
} from 'lucide-react'

export default function UserProfilePage() {
  const router = useRouter()
  const { user, isAuthLoading, setUser, orders, addItem, setAuthModalOpen } = useStore()
  const [activeTab, setActiveTab] = useState<'orders' | 'profile' | 'addresses'>('orders')

  if (isAuthLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center font-sans p-4">
        <div className="text-center space-y-3">
          <RefreshCw className="w-8 h-8 text-secondary animate-spin mx-auto" />
          <p className="text-xs font-bold text-muted-foreground">Restoring account session...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center font-sans p-4">
        <div className="w-full max-w-md p-8 bg-card border border-border rounded-3xl shadow-2xl text-center space-y-6">
          <div className="w-14 h-14 bg-secondary/10 border border-secondary/20 text-secondary font-black text-2xl flex items-center justify-center mx-auto rounded-2xl">
            <User className="w-7 h-7" />
          </div>
          <h2 className="text-xl font-black text-foreground">Customer Sign In Required</h2>
          <p className="text-muted-foreground text-xs leading-relaxed">Please sign in with your verified mobile number to view your order history and profile details.</p>
          <Link href="/auth?redirect=/profile" className="inline-block w-full py-3.5 bg-secondary hover:bg-secondary/90 text-white font-black text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-secondary/20">
            Sign In via SMS OTP
          </Link>
        </div>
      </div>
    )
  }

  // Filter user orders by phone or email
  const userOrders = orders.filter((o) => {
    return (
      (user.phone && o.customerPhone === user.phone) ||
      (user.email && o.customerEmail === user.email) ||
      o.customerName.toLowerCase() === user.name.toLowerCase()
    )
  })

  const handleReorder = (orderItems: typeof orders[0]['items']) => {
    orderItems.forEach((item) => {
      addItem({
        id: item.id,
        name: item.name,
        category: 'general',
        weight: item.weight,
        price: item.price,
        originalPrice: Math.round(item.price * 1.2),
        rating: 5,
        reviews: 10,
        badge: 'Top Seller',
        image: item.image
      })
    })
    alert('Items re-added to your cart!')
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans pb-16">
      {/* Header Bar */}
      <div className="bg-slate-900/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-40 p-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-xs font-bold">
            <ArrowLeft className="w-4 h-4" /> Back to Store
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-xs font-black tracking-wider uppercase text-secondary">My Customer Portal</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4 sm:p-6 space-y-6">
        
        {/* User Hero Banner */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-primary to-secondary text-white font-black text-2xl flex items-center justify-center shadow-lg shadow-primary/20">
              {user ? user.name.charAt(0).toUpperCase() : 'U'}
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <h1 className="text-xl font-black text-white">{user ? user.name : 'Verified Customer'}</h1>
                <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[9px] font-extrabold uppercase rounded-full">
                  Verified Member
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">{user?.phone || '+91 98765 43210'} • {user?.email || 'customer@fdh.com'}</p>
            </div>
          </div>

          {user ? (
            <button
              onClick={() => {
                setUser(null)
                router.push('/')
              }}
              className="px-4 py-2 bg-slate-950 hover:bg-red-500/10 text-slate-400 hover:text-red-400 border border-slate-800 rounded-xl text-xs font-bold transition-all flex items-center gap-2"
            >
              <LogOut className="w-3.5 h-3.5" /> Logout Session
            </button>
          ) : (
            <button
              onClick={() => setAuthModalOpen(true)}
              className="px-5 py-2.5 bg-secondary hover:bg-secondary/90 text-white rounded-xl text-xs font-bold transition-all shadow-lg shadow-secondary/20"
            >
              Sign In / Authenticate
            </button>
          )}
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-800 space-x-2">
          {[
            { id: 'orders', label: `My Orders (${userOrders.length})`, icon: ShoppingBag },
            { id: 'profile', label: 'Account Profile', icon: User },
            { id: 'addresses', label: 'Saved Addresses', icon: MapPin }
          ].map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-3 text-xs font-bold border-b-2 flex items-center gap-2 transition-all ${
                  activeTab === tab.id
                    ? 'border-secondary text-secondary font-black'
                    : 'border-transparent text-slate-400 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Tab Content */}
        {activeTab === 'orders' && (
          <div className="space-y-4">
            <h2 className="text-sm font-black text-white uppercase tracking-wider">Order History & Tracking</h2>

            {userOrders.length === 0 ? (
              <div className="bg-slate-900 border border-slate-800 rounded-3xl p-12 text-center space-y-3">
                <ShoppingBag className="w-12 h-12 text-slate-600 mx-auto" />
                <h3 className="text-base font-bold text-white">No Orders Placed Yet</h3>
                <p className="text-xs text-slate-400 max-w-sm mx-auto">Browse our fresh cuts catalog and place your first order today!</p>
                <Link href="/" className="inline-block px-6 py-3 bg-secondary text-white rounded-xl text-xs font-bold shadow-lg shadow-secondary/20">
                  Explore Products
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {userOrders.map((o) => (
                  <div key={o.id} className="bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-xl">
                    <div className="flex flex-wrap items-center justify-between border-b border-slate-800 pb-3 gap-2">
                      <div>
                        <span className="text-[10px] font-mono text-slate-500 font-bold block">ORDER #{o.id}</span>
                        <span className="text-xs text-slate-400">{new Date(o.date).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border ${
                          o.status === 'delivered'
                            ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                            : o.status === 'cancelled'
                            ? 'bg-red-500/10 text-red-400 border-red-500/20'
                            : 'bg-amber-500/10 text-amber-400 border-amber-500/20 animate-pulse'
                        }`}>
                          {o.status}
                        </span>

                        <Link
                          href={`/track/${o.id}`}
                          className="px-3.5 py-1.5 bg-secondary/10 hover:bg-secondary/20 border border-secondary/30 text-secondary rounded-xl text-xs font-bold transition-all flex items-center gap-1.5"
                        >
                          <MapPin className="w-3.5 h-3.5 animate-bounce" /> Track Live
                        </Link>
                      </div>
                    </div>

                    {/* Order Items */}
                    <div className="space-y-2">
                      {o.items.map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between text-xs py-1">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-slate-950 overflow-hidden relative border border-slate-850 shrink-0">
                              {item.image ? (
                                <Image src={item.image} alt={item.name} fill className="object-cover" />
                              ) : (
                                <Package className="w-4 h-4 text-slate-600 m-2" />
                              )}
                            </div>
                            <div>
                              <p className="font-bold text-white">{item.name}</p>
                              <p className="text-[10px] text-slate-400">{item.weight} x {item.qty}</p>
                            </div>
                          </div>
                          <span className="font-mono font-bold text-white">₹{item.price * item.qty}</span>
                        </div>
                      ))}
                    </div>

                    {/* Order Total & Reorder Button */}
                    <div className="border-t border-slate-800 pt-3 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-slate-500 block">Total Amount</span>
                        <span className="text-base font-mono font-black text-secondary">₹{o.total}</span>
                      </div>

                      <button
                        onClick={() => handleReorder(o.items)}
                        className="px-4 py-2 bg-slate-950 hover:bg-slate-850 border border-slate-800 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-1.5"
                      >
                        <RefreshCw className="w-3.5 h-3.5 text-secondary" /> Buy Again
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'profile' && (
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4">
            <h2 className="text-sm font-black text-white uppercase tracking-wider">Account Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-850">
                <span className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Full Name</span>
                <span className="text-white font-bold text-sm">{user?.name || 'Customer'}</span>
              </div>
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-850">
                <span className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Phone Number</span>
                <span className="text-white font-bold text-sm">{user?.phone || '+91 98765 43210'}</span>
              </div>
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-850">
                <span className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Email Address</span>
                <span className="text-white font-bold text-sm">{user?.email || 'customer@fdh.com'}</span>
              </div>
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-850">
                <span className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Membership Status</span>
                <span className="text-emerald-400 font-bold text-sm">Active Premium Member</span>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'addresses' && (
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4">
            <h2 className="text-sm font-black text-white uppercase tracking-wider">Default Delivery Location</h2>
            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-850 flex items-center justify-between text-xs">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0" />
                <div>
                  <p className="font-bold text-white">Central Hub Delivery Address</p>
                  <p className="text-slate-400 text-[11px]">Sector C, Vasant Kunj, New Delhi - 110070</p>
                </div>
              </div>
              <span className="px-2.5 py-1 bg-secondary/20 text-secondary text-[10px] font-bold rounded-lg">Default</span>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
