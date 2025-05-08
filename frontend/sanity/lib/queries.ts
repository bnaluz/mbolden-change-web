import { defineQuery } from 'next-sanity';


export const Article_Query = defineQuery(
    `*[_type == "articleCard"]{
    _id,
    title,
    publishedAt,
    description,
    image
 }`
 );
    
