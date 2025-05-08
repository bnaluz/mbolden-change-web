import dynamic from 'next/dynamic';
import { ComponentType } from 'react';
import FiftyFifty from './blocks/FiftyFifty';

type ComponentsMap = {
  [key: string]: ComponentType<any>;
};

const componentMap: ComponentsMap = {
  hero: dynamic(() => import('@/components/blocks/Hero')),
  fiftyFifty: dynamic(() => import('@/components/blocks/FiftyFifty'))
  // Add more components as needed
};

export default componentMap;
