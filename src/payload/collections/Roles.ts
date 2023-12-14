import type { CollectionConfig } from 'payload/types'

const Roles: CollectionConfig = {
  slug: 'roles',
  fields: [
    {
      name: 'roleName',
      type: 'text',
      required: true,
    },
  ],
}

export default Roles
