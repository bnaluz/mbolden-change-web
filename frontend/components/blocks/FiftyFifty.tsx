import { PortableTextBlock } from "next-sanity";
import PortableTextComponent from "../PortableTextComponent";
import Headline from "../atoms/Headline";
import { FiftyFifty as FiftyFiftyType } from "@/sanity/types";
import SanityNextImage from "../SanityNextImage";
import Grid from '../Grid'
import GridItem from "../GridItem";
import styles from './FiftyFifty.module.css'

export default function FiftyFifty({
    title,
    mobileLayout,
    leftTitle,
    leftText,
    leftImage,
    rightTitle,
    rightText,
    rightImage
}: FiftyFiftyType) {
    const isImageOnTop = mobileLayout === 'imageTop'
   
    return (
        <section className={styles.section}>
      {title && <Headline text={title} className={styles.title} />}

      {/* Desktop View */}
      <div className={styles.desktopView}>

      <Grid>
        <GridItem desktopSpan={6}>
            {leftImage && (
                <div className={styles.imageWrapper}>
                    <SanityNextImage image={leftImage} fit="cover" />
                </div>
            )}
            {leftTitle && <Headline text={leftTitle} />}
            {leftText && <PortableTextComponent value={leftText as PortableTextBlock[]} />} 
        </GridItem>
            
        <GridItem desktopSpan={6}>
        {rightImage && (
          <div className={styles.imageWrapper}>
            <SanityNextImage image={rightImage} fit="cover" />
          </div>
        )}
        {rightTitle && <Headline text={rightTitle} />}
        {rightText && <PortableTextComponent value={rightText as PortableTextBlock[]} />}
        </GridItem>
      </Grid>
      </div>
      

       {/* Mobile View */}
       <div className={styles.fiftyFiftyMobileView}>
        <div className={styles.fiftyFiftyMobileContent}>
          {isImageOnTop ? (
            <>
              <div className={styles.fiftyFiftyMobileImageContainer}>
                {leftImage && (
                  <div className={styles.imageWrapper}>
                    <SanityNextImage image={leftImage} fit="cover" />
                  </div>
                )}
                {rightImage && (
                  <div className={styles.imageWrapper}>
                    <SanityNextImage image={rightImage} fit="cover" />
                  </div>
                )}
              </div>
            
              <div className={styles.fiftyFiftyMobileTextContainer}>
                {leftTitle && <Headline text={leftTitle} />}
                {leftText && <PortableTextComponent value={leftText as PortableTextBlock[]} />}
                {rightTitle && <Headline text={rightTitle} />}
                {rightText && <PortableTextComponent value={rightText as PortableTextBlock[]} />}
              </div>
            </>
          ) : (
            <>
              <div className={styles.fiftyFiftyMobileTextContainer}>
                {leftTitle && <Headline text={leftTitle} />}
                {leftText && <PortableTextComponent value={leftText as PortableTextBlock[]} />}
                {rightTitle && <Headline text={rightTitle} />}
                {rightText && <PortableTextComponent value={rightText as PortableTextBlock[]} />}
              </div>
              
              <div className={styles.fiftyFiftyMobileImageContainer}>
                {leftImage && (
                  <div className={styles.imageWrapper}>
                    <SanityNextImage image={leftImage} fit="cover" />
                  </div>
                )}
                {rightImage && (
                  <div className={styles.imageWrapper}>
                    <SanityNextImage image={rightImage} fit="cover" />
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
    )
}

