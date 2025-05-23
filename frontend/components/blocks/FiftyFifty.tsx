import { PortableTextBlock } from "next-sanity";
import PortableTextComponent from "../PortableTextComponent";
import Headline from "../atoms/Headline";
import { FiftyFifty as FiftyFiftyType } from "@/sanity/types";
import SanityNextImage from "../SanityNextImage";
import Grid from '../Grid'
import GridItem from "../GridItem";
import styles from './FiftyFifty.module.css'

export default function FiftyFifty({
    mobileLayout,
    leftTitle,
    leftText,
    leftImage,
    rightTitle,
    rightText,
    rightImage,
    leftVideoUrl,
    rightVideoUrl,
    mediaType,
    imageAspectRatio,
}: FiftyFiftyType) {
    const isImageOnTop = mobileLayout === 'imageTop'

    const getAspectRatioClass = () => {
      if (!imageAspectRatio || imageAspectRatio === 'original') return undefined;
      
      switch (imageAspectRatio) {
        case '16:9': return styles['aspectRatio-16-9'];
        case '4:3': return styles['aspectRatio-4-3'];
        case '1:1': return styles['aspectRatio-1-1'];
        case '9:16': return styles['aspectRatio-9-16'];
        default: return 'undefined';
      }
    }

    const getGoogleDriveUrl = (url: string) => {
      if (!url) return '';
      const fileId = url.split('/')[5];
      return `https://drive.google.com/file/d/${fileId}/preview`;
    }

    const VideoPlayer = ({ url, title }: { url: string, title: string }) => (
      <div className={styles.videoWrapper}>
        <iframe
        src={getGoogleDriveUrl(url)}
        className={styles.video}
        title={title}
      />
      </div>
    )

    return (
        <section className={styles.section}>

      {/* Desktop View */}
      <div className={styles.desktopView}>

      <Grid>
      <GridItem desktopSpan={6}>
                {mediaType === 'video' && leftVideoUrl 
                  ? <VideoPlayer url={leftVideoUrl} title="Left Google Drive Video" />
                  : leftImage 
                  ? <div className={`${styles.imageWrapper} ${getAspectRatioClass()}`}>
                      <SanityNextImage image={leftImage} fit="cover"/>
                    </div>
                  : null}
                {leftTitle && <Headline tag='h2' text={leftTitle} />}
                {leftText && <PortableTextComponent value={leftText as PortableTextBlock[]} />} 
              </GridItem>
            
              <GridItem desktopSpan={6}>
                {mediaType === 'video' && rightVideoUrl 
                  ? <VideoPlayer url={rightVideoUrl} title="Left Google Drive Video" />
                  : rightImage 
                  ? <div className={`${styles.imageWrapper} ${getAspectRatioClass()}`}>
                      <SanityNextImage image={rightImage} fit="cover"/>
                    </div>
                  : null}
                {rightTitle && <Headline tag='h2' text={rightTitle} />}
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
                {mediaType === 'video' && leftVideoUrl
                ? <VideoPlayer url={leftVideoUrl} title="Left Mobile Video" />
                : leftImage 
                ?  <div className={`${styles.imageWrapper} ${getAspectRatioClass()}`}>
                    <SanityNextImage image={leftImage} fit="cover" />
                  </div>
                : null}
                {mediaType === 'video' && rightVideoUrl
                ? <VideoPlayer url={rightVideoUrl} title="Right Mobile Video" />
                : rightImage
                ? <div className={`${styles.imageWrapper} ${getAspectRatioClass()}`}>
                    <SanityNextImage image={rightImage} fit="cover" />
                  </div>
                : null}
              </div>
            
              <div className={styles.fiftyFiftyMobileTextContainer}>
                {leftTitle && <Headline tag='h2' text={leftTitle} />}
                {leftText && <PortableTextComponent value={leftText as PortableTextBlock[]} />}
                {rightTitle && <Headline tag='h2' text={rightTitle} />}
                {rightText && <PortableTextComponent value={rightText as PortableTextBlock[]} />}
              </div>
            </>
          ) : (
            <>
              <div className={styles.fiftyFiftyMobileTextContainer}>
                {leftTitle && <Headline tag='h2' text={leftTitle} />}
                {leftText && <PortableTextComponent value={leftText as PortableTextBlock[]} />}
                {rightTitle && <Headline tag='h2' text={rightTitle} />}
                {rightText && <PortableTextComponent value={rightText as PortableTextBlock[]} />}
              </div>
              
              <div className={styles.fiftyFiftyMobileImageContainer}>
                {mediaType === 'video' && leftVideoUrl
                ? <VideoPlayer url={leftVideoUrl} title="Left Mobile Video" />
                : leftImage 
                ?  <div className={`${styles.imageWrapper} ${getAspectRatioClass()}`}>
                    <SanityNextImage image={leftImage} fit="cover"/>
                  </div>
                : null}
                {mediaType === 'video' && rightVideoUrl
                ? <VideoPlayer url={rightVideoUrl} title="Right Mobile Video" />
                : rightImage
                ? <div className={`${styles.imageWrapper} ${getAspectRatioClass()}`}>
                  <SanityNextImage image={rightImage} fit="cover"  />
                  </div>
                : null}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
    )
}

