import {defineType, defineField} from 'sanity'

export const statementType = defineType({
  name: 'statement',
  title: 'Statement',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(5).max(100),
      description: 'The title of the statement',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
      description: 'The date the statement was created or published',
    }),
    defineField({
      name: 'pdfDownload',
      title: 'PDF Download',
      type: 'file',
      options: {
        accept: 'application/pdf',
      },
      description: 'Optional PDF version of the statement for download',
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'array',
      of: [{type: 'block'}, {type: 'image'}],
    }),
  ],
})
