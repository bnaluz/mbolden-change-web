import { cache } from 'react';
import { Footer } from '@/sanity/types';
import { FOOTER_QUERY } from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';

export const getFooter = cache(async () => {
  const footer = await client.fetch<Footer>(FOOTER_QUERY);

  if (!footer) return [];

  return footer;
});
