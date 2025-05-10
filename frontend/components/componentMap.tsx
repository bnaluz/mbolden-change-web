import dynamic from 'next/dynamic';
import { ComponentType } from 'react';

type ComponentsMap = {
  [key: string]: ComponentType<any>;
};

const componentMap: ComponentsMap = {
  hero: dynamic(() => import('@/components/blocks/Hero')),
  articles: dynamic(() => import('@/components/blocks/Article')),
  pillars: dynamic(()=> import('@/components/blocks/PillarsContainerBlock')),  
  // Add more components as needed
};

export default componentMap;
