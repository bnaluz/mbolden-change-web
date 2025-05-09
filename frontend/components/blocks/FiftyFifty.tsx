import { PortableTextBlock } from "next-sanity";
import PortableTextComponent from "../PortableTextComponent";
// import { SanityImageCrop, SanityImageHotspot, SanityNextImage } from '@/sanity/types'
import Headline from "../atoms/Headline";
import { FiftyFifty as FiftyFiftyType } from "@/sanity/types";
import SanityNextImage from "../SanityNextImage";
// import { SanityNextImageProps } from "../SanityNextImage";
import Grid from '../Grid'
import GridItem from "../GridItem";
import styles from './FiftyFifty.module.css'

// type SanityImage = {
//     asset?: {
//         _ref?: string;
//         _type?: string;
//         _weak?: boolean;
//       };
//       hotspot?: SanityImageHotspot;
//       crop?: SanityImageCrop;
//       alt?: string;
//       _type: 'image';
//     };

// type FiftyFiftyProps = FiftyFiftyType

export default function FiftyFifty({
    title,
    leftTitle,
    leftText,
    leftImage,
    rightTitle,
    rightText,
    rightImage
}: FiftyFiftyType) {
    console.log(leftText, rightText,"===>")
    return (
        <section className={styles.section}>
      {title && <Headline text={title} className={styles.title} />}

      <Grid>
        <GridItem desktopSpan={6} mobileSpan={12}>
            {leftImage && (
                <div className={styles.imageWrapper}>
                    <SanityNextImage image={leftImage} fit="cover" />
                </div>
            )}
            {leftTitle && <Headline text={leftTitle} />}
            {leftText && <PortableTextComponent value={leftText as unknown as PortableTextBlock[]} />} 
        </GridItem>
            
        <GridItem desktopSpan={6} mobileSpan={12}>
        {rightImage && (
          <div className={styles.imageWrapper}>
            <SanityNextImage image={rightImage} fit="cover" />
          </div>
        )}
        {rightTitle && <Headline text={rightTitle} />}
        {rightText && <PortableTextComponent value={rightText as PortableTextBlock[]} />}
        </GridItem>
      </Grid>
      </section>
    )
}