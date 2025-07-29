import {Book} from 'lucide-react'
import {defineField, defineType} from 'sanity'

export const CATEGORIES = ['Cyber Security', 'Development', 'Tech', 'Data Science', 'Freelance']

export const course = defineType({
  name: 'course',
  title: 'Course',
  type: 'document',
  icon: Book,
  fields: [
    defineField({
      name: 'category',
      type: 'string',
      options: {
        list: CATEGORIES,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'duration',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      type: 'string',
      options: {
        list: ['1', '2', '3', '4', '5'],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featured',
      type: 'boolean',
      initialValue: false,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'heading',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      heading: 'heading',
      category: 'category',
      featured: 'featured',
      image: 'image',
    },

    prepare(selection) {
      const {heading, category, featured, image} = selection

      return {
        title: heading,
        subtitle: `${featured ? '★' : ''} ${category}`,
        media: image,
      }
    },
  },
})
