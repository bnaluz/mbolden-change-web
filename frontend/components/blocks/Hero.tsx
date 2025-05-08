import { Hero as HeroType } from '@/sanity/types';
import { PortableTextBlock } from 'next-sanity';
import SanityNextImage from '../SanityNextImage';
import PortableTextComponent from '../PortableTextComponent';

export default function Hero({ title, text, image }: HeroType) {
  return (
    <section>
      {image ? (
        <div>
          <SanityNextImage image={image} fit="cover" />
        </div>
      ) : null}
      {title ? <h1>{title}</h1> : null}
      <div>
        {text ? (
          <PortableTextComponent value={text as PortableTextBlock[]} />
        ) : null}
      </div>
    </section>
  );
}