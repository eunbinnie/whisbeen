import type { Metadata } from 'next';

import { pretendard } from '@/lib/fonts';

import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Whisbeen',
  description: 'Who is been? Whisbeen',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={pretendard.className}>{children}</body>
    </html>
  );
}
