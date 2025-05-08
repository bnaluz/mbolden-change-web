import {defineField, defineType} from 'sanity'

export const fiftyfiftyType = defineType({
    name: 'fiftyFifty',
    title: 'Fifty-Fifty Section',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'leftTitle',
            title: 'Left Column Title',
            type: 'string',
        }),
        defineField({
            name: 'leftText',
            title: 'Left Column Text',
            type: 'array',
            of: [{type: 'block'}, {type: 'image'}],
        }),
        defineField({
            name: 'leftImage',
            title: 'Left Column Image',
            type: 'image',
            fields: [{title: 'Alt Text', name: 'alt', type: 'string'}],
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'rightTitle',
            title: 'Right Column Title',
            type: 'string',
        }),
        defineField({
            name: 'rightText',
            title: 'Right Column Text',
            type: 'array',
            of: [{type: 'block'}, {type: 'image'}],
        }),
        defineField({
            name: 'rightImage',
            title: 'Right Column Image',
            type: 'image',
            fields: [{title: 'Alt Text', name: 'alt', type: 'string'}],
            options: {
                hotspot: true,
            },
        }),
    ]
})