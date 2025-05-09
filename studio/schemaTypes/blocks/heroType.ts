import {defineField, defineType} from 'sanity'

export const heroType = defineType({
  name: 'hero',
  title: 'Hero Section',
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
      name: 'button',
      title: 'Hero Button',
      type: 'button',
      description: 'Optional. Add a button with a label and internal or external link.',
      validation: Rule =>
        Rule.custom((value: { internalSlug?: string; externalLink?: string }) => {
          const hasInternal = !!value?.internalSlug;
          const hasExternal = !!value?.externalLink;
          if (hasInternal && hasExternal) {
            return 'Only one link type allowed: internal or external.';
          }
          return true;
        }),
    }),
    defineField({
      name: 'image',
      title: 'Main Image',
      type: 'image',
      fields: [{title: 'Alt Text', name: 'alt', type: 'string'}],
      options: {
        hotspot: true,
      },
    }),
  ],
})
