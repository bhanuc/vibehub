import type { CollectionConfig } from 'payload/types'

const ContentAnalytics: CollectionConfig = {
  slug: 'content-analytics',
  fields: [
    {
      name: 'content',
      type: 'relationship',
      relationTo: 'content',
      required: true,
    },
    {
      name: 'views',
      type: 'number',
    },
    {
      name: 'engagementMetrics',
      type: 'textarea', // or 'json', if Payload supports JSON fields
    },
  ],
}

export default ContentAnalytics
