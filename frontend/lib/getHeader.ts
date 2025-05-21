import { cache } from 'react';
import { Header } from '@/sanity/types';
import { HEADER_QUERY } from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';

export const getHeader = cache(async () => {
  const header = await client.fetch<Header>(HEADER_QUERY);

  if (!header) return [];

  return header;
});
