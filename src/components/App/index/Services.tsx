'use client'

import {SERVICES} from '@/content'
import {useState} from 'react'

import {useMediaQuery} from '@/utils/use-media-query'
import {cn} from '@/lib/utils'

import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay} from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/autoplay'

import {H2, H3, P} from '~/UI/Typography'
// import Button from '~/UI/Button'

export default function Services({container}: {container: string}) {
  const [activeIndex, setActiveIndex] = useState(0)

  const isDesktop = useMediaQuery('(min-width: 768px)')

  const getSlideStyle = (index: number) => {
    const distance = Math.abs(index - activeIndex)

    if (distance === 0) {
      return {
        transform: 'scale(1)',
        filter: 'blur(0px)',
        opacity: 1,
        zIndex: 10,
      }
    } else if (distance === 1) {
      return {
        transform: 'scale(0.8)',
        filter: 'blur(1.5px)',
        opacity: 0.7,
        zIndex: 5,
      }
    } else {
      return {
        transform: 'scale(0.8)',
        filter: 'blur(1.5px)',
        opacity: 0.6,
        zIndex: 1,
      }
    }
  }

  return (
    <section data-section="services-index" className={cn('relative', 'bg-[#22164D]', 'mt-28 xl:mt-20 sm:mt-16')}>
      <div className={cn('space-y-16 xl:space-y-12 sm:space-y-6', 'py-16 xl:py-12 sm:py-6')}>
        <div className={cn(container, 'space-y-6 xl:space-y-4 sm:space-y-2')}>
          <H2>
            Our <mark>Services</mark>
          </H2>

          <P>Get motivation from leaders and see your success from the window!</P>
        </div>

        <div data-block="slider-services-index" className="relative sm:px-4">
          <Swiper
            className="services-slider"
            slidesPerView={isDesktop ? 3 : 1}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
            }}
            grabCursor={true}
            loop={true}
            speed={700}
            modules={[Autoplay]}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
          >
            {SERVICES.map((service, idx) => (
              <SwiperSlide key={idx}>
                <div className={cn('relative', 'px-8 py-12 sm:px-4 sm:py-8 h-full', 'flex flex-col space-y-10 sm:space-y-6', 'bg-[#53329C] rounded-2xl text-center', 'transition-all duration-500 ease-out')} style={getSlideStyle(idx)}>
                  <div className="flex flex-col items-center gap-6">
                    <div className={cn('p-2 sm:p-1.5 w-fit', 'border-2 border-[#FFFFFF60] border-dashed rounded-full ')}>
                      <div className={cn('p-4 sm:p-2.5 w-fit', 'bg-purple-circle rounded-full')}>
                        <service.icon className="size-12 xl:size-10 text-white" strokeWidth={1.5} />
                      </div>
                    </div>

                    <H3 className="block text-white">{service.title}</H3>
                  </div>

                  <P className={cn('flex-1 block', 'font-normal max-w-[35ch] mx-auto')}>{service.information}</P>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-[25%] h-full bg-gradient-to-r from-purple-border/40 sm:from-purple-border/20 to-purple-border/0"></div>
      <div className="absolute top-0 right-0 w-[25%] h-full bg-gradient-to-l from-purple-border/40 sm:from-purple-border/20 to-purple-border/0"></div>
    </section>
  )
}
