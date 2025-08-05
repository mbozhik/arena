import {cn} from '@/lib/utils'

import {SPAN} from '~/UI/Typography'

type Props = {
  variant: 'primary' | 'secondary'
  className?: string
  children: React.ReactNode
}

export default function Badge({variant, className, children}: Props) {
  return (
    <div className={cn('px-4 py-1.5 sm:px-3 sm:py-1 rounded-full', variant === 'primary' ? 'bg-[#8F43F2] text-[#F3F5F7]' : 'bg-purple-border text-[#BAADEC]', className)}>
      <SPAN>{children}</SPAN>
    </div>
  )
}
