"use client";

import React, { useState, useEffect } from 'react';
import { ArrowRight, BarChart3, Lock, Users, Wallet, Rocket, TrendingUp, ChartBar, Star, Shield, Clock, Target, Globe, Ship, Send, Sun, Moon, Info } from 'lucide-react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date("2024-12-01").getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
      <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
        {Object.entries(timeLeft).map(([key, value]) => (
            <div key={key} className="bg-zinc-800/50 p-4 rounded-lg text-center hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-emerald-400">{value}</div>
              <div className="text-sm text-zinc-500 capitalize">{key}</div>
            </div>
        ))}
      </div>
  );
};

// Helper Components
const TaxInfoModal = ({ onClose }) => (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="bg-zinc-800 p-6 rounded-lg max-w-md w-full mx-4">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <BarChart3 className="text-emerald-400" />
          Transaction Tax Structure
        </h3>
        <div className="space-y-4">
          <div className="p-4 bg-zinc-800/30 rounded-lg">
            <h4 className="font-semibold text-emerald-400 mb-2">Buy Tax (4%)</h4>
            <ul className="space-y-2 text-zinc-300">
              <li className="flex justify-between">
                <span>Liquidity Pool</span>
                <span>1%</span>
              </li>
              <li className="flex justify-between">
                <span>Investment Fund</span>
                <span>2%</span>
              </li>
              <li className="flex justify-between">
                <span>Operations</span>
                <span>1%</span>
              </li>
            </ul>
          </div>
          <div className="p-4 bg-zinc-800/30 rounded-lg">
            <h4 className="font-semibold text-emerald-400 mb-2">Sell Tax (4%)</h4>
            <ul className="space-y-2 text-zinc-300">
              <li className="flex justify-between">
                <span>Liquidity Pool</span>
                <span>1%</span>
              </li>
              <li className="flex justify-between">
                <span>Investment Fund</span>
                <span>2%</span>
              </li>
              <li className="flex justify-between">
                <span>Operations</span>
                <span>1%</span>
              </li>
            </ul>
          </div>
        </div>
        <button
            onClick={onClose}
            className="mt-6 w-full bg-emerald-400 text-black font-semibold py-2 rounded-lg hover:bg-emerald-500 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
);

const BenefitCard = ({ icon, title, description, footer }) => (
    <div className="p-6 bg-zinc-800/30 rounded-lg border border-emerald-400/20 hover:border-emerald-400/40 transition-all hover:scale-105 group">
      <div className="text-emerald-400 w-8 h-8 mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-zinc-400">{description}</p>
      <div className="mt-4 text-emerald-400 text-sm">{footer}</div>
    </div>
);

const Stat = ({ icon, value, label, additionalContent }) => (
    <div className="p-4 bg-zinc-800/50 rounded-lg hover:bg-zinc-800 transition-colors">
      <div className="flex items-center gap-2 text-emerald-400 mb-2">{icon}</div>
      <div className="text-2xl font-bold mb-1">{value}</div>
      <div className="text-sm text-zinc-400">{label}</div>
      {additionalContent}
    </div>
);

const Feature = ({ icon, title, description }) => (
    <div className="p-4 bg-zinc-800/30 rounded-lg hover:bg-zinc-800/50 transition-colors">
      <div className="flex items-center gap-3">
        <div className="text-emerald-400">{icon}</div>
        <div>
          <h4 className="font-semibold mb-1">{title}</h4>
          <p className="text-sm text-zinc-400">{description}</p>
        </div>
      </div>
    </div>
);

const Step = ({ number, title, description }) => (
    <div className="flex items-start gap-4">
      <div className="text-emerald-400 font-bold">{number}</div>
      <div>
        <h4 className="font-semibold mb-1">{title}</h4>
        <p className="text-sm text-zinc-400">{description}</p>
      </div>
    </div>
);

const TaxBarSimple = ({ label, value }) => (
    <div className="flex justify-between items-center text-sm">
      <span className="text-zinc-400">{label}</span>
      <span className="text-emerald-400">{value}</span>
    </div>
);

