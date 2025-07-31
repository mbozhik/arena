import {Users, Handshake, Star, FolderCheck} from 'lucide-react'

import {cn} from '@/lib/utils'

import {H2, H3, P} from '~/UI/Typography'

const STATISTICS = [
  {
    heading: '10 000+',
    caption: 'Students Trained',
    icon: Users,
  },
  {
    heading: '13+',
    caption: 'Years in Service',
    icon: Handshake,
  },
  {
    heading: '750+',
    caption: 'Successful Clients',
    icon: Star,
  },
  {
    heading: '4000+',
    caption: 'Projects Completed',
    icon: FolderCheck,
  },
]

export default function Statistics({container}: {container: string}) {
  return (
    <section data-section="statistics-index" className={cn(container, 'mt-28 xl:mt-20 sm:mt-16')}>
      <div className={cn('space-y-16 xl:space-y-12 sm:space-y-6', 'py-16 xl:py-12 sm:py-6')}>
        <div className="space-y-6 xl:space-y-4 sm:space-y-2">
          <H2>
            Company <span className="text-purple-highlight">Statistics</span>
          </H2>

          <P>Statistics measures the whole progressing report which is organised by Arena Web Security.</P>
        </div>

        <div className={cn('px-28 py-10 xl:px-16 sm:p-6', 'grid grid-cols-4 sm:grid-cols-1 sm:gap-6', 'bg-[#53329C] rounded-full sm:rounded-2xl')}>
          {STATISTICS.map((statistic, idx) => (
            <div key={idx} className={cn('flex items-center justify-center sm:justify-start gap-4 sm:gap-5')}>
              <div className={cn('p-4 bg-purple-circle rounded-full', 'grid place-items-center')}>
                <statistic.icon className="size-10 xl:size-8 text-purple-border" strokeWidth={1.5} />
              </div>

              <div className="space-y-0.5 xl:space-y-0">
                <H3>{statistic.heading}</H3>

                <P>{statistic.caption}</P>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
