import type {Metadata} from 'next'

import {getCourseItem} from '@/sanity/lib/requests'
import {cn} from '@/lib/utils'

import {notFound} from 'next/navigation'

import Container, {BOX} from '~/Global/Container'
import Action from '~/App/index/Action'
import {Grid, LargeArea, SmallArea} from '~/UI/Grid'
import {H2} from '~/UI/Typography'

type Props = {
  params: Promise<{slug: string}>
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const {slug} = await params
  const course = await getCourseItem(slug).catch(() => null)

  if (!course)
    return {
      title: 'Course Not Found',
    }

  return {
    title: course.heading,
    description: course.description,
  }
}

export default async function CourseItemPage({params}: Props) {
  const {slug} = await params

  const course = await getCourseItem(slug).catch(() => null)
  if (!course) notFound()

  return (
    <>
      <Container className="space-y-36 xl:space-y-28 sm:space-y-20">
        <Grid>
          <LargeArea className="space-y-12">
            <H2 className={cn('max-w-[20ch]')}>{course.heading}</H2>
          </LargeArea>

          <SmallArea>some content</SmallArea>
        </Grid>
      </Container>

      <Action container={BOX.container} className="mt-36 xl:mt-28 sm:mt-20" />
    </>
  )
}
