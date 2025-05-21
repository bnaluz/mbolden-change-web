import {defineField, defineType} from 'sanity'

export const testimonialsCarouselType = defineType({
  name: 'testimonialsCarousel',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Headline',
      type: 'string',
    }),
    defineField({
      name: 'text',
      title: 'Body',
      type: 'array',
      of: [{type: 'block'}, {type: 'image'}],
    }),
    defineField({
      name: 'hasButton',
      title: 'Add Button?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'link',
      title: 'Button Link',
      type: 'internalOrExternalLink',
      hidden: ({parent}) => !parent?.hasButton,
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const parent = context.parent as any
          if (parent?.hasButton && !value) {
            return 'A button link is required if "Display Button?" is checked.'
          }
          return true
        }).optional(),
    }),
    defineField({
      name: 'slides',
      type: 'array',
      of: [{type: 'testimonialCard'}],
    }),
  ],
})
