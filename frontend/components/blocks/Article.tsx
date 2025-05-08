'use client'

import { ArticleCard } from '@/sanity/types';
import { Article_Query } from '@/sanity/lib/queries';
import Grid from '../Grid';
import GridItem from '../GridItem';
import { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { PortableText } from '@portabletext/react';
import { format } from 'date-fns';


export default function ArticleCards() {
  const [articles, setArticles] = useState<ArticleCard[]>([]);

  useEffect(() => {
    client.fetch<ArticleCard[]>(Article_Query).then(setArticles);
  }, []);

  return (
    <Grid>
          {articles.map((article) => (
              <GridItem
                  desktopSpan={4}
                  mobileSpan={12}                
                  key={article._id}
              >
                  {article.image && (
                      <img src={urlFor(article.image).url()} alt={article.title} />
                  )}
                  <h3>{article.title}</h3>
                  {article.publishedAt && (
                      <span>{format(new Date(article.publishedAt), 'MMMM dd, yyyy')}</span>
                  )}
                  {article.description && (
                      <PortableText value={article.description} />
                  )}
              </GridItem>
          ))}
    </Grid>
  );
}


