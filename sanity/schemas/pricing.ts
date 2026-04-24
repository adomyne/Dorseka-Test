import { defineField, defineType } from 'sanity'

export const pricingItem = defineType({
  name: 'pricingItem',
  title: 'Pricing Item',
  type: 'document',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'priceWithTrailer',
      title: 'Price (with trailer)',
      type: 'string',
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
    }),
  ],
  orderings: [{ title: 'Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] }],
})
