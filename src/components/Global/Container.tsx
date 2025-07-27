import {cn} from '@/lib/utils'

export const BOX = {
  container: 'w-[85%] xl:w-[90%] sm:w-auto mx-auto sm:mx-2.5',
  header: 'w-[65%] xl:w-[75%] sm:w-auto mx-auto sm:mx-4',
}

export const CONTAINER = {
  spacing: 'space-y-28 xl:space-y-16 sm:space-y-10',
  padding: 'pb-[15vh] sm:pb-[10vh]',
  offset: 'pt-[25vh] sm:pt-[17vh]',
}

export default function Container({children, offset = true, className}: {children: React.ReactNode; offset?: boolean; className?: string}) {
  return <main className={cn(BOX.container, [CONTAINER.spacing, CONTAINER.padding, offset && CONTAINER.offset], className)}>{children}</main>
}
