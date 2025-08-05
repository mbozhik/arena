import {BookOpen, Star, Check} from 'lucide-react'

import type {Metadata} from 'next'
import {GRADIENT} from '~/UI/Button'

import {getCourseItem} from '@/sanity/lib/requests'
import {urlFor} from '@/sanity/lib/image'
import {cn} from '@/lib/utils'

import {notFound} from 'next/navigation'

import Image from 'next/image'
import Container, {BOX} from '~/Global/Container'
import Action from '~/App/index/Action'
import {ActionHero} from '~~/index/Hero'
import {Grid, LargeArea, SmallArea} from '~/UI/Grid'
import {H3, H4, H6, P, SPAN} from '~/UI/Typography'
import Badge from '~/UI/Badge'

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
          <LargeArea className="space-y-14 pr-10 xl:pr-14 sm:pr-0">
            <div className="space-y-8">
              <H4 className={cn('max-w-[20ch]')}>{course.heading}</H4>

              <div className="space-y-4">
                <P>{course.description}</P>

                <P>{course.information}</P>
              </div>

              <div className="flex sm:flex-col items-start justify-between sm:gap-8">
                <div className="flex flex-wrap gap-2.5 xl:gap-2">
                  {course.tags.map((tag) => (
                    <Badge key={tag} variant="primary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-6">
                  <div className="flex items-center gap-2.5">
                    <BookOpen className="size-5 text-purple-highlight" strokeWidth={1.5} />

                    <SPAN className="text-nowrap">{course.duration}</SPAN>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Star className="size-5 text-purple-highlight fill-purple-highlight" strokeWidth={1.5} />

                    <SPAN>{course.rating}</SPAN>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8 sm:space-y-6">
              {course.sections.map((section) => (
                <div className={cn('p-8 xl:p-6 sm:p-4 sm:pb-5 space-y-8 xl:space-y-6', 'border-2 border-white-purple rounded-4xl sm:rounded-2xl')} key={section._key}>
                  <H3>{section.title}</H3>

                  <div className="grid grid-cols-2 sm:grid-cols-1 gap-4">
                    {section.descriptors.map((descriptor) => (
                      <div className="flex items-center gap-3" key={descriptor}>
                        <div className="grid place-items-center p-0.5 bg-purple-highlight rounded-full size-6">
                          <Check className="size-3.5 text-background" strokeWidth={3} />
                        </div>

                        <SPAN>{descriptor}</SPAN>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </LargeArea>

          <SmallArea className="space-y-16">
            <div className={cn('p-5 sm:p-4 space-y-8 sm:space-y-6', 'bg-purple-course text-white rounded-3xl')}>
              <div className="space-y-6">
                <div className="flex flex-col gap-3 sm:gap-3">
                  <div className="flex sm:flex-col justify-between sm:gap-3">
                    <P className="font-medium">Course Fee</P>

                    <div className="flex gap-2 sm:gap-2.5">
                      <SPAN className="font-bold text-2xl xl:text-xl sm:text-2xl !leading-[1.1]">BDT {course.application?.fee.discounted}</SPAN>

                      <SPAN className="font-medium line-through text-white/50">BDT {course.application?.fee.regular}</SPAN>
                    </div>
                  </div>

                  <span className="font-normal !text-xs">14-days money-back guarantee</span>
                </div>

                <div className={cn(GRADIENT, 'w-full h-0.25')}></div>

                <div className="flex flex-col gap-3">
                  {(() => {
                    const courseDetails = [
                      {
                        label: 'Duration',
                        value: course.duration,
                      },
                      {
                        label: 'Course Type',
                        value: course.application?.type,
                      },
                      {
                        label: 'Skill Level',
                        value: course.application?.skill,
                      },
                      {
                        label: 'Class Days',
                        value: course.application?.class,
                      },
                      {
                        label: 'Language',
                        value: course.application?.language,
                      },
                    ]

                    return courseDetails.map((detail, index) => (
                      <div className="flex justify-between" key={index}>
                        <P className="font-medium">{detail.label}</P>
                        <P className="font-medium text-end">{detail.value}</P>
                      </div>
                    ))
                  })()}
                </div>
              </div>

              <ActionHero view="course" />
            </div>

            <div className="space-y-6 sm:space-y-4">
              {course.instructors.map((instructor) => (
                <div className={cn('p-3 pr-6 xl:pr-0', 'flex sm:flex-col items-center gap-6', 'bg-purple-course text-white rounded-3xl')} key={instructor._key}>
                  <Image className="w-52 xl:w-44 sm:w-40 sm:aspect-[2/3] sm:object-cover rounded-3xl border border-purple-highlight" src={urlFor(instructor.image).url()} alt={`${instructor.name}  image`} width={500} height={500} />

                  <div className="space-y-4 w-full">
                    <div className="space-y-0 sm:text-center">
                      <H6>{instructor.name}</H6>

                      <H6 className="text-purple-highlight font-medium">{instructor.role}</H6>
                    </div>

                    <div className={cn(GRADIENT, 'w-full h-0.25')}></div>

                    <div className="space-y-2">
                      <SPAN className="block">Areas of expertise: {instructor.expertise}</SPAN>

                      <SPAN className="block">Years in Cyber Security: {instructor.experience}</SPAN>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SmallArea>
        </Grid>

        <div className="space-y-8 sm:space-y-6">
          <H4 className={cn('text-center')}>Course Outline</H4>

          <div className={cn('px-32 sm:px-0', 'grid grid-cols-3 sm:grid-cols-2 gap-4 sm:gap-2')}>
            {course.outline.map((item) => (
              <Image src={urlFor(item).url()} alt="" width={1000} height={1000} key={item._key} />
            ))}
          </div>
        </div>
      </Container>

      <Action container={BOX.container} className="mt-36 xl:mt-28 sm:mt-20" />
    </>
  )
}
