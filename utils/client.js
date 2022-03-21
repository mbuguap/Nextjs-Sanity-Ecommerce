import sanityClient from '@sanity/client';
import config from './config';
const client = sanityClient({
  projectId: 'y71r89sf',
  dataset: config.dataset,
  useCdn: true, 
});
export default client;
