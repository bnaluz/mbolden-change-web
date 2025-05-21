"use client";

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';
import TestimonialCard from './TestimonialCard';
import { InternalOrExternalLink, TestimonialCard as TestimonialCardType } from '@/sanity/types';
import ButtonComponent from '../../atoms/ButtonComponent';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Headline from '@/components/atoms/Headline';
import { PortableTextBlock } from 'next-sanity';
import PortableTextComponent from '@/components/PortableTextComponent';
import styles from './TestimonialsCarousel.module.css';

type SlideWithKey = TestimonialCardType & { _key?: string };

type TestimonialsCarouselProps = {
    title?: string;
    text?: PortableTextBlock[];
    link?: InternalOrExternalLink;
    slides: SlideWithKey[];
};

export default function TestimonialsCarousel({ title, text, link, slides }: TestimonialsCarouselProps) {
    const autoplay = useRef(Autoplay({ delay: 6000, stopOnInteraction: false, stopOnMouseEnter: true  }));
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [autoplay.current]);

    return (
        <section className={styles.carouselFrame}>
            <section className={styles.sectionHeader}>
                {title && <Headline tag="h1" text={title} className={styles.headline} />}
                {text && <PortableTextComponent value={text as PortableTextBlock[]} />}
                {link && <ButtonComponent variant="secondary" link={link} />}

            </section>

            <section className={styles.carouselWrapper}>
                <div className={styles.embla} ref={emblaRef}>
                    <div className={styles.emblaContainer}>
                        {slides.map((slide, index) => (
                            <div className={styles.emblaSlide} key={slide._key || index}>
                                <TestimonialCard {...slide} />
                            </div>
                        ))}
                    </div>

                    {slides.length > 1 && (
                    <div className={styles.arrowButtonsContainer}>
                        <ButtonComponent
                            variant='icon'
                            className={styles.arrowButtons}
                            onClick={() => emblaApi?.scrollPrev()}
                            aria-label="Previous slide"
                            >
                            <IoIosArrowBack />
                        </ButtonComponent>
                        <ButtonComponent
                            variant='icon'
                            className={styles.arrowButtons}
                            onClick={() => emblaApi?.scrollNext()}
                            aria-label="Next slide"
                            >
                            <IoIosArrowForward />
                        </ButtonComponent>
                    </div>
                    )}
                </div>

            </section>
        </section>
    );
}
