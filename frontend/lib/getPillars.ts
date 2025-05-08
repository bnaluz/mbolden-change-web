import { client } from '@/sanity/lib/client';
import { Pillars_Query } from '@/sanity/lib/queries';
import { Pillars } from '@/sanity/types';

export const getPillars = async (): Promise<Pillars[]> => {
    return await client.fetch(Pillars_Query);
}