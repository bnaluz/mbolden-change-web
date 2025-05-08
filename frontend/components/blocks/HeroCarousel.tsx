"use client";

import useEmblaCarousel from 'embla-carousel-react';
import Hero from './Hero';
import { Hero as HeroType } from '@/sanity/types';
import styles from './HeroCarousel.module.css';

type SlideWithKey = HeroType & { _key?: string };

type HeroCarouselProps = {
    slides: SlideWithKey[];
};

export default function HeroCarousel({ slides }: HeroCarouselProps) {
    const [emblaRef] = useEmblaCarousel({ loop: true });

    return (
        <section className="overflow-hidden">
        <div className="embla" ref={emblaRef}>
            <div className={styles.emblaContainer}>
            {slides.map((slide, index) => (
            <div className={styles.emblaSlide} key={slide._key || index}>
                <Hero {...slide} />
                </div>
            ))}
            </div>
        </div>
        </section>
    );
}
