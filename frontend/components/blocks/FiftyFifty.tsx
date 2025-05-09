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
    leftTitle,
    leftText,
    leftImage,
    rightTitle,
    rightText,
    rightImage
}: FiftyFiftyType) {
   
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
            {leftText && <PortableTextComponent value={leftText as unknown as PortableTextBlock[]} />} 
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

      <div className={styles.mobileView}>
                
                <div className={styles.mobileColumn}>
                    <div className={styles.mobileImageContainer}>
                        {leftImage && <SanityNextImage image={leftImage} fit="cover" />}
                    </div>
                    
                    <div className={styles.mobileTextContainer}>
                        {leftTitle && <Headline text={leftTitle} />}
                        {leftText && <PortableTextComponent value={leftText as PortableTextBlock[]} />}
                    </div>
                </div>
                
                <div className={styles.mobileColumn}>
                    <div className={styles.mobileImageContainer}>
                        {rightImage && <SanityNextImage image={rightImage} fit="cover" />}
                    </div>
                    
                    <div className={styles.mobileTextContainer}>
                        {rightTitle && <Headline text={rightTitle} />}
                        {rightText && <PortableTextComponent value={rightText as PortableTextBlock[]} />}
                    </div>
                </div>
            </div>
        </section>
    )
}
