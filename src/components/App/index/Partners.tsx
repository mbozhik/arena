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
import {H1, P} from '~/UI/Typography'

export default function Partners() {
  const partners = [PartnersImage, PartnersImage2, PartnersImage3, PartnersImage4, PartnersImage5, PartnersImage6, PartnersImage7, PartnersImage8, PartnersImage9, PartnersImage10]

  return (
    <section data-section="partners-index" className="">
      <P>Our Partners</P>

      <div className={cn('border-t-[1px] border-gray-light')}>
        <div className="relative flex overflow-hidden">
          <Marquee>
            {partners.map((logo, idx) => (
              <div data-marquee="item" className="grid w-40 xl:w-36 shrink-0 place-items-center" key={idx}>
                <H1>{idx}</H1>
                {/* <Image className="s-full object-contain hover:scale-[1.05] duration-300 saturate-0" src={logo} alt="" width={150} height={100} /> */}
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  )
}
