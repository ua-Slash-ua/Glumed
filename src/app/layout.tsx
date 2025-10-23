import type {Metadata} from "next";
import {Geist, Geist_Mono, Inter_Tight, Manrope} from "next/font/google";
import "./globals.css";
import "./reset.css";
import Header from "@/components/layouts/Header/Header";
import Footer from "@/components/layouts/Footer/Footer";
import Link from "next/link";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});
const manrope = Manrope({
    subsets: ["latin"],
    variable: "--font-manrope",
});

const interTight = Inter_Tight({
    subsets: ["latin"],
    variable: "--font-inter-tight",
});

export const metadata: Metadata = {
    title: "Glumed",
    icons: {
        icon: "/favicon.png",       // стандартний favicon
        shortcut: "/favicon.png",   // для старих браузерів
        apple: "/apple-touch-icon.png" // для iOS
    },
    description: "Glumed – допомагає організму ефективніше використовувати власний інсулін, покращує ендокринну та серцево-судинну системи.",
    keywords: ["Glumed", "інсулін", "здоров'я", "ендокринна система", "серцево-судинна система"],
    authors: [{name: "Glumed Team"}],
    creator: "Glumed",
    openGraph: {
        title: "Glumed",
        description: "Glumed – допомагає організму ефективніше використовувати власний інсулін.",
        url: "https://glumed.example.com",
        siteName: "Glumed",
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Glumed"
            }
        ],
        locale: "uk_UA",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Glumed",
        description: "Glumed – допомагає організму ефективніше використовувати власний інсулін.",
        images: ["/og-image.png"],
        creator: "@GlumedTeam"
    }
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <head>
            <link rel="icon" type="image/png" href="/favicon.png" />

            <script dangerouslySetInnerHTML={{
                __html: `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '2108917022972393');
      fbq('track', 'PageView');
    `
            }} />
            <noscript>
                <img height="1" width="1" style={{ display: 'none' }}
                     src="https://www.facebook.com/tr?id=2108917022972393&ev=PageView&noscript=1" />
            </noscript>
        </head>

        <body className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} ${interTight.variable}`}>
        <Header />
        {children}
        <Footer />
        </body>
        </html>
    );
}

