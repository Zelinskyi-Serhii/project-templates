import type { Metadata } from 'next';

import { Providers } from '@/redux/provider';

import './globals.css';

export const metadata: Metadata = {
  title: 'Next App with RTK',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
