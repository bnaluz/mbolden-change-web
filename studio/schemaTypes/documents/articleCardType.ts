import { defineField, defineType } from "sanity";
// import { format } from 'date-fns';
// const formattedDate = format(new Date(), 'MMMM dd, yyyy');

export const articleCardType = defineType({
    name: 'articleCard',
    type: 'document',
    fields: [
        defineField({
            name: 'image',
            type: 'image',
            fields: [{title: 'Alt Text', name: 'alt', type: 'string'}],
        }),
        defineField({
            name: 'publishedAt',
            type: 'date',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'description',
            type: 'array',
            of: [{ type: 'block' }],
            validation: (Rule) => Rule.required(),
        }),
    ]
});
