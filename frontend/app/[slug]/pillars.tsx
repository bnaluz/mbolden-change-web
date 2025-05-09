//slug//
import { PageBuilder } from "@/components/PageBuilder";
import { getPillars } from "@/lib/getPillars";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import { AnimatedGrid } from "@/components/AnimatedGrid";

type Pillar = {
  _id: string;
  headline: string;
  description: any;
    image: {
        url: string;
        alt?: string;
    }
 
};

export default async function PillarPage({
  params,
}: {
  params: { slug: string };
}) {
  const pillars = await getPillars(params.slug);

  if (!pillars) {
    return <div>Page not found</div>;
  }
    
  return (
    <div>
      {pillars.content && <PageBuilder content={pillars.content} />}

      {pillars.pillars && (
        <AnimatedGrid
          items={pillars.pillars as Pillar[]}
          renderItem={(p) => (
            <div
              style={{
                border: "1px solid #B22F93",
                padding: "1rem",
                borderRadius: "8px",
                backgroundColor: "#fff",
                boxShadow: "0 4px 12px #E2E2E2",
              }}
            >
              {p.image && (
                <img
                  src={urlFor(p.image).url()}
                  alt={p.headline}
                  style={{
                    width: "100%",
                    borderRadius: "6px",
                  }}
                />
              )}
              <h3>{p.headline}</h3>
              <PortableText value={p.description} />
            </div>
          )}
        />
      )}
    </div>
  );
}
       