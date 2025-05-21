import { cache } from 'react';
import { client } from '@/sanity/lib/client';
import { PAGE_QUERY } from '@/sanity/lib/queries';
import { Page } from '@/sanity/types';

export const getPage = cache(async (slug: string) => {
  const page = await client.fetch(PAGE_QUERY, { slug });

  if (!page) {
    return null;
  }
  return page as Page;
});
