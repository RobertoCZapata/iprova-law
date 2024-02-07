'use client'
import { Inter } from "next/font/google";
import ResponsiveAppBar from './Appbar/Appbar';
import { usePathname } from 'next/navigation';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/login';
  return (
    <html lang="en">
      <head>
        <title>iProva App</title>
        <meta name='description' content='iProva App' />
      </head>
      <body className={inter.className}>
        {!isLoginPage && <ResponsiveAppBar />}
        {children}</body>
    </html>
  );
}
