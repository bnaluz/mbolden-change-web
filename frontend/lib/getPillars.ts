import { client } from '@/sanity/lib/client';
import { PillarsCard_Query } from '@/sanity/lib/queries';
import { Pillars_Query } from '@/sanity/lib/queries';
import { cache} from 'react';

export const getPillars = cache(async (slug?: string) => {
    
    if (slug) {

        const PC = await client.fetch(PillarsCard_Query, {slug});
        return PC;
    }

    const allpillars = await client.fetch(Pillars_Query);
    return allpillars;
    
});