import {getCourses} from '@/sanity/lib/requests'

import Container, {BOX} from '~/Global/Container'
import Hero from '~~/index/Hero'
import Partners from '~~/index/Partners'
import Courses from '~~/index/Courses'
import Services from '~~/index/Services'
import Statistics from '~~/index/Statistics'
import Action from '~~/index/Action'

export default async function IndexPage() {
  const courses = await getCourses()

  return (
    <>
      <Hero />

      <Container offset={false} className="pt-20 xl:pt-16">
        <Partners />
        <Courses data={courses} />
      </Container>

      <Services container={BOX.container} />
      <Statistics container={BOX.container} />
      <Action container={BOX.container} />
    </>
  )
}
