import {CONTACTS} from '@/lib/constants'

import {cn} from '@/lib/utils'

import Link from 'next/link'
import Container from '~/Global/Container'
import {H2, P, SPAN} from '~/UI/Typography'
import Background from '~/Global/Background'

export default function ContactPage() {
  return (
    <Container className="space-y-20 xl:space-y-14">
      <div className={cn('px-14 py-12 grid grid-cols-2', 'bg-purple-course rounded-4xl sm:rounded-3xl')}>
        <div className="space-y-10">
          <H2 className={cn('text-[40px] xl:text-3xl sm:text-2xl', 'block text-purple-highlight')}>Get in Touch</H2>

          <P className="block">
            Have Questions? <br /> We'd Love to Hear from You!
          </P>

          <div className={cn('mr-[50%] space-y-6', 'p-6 bg-white-purple text-purple-border rounded-3xl sm:rounded-2xl')}>
            {Object.values(CONTACTS).map((contact, idx) => (
              <div className="flex items-center w-fit gap-6 xl:gap-4 sm:gap-6 sm:pr-4" key={idx}>
                <div className="size-8 aspect-square grid place-items-center">
                  <contact.icon className="size-8 aspect-square" strokeWidth={1.5} />
                </div>

                <div className="col-span-5 space-y-1">
                  {contact.items.map((item) => (
                    <Link className="group text-wrap max-w-[10ch]" href={item.link} target="_blank" rel="noopener noreferrer" key={item.link}>
                      <SPAN offset={0} className={cn('font-normal text-wrap', 'group-hover:underline')}>
                        {item.text}
                      </SPAN>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div></div>
      </div>

      <Background page="others" />
    </Container>
  )
}
