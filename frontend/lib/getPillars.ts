import { client } from '@/sanity/lib/client';
import { Pillars_Query } from '@/sanity/lib/queries';
import { cache} from 'react';

export const getPillars = cache(async () => {

    const allpillars = await client.fetch(Pillars_Query);
    return allpillars;
    
});