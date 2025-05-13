"use client";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";
import styles from "./PillarsContainerBlock.module.css"; 
import type { PortableTextBlock } from "sanity";


type PillarCard = {
  _id: string;
  image: {
      _ref?: string;
      _type?: string;
      url?: string;
    alt?: string;
  };
  headline: string;
  description: PortableTextBlock[];
};

type PillarContainer = {
  title: string;
  description: PortableTextBlock[];
  pillars: PillarCard[];
};

export default function PillarsContainerBlock({ title, description, pillars }: PillarContainer) {
  //console.log({ title, description, pillars });
  
  return (
    <section className={styles.container}>
      {title && <h2 className={styles.title}>{title}</h2>}
      {description && <PortableText value={description} />}

      <div className={styles.grid}>
        {pillars.map((p) => (
          <div key={p._id} className={styles.card}>
            {p.image.url && (
              <img
               src={urlFor(p.image).url()}
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
