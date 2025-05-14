import { client } from '@/sanity/lib/client';
import { PillarContainer_Query } from '@/sanity/lib/queries';
import { cache } from 'react';


export const getPillarCard = cache(async () => {
    const pillarContainer = await client.fetch(PillarContainer_Query);
    return pillarContainer;  
    
   
});


