'use client'

import PartnersImage from '$/index/partners/1.png'
import PartnersImage2 from '$/index/partners/2.png'
import PartnersImage3 from '$/index/partners/3.png'
import PartnersImage4 from '$/index/partners/4.png'
import PartnersImage5 from '$/index/partners/5.png'
import PartnersImage6 from '$/index/partners/6.png'
import PartnersImage7 from '$/index/partners/7.png'
import PartnersImage8 from '$/index/partners/8.png'
import PartnersImage9 from '$/index/partners/9.png'
import PartnersImage10 from '$/index/partners/10.png'

import {cn} from '@/lib/utils'

import Image from 'next/image'
import Marquee from '~/Module/Marquee'
import {H3} from '~/UI/Typography'

export default function Partners() {
  const partners = [PartnersImage, PartnersImage2, PartnersImage3, PartnersImage4, PartnersImage5, PartnersImage6, PartnersImage7, PartnersImage8, PartnersImage9, PartnersImage10]

  return (
    <section data-section="partners-index" className="relative space-y-6 pt-6">
      <div className={cn('absolute top-0 left-10 sm:left-4 z-20 size-fit px-4 sm:px-2 pt-2', 'bg-background')}>
        <H3>Our Course Partners</H3>
      </div>

      <div className={cn('relative flex overflow-hidden', 'px-6 pt-10 pb-8 sm:px-2 sm:pt-8 sm:pb-6 border border-foreground rounded-2xl')}>
        <Marquee>
          {partners.map((logo, idx) => (
            <div data-marquee="item" className="grid w-20 xl:w-16 sm:w-14 shrink-0 place-items-center" key={idx}>
              <Image className="s-full object-contain hover:scale-[1.05] duration-500" src={logo} alt="" width={100} height={100} />
            </div>
          ))}
        </Marquee>

        <div className="absolute top-0 left-0 w-[10%] h-full bg-gradient-to-r from-background via-background/90 to-background/5"></div>
        <div className="absolute top-0 right-0 w-[10%] h-full bg-gradient-to-l from-background via-background/90 to-background/5"></div>
      </div>
    </section>
  )
}
