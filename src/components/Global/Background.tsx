import IndexHeroImage from '$/background/index.png'
import IndexHeroMobileImage from '$/background/index-mobile.png'

import OthersHeroImage from '$/background/others.png'
import OthersHeroMobileImage from '$/background/others-mobile.png'

import {cn} from '@/lib/utils'

import Image from 'next/image'

type Page = 'index' | 'others'
type Device = 'desktop' | 'mobile'

export default function Background({page}: {page: Page}) {
  function getBgImage(page: Page, device: Device) {
    const indexImage = device === 'desktop' ? IndexHeroImage : IndexHeroMobileImage
    const othersImage = device === 'desktop' ? OthersHeroImage : OthersHeroMobileImage

    if (page === 'index') return indexImage
    if (page === 'others') return othersImage
    else return indexImage
  }

  return (
    <div data-block="background" className={cn('absolute inset-0 -z-20', 'w-full max-h-screen')}>
      <Image quality={100} className={cn('sm:hidden', 'absolute inset-0 -z-20', 'size-full object-cover')} src={getBgImage(page, 'desktop')} alt="" />
      <Image quality={100} className={cn('hidden sm:block', 'absolute inset-0 -z-20', 'size-full object-cover')} src={getBgImage(page, 'mobile')} alt="" />
    </div>
  )
}
