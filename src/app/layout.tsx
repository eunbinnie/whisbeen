import '@/app/styles/globals.css';

import type { Metadata } from 'next';

import { pretendard } from '@/lib/fonts';

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
