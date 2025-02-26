import { colors, conditions, sizes, types } from './filters'
import { Product } from './products'

// Helper function to generate random number between min and max
const randomBetween = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min)

// Helper function to generate random price
const generatePrice = () => {
  const basePrice = randomBetween(30, 300)
  const hasDiscount = Math.random() > 0.5
  if (hasDiscount) {
    const discountPercent = randomBetween(10, 50)
    const discountedPrice = Math.round(basePrice * (1 - discountPercent / 100))
    return {
      price: discountedPrice,
      originalPrice: basePrice,
      discount: discountPercent
    }
  }
  return {
    price: basePrice
  }
}

// Helper function to generate random images
const generateImages = () => {
  const selectedImage = randomBetween(1, 2)
  const images = [
    `/products/${selectedImage}/image_1.jpg`,
    `/products/${selectedImage}/image_2.jpg`,
    `/products/${selectedImage}/image_3.jpg`,
    `/products/${selectedImage}/image_4.jpg`,
    `/products/${selectedImage}/image_5.jpg`,
    `/products/${selectedImage}/image_6.jpg`
  ]
  return images
}

// Helper function to generate product description
const generateDescription = (name: string, condition: string, material: string) => {
  const descriptions = [
    `Superbe ${name} en ${material}. ${condition}. Coupe ajustée et confortable.`,
    `Magnifique ${name} de la collection Lacoste. ${condition}. Matière premium en ${material}.`,
    `${name} élégant et intemporel. ${condition}. Fabriqué en ${material} de haute qualité.`,
    `${name} authentique Lacoste. ${condition}. ${material} durable et confortable.`
  ]
  return descriptions[randomBetween(0, descriptions.length - 1)]
}

// Materials for different product types
const materials: Record<string, string[]> = {
  polos: ['coton piqué', 'coton bio', 'jersey de coton'],
  sweatshirts: ['molleton', 'coton brossé', 'jersey lourd'],
  survetements: ['polyester technique', 'coton molletonné', 'matière stretch'],
  manteaux_vestes: ['laine', 'coton imperméable', 'polyester recyclé'],
  t_shirts: ['coton', 'jersey fin', 'coton organique'],
  pullovers: ['laine mérinos', 'cachemire', 'coton tricoté'],
  pantalons_shorts: ['coton sergé', 'gabardine', 'toile de coton'],
  chemises: ['popeline', 'oxford', 'lin'],
  maroquinerie: ['cuir', 'toile enduite', 'nylon'],
  robes_jupes: ['jersey', 'crêpe', 'coton stretch'],
  tops_chemises: ['soie', 'viscose', 'popeline de coton']
}

// Generate 1000 products
export const seedProducts: Product[] = Array.from({ length: 1000 }, (_, index) => {
  const gender = Math.random() > 0.5 ? 'homme' : 'femme'
  const categoryKeys = Object.keys(types).filter((key) => {
    if (gender === 'homme') {
      return !['robes_jupes', 'tops_chemises'].includes(key)
    }
    return true
  })
  const category = categoryKeys[randomBetween(0, categoryKeys.length - 1)]
  const condition = Object.keys(conditions)[randomBetween(0, Object.keys(conditions).length - 1)]
  const material = materials[category][randomBetween(0, materials[category].length - 1)]

  const name = `${types[category]} ${gender === 'homme' ? 'homme' : 'femme'}`
  const priceInfo = generatePrice()

  return {
    id: (index + 1).toString(),
    name,
    ...priceInfo,
    images: generateImages(),
    description: generateDescription(name, conditions[condition], material),
    href: `/products/${gender}/${category}/${index + 1}`,
    condition,
    size: Object.keys(sizes)[randomBetween(0, Object.keys(sizes).length - 1)],
    color: Object.keys(colors)[randomBetween(0, Object.keys(colors).length - 1)],
    material,
    gender
  }
})
