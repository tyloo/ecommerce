export type Product = {
  id: string
  name: string
  price: number
  originalPrice?: number
  discount?: number
  images: string[]
  href: string
  description?: string
  condition?: string
  size?: string
  color?: string
  material?: string
  gender: 'homme' | 'femme'
}

export { seedProducts as products } from './seed-products'
