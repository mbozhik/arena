import {cn} from '@/lib/utils'

import Link from 'next/link'
import {P} from '~/UI/Typography'

type Props = {
  variant?: 'primary' | 'secondary' | 'none'

  children?: React.ReactNode
  text?: string | undefined

  to?: string
  target?: '_blank' | '_self'

  className?: string
  onClick?: () => void
}

export const GRADIENT = 'bg-gradient-to-r from-[#CA82FA] via-[#875BE7] to-[#3B70E9]'

export const BUTTON = {
  base: 'block w-fit px-16 xl:px-12 py-6 xl:py-4 sm:py-3.5 sm:w-full rounded-full sm:rounded-3xl text-center cursor-pointer duration-300',
  primary: GRADIENT,
  secondary: '',
}

export default function Button({variant = 'primary', children, text, to, target = '_self', className, onClick}: Props) {
  const buttonStyles = cn(BUTTON.base, variant !== 'none' && BUTTON[variant], className)

  if (to) {
    return (
      <Link href={to} className={buttonStyles} target={target} onClick={onClick}>
        {children}
        {text && <P className="text-white font-semibold">{text}</P>}
      </Link>
    )
  }

  return (
    <button className={buttonStyles} onClick={onClick}>
      {children}
      {text && <P className="text-white font-semibold">{text}</P>}
    </button>
  )
}