const DegenCapital = () => {
  const [theme, setTheme] = useState('dark');
  const [showTaxInfo, setShowTaxInfo] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
      <div className="min-h-screen bg-zinc-900 text-white relative">
        {showTaxInfo && <TaxInfoModal onClose={() => setShowTaxInfo(false)} />}

        {/* Theme Toggle */}
        <button
            onClick={toggleTheme}
            className="fixed top-6 right-24 p-3 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-all z-50"
        >
          {theme === 'dark' ?
              <Sun className="text-emerald-400 w-5 h-5" /> :
              <Moon className="text-emerald-400 w-5 h-5" />
          }
        </button>

        {/* Fixed Social Sidebar */}
        <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50">
          <div className="flex flex-col gap-4">
            <a
                href="#"
                className="p-3 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors group"
                target="_blank"
                rel="noopener noreferrer"
            >
              <svg className="text-emerald-400 w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a
                href="https://t.me/DGC_Portal"
                className="p-3 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors group"
                target="_blank"
                rel="noopener noreferrer"
            >
              <Send className="text-emerald-400 w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a
                href="#"
                className="p-3 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors group relative"
                target="_blank"
                rel="noopener noreferrer"
            >
              <Ship className="text-emerald-400 w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-zinc-800 px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            Coming Soon
                        </span>
            </a>
            <a
                href="https://degen-capital.gitbook.io/degen-capital"
                className="p-3 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors group"
                target="_blank"
                rel="noopener noreferrer"
            >
              <svg
                  className="text-emerald-400 w-5 h-5 group-hover:scale-110 transition-transform"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
              >
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Hero Section */}
        <header className="container mx-auto px-4 py-12">
          <nav className="flex justify-between items-center mb-16">
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8 hover:rotate-12 transition-transform" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 15 C35 15 25 25 25 40 C25 45 26 50 30 55 L30 70 L70 70 L70 55 C74 50 75 45 75 40 C75 25 65 15 50 15" fill="currentColor"/>
                <rect x="30" y="45" width="40" height="12" fill="black"/>
                <circle cx="60" cy="48" r="2" fill="currentColor"/>
                <path d="M20 70 L80 70 L80 85 C80 90 75 95 70 95 L30 95 C25 95 20 90 20 85 Z" fill="currentColor"/>
                <path d="M15 40 L25 40 M75 40 L85 40" stroke="currentColor" strokeWidth="4"/>
              </svg>
              <h1 className="text-2xl font-bold">Degen Capital</h1>
            </div>
            <div className="flex gap-4">
              <button className="px-3 py-1.5 text-sm text-white/70 hover:text-white transition-colors">NFTs</button>
            </div>
          </nav>

          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-400/10 rounded-full text-emerald-400 text-sm mb-6">
              <Star size={14} />
              <span>Limited NFT Collection</span>
            </div>
            <h2 className="text-5xl font-bold mb-4">
              Community-Driven Crypto-fund <span className="text-emerald-400">$DGC</span>
            </h2>
            <p className="text-lg text-zinc-400 mb-12 max-w-2xl">
              Join an exclusive community of NFT holders earning automatic distributions from our investment fund.
            </p>

            {/* Countdown Timer */}
            <div className="w-full mb-12">
              <h3 className="text-xl font-bold mb-6">NFT Mint Opens In</h3>
              <CountdownTimer />
            </div>
          </div>
        </header>

        {/* NFT Benefits */}
        <section className="bg-zinc-800/50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12 flex items-center justify-center gap-3">
                <Star className="text-emerald-400" />
                Mr. D NFT Benefits
                <Star className="text-emerald-400" />
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <BenefitCard
                    icon={<Wallet />}
                    title="50% Profit Share"
                    description="Direct distribution of investment returns to your wallet"
                    footer="Automatic payments"
                />
                <BenefitCard
                    icon={<Target />}
                    title="Early Access"
                    description="First look at new investment opportunities and partnerships"
                    footer="Priority allocation"
                />
                <BenefitCard
                    icon={<Users />}
                    title="Exclusive Community"
                    description="Access to private investment community and analysis"
                    footer="Network with pros"
                />
              </div>
              <div className="bg-zinc-800/30 rounded-lg p-6 border border-emerald-400/20">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold">How to Join</h3>
                  <div className="text-emerald-400">Mint Price: 150 $DGC</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Step number="01" title="Mint NFT" description="Mint your Mr. D NFT to join the fund" />
                  <Step number="02" title="Hold & Earn" description="Automatic revenue distribution to holders" />
                  <Step number="03" title="Community" description="Access exclusive investment insights" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Stat icon={<Users />} value="1,000,000" label="Max Supply" />
            <div onClick={() => setShowTaxInfo(true)} className="cursor-pointer">
              <Stat
                  icon={<ChartBar />}
                  value="4% / 4%"
                  label="Buy/Sell Tax"
                  additionalContent={
                    <div className="text-xs text-emerald-400 mt-1 flex items-center gap-1">
                      <Info size={12} />
                      Click for details
                    </div>
                  }
              />
            </div>
            <Stat icon={<Target />} value="100%" label="LP Burned" />
            <Stat icon={<Star />} value="150 $DGC" label="NFT Entry" />
          </div>
        </section>

        {/* Investment Protection Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Shield className="text-emerald-400" /> Investment Protection
              </h3>
              <Feature
                  icon={<Lock />}
                  title="Secure Asset Management"
                  description="Multi-signature wallet system ensuring fund security"
              />
              <Feature
                  icon={<TrendingUp />}
                  title="Growth Strategy"
                  description="Focus on early-stage projects with high upside potential"
              />
              <Feature
                  icon={<Clock />}
                  title="Timely Execution"
                  description="Quick deployment in emerging opportunities"
              />
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <BarChart3 className="text-emerald-400" /> Tax Structure
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-zinc-800/50 rounded-lg">
                  <h4 className="font-semibold mb-2">Buy Tax (4%)</h4>
                  <div className="space-y-2">
                    <TaxBarSimple label="Liquidity" value="1%" />
                    <TaxBarSimple label="Investment Fund" value="2%" />
                    <TaxBarSimple label="Operations" value="1%" />
                  </div>
                </div>
                <div className="p-4 bg-zinc-800/50 rounded-lg">
                  <h4 className="font-semibold mb-2">Sell Tax (4%)</h4>
                  <div className="space-y-2">
                    <TaxBarSimple label="Liquidity" value="1%" />
                    <TaxBarSimple label="Investment Fund" value="2%" />
                    <TaxBarSimple label="Operations" value="1%" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-zinc-800 py-6">
          <div className="container mx-auto px-4 text-center text-zinc-500 text-sm">
            © 2024 Degen Capital
          </div>
        </footer>
      </div>
  );
};

export default DegenCapital;