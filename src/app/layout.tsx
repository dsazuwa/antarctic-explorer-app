import { Nunito_Sans } from 'next/font/google';

import { cn } from '@/lib/utils';
import './globals.css';

const font = Nunito_Sans({
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          font.className,
          'flex min-h-screen w-full flex-col bg-white text-neutral-600',
        )}
      >
        {children}
      </body>
    </html>
  );
}
