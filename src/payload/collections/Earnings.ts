import type { CollectionConfig } from 'payload/types'

const Earnings: CollectionConfig = {
  slug: 'earnings',
  fields: [
    {
      name: 'content',
      type: 'relationship',
      relationTo: 'content',
      required: true,
    },
    {
      name: 'totalEarnings',
      type: 'number',
      required: true,
    },
    {
      name: 'dateRange',
      type: 'date',
      required: true,
    },
  ],
}

export default Earnings
