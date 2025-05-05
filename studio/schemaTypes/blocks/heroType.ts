import {defineField, defineType} from 'sanity'

export const heroType = defineType({
  name: 'hero',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'text',
      type: 'array',
      of: [{type: 'block'}, {type: 'image'}],
    }),
    defineField({
      name: 'image',
      type: 'image',
      fields: [{title: 'Alt Text', name: 'alt', type: 'string'}],
      options: {
        hotspot: true,
      },
    }),
  ],
})
