import { Hero as HeroType } from '@/sanity/types';

export default function Hero({ title, text, image }: HeroType) {
  return <section>{image ? <div>hi</div> : null}</section>;
}
