import {SERVICES} from '@/content'
import {GRADIENT} from '~/UI/Button'

import {cn} from '@/lib/utils'

import Container from '~/Global/Container'
import {H2, H3, P} from '~/UI/Typography'
import Background from '~/Global/Background'

export default function ServicesPage() {
  return (
    <Container className="sm:space-y-16">
      <div className="space-y-6 sm:space-y-4 text-center">
        <H2 className="text-purple-highlight">Our Cyber Security Services</H2>

        <P className="max-w-[85ch] mx-auto">Arena Web Security is the best place to do Cyber Security & Ethical Hacking, OSINT, Linux and Freelancing Course. To become a cyber hero it is your first step. We design the entire course from basic to advance. We focus hardly on our learners.</P>
      </div>

      <div className="grid grid-cols-4 xl:grid-cols-3 sm:grid-cols-1 gap-x-6 gap-y-14 sm:gap-y-10">
        {SERVICES.map((service) => (
          <div key={service.title} className={cn('relative px-6 pt-14 pb-8 sm:px-4 sm:pt-10 sm:pb-6', 'flex flex-col h-full', 'bg-white rounded-2xl text-center')}>
            <div className={cn('absolute inset-0 h-[1px] w-full', 'grid place-items-center')}>
              <div className={cn('-mt-10 xl:-mt-8 sm:-mt-6 p-4 sm:p-2.5 bg-white rounded-full', GRADIENT)}>
                <service.icon className="size-10 xl:size-8 text-white" strokeWidth={1.5} />
              </div>
            </div>

            <H3 className="text-purple-border font-medium mb-6">{service.title}</H3>

            <P className="text-purple-course font-normal flex-1">{service.description}</P>
          </div>
        ))}
      </div>

      <Background page="others" />
    </Container>
  )
}
