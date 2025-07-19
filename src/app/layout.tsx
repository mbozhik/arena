export {metadata} from '@/lib/layout-config'
import {plusJakartaSans} from '@/lib/layout-config'
import '@/app/globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} antialiased`}>{children}</body>
    </html>
  )
}
