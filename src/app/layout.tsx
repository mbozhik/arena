export {metadata} from '@/lib/layout-config'
import {plusJakartaSans} from '@/lib/layout-config'
import '@/app/globals.css'

import {cn} from '@/lib/utils'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn(plusJakartaSans.variable, 'bg-background text-foreground font-sans', 'antialiased')}>{children}</body>
    </html>
  )
}
