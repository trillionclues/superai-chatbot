import './globals.css';
import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import HeaderNav from '@/components/Header';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Superchat Chatbot',
  description: 'Moderate Chat, Manage Commands, and more!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={spaceGrotesk.className}>
        <header className='fixed top-0 left-0 right-0 md:px-24 px-32 py-2 bg-gradient-to-r from-[#DAC0A3] to-[#7C5E3F] z-50 border-b-2 border-[#F6F4EB]'>
          <div className='header-container w-full flex flex-row justify-between items-center space-x-5'>
            <HeaderNav />
          </div>
        </header>
        <main className='mt-[72px]'>{children}</main>
      </body>
    </html>
  );
}
