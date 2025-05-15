import { defineField, defineType } from 'sanity'

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
            name: 'leftOrRightImage',
            type: 'string',
            options: {
                list: [
                    { title: 'Image Left', value: 'left' },
                    { title: 'Image Right', value: 'right' },
                ],
                layout: 'radio',
            },
        }),
        defineField({
            name: 'mobileLayout',
            title: 'Mobile Layout',
            type: 'string',
            options: {
                list: [
                    { title: 'Image on Top', value: 'imageTop' },
                    { title: 'Text on Top', value: 'textTop'},
                ],
                layout: 'radio',
            },
        }),
        defineField({
            name: 'rightImage',
            title: 'Right Column Image',
            type: 'image',
            fields: [{ title: 'Alt Text', name: 'alt', type: 'string' }],
            options: {
                hotspot: true,
            },
            hidden: ({ parent }) => parent?.leftOrRightImage !== 'right',
        }),
        defineField({
            name: 'leftImage',
            title: 'Left Column Image',
            type: 'image',
            fields: [{ title: 'Alt Text', name: 'alt', type: 'string' }],
            options: {
                hotspot: true,
            },
            hidden: ({ parent }) => parent?.leftOrRightImage !== 'left'
        }),
        defineField({
            name: 'leftTitle',
            title: 'Left Column Title',
            type: 'string',
            hidden: ({ parent }) => parent?.leftOrRightImage !== 'right',
            validation: (Rule) =>
                Rule.custom((value, context): any  => {
                  const leftImage = (context.parent as any).leftImage;
                  if (value && leftImage) {
                    return 'Cannot add with left image present';
                  }
                  return true
                }),
        }),
        defineField({
            name: 'leftText',
            title: 'Left Column Text',
            type: 'array',
            of: [{ type: 'block' }],
            hidden: ({ parent }) => parent?.leftOrRightImage !== 'right',
            validation: (Rule) =>
                Rule.custom((value, context): any  => {
                    const leftImage = (context.parent as any).leftImage;
                    if (value && leftImage) {
                      return 'Cannot add with left image present';
                    }
                    return true
                  }),
            }),
        
        defineField({
            name: 'rightTitle',
            title: 'Right Column Title',
            type: 'string',
            hidden: ({ parent }) => parent?.leftOrRightImage !== 'left',
            validation: (Rule) =>
                Rule.custom((value, context): any  => {
                    const rightImage = (context.parent as any).rightImage;
                    if (value && rightImage) {
                      return 'Cannot add with right image present';
                    }
                    return true
                  }),
        }),
        defineField({
            name: 'rightText',
            title: 'Right Column Text',
            type: 'array',
            of: [{ type: 'block' }],
            hidden: ({ parent }) => parent?.leftOrRightImage !== 'left',
            validation: (Rule) =>
                Rule.custom((value, context): any  => {
                    const rightImage = (context.parent as any).rightImage;
                    if (value && rightImage) {
                      return 'Cannot add with right image present';
                    }
                    return true
                  }),
        }),
        
    ]
})