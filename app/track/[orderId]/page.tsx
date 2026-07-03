'use client'

import { use, useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useStore } from '@/lib/store'
import {
  MapPin,
  Clock,
  Phone,
  CheckCircle2,
  Package,
  Bike,
  Home,
  ArrowLeft,
  RefreshCw,
  AlertCircle,
  ChevronRight,
  ShieldCheck
} from 'lucide-react'

export default function OrderTrackingPage({ params }: { params: Promise<{ orderId: string }> }) {
  const resolvedParams = use(params)
  const orderId = resolvedParams.orderId

  const { orders } = useStore()

  // Find order from store or fallback to standard demo order
  const order = orders.find((o) => o.id.toLowerCase() === orderId.toLowerCase()) || orders[0]

  // Map 7 statuses to the 5 Swiggy/Zomato tracking steps
  const getStepIndex = (status: string) => {
    switch (status) {
      case 'pending':
      case 'accepted':
        return 1
      case 'preparing':
        return 2
      case 'ready-for-pickup':
        return 3
      case 'out-for-delivery':
        return 4
      case 'delivered':
        return 5
      case 'cancelled':
        return -1
      default:
        return 1
    }
  }

  const currentStep = getStepIndex(order ? order.status : 'preparing')

  const steps = [
    { step: 1, title: 'Order Accepted', desc: 'Sourced & verified by store', time: 'Just now' },
    { step: 2, title: 'Preparing Cuts', desc: 'Custom cut & vacuum sealed', time: '10 mins' },
    { step: 3, title: 'Ready for Pickup', desc: 'Chilled in cold storage', time: '20 mins' },
    { step: 4, title: 'Out for Delivery', desc: 'Valet on the way to your location', time: '30 mins' },
    { step: 5, title: 'Delivered', desc: 'Package received by customer', time: 'Delivered' }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground font-sans pb-12">
      {/* Top Mobile Header */}
      <div className="bg-card/80 backdrop-blur-md border-b border-border sticky top-0 z-40 p-4">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-xs font-bold">
            <ArrowLeft className="w-4 h-4" /> Back to Store
          </Link>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-ping" />
            <span className="text-xs font-black tracking-wider uppercase text-primary">Live Delivery Sync</span>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto p-4 sm:p-6 space-y-6">
        
        {/* Swiggy/Zomato Hero Status Card */}
        <div className="bg-card border border-border rounded-3xl p-6 relative overflow-hidden shadow-2xl space-y-4">
          <div className="absolute -right-12 -top-12 w-40 h-40 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

          {order?.status === 'cancelled' ? (
            <div className="text-center py-6 space-y-2">
              <AlertCircle className="w-12 h-12 text-destructive mx-auto" />
              <h2 className="text-xl font-black text-foreground">Order Cancelled</h2>
              <p className="text-xs text-muted-foreground">This order has been cancelled and refunded.</p>
            </div>
          ) : (
            <>
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-mono text-muted-foreground font-bold uppercase tracking-widest block">ORDER #{order?.id || orderId}</span>
                  <h1 className="text-2xl font-black text-foreground tracking-tight mt-0.5">
                    {currentStep === 5
                      ? 'Order Delivered!'
                      : currentStep === 4
                      ? 'Valet is on the way!'
                      : 'Preparing your fresh cuts...'}
                  </h1>
                </div>

                <div className="text-right bg-muted p-3 rounded-2xl border border-border">
                  <span className="text-[9px] uppercase font-extrabold text-muted-foreground block">Estimated Time</span>
                  <span className="text-lg font-black text-secondary font-mono">
                    {currentStep === 5 ? 'Completed' : order?.estimatedDeliveryTime || '25-35 mins'}
                  </span>
                </div>
              </div>

              {/* Simulated Live Route Map Graphic */}
              <div className="bg-muted border border-border rounded-2xl p-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#10B981_1px,transparent_1px)] [background-size:14px_14px]" />
                
                <div className="relative z-10 flex items-center justify-between my-2">
                  <div className="text-center">
                    <div className="w-9 h-9 rounded-2xl bg-primary/20 border border-primary text-primary flex items-center justify-center mx-auto mb-1">
                      <Home className="w-4 h-4" />
                    </div>
                    <span className="text-[9px] font-bold text-muted-foreground block">FDH Hub</span>
                  </div>

                  {/* Rider Motion Indicator */}
                  <div className="flex-1 mx-4 border-t-2 border-dashed border-border relative flex items-center justify-center">
                    <div
                      className="absolute bg-secondary text-white p-1.5 rounded-full shadow-lg shadow-secondary/50 transition-all duration-1000"
                      style={{ left: `${Math.min(90, Math.max(10, (currentStep / 5) * 100))}%` }}
                    >
                      <Bike className="w-4 h-4 animate-pulse" />
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="w-9 h-9 rounded-2xl bg-secondary/20 border border-secondary text-secondary flex items-center justify-center mx-auto mb-1">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span className="text-[9px] font-bold text-muted-foreground block">Your Home</span>
                  </div>
                </div>

                <div className="relative z-10 pt-2 border-t border-border/80 flex items-center justify-between text-[11px] text-muted-foreground">
                  <span>Distance: <strong className="text-foreground">{order?.distanceKm || 4.2} km</strong></span>
                  <span>Store Radius Check: <strong className="text-primary">Validated (within 30km)</strong></span>
                </div>
              </div>
            </>
          )}
        </div>

        {/* 5-Step Progress Timeline */}
        {order?.status !== 'cancelled' && (
          <div className="bg-card border border-border rounded-3xl p-6 space-y-6 shadow-xl">
            <h3 className="text-xs font-black uppercase tracking-widest text-muted-foreground border-b border-border pb-3">
              Live Delivery Progress
            </h3>

            <div className="space-y-6 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-border">
              {steps.map((s) => {
                const isDone = currentStep >= s.step
                const isCurrent = currentStep === s.step

                return (
                  <div key={s.step} className="relative flex items-start gap-4 pl-2 group">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shrink-0 z-10 transition-all ${
                        isDone
                          ? 'bg-secondary text-white shadow-md shadow-secondary/30 ring-4 ring-secondary/10'
                          : 'bg-muted border border-border text-muted-foreground'
                      }`}
                    >
                      {isDone ? <CheckCircle2 className="w-4 h-4" /> : s.step}
                    </div>

                    <div className="flex-1 pt-0.5">
                      <div className="flex items-center justify-between">
                        <h4 className={`text-sm font-bold ${isDone ? 'text-foreground' : 'text-muted-foreground'}`}>
                          {s.title}
                        </h4>
                        {isCurrent && (
                          <span className="px-2 py-0.5 rounded-full bg-secondary/20 text-secondary text-[9px] font-black uppercase tracking-wider animate-pulse">
                            In Progress
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground mt-0.5">{s.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Assigned Delivery Valet Contact Card */}
        {order?.deliveryBoyName && (
          <div className="bg-card border border-border rounded-3xl p-5 flex items-center justify-between shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-secondary/10 border border-secondary/20 rounded-2xl flex items-center justify-center text-secondary">
                <Bike className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[9px] uppercase font-extrabold text-muted-foreground block">Assigned Delivery Partner</span>
                <h4 className="text-sm font-bold text-foreground">{order.deliveryBoyName}</h4>
                <p className="text-[11px] text-muted-foreground font-mono">{order.deliveryBoyPhone || '+91 98765 43210'}</p>
              </div>
            </div>

            <a
              href={`tel:${order.deliveryBoyPhone || '9876543210'}`}
              className="px-4 py-2.5 bg-primary hover:bg-primary/90 text-white rounded-xl text-xs font-bold transition-all flex items-center gap-2 shadow-lg"
            >
              <Phone className="w-3.5 h-3.5" /> Call Valet
            </a>
          </div>
        )}

        {/* Order Details & Summary */}
        <div className="bg-card border border-border rounded-3xl p-6 space-y-4 shadow-xl text-xs">
          <h3 className="text-xs font-black uppercase tracking-widest text-muted-foreground border-b border-border pb-3">
            Order Summary
          </h3>

          <div className="space-y-2">
            {order?.items.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between text-slate-300 py-1">
                <span className="font-semibold">{item.qty}x {item.name}</span>
                <span className="font-mono font-bold text-white">₹{item.price * item.qty}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-800 pt-3 space-y-1.5 font-mono text-slate-400">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{order?.subtotal}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span className="text-emerald-400">{order?.deliveryFee === 0 ? 'FREE' : `₹${order?.deliveryFee}`}</span>
            </div>
            <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-slate-800/80 font-sans">
              <span>Total Paid</span>
              <span className="font-mono text-secondary">₹{order?.total}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
