'use client'

import { useState } from 'react'
import {
  LayoutDashboard,
  Boxes,
  History,
  Truck,
  FileSpreadsheet,
  RotateCcw,
  BarChart3,
  FileText,
  ShieldAlert,
  UserCheck
} from 'lucide-react'
import { InventoryDashboard } from './dashboard'
import { InventoryTable } from './inventory-table'
import { StockOperations } from './operations'
import { SupplierManagement } from './suppliers'
import { PurchaseOrderManager } from './purchase-orders'
import { ReturnsManager } from './returns'
import { InventoryReports } from './reports'
import { InventoryAnalyticsView } from './analytics'

export type InventoryTab =
  | 'dashboard'
  | 'inventory'
  | 'movements'
  | 'suppliers'
  | 'purchase_orders'
  | 'returns'
  | 'reports'
  | 'analytics'

export type UserRole = 'super_admin' | 'inventory_manager' | 'warehouse_staff'

export function EnterpriseInventory() {
  const [activeTab, setActiveTab] = useState<InventoryTab>('dashboard')
  const [userRole, setUserRole] = useState<UserRole>('super_admin')

  const tabs: { id: InventoryTab; label: string; icon: any }[] = [
    { id: 'dashboard', label: 'Overview', icon: LayoutDashboard },
    { id: 'inventory', label: 'Stock & Variants', icon: Boxes },
    { id: 'movements', label: 'Movements & Audit', icon: History },
    { id: 'suppliers', label: 'Vendors', icon: Truck },
    { id: 'purchase_orders', label: 'POs & Intake', icon: FileSpreadsheet },
    { id: 'returns', label: 'Returns & Restock', icon: RotateCcw },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'reports', label: 'Exports & Reports', icon: FileText }
  ]

  return (
    <div className="space-y-6 font-sans">
      {/* Top Header Bar & Role Selector */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xl">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <span className="px-2.5 py-0.5 bg-secondary/20 border border-secondary/40 text-secondary text-[10px] font-extrabold uppercase tracking-widest rounded-full">
              Enterprise Suite v2.4
            </span>
            <span className="text-slate-500 text-xs font-semibold">Real-Time Sync</span>
          </div>
          <h1 className="text-2xl font-black text-white tracking-tight flex items-center gap-2">
            Stock & Inventory Control Engine
          </h1>
          <p className="text-slate-400 text-xs">
            Multi-location inventory tracking, automated reordering, vendor purchasing, and real-time audit logs.
          </p>
        </div>

        {/* RBAC Role Switcher */}
        <div className="flex items-center gap-3 bg-slate-950/80 p-2 rounded-xl border border-slate-800">
          <div className="flex items-center gap-2 px-2 text-slate-400">
            <UserCheck className="w-4 h-4 text-secondary" />
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300">Role:</span>
          </div>
          <div className="flex gap-1">
            {[
              { id: 'super_admin', label: 'Super Admin' },
              { id: 'inventory_manager', label: 'Manager' },
              { id: 'warehouse_staff', label: 'Staff' }
            ].map((role) => (
              <button
                key={role.id}
                onClick={() => setUserRole(role.id as UserRole)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  userRole === role.id
                    ? 'bg-secondary text-white font-bold shadow-md shadow-secondary/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-900'
                }`}
              >
                {role.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Sub-Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-800 no-scrollbar">
        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-xs font-bold transition-all whitespace-nowrap border ${
                isActive
                  ? 'bg-slate-900 border-secondary text-white shadow-lg shadow-secondary/10'
                  : 'bg-slate-950/60 border-slate-850 text-slate-400 hover:border-slate-800 hover:text-slate-200'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-secondary' : 'text-slate-500'}`} />
              {tab.label}
            </button>
          )
        })}
      </div>

      {/* Active Tab Component Render */}
      <div className="mt-6">
        {activeTab === 'dashboard' && <InventoryDashboard userRole={userRole} onNavigate={(tab) => setActiveTab(tab)} />}
        {activeTab === 'inventory' && <InventoryTable userRole={userRole} />}
        {activeTab === 'movements' && <StockOperations userRole={userRole} />}
        {activeTab === 'suppliers' && <SupplierManagement userRole={userRole} />}
        {activeTab === 'purchase_orders' && <PurchaseOrderManager userRole={userRole} />}
        {activeTab === 'returns' && <ReturnsManager userRole={userRole} />}
        {activeTab === 'analytics' && <InventoryAnalyticsView userRole={userRole} />}
        {activeTab === 'reports' && <InventoryReports userRole={userRole} />}
      </div>
    </div>
  )
}
