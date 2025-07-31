'use client'

import ArenaLogo from '$/logo.svg'
import FacebookIcon from '$/socials/facebook.svg'
import LinkedinIcon from '$/socials/linkedin.svg'
import YoutubeIcon from '$/socials/youtube.svg'

import {ArrowRight, MapPin, Phone, Mail} from 'lucide-react'

import {WEBSITE_PATHS} from '~/Global/Header'
import {BOX} from '~/Global/Container'
import {GRADIENT} from '~/UI/Button'

import {cn} from '@/lib/utils'

import {usePathname} from 'next/navigation'

import Link from 'next/link'
import Image from 'next/image'
import {H2, H6, P, SPAN} from '~/UI/Typography'
import {ActionHero} from '~~/index/Hero'

const SOCIALS = {
  facebook: {
    link: 'https://www.facebook.com/arenawebsecurity',
    icon: FacebookIcon,
  },
  linkedin: {
    link: 'https://www.linkedin.com/company/arena-web-security',
    icon: LinkedinIcon,
  },
  youtube: {
    link: 'https://www.youtube.com/channel/arena-web-security',
    icon: YoutubeIcon,
  },
}

const CONTACTS = {
  location: {
    icon: MapPin,
    items: [
      {
        link: 'https://maps.app.goo.gl/7JznEHWYrwBRKdnC8',
        text: 'House No: 1, Block: B Banasree, Main Road, Rampura, Dhaka - 1219',
      },
    ],
  },
  tel: {
    icon: Phone,
    items: [
      {
        link: 'tel:+8801310333444',
        text: '+8801310333444',
      },
      {
        link: 'tel:+8801885841489',
        text: '+8801885841489',
      },
    ],
  },
  mail: {
    icon: Mail,
    items: [
      {
        link: 'mailto:info@arenawebsecurity.net',
        text: 'info@arenawebsecurity.net',
      },
    ],
  },
}

export default function Footer() {
  const isStudioPage = usePathname()?.startsWith('/studio') && 'hidden'

  return (
    <footer className={cn(isStudioPage, 'relative', 'pt-[25vh] pb-[10vh]', 'mt-[45vh] sm:mt-[40vh]', 'bg-[#360B98]')}>
      <div className={cn('absolute -top-[25vh] xl:-top-[30vh] left-0 w-full h-fit px-28 sm:px-4', 'grid place-items-center')}>
        <div className={cn(GRADIENT, 'w-full py-16 xl:py-14 sm:px-4 sm:py-8 space-y-12', 'rounded-3xl sm:rounded-2xl')}>
          <div className="space-y-4 text-center text-white">
            <H2 offset={0} className="max-w-[20ch] mx-auto tracking-tighter !leading-[1.25]">
              Become part of the cybersecurity revolution
            </H2>

            <P offset={0} className="font-normal">
              <mark className="font-bold">Ready to join the legacy?</mark> Let Arena Web Security be your gateway to a high-impact cybersecurity career.
            </P>
          </div>

          <ActionHero view="footer" />
        </div>
      </div>

      <div className={cn(BOX.container, 'grid grid-cols-5 sm:flex sm:flex-col-reverse sm:gap-10', 'pt-20', 'text-white')}>
        <div className={cn('col-span-2', 'space-y-8')}>
          <Image className="w-[150px] xl:w-[120px] sm:w-[110px] object-contain" src={ArenaLogo} alt="logo" />

          <SPAN className="block">
            Arena Web Security is the first and most trusted <br /> cyber security company in Bangladesh, established in 2012.
          </SPAN>

          <div className="flex items-center gap-4">
            {Object.values(SOCIALS).map((social) => (
              <Link className="group" href={social.link} target="_blank" rel="noopener noreferrer" key={social.link}>
                <Image className="group-hover:scale-[1.1] duration-300" src={social.icon} alt={social.link} />
              </Link>
            ))}
          </div>

          <SPAN className="block !text-xs">© 2025 ArenaWebSecurity - All Right Reserved</SPAN>
        </div>

        <div className="space-y-5 sm:hidden">
          <H6>Information</H6>

          <div className="space-y-2.5">
            {WEBSITE_PATHS.map((path) => (
              <Link className="flex items-center gap-1.5 group" href={path === 'Home' ? '/' : `/${path.toLowerCase()}`} key={path}>
                <ArrowRight className="size-5" strokeWidth={1.5} />

                <SPAN offset={0} className={cn('font-normal', 'group-hover:translate-x-1 duration-300')}>
                  {path}
                </SPAN>
              </Link>
            ))}
          </div>
        </div>

        <div></div>

        <div className="space-y-5">
          <H6>Contact Us</H6>

          <div className="space-y-6">
            {Object.values(CONTACTS).map((contact, idx) => (
              <div className="grid grid-cols-6 items-center xl:gap-10 sm:gap-0 sm:pr-4" key={idx}>
                <contact.icon className={cn('col-span-1', 'size-8 aspect-square')} strokeWidth={1.5} />

                <div className="col-span-5 space-y-1">
                  {contact.items.map((item) => (
                    <Link className="group" href={item.link} target="_blank" rel="noopener noreferrer" key={item.link}>
                      <SPAN offset={0} className={cn('font-normal', 'group-hover:underline')}>
                        {item.text}
                      </SPAN>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
