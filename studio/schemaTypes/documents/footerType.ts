import {defineField, defineType} from 'sanity'

export const footertype = defineField({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Footer Title',
      type: 'string',
    }),
    defineField({
      name: 'primaryLogo',
      title: 'Primary Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          title: 'Alt Text',
          name: 'alt',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'secondaryLogo',
      title: 'Secondary Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          title: 'Alt Text',
          name: 'alt',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'columnCategories',
      title: 'Column Categories',
      type: 'array',
      of: [
        defineField({
          name: 'footerColumn',
          title: 'Footer Column',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Category Header',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'links',
              title: 'Subcategories',
              type: 'array',
              of: [
                defineField({
                  name: 'link',
                  title: 'Link',
                  type: 'internalOrExternalLink',
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        defineField({
          name: 'socialLink',
          title: 'Social Link',
          type: 'object',
          fields: [
            defineField({
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {
                list: [
                  {title: 'Facebook', value: 'facebook'},
                  {title: 'Instagram', value: 'instagram'},
                  {title: 'X (formerly Twitter)', value: 'x'},
                  {title: 'LinkedIn', value: 'linkedin'},
                  {title: 'Youtube', value: 'youtube'},
                ],
                layout: 'dropdown',
              },
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: (Rule) => Rule.required(),
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'legalDisclaimer',
      title: 'Legal Disclaimer',
      type: 'text',
      description: 'e.g. "My New Red Shoes is a 501(c)3 Non-Profit Organization. EIN: 20-4683289"',
      rows: 2,
    }),
  ],
})
