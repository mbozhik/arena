import HeroImage from '$/index/hero.png'
import HeroImageMobile from '$/index/hero-mobile.png'
import RatingImage from '$/index/rating/1.png'
import RatingImage2 from '$/index/rating/2.png'
import RatingImage3 from '$/index/rating/3.png'

import {Star} from 'lucide-react'

import {cn} from '@/lib/utils'

import Image from 'next/image'
import {H1, P} from '~/UI/Typography'

export default function Hero() {
  return (
    <section data-section="hero-index" className={cn('min-h-screen sm:px-4', 'relative grid place-items-center')}>
      <div className={cn('flex flex-col items-center gap-12 xl:gap-10 sm:gap-8', 'text-center')}>
        <div className="space-y-6">
          <H1 className="text-white">
            <span className="text-purple-highlight">Arena Web Security</span> <br className="sm:hidden" />— the Hacker’s Arena
          </H1>

          <P animated={false} className="max-w-[85ch] xl:max-w-[70ch] sm:max-w-none sm:line-clamp-4">
            Arena Web Security is the first and most trusted cyber security company in Bangladesh, established in 2012. Over the years, Arena has provided advanced Cyber Security Services and Professional Training to clients across the globe - including the Government and Ministries of Bangladesh, Military, Banking Sector, Educational Institutions, and Private Organizations.
          </P>
        </div>

        <div className={cn('w-full', 'flex sm:flex-col items-center justify-center gap-10 xl:gap-6')}>
          <button className={cn('block px-16 xl:px-12 py-6 xl:py-4 sm:w-full', 'bg-gradient-to-r from-[#CA82FA] via-[#875BE7] to-[#3B70E9] rounded-full')}>
            <P className="text-white font-semibold">Apply now</P>
          </button>

          <div className="flex items-center gap-2">
            <div className="flex -space-x-4 sm:-space-x-2">
              {[RatingImage, RatingImage2, RatingImage3].map((image, i) => {
                return <Image className="size-14 xl:size-12 sm:size-10 object-contain" src={image} alt="" key={i} />
              })}
            </div>

            <div className="flex flex-col items-start gap-1">
              <div className="flex gap-0.25">
                {[...Array(5)].map((_, i) => {
                  return <Star className={cn('size-5 xl:size-4 sm:size-3 fill-purple-highlight text-purple-highlight')} key={i} />
                })}
              </div>

              <div className="text-xs sm:text-[10px] font-semibold opacity-80">( 10k+ Reviews )</div>
            </div>
          </div>
        </div>

        <Image quality={100} className={cn('sm:hidden', 'absolute inset-0 -z-20', 'size-full object-cover')} src={HeroImage} alt="" />
        <Image quality={100} className={cn('hidden sm:block', 'absolute inset-0 -z-20', 'size-full object-cover')} src={HeroImageMobile} alt="" />
      </div>
    </section>
  )
}
