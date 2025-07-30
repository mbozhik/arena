import RatingImage from '$/index/rating/1.png'
import RatingImage2 from '$/index/rating/2.png'
import RatingImage3 from '$/index/rating/3.png'

import {Star} from 'lucide-react'

import {cn} from '@/lib/utils'

import Image from 'next/image'
import {H1, P} from '~/UI/Typography'
import Button from '~/UI/Button'
import Background from '~/Global/Background'

export function ActionHero({view}: {view: 'hero' | 'footer'}) {
  const isHero = view === 'hero'
  return (
    <div className={cn('w-full', 'flex sm:flex-col items-center justify-center gap-10 xl:gap-6')}>
      <Button variant={isHero ? 'primary' : 'muted'} text="Apply now" />

      <div className="flex items-center gap-2">
        <div className="flex -space-x-4 sm:-space-x-2">
          {[RatingImage, RatingImage2, RatingImage3].map((image, i) => {
            return <Image className="size-14 xl:size-12 sm:size-10 object-contain" src={image} alt="" key={i} />
          })}
        </div>

        <div className="flex flex-col items-start gap-1">
          <div className="flex gap-0.25">
            {[...Array(5)].map((_, i) => {
              return <Star className={cn('size-5 xl:size-4 sm:size-3', isHero ? 'fill-purple-highlight text-purple-highlight' : 'fill-white-purple text-white-purple')} key={i} />
            })}
          </div>

          <div className={cn('text-xs sm:text-[10px] font-semibold opacity-80', isHero ? 'text-white-purple' : 'text-white')}>( 10k+ Reviews )</div>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section data-section="hero-index" className={cn('min-h-screen sm:px-4', 'relative grid place-items-center')}>
      <div className={cn('flex flex-col items-center gap-12 xl:gap-10 sm:gap-8', 'text-center')}>
        <div className="space-y-6 sm:mt-12">
          <H1>
            <span className="text-purple-highlight">Arena Web Security</span> <br className="sm:hidden" />— the Hacker’s Arena
          </H1>

          <P animated={false} className="max-w-[85ch] xl:max-w-[70ch] sm:max-w-none sm:line-clamp-4">
            Arena Web Security is the first and most trusted cyber security company in Bangladesh, established in 2012. Over the years, Arena has provided advanced Cyber Security Services and Professional Training to clients across the globe - including the Government and Ministries of Bangladesh, Military, Banking Sector, Educational Institutions, and Private Organizations.
          </P>
        </div>

        <ActionHero view="hero" />

        <Background page="index" />
      </div>
    </section>
  )
}
