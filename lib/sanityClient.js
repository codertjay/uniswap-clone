import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: 'hq43p6w2',
    dataset: 'production',
    apiVersion: 'v1',
    token:
        'sk4J05BTDXGtXGHhQVnUqcPeGps6BavuLspiZIAlY3MyoiJBbppp8BwrUh1fMDoBx6CjZ1hGOD3COAxGxxFjHkrpbQAfbTIADH01FVckskRXF6WDoZN0Z2VD2nKpgMjZuezsIs1KTZb6BMOT4EbbKZZQ1spf2SZvFrsHPaV0jGeINyJugtmV'
    , useCdn: false
})