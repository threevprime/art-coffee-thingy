import type React from "react"
import type { Metadata } from "next"
import { Mona_Sans } from "next/font/google"
import { Young_Serif } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navigation from "@/components/navigation"
import MobileNavigation from "@/components/mobile-navigation"
import Footer from "@/components/footer"

const fontSans = Mona_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["200", "300", "400", "500", "600", "700"],
})

const fontSerif = Young_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: "400",
})

export const metadata: Metadata = {
  title: "Art Coffee | Ku aroma takohet me artin",
  description: "Art Coffee - Kafene artizanale në Shqipëri",
  icons: {
    icon: "/images/artcoffeelogo.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sq" suppressHydrationWarning>
      <body className={`${fontSans.variable} ${fontSerif.variable} font-sans bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
            <MobileNavigation />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
