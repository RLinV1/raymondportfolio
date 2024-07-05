import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { NavbarDemo } from "@/components/ui/NavbarMenu";
import { Footer } from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Raymond's Portfolio",
  description: "Minimalistic Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}> 
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <NavbarDemo />
            {children}
            <Footer />
            <Analytics />
            <SpeedInsights />     
        </ThemeProvider>
       

      </body>
    </html>
  );
}
