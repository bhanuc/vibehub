import type { CollectionConfig } from 'payload/types'

const UserPreferences: CollectionConfig = {
  slug: 'user-preferences',
  fields: [
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'preferences',
      type: 'textarea', // or 'json', if Payload supports JSON fields
    },
  ],
}

export default UserPreferences
