import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import 'material-symbols';
import React from 'react';
import ServerSideProvider from '@/components/ssr/ServerSideProvider';
import ClientSideProvider from '@/components/csr/ClientSideProvider';
import { cn } from '@/lib/utils';
import Header from '@/components/csr/Header';
import Footer from '@/components/csr/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'OpenSea, the largest NFT marketplace',
  authors: [
    {
      name: 'OpenSea',
      url: 'https://opensea.io',
    },
    {
      name: 'Mehmet Yiğit Yalım',
      url: 'https://www.mehmetyigityalim.com.tr',
    },
  ],
  description:
    "OpenSea is the world's first and largest web3 marketplace for NFTs and crypto collectibles. Browse, create, buy, sell, and auction NFTs using OpenSea today.",
  viewport:
    'width=device-width, initial-scale=1 minimum-scale=1, user-scalable=no',
  keywords: [
    'NFT',
    'NFTs',
    'non-fungible token',
    'non-fungible tokens',
    'crypto',
    'cryptocurrency',
    'cryptocurrencies',
    'blockchain',
    'ethereum',
    'ERC721',
    'ERC1155',
    'ERC20',
    'ERC721x',
  ],
  themeColor: '#ffffff',
};

type RootProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootProps): React.JSX.Element {
  return (
    <html lang='en'>
      <body className={cn(inter.className)}>
        <ServerSideProvider>
          <ClientSideProvider>
            <Header />
            {children}
            <Footer />
          </ClientSideProvider>
        </ServerSideProvider>
      </body>
    </html>
  );
}
