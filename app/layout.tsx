import type React from "react"
import "@/styles/globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Badda ko Adda - A Perfect Blend of Comfort & Taste",
  description: "Experience the finest selection of artisanal coffee and premium teas in a cozy atmosphere.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

