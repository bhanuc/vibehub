import type { CollectionConfig } from 'payload/types'

const Transactions: CollectionConfig = {
  slug: 'transactions',
  fields: [
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'amount',
      type: 'number',
      required: true,
    },
    {
      name: 'type',
      type: 'text',
      required: true,
    },
    {
      name: 'transactionDate',
      type: 'date',
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'status',
      type: 'text',
    },
  ],
}

export default Transactions
