import { defineField, defineType } from 'sanity';

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
        name: 'link',
        title: 'Button Link',
        type: 'internalOrExternalLink',
        }),
        defineField({
        name: 'slides',
        type: 'array',
        of: [{ type: 'testimonialCard' }]
        })
    ]
});
