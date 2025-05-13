import dynamic from 'next/dynamic';
import { ComponentType } from 'react';

type ComponentsMap = {
  [key: string]: ComponentType<any>;
};

const componentMap: ComponentsMap = {
  hero: dynamic(() => import('@/components/blocks/Hero')),
  pillars: dynamic(() => import('@/components/blocks/Pillars')),
  // Add more components as needed
};

export default componentMap;
