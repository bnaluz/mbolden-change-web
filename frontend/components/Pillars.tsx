import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";
import { getPillarContainer } from "@/lib/getPillarContainer";
import styles from "./PillarsContainerBlock.module.css";
import type { PortableTextBlock } from "sanity";
import type { PillarCard as PillarCardType } from "@/sanity/types";
import Grid from "./Grid";
import GridItem from "./GridItem";

export default async function PillarsContainerBlock() {
  const data = await getPillarContainer();

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
  
  return (
    <section className={styles.container}>
      {title && <h2 className={styles.title}>{title}</h2>}
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
            <h3 className={styles.cardTitle}>{p.headline}</h3>
            {p.description && <PortableText value={p.description} />}
          </GridItem>
        ))}
      </Grid>
    </section>
  );
}
