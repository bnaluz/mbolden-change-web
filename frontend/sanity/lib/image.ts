import createImageURLBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

import { dataset, projectId } from '../env';

const builder = createImageURLBuilder({ projectId, dataset });

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source);
};

export const getDimensionsFromRef = (ref: string) => {
  if (!ref) return { imageWidth: null, imageHeight: null };

  const parts = ref.split('-');
  const sizeParts = parts[2];
  const [imageWidth, imageHeight] = sizeParts.split('x').map(Number);
  return { imageWidth, imageHeight };
};
