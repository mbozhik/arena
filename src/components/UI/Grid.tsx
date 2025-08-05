import * as React from 'react'

import {cn} from '@/lib/utils'

const GRID = {
  root: 'grid-cols-11',
  large: 'col-span-7',
  small: 'col-span-4',
}

function Grid({className, children, ...props}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section data-section="grid" className={cn('grid gap-16 xl:gap-2', 'sm:flex sm:flex-col sm:gap-8', GRID.root, className)} {...props}>
      {children}
    </section>
  )
}

function createArea(size: 'large' | 'small') {
  const Component = ({className, children, ...props}: React.HTMLAttributes<HTMLDivElement>) => (
    <div data-area={size} className={cn(GRID[size], className)} {...props}>
      {children}
    </div>
  )
  Component.displayName = `GridArea(${size.toUpperCase()})`
  return Component
}

const LargeArea = createArea('large')
const SmallArea = createArea('small')

export {Grid, LargeArea, SmallArea}
