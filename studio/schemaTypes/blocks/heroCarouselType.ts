import { defineField, defineType } from 'sanity';

export const heroCarouselType = defineType({
    name: 'heroCarousel',
    title: 'Hero Carousel',
    type: 'object',
    fields: [
        defineField({
        name: 'slides',
        title: 'Slides',
        type: 'array',
        of: [{ type: 'hero' }],
        validation: (Rule) => Rule.min(1).warning('Add at least one slide.'),
        }),
    ],
});
