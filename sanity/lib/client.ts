import { createClient } from 'next-sanity'


export const client = createClient({
  projectId: '4ldlb541',
  dataset: 'production',
  apiVersion: '2025-02-12', 
  useCdn: true
})
