import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Degen Capital',
  description: 'Community-Driven Crypto-fund',
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
      <body className="bg-zinc-900">{children}</body>
      </html>
  );
}