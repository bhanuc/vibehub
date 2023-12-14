import type { CollectionConfig } from 'payload/types'

const UserRoles: CollectionConfig = {
  slug: 'user-roles',
  fields: [
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'role',
      type: 'relationship',
      relationTo: 'roles',
      required: true,
    },
  ],
}

export default UserRoles
