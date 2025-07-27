import {getCourses} from '@/sanity/lib/requests'

import Container from '~/Global/Container'
import {H2, P} from '~/UI/Typography'
import Grid from '~~/courses/Grid'
import Background from '~/Global/Background'

export default async function CoursesPage() {
  const courses = await getCourses()

  const allCourses = [
    ...courses.filter((course) => course.featured), // featured courses
    ...courses.filter((course) => !course.featured),
  ]

  return (
    <Container>
      <div className="space-y-6 sm:space-y-4 text-center">
        <H2 className="text-purple-highlight">All Courses</H2>

        <P className="max-w-[85ch] mx-auto">Arena Web Security is the best place to do Cyber Security & Ethical Hacking, OSINT, Linux and Freelancing Course. To become a cyber hero it is your first step. We design the entire course from basic to advance. We focus hardly on our learners.</P>
      </div>

      <Grid data={allCourses} />

      <Background page="others" />
    </Container>
  )
}
