import TestimonialCard from '@/components/blocks/Testimonials/TestimonialCard';
import dynamic from 'next/dynamic';
import { ComponentType } from 'react';
import FiftyFifty from './blocks/FiftyFifty';
import RichText from './blocks/RichText';

type ComponentsMap = {
  [key: string]: ComponentType<any>;
};

const componentMap: ComponentsMap = {
  hero: dynamic(() => import('@/components/blocks/Hero/Hero')),
  pillarContainer: dynamic(() => import('@/components/Pillars')),
  fiftyFifty: dynamic(() => import('@/components/blocks/FiftyFifty')),
  richText: dynamic(() => import('@/components/blocks/RichText')),
  heroCarousel: dynamic(() => import('@/components/blocks/Hero/HeroCarousel')),
  testimonialCard: dynamic(() => import('@/components/blocks/Testimonials/TestimonialCard')),
  testimonialsCarousel: dynamic(() => import('@/components/blocks/Testimonials/TestimonialsCarousel')),
  // Add more components as needed
};

export default componentMap;
