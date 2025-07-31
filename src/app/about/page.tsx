import {cn} from '@/lib/utils'

import Container from '~/Global/Container'
import {H2, H3, P, typoClasses} from '~/UI/Typography'
import Background from '~/Global/Background'
import Statistics from '~~/index/Statistics'

export default function AboutPage() {
  return (
    <Container className="space-y-20 xl:space-y-14">
      <H2 className="text-center">
        About <mark>Arena Web Security</mark>
      </H2>

      <div className="space-y-4">
        <H3>
          <mark>The First</mark> & <mark>Most Trusted</mark> Cybersecurity Company in Bangladesh
        </H3>

        <P>Arena Web Security, a sister concern of Arena Web Technology, is the first dedicated cybersecurity company in Bangladesh, established in 2012. Since then, it has become the most trusted name in cybersecurity training and services across the country. With over a decade of experience, Arena Web Security has been committed to securing digital platforms and building skilled cybersecurity professionals who can compete globally.</P>
      </div>

      <div className="space-y-4">
        <H3>We have proudly worked with:</H3>

        <div className={cn(typoClasses.p)}>
          <ul className="list-disc list-inside space-y-1.5">
            <li>Government entities like the Ministry of ICT</li>
            <li>Bangladesh Air Force</li>
            <li>Ministry of Defense</li>
            <li>Bangladesh Academy for Rural Development</li>
            <li>Top academic institutions including BUET, DU and various public/private universities</li>
            <li>The banking sector, Insurance companies, and other high-risk industries</li>
            <li>National & international organizations seeking penetration testing, VAPT, OSINT, and digital forensics solutions</li>
          </ul>
        </div>
      </div>

      <div className="space-y-4">
        <H3>
          Our <mark>Impact</mark> So Far:
        </H3>

        <P>55+ batches trained through our flagship CEHF (Certified Ethical Hacking & Freelancing) Course Students are now working in international freelancing platforms, corporate IT departments, and government cybersecurity roles. Delivered global-standard cybersecurity training tailored to the needs of Bangladesh’s digital transformation. At Arena Web Security, we are building the next generation of cyber defenders—equipped with real-world skills, international exposure, and a mission to secure the digital future of Bangladesh and beyond.</P>
      </div>

      <Statistics className="!mt-0" />

      <Background page="others" />
    </Container>
  )
}
