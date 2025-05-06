import { createClient } from 'next-sanity';

import { projectId, dataset } from '../env';
console.log(dataset);

// const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
// const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.SANITY_API_READ_TOKEN;

export const client = createClient({
  projectId,
  dataset: dataset,
  apiVersion: '2025-03-04',
  useCdn: true,
  token,
});
