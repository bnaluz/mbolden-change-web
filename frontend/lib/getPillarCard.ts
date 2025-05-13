import { client } from '@/sanity/lib/client';
import { PillarCard_Query } from '@/sanity/lib/queries';
import { cache } from 'react';


export const getPillarCard = cache(async () => {
    const pillarCards = await client.fetch(PillarCard_Query);
    return pillarCards;  
    
   
});


