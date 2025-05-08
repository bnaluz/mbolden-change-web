import {defineArrayMember, defineType} from 'sanity'


export const pageBuilderType = defineType({
  name: 'pageBuilder',
  type: 'array',
  of: [defineArrayMember({
    type: 'heroCarousel',
  }),
  defineArrayMember({
    type: 'hero',
  }),
  defineArrayMember({
    type: 'richText',
  }),
    defineArrayMember({
    type: 'pillarContainer',
  }),
  defineArrayMember({
    type: 'fiftyFifty',
  }),
  defineArrayMember({
    type: 'testimonialsCarousel',
  }),
  ],
})
