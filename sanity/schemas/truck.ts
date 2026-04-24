import { defineField, defineType } from "sanity";

export default defineType({
  name: "truck",
  title: "Truck",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({
      name: "image", title: "Image", type: "image",
      options: { hotspot: true }
    }),
    defineField({
      name: "stats",
      title: "Stats",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "value", title: "Value", type: "string" }),
          ],
        },
      ],
    }),
    defineField({ name: "order", title: "Order", type: "number" }),
  ],
  orderings: [{
    title: "Order", name: "orderAsc",
    by: [{ field: "order", direction: "asc" }]
  }],
});