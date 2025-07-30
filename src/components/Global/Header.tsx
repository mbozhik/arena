import ArenaLogo from '$/logo.png'
import {AlignJustify} from 'lucide-react'

import {BOX} from '~/Global/Container'

import {cn} from '@/lib/utils'

import Link from 'next/link'
import Image from 'next/image'
import {P} from '~/UI/Typography'

export const WEBSITE_PATHS = ['Home', 'About', 'Courses', 'Services', 'Blog', 'Gallery', 'Contact']

export default function Header() {
  return (
    <header className={cn('fixed inset-0 z-[99]', 'pt-12 xl:pt-8 sm:pt-4 w-full h-fit')}>
      <div className={cn(BOX.header, 'px-12 py-6 xl:px-8 xl:py-5 sm:px-6 sm:py-4', 'flex justify-between items-center gap-32 xl:gap-24', 'bg-background border border-foreground rounded-full sm:rounded-2xl')}>
        <Link href="/">
          <Image className="w-[140px] xl:w-[110px] sm:w-[100px] object-contain" src={ArenaLogo} alt="logo" />
        </Link>

        <div className={cn('sm:hidden', 'flex-1', 'flex justify-around')}>
          {WEBSITE_PATHS.map((path) => (
            <Link href={path === 'Home' ? '/' : `/${path.toLowerCase()}`} key={path}>
              <P offset={0} className={cn('font-light', 'hover:opacity-80 duration-200')}>
                {path}
              </P>
            </Link>
          ))}
        </div>

        <div className="hidden sm:block">
          <AlignJustify className="size-7 text-foreground" />
        </div>
      </div>
    </header>
  )
}
