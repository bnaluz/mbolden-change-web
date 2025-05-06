import { defineField, defineType } from "sanity";
// import { format } from 'date-fns';
// const formattedDate = format(new Date(), 'MMMM dd, yyyy');

export const articleCardType = defineType({
    name: 'articleCard',
    type: 'object',
    fields: [
        defineField({
            name: 'image',
            type: 'image',
            fields: [{title: 'Alt Text', name: 'alt', type: 'string'}],
        }),
        defineField({
            name: 'publishedAt',
            type: 'date'
        }),
        defineField({
            name: 'title',
            type: 'string',
        }),
        defineField({
            name: 'description',
            type: 'array',
            of: [{ type: 'block' }]
        }),
    ]
});
