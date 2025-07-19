import type {Metadata} from 'next'

import {Plus_Jakarta_Sans} from 'next/font/google'

export const metadata: Metadata = {
  title: {
    template: '%s — Arena Web Security',
    default: 'Arena Web Security, The First & Most Trusted Cybersecurity Company in Bangladesh',
  },
  robots: {
    index: false,
    follow: false,
  },
}

export const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-plus-jakarta-sans',
  preload: true,
  subsets: ['latin'],
})
