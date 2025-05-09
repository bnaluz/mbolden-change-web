import {defineArrayMember, defineType} from 'sanity'

export const pageBuilderType = defineType({
  name: 'pageBuilder',
  type: 'array',
  of: [defineArrayMember({type: 'hero'}),
  defineArrayMember({type: 'richText'}),
  defineArrayMember({ type: 'articleCard'}),
  defineArrayMember({ type: 'pillarCard' }),
  defineArrayMember({type: 'pillars'}),
],
})
