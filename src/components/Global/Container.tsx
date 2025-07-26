import {cn} from '@/lib/utils'

export const BOX = {
  container: 'w-[85%] xl:w-[90%] sm:w-auto mx-auto sm:mx-2.5',
  header: 'w-[65%] xl:w-[75%] sm:w-auto mx-auto sm:mx-4',
}

export default function Container({children, className}: {children: React.ReactNode; className?: string}) {
  return <main className={cn(BOX.container, 'pb-16 sm:pb-10', className)}>{children}</main>
}
