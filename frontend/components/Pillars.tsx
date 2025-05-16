import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";
import { getPillarContainer } from "@/lib/getPillarContainer";
import styles from "./PillarsContainerBlock.module.css";
import type { PortableTextBlock } from "sanity";
import type { PillarCard as PillarCardType } from "@/sanity/types";
import Grid from "./Grid";
import GridItem from "./GridItem";
import Headline from "./atoms/Headline";

export const revalidate = 0; // force SSR with no cache

export default async function PillarsContainerBlock() {
  const data = await getPillarContainer();
  
  console.log(data)

  if (!data) return null;
  
  const {
    title,
    description,
    pillars,
  }: {
    title: string;
    description: PortableTextBlock[];
    pillars: PillarCardType[];
  } = data;
  
  console.log('Fetched data:', data);
  
  console.log("Fetching fresh pillar data...");
    return (
      <section className={styles.container}>
      {title && <Headline tag="h2" text={title} className={styles.title} />}
      {description && (
        <div className={styles.description}>
          <PortableText value={description} />
        </div>
      )}
      <Grid >
        {pillars?.map((p) => (
          <GridItem
          mobileSpan={1}
          desktopSpan={4}
          className={styles.card} key={p._id}>
            {p.image && (
              <img
              src={urlFor(p.image).url()}
              alt={p.image.alt || p.headline}
              className={styles.cardImage}
              />
            )}
            {p.headline && <Headline tag='h3' text={p.headline} className={styles.cardTitle} />}
            {p.description && <PortableText value={p.description} />}
          </GridItem>
        ))}
      </Grid>
    </section>
  );
}
