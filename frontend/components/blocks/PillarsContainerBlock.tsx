//block component//
"use client";

import { PortableText } from "@portabletext/react";
// import { urlFor } from "@/sanity/lib/image";
// import styles from "../AnimationGrid.module.css";
import styles from "../PillarsContainerBlock.module.css";
import type { PortableTextBlock } from "sanity";
// import { AnimatedGrid } from "../AnimatedGrid";

type PillarCard = {
  _id: string;
  image?: {
    asset?: {
      _ref?: string;
      _type?: string;
      url?: string;
    };
    alt?: string;
  };
  headline: string;
  description: PortableTextBlock[];
};

type PillarsContainerProps = {
  title?: string;
  description?: PortableTextBlock[];
  pillars: PillarCard[];
};

export default function PillarsContainerBlock({
  title,
  description,
  pillars,
}: PillarsContainerProps) {

  
  return (
    <section className={styles.container}>
      {title && <h2 className={styles.title}>{title}</h2>}
      {description && <PortableText value={description} />}

     {/* <AnimatedGrid
           items={pillars}
           renderItem={(p) => (
             <div className={styles.card}>
               {p.image && (
                 <img
                   src={urlFor(p.image).url()}
                   alt={p.headline}
                   className={styles.cardImage}
                 />
               )}
               <h3 className={styles.cardTitle}>{p.headline}</h3>
               <PortableText value={p.description} />
             </div>
           )}
         /> */}
      <div className={styles.grid}>
        {pillars.map((p) => (
          <div key={p._id} className={styles.card}>
            {p.image?.asset?.url && (
              <img
                src={p.image.asset.url}
                alt={p.image.alt || p.headline}
                className={styles.cardImage}
              />
            )}
            <h3 className={styles.cardTitle}>{p.headline}</h3>
            <PortableText value={p.description} />
          </div>
        ))}
      </div>
    </section>
  );
}
