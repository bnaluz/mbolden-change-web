//block component//
import type { Pillars } from "@/sanity/types";
import { urlFor } from "@/sanity/lib/image";
import GridItem from "../GridItem";
import {PortableText} from '@portabletext/react'
import { getPillars } from "@/lib/getPillars";


export default async function Pillars() {
    const pillars = await getPillars();

    if (!pillars) return <p>"Pillars Not Found"</p>

    return (
        <section>
            <div></div>
            <div>
                {pillars.map((p: Pillars) => (
                    <GridItem
                        desktopSpan={4}
                        mobileSpan={12}
                        key={p._id}
                    >                        
                       { p.image && (
                        <img src={urlFor(p.image).url()} alt={p.headline} />
                        )}
                        <h3>{p.headline}</h3>
                        {p.description && (
                            <PortableText value={p.description} />
                        )}
                    </GridItem>
                ))}
            </div>
        </section>
    )
}