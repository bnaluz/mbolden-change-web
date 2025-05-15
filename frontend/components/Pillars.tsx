import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";
import { getPillarContainer } from "@/lib/getPillarContainer";
import styles from "./PillarsContainerBlock.module.css";
import type { PortableTextBlock } from "sanity";
import type { PillarCard as PillarCardType } from "@/sanity/types";

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

  
  console.log(pillars.map(p => p._id))
  console.log("Pillars:", pillars);

  return (
    <section className={styles.container}>
      {title && <h2 className={styles.title}>{title}</h2>}
      {description && (
        <div className={styles.description}>
          <PortableText value={description} />
        </div>
      )}
      <div className={styles.grid}>
        {pillars?.map((p) => (
          <div className={styles.card} key={p._id}>
            {p.image && (
              <img
                src={urlFor(p.image).url()}
                alt={p.image.alt || p.headline}
                className={styles.cardImage}
              />
            )}
            <h3 className={styles.cardTitle}>{p.headline}</h3>
            {p.description && <PortableText value={p.description} />}
          </div>
        ))}
      </div>
    </section>
  );
}
