import { TestimonialCard as TestimonialCardType } from '@/sanity/types';
import SanityNextImage from '../../SanityNextImage';
import Headline from '../../atoms/Headline';
import { PortableTextBlock } from 'next-sanity';
import PortableTextComponent from '../../PortableTextComponent';
import ButtonComponent from '../../atoms/ButtonComponent';
import Grid from '@/components/Grid';
import GridItem from '@/components/GridItem';
import styles from './TestimonialCard.module.css';


export default function TestimonialCard({ title, text, author, credentials, image, link }: TestimonialCardType) {
  return (
    <section>

      {/* Desktop layout */}
      <div className={styles.desktopView}>
        <Grid className={styles.tstSection}>
          <GridItem desktopSpan={6} mobileSpan={12} >

            {image && (
              <div className={styles.imageSection}>
                <SanityNextImage image={image} fit="cover" className={styles.tstImage} />
              </div>
            )}
          </GridItem>

          <GridItem desktopSpan={6} mobileSpan={12} >
            <div className={styles.textSection}>
              {title && <Headline tag="h1" text={title} className={styles.headline} />}
              {text && (
                <div className={styles.pText}>
                  <PortableTextComponent value={text as PortableTextBlock[]} />
                  {author && <Headline tag="h3" text={author}/>}
                  {credentials && <Headline tag="h4" text={credentials} />}
                </div>
              )}

              {link &&
                (
                  <ButtonComponent
                  className={styles.button}
                  variant="secondary"
                  link={link}
                  >
                  </ButtonComponent>
                )}
            </div>
          </GridItem>
        </Grid>
      </div>


      {/* Mobile layout */}
      <div className={styles.mobileView}>
        <div className={styles.mobileContent}>
          <div className={styles.mobileTextSection}>
            {title && <Headline tag="h1" text={title} className={styles.headline} />}

            {text && (
              <div className={styles.pText}>
                <PortableTextComponent value={text as PortableTextBlock[]} />
                {author && <Headline tag="h4" text={author} className={styles.author} />}
                {credentials && <Headline tag="h5" text={credentials} className={styles.author} />}
              </div>
            )}

            {link && (
              <ButtonComponent
                className={styles.button}
                variant="secondary"
                link={link}
              />
            )}
          </div>

          {image && (
            <div className={styles.mobileImageSection}>
              <SanityNextImage image={image} fit="cover" className={styles.tstImage} />
            </div>
          )}
        </div>
      </div>

    </section>
  );
}
