'use client'

import type {COURSE_QUERYResult} from '@/sanity/lib/requests'
import {CATEGORIES} from '@/sanity/schemaTypes/course'

import {cn} from '@/lib/utils'

import {useState} from 'react'

import {H2, P} from '~/UI/Typography'
import Grid from '~/App/courses/Grid'
import Button from '~/UI/Button'

type CourseCategory = (typeof CATEGORIES)[number]

export default function Courses({data}: {data: COURSE_QUERYResult}) {
  const [selectedCategory, setSelectedCategory] = useState<CourseCategory>(CATEGORIES[0])

  const featuredCoursesByCategory = data.filter((course) => course.featured && course.category === selectedCategory)

  return (
    <section data-section="courses-index" className="space-y-16 xl:space-y-12 sm:space-y-6">
      <div className="space-y-10 xl:space-y-8 sm:space-y-4">
        <div className="flex sm:flex-col items-center sm:items-start justify-between sm:gap-4">
          <H2>
            Popular <span className="text-purple-highlight">Courses</span>
          </H2>

          <div className={cn('flex flex-wrap sm:grid sm:grid-cols-2 sm:gap-1.5', 'p-2.5 xl:p-2 sm:p-1.5 sm:w-full bg-[#28204D] rounded-full sm:rounded-3xl')}>
            {CATEGORIES.map((category, idx) => (
              <Button className={cn('px-10 xl:px-5 sm:py-2.5', 'sm:bg-purple-border/20 sm:hover:bg-purple-border/40', idx === 0 && 'sm:col-span-2')} variant={selectedCategory === category ? 'primary' : 'none'} onClick={() => setSelectedCategory(category)} text={category} key={category} />
            ))}
          </div>
        </div>

        <P>
          Arena Web Security is the best place to do Cyber Security & Ethical Hacking, OSINT, Linux and Freelancing Course. <br className="sm:hidden" /> To become a cyber hero it is your first step. We design the entire course from basic to advance. We focus hardly on our learners.
        </P>
      </div>

      <div className="space-y-6">
        {featuredCoursesByCategory.length > 0 ? (
          <Grid data={featuredCoursesByCategory} />
        ) : (
          <div className="text-center py-12">
            No featured courses available for <span className="text-purple-highlight font-semibold underline underline-offset-2">{selectedCategory}</span> category.
          </div>
        )}
      </div>

      <Button className="mx-auto" to="/courses" text="Explore all Courses" />
    </section>
  )
}
