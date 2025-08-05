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
      name: 'information',
      type: 'text',
      rows: 5,
      validation: (Rule) => Rule.required().min(1),
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
      name: 'tags',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'sections',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'descriptors',
              type: 'array',
              of: [{type: 'string'}],
              validation: (Rule) => Rule.required().min(1),
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'application',
      type: 'object',
      fields: [
        {
          name: 'fee',
          type: 'object',
          fields: [
            {
              name: 'regular',
              type: 'number',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'discounted',
              type: 'number',
            },
          ],
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'duration',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'course',
          title: 'Course Type',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'skill',
          title: 'Skill Level',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'class',
          title: 'Class Days',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'language',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
      ],
    }),
    defineField({
      name: 'instructors',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'role',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'expertise',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'experience',
              title: 'Years of Experience',
              type: 'string',
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
        },
      ],
      validation: (Rule) => Rule.required().min(1),
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
    defineField({
      name: 'outline',
      type: 'array',
      of: [
        {
          type: 'image',
        },
      ],
      options: {
        layout: 'grid',
      },
      validation: (Rule) => Rule.required().min(1),
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
