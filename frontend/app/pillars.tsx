import { getPillars } from "@/lib/getPillars"
import { PortableText } from "@portabletext/react"
import { AnimatedGrid } from "@/components/AnimatedGrid"
import styles from "@/components/AnimatedGrid.module.css"
import { urlFor } from "@/sanity/lib/image"

export default async function PillarsPage() {

  const pillars = await getPillars()

  if (!pillars || !Array.isArray(pillars)) {
    return <div>No pillars found.</div>
  }

  return (
    <AnimatedGrid
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
    />
  )
}

