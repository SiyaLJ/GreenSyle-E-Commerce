import "./globals.css"
import { Inter } from "next/font/google"
import { Navbar } from "./components/navbar"
import { Footer } from "./components/footer"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Green Style",
  description: "Eco-friendly e-commerce platform supporting the Go Green campaign",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="container mx-auto px-4 py-8 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}


