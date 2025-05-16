import { createClient } from 'next-sanity';
import { projectId, dataset, apiVersion, token } from '../env';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  token,
});
