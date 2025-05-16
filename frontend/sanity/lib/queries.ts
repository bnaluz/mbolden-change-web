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

export const FOOTER_QUERY = defineQuery(`*[_type == 'footer'][0] {
  _id,
  _type,
  _createdAt,
  _updatedAt,
  _rev,
  columnCategories[]{
  ...,
  links[]{
  ...,
  reference-> {
  _type,
  slug}
  },
  },
  socialLinks[]{
  ...,},
  primaryLogo,
  secondaryLogo,
  organizationInfo,
  }`);


export const PillarContainer_Query = `
  *[_type == "pillarContainer"][0]{
    title,
    description,
    pillars[]->{
      _id,
      image,
      headline,
      description
    }
  }
`;




export const HEADER_QUERY = defineQuery(`*[_type == 'header'][0]{
  ...,
  navigationLinks[]{
  ...,
  reference-> {
  _type,
  slug}
  },
  donateCTA{
  ...,
  buttonLink{
  ...,
  reference-> {
  _type,
  slug,}}
  }
  }`);

