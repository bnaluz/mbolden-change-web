import { Hero as HeroType } from '@/sanity/types';
import SanityNextImage from '../SanityNextImage';
import Grid from '../Grid';
import GridItem from '../GridItem';
import Headline from '../atoms/Headline';
import { PortableTextBlock } from 'next-sanity';
import PortableTextComponent from '../PortableTextComponent';
import ButtonComponent from '../atoms/ButtonComponent';
import { resolveHref } from '@/lib/resolveHref';

import styles from './Hero.module.css'

export default function Hero({ title, text, image, button }: HeroType) {

  return (
    <section className={styles.heroSection}>
      <Grid className={styles.grid}>
        <GridItem desktopSpan={5} mobileSpan={12} desktopOffset={1}>
          <div className={styles.textSection}>
            {title && <Headline tag="h1" text={title} className={styles.headline}/>}
            {text && (
              <div className={styles.pText}>
                <PortableTextComponent value={text as PortableTextBlock[]} />
              </div>
            )}
            {button?.label && (
              <ButtonComponent
              className={styles.button}
                href={resolveHref(button)}
                isExternal={!!button.externalLink}
                variant="primary"
              >
                {button.label}
              </ButtonComponent>
            )}
          </div>
        </GridItem>

        {image ? (
          <GridItem desktopSpan={7} mobileSpan={12}>
              <SanityNextImage image={image} fit="contain" className='styles.heroImage'/>
          </GridItem>
        ) : null}

      </Grid>
    </section>
  );
}
