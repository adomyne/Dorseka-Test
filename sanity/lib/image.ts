import { createImageUrlBuilder } from '@sanity/image-url'

const builder = createImageUrlBuilder({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
})

export function imageUrlFor(source: unknown) {
  return builder.image(source as Parameters<typeof builder.image>[0]).auto('format').url()
}