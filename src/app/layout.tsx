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
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} ${interTight.variable}`}>
        <Header />
        {children}
        <Footer />
        </body>
        </html>
    );
}

