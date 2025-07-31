import {cn} from '@/lib/utils'

import {H2, P} from '~/UI/Typography'
import Button from '~/UI/Button'

export default function Action({container}: {container: string}) {
  return (
    <section data-section="action-index" className={cn('relative', 'bg-[#22164D]', 'mt-28 xl:mt-20 sm:mt-16')}>
      <div className={cn(container, 'flex justify-between items-center sm:flex-col sm:items-start sm:gap-10', 'py-16 xl:py-12 sm:py-8', 'px-20 xl:px-16 sm:px-6')}>
        <div className="space-y-6 xl:space-y-4 sm:space-y-4">
          <H2 className="max-w-[20ch] !leading-[1.25]">
            Join our <span className="text-purple-highlight">cyber security</span> learning platform today
          </H2>

          <P>Let Arena Web Security be your gateway to a high-impact cybersecurity career.</P>
        </div>

        <div className="flex flex-col gap-6 xl:gap-4 sm:gap-3 sm:w-full">
          <Button className="text-nowrap w-full" text="Verify Certificate" />
          <Button className="text-nowrap w-full" text="Join as Student" />
        </div>
      </div>

      <div className="absolute top-0 left-0 w-[25%] h-full bg-gradient-to-r from-purple-border/40 sm:from-purple-border/20 to-purple-border/0"></div>
      <div className="absolute top-0 right-0 w-[25%] h-full bg-gradient-to-l from-purple-border/40 sm:from-purple-border/20 to-purple-border/0"></div>
    </section>
  )
}
