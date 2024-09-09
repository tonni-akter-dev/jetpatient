import 'react-loading-skeleton/dist/skeleton.css'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import favIcon from "@/assets/favicon.ico"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-day-picker/dist/style.css';
import Layout from '@/components/Layout/Layout';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JetPatient",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href={`${favIcon}`} />
      </Head>
      
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
