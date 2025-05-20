import { defineQuery } from 'next-sanity';

export const PAGE_QUERY = defineQuery(`
  *[_type == "page" && slug.current == $slug][0]{
    _id,
    _type,
    _createdAt,
    _updatedAt,
    title,
    slug,
    content[]{
      ...,
      _type == "statementBanner" => {
        ...,
        cta{
          label,                    
          statement->{
            "slug": slug.current      
          }
        }
      }
    }
  }
`);

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

export const STATEMENT_QUERY = defineQuery(`
  *[_type == "statement" && slug.current == $slug][0]{
    _id,
    _type,
    _createdAt,
    _updatedAt,
    title,
    date,
    "slug": slug.current,
    text,
    pdfDownload{
      "url": asset->url,
      originalFilename
    }
  }
`);
