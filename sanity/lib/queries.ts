import { groq } from 'next-sanity'

export const galleryQuery = groq`
  *[_type == "galleryImage"] | order(order asc) {
    _id,
    image,
    alt,
    description
  }
`

export const fleetQuery = groq`
  *[_type == "truck"] | order(order asc) {
    _id,
    name,
    "imageUrl": image.asset->url,
    stats[] { label, value },
    order
  }
`
export const pricingQuery = groq`
  *[_type == "pricingItem"] | order(order asc) {
    _id,
    label,
    price,
    priceWithTrailer
  }
`