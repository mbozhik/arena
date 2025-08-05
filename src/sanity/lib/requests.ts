import type {COURSE_QUERYResult, COURSE_ITEM_QUERYResult} from '../../../sanity.types'
export type {COURSE_QUERYResult, COURSE_ITEM_QUERYResult}

import {sanityFetch} from '@/sanity/lib/live'
import {defineQuery} from 'next-sanity'
import {draftMode} from 'next/headers'

async function fetchEntity<T>(query: string, draft: boolean = true): Promise<T[]> {
  try {
    const {isEnabled} = await draftMode()

    const response = await sanityFetch({
      query,
      ...(isEnabled && draft
        ? {
            perspective: 'drafts',
            useCdn: false,
            stega: true,
          }
        : undefined),
    })
    return (response.data as T[]) || []
  } catch (error) {
    console.log('Error fetching data:', error)
    return []
  }
}

async function fetchEntityItem<T>(query: string, params?: {slug?: string}, draft: boolean = false): Promise<T | null> {
  try {
    const {isEnabled} = await draftMode()
    const response = await sanityFetch({
      query,
      params,
      ...(isEnabled && draft
        ? {
            perspective: 'previewDrafts',
            useCdn: false,
            stega: true,
          }
        : undefined),
    })
    return (response.data as T) || null
  } catch (error) {
    console.log('Error fetching data:', error)
    return null
  }
}

const COURSE_QUERY = defineQuery(`
    *[_type == "course"]{
        category, heading, description, information, duration, rating, featured, tags, sections, application, instructors, slug, image, outline
    }`)
const COURSE_ITEM_QUERY = defineQuery(`
    *[_type == "course" && slug.current == $slug][0]{
        category, heading, description, information, duration, rating, featured, tags, sections, application, instructors, slug, image, outline
    }`)

const QUERIES = {
  COURSE_QUERY,
  COURSE_ITEM_QUERY,
} as const

export const getCourses = (): Promise<COURSE_QUERYResult> => fetchEntity(QUERIES.COURSE_QUERY)
export const getCourseItem = (slug: string) => fetchEntityItem<COURSE_ITEM_QUERYResult>(QUERIES.COURSE_ITEM_QUERY, {slug})
