import { Hero as HeroType } from '@/sanity/types';
import { PortableTextBlock } from 'next-sanity';
import SanityNextImage from '../SanityNextImage';
import PortableTextComponent from '../PortableTextComponent';
import ButtonComponent from '../atoms/ButtonComponent';
import { resolveHref } from '@/lib/resolveHref';

import styles from './Hero.module.css'

export default function Hero({ title, text, image, button }: HeroType) {

  return (
    <section className={styles.heroSection}>
      {image ? (
        <div>
          <SanityNextImage image={image} fit="cover" />
        </div>
      ) : null}
      {title ? <h1>{title}</h1> : null}
      <div>
        {text ? (
          <PortableTextComponent value={text as PortableTextBlock[]} />
        ) : null}
        {button?.label && (
          <ButtonComponent
            href={resolveHref(button)}
            isExternal={!!button.externalLink}
            variant="primary"
          >
            {button.label}
          </ButtonComponent>
        )}
      </div>
    </section>
  );
}
