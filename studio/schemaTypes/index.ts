import * as pageTypes from './documents'
import * as blockTypes from './blocks'
import {pageBuilderType} from './pageBuilderType'

export const schemaTypes = [
  ...Object.values(pageTypes),
  ...Object.values(blockTypes),
  pageBuilderType,
]
