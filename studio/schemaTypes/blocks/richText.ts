import {defineField, defineType} from 'sanity'

export const richText = defineType({
  name: 'richText',
  title: 'Rich Text',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'array',
      of: [{type: 'block'}, {type: 'image'}],
    }),
  ],
})