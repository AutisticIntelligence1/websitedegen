"use client";

import React from 'react';
import {
  ArrowUpRight,
  BarChart,
  ExternalLink,
  Flame,
  Percent,
  Wallet,
  Send as TelegramIcon,
} from 'lucide-react';
import Image from 'next/image';

const XIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white/80 hover:text-white transition-colors">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" 
          fill="currentColor"/>
  </svg>
);

const StatCard = ({ icon: Icon, value, label, gradient }) => (
  <div className={`p-6 rounded-3xl ${gradient} backdrop-blur-sm border border-white/10 hover:scale-105 transition-all duration-300`}>
    <div className="flex items-center gap-4">
      <div className="p-3 bg-white/15 rounded-xl">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div>
        <div className="text-2xl font-bold text-white">{value}</div>
        <div className="text-sm text-white/80">{label}</div>
      </div>
    </div>
  </div>
);

const InvestmentCard = ({ symbol, price, className }) => (
  <div className={`p-6 rounded-3xl backdrop-blur-sm border border-white/10 ${className} hover:scale-105 transition-all duration-300`}>
    <div className="flex items-center justify-between mb-4">
      <div className="text-xl font-bold text-white">{symbol}</div>
      <div className="text-sm text-white/80">Found at</div>
    </div>
    <div className="text-3xl font-bold text-cyan-300">${price}</div>
    <div className="mt-4 flex items-center gap-2 text-white/80">
      <ArrowUpRight className="w-4 h-4" />
      <span>Early Investment</span>
    </div>
  </div>
);

const TaxBreakdown = ({ type, details }) => (
  <div className="p-6 rounded-3xl bg-black/40 backdrop-blur-sm hover:bg-black/50 transition-all duration-300 border border-white/10">
    <div className="flex items-center gap-3 mb-4">
      <Percent className="w-5 h-5 text-cyan-300" />
      <h3 className="text-lg font-semibold text-white">{type} Tax (4%)</h3>
    </div>
    <div className="space-y-3">
      {details.map((item, index) => (
        <div key={index} className="flex justify-between items-center text-sm">
          <span className="text-white/80">{item.label}</span>
          <span className="text-cyan-300 font-medium">{item.value}%</span>
        </div>
      ))}
    </div>
  </div>
);

const RevenueAllocation = ({ percentage, title, description }) => (
  <div className="p-6 rounded-3xl bg-black/40 backdrop-blur-sm border border-white/10 hover:scale-105 transition-all duration-300">
    <div className="text-3xl font-bold text-cyan-300 mb-2">{percentage}%</div>
    <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
    <p className="text-sm text-white/80">{description}</p>
  </div>
);

export default function DegenCapital() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-[#0a192f] to-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-black/40 backdrop-blur-lg border-b border-white/10 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-cyan-500/20 flex items-center justify-center">
                <Image src="/logo.jpg" alt="Degen Capital Logo" width={40} height={40} className="w-full h-full object-cover" />
              </div>
              <span className="text-xl font-bold text-white">Degen Capital</span>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300"
              >
                <XIcon />
              </a>
              <a 
                href="https://t.me/DGC_Portal"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300"
              >
                <TelegramIcon className="w-5 h-5 text-white/80 hover:text-white" />
              </a>
              <a 
                href="https://debank.com/profile/0x9fb76d37de2ed2c1b339fc4451044aff33049a8a"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-cyan-500/20"
              >
                Portfolio <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Community-Driven Crypto Investment Fund
            </h1>
            <p className="text-xl text-white/80 mb-12 leading-relaxed">
              Degen Capital ($DGC) provides a structured and community-oriented investment approach, 
              focusing on early-stage, revenue-generating projects with substantial growth potential.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://debank.com/profile/0x9fb76d37de2ed2c1b339fc4451044aff33049a8a"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-cyan-500/20"
              >
                View Portfolio <ExternalLink className="w-5 h-5" />
              </a>
              <a 
                href="https://degen-capital.gitbook.io/degen-capital"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl bg-white/10 text-white font-medium hover:bg-white/20 transition-all duration-300 border border-white/10 flex items-center gap-2"
              >
                View Whitepaper <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard
              icon={BarChart}
              value="1,000,000"
              label="Max Supply"
              gradient="bg-gradient-to-br from-cyan-500/20 to-blue-900/20"
            />
            <StatCard
              icon={Flame}
              value="100%"
              label="LP Burned"
              gradient="bg-gradient-to-br from-cyan-600/20 to-blue-900/20"
            />
            <StatCard
              icon={Wallet}
              value="150 $DGC"
              label="NFT Price"
              gradient="bg-gradient-to-br from-cyan-700/20 to-blue-900/20"
            />
          </div>
        </div>
      </section>

      {/* Investment Track Record */}
      <section className="py-20 px-6 bg-black/20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-white">Investment Track Record</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <InvestmentCard symbol="PALM" price="0.01" className="bg-gradient-to-br from-cyan-500/20 to-blue-900/20" />
            <InvestmentCard symbol="MOCK" price="0.3" className="bg-gradient-to-br from-cyan-600/20 to-blue-900/20" />
            <InvestmentCard symbol="HEDGE" price="0.00028" className="bg-gradient-to-br from-cyan-700/20 to-blue-900/20" />
            <InvestmentCard symbol="BOTON" price="0.00004" className="bg-gradient-to-br from-cyan-800/20 to-blue-900/20" />
            <InvestmentCard symbol="ZGEN" price="0.001" className="bg-gradient-to-br from-cyan-900/20 to-black/20" />
          </div>
        </div>
      </section>

      {/* Tax Structure */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-white">Transaction Tax Structure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TaxBreakdown
              type="Buy"
              details={[
                { label: "Liquidity Pool", value: 1 },
                { label: "DGC Wallet", value: 2 },
                { label: "Team", value: 1 }
              ]}
            />
            <TaxBreakdown
              type="Sell"
              details={[
                { label: "Liquidity Pool", value: 1 },
                { label: "DGC Wallet", value: 2 },
                { label: "Team", value: 1 }
              ]}
            />
          </div>
        </div>
      </section>

      {/* Revenue Allocation */}
      <section className="py-20 px-6 bg-black/20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-white">Revenue Allocation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <RevenueAllocation
              percentage={50}
              title="NFT Holders"
              description="Distributed among Mr. D NFT holders"
            />
            <RevenueAllocation
              percentage={35}
              title="Reinvestment"
              description="Reinvested in high-potential projects"
            />
            <RevenueAllocation
              percentage={15}
              title="Team"
              description="Allocated for project growth and sustainability"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-black/60 border-t border-white/10">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="text-white/50 text-sm"> 2024 Degen Capital. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="text-white/50 hover:text-white transition-colors">X</a>
              <a href="https://t.me/DGC_Portal" className="text-white/50 hover:text-white transition-colors">Telegram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
