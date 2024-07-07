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
      <body className={`bg-black-200 ${inter.className}`}> 
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/* Check vercel to see the rollback. Putting the navbar here is better but im too lazy to fix the 
            bg color issue */}
            {children}
            <Analytics />
            <SpeedInsights />     
        </ThemeProvider>
       

      </body>
    </html>
  );
}
