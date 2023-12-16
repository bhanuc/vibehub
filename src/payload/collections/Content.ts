import type { CollectionConfig } from 'payload/types'

const Post: CollectionConfig = {
  slug: 'post',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'type',
      type: 'text',
    },
    {
      name: 'creator',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'creationDate',
      type: 'date',
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'status',
      type: 'text',
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'tags',
      type: 'text',
    },
  ],
}

export default Post
