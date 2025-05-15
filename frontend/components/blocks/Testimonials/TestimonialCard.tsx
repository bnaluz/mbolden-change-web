import { TestimonialCard as TestimonialCardType } from '@/sanity/types';
import SanityNextImage from '../../SanityNextImage';
import Headline from '../../atoms/Headline';
import { PortableTextBlock } from 'next-sanity';
import PortableTextComponent from '../../PortableTextComponent';
import ButtonComponent from '../../atoms/ButtonComponent';
import Grid from '@/components/Grid';
import GridItem from '@/components/GridItem';
import styles from './TestimonialCard.module.css';


export default function TestimonialCard({ title, text, image, link }: TestimonialCardType) {
  return (
      <Grid className={styles.tstSection}>
        <GridItem desktopSpan={6} mobileSpan={12} >
          {image && (
            <div className={styles.imageSection}>
              <SanityNextImage image={image} fit="cover" className={styles.tstImage} />
            </div>
          )}
        </GridItem>

        <GridItem desktopSpan={6} mobileSpan={12}>
          <div className={styles.textSection}>
            {title && <Headline tag="h1" text={title} className={styles.headline} />}

            {text && (
              <div className={styles.pText}>
                <PortableTextComponent value={text as PortableTextBlock[]} />
              </div>
            )}

              {link &&
                (link.isExternalLink ? link.url : link.reference?.slug?.current) && (
                  <ButtonComponent
                  className={styles.button}
                  variant="secondary"
                  link={link}
                  />
                )}
            </div>
          </GridItem>
        </Grid>
  );
}
