import dynamic from 'next/dynamic';
import { ComponentType } from 'react';

type ComponentsMap = {
  [key: string]: ComponentType<any>;
};

const componentMap: ComponentsMap = {
  hero: dynamic(() => import('@/components/blocks/Hero')),
  heroCarousel: dynamic(() => import('@/components/blocks/HeroCarousel')),
  richText: dynamic(() => import('@/components/blocks/RichText')),

  // Add more components as needed
};

export default componentMap;
