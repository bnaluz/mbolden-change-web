import { defineQuery } from 'next-sanity';

export const PAGE_QUERY = defineQuery(
  `*[_type == "page" && slug.current == $slug][0]{
    _id,
    _type,
    _createdAt,
    _updatedAt,
    title,
    slug,
    content[]{
      ...,}
    }`
);
