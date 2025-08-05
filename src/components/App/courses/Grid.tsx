import {Play, Star} from 'lucide-react'

import type {COURSE_QUERYResult} from '@/sanity/lib/requests'

import {cn} from '@/lib/utils'
import {urlFor} from '@/sanity/lib/image'

import Link from 'next/link'
import Image from 'next/image'
import {H3, SPAN} from '~/UI/Typography'
import Badge from '~/UI/Badge'

export default function Grid({data}: {data: COURSE_QUERYResult}) {
  return (
    <section data-block="grid-courses" className={cn('grid grid-cols-3 sm:grid-cols-1 gap-6 xl:gap-5.5 sm:gap-4')}>
      {data.map((item, idx) => (
        <div key={idx} className={cn('flex flex-col', 'bg-purple-course border-2 border-purple-border rounded-4xl sm:rounded-3xl overflow-hidden')}>
          <Image quality={100} className="w-full object-contain" src={urlFor(item.image).url()} alt={item.heading} width={500} height={500} />

          <div className={cn('p-8 xl:p-6 sm:p-4 sm:pb-5 space-y-8 xl:space-y-6 sm:space-y-5', 'flex flex-col flex-1')}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-1.5 bg-[#7966EA] rounded-full">
                  <Play className="size-2.5 text-white fill-white" />
                </div>

                <SPAN className="font-medium">{item.duration}</SPAN>
              </div>

              <Badge variant="secondary">{item.category}</Badge>
            </div>

            <H3 className="flex-1">{item.heading}</H3>

            <div className={cn('py-4 xl:py-3', 'border-t border-b border-purple-border')}>
              <SPAN>{item.description}</SPAN>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => {
                  return <Star className={cn('size-4 xl:size-3 sm:size-3.5 fill-[#FAB437] text-[#FAB437]')} key={i} />
                })}
              </div>

              <Link href={`/courses/${item.slug.current}`}>
                <SPAN className="text-white font-medium underline underline-offset-3 hover:no-underline">Enroll Now</SPAN>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
