import {getCourses} from '@/sanity/lib/requests'

import Container from '~/Global/Container'
import Hero from '~~/index/Hero'
import Partners from '~~/index/Partners'
import Courses from '~~/index/Courses'

export default async function IndexPage() {
  const courses = await getCourses()

  return (
    <>
      <Hero />

      <Container offset={false} className="pt-20 xl:pt-16">
        <Partners />
        <Courses data={courses} />
      </Container>
    </>
  )
}
