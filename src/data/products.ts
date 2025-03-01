export type Product = {
  id: string
  name: string
  price: number
  originalPrice: number
  images: string[]
  description: string
  condition: string
  size: string
  color: string
  material: string
  gender: 'homme' | 'femme'
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Survêtements femme',
    price: 120,
    originalPrice: 171,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Survêtements femme authentique Lacoste. Excellent état. polyester technique durable et confortable.',
    condition: 'excellent',
    size: 'l',
    color: 'pink',
    material: 'polyester technique',
    gender: 'femme'
  },
  {
    id: '2',
    name: 'Manteaux & Vestes femme',
    price: 42,
    originalPrice: 60,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Magnifique Manteaux & Vestes femme de la collection Lacoste. Bon état. Matière premium en laine.',
    condition: 'good',
    size: 'l',
    color: 'blue',
    material: 'laine',
    gender: 'femme'
  },
  {
    id: '3',
    name: 'Polos femme',
    price: 111,
    originalPrice: 158,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique Polos femme de la collection Lacoste. Bon état. Matière premium en jersey de coton.',
    condition: 'good',
    size: 's',
    color: 'brown',
    material: 'jersey de coton',
    gender: 'femme'
  },
  {
    id: '4',
    name: 'T-shirts femme',
    price: 144,
    originalPrice: 180,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'T-shirts femme authentique Lacoste. Très bon état. coton durable et confortable.',
    condition: 'very_good',
    size: 'xs',
    color: 'green',
    material: 'coton',
    gender: 'femme'
  },
  {
    id: '5',
    name: 'Pullovers homme',
    price: 63,
    originalPrice: 79,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Pullovers homme en coton tricoté. Très bon état. Coupe ajustée et confortable.',
    condition: 'very_good',
    size: 'xxl_and_more',
    color: 'beige',
    material: 'coton tricoté',
    gender: 'homme'
  },
  {
    id: '6',
    name: 'Chemises femme',
    price: 138,
    originalPrice: 197,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Chemises femme élégant et intemporel. État neuf. Fabriqué en lin de haute qualité.',
    condition: 'new',
    size: 'xs',
    color: 'black',
    material: 'lin',
    gender: 'femme'
  },
  {
    id: '7',
    name: 'Manteaux & Vestes homme',
    price: 190,
    originalPrice: 272,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Magnifique Manteaux & Vestes homme de la collection Lacoste. Excellent état. Matière premium en laine.',
    condition: 'excellent',
    size: 'xl',
    color: 'green',
    material: 'laine',
    gender: 'homme'
  },
  {
    id: '8',
    name: 'Sweatshirts homme',
    price: 102,
    originalPrice: 145,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique Sweatshirts homme de la collection Lacoste. État neuf. Matière premium en jersey lourd.',
    condition: 'new',
    size: 'xl',
    color: 'yellow',
    material: 'jersey lourd',
    gender: 'homme'
  },
  {
    id: '9',
    name: 'Tops & Chemises femme',
    price: 94,
    originalPrice: 118,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Tops & Chemises femme en soie. Très bon état. Coupe ajustée et confortable.',
    condition: 'very_good',
    size: 's',
    color: 'brown',
    material: 'soie',
    gender: 'femme'
  },
  {
    id: '10',
    name: 'T-shirts femme',
    price: 146,
    originalPrice: 182,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe T-shirts femme en coton. Très bon état. Coupe ajustée et confortable.',
    condition: 'very_good',
    size: 'm',
    color: 'beige',
    material: 'coton',
    gender: 'femme'
  },
  {
    id: '11',
    name: 'Sweatshirts femme',
    price: 230,
    originalPrice: 288,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Sweatshirts femme authentique Lacoste. Très bon état. jersey lourd durable et confortable.',
    condition: 'very_good',
    size: 's',
    color: 'brown',
    material: 'jersey lourd',
    gender: 'femme'
  },
  {
    id: '12',
    name: 'Survêtements homme',
    price: 128,
    originalPrice: 183,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Survêtements homme authentique Lacoste. Excellent état. polyester technique durable et confortable.',
    condition: 'excellent',
    size: 'xs',
    color: 'black',
    material: 'polyester technique',
    gender: 'homme'
  },
  {
    id: '13',
    name: 'Pullovers femme',
    price: 199,
    originalPrice: 284,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Pullovers femme en laine mérinos. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 'xxl_and_more',
    color: 'green',
    material: 'laine mérinos',
    gender: 'femme'
  },
  {
    id: '14',
    name: 'Chemises femme',
    price: 79,
    originalPrice: 113,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Chemises femme authentique Lacoste. Bon état. lin durable et confortable.',
    condition: 'good',
    size: 'xxl_and_more',
    color: 'beige',
    material: 'lin',
    gender: 'femme'
  },
  {
    id: '15',
    name: 'Survêtements homme',
    price: 157,
    originalPrice: 224,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Survêtements homme élégant et intemporel. État neuf. Fabriqué en coton molletonné de haute qualité.',
    condition: 'new',
    size: 's',
    color: 'grey',
    material: 'coton molletonné',
    gender: 'homme'
  },
  {
    id: '16',
    name: 'Pantalons & Shorts homme',
    price: 188,
    originalPrice: 268,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Pantalons & Shorts homme en coton sergé. Excellent état. Coupe ajustée et confortable.',
    condition: 'excellent',
    size: 'xl',
    color: 'grey',
    material: 'coton sergé',
    gender: 'homme'
  },
  {
    id: '17',
    name: 'Pullovers homme',
    price: 34,
    originalPrice: 49,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Pullovers homme authentique Lacoste. État neuf. laine mérinos durable et confortable.',
    condition: 'new',
    size: 'xl',
    color: 'red',
    material: 'laine mérinos',
    gender: 'homme'
  },
  {
    id: '18',
    name: 'Pantalons & Shorts femme',
    price: 59,
    originalPrice: 74,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Pantalons & Shorts femme authentique Lacoste. Très bon état. coton sergé durable et confortable.',
    condition: 'very_good',
    size: 'xl',
    color: 'beige',
    material: 'coton sergé',
    gender: 'femme'
  },
  {
    id: '19',
    name: 'T-shirts femme',
    price: 227,
    originalPrice: 284,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Magnifique T-shirts femme de la collection Lacoste. Très bon état. Matière premium en coton organique.',
    condition: 'very_good',
    size: 'xxl_and_more',
    color: 'beige',
    material: 'coton organique',
    gender: 'femme'
  },
  {
    id: '20',
    name: 'Tops & Chemises femme',
    price: 183,
    originalPrice: 262,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Tops & Chemises femme authentique Lacoste. Bon état. viscose durable et confortable.',
    condition: 'good',
    size: 'xxl_and_more',
    color: 'orange',
    material: 'viscose',
    gender: 'femme'
  },
  {
    id: '21',
    name: 'Sweatshirts homme',
    price: 97,
    originalPrice: 138,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Sweatshirts homme authentique Lacoste. Bon état. coton brossé durable et confortable.',
    condition: 'good',
    size: 'xxl_and_more',
    color: 'white',
    material: 'coton brossé',
    gender: 'homme'
  },
  {
    id: '22',
    name: 'Sweatshirts femme',
    price: 96,
    originalPrice: 137,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Sweatshirts femme élégant et intemporel. Bon état. Fabriqué en jersey lourd de haute qualité.',
    condition: 'good',
    size: 'xl',
    color: 'pink',
    material: 'jersey lourd',
    gender: 'femme'
  },
  {
    id: '23',
    name: 'Polos homme',
    price: 36,
    originalPrice: 52,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Polos homme authentique Lacoste. Bon état. jersey de coton durable et confortable.',
    condition: 'good',
    size: 's',
    color: 'pink',
    material: 'jersey de coton',
    gender: 'homme'
  },
  {
    id: '24',
    name: 'Manteaux & Vestes homme',
    price: 55,
    originalPrice: 79,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Manteaux & Vestes homme en coton imperméable. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 'xs',
    color: 'blue',
    material: 'coton imperméable',
    gender: 'homme'
  },
  {
    id: '25',
    name: 'Maroquinerie femme',
    price: 52,
    originalPrice: 74,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Maroquinerie femme élégant et intemporel. Bon état. Fabriqué en toile enduite de haute qualité.',
    condition: 'good',
    size: 'm',
    color: 'blue',
    material: 'toile enduite',
    gender: 'femme'
  },
  {
    id: '26',
    name: 'Maroquinerie homme',
    price: 55,
    originalPrice: 79,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Maroquinerie homme authentique Lacoste. Bon état. nylon durable et confortable.',
    condition: 'good',
    size: 'xs',
    color: 'yellow',
    material: 'nylon',
    gender: 'homme'
  },
  {
    id: '27',
    name: 'Chemises homme',
    price: 48,
    originalPrice: 69,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Chemises homme élégant et intemporel. État neuf. Fabriqué en popeline de haute qualité.',
    condition: 'new',
    size: 'xs',
    color: 'red',
    material: 'popeline',
    gender: 'homme'
  },
  {
    id: '28',
    name: 'Chemises femme',
    price: 44,
    originalPrice: 63,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Chemises femme en lin. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'xs',
    color: 'white',
    material: 'lin',
    gender: 'femme'
  },
  {
    id: '29',
    name: 'T-shirts homme',
    price: 132,
    originalPrice: 189,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique T-shirts homme de la collection Lacoste. État neuf. Matière premium en coton organique.',
    condition: 'new',
    size: 'xl',
    color: 'red',
    material: 'coton organique',
    gender: 'homme'
  },
  {
    id: '30',
    name: 'Pullovers homme',
    price: 31,
    originalPrice: 45,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Pullovers homme authentique Lacoste. Bon état. laine mérinos durable et confortable.',
    condition: 'good',
    size: 'xs',
    color: 'grey',
    material: 'laine mérinos',
    gender: 'homme'
  },
  {
    id: '31',
    name: 'Robes & Jupes femme',
    price: 24,
    originalPrice: 34,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Magnifique Robes & Jupes femme de la collection Lacoste. État neuf. Matière premium en crêpe.',
    condition: 'new',
    size: 's',
    color: 'purple',
    material: 'crêpe',
    gender: 'femme'
  },
  {
    id: '32',
    name: 'Manteaux & Vestes femme',
    price: 104,
    originalPrice: 149,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Manteaux & Vestes femme élégant et intemporel. Excellent état. Fabriqué en coton imperméable de haute qualité.',
    condition: 'excellent',
    size: 'm',
    color: 'green',
    material: 'coton imperméable',
    gender: 'femme'
  },
  {
    id: '33',
    name: 'Robes & Jupes femme',
    price: 139,
    originalPrice: 198,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Robes & Jupes femme élégant et intemporel. État neuf. Fabriqué en crêpe de haute qualité.',
    condition: 'new',
    size: 'm',
    color: 'green',
    material: 'crêpe',
    gender: 'femme'
  },
  {
    id: '34',
    name: 'Maroquinerie femme',
    price: 104,
    originalPrice: 148,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Maroquinerie femme élégant et intemporel. Bon état. Fabriqué en nylon de haute qualité.',
    condition: 'good',
    size: 's',
    color: 'white',
    material: 'nylon',
    gender: 'femme'
  },
  {
    id: '35',
    name: 'Pantalons & Shorts femme',
    price: 41,
    originalPrice: 59,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Magnifique Pantalons & Shorts femme de la collection Lacoste. Bon état. Matière premium en toile de coton.',
    condition: 'good',
    size: 'xl',
    color: 'white',
    material: 'toile de coton',
    gender: 'femme'
  },
  {
    id: '36',
    name: 'Pullovers femme',
    price: 38,
    originalPrice: 47,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Magnifique Pullovers femme de la collection Lacoste. Très bon état. Matière premium en laine mérinos.',
    condition: 'very_good',
    size: 's',
    color: 'blue',
    material: 'laine mérinos',
    gender: 'femme'
  },
  {
    id: '37',
    name: 'Manteaux & Vestes homme',
    price: 166,
    originalPrice: 207,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Manteaux & Vestes homme en polyester recyclé. Très bon état. Coupe ajustée et confortable.',
    condition: 'very_good',
    size: 'm',
    color: 'blue',
    material: 'polyester recyclé',
    gender: 'homme'
  },
  {
    id: '38',
    name: 'Tops & Chemises femme',
    price: 106,
    originalPrice: 152,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Tops & Chemises femme élégant et intemporel. État neuf. Fabriqué en soie de haute qualité.',
    condition: 'new',
    size: 'xs',
    color: 'black',
    material: 'soie',
    gender: 'femme'
  },
  {
    id: '39',
    name: 'Sweatshirts homme',
    price: 31,
    originalPrice: 45,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Sweatshirts homme authentique Lacoste. Bon état. molleton durable et confortable.',
    condition: 'good',
    size: 'm',
    color: 'pink',
    material: 'molleton',
    gender: 'homme'
  },
  {
    id: '40',
    name: 'Survêtements homme',
    price: 62,
    originalPrice: 88,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Magnifique Survêtements homme de la collection Lacoste. Bon état. Matière premium en matière stretch.',
    condition: 'good',
    size: 's',
    color: 'pink',
    material: 'matière stretch',
    gender: 'homme'
  },
  {
    id: '41',
    name: 'Pantalons & Shorts homme',
    price: 141,
    originalPrice: 201,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Pantalons & Shorts homme élégant et intemporel. Excellent état. Fabriqué en toile de coton de haute qualité.',
    condition: 'excellent',
    size: 'm',
    color: 'beige',
    material: 'toile de coton',
    gender: 'homme'
  },
  {
    id: '42',
    name: 'Survêtements homme',
    price: 120,
    originalPrice: 171,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Magnifique Survêtements homme de la collection Lacoste. État neuf. Matière premium en polyester technique.',
    condition: 'new',
    size: 'l',
    color: 'white',
    material: 'polyester technique',
    gender: 'homme'
  },
  {
    id: '43',
    name: 'Sweatshirts femme',
    price: 193,
    originalPrice: 276,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Sweatshirts femme en molleton. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'xs',
    color: 'brown',
    material: 'molleton',
    gender: 'femme'
  },
  {
    id: '44',
    name: 'Chemises homme',
    price: 80,
    originalPrice: 114,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Chemises homme élégant et intemporel. État neuf. Fabriqué en popeline de haute qualité.',
    condition: 'new',
    size: 'xl',
    color: 'pink',
    material: 'popeline',
    gender: 'homme'
  },
  {
    id: '45',
    name: 'T-shirts femme',
    price: 40,
    originalPrice: 57,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'T-shirts femme élégant et intemporel. Excellent état. Fabriqué en coton de haute qualité.',
    condition: 'excellent',
    size: 's',
    color: 'purple',
    material: 'coton',
    gender: 'femme'
  },
  {
    id: '46',
    name: 'Chemises homme',
    price: 116,
    originalPrice: 145,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Chemises homme authentique Lacoste. Très bon état. popeline durable et confortable.',
    condition: 'very_good',
    size: 'xl',
    color: 'grey',
    material: 'popeline',
    gender: 'homme'
  },
  {
    id: '47',
    name: 'Maroquinerie homme',
    price: 102,
    originalPrice: 145,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Maroquinerie homme élégant et intemporel. Bon état. Fabriqué en nylon de haute qualité.',
    condition: 'good',
    size: 's',
    color: 'brown',
    material: 'nylon',
    gender: 'homme'
  },
  {
    id: '48',
    name: 'Chemises homme',
    price: 190,
    originalPrice: 271,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Chemises homme authentique Lacoste. Excellent état. popeline durable et confortable.',
    condition: 'excellent',
    size: 'm',
    color: 'orange',
    material: 'popeline',
    gender: 'homme'
  },
  {
    id: '49',
    name: 'T-shirts homme',
    price: 179,
    originalPrice: 255,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe T-shirts homme en jersey fin. Excellent état. Coupe ajustée et confortable.',
    condition: 'excellent',
    size: 's',
    color: 'brown',
    material: 'jersey fin',
    gender: 'homme'
  },
  {
    id: '50',
    name: 'Maroquinerie femme',
    price: 31,
    originalPrice: 45,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Maroquinerie femme authentique Lacoste. Excellent état. toile enduite durable et confortable.',
    condition: 'excellent',
    size: 'xl',
    color: 'pink',
    material: 'toile enduite',
    gender: 'femme'
  },
  {
    id: '51',
    name: 'Manteaux & Vestes femme',
    price: 157,
    originalPrice: 196,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Manteaux & Vestes femme en laine. Très bon état. Coupe ajustée et confortable.',
    condition: 'very_good',
    size: 'm',
    color: 'black',
    material: 'laine',
    gender: 'femme'
  },
  {
    id: '52',
    name: 'Survêtements homme',
    price: 118,
    originalPrice: 168,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Survêtements homme authentique Lacoste. Bon état. coton molletonné durable et confortable.',
    condition: 'good',
    size: 's',
    color: 'orange',
    material: 'coton molletonné',
    gender: 'homme'
  },
  {
    id: '53',
    name: 'Manteaux & Vestes femme',
    price: 67,
    originalPrice: 96,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Manteaux & Vestes femme authentique Lacoste. État neuf. laine durable et confortable.',
    condition: 'new',
    size: 'm',
    color: 'yellow',
    material: 'laine',
    gender: 'femme'
  },
  {
    id: '54',
    name: 'T-shirts femme',
    price: 64,
    originalPrice: 91,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique T-shirts femme de la collection Lacoste. État neuf. Matière premium en coton organique.',
    condition: 'new',
    size: 'xl',
    color: 'black',
    material: 'coton organique',
    gender: 'femme'
  },
  {
    id: '55',
    name: 'Robes & Jupes femme',
    price: 149,
    originalPrice: 186,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Robes & Jupes femme authentique Lacoste. Très bon état. coton stretch durable et confortable.',
    condition: 'very_good',
    size: 'xxl_and_more',
    color: 'green',
    material: 'coton stretch',
    gender: 'femme'
  },
  {
    id: '56',
    name: 'Survêtements femme',
    price: 108,
    originalPrice: 154,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Magnifique Survêtements femme de la collection Lacoste. État neuf. Matière premium en coton molletonné.',
    condition: 'new',
    size: 'xs',
    color: 'red',
    material: 'coton molletonné',
    gender: 'femme'
  },
  {
    id: '57',
    name: 'Manteaux & Vestes homme',
    price: 92,
    originalPrice: 131,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Manteaux & Vestes homme élégant et intemporel. Bon état. Fabriqué en polyester recyclé de haute qualité.',
    condition: 'good',
    size: 'xl',
    color: 'pink',
    material: 'polyester recyclé',
    gender: 'homme'
  },
  {
    id: '58',
    name: 'Manteaux & Vestes homme',
    price: 131,
    originalPrice: 164,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Manteaux & Vestes homme authentique Lacoste. Très bon état. polyester recyclé durable et confortable.',
    condition: 'very_good',
    size: 's',
    color: 'blue',
    material: 'polyester recyclé',
    gender: 'homme'
  },
  {
    id: '59',
    name: 'Pullovers femme',
    price: 74,
    originalPrice: 106,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Pullovers femme élégant et intemporel. Excellent état. Fabriqué en coton tricoté de haute qualité.',
    condition: 'excellent',
    size: 'xl',
    color: 'blue',
    material: 'coton tricoté',
    gender: 'femme'
  },
  {
    id: '60',
    name: 'Pullovers homme',
    price: 167,
    originalPrice: 238,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Pullovers homme authentique Lacoste. Bon état. laine mérinos durable et confortable.',
    condition: 'good',
    size: 'xl',
    color: 'blue',
    material: 'laine mérinos',
    gender: 'homme'
  },
  {
    id: '61',
    name: 'Sweatshirts femme',
    price: 223,
    originalPrice: 279,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Sweatshirts femme élégant et intemporel. Très bon état. Fabriqué en molleton de haute qualité.',
    condition: 'very_good',
    size: 'xxl_and_more',
    color: 'orange',
    material: 'molleton',
    gender: 'femme'
  },
  {
    id: '62',
    name: 'Polos femme',
    price: 120,
    originalPrice: 150,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Polos femme authentique Lacoste. Très bon état. coton piqué durable et confortable.',
    condition: 'very_good',
    size: 'xs',
    color: 'white',
    material: 'coton piqué',
    gender: 'femme'
  },
  {
    id: '63',
    name: 'Manteaux & Vestes femme',
    price: 67,
    originalPrice: 95,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Magnifique Manteaux & Vestes femme de la collection Lacoste. État neuf. Matière premium en polyester recyclé.',
    condition: 'new',
    size: 'l',
    color: 'purple',
    material: 'polyester recyclé',
    gender: 'femme'
  },
  {
    id: '64',
    name: 'Polos femme',
    price: 153,
    originalPrice: 219,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Polos femme en jersey de coton. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 'xxl_and_more',
    color: 'yellow',
    material: 'jersey de coton',
    gender: 'femme'
  },
  {
    id: '65',
    name: 'Maroquinerie femme',
    price: 38,
    originalPrice: 54,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Maroquinerie femme élégant et intemporel. Bon état. Fabriqué en nylon de haute qualité.',
    condition: 'good',
    size: 'xxl_and_more',
    color: 'grey',
    material: 'nylon',
    gender: 'femme'
  },
  {
    id: '66',
    name: 'Chemises femme',
    price: 149,
    originalPrice: 213,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Chemises femme en oxford. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 'l',
    color: 'white',
    material: 'oxford',
    gender: 'femme'
  },
  {
    id: '67',
    name: 'T-shirts homme',
    price: 99,
    originalPrice: 141,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'T-shirts homme élégant et intemporel. État neuf. Fabriqué en jersey fin de haute qualité.',
    condition: 'new',
    size: 'l',
    color: 'purple',
    material: 'jersey fin',
    gender: 'homme'
  },
  {
    id: '68',
    name: 'T-shirts homme',
    price: 143,
    originalPrice: 204,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'T-shirts homme authentique Lacoste. État neuf. coton durable et confortable.',
    condition: 'new',
    size: 'm',
    color: 'pink',
    material: 'coton',
    gender: 'homme'
  },
  {
    id: '69',
    name: 'T-shirts femme',
    price: 159,
    originalPrice: 227,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe T-shirts femme en coton. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'm',
    color: 'grey',
    material: 'coton',
    gender: 'femme'
  },
  {
    id: '70',
    name: 'Survêtements homme',
    price: 33,
    originalPrice: 47,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Survêtements homme en matière stretch. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 's',
    color: 'grey',
    material: 'matière stretch',
    gender: 'homme'
  },
  {
    id: '71',
    name: 'T-shirts homme',
    price: 114,
    originalPrice: 163,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'T-shirts homme élégant et intemporel. Bon état. Fabriqué en coton de haute qualité.',
    condition: 'good',
    size: 'xl',
    color: 'orange',
    material: 'coton',
    gender: 'homme'
  },
  {
    id: '72',
    name: 'Pullovers homme',
    price: 168,
    originalPrice: 240,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique Pullovers homme de la collection Lacoste. État neuf. Matière premium en laine mérinos.',
    condition: 'new',
    size: 'xl',
    color: 'beige',
    material: 'laine mérinos',
    gender: 'homme'
  },
  {
    id: '73',
    name: 'Maroquinerie femme',
    price: 45,
    originalPrice: 64,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Maroquinerie femme en nylon. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 'l',
    color: 'pink',
    material: 'nylon',
    gender: 'femme'
  },
  {
    id: '74',
    name: 'Polos femme',
    price: 141,
    originalPrice: 202,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Polos femme en jersey de coton. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'xs',
    color: 'orange',
    material: 'jersey de coton',
    gender: 'femme'
  },
  {
    id: '75',
    name: 'Pullovers homme',
    price: 205,
    originalPrice: 256,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Pullovers homme élégant et intemporel. Très bon état. Fabriqué en cachemire de haute qualité.',
    condition: 'very_good',
    size: 'xs',
    color: 'purple',
    material: 'cachemire',
    gender: 'homme'
  },
  {
    id: '76',
    name: 'Survêtements femme',
    price: 57,
    originalPrice: 82,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Survêtements femme en matière stretch. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 's',
    color: 'blue',
    material: 'matière stretch',
    gender: 'femme'
  },
  {
    id: '77',
    name: 'Robes & Jupes femme',
    price: 182,
    originalPrice: 228,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Robes & Jupes femme authentique Lacoste. Très bon état. crêpe durable et confortable.',
    condition: 'very_good',
    size: 's',
    color: 'black',
    material: 'crêpe',
    gender: 'femme'
  },
  {
    id: '78',
    name: 'Survêtements homme',
    price: 124,
    originalPrice: 177,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Survêtements homme élégant et intemporel. Excellent état. Fabriqué en polyester technique de haute qualité.',
    condition: 'excellent',
    size: 's',
    color: 'red',
    material: 'polyester technique',
    gender: 'homme'
  },
  {
    id: '79',
    name: 'Manteaux & Vestes homme',
    price: 125,
    originalPrice: 179,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Manteaux & Vestes homme en coton imperméable. Excellent état. Coupe ajustée et confortable.',
    condition: 'excellent',
    size: 'xxl_and_more',
    color: 'blue',
    material: 'coton imperméable',
    gender: 'homme'
  },
  {
    id: '80',
    name: 'Pullovers homme',
    price: 122,
    originalPrice: 153,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Pullovers homme élégant et intemporel. Très bon état. Fabriqué en laine mérinos de haute qualité.',
    condition: 'very_good',
    size: 'xl',
    color: 'pink',
    material: 'laine mérinos',
    gender: 'homme'
  },
  {
    id: '81',
    name: 'Sweatshirts femme',
    price: 98,
    originalPrice: 122,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Sweatshirts femme authentique Lacoste. Très bon état. jersey lourd durable et confortable.',
    condition: 'very_good',
    size: 'xl',
    color: 'orange',
    material: 'jersey lourd',
    gender: 'femme'
  },
  {
    id: '82',
    name: 'Polos homme',
    price: 208,
    originalPrice: 297,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Polos homme en coton bio. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 'xxl_and_more',
    color: 'green',
    material: 'coton bio',
    gender: 'homme'
  },
  {
    id: '83',
    name: 'Pullovers homme',
    price: 172,
    originalPrice: 245,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Pullovers homme en coton tricoté. Excellent état. Coupe ajustée et confortable.',
    condition: 'excellent',
    size: 'xs',
    color: 'beige',
    material: 'coton tricoté',
    gender: 'homme'
  },
  {
    id: '84',
    name: 'Polos homme',
    price: 188,
    originalPrice: 268,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Polos homme authentique Lacoste. Bon état. jersey de coton durable et confortable.',
    condition: 'good',
    size: 'm',
    color: 'black',
    material: 'jersey de coton',
    gender: 'homme'
  },
  {
    id: '85',
    name: 'T-shirts homme',
    price: 163,
    originalPrice: 233,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'T-shirts homme élégant et intemporel. État neuf. Fabriqué en coton organique de haute qualité.',
    condition: 'new',
    size: 'xxl_and_more',
    color: 'black',
    material: 'coton organique',
    gender: 'homme'
  },
  {
    id: '86',
    name: 'Pantalons & Shorts homme',
    price: 175,
    originalPrice: 250,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Magnifique Pantalons & Shorts homme de la collection Lacoste. Bon état. Matière premium en toile de coton.',
    condition: 'good',
    size: 'xl',
    color: 'orange',
    material: 'toile de coton',
    gender: 'homme'
  },
  {
    id: '87',
    name: 'Manteaux & Vestes homme',
    price: 54,
    originalPrice: 77,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Manteaux & Vestes homme authentique Lacoste. Bon état. coton imperméable durable et confortable.',
    condition: 'good',
    size: 'l',
    color: 'purple',
    material: 'coton imperméable',
    gender: 'homme'
  },
  {
    id: '88',
    name: 'Pantalons & Shorts femme',
    price: 54,
    originalPrice: 67,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Magnifique Pantalons & Shorts femme de la collection Lacoste. Très bon état. Matière premium en coton sergé.',
    condition: 'very_good',
    size: 'xl',
    color: 'brown',
    material: 'coton sergé',
    gender: 'femme'
  },
  {
    id: '89',
    name: 'Robes & Jupes femme',
    price: 193,
    originalPrice: 276,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Magnifique Robes & Jupes femme de la collection Lacoste. État neuf. Matière premium en coton stretch.',
    condition: 'new',
    size: 'xl',
    color: 'beige',
    material: 'coton stretch',
    gender: 'femme'
  },
  {
    id: '90',
    name: 'Sweatshirts homme',
    price: 173,
    originalPrice: 216,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Sweatshirts homme élégant et intemporel. Très bon état. Fabriqué en coton brossé de haute qualité.',
    condition: 'very_good',
    size: 'xs',
    color: 'grey',
    material: 'coton brossé',
    gender: 'homme'
  },
  {
    id: '91',
    name: 'Pantalons & Shorts femme',
    price: 136,
    originalPrice: 194,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Magnifique Pantalons & Shorts femme de la collection Lacoste. État neuf. Matière premium en gabardine.',
    condition: 'new',
    size: 'xs',
    color: 'blue',
    material: 'gabardine',
    gender: 'femme'
  },
  {
    id: '92',
    name: 'Maroquinerie homme',
    price: 67,
    originalPrice: 84,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Maroquinerie homme en cuir. Très bon état. Coupe ajustée et confortable.',
    condition: 'very_good',
    size: 's',
    color: 'black',
    material: 'cuir',
    gender: 'homme'
  },
  {
    id: '93',
    name: 'Survêtements homme',
    price: 97,
    originalPrice: 139,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Survêtements homme en polyester technique. Excellent état. Coupe ajustée et confortable.',
    condition: 'excellent',
    size: 'm',
    color: 'grey',
    material: 'polyester technique',
    gender: 'homme'
  },
  {
    id: '94',
    name: 'Survêtements femme',
    price: 137,
    originalPrice: 195,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Survêtements femme en matière stretch. Excellent état. Coupe ajustée et confortable.',
    condition: 'excellent',
    size: 'l',
    color: 'brown',
    material: 'matière stretch',
    gender: 'femme'
  },
  {
    id: '95',
    name: 'Pullovers femme',
    price: 31,
    originalPrice: 45,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Pullovers femme en cachemire. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'l',
    color: 'grey',
    material: 'cachemire',
    gender: 'femme'
  },
  {
    id: '96',
    name: 'Chemises homme',
    price: 29,
    originalPrice: 41,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Chemises homme authentique Lacoste. Bon état. oxford durable et confortable.',
    condition: 'good',
    size: 'xs',
    color: 'yellow',
    material: 'oxford',
    gender: 'homme'
  },
  {
    id: '97',
    name: 'Maroquinerie femme',
    price: 198,
    originalPrice: 248,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Maroquinerie femme en nylon. Très bon état. Coupe ajustée et confortable.',
    condition: 'very_good',
    size: 'l',
    color: 'purple',
    material: 'nylon',
    gender: 'femme'
  },
  {
    id: '98',
    name: 'Tops & Chemises femme',
    price: 50,
    originalPrice: 72,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Tops & Chemises femme authentique Lacoste. État neuf. viscose durable et confortable.',
    condition: 'new',
    size: 'xxl_and_more',
    color: 'brown',
    material: 'viscose',
    gender: 'femme'
  },
  {
    id: '99',
    name: 'Chemises homme',
    price: 24,
    originalPrice: 34,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique Chemises homme de la collection Lacoste. Excellent état. Matière premium en popeline.',
    condition: 'excellent',
    size: 'xxl_and_more',
    color: 'orange',
    material: 'popeline',
    gender: 'homme'
  },
  {
    id: '100',
    name: 'Maroquinerie femme',
    price: 232,
    originalPrice: 290,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Maroquinerie femme élégant et intemporel. Très bon état. Fabriqué en toile enduite de haute qualité.',
    condition: 'very_good',
    size: 's',
    color: 'purple',
    material: 'toile enduite',
    gender: 'femme'
  },
  {
    id: '101',
    name: 'Chemises homme',
    price: 166,
    originalPrice: 237,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Chemises homme en popeline. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'xl',
    color: 'black',
    material: 'popeline',
    gender: 'homme'
  },
  {
    id: '102',
    name: 'Chemises homme',
    price: 138,
    originalPrice: 172,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Magnifique Chemises homme de la collection Lacoste. Très bon état. Matière premium en popeline.',
    condition: 'very_good',
    size: 'l',
    color: 'orange',
    material: 'popeline',
    gender: 'homme'
  },
  {
    id: '103',
    name: 'Survêtements homme',
    price: 153,
    originalPrice: 218,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Survêtements homme en polyester technique. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'm',
    color: 'black',
    material: 'polyester technique',
    gender: 'homme'
  },
  {
    id: '104',
    name: 'Polos femme',
    price: 115,
    originalPrice: 165,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Polos femme en jersey de coton. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'l',
    color: 'white',
    material: 'jersey de coton',
    gender: 'femme'
  },
  {
    id: '105',
    name: 'Polos homme',
    price: 61,
    originalPrice: 87,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Polos homme authentique Lacoste. Excellent état. jersey de coton durable et confortable.',
    condition: 'excellent',
    size: 's',
    color: 'blue',
    material: 'jersey de coton',
    gender: 'homme'
  },
  {
    id: '106',
    name: 'Manteaux & Vestes homme',
    price: 59,
    originalPrice: 85,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Manteaux & Vestes homme en polyester recyclé. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'l',
    color: 'beige',
    material: 'polyester recyclé',
    gender: 'homme'
  },
  {
    id: '107',
    name: 'Maroquinerie femme',
    price: 225,
    originalPrice: 281,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Maroquinerie femme authentique Lacoste. Très bon état. cuir durable et confortable.',
    condition: 'very_good',
    size: 's',
    color: 'red',
    material: 'cuir',
    gender: 'femme'
  },
  {
    id: '108',
    name: 'Tops & Chemises femme',
    price: 84,
    originalPrice: 120,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Tops & Chemises femme en popeline de coton. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 'xl',
    color: 'beige',
    material: 'popeline de coton',
    gender: 'femme'
  },
  {
    id: '109',
    name: 'Polos homme',
    price: 104,
    originalPrice: 130,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Polos homme élégant et intemporel. Très bon état. Fabriqué en coton bio de haute qualité.',
    condition: 'very_good',
    size: 's',
    color: 'pink',
    material: 'coton bio',
    gender: 'homme'
  },
  {
    id: '110',
    name: 'Survêtements homme',
    price: 62,
    originalPrice: 77,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Survêtements homme élégant et intemporel. Très bon état. Fabriqué en coton molletonné de haute qualité.',
    condition: 'very_good',
    size: 'xs',
    color: 'pink',
    material: 'coton molletonné',
    gender: 'homme'
  },
  {
    id: '111',
    name: 'Sweatshirts femme',
    price: 121,
    originalPrice: 173,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique Sweatshirts femme de la collection Lacoste. Bon état. Matière premium en molleton.',
    condition: 'good',
    size: 'm',
    color: 'grey',
    material: 'molleton',
    gender: 'femme'
  },
  {
    id: '112',
    name: 'Pantalons & Shorts femme',
    price: 141,
    originalPrice: 201,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Pantalons & Shorts femme authentique Lacoste. État neuf. toile de coton durable et confortable.',
    condition: 'new',
    size: 'm',
    color: 'orange',
    material: 'toile de coton',
    gender: 'femme'
  },
  {
    id: '113',
    name: 'T-shirts femme',
    price: 82,
    originalPrice: 102,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'T-shirts femme authentique Lacoste. Très bon état. coton organique durable et confortable.',
    condition: 'very_good',
    size: 'm',
    color: 'white',
    material: 'coton organique',
    gender: 'femme'
  },
  {
    id: '114',
    name: 'Survêtements homme',
    price: 32,
    originalPrice: 46,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Magnifique Survêtements homme de la collection Lacoste. Bon état. Matière premium en matière stretch.',
    condition: 'good',
    size: 'l',
    color: 'blue',
    material: 'matière stretch',
    gender: 'homme'
  },
  {
    id: '115',
    name: 'Manteaux & Vestes femme',
    price: 81,
    originalPrice: 116,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Manteaux & Vestes femme en laine. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'xs',
    color: 'yellow',
    material: 'laine',
    gender: 'femme'
  },
  {
    id: '116',
    name: 'Manteaux & Vestes homme',
    price: 181,
    originalPrice: 258,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Manteaux & Vestes homme élégant et intemporel. Bon état. Fabriqué en polyester recyclé de haute qualité.',
    condition: 'good',
    size: 'm',
    color: 'blue',
    material: 'polyester recyclé',
    gender: 'homme'
  },
  {
    id: '117',
    name: 'Polos femme',
    price: 176,
    originalPrice: 252,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Polos femme élégant et intemporel. Bon état. Fabriqué en jersey de coton de haute qualité.',
    condition: 'good',
    size: 'xl',
    color: 'blue',
    material: 'jersey de coton',
    gender: 'femme'
  },
  {
    id: '118',
    name: 'Pullovers homme',
    price: 151,
    originalPrice: 215,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Pullovers homme élégant et intemporel. Bon état. Fabriqué en laine mérinos de haute qualité.',
    condition: 'good',
    size: 'l',
    color: 'orange',
    material: 'laine mérinos',
    gender: 'homme'
  },
  {
    id: '119',
    name: 'Robes & Jupes femme',
    price: 55,
    originalPrice: 78,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Robes & Jupes femme élégant et intemporel. Bon état. Fabriqué en jersey de haute qualité.',
    condition: 'good',
    size: 'm',
    color: 'black',
    material: 'jersey',
    gender: 'femme'
  },
  {
    id: '120',
    name: 'Survêtements femme',
    price: 172,
    originalPrice: 215,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Survêtements femme authentique Lacoste. Très bon état. coton molletonné durable et confortable.',
    condition: 'very_good',
    size: 'xxl_and_more',
    color: 'grey',
    material: 'coton molletonné',
    gender: 'femme'
  },
  {
    id: '121',
    name: 'Polos femme',
    price: 134,
    originalPrice: 192,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Polos femme en coton piqué. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 'm',
    color: 'orange',
    material: 'coton piqué',
    gender: 'femme'
  },
  {
    id: '122',
    name: 'T-shirts homme',
    price: 107,
    originalPrice: 153,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'T-shirts homme élégant et intemporel. État neuf. Fabriqué en coton organique de haute qualité.',
    condition: 'new',
    size: 'xl',
    color: 'purple',
    material: 'coton organique',
    gender: 'homme'
  },
  {
    id: '123',
    name: 'Robes & Jupes femme',
    price: 98,
    originalPrice: 123,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Robes & Jupes femme authentique Lacoste. Très bon état. jersey durable et confortable.',
    condition: 'very_good',
    size: 'm',
    color: 'purple',
    material: 'jersey',
    gender: 'femme'
  },
  {
    id: '124',
    name: 'Chemises femme',
    price: 112,
    originalPrice: 160,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Chemises femme élégant et intemporel. État neuf. Fabriqué en oxford de haute qualité.',
    condition: 'new',
    size: 'l',
    color: 'red',
    material: 'oxford',
    gender: 'femme'
  },
  {
    id: '125',
    name: 'Pantalons & Shorts homme',
    price: 92,
    originalPrice: 131,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Magnifique Pantalons & Shorts homme de la collection Lacoste. État neuf. Matière premium en gabardine.',
    condition: 'new',
    size: 'm',
    color: 'grey',
    material: 'gabardine',
    gender: 'homme'
  },
  {
    id: '126',
    name: 'T-shirts homme',
    price: 77,
    originalPrice: 110,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Magnifique T-shirts homme de la collection Lacoste. Bon état. Matière premium en jersey fin.',
    condition: 'good',
    size: 'xxl_and_more',
    color: 'red',
    material: 'jersey fin',
    gender: 'homme'
  },
  {
    id: '127',
    name: 'Maroquinerie femme',
    price: 166,
    originalPrice: 237,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Maroquinerie femme authentique Lacoste. État neuf. toile enduite durable et confortable.',
    condition: 'new',
    size: 'l',
    color: 'yellow',
    material: 'toile enduite',
    gender: 'femme'
  },
  {
    id: '128',
    name: 'Survêtements homme',
    price: 176,
    originalPrice: 252,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Survêtements homme authentique Lacoste. État neuf. coton molletonné durable et confortable.',
    condition: 'new',
    size: 'm',
    color: 'blue',
    material: 'coton molletonné',
    gender: 'homme'
  },
  {
    id: '129',
    name: 'Manteaux & Vestes femme',
    price: 64,
    originalPrice: 91,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Manteaux & Vestes femme authentique Lacoste. Excellent état. laine durable et confortable.',
    condition: 'excellent',
    size: 'xs',
    color: 'beige',
    material: 'laine',
    gender: 'femme'
  },
  {
    id: '130',
    name: 'Manteaux & Vestes homme',
    price: 87,
    originalPrice: 109,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Manteaux & Vestes homme élégant et intemporel. Très bon état. Fabriqué en polyester recyclé de haute qualité.',
    condition: 'very_good',
    size: 'xxl_and_more',
    color: 'pink',
    material: 'polyester recyclé',
    gender: 'homme'
  },
  {
    id: '131',
    name: 'T-shirts femme',
    price: 179,
    originalPrice: 224,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'T-shirts femme élégant et intemporel. Très bon état. Fabriqué en jersey fin de haute qualité.',
    condition: 'very_good',
    size: 's',
    color: 'blue',
    material: 'jersey fin',
    gender: 'femme'
  },
  {
    id: '132',
    name: 'Survêtements homme',
    price: 74,
    originalPrice: 106,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Survêtements homme en polyester technique. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'xs',
    color: 'beige',
    material: 'polyester technique',
    gender: 'homme'
  },
  {
    id: '133',
    name: 'T-shirts femme',
    price: 198,
    originalPrice: 248,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe T-shirts femme en jersey fin. Très bon état. Coupe ajustée et confortable.',
    condition: 'very_good',
    size: 'xl',
    color: 'blue',
    material: 'jersey fin',
    gender: 'femme'
  },
  {
    id: '134',
    name: 'Maroquinerie homme',
    price: 110,
    originalPrice: 138,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique Maroquinerie homme de la collection Lacoste. Très bon état. Matière premium en cuir.',
    condition: 'very_good',
    size: 'xs',
    color: 'white',
    material: 'cuir',
    gender: 'homme'
  },
  {
    id: '135',
    name: 'Chemises femme',
    price: 61,
    originalPrice: 87,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Chemises femme en lin. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'm',
    color: 'orange',
    material: 'lin',
    gender: 'femme'
  },
  {
    id: '136',
    name: 'Survêtements homme',
    price: 149,
    originalPrice: 186,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Survêtements homme authentique Lacoste. Très bon état. coton molletonné durable et confortable.',
    condition: 'very_good',
    size: 'm',
    color: 'yellow',
    material: 'coton molletonné',
    gender: 'homme'
  },
  {
    id: '137',
    name: 'Pantalons & Shorts femme',
    price: 180,
    originalPrice: 257,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Pantalons & Shorts femme en toile de coton. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 'xl',
    color: 'grey',
    material: 'toile de coton',
    gender: 'femme'
  },
  {
    id: '138',
    name: 'Robes & Jupes femme',
    price: 58,
    originalPrice: 72,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Robes & Jupes femme élégant et intemporel. Très bon état. Fabriqué en coton stretch de haute qualité.',
    condition: 'very_good',
    size: 'xl',
    color: 'brown',
    material: 'coton stretch',
    gender: 'femme'
  },
  {
    id: '139',
    name: 'Pullovers homme',
    price: 201,
    originalPrice: 287,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Pullovers homme en cachemire. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 's',
    color: 'beige',
    material: 'cachemire',
    gender: 'homme'
  },
  {
    id: '140',
    name: 'Pullovers femme',
    price: 90,
    originalPrice: 129,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Pullovers femme en laine mérinos. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 'xxl_and_more',
    color: 'blue',
    material: 'laine mérinos',
    gender: 'femme'
  },
  {
    id: '141',
    name: 'Chemises femme',
    price: 89,
    originalPrice: 127,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Chemises femme en popeline. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 'xs',
    color: 'brown',
    material: 'popeline',
    gender: 'femme'
  },
  {
    id: '142',
    name: 'Sweatshirts femme',
    price: 230,
    originalPrice: 287,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Magnifique Sweatshirts femme de la collection Lacoste. Très bon état. Matière premium en jersey lourd.',
    condition: 'very_good',
    size: 'xxl_and_more',
    color: 'beige',
    material: 'jersey lourd',
    gender: 'femme'
  },
  {
    id: '143',
    name: 'T-shirts femme',
    price: 102,
    originalPrice: 127,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique T-shirts femme de la collection Lacoste. Très bon état. Matière premium en coton.',
    condition: 'very_good',
    size: 'l',
    color: 'green',
    material: 'coton',
    gender: 'femme'
  },
  {
    id: '144',
    name: 'Tops & Chemises femme',
    price: 234,
    originalPrice: 292,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Tops & Chemises femme en viscose. Très bon état. Coupe ajustée et confortable.',
    condition: 'very_good',
    size: 'l',
    color: 'black',
    material: 'viscose',
    gender: 'femme'
  },
  {
    id: '145',
    name: 'T-shirts femme',
    price: 45,
    originalPrice: 64,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe T-shirts femme en coton organique. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 'xxl_and_more',
    color: 'orange',
    material: 'coton organique',
    gender: 'femme'
  },
  {
    id: '146',
    name: 'Pullovers femme',
    price: 76,
    originalPrice: 108,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Pullovers femme en coton tricoté. Excellent état. Coupe ajustée et confortable.',
    condition: 'excellent',
    size: 'l',
    color: 'brown',
    material: 'coton tricoté',
    gender: 'femme'
  },
  {
    id: '147',
    name: 'Chemises femme',
    price: 31,
    originalPrice: 45,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Chemises femme en popeline. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'l',
    color: 'blue',
    material: 'popeline',
    gender: 'femme'
  },
  {
    id: '148',
    name: 'Robes & Jupes femme',
    price: 50,
    originalPrice: 72,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Robes & Jupes femme en coton stretch. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'xxl_and_more',
    color: 'grey',
    material: 'coton stretch',
    gender: 'femme'
  },
  {
    id: '149',
    name: 'Chemises homme',
    price: 177,
    originalPrice: 253,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Chemises homme élégant et intemporel. État neuf. Fabriqué en lin de haute qualité.',
    condition: 'new',
    size: 'xl',
    color: 'pink',
    material: 'lin',
    gender: 'homme'
  },
  {
    id: '150',
    name: 'Manteaux & Vestes homme',
    price: 118,
    originalPrice: 169,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Magnifique Manteaux & Vestes homme de la collection Lacoste. Excellent état. Matière premium en laine.',
    condition: 'excellent',
    size: 'xs',
    color: 'red',
    material: 'laine',
    gender: 'homme'
  },
  {
    id: '151',
    name: 'Manteaux & Vestes homme',
    price: 146,
    originalPrice: 182,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Magnifique Manteaux & Vestes homme de la collection Lacoste. Très bon état. Matière premium en laine.',
    condition: 'very_good',
    size: 'l',
    color: 'purple',
    material: 'laine',
    gender: 'homme'
  },
  {
    id: '152',
    name: 'Survêtements femme',
    price: 49,
    originalPrice: 70,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Survêtements femme élégant et intemporel. État neuf. Fabriqué en polyester technique de haute qualité.',
    condition: 'new',
    size: 'xl',
    color: 'orange',
    material: 'polyester technique',
    gender: 'femme'
  },
  {
    id: '153',
    name: 'Pullovers homme',
    price: 97,
    originalPrice: 138,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique Pullovers homme de la collection Lacoste. État neuf. Matière premium en cachemire.',
    condition: 'new',
    size: 'l',
    color: 'yellow',
    material: 'cachemire',
    gender: 'homme'
  },
  {
    id: '154',
    name: 'Manteaux & Vestes homme',
    price: 35,
    originalPrice: 44,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Manteaux & Vestes homme authentique Lacoste. Très bon état. coton imperméable durable et confortable.',
    condition: 'very_good',
    size: 'm',
    color: 'purple',
    material: 'coton imperméable',
    gender: 'homme'
  },
  {
    id: '155',
    name: 'Chemises homme',
    price: 200,
    originalPrice: 250,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Chemises homme élégant et intemporel. Très bon état. Fabriqué en oxford de haute qualité.',
    condition: 'very_good',
    size: 'xl',
    color: 'pink',
    material: 'oxford',
    gender: 'homme'
  },
  {
    id: '156',
    name: 'Manteaux & Vestes homme',
    price: 144,
    originalPrice: 206,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique Manteaux & Vestes homme de la collection Lacoste. État neuf. Matière premium en laine.',
    condition: 'new',
    size: 'xs',
    color: 'yellow',
    material: 'laine',
    gender: 'homme'
  },
  {
    id: '157',
    name: 'Manteaux & Vestes homme',
    price: 210,
    originalPrice: 300,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Magnifique Manteaux & Vestes homme de la collection Lacoste. État neuf. Matière premium en polyester recyclé.',
    condition: 'new',
    size: 'xl',
    color: 'yellow',
    material: 'polyester recyclé',
    gender: 'homme'
  },
  {
    id: '158',
    name: 'Survêtements femme',
    price: 202,
    originalPrice: 288,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Survêtements femme élégant et intemporel. Bon état. Fabriqué en coton molletonné de haute qualité.',
    condition: 'good',
    size: 'xl',
    color: 'beige',
    material: 'coton molletonné',
    gender: 'femme'
  },
  {
    id: '159',
    name: 'Tops & Chemises femme',
    price: 134,
    originalPrice: 191,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Magnifique Tops & Chemises femme de la collection Lacoste. Excellent état. Matière premium en popeline de coton.',
    condition: 'excellent',
    size: 'l',
    color: 'pink',
    material: 'popeline de coton',
    gender: 'femme'
  },
  {
    id: '160',
    name: 'Maroquinerie homme',
    price: 124,
    originalPrice: 177,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Maroquinerie homme élégant et intemporel. Excellent état. Fabriqué en toile enduite de haute qualité.',
    condition: 'excellent',
    size: 's',
    color: 'yellow',
    material: 'toile enduite',
    gender: 'homme'
  },
  {
    id: '161',
    name: 'Sweatshirts femme',
    price: 76,
    originalPrice: 95,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Sweatshirts femme élégant et intemporel. Très bon état. Fabriqué en molleton de haute qualité.',
    condition: 'very_good',
    size: 'l',
    color: 'orange',
    material: 'molleton',
    gender: 'femme'
  },
  {
    id: '162',
    name: 'Pantalons & Shorts homme',
    price: 55,
    originalPrice: 79,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Magnifique Pantalons & Shorts homme de la collection Lacoste. Bon état. Matière premium en toile de coton.',
    condition: 'good',
    size: 'l',
    color: 'pink',
    material: 'toile de coton',
    gender: 'homme'
  },
  {
    id: '163',
    name: 'Polos homme',
    price: 122,
    originalPrice: 174,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Magnifique Polos homme de la collection Lacoste. État neuf. Matière premium en coton bio.',
    condition: 'new',
    size: 'xxl_and_more',
    color: 'orange',
    material: 'coton bio',
    gender: 'homme'
  },
  {
    id: '164',
    name: 'T-shirts homme',
    price: 82,
    originalPrice: 103,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'T-shirts homme élégant et intemporel. Très bon état. Fabriqué en coton de haute qualité.',
    condition: 'very_good',
    size: 'xl',
    color: 'pink',
    material: 'coton',
    gender: 'homme'
  },
  {
    id: '165',
    name: 'Survêtements femme',
    price: 83,
    originalPrice: 119,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Survêtements femme en coton molletonné. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'l',
    color: 'grey',
    material: 'coton molletonné',
    gender: 'femme'
  },
  {
    id: '166',
    name: 'Manteaux & Vestes femme',
    price: 27,
    originalPrice: 34,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Manteaux & Vestes femme authentique Lacoste. Très bon état. coton imperméable durable et confortable.',
    condition: 'very_good',
    size: 'xxl_and_more',
    color: 'purple',
    material: 'coton imperméable',
    gender: 'femme'
  },
  {
    id: '167',
    name: 'Sweatshirts homme',
    price: 190,
    originalPrice: 271,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Sweatshirts homme authentique Lacoste. État neuf. coton brossé durable et confortable.',
    condition: 'new',
    size: 'xl',
    color: 'black',
    material: 'coton brossé',
    gender: 'homme'
  },
  {
    id: '168',
    name: 'Survêtements femme',
    price: 105,
    originalPrice: 150,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Magnifique Survêtements femme de la collection Lacoste. Excellent état. Matière premium en polyester technique.',
    condition: 'excellent',
    size: 'xs',
    color: 'pink',
    material: 'polyester technique',
    gender: 'femme'
  },
  {
    id: '169',
    name: 'Pantalons & Shorts homme',
    price: 197,
    originalPrice: 281,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Pantalons & Shorts homme élégant et intemporel. Bon état. Fabriqué en coton sergé de haute qualité.',
    condition: 'good',
    size: 's',
    color: 'yellow',
    material: 'coton sergé',
    gender: 'homme'
  },
  {
    id: '170',
    name: 'Polos homme',
    price: 135,
    originalPrice: 193,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Polos homme authentique Lacoste. État neuf. coton bio durable et confortable.',
    condition: 'new',
    size: 's',
    color: 'orange',
    material: 'coton bio',
    gender: 'homme'
  },
  {
    id: '171',
    name: 'Polos homme',
    price: 167,
    originalPrice: 238,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Polos homme authentique Lacoste. Excellent état. coton bio durable et confortable.',
    condition: 'excellent',
    size: 'xxl_and_more',
    color: 'purple',
    material: 'coton bio',
    gender: 'homme'
  },
  {
    id: '172',
    name: 'T-shirts homme',
    price: 110,
    originalPrice: 157,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'T-shirts homme élégant et intemporel. Bon état. Fabriqué en coton organique de haute qualité.',
    condition: 'good',
    size: 'xxl_and_more',
    color: 'green',
    material: 'coton organique',
    gender: 'homme'
  },
  {
    id: '173',
    name: 'Chemises homme',
    price: 183,
    originalPrice: 262,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Chemises homme élégant et intemporel. État neuf. Fabriqué en lin de haute qualité.',
    condition: 'new',
    size: 's',
    color: 'green',
    material: 'lin',
    gender: 'homme'
  },
  {
    id: '174',
    name: 'Polos femme',
    price: 82,
    originalPrice: 103,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Polos femme élégant et intemporel. Très bon état. Fabriqué en coton piqué de haute qualité.',
    condition: 'very_good',
    size: 'xl',
    color: 'yellow',
    material: 'coton piqué',
    gender: 'femme'
  },
  {
    id: '175',
    name: 'Survêtements homme',
    price: 39,
    originalPrice: 49,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Survêtements homme authentique Lacoste. Très bon état. matière stretch durable et confortable.',
    condition: 'very_good',
    size: 'xs',
    color: 'brown',
    material: 'matière stretch',
    gender: 'homme'
  },
  {
    id: '176',
    name: 'T-shirts homme',
    price: 31,
    originalPrice: 45,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Magnifique T-shirts homme de la collection Lacoste. Bon état. Matière premium en jersey fin.',
    condition: 'good',
    size: 'l',
    color: 'beige',
    material: 'jersey fin',
    gender: 'homme'
  },
  {
    id: '177',
    name: 'Pantalons & Shorts femme',
    price: 35,
    originalPrice: 50,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Pantalons & Shorts femme en toile de coton. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 'xxl_and_more',
    color: 'green',
    material: 'toile de coton',
    gender: 'femme'
  },
  {
    id: '178',
    name: 'Polos homme',
    price: 118,
    originalPrice: 168,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Polos homme élégant et intemporel. Excellent état. Fabriqué en jersey de coton de haute qualité.',
    condition: 'excellent',
    size: 'xxl_and_more',
    color: 'white',
    material: 'jersey de coton',
    gender: 'homme'
  },
  {
    id: '179',
    name: 'Survêtements homme',
    price: 69,
    originalPrice: 99,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Survêtements homme en coton molletonné. Excellent état. Coupe ajustée et confortable.',
    condition: 'excellent',
    size: 'xxl_and_more',
    color: 'orange',
    material: 'coton molletonné',
    gender: 'homme'
  },
  {
    id: '180',
    name: 'Survêtements femme',
    price: 88,
    originalPrice: 125,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Survêtements femme élégant et intemporel. État neuf. Fabriqué en coton molletonné de haute qualité.',
    condition: 'new',
    size: 'xl',
    color: 'purple',
    material: 'coton molletonné',
    gender: 'femme'
  },
  {
    id: '181',
    name: 'Survêtements homme',
    price: 95,
    originalPrice: 136,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Magnifique Survêtements homme de la collection Lacoste. Excellent état. Matière premium en matière stretch.',
    condition: 'excellent',
    size: 's',
    color: 'orange',
    material: 'matière stretch',
    gender: 'homme'
  },
  {
    id: '182',
    name: 'Robes & Jupes femme',
    price: 202,
    originalPrice: 289,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Robes & Jupes femme en crêpe. Excellent état. Coupe ajustée et confortable.',
    condition: 'excellent',
    size: 's',
    color: 'blue',
    material: 'crêpe',
    gender: 'femme'
  },
  {
    id: '183',
    name: 'Pullovers femme',
    price: 67,
    originalPrice: 95,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique Pullovers femme de la collection Lacoste. État neuf. Matière premium en cachemire.',
    condition: 'new',
    size: 'xl',
    color: 'grey',
    material: 'cachemire',
    gender: 'femme'
  },
  {
    id: '184',
    name: 'Manteaux & Vestes femme',
    price: 124,
    originalPrice: 155,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Manteaux & Vestes femme en laine. Très bon état. Coupe ajustée et confortable.',
    condition: 'very_good',
    size: 'xl',
    color: 'yellow',
    material: 'laine',
    gender: 'femme'
  },
  {
    id: '185',
    name: 'Sweatshirts homme',
    price: 170,
    originalPrice: 243,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Sweatshirts homme élégant et intemporel. Bon état. Fabriqué en coton brossé de haute qualité.',
    condition: 'good',
    size: 's',
    color: 'beige',
    material: 'coton brossé',
    gender: 'homme'
  },
  {
    id: '186',
    name: 'Tops & Chemises femme',
    price: 22,
    originalPrice: 32,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Tops & Chemises femme authentique Lacoste. Excellent état. soie durable et confortable.',
    condition: 'excellent',
    size: 'xl',
    color: 'blue',
    material: 'soie',
    gender: 'femme'
  },
  {
    id: '187',
    name: 'Survêtements homme',
    price: 188,
    originalPrice: 268,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Magnifique Survêtements homme de la collection Lacoste. État neuf. Matière premium en polyester technique.',
    condition: 'new',
    size: 'l',
    color: 'orange',
    material: 'polyester technique',
    gender: 'homme'
  },
  {
    id: '188',
    name: 'Manteaux & Vestes homme',
    price: 207,
    originalPrice: 296,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Manteaux & Vestes homme authentique Lacoste. Excellent état. coton imperméable durable et confortable.',
    condition: 'excellent',
    size: 'xl',
    color: 'black',
    material: 'coton imperméable',
    gender: 'homme'
  },
  {
    id: '189',
    name: 'T-shirts femme',
    price: 154,
    originalPrice: 220,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Magnifique T-shirts femme de la collection Lacoste. Excellent état. Matière premium en coton organique.',
    condition: 'excellent',
    size: 'm',
    color: 'purple',
    material: 'coton organique',
    gender: 'femme'
  },
  {
    id: '190',
    name: 'T-shirts homme',
    price: 168,
    originalPrice: 240,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'T-shirts homme élégant et intemporel. État neuf. Fabriqué en coton organique de haute qualité.',
    condition: 'new',
    size: 'm',
    color: 'green',
    material: 'coton organique',
    gender: 'homme'
  },
  {
    id: '191',
    name: 'Pantalons & Shorts femme',
    price: 50,
    originalPrice: 71,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Pantalons & Shorts femme en coton sergé. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 'l',
    color: 'black',
    material: 'coton sergé',
    gender: 'femme'
  },
  {
    id: '192',
    name: 'Tops & Chemises femme',
    price: 123,
    originalPrice: 176,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique Tops & Chemises femme de la collection Lacoste. État neuf. Matière premium en viscose.',
    condition: 'new',
    size: 'xl',
    color: 'brown',
    material: 'viscose',
    gender: 'femme'
  },
  {
    id: '193',
    name: 'Pantalons & Shorts femme',
    price: 120,
    originalPrice: 171,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Pantalons & Shorts femme en toile de coton. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 'm',
    color: 'brown',
    material: 'toile de coton',
    gender: 'femme'
  },
  {
    id: '194',
    name: 'Pantalons & Shorts homme',
    price: 120,
    originalPrice: 150,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Pantalons & Shorts homme authentique Lacoste. Très bon état. toile de coton durable et confortable.',
    condition: 'very_good',
    size: 'xs',
    color: 'red',
    material: 'toile de coton',
    gender: 'homme'
  },
  {
    id: '195',
    name: 'Polos femme',
    price: 97,
    originalPrice: 121,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Polos femme en coton piqué. Très bon état. Coupe ajustée et confortable.',
    condition: 'very_good',
    size: 's',
    color: 'black',
    material: 'coton piqué',
    gender: 'femme'
  },
  {
    id: '196',
    name: 'Pullovers femme',
    price: 154,
    originalPrice: 220,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Pullovers femme en coton tricoté. Excellent état. Coupe ajustée et confortable.',
    condition: 'excellent',
    size: 'xs',
    color: 'beige',
    material: 'coton tricoté',
    gender: 'femme'
  },
  {
    id: '197',
    name: 'Survêtements homme',
    price: 120,
    originalPrice: 172,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Survêtements homme en polyester technique. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 'l',
    color: 'purple',
    material: 'polyester technique',
    gender: 'homme'
  },
  {
    id: '198',
    name: 'Robes & Jupes femme',
    price: 94,
    originalPrice: 134,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Robes & Jupes femme authentique Lacoste. Excellent état. crêpe durable et confortable.',
    condition: 'excellent',
    size: 'xxl_and_more',
    color: 'brown',
    material: 'crêpe',
    gender: 'femme'
  },
  {
    id: '199',
    name: 'Survêtements femme',
    price: 42,
    originalPrice: 60,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Survêtements femme élégant et intemporel. Excellent état. Fabriqué en polyester technique de haute qualité.',
    condition: 'excellent',
    size: 'xs',
    color: 'brown',
    material: 'polyester technique',
    gender: 'femme'
  },
  {
    id: '200',
    name: 'Sweatshirts homme',
    price: 83,
    originalPrice: 119,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Sweatshirts homme en jersey lourd. Excellent état. Coupe ajustée et confortable.',
    condition: 'excellent',
    size: 'l',
    color: 'black',
    material: 'jersey lourd',
    gender: 'homme'
  },
  {
    id: '201',
    name: 'Robes & Jupes femme',
    price: 145,
    originalPrice: 207,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Robes & Jupes femme authentique Lacoste. Bon état. crêpe durable et confortable.',
    condition: 'good',
    size: 'xl',
    color: 'red',
    material: 'crêpe',
    gender: 'femme'
  },
  {
    id: '202',
    name: 'Manteaux & Vestes femme',
    price: 139,
    originalPrice: 198,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Magnifique Manteaux & Vestes femme de la collection Lacoste. État neuf. Matière premium en laine.',
    condition: 'new',
    size: 'xl',
    color: 'purple',
    material: 'laine',
    gender: 'femme'
  },
  {
    id: '203',
    name: 'Sweatshirts femme',
    price: 46,
    originalPrice: 65,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Sweatshirts femme en molleton. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'xl',
    color: 'green',
    material: 'molleton',
    gender: 'femme'
  },
  {
    id: '204',
    name: 'Chemises femme',
    price: 63,
    originalPrice: 79,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Chemises femme authentique Lacoste. Très bon état. popeline durable et confortable.',
    condition: 'very_good',
    size: 'xxl_and_more',
    color: 'red',
    material: 'popeline',
    gender: 'femme'
  },
  {
    id: '205',
    name: 'Pantalons & Shorts homme',
    price: 66,
    originalPrice: 83,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Magnifique Pantalons & Shorts homme de la collection Lacoste. Très bon état. Matière premium en coton sergé.',
    condition: 'very_good',
    size: 'l',
    color: 'pink',
    material: 'coton sergé',
    gender: 'homme'
  },
  {
    id: '206',
    name: 'Chemises femme',
    price: 102,
    originalPrice: 146,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Magnifique Chemises femme de la collection Lacoste. Bon état. Matière premium en lin.',
    condition: 'good',
    size: 'xl',
    color: 'black',
    material: 'lin',
    gender: 'femme'
  },
  {
    id: '207',
    name: 'Manteaux & Vestes femme',
    price: 76,
    originalPrice: 108,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Manteaux & Vestes femme authentique Lacoste. État neuf. polyester recyclé durable et confortable.',
    condition: 'new',
    size: 'xxl_and_more',
    color: 'brown',
    material: 'polyester recyclé',
    gender: 'femme'
  },
  {
    id: '208',
    name: 'Tops & Chemises femme',
    price: 193,
    originalPrice: 276,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Tops & Chemises femme authentique Lacoste. Bon état. soie durable et confortable.',
    condition: 'good',
    size: 'l',
    color: 'black',
    material: 'soie',
    gender: 'femme'
  },
  {
    id: '209',
    name: 'T-shirts femme',
    price: 216,
    originalPrice: 270,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique T-shirts femme de la collection Lacoste. Très bon état. Matière premium en jersey fin.',
    condition: 'very_good',
    size: 'xl',
    color: 'red',
    material: 'jersey fin',
    gender: 'femme'
  },
  {
    id: '210',
    name: 'T-shirts femme',
    price: 148,
    originalPrice: 212,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique T-shirts femme de la collection Lacoste. État neuf. Matière premium en coton.',
    condition: 'new',
    size: 'm',
    color: 'orange',
    material: 'coton',
    gender: 'femme'
  },
  {
    id: '211',
    name: 'Maroquinerie homme',
    price: 135,
    originalPrice: 193,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Maroquinerie homme élégant et intemporel. Excellent état. Fabriqué en toile enduite de haute qualité.',
    condition: 'excellent',
    size: 'xxl_and_more',
    color: 'black',
    material: 'toile enduite',
    gender: 'homme'
  },
  {
    id: '212',
    name: 'T-shirts homme',
    price: 25,
    originalPrice: 36,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe T-shirts homme en coton organique. Excellent état. Coupe ajustée et confortable.',
    condition: 'excellent',
    size: 'm',
    color: 'brown',
    material: 'coton organique',
    gender: 'homme'
  },
  {
    id: '213',
    name: 'Survêtements femme',
    price: 111,
    originalPrice: 139,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Magnifique Survêtements femme de la collection Lacoste. Très bon état. Matière premium en matière stretch.',
    condition: 'very_good',
    size: 'm',
    color: 'red',
    material: 'matière stretch',
    gender: 'femme'
  },
  {
    id: '214',
    name: 'Robes & Jupes femme',
    price: 28,
    originalPrice: 40,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Robes & Jupes femme en coton stretch. Excellent état. Coupe ajustée et confortable.',
    condition: 'excellent',
    size: 'xl',
    color: 'blue',
    material: 'coton stretch',
    gender: 'femme'
  },
  {
    id: '215',
    name: 'T-shirts homme',
    price: 48,
    originalPrice: 68,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'T-shirts homme élégant et intemporel. Excellent état. Fabriqué en coton organique de haute qualité.',
    condition: 'excellent',
    size: 'xl',
    color: 'beige',
    material: 'coton organique',
    gender: 'homme'
  },
  {
    id: '216',
    name: 'Pullovers femme',
    price: 111,
    originalPrice: 158,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Pullovers femme authentique Lacoste. Excellent état. coton tricoté durable et confortable.',
    condition: 'excellent',
    size: 'xxl_and_more',
    color: 'pink',
    material: 'coton tricoté',
    gender: 'femme'
  },
  {
    id: '217',
    name: 'Robes & Jupes femme',
    price: 78,
    originalPrice: 97,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Robes & Jupes femme en coton stretch. Très bon état. Coupe ajustée et confortable.',
    condition: 'very_good',
    size: 's',
    color: 'blue',
    material: 'coton stretch',
    gender: 'femme'
  },
  {
    id: '218',
    name: 'Sweatshirts femme',
    price: 85,
    originalPrice: 121,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Magnifique Sweatshirts femme de la collection Lacoste. Excellent état. Matière premium en molleton.',
    condition: 'excellent',
    size: 'xs',
    color: 'pink',
    material: 'molleton',
    gender: 'femme'
  },
  {
    id: '219',
    name: 'Manteaux & Vestes homme',
    price: 128,
    originalPrice: 183,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Manteaux & Vestes homme élégant et intemporel. État neuf. Fabriqué en polyester recyclé de haute qualité.',
    condition: 'new',
    size: 'xl',
    color: 'purple',
    material: 'polyester recyclé',
    gender: 'homme'
  },
  {
    id: '220',
    name: 'Pantalons & Shorts femme',
    price: 181,
    originalPrice: 226,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Pantalons & Shorts femme en toile de coton. Très bon état. Coupe ajustée et confortable.',
    condition: 'very_good',
    size: 'xl',
    color: 'yellow',
    material: 'toile de coton',
    gender: 'femme'
  },
  {
    id: '221',
    name: 'Polos homme',
    price: 198,
    originalPrice: 283,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Polos homme authentique Lacoste. État neuf. coton bio durable et confortable.',
    condition: 'new',
    size: 'xs',
    color: 'pink',
    material: 'coton bio',
    gender: 'homme'
  },
  {
    id: '222',
    name: 'T-shirts homme',
    price: 100,
    originalPrice: 143,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'T-shirts homme authentique Lacoste. État neuf. coton durable et confortable.',
    condition: 'new',
    size: 'l',
    color: 'pink',
    material: 'coton',
    gender: 'homme'
  },
  {
    id: '223',
    name: 'Sweatshirts homme',
    price: 139,
    originalPrice: 198,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Sweatshirts homme authentique Lacoste. État neuf. coton brossé durable et confortable.',
    condition: 'new',
    size: 's',
    color: 'white',
    material: 'coton brossé',
    gender: 'homme'
  },
  {
    id: '224',
    name: 'Sweatshirts femme',
    price: 147,
    originalPrice: 210,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Sweatshirts femme élégant et intemporel. Bon état. Fabriqué en jersey lourd de haute qualité.',
    condition: 'good',
    size: 'xs',
    color: 'red',
    material: 'jersey lourd',
    gender: 'femme'
  },
  {
    id: '225',
    name: 'Survêtements femme',
    price: 133,
    originalPrice: 190,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Survêtements femme élégant et intemporel. Bon état. Fabriqué en matière stretch de haute qualité.',
    condition: 'good',
    size: 'l',
    color: 'grey',
    material: 'matière stretch',
    gender: 'femme'
  },
  {
    id: '226',
    name: 'Manteaux & Vestes femme',
    price: 115,
    originalPrice: 164,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Manteaux & Vestes femme en coton imperméable. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 'xl',
    color: 'brown',
    material: 'coton imperméable',
    gender: 'femme'
  },
  {
    id: '227',
    name: 'Survêtements femme',
    price: 130,
    originalPrice: 162,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Survêtements femme en coton molletonné. Très bon état. Coupe ajustée et confortable.',
    condition: 'very_good',
    size: 'm',
    color: 'red',
    material: 'coton molletonné',
    gender: 'femme'
  },
  {
    id: '228',
    name: 'Survêtements femme',
    price: 145,
    originalPrice: 181,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Survêtements femme authentique Lacoste. Très bon état. coton molletonné durable et confortable.',
    condition: 'very_good',
    size: 'xl',
    color: 'beige',
    material: 'coton molletonné',
    gender: 'femme'
  },
  {
    id: '229',
    name: 'Manteaux & Vestes homme',
    price: 57,
    originalPrice: 81,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Manteaux & Vestes homme élégant et intemporel. Excellent état. Fabriqué en laine de haute qualité.',
    condition: 'excellent',
    size: 'xs',
    color: 'grey',
    material: 'laine',
    gender: 'homme'
  },
  {
    id: '230',
    name: 'Pullovers femme',
    price: 120,
    originalPrice: 172,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Pullovers femme authentique Lacoste. Bon état. coton tricoté durable et confortable.',
    condition: 'good',
    size: 'm',
    color: 'red',
    material: 'coton tricoté',
    gender: 'femme'
  },
  {
    id: '231',
    name: 'Pullovers femme',
    price: 235,
    originalPrice: 294,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Magnifique Pullovers femme de la collection Lacoste. Très bon état. Matière premium en laine mérinos.',
    condition: 'very_good',
    size: 'l',
    color: 'pink',
    material: 'laine mérinos',
    gender: 'femme'
  },
  {
    id: '232',
    name: 'Pantalons & Shorts femme',
    price: 69,
    originalPrice: 99,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Pantalons & Shorts femme en toile de coton. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 'xxl_and_more',
    color: 'white',
    material: 'toile de coton',
    gender: 'femme'
  },
  {
    id: '233',
    name: 'Robes & Jupes femme',
    price: 62,
    originalPrice: 89,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Robes & Jupes femme élégant et intemporel. Excellent état. Fabriqué en coton stretch de haute qualité.',
    condition: 'excellent',
    size: 'xl',
    color: 'black',
    material: 'coton stretch',
    gender: 'femme'
  },
  {
    id: '234',
    name: 'T-shirts femme',
    price: 144,
    originalPrice: 206,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe T-shirts femme en jersey fin. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'xxl_and_more',
    color: 'red',
    material: 'jersey fin',
    gender: 'femme'
  },
  {
    id: '235',
    name: 'Survêtements homme',
    price: 88,
    originalPrice: 126,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Survêtements homme en coton molletonné. Excellent état. Coupe ajustée et confortable.',
    condition: 'excellent',
    size: 'xl',
    color: 'pink',
    material: 'coton molletonné',
    gender: 'homme'
  },
  {
    id: '236',
    name: 'Polos homme',
    price: 174,
    originalPrice: 248,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Polos homme authentique Lacoste. Bon état. coton bio durable et confortable.',
    condition: 'good',
    size: 'xxl_and_more',
    color: 'beige',
    material: 'coton bio',
    gender: 'homme'
  },
  {
    id: '237',
    name: 'Pullovers homme',
    price: 148,
    originalPrice: 212,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Pullovers homme élégant et intemporel. Bon état. Fabriqué en laine mérinos de haute qualité.',
    condition: 'good',
    size: 'l',
    color: 'brown',
    material: 'laine mérinos',
    gender: 'homme'
  },
  {
    id: '238',
    name: 'Sweatshirts homme',
    price: 139,
    originalPrice: 174,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Magnifique Sweatshirts homme de la collection Lacoste. Très bon état. Matière premium en molleton.',
    condition: 'very_good',
    size: 's',
    color: 'yellow',
    material: 'molleton',
    gender: 'homme'
  },
  {
    id: '239',
    name: 'Sweatshirts femme',
    price: 162,
    originalPrice: 232,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Sweatshirts femme élégant et intemporel. État neuf. Fabriqué en molleton de haute qualité.',
    condition: 'new',
    size: 'xs',
    color: 'black',
    material: 'molleton',
    gender: 'femme'
  },
  {
    id: '240',
    name: 'Sweatshirts femme',
    price: 78,
    originalPrice: 112,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Sweatshirts femme authentique Lacoste. État neuf. molleton durable et confortable.',
    condition: 'new',
    size: 'l',
    color: 'purple',
    material: 'molleton',
    gender: 'femme'
  },
  {
    id: '241',
    name: 'Maroquinerie homme',
    price: 118,
    originalPrice: 168,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique Maroquinerie homme de la collection Lacoste. Bon état. Matière premium en nylon.',
    condition: 'good',
    size: 's',
    color: 'blue',
    material: 'nylon',
    gender: 'homme'
  },
  {
    id: '242',
    name: 'Chemises homme',
    price: 115,
    originalPrice: 164,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Chemises homme authentique Lacoste. Excellent état. oxford durable et confortable.',
    condition: 'excellent',
    size: 's',
    color: 'purple',
    material: 'oxford',
    gender: 'homme'
  },
  {
    id: '243',
    name: 'Manteaux & Vestes femme',
    price: 30,
    originalPrice: 43,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Manteaux & Vestes femme en laine. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 'm',
    color: 'beige',
    material: 'laine',
    gender: 'femme'
  },
  {
    id: '244',
    name: 'Pullovers homme',
    price: 204,
    originalPrice: 292,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Pullovers homme en coton tricoté. Excellent état. Coupe ajustée et confortable.',
    condition: 'excellent',
    size: 'xs',
    color: 'red',
    material: 'coton tricoté',
    gender: 'homme'
  },
  {
    id: '245',
    name: 'T-shirts homme',
    price: 29,
    originalPrice: 41,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'T-shirts homme élégant et intemporel. État neuf. Fabriqué en coton organique de haute qualité.',
    condition: 'new',
    size: 's',
    color: 'brown',
    material: 'coton organique',
    gender: 'homme'
  },
  {
    id: '246',
    name: 'Chemises homme',
    price: 75,
    originalPrice: 107,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Magnifique Chemises homme de la collection Lacoste. État neuf. Matière premium en oxford.',
    condition: 'new',
    size: 'l',
    color: 'green',
    material: 'oxford',
    gender: 'homme'
  },
  {
    id: '247',
    name: 'Manteaux & Vestes homme',
    price: 76,
    originalPrice: 109,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Manteaux & Vestes homme en polyester recyclé. Excellent état. Coupe ajustée et confortable.',
    condition: 'excellent',
    size: 'xl',
    color: 'yellow',
    material: 'polyester recyclé',
    gender: 'homme'
  },
  {
    id: '248',
    name: 'Survêtements femme',
    price: 158,
    originalPrice: 198,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Survêtements femme authentique Lacoste. Très bon état. coton molletonné durable et confortable.',
    condition: 'very_good',
    size: 'xs',
    color: 'beige',
    material: 'coton molletonné',
    gender: 'femme'
  },
  {
    id: '249',
    name: 'Pullovers homme',
    price: 87,
    originalPrice: 109,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Pullovers homme élégant et intemporel. Très bon état. Fabriqué en laine mérinos de haute qualité.',
    condition: 'very_good',
    size: 'xs',
    color: 'yellow',
    material: 'laine mérinos',
    gender: 'homme'
  },
  {
    id: '250',
    name: 'Pullovers homme',
    price: 94,
    originalPrice: 134,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Pullovers homme authentique Lacoste. Bon état. laine mérinos durable et confortable.',
    condition: 'good',
    size: 'm',
    color: 'red',
    material: 'laine mérinos',
    gender: 'homme'
  },
  {
    id: '251',
    name: 'Pantalons & Shorts homme',
    price: 69,
    originalPrice: 98,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Pantalons & Shorts homme authentique Lacoste. Bon état. coton sergé durable et confortable.',
    condition: 'good',
    size: 'm',
    color: 'yellow',
    material: 'coton sergé',
    gender: 'homme'
  },
  {
    id: '252',
    name: 'Sweatshirts femme',
    price: 179,
    originalPrice: 256,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Sweatshirts femme en jersey lourd. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 'xxl_and_more',
    color: 'red',
    material: 'jersey lourd',
    gender: 'femme'
  },
  {
    id: '253',
    name: 'Survêtements femme',
    price: 147,
    originalPrice: 210,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Magnifique Survêtements femme de la collection Lacoste. Bon état. Matière premium en polyester technique.',
    condition: 'good',
    size: 'xs',
    color: 'pink',
    material: 'polyester technique',
    gender: 'femme'
  },
  {
    id: '254',
    name: 'Pantalons & Shorts homme',
    price: 204,
    originalPrice: 255,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Magnifique Pantalons & Shorts homme de la collection Lacoste. Très bon état. Matière premium en gabardine.',
    condition: 'very_good',
    size: 's',
    color: 'green',
    material: 'gabardine',
    gender: 'homme'
  },
  {
    id: '255',
    name: 'Sweatshirts femme',
    price: 199,
    originalPrice: 249,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Sweatshirts femme authentique Lacoste. Très bon état. molleton durable et confortable.',
    condition: 'very_good',
    size: 's',
    color: 'yellow',
    material: 'molleton',
    gender: 'femme'
  },
  {
    id: '256',
    name: 'Maroquinerie femme',
    price: 101,
    originalPrice: 144,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Maroquinerie femme en nylon. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 'm',
    color: 'blue',
    material: 'nylon',
    gender: 'femme'
  },
  {
    id: '257',
    name: 'Survêtements homme',
    price: 175,
    originalPrice: 250,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Magnifique Survêtements homme de la collection Lacoste. Bon état. Matière premium en polyester technique.',
    condition: 'good',
    size: 'xxl_and_more',
    color: 'orange',
    material: 'polyester technique',
    gender: 'homme'
  },
  {
    id: '258',
    name: 'Polos femme',
    price: 112,
    originalPrice: 140,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Polos femme élégant et intemporel. Très bon état. Fabriqué en coton bio de haute qualité.',
    condition: 'very_good',
    size: 'l',
    color: 'red',
    material: 'coton bio',
    gender: 'femme'
  },
  {
    id: '259',
    name: 'Polos homme',
    price: 107,
    originalPrice: 153,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Polos homme élégant et intemporel. Bon état. Fabriqué en jersey de coton de haute qualité.',
    condition: 'good',
    size: 'l',
    color: 'blue',
    material: 'jersey de coton',
    gender: 'homme'
  },
  {
    id: '260',
    name: 'Pullovers femme',
    price: 175,
    originalPrice: 219,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Pullovers femme authentique Lacoste. Très bon état. laine mérinos durable et confortable.',
    condition: 'very_good',
    size: 'm',
    color: 'orange',
    material: 'laine mérinos',
    gender: 'femme'
  },
  {
    id: '261',
    name: 'Pullovers femme',
    price: 134,
    originalPrice: 191,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Pullovers femme en coton tricoté. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 'm',
    color: 'black',
    material: 'coton tricoté',
    gender: 'femme'
  },
  {
    id: '262',
    name: 'Chemises homme',
    price: 118,
    originalPrice: 169,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique Chemises homme de la collection Lacoste. État neuf. Matière premium en popeline.',
    condition: 'new',
    size: 'xxl_and_more',
    color: 'grey',
    material: 'popeline',
    gender: 'homme'
  },
  {
    id: '263',
    name: 'Pantalons & Shorts homme',
    price: 35,
    originalPrice: 50,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Pantalons & Shorts homme élégant et intemporel. Excellent état. Fabriqué en gabardine de haute qualité.',
    condition: 'excellent',
    size: 'xs',
    color: 'beige',
    material: 'gabardine',
    gender: 'homme'
  },
  {
    id: '264',
    name: 'Survêtements homme',
    price: 59,
    originalPrice: 85,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Survêtements homme authentique Lacoste. Excellent état. polyester technique durable et confortable.',
    condition: 'excellent',
    size: 'xl',
    color: 'grey',
    material: 'polyester technique',
    gender: 'homme'
  },
  {
    id: '265',
    name: 'Chemises femme',
    price: 38,
    originalPrice: 47,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique Chemises femme de la collection Lacoste. Très bon état. Matière premium en lin.',
    condition: 'very_good',
    size: 'xs',
    color: 'white',
    material: 'lin',
    gender: 'femme'
  },
  {
    id: '266',
    name: 'Polos femme',
    price: 28,
    originalPrice: 35,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Magnifique Polos femme de la collection Lacoste. Très bon état. Matière premium en coton bio.',
    condition: 'very_good',
    size: 's',
    color: 'blue',
    material: 'coton bio',
    gender: 'femme'
  },
  {
    id: '267',
    name: 'Sweatshirts homme',
    price: 94,
    originalPrice: 134,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Sweatshirts homme en jersey lourd. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 'xs',
    color: 'green',
    material: 'jersey lourd',
    gender: 'homme'
  },
  {
    id: '268',
    name: 'Chemises femme',
    price: 182,
    originalPrice: 260,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique Chemises femme de la collection Lacoste. Excellent état. Matière premium en oxford.',
    condition: 'excellent',
    size: 's',
    color: 'pink',
    material: 'oxford',
    gender: 'femme'
  },
  {
    id: '269',
    name: 'Pullovers femme',
    price: 175,
    originalPrice: 250,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique Pullovers femme de la collection Lacoste. État neuf. Matière premium en laine mérinos.',
    condition: 'new',
    size: 'xxl_and_more',
    color: 'brown',
    material: 'laine mérinos',
    gender: 'femme'
  },
  {
    id: '270',
    name: 'Survêtements femme',
    price: 132,
    originalPrice: 188,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Survêtements femme authentique Lacoste. État neuf. polyester technique durable et confortable.',
    condition: 'new',
    size: 'xxl_and_more',
    color: 'green',
    material: 'polyester technique',
    gender: 'femme'
  },
  {
    id: '271',
    name: 'Survêtements femme',
    price: 25,
    originalPrice: 36,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Survêtements femme en polyester technique. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'xs',
    color: 'brown',
    material: 'polyester technique',
    gender: 'femme'
  },
  {
    id: '272',
    name: 'Chemises homme',
    price: 203,
    originalPrice: 290,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Chemises homme élégant et intemporel. Excellent état. Fabriqué en lin de haute qualité.',
    condition: 'excellent',
    size: 'm',
    color: 'blue',
    material: 'lin',
    gender: 'homme'
  },
  {
    id: '273',
    name: 'Tops & Chemises femme',
    price: 106,
    originalPrice: 152,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Tops & Chemises femme élégant et intemporel. État neuf. Fabriqué en viscose de haute qualité.',
    condition: 'new',
    size: 'xxl_and_more',
    color: 'black',
    material: 'viscose',
    gender: 'femme'
  },
  {
    id: '274',
    name: 'Robes & Jupes femme',
    price: 155,
    originalPrice: 221,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Robes & Jupes femme authentique Lacoste. Bon état. coton stretch durable et confortable.',
    condition: 'good',
    size: 'xl',
    color: 'orange',
    material: 'coton stretch',
    gender: 'femme'
  },
  {
    id: '275',
    name: 'Survêtements femme',
    price: 83,
    originalPrice: 118,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Survêtements femme authentique Lacoste. Excellent état. matière stretch durable et confortable.',
    condition: 'excellent',
    size: 'xl',
    color: 'green',
    material: 'matière stretch',
    gender: 'femme'
  },
  {
    id: '276',
    name: 'Survêtements femme',
    price: 209,
    originalPrice: 299,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Survêtements femme élégant et intemporel. État neuf. Fabriqué en polyester technique de haute qualité.',
    condition: 'new',
    size: 'm',
    color: 'brown',
    material: 'polyester technique',
    gender: 'femme'
  },
  {
    id: '277',
    name: 'Maroquinerie homme',
    price: 119,
    originalPrice: 170,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique Maroquinerie homme de la collection Lacoste. État neuf. Matière premium en nylon.',
    condition: 'new',
    size: 'l',
    color: 'grey',
    material: 'nylon',
    gender: 'homme'
  },
  {
    id: '278',
    name: 'Chemises homme',
    price: 31,
    originalPrice: 45,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Chemises homme en popeline. Excellent état. Coupe ajustée et confortable.',
    condition: 'excellent',
    size: 'm',
    color: 'grey',
    material: 'popeline',
    gender: 'homme'
  },
  {
    id: '279',
    name: 'Maroquinerie femme',
    price: 78,
    originalPrice: 111,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Maroquinerie femme élégant et intemporel. Excellent état. Fabriqué en cuir de haute qualité.',
    condition: 'excellent',
    size: 'xxl_and_more',
    color: 'pink',
    material: 'cuir',
    gender: 'femme'
  },
  {
    id: '280',
    name: 'Polos homme',
    price: 31,
    originalPrice: 45,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Polos homme en coton bio. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 'm',
    color: 'blue',
    material: 'coton bio',
    gender: 'homme'
  },
  {
    id: '281',
    name: 'Chemises homme',
    price: 53,
    originalPrice: 76,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Chemises homme élégant et intemporel. État neuf. Fabriqué en popeline de haute qualité.',
    condition: 'new',
    size: 'xl',
    color: 'yellow',
    material: 'popeline',
    gender: 'homme'
  },
  {
    id: '282',
    name: 'Maroquinerie homme',
    price: 154,
    originalPrice: 193,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Maroquinerie homme élégant et intemporel. Très bon état. Fabriqué en cuir de haute qualité.',
    condition: 'very_good',
    size: 'l',
    color: 'pink',
    material: 'cuir',
    gender: 'homme'
  },
  {
    id: '283',
    name: 'Manteaux & Vestes femme',
    price: 200,
    originalPrice: 285,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Magnifique Manteaux & Vestes femme de la collection Lacoste. Excellent état. Matière premium en coton imperméable.',
    condition: 'excellent',
    size: 'l',
    color: 'red',
    material: 'coton imperméable',
    gender: 'femme'
  },
  {
    id: '284',
    name: 'Pantalons & Shorts homme',
    price: 170,
    originalPrice: 243,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Pantalons & Shorts homme authentique Lacoste. Excellent état. coton sergé durable et confortable.',
    condition: 'excellent',
    size: 'l',
    color: 'green',
    material: 'coton sergé',
    gender: 'homme'
  },
  {
    id: '285',
    name: 'Pullovers homme',
    price: 181,
    originalPrice: 258,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Pullovers homme en cachemire. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 'xl',
    color: 'grey',
    material: 'cachemire',
    gender: 'homme'
  },
  {
    id: '286',
    name: 'Polos homme',
    price: 224,
    originalPrice: 280,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Polos homme élégant et intemporel. Très bon état. Fabriqué en jersey de coton de haute qualité.',
    condition: 'very_good',
    size: 'l',
    color: 'purple',
    material: 'jersey de coton',
    gender: 'homme'
  },
  {
    id: '287',
    name: 'Sweatshirts femme',
    price: 73,
    originalPrice: 104,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Sweatshirts femme élégant et intemporel. Bon état. Fabriqué en molleton de haute qualité.',
    condition: 'good',
    size: 'm',
    color: 'grey',
    material: 'molleton',
    gender: 'femme'
  },
  {
    id: '288',
    name: 'Maroquinerie homme',
    price: 137,
    originalPrice: 196,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Maroquinerie homme en cuir. Excellent état. Coupe ajustée et confortable.',
    condition: 'excellent',
    size: 's',
    color: 'black',
    material: 'cuir',
    gender: 'homme'
  },
  {
    id: '289',
    name: 'Manteaux & Vestes femme',
    price: 62,
    originalPrice: 89,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Manteaux & Vestes femme en laine. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 'm',
    color: 'yellow',
    material: 'laine',
    gender: 'femme'
  },
  {
    id: '290',
    name: 'Maroquinerie homme',
    price: 138,
    originalPrice: 197,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Maroquinerie homme élégant et intemporel. Excellent état. Fabriqué en nylon de haute qualité.',
    condition: 'excellent',
    size: 'xs',
    color: 'green',
    material: 'nylon',
    gender: 'homme'
  },
  {
    id: '291',
    name: 'Pullovers femme',
    price: 34,
    originalPrice: 42,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Pullovers femme en laine mérinos. Très bon état. Coupe ajustée et confortable.',
    condition: 'very_good',
    size: 'xl',
    color: 'blue',
    material: 'laine mérinos',
    gender: 'femme'
  },
  {
    id: '292',
    name: 'T-shirts homme',
    price: 127,
    originalPrice: 181,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'T-shirts homme authentique Lacoste. État neuf. jersey fin durable et confortable.',
    condition: 'new',
    size: 'xs',
    color: 'black',
    material: 'jersey fin',
    gender: 'homme'
  },
  {
    id: '293',
    name: 'Pantalons & Shorts femme',
    price: 185,
    originalPrice: 264,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Pantalons & Shorts femme authentique Lacoste. Excellent état. toile de coton durable et confortable.',
    condition: 'excellent',
    size: 's',
    color: 'red',
    material: 'toile de coton',
    gender: 'femme'
  },
  {
    id: '294',
    name: 'Survêtements femme',
    price: 59,
    originalPrice: 85,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Magnifique Survêtements femme de la collection Lacoste. Bon état. Matière premium en coton molletonné.',
    condition: 'good',
    size: 'xl',
    color: 'beige',
    material: 'coton molletonné',
    gender: 'femme'
  },
  {
    id: '295',
    name: 'Sweatshirts homme',
    price: 192,
    originalPrice: 240,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Magnifique Sweatshirts homme de la collection Lacoste. Très bon état. Matière premium en coton brossé.',
    condition: 'very_good',
    size: 's',
    color: 'purple',
    material: 'coton brossé',
    gender: 'homme'
  },
  {
    id: '296',
    name: 'T-shirts homme',
    price: 173,
    originalPrice: 216,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'T-shirts homme élégant et intemporel. Très bon état. Fabriqué en coton de haute qualité.',
    condition: 'very_good',
    size: 'm',
    color: 'blue',
    material: 'coton',
    gender: 'homme'
  },
  {
    id: '297',
    name: 'T-shirts femme',
    price: 47,
    originalPrice: 67,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'T-shirts femme authentique Lacoste. État neuf. jersey fin durable et confortable.',
    condition: 'new',
    size: 'l',
    color: 'white',
    material: 'jersey fin',
    gender: 'femme'
  },
  {
    id: '298',
    name: 'Survêtements femme',
    price: 219,
    originalPrice: 274,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Magnifique Survêtements femme de la collection Lacoste. Très bon état. Matière premium en polyester technique.',
    condition: 'very_good',
    size: 'm',
    color: 'green',
    material: 'polyester technique',
    gender: 'femme'
  },
  {
    id: '299',
    name: 'Sweatshirts femme',
    price: 55,
    originalPrice: 79,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Sweatshirts femme authentique Lacoste. État neuf. molleton durable et confortable.',
    condition: 'new',
    size: 'xs',
    color: 'yellow',
    material: 'molleton',
    gender: 'femme'
  },
  {
    id: '300',
    name: 'Survêtements homme',
    price: 130,
    originalPrice: 186,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Survêtements homme en polyester technique. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 'm',
    color: 'blue',
    material: 'polyester technique',
    gender: 'homme'
  },
  {
    id: '301',
    name: 'Manteaux & Vestes homme',
    price: 178,
    originalPrice: 222,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Magnifique Manteaux & Vestes homme de la collection Lacoste. Très bon état. Matière premium en laine.',
    condition: 'very_good',
    size: 'xs',
    color: 'grey',
    material: 'laine',
    gender: 'homme'
  },
  {
    id: '302',
    name: 'Pullovers homme',
    price: 41,
    originalPrice: 59,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Pullovers homme authentique Lacoste. Bon état. cachemire durable et confortable.',
    condition: 'good',
    size: 'xxl_and_more',
    color: 'beige',
    material: 'cachemire',
    gender: 'homme'
  },
  {
    id: '303',
    name: 'Survêtements femme',
    price: 155,
    originalPrice: 222,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Magnifique Survêtements femme de la collection Lacoste. État neuf. Matière premium en polyester technique.',
    condition: 'new',
    size: 'xs',
    color: 'white',
    material: 'polyester technique',
    gender: 'femme'
  },
  {
    id: '304',
    name: 'Tops & Chemises femme',
    price: 200,
    originalPrice: 250,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Magnifique Tops & Chemises femme de la collection Lacoste. Très bon état. Matière premium en viscose.',
    condition: 'very_good',
    size: 'xs',
    color: 'white',
    material: 'viscose',
    gender: 'femme'
  },
  {
    id: '305',
    name: 'Pantalons & Shorts homme',
    price: 71,
    originalPrice: 102,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Pantalons & Shorts homme authentique Lacoste. État neuf. coton sergé durable et confortable.',
    condition: 'new',
    size: 'xs',
    color: 'green',
    material: 'coton sergé',
    gender: 'homme'
  },
  {
    id: '306',
    name: 'Manteaux & Vestes homme',
    price: 223,
    originalPrice: 279,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Manteaux & Vestes homme élégant et intemporel. Très bon état. Fabriqué en laine de haute qualité.',
    condition: 'very_good',
    size: 'xxl_and_more',
    color: 'beige',
    material: 'laine',
    gender: 'homme'
  },
  {
    id: '307',
    name: 'Manteaux & Vestes femme',
    price: 141,
    originalPrice: 202,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique Manteaux & Vestes femme de la collection Lacoste. Bon état. Matière premium en laine.',
    condition: 'good',
    size: 'm',
    color: 'beige',
    material: 'laine',
    gender: 'femme'
  },
  {
    id: '308',
    name: 'Survêtements homme',
    price: 122,
    originalPrice: 153,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Survêtements homme en matière stretch. Très bon état. Coupe ajustée et confortable.',
    condition: 'very_good',
    size: 'xxl_and_more',
    color: 'red',
    material: 'matière stretch',
    gender: 'homme'
  },
  {
    id: '309',
    name: 'Pantalons & Shorts homme',
    price: 53,
    originalPrice: 66,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Pantalons & Shorts homme authentique Lacoste. Très bon état. gabardine durable et confortable.',
    condition: 'very_good',
    size: 'xs',
    color: 'black',
    material: 'gabardine',
    gender: 'homme'
  },
  {
    id: '310',
    name: 'Manteaux & Vestes femme',
    price: 95,
    originalPrice: 136,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Manteaux & Vestes femme élégant et intemporel. Bon état. Fabriqué en polyester recyclé de haute qualité.',
    condition: 'good',
    size: 'xl',
    color: 'beige',
    material: 'polyester recyclé',
    gender: 'femme'
  },
  {
    id: '311',
    name: 'T-shirts homme',
    price: 139,
    originalPrice: 199,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'T-shirts homme élégant et intemporel. État neuf. Fabriqué en coton organique de haute qualité.',
    condition: 'new',
    size: 'l',
    color: 'red',
    material: 'coton organique',
    gender: 'homme'
  },
  {
    id: '312',
    name: 'Manteaux & Vestes homme',
    price: 95,
    originalPrice: 136,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Manteaux & Vestes homme authentique Lacoste. Bon état. laine durable et confortable.',
    condition: 'good',
    size: 'xs',
    color: 'orange',
    material: 'laine',
    gender: 'homme'
  },
  {
    id: '313',
    name: 'Manteaux & Vestes femme',
    price: 190,
    originalPrice: 272,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Manteaux & Vestes femme en laine. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'xl',
    color: 'purple',
    material: 'laine',
    gender: 'femme'
  },
  {
    id: '314',
    name: 'Pantalons & Shorts femme',
    price: 123,
    originalPrice: 176,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Pantalons & Shorts femme authentique Lacoste. Bon état. gabardine durable et confortable.',
    condition: 'good',
    size: 'xs',
    color: 'purple',
    material: 'gabardine',
    gender: 'femme'
  },
  {
    id: '315',
    name: 'Pantalons & Shorts femme',
    price: 61,
    originalPrice: 87,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Pantalons & Shorts femme élégant et intemporel. État neuf. Fabriqué en coton sergé de haute qualité.',
    condition: 'new',
    size: 's',
    color: 'purple',
    material: 'coton sergé',
    gender: 'femme'
  },
  {
    id: '316',
    name: 'T-shirts femme',
    price: 125,
    originalPrice: 179,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe T-shirts femme en jersey fin. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 'xs',
    color: 'grey',
    material: 'jersey fin',
    gender: 'femme'
  },
  {
    id: '317',
    name: 'Chemises homme',
    price: 46,
    originalPrice: 66,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Chemises homme authentique Lacoste. Bon état. lin durable et confortable.',
    condition: 'good',
    size: 'xs',
    color: 'red',
    material: 'lin',
    gender: 'homme'
  },
  {
    id: '318',
    name: 'Robes & Jupes femme',
    price: 92,
    originalPrice: 131,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Robes & Jupes femme élégant et intemporel. État neuf. Fabriqué en jersey de haute qualité.',
    condition: 'new',
    size: 'xl',
    color: 'pink',
    material: 'jersey',
    gender: 'femme'
  },
  {
    id: '319',
    name: 'Sweatshirts femme',
    price: 197,
    originalPrice: 282,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique Sweatshirts femme de la collection Lacoste. État neuf. Matière premium en molleton.',
    condition: 'new',
    size: 'xs',
    color: 'blue',
    material: 'molleton',
    gender: 'femme'
  },
  {
    id: '320',
    name: 'Pullovers femme',
    price: 21,
    originalPrice: 30,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Pullovers femme en coton tricoté. Excellent état. Coupe ajustée et confortable.',
    condition: 'excellent',
    size: 'xl',
    color: 'red',
    material: 'coton tricoté',
    gender: 'femme'
  },
  {
    id: '321',
    name: 'Pullovers femme',
    price: 30,
    originalPrice: 38,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Pullovers femme authentique Lacoste. Très bon état. laine mérinos durable et confortable.',
    condition: 'very_good',
    size: 's',
    color: 'red',
    material: 'laine mérinos',
    gender: 'femme'
  },
  {
    id: '322',
    name: 'Maroquinerie femme',
    price: 170,
    originalPrice: 243,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Maroquinerie femme élégant et intemporel. État neuf. Fabriqué en nylon de haute qualité.',
    condition: 'new',
    size: 'xxl_and_more',
    color: 'brown',
    material: 'nylon',
    gender: 'femme'
  },
  {
    id: '323',
    name: 'Manteaux & Vestes femme',
    price: 40,
    originalPrice: 50,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Manteaux & Vestes femme en laine. Très bon état. Coupe ajustée et confortable.',
    condition: 'very_good',
    size: 'l',
    color: 'orange',
    material: 'laine',
    gender: 'femme'
  },
  {
    id: '324',
    name: 'Sweatshirts homme',
    price: 108,
    originalPrice: 154,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Sweatshirts homme en jersey lourd. Excellent état. Coupe ajustée et confortable.',
    condition: 'excellent',
    size: 'm',
    color: 'red',
    material: 'jersey lourd',
    gender: 'homme'
  },
  {
    id: '325',
    name: 'Pantalons & Shorts femme',
    price: 56,
    originalPrice: 80,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Pantalons & Shorts femme authentique Lacoste. État neuf. coton sergé durable et confortable.',
    condition: 'new',
    size: 'm',
    color: 'black',
    material: 'coton sergé',
    gender: 'femme'
  },
  {
    id: '326',
    name: 'Maroquinerie homme',
    price: 230,
    originalPrice: 288,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Magnifique Maroquinerie homme de la collection Lacoste. Très bon état. Matière premium en toile enduite.',
    condition: 'very_good',
    size: 'xl',
    color: 'black',
    material: 'toile enduite',
    gender: 'homme'
  },
  {
    id: '327',
    name: 'Sweatshirts femme',
    price: 61,
    originalPrice: 76,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Sweatshirts femme en molleton. Très bon état. Coupe ajustée et confortable.',
    condition: 'very_good',
    size: 'xxl_and_more',
    color: 'black',
    material: 'molleton',
    gender: 'femme'
  },
  {
    id: '328',
    name: 'Pantalons & Shorts femme',
    price: 92,
    originalPrice: 132,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Magnifique Pantalons & Shorts femme de la collection Lacoste. Bon état. Matière premium en gabardine.',
    condition: 'good',
    size: 'xl',
    color: 'beige',
    material: 'gabardine',
    gender: 'femme'
  },
  {
    id: '329',
    name: 'Chemises homme',
    price: 95,
    originalPrice: 136,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Chemises homme en oxford. Excellent état. Coupe ajustée et confortable.',
    condition: 'excellent',
    size: 'xs',
    color: 'brown',
    material: 'oxford',
    gender: 'homme'
  },
  {
    id: '330',
    name: 'Manteaux & Vestes femme',
    price: 92,
    originalPrice: 131,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Manteaux & Vestes femme authentique Lacoste. Bon état. coton imperméable durable et confortable.',
    condition: 'good',
    size: 'l',
    color: 'black',
    material: 'coton imperméable',
    gender: 'femme'
  },
  {
    id: '331',
    name: 'Pantalons & Shorts femme',
    price: 61,
    originalPrice: 87,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Pantalons & Shorts femme élégant et intemporel. Excellent état. Fabriqué en toile de coton de haute qualité.',
    condition: 'excellent',
    size: 'xs',
    color: 'blue',
    material: 'toile de coton',
    gender: 'femme'
  },
  {
    id: '332',
    name: 'Maroquinerie homme',
    price: 199,
    originalPrice: 284,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Maroquinerie homme en cuir. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'xl',
    color: 'blue',
    material: 'cuir',
    gender: 'homme'
  },
  {
    id: '333',
    name: 'Sweatshirts femme',
    price: 62,
    originalPrice: 89,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Sweatshirts femme authentique Lacoste. Bon état. jersey lourd durable et confortable.',
    condition: 'good',
    size: 's',
    color: 'black',
    material: 'jersey lourd',
    gender: 'femme'
  },
  {
    id: '334',
    name: 'T-shirts homme',
    price: 86,
    originalPrice: 108,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Magnifique T-shirts homme de la collection Lacoste. Très bon état. Matière premium en jersey fin.',
    condition: 'very_good',
    size: 'm',
    color: 'red',
    material: 'jersey fin',
    gender: 'homme'
  },
  {
    id: '335',
    name: 'T-shirts homme',
    price: 104,
    originalPrice: 148,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'T-shirts homme élégant et intemporel. État neuf. Fabriqué en jersey fin de haute qualité.',
    condition: 'new',
    size: 'xxl_and_more',
    color: 'pink',
    material: 'jersey fin',
    gender: 'homme'
  },
  {
    id: '336',
    name: 'Polos homme',
    price: 79,
    originalPrice: 113,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique Polos homme de la collection Lacoste. État neuf. Matière premium en jersey de coton.',
    condition: 'new',
    size: 'xxl_and_more',
    color: 'orange',
    material: 'jersey de coton',
    gender: 'homme'
  },
  {
    id: '337',
    name: 'Chemises homme',
    price: 98,
    originalPrice: 140,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Chemises homme en oxford. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 'xl',
    color: 'yellow',
    material: 'oxford',
    gender: 'homme'
  },
  {
    id: '338',
    name: 'Polos homme',
    price: 124,
    originalPrice: 177,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Magnifique Polos homme de la collection Lacoste. État neuf. Matière premium en coton bio.',
    condition: 'new',
    size: 's',
    color: 'grey',
    material: 'coton bio',
    gender: 'homme'
  },
  {
    id: '339',
    name: 'T-shirts homme',
    price: 190,
    originalPrice: 272,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique T-shirts homme de la collection Lacoste. État neuf. Matière premium en coton organique.',
    condition: 'new',
    size: 'xs',
    color: 'red',
    material: 'coton organique',
    gender: 'homme'
  },
  {
    id: '340',
    name: 'Survêtements femme',
    price: 119,
    originalPrice: 149,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Survêtements femme en polyester technique. Très bon état. Coupe ajustée et confortable.',
    condition: 'very_good',
    size: 'xs',
    color: 'pink',
    material: 'polyester technique',
    gender: 'femme'
  },
  {
    id: '341',
    name: 'Pantalons & Shorts homme',
    price: 166,
    originalPrice: 208,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Pantalons & Shorts homme élégant et intemporel. Très bon état. Fabriqué en gabardine de haute qualité.',
    condition: 'very_good',
    size: 'xl',
    color: 'grey',
    material: 'gabardine',
    gender: 'homme'
  },
  {
    id: '342',
    name: 'Pullovers homme',
    price: 196,
    originalPrice: 245,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Magnifique Pullovers homme de la collection Lacoste. Très bon état. Matière premium en laine mérinos.',
    condition: 'very_good',
    size: 'xs',
    color: 'pink',
    material: 'laine mérinos',
    gender: 'homme'
  },
  {
    id: '343',
    name: 'Survêtements femme',
    price: 39,
    originalPrice: 56,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Survêtements femme élégant et intemporel. Excellent état. Fabriqué en matière stretch de haute qualité.',
    condition: 'excellent',
    size: 'm',
    color: 'purple',
    material: 'matière stretch',
    gender: 'femme'
  },
  {
    id: '344',
    name: 'Pantalons & Shorts femme',
    price: 222,
    originalPrice: 278,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Pantalons & Shorts femme élégant et intemporel. Très bon état. Fabriqué en toile de coton de haute qualité.',
    condition: 'very_good',
    size: 'xl',
    color: 'red',
    material: 'toile de coton',
    gender: 'femme'
  },
  {
    id: '345',
    name: 'Sweatshirts homme',
    price: 185,
    originalPrice: 264,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Sweatshirts homme en jersey lourd. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 's',
    color: 'blue',
    material: 'jersey lourd',
    gender: 'homme'
  },
  {
    id: '346',
    name: 'Sweatshirts femme',
    price: 50,
    originalPrice: 72,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique Sweatshirts femme de la collection Lacoste. État neuf. Matière premium en coton brossé.',
    condition: 'new',
    size: 'xl',
    color: 'brown',
    material: 'coton brossé',
    gender: 'femme'
  },
  {
    id: '347',
    name: 'Maroquinerie homme',
    price: 88,
    originalPrice: 126,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Maroquinerie homme en nylon. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 'xl',
    color: 'green',
    material: 'nylon',
    gender: 'homme'
  },
  {
    id: '348',
    name: 'T-shirts homme',
    price: 186,
    originalPrice: 232,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'T-shirts homme élégant et intemporel. Très bon état. Fabriqué en coton de haute qualité.',
    condition: 'very_good',
    size: 's',
    color: 'red',
    material: 'coton',
    gender: 'homme'
  },
  {
    id: '349',
    name: 'Maroquinerie homme',
    price: 56,
    originalPrice: 80,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique Maroquinerie homme de la collection Lacoste. État neuf. Matière premium en nylon.',
    condition: 'new',
    size: 'xl',
    color: 'grey',
    material: 'nylon',
    gender: 'homme'
  },
  {
    id: '350',
    name: 'Pantalons & Shorts femme',
    price: 37,
    originalPrice: 46,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Pantalons & Shorts femme en coton sergé. Très bon état. Coupe ajustée et confortable.',
    condition: 'very_good',
    size: 'xxl_and_more',
    color: 'red',
    material: 'coton sergé',
    gender: 'femme'
  },
  {
    id: '351',
    name: 'Manteaux & Vestes homme',
    price: 138,
    originalPrice: 197,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Manteaux & Vestes homme authentique Lacoste. Bon état. laine durable et confortable.',
    condition: 'good',
    size: 'l',
    color: 'purple',
    material: 'laine',
    gender: 'homme'
  },
  {
    id: '352',
    name: 'Chemises homme',
    price: 112,
    originalPrice: 160,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Chemises homme authentique Lacoste. Bon état. oxford durable et confortable.',
    condition: 'good',
    size: 'xl',
    color: 'green',
    material: 'oxford',
    gender: 'homme'
  },
  {
    id: '353',
    name: 'Pullovers homme',
    price: 161,
    originalPrice: 201,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Pullovers homme en coton tricoté. Très bon état. Coupe ajustée et confortable.',
    condition: 'very_good',
    size: 's',
    color: 'grey',
    material: 'coton tricoté',
    gender: 'homme'
  },
  {
    id: '354',
    name: 'Pullovers homme',
    price: 64,
    originalPrice: 91,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Pullovers homme en coton tricoté. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'm',
    color: 'brown',
    material: 'coton tricoté',
    gender: 'homme'
  },
  {
    id: '355',
    name: 'Pullovers homme',
    price: 26,
    originalPrice: 32,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique Pullovers homme de la collection Lacoste. Très bon état. Matière premium en cachemire.',
    condition: 'very_good',
    size: 'xs',
    color: 'pink',
    material: 'cachemire',
    gender: 'homme'
  },
  {
    id: '356',
    name: 'T-shirts femme',
    price: 181,
    originalPrice: 259,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique T-shirts femme de la collection Lacoste. Bon état. Matière premium en coton.',
    condition: 'good',
    size: 's',
    color: 'purple',
    material: 'coton',
    gender: 'femme'
  },
  {
    id: '357',
    name: 'Pantalons & Shorts homme',
    price: 174,
    originalPrice: 249,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Pantalons & Shorts homme authentique Lacoste. Excellent état. gabardine durable et confortable.',
    condition: 'excellent',
    size: 'xxl_and_more',
    color: 'orange',
    material: 'gabardine',
    gender: 'homme'
  },
  {
    id: '358',
    name: 'Sweatshirts homme',
    price: 132,
    originalPrice: 188,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Sweatshirts homme en coton brossé. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 'xl',
    color: 'purple',
    material: 'coton brossé',
    gender: 'homme'
  },
  {
    id: '359',
    name: 'Sweatshirts femme',
    price: 29,
    originalPrice: 42,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique Sweatshirts femme de la collection Lacoste. Bon état. Matière premium en molleton.',
    condition: 'good',
    size: 'l',
    color: 'yellow',
    material: 'molleton',
    gender: 'femme'
  },
  {
    id: '360',
    name: 'Sweatshirts homme',
    price: 96,
    originalPrice: 120,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Sweatshirts homme élégant et intemporel. Très bon état. Fabriqué en molleton de haute qualité.',
    condition: 'very_good',
    size: 's',
    color: 'grey',
    material: 'molleton',
    gender: 'homme'
  },
  {
    id: '361',
    name: 'Polos homme',
    price: 185,
    originalPrice: 231,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Polos homme élégant et intemporel. Très bon état. Fabriqué en coton piqué de haute qualité.',
    condition: 'very_good',
    size: 's',
    color: 'beige',
    material: 'coton piqué',
    gender: 'homme'
  },
  {
    id: '362',
    name: 'Pullovers homme',
    price: 104,
    originalPrice: 148,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Pullovers homme authentique Lacoste. État neuf. cachemire durable et confortable.',
    condition: 'new',
    size: 'xxl_and_more',
    color: 'yellow',
    material: 'cachemire',
    gender: 'homme'
  },
  {
    id: '363',
    name: 'Maroquinerie femme',
    price: 201,
    originalPrice: 287,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Maroquinerie femme authentique Lacoste. Excellent état. toile enduite durable et confortable.',
    condition: 'excellent',
    size: 's',
    color: 'black',
    material: 'toile enduite',
    gender: 'femme'
  },
  {
    id: '364',
    name: 'Survêtements homme',
    price: 209,
    originalPrice: 261,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Survêtements homme élégant et intemporel. Très bon état. Fabriqué en polyester technique de haute qualité.',
    condition: 'very_good',
    size: 'm',
    color: 'red',
    material: 'polyester technique',
    gender: 'homme'
  },
  {
    id: '365',
    name: 'Pullovers homme',
    price: 105,
    originalPrice: 150,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique Pullovers homme de la collection Lacoste. Bon état. Matière premium en cachemire.',
    condition: 'good',
    size: 'xl',
    color: 'white',
    material: 'cachemire',
    gender: 'homme'
  },
  {
    id: '366',
    name: 'Survêtements homme',
    price: 108,
    originalPrice: 154,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Survêtements homme en polyester technique. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 'xxl_and_more',
    color: 'grey',
    material: 'polyester technique',
    gender: 'homme'
  },
  {
    id: '367',
    name: 'Pantalons & Shorts femme',
    price: 127,
    originalPrice: 182,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Pantalons & Shorts femme en toile de coton. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'xs',
    color: 'brown',
    material: 'toile de coton',
    gender: 'femme'
  },
  {
    id: '368',
    name: 'Pantalons & Shorts femme',
    price: 105,
    originalPrice: 150,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Pantalons & Shorts femme authentique Lacoste. État neuf. gabardine durable et confortable.',
    condition: 'new',
    size: 'xs',
    color: 'black',
    material: 'gabardine',
    gender: 'femme'
  },
  {
    id: '369',
    name: 'Manteaux & Vestes femme',
    price: 193,
    originalPrice: 275,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Manteaux & Vestes femme en polyester recyclé. Excellent état. Coupe ajustée et confortable.',
    condition: 'excellent',
    size: 'l',
    color: 'orange',
    material: 'polyester recyclé',
    gender: 'femme'
  },
  {
    id: '370',
    name: 'Polos homme',
    price: 27,
    originalPrice: 38,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Polos homme en coton piqué. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 'xl',
    color: 'green',
    material: 'coton piqué',
    gender: 'homme'
  },
  {
    id: '371',
    name: 'Manteaux & Vestes homme',
    price: 46,
    originalPrice: 65,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Magnifique Manteaux & Vestes homme de la collection Lacoste. État neuf. Matière premium en polyester recyclé.',
    condition: 'new',
    size: 'xl',
    color: 'grey',
    material: 'polyester recyclé',
    gender: 'homme'
  },
  {
    id: '372',
    name: 'T-shirts femme',
    price: 60,
    originalPrice: 86,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'T-shirts femme élégant et intemporel. Bon état. Fabriqué en coton de haute qualité.',
    condition: 'good',
    size: 'm',
    color: 'grey',
    material: 'coton',
    gender: 'femme'
  },
  {
    id: '373',
    name: 'Survêtements homme',
    price: 181,
    originalPrice: 259,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Survêtements homme en polyester technique. Excellent état. Coupe ajustée et confortable.',
    condition: 'excellent',
    size: 's',
    color: 'grey',
    material: 'polyester technique',
    gender: 'homme'
  },
  {
    id: '374',
    name: 'Robes & Jupes femme',
    price: 194,
    originalPrice: 277,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique Robes & Jupes femme de la collection Lacoste. Bon état. Matière premium en jersey.',
    condition: 'good',
    size: 'xxl_and_more',
    color: 'purple',
    material: 'jersey',
    gender: 'femme'
  },
  {
    id: '375',
    name: 'T-shirts femme',
    price: 135,
    originalPrice: 169,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'T-shirts femme élégant et intemporel. Très bon état. Fabriqué en coton organique de haute qualité.',
    condition: 'very_good',
    size: 'xl',
    color: 'yellow',
    material: 'coton organique',
    gender: 'femme'
  },
  {
    id: '376',
    name: 'T-shirts femme',
    price: 48,
    originalPrice: 69,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'T-shirts femme élégant et intemporel. Excellent état. Fabriqué en jersey fin de haute qualité.',
    condition: 'excellent',
    size: 'xxl_and_more',
    color: 'yellow',
    material: 'jersey fin',
    gender: 'femme'
  },
  {
    id: '377',
    name: 'Pullovers femme',
    price: 184,
    originalPrice: 263,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Pullovers femme authentique Lacoste. État neuf. coton tricoté durable et confortable.',
    condition: 'new',
    size: 'l',
    color: 'red',
    material: 'coton tricoté',
    gender: 'femme'
  },
  {
    id: '378',
    name: 'Pullovers homme',
    price: 104,
    originalPrice: 149,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Pullovers homme élégant et intemporel. État neuf. Fabriqué en cachemire de haute qualité.',
    condition: 'new',
    size: 's',
    color: 'beige',
    material: 'cachemire',
    gender: 'homme'
  },
  {
    id: '379',
    name: 'Sweatshirts femme',
    price: 110,
    originalPrice: 138,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Sweatshirts femme élégant et intemporel. Très bon état. Fabriqué en coton brossé de haute qualité.',
    condition: 'very_good',
    size: 'l',
    color: 'red',
    material: 'coton brossé',
    gender: 'femme'
  },
  {
    id: '380',
    name: 'Chemises femme',
    price: 214,
    originalPrice: 268,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Chemises femme authentique Lacoste. Très bon état. lin durable et confortable.',
    condition: 'very_good',
    size: 'l',
    color: 'white',
    material: 'lin',
    gender: 'femme'
  },
  {
    id: '381',
    name: 'Tops & Chemises femme',
    price: 104,
    originalPrice: 149,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Tops & Chemises femme authentique Lacoste. État neuf. popeline de coton durable et confortable.',
    condition: 'new',
    size: 'xs',
    color: 'brown',
    material: 'popeline de coton',
    gender: 'femme'
  },
  {
    id: '382',
    name: 'Sweatshirts femme',
    price: 83,
    originalPrice: 118,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Sweatshirts femme élégant et intemporel. État neuf. Fabriqué en coton brossé de haute qualité.',
    condition: 'new',
    size: 'xxl_and_more',
    color: 'brown',
    material: 'coton brossé',
    gender: 'femme'
  },
  {
    id: '383',
    name: 'Survêtements femme',
    price: 24,
    originalPrice: 34,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Survêtements femme en polyester technique. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'l',
    color: 'purple',
    material: 'polyester technique',
    gender: 'femme'
  },
  {
    id: '384',
    name: 'Sweatshirts homme',
    price: 85,
    originalPrice: 121,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Sweatshirts homme élégant et intemporel. Excellent état. Fabriqué en molleton de haute qualité.',
    condition: 'excellent',
    size: 'xs',
    color: 'pink',
    material: 'molleton',
    gender: 'homme'
  },
  {
    id: '385',
    name: 'Maroquinerie femme',
    price: 61,
    originalPrice: 76,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Maroquinerie femme élégant et intemporel. Très bon état. Fabriqué en nylon de haute qualité.',
    condition: 'very_good',
    size: 'l',
    color: 'beige',
    material: 'nylon',
    gender: 'femme'
  },
  {
    id: '386',
    name: 'Chemises femme',
    price: 150,
    originalPrice: 214,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Chemises femme en oxford. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 'xl',
    color: 'beige',
    material: 'oxford',
    gender: 'femme'
  },
  {
    id: '387',
    name: 'Chemises homme',
    price: 130,
    originalPrice: 163,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Chemises homme élégant et intemporel. Très bon état. Fabriqué en lin de haute qualité.',
    condition: 'very_good',
    size: 'xs',
    color: 'yellow',
    material: 'lin',
    gender: 'homme'
  },
  {
    id: '388',
    name: 'Pullovers femme',
    price: 175,
    originalPrice: 250,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique Pullovers femme de la collection Lacoste. Bon état. Matière premium en coton tricoté.',
    condition: 'good',
    size: 'xs',
    color: 'brown',
    material: 'coton tricoté',
    gender: 'femme'
  },
  {
    id: '389',
    name: 'Manteaux & Vestes femme',
    price: 202,
    originalPrice: 288,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Manteaux & Vestes femme élégant et intemporel. État neuf. Fabriqué en laine de haute qualité.',
    condition: 'new',
    size: 'm',
    color: 'beige',
    material: 'laine',
    gender: 'femme'
  },
  {
    id: '390',
    name: 'Manteaux & Vestes homme',
    price: 70,
    originalPrice: 87,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Manteaux & Vestes homme en laine. Très bon état. Coupe ajustée et confortable.',
    condition: 'very_good',
    size: 'm',
    color: 'purple',
    material: 'laine',
    gender: 'homme'
  },
  {
    id: '391',
    name: 'Pantalons & Shorts homme',
    price: 117,
    originalPrice: 167,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Pantalons & Shorts homme authentique Lacoste. Excellent état. toile de coton durable et confortable.',
    condition: 'excellent',
    size: 'xl',
    color: 'brown',
    material: 'toile de coton',
    gender: 'homme'
  },
  {
    id: '392',
    name: 'Maroquinerie homme',
    price: 170,
    originalPrice: 213,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Maroquinerie homme authentique Lacoste. Très bon état. nylon durable et confortable.',
    condition: 'very_good',
    size: 'xs',
    color: 'yellow',
    material: 'nylon',
    gender: 'homme'
  },
  {
    id: '393',
    name: 'T-shirts femme',
    price: 73,
    originalPrice: 91,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique T-shirts femme de la collection Lacoste. Très bon état. Matière premium en jersey fin.',
    condition: 'very_good',
    size: 'xs',
    color: 'white',
    material: 'jersey fin',
    gender: 'femme'
  },
  {
    id: '394',
    name: 'Robes & Jupes femme',
    price: 199,
    originalPrice: 284,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Robes & Jupes femme élégant et intemporel. Excellent état. Fabriqué en coton stretch de haute qualité.',
    condition: 'excellent',
    size: 'xxl_and_more',
    color: 'beige',
    material: 'coton stretch',
    gender: 'femme'
  },
  {
    id: '395',
    name: 'Tops & Chemises femme',
    price: 81,
    originalPrice: 116,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Tops & Chemises femme en popeline de coton. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 'l',
    color: 'black',
    material: 'popeline de coton',
    gender: 'femme'
  },
  {
    id: '396',
    name: 'Chemises femme',
    price: 46,
    originalPrice: 58,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Chemises femme authentique Lacoste. Très bon état. popeline durable et confortable.',
    condition: 'very_good',
    size: 's',
    color: 'brown',
    material: 'popeline',
    gender: 'femme'
  },
  {
    id: '397',
    name: 'Sweatshirts femme',
    price: 61,
    originalPrice: 76,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Sweatshirts femme élégant et intemporel. Très bon état. Fabriqué en molleton de haute qualité.',
    condition: 'very_good',
    size: 'xxl_and_more',
    color: 'orange',
    material: 'molleton',
    gender: 'femme'
  },
  {
    id: '398',
    name: 'Tops & Chemises femme',
    price: 153,
    originalPrice: 219,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Tops & Chemises femme élégant et intemporel. Bon état. Fabriqué en viscose de haute qualité.',
    condition: 'good',
    size: 'xs',
    color: 'yellow',
    material: 'viscose',
    gender: 'femme'
  },
  {
    id: '399',
    name: 'Chemises femme',
    price: 186,
    originalPrice: 266,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Chemises femme en popeline. Excellent état. Coupe ajustée et confortable.',
    condition: 'excellent',
    size: 'xs',
    color: 'white',
    material: 'popeline',
    gender: 'femme'
  },
  {
    id: '400',
    name: 'Polos homme',
    price: 186,
    originalPrice: 266,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Magnifique Polos homme de la collection Lacoste. Excellent état. Matière premium en jersey de coton.',
    condition: 'excellent',
    size: 'xl',
    color: 'grey',
    material: 'jersey de coton',
    gender: 'homme'
  },
  {
    id: '401',
    name: 'T-shirts femme',
    price: 89,
    originalPrice: 127,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'T-shirts femme authentique Lacoste. Excellent état. coton organique durable et confortable.',
    condition: 'excellent',
    size: 'xl',
    color: 'orange',
    material: 'coton organique',
    gender: 'femme'
  },
  {
    id: '402',
    name: 'T-shirts femme',
    price: 99,
    originalPrice: 141,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Magnifique T-shirts femme de la collection Lacoste. Excellent état. Matière premium en coton.',
    condition: 'excellent',
    size: 's',
    color: 'beige',
    material: 'coton',
    gender: 'femme'
  },
  {
    id: '403',
    name: 'Survêtements homme',
    price: 149,
    originalPrice: 213,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Survêtements homme élégant et intemporel. Bon état. Fabriqué en coton molletonné de haute qualité.',
    condition: 'good',
    size: 'l',
    color: 'purple',
    material: 'coton molletonné',
    gender: 'homme'
  },
  {
    id: '404',
    name: 'Maroquinerie homme',
    price: 200,
    originalPrice: 285,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Maroquinerie homme élégant et intemporel. Bon état. Fabriqué en toile enduite de haute qualité.',
    condition: 'good',
    size: 'm',
    color: 'beige',
    material: 'toile enduite',
    gender: 'homme'
  },
  {
    id: '405',
    name: 'Survêtements femme',
    price: 86,
    originalPrice: 123,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Survêtements femme authentique Lacoste. Excellent état. coton molletonné durable et confortable.',
    condition: 'excellent',
    size: 'xl',
    color: 'green',
    material: 'coton molletonné',
    gender: 'femme'
  },
  {
    id: '406',
    name: 'Pantalons & Shorts homme',
    price: 90,
    originalPrice: 128,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Magnifique Pantalons & Shorts homme de la collection Lacoste. Bon état. Matière premium en coton sergé.',
    condition: 'good',
    size: 'xs',
    color: 'purple',
    material: 'coton sergé',
    gender: 'homme'
  },
  {
    id: '407',
    name: 'Chemises femme',
    price: 166,
    originalPrice: 237,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Chemises femme authentique Lacoste. Bon état. popeline durable et confortable.',
    condition: 'good',
    size: 'xs',
    color: 'yellow',
    material: 'popeline',
    gender: 'femme'
  },
  {
    id: '408',
    name: 'Polos homme',
    price: 164,
    originalPrice: 234,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Polos homme élégant et intemporel. État neuf. Fabriqué en jersey de coton de haute qualité.',
    condition: 'new',
    size: 'xxl_and_more',
    color: 'beige',
    material: 'jersey de coton',
    gender: 'homme'
  },
  {
    id: '409',
    name: 'Maroquinerie homme',
    price: 91,
    originalPrice: 114,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Maroquinerie homme authentique Lacoste. Très bon état. toile enduite durable et confortable.',
    condition: 'very_good',
    size: 'm',
    color: 'black',
    material: 'toile enduite',
    gender: 'homme'
  },
  {
    id: '410',
    name: 'Maroquinerie homme',
    price: 122,
    originalPrice: 153,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Maroquinerie homme en toile enduite. Très bon état. Coupe ajustée et confortable.',
    condition: 'very_good',
    size: 'xs',
    color: 'pink',
    material: 'toile enduite',
    gender: 'homme'
  },
  {
    id: '411',
    name: 'Pullovers homme',
    price: 55,
    originalPrice: 78,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Pullovers homme authentique Lacoste. Bon état. coton tricoté durable et confortable.',
    condition: 'good',
    size: 's',
    color: 'beige',
    material: 'coton tricoté',
    gender: 'homme'
  },
  {
    id: '412',
    name: 'Manteaux & Vestes femme',
    price: 162,
    originalPrice: 232,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Manteaux & Vestes femme authentique Lacoste. Excellent état. polyester recyclé durable et confortable.',
    condition: 'excellent',
    size: 's',
    color: 'purple',
    material: 'polyester recyclé',
    gender: 'femme'
  },
  {
    id: '413',
    name: 'Tops & Chemises femme',
    price: 72,
    originalPrice: 103,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Tops & Chemises femme élégant et intemporel. Bon état. Fabriqué en popeline de coton de haute qualité.',
    condition: 'good',
    size: 's',
    color: 'beige',
    material: 'popeline de coton',
    gender: 'femme'
  },
  {
    id: '414',
    name: 'Tops & Chemises femme',
    price: 142,
    originalPrice: 177,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Tops & Chemises femme en viscose. Très bon état. Coupe ajustée et confortable.',
    condition: 'very_good',
    size: 's',
    color: 'red',
    material: 'viscose',
    gender: 'femme'
  },
  {
    id: '415',
    name: 'Polos homme',
    price: 120,
    originalPrice: 171,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Polos homme authentique Lacoste. État neuf. coton piqué durable et confortable.',
    condition: 'new',
    size: 'l',
    color: 'green',
    material: 'coton piqué',
    gender: 'homme'
  },
  {
    id: '416',
    name: 'Chemises femme',
    price: 29,
    originalPrice: 42,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Magnifique Chemises femme de la collection Lacoste. Bon état. Matière premium en popeline.',
    condition: 'good',
    size: 'm',
    color: 'orange',
    material: 'popeline',
    gender: 'femme'
  },
  {
    id: '417',
    name: 'Robes & Jupes femme',
    price: 207,
    originalPrice: 296,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Magnifique Robes & Jupes femme de la collection Lacoste. État neuf. Matière premium en jersey.',
    condition: 'new',
    size: 'xxl_and_more',
    color: 'yellow',
    material: 'jersey',
    gender: 'femme'
  },
  {
    id: '418',
    name: 'Pantalons & Shorts homme',
    price: 56,
    originalPrice: 80,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Pantalons & Shorts homme authentique Lacoste. Bon état. coton sergé durable et confortable.',
    condition: 'good',
    size: 'l',
    color: 'green',
    material: 'coton sergé',
    gender: 'homme'
  },
  {
    id: '419',
    name: 'Sweatshirts femme',
    price: 163,
    originalPrice: 204,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique Sweatshirts femme de la collection Lacoste. Très bon état. Matière premium en molleton.',
    condition: 'very_good',
    size: 's',
    color: 'black',
    material: 'molleton',
    gender: 'femme'
  },
  {
    id: '420',
    name: 'Maroquinerie femme',
    price: 152,
    originalPrice: 190,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Maroquinerie femme en cuir. Très bon état. Coupe ajustée et confortable.',
    condition: 'very_good',
    size: 's',
    color: 'yellow',
    material: 'cuir',
    gender: 'femme'
  },
  {
    id: '421',
    name: 'Sweatshirts femme',
    price: 102,
    originalPrice: 128,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Sweatshirts femme en molleton. Très bon état. Coupe ajustée et confortable.',
    condition: 'very_good',
    size: 'xs',
    color: 'yellow',
    material: 'molleton',
    gender: 'femme'
  },
  {
    id: '422',
    name: 'Maroquinerie femme',
    price: 65,
    originalPrice: 93,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique Maroquinerie femme de la collection Lacoste. État neuf. Matière premium en cuir.',
    condition: 'new',
    size: 'xl',
    color: 'blue',
    material: 'cuir',
    gender: 'femme'
  },
  {
    id: '423',
    name: 'T-shirts homme',
    price: 155,
    originalPrice: 194,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe T-shirts homme en jersey fin. Très bon état. Coupe ajustée et confortable.',
    condition: 'very_good',
    size: 's',
    color: 'orange',
    material: 'jersey fin',
    gender: 'homme'
  },
  {
    id: '424',
    name: 'T-shirts femme',
    price: 200,
    originalPrice: 250,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe T-shirts femme en coton organique. Très bon état. Coupe ajustée et confortable.',
    condition: 'very_good',
    size: 'l',
    color: 'beige',
    material: 'coton organique',
    gender: 'femme'
  },
  {
    id: '425',
    name: 'Manteaux & Vestes femme',
    price: 74,
    originalPrice: 106,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Manteaux & Vestes femme élégant et intemporel. État neuf. Fabriqué en polyester recyclé de haute qualité.',
    condition: 'new',
    size: 'xxl_and_more',
    color: 'brown',
    material: 'polyester recyclé',
    gender: 'femme'
  },
  {
    id: '426',
    name: 'Pantalons & Shorts femme',
    price: 135,
    originalPrice: 193,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Pantalons & Shorts femme en toile de coton. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'xl',
    color: 'green',
    material: 'toile de coton',
    gender: 'femme'
  },
  {
    id: '427',
    name: 'Chemises femme',
    price: 133,
    originalPrice: 190,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Chemises femme en popeline. Excellent état. Coupe ajustée et confortable.',
    condition: 'excellent',
    size: 's',
    color: 'orange',
    material: 'popeline',
    gender: 'femme'
  },
  {
    id: '428',
    name: 'Pullovers homme',
    price: 190,
    originalPrice: 272,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Pullovers homme élégant et intemporel. Excellent état. Fabriqué en cachemire de haute qualité.',
    condition: 'excellent',
    size: 's',
    color: 'green',
    material: 'cachemire',
    gender: 'homme'
  },
  {
    id: '429',
    name: 'T-shirts homme',
    price: 67,
    originalPrice: 96,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'T-shirts homme élégant et intemporel. État neuf. Fabriqué en jersey fin de haute qualité.',
    condition: 'new',
    size: 'xl',
    color: 'purple',
    material: 'jersey fin',
    gender: 'homme'
  },
  {
    id: '430',
    name: 'Survêtements femme',
    price: 54,
    originalPrice: 68,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Survêtements femme en matière stretch. Très bon état. Coupe ajustée et confortable.',
    condition: 'very_good',
    size: 'xxl_and_more',
    color: 'green',
    material: 'matière stretch',
    gender: 'femme'
  },
  {
    id: '431',
    name: 'Chemises homme',
    price: 192,
    originalPrice: 274,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Chemises homme élégant et intemporel. Excellent état. Fabriqué en oxford de haute qualité.',
    condition: 'excellent',
    size: 'l',
    color: 'beige',
    material: 'oxford',
    gender: 'homme'
  },
  {
    id: '432',
    name: 'Manteaux & Vestes femme',
    price: 105,
    originalPrice: 150,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Manteaux & Vestes femme authentique Lacoste. État neuf. laine durable et confortable.',
    condition: 'new',
    size: 's',
    color: 'beige',
    material: 'laine',
    gender: 'femme'
  },
  {
    id: '433',
    name: 'Pantalons & Shorts femme',
    price: 33,
    originalPrice: 41,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Pantalons & Shorts femme en gabardine. Très bon état. Coupe ajustée et confortable.',
    condition: 'very_good',
    size: 's',
    color: 'white',
    material: 'gabardine',
    gender: 'femme'
  },
  {
    id: '434',
    name: 'Pantalons & Shorts homme',
    price: 123,
    originalPrice: 176,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Pantalons & Shorts homme authentique Lacoste. Excellent état. coton sergé durable et confortable.',
    condition: 'excellent',
    size: 'xs',
    color: 'beige',
    material: 'coton sergé',
    gender: 'homme'
  },
  {
    id: '435',
    name: 'Pantalons & Shorts femme',
    price: 76,
    originalPrice: 108,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Pantalons & Shorts femme authentique Lacoste. État neuf. coton sergé durable et confortable.',
    condition: 'new',
    size: 's',
    color: 'red',
    material: 'coton sergé',
    gender: 'femme'
  },
  {
    id: '436',
    name: 'Sweatshirts homme',
    price: 175,
    originalPrice: 250,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Sweatshirts homme en molleton. Excellent état. Coupe ajustée et confortable.',
    condition: 'excellent',
    size: 'l',
    color: 'brown',
    material: 'molleton',
    gender: 'homme'
  },
  {
    id: '437',
    name: 'T-shirts homme',
    price: 67,
    originalPrice: 96,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Magnifique T-shirts homme de la collection Lacoste. État neuf. Matière premium en coton.',
    condition: 'new',
    size: 'xs',
    color: 'orange',
    material: 'coton',
    gender: 'homme'
  },
  {
    id: '438',
    name: 'T-shirts homme',
    price: 193,
    originalPrice: 275,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'T-shirts homme élégant et intemporel. Bon état. Fabriqué en coton de haute qualité.',
    condition: 'good',
    size: 'm',
    color: 'beige',
    material: 'coton',
    gender: 'homme'
  },
  {
    id: '439',
    name: 'Tops & Chemises femme',
    price: 169,
    originalPrice: 242,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Tops & Chemises femme élégant et intemporel. État neuf. Fabriqué en popeline de coton de haute qualité.',
    condition: 'new',
    size: 's',
    color: 'pink',
    material: 'popeline de coton',
    gender: 'femme'
  },
  {
    id: '440',
    name: 'Sweatshirts femme',
    price: 83,
    originalPrice: 118,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Sweatshirts femme authentique Lacoste. État neuf. molleton durable et confortable.',
    condition: 'new',
    size: 'xxl_and_more',
    color: 'black',
    material: 'molleton',
    gender: 'femme'
  },
  {
    id: '441',
    name: 'Pullovers femme',
    price: 48,
    originalPrice: 68,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Pullovers femme en cachemire. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 's',
    color: 'red',
    material: 'cachemire',
    gender: 'femme'
  },
  {
    id: '442',
    name: 'Pantalons & Shorts femme',
    price: 159,
    originalPrice: 227,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Pantalons & Shorts femme en toile de coton. Excellent état. Coupe ajustée et confortable.',
    condition: 'excellent',
    size: 'xl',
    color: 'yellow',
    material: 'toile de coton',
    gender: 'femme'
  },
  {
    id: '443',
    name: 'Polos homme',
    price: 111,
    originalPrice: 158,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Polos homme en jersey de coton. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'xs',
    color: 'pink',
    material: 'jersey de coton',
    gender: 'homme'
  },
  {
    id: '444',
    name: 'Manteaux & Vestes homme',
    price: 191,
    originalPrice: 273,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Manteaux & Vestes homme en laine. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'xl',
    color: 'purple',
    material: 'laine',
    gender: 'homme'
  },
  {
    id: '445',
    name: 'Chemises homme',
    price: 103,
    originalPrice: 147,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Chemises homme élégant et intemporel. Excellent état. Fabriqué en lin de haute qualité.',
    condition: 'excellent',
    size: 'xl',
    color: 'pink',
    material: 'lin',
    gender: 'homme'
  },
  {
    id: '446',
    name: 'Sweatshirts femme',
    price: 190,
    originalPrice: 271,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Sweatshirts femme en coton brossé. Excellent état. Coupe ajustée et confortable.',
    condition: 'excellent',
    size: 'xxl_and_more',
    color: 'blue',
    material: 'coton brossé',
    gender: 'femme'
  },
  {
    id: '447',
    name: 'Sweatshirts femme',
    price: 41,
    originalPrice: 58,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Sweatshirts femme en coton brossé. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'xs',
    color: 'white',
    material: 'coton brossé',
    gender: 'femme'
  },
  {
    id: '448',
    name: 'Manteaux & Vestes femme',
    price: 97,
    originalPrice: 138,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Magnifique Manteaux & Vestes femme de la collection Lacoste. Excellent état. Matière premium en polyester recyclé.',
    condition: 'excellent',
    size: 'xl',
    color: 'green',
    material: 'polyester recyclé',
    gender: 'femme'
  },
  {
    id: '449',
    name: 'Survêtements homme',
    price: 167,
    originalPrice: 239,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Magnifique Survêtements homme de la collection Lacoste. Excellent état. Matière premium en polyester technique.',
    condition: 'excellent',
    size: 'm',
    color: 'beige',
    material: 'polyester technique',
    gender: 'homme'
  },
  {
    id: '450',
    name: 'Pullovers homme',
    price: 116,
    originalPrice: 166,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Pullovers homme élégant et intemporel. État neuf. Fabriqué en cachemire de haute qualité.',
    condition: 'new',
    size: 'xxl_and_more',
    color: 'blue',
    material: 'cachemire',
    gender: 'homme'
  },
  {
    id: '451',
    name: 'Pullovers homme',
    price: 75,
    originalPrice: 107,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Pullovers homme authentique Lacoste. Excellent état. coton tricoté durable et confortable.',
    condition: 'excellent',
    size: 'xxl_and_more',
    color: 'brown',
    material: 'coton tricoté',
    gender: 'homme'
  },
  {
    id: '452',
    name: 'Survêtements femme',
    price: 53,
    originalPrice: 75,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Magnifique Survêtements femme de la collection Lacoste. État neuf. Matière premium en coton molletonné.',
    condition: 'new',
    size: 'l',
    color: 'blue',
    material: 'coton molletonné',
    gender: 'femme'
  },
  {
    id: '453',
    name: 'Pullovers homme',
    price: 153,
    originalPrice: 218,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Pullovers homme en cachemire. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'xs',
    color: 'grey',
    material: 'cachemire',
    gender: 'homme'
  },
  {
    id: '454',
    name: 'Chemises femme',
    price: 57,
    originalPrice: 81,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Chemises femme élégant et intemporel. Excellent état. Fabriqué en lin de haute qualité.',
    condition: 'excellent',
    size: 'l',
    color: 'red',
    material: 'lin',
    gender: 'femme'
  },
  {
    id: '455',
    name: 'Pantalons & Shorts homme',
    price: 193,
    originalPrice: 275,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Magnifique Pantalons & Shorts homme de la collection Lacoste. Bon état. Matière premium en toile de coton.',
    condition: 'good',
    size: 's',
    color: 'brown',
    material: 'toile de coton',
    gender: 'homme'
  },
  {
    id: '456',
    name: 'Polos homme',
    price: 199,
    originalPrice: 284,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Polos homme authentique Lacoste. État neuf. jersey de coton durable et confortable.',
    condition: 'new',
    size: 'l',
    color: 'purple',
    material: 'jersey de coton',
    gender: 'homme'
  },
  {
    id: '457',
    name: 'Survêtements homme',
    price: 195,
    originalPrice: 244,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Survêtements homme en matière stretch. Très bon état. Coupe ajustée et confortable.',
    condition: 'very_good',
    size: 'xs',
    color: 'blue',
    material: 'matière stretch',
    gender: 'homme'
  },
  {
    id: '458',
    name: 'Sweatshirts femme',
    price: 83,
    originalPrice: 119,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Sweatshirts femme élégant et intemporel. Excellent état. Fabriqué en coton brossé de haute qualité.',
    condition: 'excellent',
    size: 'l',
    color: 'yellow',
    material: 'coton brossé',
    gender: 'femme'
  },
  {
    id: '459',
    name: 'Maroquinerie homme',
    price: 36,
    originalPrice: 51,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Maroquinerie homme authentique Lacoste. Bon état. nylon durable et confortable.',
    condition: 'good',
    size: 'm',
    color: 'grey',
    material: 'nylon',
    gender: 'homme'
  },
  {
    id: '460',
    name: 'Survêtements femme',
    price: 170,
    originalPrice: 243,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Survêtements femme authentique Lacoste. Excellent état. polyester technique durable et confortable.',
    condition: 'excellent',
    size: 'xl',
    color: 'red',
    material: 'polyester technique',
    gender: 'femme'
  },
  {
    id: '461',
    name: 'Polos homme',
    price: 137,
    originalPrice: 196,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Polos homme élégant et intemporel. Excellent état. Fabriqué en coton bio de haute qualité.',
    condition: 'excellent',
    size: 'xs',
    color: 'yellow',
    material: 'coton bio',
    gender: 'homme'
  },
  {
    id: '462',
    name: 'Polos homme',
    price: 71,
    originalPrice: 89,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Magnifique Polos homme de la collection Lacoste. Très bon état. Matière premium en jersey de coton.',
    condition: 'very_good',
    size: 'm',
    color: 'yellow',
    material: 'jersey de coton',
    gender: 'homme'
  },
  {
    id: '463',
    name: 'Polos homme',
    price: 146,
    originalPrice: 182,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Polos homme élégant et intemporel. Très bon état. Fabriqué en coton bio de haute qualité.',
    condition: 'very_good',
    size: 's',
    color: 'blue',
    material: 'coton bio',
    gender: 'homme'
  },
  {
    id: '464',
    name: 'Pantalons & Shorts femme',
    price: 51,
    originalPrice: 73,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Pantalons & Shorts femme authentique Lacoste. Bon état. toile de coton durable et confortable.',
    condition: 'good',
    size: 'l',
    color: 'brown',
    material: 'toile de coton',
    gender: 'femme'
  },
  {
    id: '465',
    name: 'Tops & Chemises femme',
    price: 84,
    originalPrice: 120,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Tops & Chemises femme en soie. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'xl',
    color: 'brown',
    material: 'soie',
    gender: 'femme'
  },
  {
    id: '466',
    name: 'Manteaux & Vestes homme',
    price: 195,
    originalPrice: 278,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Manteaux & Vestes homme élégant et intemporel. Excellent état. Fabriqué en laine de haute qualité.',
    condition: 'excellent',
    size: 'xl',
    color: 'red',
    material: 'laine',
    gender: 'homme'
  },
  {
    id: '467',
    name: 'Manteaux & Vestes femme',
    price: 21,
    originalPrice: 30,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Manteaux & Vestes femme élégant et intemporel. Bon état. Fabriqué en coton imperméable de haute qualité.',
    condition: 'good',
    size: 'xl',
    color: 'white',
    material: 'coton imperméable',
    gender: 'femme'
  },
  {
    id: '468',
    name: 'T-shirts femme',
    price: 74,
    originalPrice: 93,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'T-shirts femme authentique Lacoste. Très bon état. coton durable et confortable.',
    condition: 'very_good',
    size: 'xs',
    color: 'orange',
    material: 'coton',
    gender: 'femme'
  },
  {
    id: '469',
    name: 'Tops & Chemises femme',
    price: 43,
    originalPrice: 62,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Tops & Chemises femme élégant et intemporel. Excellent état. Fabriqué en popeline de coton de haute qualité.',
    condition: 'excellent',
    size: 'xxl_and_more',
    color: 'pink',
    material: 'popeline de coton',
    gender: 'femme'
  },
  {
    id: '470',
    name: 'Manteaux & Vestes femme',
    price: 190,
    originalPrice: 271,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Manteaux & Vestes femme authentique Lacoste. Excellent état. laine durable et confortable.',
    condition: 'excellent',
    size: 'xs',
    color: 'black',
    material: 'laine',
    gender: 'femme'
  },
  {
    id: '471',
    name: 'Survêtements femme',
    price: 125,
    originalPrice: 178,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Survêtements femme élégant et intemporel. Excellent état. Fabriqué en polyester technique de haute qualité.',
    condition: 'excellent',
    size: 'l',
    color: 'yellow',
    material: 'polyester technique',
    gender: 'femme'
  },
  {
    id: '472',
    name: 'Chemises homme',
    price: 55,
    originalPrice: 79,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Chemises homme élégant et intemporel. Excellent état. Fabriqué en oxford de haute qualité.',
    condition: 'excellent',
    size: 'xs',
    color: 'black',
    material: 'oxford',
    gender: 'homme'
  },
  {
    id: '473',
    name: 'Robes & Jupes femme',
    price: 187,
    originalPrice: 267,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Robes & Jupes femme élégant et intemporel. Excellent état. Fabriqué en crêpe de haute qualité.',
    condition: 'excellent',
    size: 'xl',
    color: 'blue',
    material: 'crêpe',
    gender: 'femme'
  },
  {
    id: '474',
    name: 'Pullovers homme',
    price: 237,
    originalPrice: 296,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Magnifique Pullovers homme de la collection Lacoste. Très bon état. Matière premium en laine mérinos.',
    condition: 'very_good',
    size: 'xl',
    color: 'blue',
    material: 'laine mérinos',
    gender: 'homme'
  },
  {
    id: '475',
    name: 'Pantalons & Shorts homme',
    price: 52,
    originalPrice: 74,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Pantalons & Shorts homme authentique Lacoste. État neuf. gabardine durable et confortable.',
    condition: 'new',
    size: 'xs',
    color: 'beige',
    material: 'gabardine',
    gender: 'homme'
  },
  {
    id: '476',
    name: 'Sweatshirts homme',
    price: 26,
    originalPrice: 37,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Sweatshirts homme authentique Lacoste. Excellent état. jersey lourd durable et confortable.',
    condition: 'excellent',
    size: 'xs',
    color: 'grey',
    material: 'jersey lourd',
    gender: 'homme'
  },
  {
    id: '477',
    name: 'Manteaux & Vestes homme',
    price: 53,
    originalPrice: 75,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Manteaux & Vestes homme élégant et intemporel. Excellent état. Fabriqué en coton imperméable de haute qualité.',
    condition: 'excellent',
    size: 'xs',
    color: 'yellow',
    material: 'coton imperméable',
    gender: 'homme'
  },
  {
    id: '478',
    name: 'Pullovers homme',
    price: 132,
    originalPrice: 189,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique Pullovers homme de la collection Lacoste. Bon état. Matière premium en coton tricoté.',
    condition: 'good',
    size: 'xs',
    color: 'grey',
    material: 'coton tricoté',
    gender: 'homme'
  },
  {
    id: '479',
    name: 'Polos homme',
    price: 146,
    originalPrice: 182,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Polos homme en coton bio. Très bon état. Coupe ajustée et confortable.',
    condition: 'very_good',
    size: 's',
    color: 'orange',
    material: 'coton bio',
    gender: 'homme'
  },
  {
    id: '480',
    name: 'Manteaux & Vestes femme',
    price: 106,
    originalPrice: 152,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Manteaux & Vestes femme en polyester recyclé. Excellent état. Coupe ajustée et confortable.',
    condition: 'excellent',
    size: 's',
    color: 'purple',
    material: 'polyester recyclé',
    gender: 'femme'
  },
  {
    id: '481',
    name: 'Chemises femme',
    price: 160,
    originalPrice: 229,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Magnifique Chemises femme de la collection Lacoste. Excellent état. Matière premium en lin.',
    condition: 'excellent',
    size: 'xxl_and_more',
    color: 'red',
    material: 'lin',
    gender: 'femme'
  },
  {
    id: '482',
    name: 'Manteaux & Vestes femme',
    price: 175,
    originalPrice: 250,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Manteaux & Vestes femme authentique Lacoste. Excellent état. polyester recyclé durable et confortable.',
    condition: 'excellent',
    size: 'xs',
    color: 'purple',
    material: 'polyester recyclé',
    gender: 'femme'
  },
  {
    id: '483',
    name: 'Survêtements homme',
    price: 25,
    originalPrice: 36,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Survêtements homme en matière stretch. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 'l',
    color: 'blue',
    material: 'matière stretch',
    gender: 'homme'
  },
  {
    id: '484',
    name: 'Robes & Jupes femme',
    price: 36,
    originalPrice: 51,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Robes & Jupes femme élégant et intemporel. Excellent état. Fabriqué en jersey de haute qualité.',
    condition: 'excellent',
    size: 's',
    color: 'green',
    material: 'jersey',
    gender: 'femme'
  },
  {
    id: '485',
    name: 'Maroquinerie homme',
    price: 102,
    originalPrice: 146,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Magnifique Maroquinerie homme de la collection Lacoste. Excellent état. Matière premium en nylon.',
    condition: 'excellent',
    size: 'xl',
    color: 'red',
    material: 'nylon',
    gender: 'homme'
  },
  {
    id: '486',
    name: 'T-shirts homme',
    price: 81,
    originalPrice: 101,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe T-shirts homme en coton. Très bon état. Coupe ajustée et confortable.',
    condition: 'very_good',
    size: 'xs',
    color: 'yellow',
    material: 'coton',
    gender: 'homme'
  },
  {
    id: '487',
    name: 'Maroquinerie femme',
    price: 153,
    originalPrice: 219,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Maroquinerie femme élégant et intemporel. État neuf. Fabriqué en toile enduite de haute qualité.',
    condition: 'new',
    size: 's',
    color: 'brown',
    material: 'toile enduite',
    gender: 'femme'
  },
  {
    id: '488',
    name: 'Maroquinerie homme',
    price: 90,
    originalPrice: 129,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Maroquinerie homme en nylon. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'xs',
    color: 'blue',
    material: 'nylon',
    gender: 'homme'
  },
  {
    id: '489',
    name: 'Pullovers femme',
    price: 122,
    originalPrice: 174,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Pullovers femme authentique Lacoste. État neuf. coton tricoté durable et confortable.',
    condition: 'new',
    size: 'l',
    color: 'black',
    material: 'coton tricoté',
    gender: 'femme'
  },
  {
    id: '490',
    name: 'Pullovers homme',
    price: 24,
    originalPrice: 34,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Magnifique Pullovers homme de la collection Lacoste. Bon état. Matière premium en laine mérinos.',
    condition: 'good',
    size: 'xs',
    color: 'green',
    material: 'laine mérinos',
    gender: 'homme'
  },
  {
    id: '491',
    name: 'Pullovers femme',
    price: 44,
    originalPrice: 55,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique Pullovers femme de la collection Lacoste. Très bon état. Matière premium en cachemire.',
    condition: 'very_good',
    size: 'l',
    color: 'brown',
    material: 'cachemire',
    gender: 'femme'
  },
  {
    id: '492',
    name: 'Pantalons & Shorts femme',
    price: 92,
    originalPrice: 132,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Magnifique Pantalons & Shorts femme de la collection Lacoste. Excellent état. Matière premium en coton sergé.',
    condition: 'excellent',
    size: 'xl',
    color: 'blue',
    material: 'coton sergé',
    gender: 'femme'
  },
  {
    id: '493',
    name: 'Sweatshirts homme',
    price: 193,
    originalPrice: 275,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Sweatshirts homme authentique Lacoste. État neuf. jersey lourd durable et confortable.',
    condition: 'new',
    size: 'xs',
    color: 'black',
    material: 'jersey lourd',
    gender: 'homme'
  },
  {
    id: '494',
    name: 'T-shirts homme',
    price: 122,
    originalPrice: 175,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'T-shirts homme authentique Lacoste. Excellent état. coton durable et confortable.',
    condition: 'excellent',
    size: 'xl',
    color: 'beige',
    material: 'coton',
    gender: 'homme'
  },
  {
    id: '495',
    name: 'Pantalons & Shorts homme',
    price: 200,
    originalPrice: 285,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Pantalons & Shorts homme élégant et intemporel. Excellent état. Fabriqué en toile de coton de haute qualité.',
    condition: 'excellent',
    size: 'm',
    color: 'yellow',
    material: 'toile de coton',
    gender: 'homme'
  },
  {
    id: '496',
    name: 'Polos homme',
    price: 196,
    originalPrice: 280,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Polos homme authentique Lacoste. État neuf. jersey de coton durable et confortable.',
    condition: 'new',
    size: 'xs',
    color: 'green',
    material: 'jersey de coton',
    gender: 'homme'
  },
  {
    id: '497',
    name: 'Polos femme',
    price: 208,
    originalPrice: 297,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Polos femme authentique Lacoste. Bon état. coton piqué durable et confortable.',
    condition: 'good',
    size: 'xs',
    color: 'white',
    material: 'coton piqué',
    gender: 'femme'
  },
  {
    id: '498',
    name: 'Maroquinerie homme',
    price: 141,
    originalPrice: 201,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique Maroquinerie homme de la collection Lacoste. Bon état. Matière premium en nylon.',
    condition: 'good',
    size: 'xs',
    color: 'red',
    material: 'nylon',
    gender: 'homme'
  },
  {
    id: '499',
    name: 'Polos femme',
    price: 164,
    originalPrice: 205,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Polos femme authentique Lacoste. Très bon état. jersey de coton durable et confortable.',
    condition: 'very_good',
    size: 'm',
    color: 'brown',
    material: 'jersey de coton',
    gender: 'femme'
  },
  {
    id: '500',
    name: 'Pantalons & Shorts femme',
    price: 78,
    originalPrice: 111,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Pantalons & Shorts femme en toile de coton. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'xs',
    color: 'white',
    material: 'toile de coton',
    gender: 'femme'
  },
  {
    id: '501',
    name: 'Maroquinerie homme',
    price: 89,
    originalPrice: 111,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Magnifique Maroquinerie homme de la collection Lacoste. Très bon état. Matière premium en cuir.',
    condition: 'very_good',
    size: 's',
    color: 'red',
    material: 'cuir',
    gender: 'homme'
  },
  {
    id: '502',
    name: 'Manteaux & Vestes homme',
    price: 138,
    originalPrice: 197,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Magnifique Manteaux & Vestes homme de la collection Lacoste. Excellent état. Matière premium en polyester recyclé.',
    condition: 'excellent',
    size: 'xl',
    color: 'green',
    material: 'polyester recyclé',
    gender: 'homme'
  },
  {
    id: '503',
    name: 'Tops & Chemises femme',
    price: 39,
    originalPrice: 56,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Tops & Chemises femme authentique Lacoste. Bon état. popeline de coton durable et confortable.',
    condition: 'good',
    size: 'l',
    color: 'purple',
    material: 'popeline de coton',
    gender: 'femme'
  },
  {
    id: '504',
    name: 'Chemises homme',
    price: 226,
    originalPrice: 283,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Chemises homme élégant et intemporel. Très bon état. Fabriqué en popeline de haute qualité.',
    condition: 'very_good',
    size: 'm',
    color: 'purple',
    material: 'popeline',
    gender: 'homme'
  },
  {
    id: '505',
    name: 'Manteaux & Vestes femme',
    price: 209,
    originalPrice: 299,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Manteaux & Vestes femme authentique Lacoste. État neuf. coton imperméable durable et confortable.',
    condition: 'new',
    size: 'xxl_and_more',
    color: 'blue',
    material: 'coton imperméable',
    gender: 'femme'
  },
  {
    id: '506',
    name: 'Manteaux & Vestes homme',
    price: 125,
    originalPrice: 178,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique Manteaux & Vestes homme de la collection Lacoste. Bon état. Matière premium en laine.',
    condition: 'good',
    size: 'xs',
    color: 'grey',
    material: 'laine',
    gender: 'homme'
  },
  {
    id: '507',
    name: 'Survêtements homme',
    price: 79,
    originalPrice: 113,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Survêtements homme authentique Lacoste. Excellent état. matière stretch durable et confortable.',
    condition: 'excellent',
    size: 'xl',
    color: 'blue',
    material: 'matière stretch',
    gender: 'homme'
  },
  {
    id: '508',
    name: 'Survêtements homme',
    price: 152,
    originalPrice: 217,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Magnifique Survêtements homme de la collection Lacoste. État neuf. Matière premium en polyester technique.',
    condition: 'new',
    size: 'm',
    color: 'brown',
    material: 'polyester technique',
    gender: 'homme'
  },
  {
    id: '509',
    name: 'Pantalons & Shorts homme',
    price: 186,
    originalPrice: 266,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Magnifique Pantalons & Shorts homme de la collection Lacoste. Bon état. Matière premium en gabardine.',
    condition: 'good',
    size: 'l',
    color: 'orange',
    material: 'gabardine',
    gender: 'homme'
  },
  {
    id: '510',
    name: 'Pullovers femme',
    price: 165,
    originalPrice: 235,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Pullovers femme en coton tricoté. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'l',
    color: 'white',
    material: 'coton tricoté',
    gender: 'femme'
  },
  {
    id: '511',
    name: 'Pantalons & Shorts femme',
    price: 187,
    originalPrice: 267,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Pantalons & Shorts femme élégant et intemporel. Bon état. Fabriqué en gabardine de haute qualité.',
    condition: 'good',
    size: 'l',
    color: 'green',
    material: 'gabardine',
    gender: 'femme'
  },
  {
    id: '512',
    name: 'Pullovers homme',
    price: 184,
    originalPrice: 230,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Pullovers homme en cachemire. Très bon état. Coupe ajustée et confortable.',
    condition: 'very_good',
    size: 'l',
    color: 'green',
    material: 'cachemire',
    gender: 'homme'
  },
  {
    id: '513',
    name: 'Maroquinerie femme',
    price: 127,
    originalPrice: 181,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Maroquinerie femme en nylon. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'm',
    color: 'green',
    material: 'nylon',
    gender: 'femme'
  },
  {
    id: '514',
    name: 'Pullovers homme',
    price: 170,
    originalPrice: 212,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Pullovers homme en coton tricoté. Très bon état. Coupe ajustée et confortable.',
    condition: 'very_good',
    size: 'l',
    color: 'red',
    material: 'coton tricoté',
    gender: 'homme'
  },
  {
    id: '515',
    name: 'Sweatshirts femme',
    price: 131,
    originalPrice: 187,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Sweatshirts femme authentique Lacoste. État neuf. jersey lourd durable et confortable.',
    condition: 'new',
    size: 's',
    color: 'purple',
    material: 'jersey lourd',
    gender: 'femme'
  },
  {
    id: '516',
    name: 'Manteaux & Vestes homme',
    price: 160,
    originalPrice: 228,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Manteaux & Vestes homme en laine. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 'xxl_and_more',
    color: 'purple',
    material: 'laine',
    gender: 'homme'
  },
  {
    id: '517',
    name: 'T-shirts femme',
    price: 118,
    originalPrice: 169,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'T-shirts femme élégant et intemporel. État neuf. Fabriqué en coton de haute qualité.',
    condition: 'new',
    size: 'l',
    color: 'orange',
    material: 'coton',
    gender: 'femme'
  },
  {
    id: '518',
    name: 'Manteaux & Vestes homme',
    price: 139,
    originalPrice: 198,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Manteaux & Vestes homme élégant et intemporel. Bon état. Fabriqué en coton imperméable de haute qualité.',
    condition: 'good',
    size: 's',
    color: 'grey',
    material: 'coton imperméable',
    gender: 'homme'
  },
  {
    id: '519',
    name: 'Survêtements homme',
    price: 24,
    originalPrice: 30,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Survêtements homme en polyester technique. Très bon état. Coupe ajustée et confortable.',
    condition: 'very_good',
    size: 'l',
    color: 'red',
    material: 'polyester technique',
    gender: 'homme'
  },
  {
    id: '520',
    name: 'Sweatshirts homme',
    price: 27,
    originalPrice: 38,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Sweatshirts homme élégant et intemporel. Bon état. Fabriqué en jersey lourd de haute qualité.',
    condition: 'good',
    size: 'xl',
    color: 'orange',
    material: 'jersey lourd',
    gender: 'homme'
  },
  {
    id: '521',
    name: 'Survêtements homme',
    price: 29,
    originalPrice: 36,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Survêtements homme élégant et intemporel. Très bon état. Fabriqué en coton molletonné de haute qualité.',
    condition: 'very_good',
    size: 'xl',
    color: 'white',
    material: 'coton molletonné',
    gender: 'homme'
  },
  {
    id: '522',
    name: 'T-shirts homme',
    price: 111,
    originalPrice: 159,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe T-shirts homme en coton. Excellent état. Coupe ajustée et confortable.',
    condition: 'excellent',
    size: 'l',
    color: 'yellow',
    material: 'coton',
    gender: 'homme'
  },
  {
    id: '523',
    name: 'Pullovers femme',
    price: 192,
    originalPrice: 274,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Magnifique Pullovers femme de la collection Lacoste. Excellent état. Matière premium en cachemire.',
    condition: 'excellent',
    size: 'l',
    color: 'yellow',
    material: 'cachemire',
    gender: 'femme'
  },
  {
    id: '524',
    name: 'Pantalons & Shorts femme',
    price: 91,
    originalPrice: 130,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Pantalons & Shorts femme authentique Lacoste. État neuf. coton sergé durable et confortable.',
    condition: 'new',
    size: 'xxl_and_more',
    color: 'grey',
    material: 'coton sergé',
    gender: 'femme'
  },
  {
    id: '525',
    name: 'Polos homme',
    price: 195,
    originalPrice: 279,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique Polos homme de la collection Lacoste. État neuf. Matière premium en jersey de coton.',
    condition: 'new',
    size: 'xl',
    color: 'white',
    material: 'jersey de coton',
    gender: 'homme'
  },
  {
    id: '526',
    name: 'Survêtements homme',
    price: 174,
    originalPrice: 248,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Survêtements homme en coton molletonné. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'xs',
    color: 'grey',
    material: 'coton molletonné',
    gender: 'homme'
  },
  {
    id: '527',
    name: 'Pantalons & Shorts homme',
    price: 106,
    originalPrice: 133,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Pantalons & Shorts homme en coton sergé. Très bon état. Coupe ajustée et confortable.',
    condition: 'very_good',
    size: 'xxl_and_more',
    color: 'white',
    material: 'coton sergé',
    gender: 'homme'
  },
  {
    id: '528',
    name: 'Pullovers femme',
    price: 172,
    originalPrice: 245,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Pullovers femme élégant et intemporel. Bon état. Fabriqué en laine mérinos de haute qualité.',
    condition: 'good',
    size: 'l',
    color: 'brown',
    material: 'laine mérinos',
    gender: 'femme'
  },
  {
    id: '529',
    name: 'T-shirts homme',
    price: 125,
    originalPrice: 179,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'T-shirts homme élégant et intemporel. Bon état. Fabriqué en jersey fin de haute qualité.',
    condition: 'good',
    size: 'xl',
    color: 'grey',
    material: 'jersey fin',
    gender: 'homme'
  },
  {
    id: '530',
    name: 'Maroquinerie homme',
    price: 102,
    originalPrice: 127,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Maroquinerie homme élégant et intemporel. Très bon état. Fabriqué en cuir de haute qualité.',
    condition: 'very_good',
    size: 'xl',
    color: 'blue',
    material: 'cuir',
    gender: 'homme'
  },
  {
    id: '531',
    name: 'Robes & Jupes femme',
    price: 167,
    originalPrice: 239,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Magnifique Robes & Jupes femme de la collection Lacoste. État neuf. Matière premium en crêpe.',
    condition: 'new',
    size: 'xxl_and_more',
    color: 'grey',
    material: 'crêpe',
    gender: 'femme'
  },
  {
    id: '532',
    name: 'Pantalons & Shorts homme',
    price: 195,
    originalPrice: 279,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Pantalons & Shorts homme élégant et intemporel. Excellent état. Fabriqué en toile de coton de haute qualité.',
    condition: 'excellent',
    size: 'xs',
    color: 'blue',
    material: 'toile de coton',
    gender: 'homme'
  },
  {
    id: '533',
    name: 'Pantalons & Shorts femme',
    price: 88,
    originalPrice: 126,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Pantalons & Shorts femme en gabardine. Excellent état. Coupe ajustée et confortable.',
    condition: 'excellent',
    size: 'm',
    color: 'green',
    material: 'gabardine',
    gender: 'femme'
  },
  {
    id: '534',
    name: 'Polos femme',
    price: 22,
    originalPrice: 31,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Polos femme en coton piqué. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'xxl_and_more',
    color: 'purple',
    material: 'coton piqué',
    gender: 'femme'
  },
  {
    id: '535',
    name: 'Chemises femme',
    price: 159,
    originalPrice: 227,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Chemises femme élégant et intemporel. État neuf. Fabriqué en popeline de haute qualité.',
    condition: 'new',
    size: 'l',
    color: 'purple',
    material: 'popeline',
    gender: 'femme'
  },
  {
    id: '536',
    name: 'Maroquinerie homme',
    price: 100,
    originalPrice: 143,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Maroquinerie homme authentique Lacoste. Bon état. cuir durable et confortable.',
    condition: 'good',
    size: 's',
    color: 'white',
    material: 'cuir',
    gender: 'homme'
  },
  {
    id: '537',
    name: 'Pantalons & Shorts femme',
    price: 130,
    originalPrice: 186,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Magnifique Pantalons & Shorts femme de la collection Lacoste. État neuf. Matière premium en toile de coton.',
    condition: 'new',
    size: 'xl',
    color: 'beige',
    material: 'toile de coton',
    gender: 'femme'
  },
  {
    id: '538',
    name: 'Survêtements femme',
    price: 211,
    originalPrice: 264,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Survêtements femme élégant et intemporel. Très bon état. Fabriqué en coton molletonné de haute qualité.',
    condition: 'very_good',
    size: 'xs',
    color: 'brown',
    material: 'coton molletonné',
    gender: 'femme'
  },
  {
    id: '539',
    name: 'Chemises femme',
    price: 166,
    originalPrice: 208,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Chemises femme élégant et intemporel. Très bon état. Fabriqué en oxford de haute qualité.',
    condition: 'very_good',
    size: 'xs',
    color: 'green',
    material: 'oxford',
    gender: 'femme'
  },
  {
    id: '540',
    name: 'Maroquinerie femme',
    price: 164,
    originalPrice: 205,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Maroquinerie femme authentique Lacoste. Très bon état. toile enduite durable et confortable.',
    condition: 'very_good',
    size: 's',
    color: 'white',
    material: 'toile enduite',
    gender: 'femme'
  },
  {
    id: '541',
    name: 'Pantalons & Shorts femme',
    price: 186,
    originalPrice: 265,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Pantalons & Shorts femme authentique Lacoste. État neuf. coton sergé durable et confortable.',
    condition: 'new',
    size: 'xs',
    color: 'red',
    material: 'coton sergé',
    gender: 'femme'
  },
  {
    id: '542',
    name: 'Manteaux & Vestes homme',
    price: 92,
    originalPrice: 131,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique Manteaux & Vestes homme de la collection Lacoste. Bon état. Matière premium en laine.',
    condition: 'good',
    size: 'xs',
    color: 'green',
    material: 'laine',
    gender: 'homme'
  },
  {
    id: '543',
    name: 'Survêtements femme',
    price: 88,
    originalPrice: 125,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Magnifique Survêtements femme de la collection Lacoste. État neuf. Matière premium en polyester technique.',
    condition: 'new',
    size: 'xxl_and_more',
    color: 'white',
    material: 'polyester technique',
    gender: 'femme'
  },
  {
    id: '544',
    name: 'Pullovers homme',
    price: 77,
    originalPrice: 110,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Pullovers homme authentique Lacoste. Bon état. laine mérinos durable et confortable.',
    condition: 'good',
    size: 's',
    color: 'beige',
    material: 'laine mérinos',
    gender: 'homme'
  },
  {
    id: '545',
    name: 'Maroquinerie femme',
    price: 50,
    originalPrice: 71,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique Maroquinerie femme de la collection Lacoste. État neuf. Matière premium en cuir.',
    condition: 'new',
    size: 'xxl_and_more',
    color: 'pink',
    material: 'cuir',
    gender: 'femme'
  },
  {
    id: '546',
    name: 'Pullovers femme',
    price: 155,
    originalPrice: 222,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Magnifique Pullovers femme de la collection Lacoste. Excellent état. Matière premium en coton tricoté.',
    condition: 'excellent',
    size: 'xxl_and_more',
    color: 'purple',
    material: 'coton tricoté',
    gender: 'femme'
  },
  {
    id: '547',
    name: 'Robes & Jupes femme',
    price: 158,
    originalPrice: 225,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Robes & Jupes femme authentique Lacoste. Excellent état. crêpe durable et confortable.',
    condition: 'excellent',
    size: 's',
    color: 'white',
    material: 'crêpe',
    gender: 'femme'
  },
  {
    id: '548',
    name: 'Robes & Jupes femme',
    price: 131,
    originalPrice: 187,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Robes & Jupes femme élégant et intemporel. Excellent état. Fabriqué en crêpe de haute qualité.',
    condition: 'excellent',
    size: 'xl',
    color: 'blue',
    material: 'crêpe',
    gender: 'femme'
  },
  {
    id: '549',
    name: 'Sweatshirts homme',
    price: 174,
    originalPrice: 217,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Sweatshirts homme élégant et intemporel. Très bon état. Fabriqué en coton brossé de haute qualité.',
    condition: 'very_good',
    size: 'xxl_and_more',
    color: 'beige',
    material: 'coton brossé',
    gender: 'homme'
  },
  {
    id: '550',
    name: 'Polos femme',
    price: 230,
    originalPrice: 287,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Polos femme élégant et intemporel. Très bon état. Fabriqué en coton piqué de haute qualité.',
    condition: 'very_good',
    size: 'm',
    color: 'brown',
    material: 'coton piqué',
    gender: 'femme'
  },
  {
    id: '551',
    name: 'Survêtements femme',
    price: 92,
    originalPrice: 131,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Magnifique Survêtements femme de la collection Lacoste. État neuf. Matière premium en matière stretch.',
    condition: 'new',
    size: 's',
    color: 'black',
    material: 'matière stretch',
    gender: 'femme'
  },
  {
    id: '552',
    name: 'Manteaux & Vestes homme',
    price: 56,
    originalPrice: 80,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Manteaux & Vestes homme en polyester recyclé. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 'l',
    color: 'purple',
    material: 'polyester recyclé',
    gender: 'homme'
  },
  {
    id: '553',
    name: 'T-shirts homme',
    price: 208,
    originalPrice: 297,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'T-shirts homme élégant et intemporel. État neuf. Fabriqué en coton organique de haute qualité.',
    condition: 'new',
    size: 'l',
    color: 'red',
    material: 'coton organique',
    gender: 'homme'
  },
  {
    id: '554',
    name: 'Pullovers homme',
    price: 111,
    originalPrice: 158,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Pullovers homme en cachemire. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 'xs',
    color: 'beige',
    material: 'cachemire',
    gender: 'homme'
  },
  {
    id: '555',
    name: 'Chemises homme',
    price: 234,
    originalPrice: 292,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Chemises homme authentique Lacoste. Très bon état. popeline durable et confortable.',
    condition: 'very_good',
    size: 's',
    color: 'brown',
    material: 'popeline',
    gender: 'homme'
  },
  {
    id: '556',
    name: 'Chemises femme',
    price: 141,
    originalPrice: 201,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Chemises femme en popeline. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'xl',
    color: 'red',
    material: 'popeline',
    gender: 'femme'
  },
  {
    id: '557',
    name: 'Survêtements homme',
    price: 137,
    originalPrice: 195,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Survêtements homme en matière stretch. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 'xl',
    color: 'green',
    material: 'matière stretch',
    gender: 'homme'
  },
  {
    id: '558',
    name: 'Chemises homme',
    price: 50,
    originalPrice: 72,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Chemises homme en oxford. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 's',
    color: 'grey',
    material: 'oxford',
    gender: 'homme'
  },
  {
    id: '559',
    name: 'Pantalons & Shorts homme',
    price: 147,
    originalPrice: 184,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Pantalons & Shorts homme authentique Lacoste. Très bon état. toile de coton durable et confortable.',
    condition: 'very_good',
    size: 'xl',
    color: 'brown',
    material: 'toile de coton',
    gender: 'homme'
  },
  {
    id: '560',
    name: 'T-shirts homme',
    price: 164,
    originalPrice: 234,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe T-shirts homme en coton. Excellent état. Coupe ajustée et confortable.',
    condition: 'excellent',
    size: 's',
    color: 'grey',
    material: 'coton',
    gender: 'homme'
  },
  {
    id: '561',
    name: 'Robes & Jupes femme',
    price: 22,
    originalPrice: 32,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Robes & Jupes femme authentique Lacoste. Excellent état. crêpe durable et confortable.',
    condition: 'excellent',
    size: 'xs',
    color: 'white',
    material: 'crêpe',
    gender: 'femme'
  },
  {
    id: '562',
    name: 'Survêtements femme',
    price: 202,
    originalPrice: 288,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Survêtements femme élégant et intemporel. Bon état. Fabriqué en matière stretch de haute qualité.',
    condition: 'good',
    size: 'xl',
    color: 'grey',
    material: 'matière stretch',
    gender: 'femme'
  },
  {
    id: '563',
    name: 'Chemises homme',
    price: 133,
    originalPrice: 166,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Chemises homme en oxford. Très bon état. Coupe ajustée et confortable.',
    condition: 'very_good',
    size: 'xs',
    color: 'grey',
    material: 'oxford',
    gender: 'homme'
  },
  {
    id: '564',
    name: 'Survêtements homme',
    price: 71,
    originalPrice: 102,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Survêtements homme élégant et intemporel. Excellent état. Fabriqué en matière stretch de haute qualité.',
    condition: 'excellent',
    size: 'm',
    color: 'beige',
    material: 'matière stretch',
    gender: 'homme'
  },
  {
    id: '565',
    name: 'Manteaux & Vestes femme',
    price: 179,
    originalPrice: 255,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Manteaux & Vestes femme élégant et intemporel. État neuf. Fabriqué en polyester recyclé de haute qualité.',
    condition: 'new',
    size: 'm',
    color: 'green',
    material: 'polyester recyclé',
    gender: 'femme'
  },
  {
    id: '566',
    name: 'Polos homme',
    price: 177,
    originalPrice: 253,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique Polos homme de la collection Lacoste. État neuf. Matière premium en jersey de coton.',
    condition: 'new',
    size: 'xl',
    color: 'white',
    material: 'jersey de coton',
    gender: 'homme'
  },
  {
    id: '567',
    name: 'Manteaux & Vestes homme',
    price: 190,
    originalPrice: 272,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Manteaux & Vestes homme authentique Lacoste. Excellent état. polyester recyclé durable et confortable.',
    condition: 'excellent',
    size: 's',
    color: 'yellow',
    material: 'polyester recyclé',
    gender: 'homme'
  },
  {
    id: '568',
    name: 'Chemises homme',
    price: 37,
    originalPrice: 53,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Chemises homme en oxford. Excellent état. Coupe ajustée et confortable.',
    condition: 'excellent',
    size: 's',
    color: 'brown',
    material: 'oxford',
    gender: 'homme'
  },
  {
    id: '569',
    name: 'Pantalons & Shorts homme',
    price: 46,
    originalPrice: 66,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Magnifique Pantalons & Shorts homme de la collection Lacoste. Bon état. Matière premium en toile de coton.',
    condition: 'good',
    size: 'xxl_and_more',
    color: 'white',
    material: 'toile de coton',
    gender: 'homme'
  },
  {
    id: '570',
    name: 'Sweatshirts femme',
    price: 188,
    originalPrice: 268,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Sweatshirts femme en jersey lourd. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'l',
    color: 'brown',
    material: 'jersey lourd',
    gender: 'femme'
  },
  {
    id: '571',
    name: 'Pantalons & Shorts homme',
    price: 158,
    originalPrice: 226,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Pantalons & Shorts homme en toile de coton. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'xl',
    color: 'green',
    material: 'toile de coton',
    gender: 'homme'
  },
  {
    id: '572',
    name: 'Robes & Jupes femme',
    price: 162,
    originalPrice: 232,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Robes & Jupes femme authentique Lacoste. Bon état. coton stretch durable et confortable.',
    condition: 'good',
    size: 'm',
    color: 'orange',
    material: 'coton stretch',
    gender: 'femme'
  },
  {
    id: '573',
    name: 'Chemises femme',
    price: 162,
    originalPrice: 232,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Chemises femme en lin. Excellent état. Coupe ajustée et confortable.',
    condition: 'excellent',
    size: 'xs',
    color: 'orange',
    material: 'lin',
    gender: 'femme'
  },
  {
    id: '574',
    name: 'Pullovers femme',
    price: 169,
    originalPrice: 242,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Pullovers femme en coton tricoté. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'xs',
    color: 'beige',
    material: 'coton tricoté',
    gender: 'femme'
  },
  {
    id: '575',
    name: 'Tops & Chemises femme',
    price: 87,
    originalPrice: 124,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Tops & Chemises femme élégant et intemporel. État neuf. Fabriqué en viscose de haute qualité.',
    condition: 'new',
    size: 'xs',
    color: 'pink',
    material: 'viscose',
    gender: 'femme'
  },
  {
    id: '576',
    name: 'T-shirts homme',
    price: 204,
    originalPrice: 291,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'T-shirts homme authentique Lacoste. Bon état. jersey fin durable et confortable.',
    condition: 'good',
    size: 's',
    color: 'beige',
    material: 'jersey fin',
    gender: 'homme'
  },
  {
    id: '577',
    name: 'Chemises femme',
    price: 132,
    originalPrice: 188,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Magnifique Chemises femme de la collection Lacoste. État neuf. Matière premium en popeline.',
    condition: 'new',
    size: 'xl',
    color: 'green',
    material: 'popeline',
    gender: 'femme'
  },
  {
    id: '578',
    name: 'Manteaux & Vestes homme',
    price: 125,
    originalPrice: 179,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Manteaux & Vestes homme authentique Lacoste. État neuf. laine durable et confortable.',
    condition: 'new',
    size: 'xl',
    color: 'brown',
    material: 'laine',
    gender: 'homme'
  },
  {
    id: '579',
    name: 'Polos homme',
    price: 106,
    originalPrice: 132,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Polos homme en jersey de coton. Très bon état. Coupe ajustée et confortable.',
    condition: 'very_good',
    size: 'xl',
    color: 'brown',
    material: 'jersey de coton',
    gender: 'homme'
  },
  {
    id: '580',
    name: 'Tops & Chemises femme',
    price: 33,
    originalPrice: 47,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Tops & Chemises femme en viscose. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'm',
    color: 'red',
    material: 'viscose',
    gender: 'femme'
  },
  {
    id: '581',
    name: 'Chemises femme',
    price: 126,
    originalPrice: 157,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Chemises femme élégant et intemporel. Très bon état. Fabriqué en lin de haute qualité.',
    condition: 'very_good',
    size: 'm',
    color: 'blue',
    material: 'lin',
    gender: 'femme'
  },
  {
    id: '582',
    name: 'Polos homme',
    price: 178,
    originalPrice: 223,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Polos homme authentique Lacoste. Très bon état. coton bio durable et confortable.',
    condition: 'very_good',
    size: 'l',
    color: 'grey',
    material: 'coton bio',
    gender: 'homme'
  },
  {
    id: '583',
    name: 'Chemises femme',
    price: 82,
    originalPrice: 117,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Chemises femme authentique Lacoste. Bon état. oxford durable et confortable.',
    condition: 'good',
    size: 'm',
    color: 'pink',
    material: 'oxford',
    gender: 'femme'
  },
  {
    id: '584',
    name: 'Pantalons & Shorts homme',
    price: 202,
    originalPrice: 288,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Pantalons & Shorts homme en gabardine. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'xl',
    color: 'green',
    material: 'gabardine',
    gender: 'homme'
  },
  {
    id: '585',
    name: 'Pullovers femme',
    price: 188,
    originalPrice: 269,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Magnifique Pullovers femme de la collection Lacoste. État neuf. Matière premium en laine mérinos.',
    condition: 'new',
    size: 'xl',
    color: 'grey',
    material: 'laine mérinos',
    gender: 'femme'
  },
  {
    id: '586',
    name: 'Polos homme',
    price: 167,
    originalPrice: 238,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Polos homme élégant et intemporel. Bon état. Fabriqué en jersey de coton de haute qualité.',
    condition: 'good',
    size: 's',
    color: 'pink',
    material: 'jersey de coton',
    gender: 'homme'
  },
  {
    id: '587',
    name: 'Manteaux & Vestes femme',
    price: 25,
    originalPrice: 35,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique Manteaux & Vestes femme de la collection Lacoste. État neuf. Matière premium en laine.',
    condition: 'new',
    size: 'xxl_and_more',
    color: 'beige',
    material: 'laine',
    gender: 'femme'
  },
  {
    id: '588',
    name: 'Polos femme',
    price: 184,
    originalPrice: 230,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Polos femme authentique Lacoste. Très bon état. coton bio durable et confortable.',
    condition: 'very_good',
    size: 'xl',
    color: 'black',
    material: 'coton bio',
    gender: 'femme'
  },
  {
    id: '589',
    name: 'Maroquinerie femme',
    price: 178,
    originalPrice: 254,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Magnifique Maroquinerie femme de la collection Lacoste. État neuf. Matière premium en nylon.',
    condition: 'new',
    size: 'm',
    color: 'pink',
    material: 'nylon',
    gender: 'femme'
  },
  {
    id: '590',
    name: 'Survêtements femme',
    price: 27,
    originalPrice: 38,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Survêtements femme élégant et intemporel. Bon état. Fabriqué en matière stretch de haute qualité.',
    condition: 'good',
    size: 'l',
    color: 'green',
    material: 'matière stretch',
    gender: 'femme'
  },
  {
    id: '591',
    name: 'Maroquinerie homme',
    price: 32,
    originalPrice: 46,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Maroquinerie homme élégant et intemporel. Excellent état. Fabriqué en toile enduite de haute qualité.',
    condition: 'excellent',
    size: 'xxl_and_more',
    color: 'orange',
    material: 'toile enduite',
    gender: 'homme'
  },
  {
    id: '592',
    name: 'Manteaux & Vestes femme',
    price: 148,
    originalPrice: 212,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Manteaux & Vestes femme authentique Lacoste. Excellent état. laine durable et confortable.',
    condition: 'excellent',
    size: 'm',
    color: 'green',
    material: 'laine',
    gender: 'femme'
  },
  {
    id: '593',
    name: 'Sweatshirts femme',
    price: 83,
    originalPrice: 118,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Sweatshirts femme authentique Lacoste. État neuf. molleton durable et confortable.',
    condition: 'new',
    size: 'xxl_and_more',
    color: 'yellow',
    material: 'molleton',
    gender: 'femme'
  },
  {
    id: '594',
    name: 'Pantalons & Shorts homme',
    price: 130,
    originalPrice: 185,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Pantalons & Shorts homme en toile de coton. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 's',
    color: 'grey',
    material: 'toile de coton',
    gender: 'homme'
  },
  {
    id: '595',
    name: 'Polos femme',
    price: 37,
    originalPrice: 53,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Polos femme en jersey de coton. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 'm',
    color: 'pink',
    material: 'jersey de coton',
    gender: 'femme'
  },
  {
    id: '596',
    name: 'Pullovers homme',
    price: 154,
    originalPrice: 220,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Pullovers homme en laine mérinos. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 's',
    color: 'purple',
    material: 'laine mérinos',
    gender: 'homme'
  },
  {
    id: '597',
    name: 'Polos homme',
    price: 78,
    originalPrice: 97,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Polos homme élégant et intemporel. Très bon état. Fabriqué en coton piqué de haute qualité.',
    condition: 'very_good',
    size: 'm',
    color: 'brown',
    material: 'coton piqué',
    gender: 'homme'
  },
  {
    id: '598',
    name: 'Pullovers femme',
    price: 92,
    originalPrice: 131,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Pullovers femme authentique Lacoste. Bon état. coton tricoté durable et confortable.',
    condition: 'good',
    size: 'xxl_and_more',
    color: 'black',
    material: 'coton tricoté',
    gender: 'femme'
  },
  {
    id: '599',
    name: 'Maroquinerie homme',
    price: 204,
    originalPrice: 255,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Maroquinerie homme en nylon. Très bon état. Coupe ajustée et confortable.',
    condition: 'very_good',
    size: 's',
    color: 'white',
    material: 'nylon',
    gender: 'homme'
  },
  {
    id: '600',
    name: 'Pullovers femme',
    price: 183,
    originalPrice: 262,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Pullovers femme élégant et intemporel. État neuf. Fabriqué en laine mérinos de haute qualité.',
    condition: 'new',
    size: 's',
    color: 'pink',
    material: 'laine mérinos',
    gender: 'femme'
  },
  {
    id: '601',
    name: 'Chemises femme',
    price: 212,
    originalPrice: 265,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Chemises femme en oxford. Très bon état. Coupe ajustée et confortable.',
    condition: 'very_good',
    size: 'xl',
    color: 'red',
    material: 'oxford',
    gender: 'femme'
  },
  {
    id: '602',
    name: 'Pullovers homme',
    price: 43,
    originalPrice: 54,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Pullovers homme élégant et intemporel. Très bon état. Fabriqué en laine mérinos de haute qualité.',
    condition: 'very_good',
    size: 'l',
    color: 'green',
    material: 'laine mérinos',
    gender: 'homme'
  },
  {
    id: '603',
    name: 'Polos homme',
    price: 144,
    originalPrice: 206,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Polos homme authentique Lacoste. Bon état. jersey de coton durable et confortable.',
    condition: 'good',
    size: 'xxl_and_more',
    color: 'green',
    material: 'jersey de coton',
    gender: 'homme'
  },
  {
    id: '604',
    name: 'Chemises homme',
    price: 151,
    originalPrice: 215,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Chemises homme élégant et intemporel. Bon état. Fabriqué en lin de haute qualité.',
    condition: 'good',
    size: 'xxl_and_more',
    color: 'red',
    material: 'lin',
    gender: 'homme'
  },
  {
    id: '605',
    name: 'Sweatshirts homme',
    price: 102,
    originalPrice: 127,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Sweatshirts homme en coton brossé. Très bon état. Coupe ajustée et confortable.',
    condition: 'very_good',
    size: 'm',
    color: 'brown',
    material: 'coton brossé',
    gender: 'homme'
  },
  {
    id: '606',
    name: 'Polos femme',
    price: 90,
    originalPrice: 129,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Polos femme élégant et intemporel. Bon état. Fabriqué en jersey de coton de haute qualité.',
    condition: 'good',
    size: 'l',
    color: 'blue',
    material: 'jersey de coton',
    gender: 'femme'
  },
  {
    id: '607',
    name: 'Pullovers femme',
    price: 130,
    originalPrice: 162,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Pullovers femme élégant et intemporel. Très bon état. Fabriqué en cachemire de haute qualité.',
    condition: 'very_good',
    size: 'xs',
    color: 'orange',
    material: 'cachemire',
    gender: 'femme'
  },
  {
    id: '608',
    name: 'Survêtements homme',
    price: 91,
    originalPrice: 130,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Survêtements homme élégant et intemporel. Bon état. Fabriqué en matière stretch de haute qualité.',
    condition: 'good',
    size: 'm',
    color: 'black',
    material: 'matière stretch',
    gender: 'homme'
  },
  {
    id: '609',
    name: 'Pullovers femme',
    price: 210,
    originalPrice: 262,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Pullovers femme authentique Lacoste. Très bon état. coton tricoté durable et confortable.',
    condition: 'very_good',
    size: 'xl',
    color: 'purple',
    material: 'coton tricoté',
    gender: 'femme'
  },
  {
    id: '610',
    name: 'Robes & Jupes femme',
    price: 233,
    originalPrice: 291,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Magnifique Robes & Jupes femme de la collection Lacoste. Très bon état. Matière premium en jersey.',
    condition: 'very_good',
    size: 'xs',
    color: 'green',
    material: 'jersey',
    gender: 'femme'
  },
  {
    id: '611',
    name: 'T-shirts femme',
    price: 148,
    originalPrice: 212,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'T-shirts femme élégant et intemporel. Excellent état. Fabriqué en jersey fin de haute qualité.',
    condition: 'excellent',
    size: 'l',
    color: 'green',
    material: 'jersey fin',
    gender: 'femme'
  },
  {
    id: '612',
    name: 'Pullovers femme',
    price: 55,
    originalPrice: 78,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique Pullovers femme de la collection Lacoste. Bon état. Matière premium en laine mérinos.',
    condition: 'good',
    size: 'xxl_and_more',
    color: 'yellow',
    material: 'laine mérinos',
    gender: 'femme'
  },
  {
    id: '613',
    name: 'Polos homme',
    price: 80,
    originalPrice: 114,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Polos homme authentique Lacoste. Excellent état. jersey de coton durable et confortable.',
    condition: 'excellent',
    size: 'xs',
    color: 'orange',
    material: 'jersey de coton',
    gender: 'homme'
  },
  {
    id: '614',
    name: 'Pullovers homme',
    price: 206,
    originalPrice: 258,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Magnifique Pullovers homme de la collection Lacoste. Très bon état. Matière premium en coton tricoté.',
    condition: 'very_good',
    size: 'xs',
    color: 'white',
    material: 'coton tricoté',
    gender: 'homme'
  },
  {
    id: '615',
    name: 'Pantalons & Shorts homme',
    price: 54,
    originalPrice: 77,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Pantalons & Shorts homme en gabardine. Excellent état. Coupe ajustée et confortable.',
    condition: 'excellent',
    size: 'xxl_and_more',
    color: 'yellow',
    material: 'gabardine',
    gender: 'homme'
  },
  {
    id: '616',
    name: 'Polos homme',
    price: 98,
    originalPrice: 140,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Polos homme authentique Lacoste. Bon état. coton bio durable et confortable.',
    condition: 'good',
    size: 'xl',
    color: 'red',
    material: 'coton bio',
    gender: 'homme'
  },
  {
    id: '617',
    name: 'Sweatshirts homme',
    price: 41,
    originalPrice: 59,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Magnifique Sweatshirts homme de la collection Lacoste. Bon état. Matière premium en jersey lourd.',
    condition: 'good',
    size: 'xxl_and_more',
    color: 'brown',
    material: 'jersey lourd',
    gender: 'homme'
  },
  {
    id: '618',
    name: 'Manteaux & Vestes homme',
    price: 97,
    originalPrice: 139,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Manteaux & Vestes homme élégant et intemporel. Bon état. Fabriqué en polyester recyclé de haute qualité.',
    condition: 'good',
    size: 'm',
    color: 'orange',
    material: 'polyester recyclé',
    gender: 'homme'
  },
  {
    id: '619',
    name: 'Chemises homme',
    price: 208,
    originalPrice: 297,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Chemises homme en popeline. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'xl',
    color: 'blue',
    material: 'popeline',
    gender: 'homme'
  },
  {
    id: '620',
    name: 'Maroquinerie femme',
    price: 37,
    originalPrice: 53,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Maroquinerie femme élégant et intemporel. Bon état. Fabriqué en nylon de haute qualité.',
    condition: 'good',
    size: 's',
    color: 'beige',
    material: 'nylon',
    gender: 'femme'
  },
  {
    id: '621',
    name: 'T-shirts homme',
    price: 120,
    originalPrice: 150,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'T-shirts homme authentique Lacoste. Très bon état. coton durable et confortable.',
    condition: 'very_good',
    size: 'xs',
    color: 'green',
    material: 'coton',
    gender: 'homme'
  },
  {
    id: '622',
    name: 'Manteaux & Vestes homme',
    price: 79,
    originalPrice: 113,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Manteaux & Vestes homme en polyester recyclé. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'xxl_and_more',
    color: 'grey',
    material: 'polyester recyclé',
    gender: 'homme'
  },
  {
    id: '623',
    name: 'Polos femme',
    price: 118,
    originalPrice: 147,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Polos femme élégant et intemporel. Très bon état. Fabriqué en coton piqué de haute qualité.',
    condition: 'very_good',
    size: 'xxl_and_more',
    color: 'orange',
    material: 'coton piqué',
    gender: 'femme'
  },
  {
    id: '624',
    name: 'Pantalons & Shorts homme',
    price: 55,
    originalPrice: 69,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Pantalons & Shorts homme authentique Lacoste. Très bon état. gabardine durable et confortable.',
    condition: 'very_good',
    size: 'xxl_and_more',
    color: 'pink',
    material: 'gabardine',
    gender: 'homme'
  },
  {
    id: '625',
    name: 'Pullovers homme',
    price: 134,
    originalPrice: 167,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Pullovers homme authentique Lacoste. Très bon état. coton tricoté durable et confortable.',
    condition: 'very_good',
    size: 'l',
    color: 'white',
    material: 'coton tricoté',
    gender: 'homme'
  },
  {
    id: '626',
    name: 'Tops & Chemises femme',
    price: 152,
    originalPrice: 190,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Tops & Chemises femme authentique Lacoste. Très bon état. soie durable et confortable.',
    condition: 'very_good',
    size: 'm',
    color: 'black',
    material: 'soie',
    gender: 'femme'
  },
  {
    id: '627',
    name: 'Robes & Jupes femme',
    price: 136,
    originalPrice: 194,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Robes & Jupes femme authentique Lacoste. État neuf. crêpe durable et confortable.',
    condition: 'new',
    size: 'xl',
    color: 'blue',
    material: 'crêpe',
    gender: 'femme'
  },
  {
    id: '628',
    name: 'Pantalons & Shorts femme',
    price: 59,
    originalPrice: 74,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Pantalons & Shorts femme élégant et intemporel. Très bon état. Fabriqué en toile de coton de haute qualité.',
    condition: 'very_good',
    size: 'xs',
    color: 'grey',
    material: 'toile de coton',
    gender: 'femme'
  },
  {
    id: '629',
    name: 'Chemises homme',
    price: 43,
    originalPrice: 61,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Chemises homme élégant et intemporel. État neuf. Fabriqué en popeline de haute qualité.',
    condition: 'new',
    size: 'xxl_and_more',
    color: 'red',
    material: 'popeline',
    gender: 'homme'
  },
  {
    id: '630',
    name: 'Maroquinerie homme',
    price: 90,
    originalPrice: 129,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Maroquinerie homme en nylon. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 's',
    color: 'blue',
    material: 'nylon',
    gender: 'homme'
  },
  {
    id: '631',
    name: 'Robes & Jupes femme',
    price: 196,
    originalPrice: 280,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Robes & Jupes femme en jersey. Excellent état. Coupe ajustée et confortable.',
    condition: 'excellent',
    size: 'l',
    color: 'green',
    material: 'jersey',
    gender: 'femme'
  },
  {
    id: '632',
    name: 'Tops & Chemises femme',
    price: 153,
    originalPrice: 219,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Tops & Chemises femme élégant et intemporel. État neuf. Fabriqué en viscose de haute qualité.',
    condition: 'new',
    size: 'm',
    color: 'red',
    material: 'viscose',
    gender: 'femme'
  },
  {
    id: '633',
    name: 'Manteaux & Vestes homme',
    price: 29,
    originalPrice: 42,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Manteaux & Vestes homme authentique Lacoste. Excellent état. laine durable et confortable.',
    condition: 'excellent',
    size: 'xxl_and_more',
    color: 'white',
    material: 'laine',
    gender: 'homme'
  },
  {
    id: '634',
    name: 'Sweatshirts homme',
    price: 35,
    originalPrice: 44,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Sweatshirts homme en coton brossé. Très bon état. Coupe ajustée et confortable.',
    condition: 'very_good',
    size: 'xl',
    color: 'pink',
    material: 'coton brossé',
    gender: 'homme'
  },
  {
    id: '635',
    name: 'Robes & Jupes femme',
    price: 160,
    originalPrice: 228,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Robes & Jupes femme authentique Lacoste. Excellent état. jersey durable et confortable.',
    condition: 'excellent',
    size: 'xs',
    color: 'red',
    material: 'jersey',
    gender: 'femme'
  },
  {
    id: '636',
    name: 'Chemises femme',
    price: 198,
    originalPrice: 248,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Chemises femme élégant et intemporel. Très bon état. Fabriqué en lin de haute qualité.',
    condition: 'very_good',
    size: 'xs',
    color: 'grey',
    material: 'lin',
    gender: 'femme'
  },
  {
    id: '637',
    name: 'T-shirts femme',
    price: 166,
    originalPrice: 237,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe T-shirts femme en jersey fin. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'm',
    color: 'grey',
    material: 'jersey fin',
    gender: 'femme'
  },
  {
    id: '638',
    name: 'Pullovers homme',
    price: 78,
    originalPrice: 111,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Magnifique Pullovers homme de la collection Lacoste. Excellent état. Matière premium en laine mérinos.',
    condition: 'excellent',
    size: 'xxl_and_more',
    color: 'blue',
    material: 'laine mérinos',
    gender: 'homme'
  },
  {
    id: '639',
    name: 'Sweatshirts homme',
    price: 207,
    originalPrice: 259,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Sweatshirts homme élégant et intemporel. Très bon état. Fabriqué en coton brossé de haute qualité.',
    condition: 'very_good',
    size: 's',
    color: 'grey',
    material: 'coton brossé',
    gender: 'homme'
  },
  {
    id: '640',
    name: 'Survêtements homme',
    price: 72,
    originalPrice: 90,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Survêtements homme en matière stretch. Très bon état. Coupe ajustée et confortable.',
    condition: 'very_good',
    size: 'xxl_and_more',
    color: 'blue',
    material: 'matière stretch',
    gender: 'homme'
  },
  {
    id: '641',
    name: 'Manteaux & Vestes femme',
    price: 95,
    originalPrice: 135,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Manteaux & Vestes femme authentique Lacoste. Excellent état. coton imperméable durable et confortable.',
    condition: 'excellent',
    size: 'l',
    color: 'black',
    material: 'coton imperméable',
    gender: 'femme'
  },
  {
    id: '642',
    name: 'T-shirts femme',
    price: 82,
    originalPrice: 103,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Magnifique T-shirts femme de la collection Lacoste. Très bon état. Matière premium en coton organique.',
    condition: 'very_good',
    size: 'xs',
    color: 'green',
    material: 'coton organique',
    gender: 'femme'
  },
  {
    id: '643',
    name: 'Survêtements homme',
    price: 181,
    originalPrice: 258,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Magnifique Survêtements homme de la collection Lacoste. Bon état. Matière premium en coton molletonné.',
    condition: 'good',
    size: 'xxl_and_more',
    color: 'grey',
    material: 'coton molletonné',
    gender: 'homme'
  },
  {
    id: '644',
    name: 'Sweatshirts homme',
    price: 127,
    originalPrice: 181,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Sweatshirts homme en coton brossé. Excellent état. Coupe ajustée et confortable.',
    condition: 'excellent',
    size: 'm',
    color: 'yellow',
    material: 'coton brossé',
    gender: 'homme'
  },
  {
    id: '645',
    name: 'Robes & Jupes femme',
    price: 131,
    originalPrice: 164,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Robes & Jupes femme en crêpe. Très bon état. Coupe ajustée et confortable.',
    condition: 'very_good',
    size: 'xl',
    color: 'brown',
    material: 'crêpe',
    gender: 'femme'
  },
  {
    id: '646',
    name: 'Tops & Chemises femme',
    price: 74,
    originalPrice: 106,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Magnifique Tops & Chemises femme de la collection Lacoste. Bon état. Matière premium en popeline de coton.',
    condition: 'good',
    size: 'xxl_and_more',
    color: 'red',
    material: 'popeline de coton',
    gender: 'femme'
  },
  {
    id: '647',
    name: 'Pullovers homme',
    price: 179,
    originalPrice: 255,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Magnifique Pullovers homme de la collection Lacoste. Excellent état. Matière premium en laine mérinos.',
    condition: 'excellent',
    size: 'xs',
    color: 'pink',
    material: 'laine mérinos',
    gender: 'homme'
  },
  {
    id: '648',
    name: 'Pullovers femme',
    price: 66,
    originalPrice: 83,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Pullovers femme en laine mérinos. Très bon état. Coupe ajustée et confortable.',
    condition: 'very_good',
    size: 'xl',
    color: 'brown',
    material: 'laine mérinos',
    gender: 'femme'
  },
  {
    id: '649',
    name: 'Sweatshirts femme',
    price: 148,
    originalPrice: 212,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Sweatshirts femme en coton brossé. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'l',
    color: 'beige',
    material: 'coton brossé',
    gender: 'femme'
  },
  {
    id: '650',
    name: 'Maroquinerie homme',
    price: 77,
    originalPrice: 110,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Maroquinerie homme authentique Lacoste. Bon état. toile enduite durable et confortable.',
    condition: 'good',
    size: 's',
    color: 'purple',
    material: 'toile enduite',
    gender: 'homme'
  },
  {
    id: '651',
    name: 'Pantalons & Shorts homme',
    price: 41,
    originalPrice: 51,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Pantalons & Shorts homme authentique Lacoste. Très bon état. coton sergé durable et confortable.',
    condition: 'very_good',
    size: 'm',
    color: 'yellow',
    material: 'coton sergé',
    gender: 'homme'
  },
  {
    id: '652',
    name: 'Survêtements homme',
    price: 83,
    originalPrice: 118,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Survêtements homme authentique Lacoste. État neuf. polyester technique durable et confortable.',
    condition: 'new',
    size: 'xl',
    color: 'white',
    material: 'polyester technique',
    gender: 'homme'
  },
  {
    id: '653',
    name: 'Pullovers femme',
    price: 190,
    originalPrice: 271,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Pullovers femme élégant et intemporel. Bon état. Fabriqué en coton tricoté de haute qualité.',
    condition: 'good',
    size: 'xxl_and_more',
    color: 'black',
    material: 'coton tricoté',
    gender: 'femme'
  },
  {
    id: '654',
    name: 'Chemises femme',
    price: 185,
    originalPrice: 264,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Chemises femme authentique Lacoste. État neuf. oxford durable et confortable.',
    condition: 'new',
    size: 'xs',
    color: 'grey',
    material: 'oxford',
    gender: 'femme'
  },
  {
    id: '655',
    name: 'Tops & Chemises femme',
    price: 179,
    originalPrice: 255,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Tops & Chemises femme en viscose. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 'xl',
    color: 'purple',
    material: 'viscose',
    gender: 'femme'
  },
  {
    id: '656',
    name: 'T-shirts femme',
    price: 155,
    originalPrice: 222,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Magnifique T-shirts femme de la collection Lacoste. Excellent état. Matière premium en coton organique.',
    condition: 'excellent',
    size: 'l',
    color: 'brown',
    material: 'coton organique',
    gender: 'femme'
  },
  {
    id: '657',
    name: 'Polos femme',
    price: 67,
    originalPrice: 95,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Polos femme élégant et intemporel. Excellent état. Fabriqué en coton piqué de haute qualité.',
    condition: 'excellent',
    size: 'l',
    color: 'purple',
    material: 'coton piqué',
    gender: 'femme'
  },
  {
    id: '658',
    name: 'Manteaux & Vestes homme',
    price: 131,
    originalPrice: 164,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Manteaux & Vestes homme en laine. Très bon état. Coupe ajustée et confortable.',
    condition: 'very_good',
    size: 'l',
    color: 'pink',
    material: 'laine',
    gender: 'homme'
  },
  {
    id: '659',
    name: 'Pullovers homme',
    price: 209,
    originalPrice: 298,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique Pullovers homme de la collection Lacoste. Bon état. Matière premium en laine mérinos.',
    condition: 'good',
    size: 'l',
    color: 'green',
    material: 'laine mérinos',
    gender: 'homme'
  },
  {
    id: '660',
    name: 'Tops & Chemises femme',
    price: 109,
    originalPrice: 156,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Tops & Chemises femme élégant et intemporel. État neuf. Fabriqué en viscose de haute qualité.',
    condition: 'new',
    size: 'xxl_and_more',
    color: 'purple',
    material: 'viscose',
    gender: 'femme'
  },
  {
    id: '661',
    name: 'Sweatshirts femme',
    price: 46,
    originalPrice: 66,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Sweatshirts femme en coton brossé. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'xxl_and_more',
    color: 'yellow',
    material: 'coton brossé',
    gender: 'femme'
  },
  {
    id: '662',
    name: 'Maroquinerie femme',
    price: 138,
    originalPrice: 173,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Maroquinerie femme authentique Lacoste. Très bon état. toile enduite durable et confortable.',
    condition: 'very_good',
    size: 'xl',
    color: 'yellow',
    material: 'toile enduite',
    gender: 'femme'
  },
  {
    id: '663',
    name: 'Sweatshirts homme',
    price: 179,
    originalPrice: 256,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Magnifique Sweatshirts homme de la collection Lacoste. État neuf. Matière premium en jersey lourd.',
    condition: 'new',
    size: 'l',
    color: 'pink',
    material: 'jersey lourd',
    gender: 'homme'
  },
  {
    id: '664',
    name: 'Pantalons & Shorts femme',
    price: 78,
    originalPrice: 98,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Pantalons & Shorts femme authentique Lacoste. Très bon état. gabardine durable et confortable.',
    condition: 'very_good',
    size: 'l',
    color: 'green',
    material: 'gabardine',
    gender: 'femme'
  },
  {
    id: '665',
    name: 'Chemises homme',
    price: 119,
    originalPrice: 170,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Chemises homme en lin. Excellent état. Coupe ajustée et confortable.',
    condition: 'excellent',
    size: 's',
    color: 'pink',
    material: 'lin',
    gender: 'homme'
  },
  {
    id: '666',
    name: 'Polos femme',
    price: 148,
    originalPrice: 212,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Polos femme en coton bio. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'xs',
    color: 'white',
    material: 'coton bio',
    gender: 'femme'
  },
  {
    id: '667',
    name: 'Robes & Jupes femme',
    price: 50,
    originalPrice: 72,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Robes & Jupes femme authentique Lacoste. Bon état. jersey durable et confortable.',
    condition: 'good',
    size: 'xxl_and_more',
    color: 'black',
    material: 'jersey',
    gender: 'femme'
  },
  {
    id: '668',
    name: 'Maroquinerie homme',
    price: 22,
    originalPrice: 32,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Maroquinerie homme en cuir. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 'xxl_and_more',
    color: 'red',
    material: 'cuir',
    gender: 'homme'
  },
  {
    id: '669',
    name: 'Polos femme',
    price: 114,
    originalPrice: 142,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Polos femme élégant et intemporel. Très bon état. Fabriqué en coton bio de haute qualité.',
    condition: 'very_good',
    size: 'l',
    color: 'black',
    material: 'coton bio',
    gender: 'femme'
  },
  {
    id: '670',
    name: 'Chemises homme',
    price: 199,
    originalPrice: 249,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Chemises homme authentique Lacoste. Très bon état. oxford durable et confortable.',
    condition: 'very_good',
    size: 's',
    color: 'red',
    material: 'oxford',
    gender: 'homme'
  },
  {
    id: '671',
    name: 'Pantalons & Shorts femme',
    price: 102,
    originalPrice: 146,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Pantalons & Shorts femme authentique Lacoste. État neuf. toile de coton durable et confortable.',
    condition: 'new',
    size: 'xs',
    color: 'yellow',
    material: 'toile de coton',
    gender: 'femme'
  },
  {
    id: '672',
    name: 'Maroquinerie homme',
    price: 198,
    originalPrice: 283,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique Maroquinerie homme de la collection Lacoste. Bon état. Matière premium en toile enduite.',
    condition: 'good',
    size: 'xl',
    color: 'red',
    material: 'toile enduite',
    gender: 'homme'
  },
  {
    id: '673',
    name: 'Tops & Chemises femme',
    price: 85,
    originalPrice: 121,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Tops & Chemises femme authentique Lacoste. Bon état. popeline de coton durable et confortable.',
    condition: 'good',
    size: 's',
    color: 'beige',
    material: 'popeline de coton',
    gender: 'femme'
  },
  {
    id: '674',
    name: 'Maroquinerie femme',
    price: 238,
    originalPrice: 297,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Magnifique Maroquinerie femme de la collection Lacoste. Très bon état. Matière premium en nylon.',
    condition: 'very_good',
    size: 'xs',
    color: 'white',
    material: 'nylon',
    gender: 'femme'
  },
  {
    id: '675',
    name: 'Pantalons & Shorts femme',
    price: 39,
    originalPrice: 55,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Pantalons & Shorts femme en coton sergé. Excellent état. Coupe ajustée et confortable.',
    condition: 'excellent',
    size: 's',
    color: 'grey',
    material: 'coton sergé',
    gender: 'femme'
  },
  {
    id: '676',
    name: 'Pantalons & Shorts homme',
    price: 69,
    originalPrice: 98,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Pantalons & Shorts homme authentique Lacoste. État neuf. toile de coton durable et confortable.',
    condition: 'new',
    size: 'l',
    color: 'grey',
    material: 'toile de coton',
    gender: 'homme'
  },
  {
    id: '677',
    name: 'Pantalons & Shorts homme',
    price: 126,
    originalPrice: 180,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Pantalons & Shorts homme élégant et intemporel. Bon état. Fabriqué en coton sergé de haute qualité.',
    condition: 'good',
    size: 'l',
    color: 'orange',
    material: 'coton sergé',
    gender: 'homme'
  },
  {
    id: '678',
    name: 'Tops & Chemises femme',
    price: 156,
    originalPrice: 223,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique Tops & Chemises femme de la collection Lacoste. État neuf. Matière premium en viscose.',
    condition: 'new',
    size: 'xxl_and_more',
    color: 'pink',
    material: 'viscose',
    gender: 'femme'
  },
  {
    id: '679',
    name: 'Polos femme',
    price: 83,
    originalPrice: 119,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Polos femme élégant et intemporel. Bon état. Fabriqué en coton bio de haute qualité.',
    condition: 'good',
    size: 'l',
    color: 'white',
    material: 'coton bio',
    gender: 'femme'
  },
  {
    id: '680',
    name: 'Pantalons & Shorts femme',
    price: 41,
    originalPrice: 59,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Pantalons & Shorts femme en toile de coton. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 's',
    color: 'red',
    material: 'toile de coton',
    gender: 'femme'
  },
  {
    id: '681',
    name: 'T-shirts homme',
    price: 119,
    originalPrice: 149,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe T-shirts homme en coton organique. Très bon état. Coupe ajustée et confortable.',
    condition: 'very_good',
    size: 'xxl_and_more',
    color: 'green',
    material: 'coton organique',
    gender: 'homme'
  },
  {
    id: '682',
    name: 'Sweatshirts femme',
    price: 117,
    originalPrice: 167,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Sweatshirts femme élégant et intemporel. Bon état. Fabriqué en jersey lourd de haute qualité.',
    condition: 'good',
    size: 'l',
    color: 'beige',
    material: 'jersey lourd',
    gender: 'femme'
  },
  {
    id: '683',
    name: 'Maroquinerie homme',
    price: 38,
    originalPrice: 54,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Magnifique Maroquinerie homme de la collection Lacoste. État neuf. Matière premium en nylon.',
    condition: 'new',
    size: 'xxl_and_more',
    color: 'pink',
    material: 'nylon',
    gender: 'homme'
  },
  {
    id: '684',
    name: 'Pantalons & Shorts homme',
    price: 130,
    originalPrice: 163,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Pantalons & Shorts homme élégant et intemporel. Très bon état. Fabriqué en gabardine de haute qualité.',
    condition: 'very_good',
    size: 'xxl_and_more',
    color: 'blue',
    material: 'gabardine',
    gender: 'homme'
  },
  {
    id: '685',
    name: 'T-shirts femme',
    price: 209,
    originalPrice: 298,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'T-shirts femme élégant et intemporel. Bon état. Fabriqué en coton de haute qualité.',
    condition: 'good',
    size: 'xl',
    color: 'yellow',
    material: 'coton',
    gender: 'femme'
  },
  {
    id: '686',
    name: 'Manteaux & Vestes homme',
    price: 210,
    originalPrice: 300,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Manteaux & Vestes homme en polyester recyclé. Excellent état. Coupe ajustée et confortable.',
    condition: 'excellent',
    size: 'm',
    color: 'green',
    material: 'polyester recyclé',
    gender: 'homme'
  },
  {
    id: '687',
    name: 'Survêtements femme',
    price: 85,
    originalPrice: 106,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Survêtements femme authentique Lacoste. Très bon état. coton molletonné durable et confortable.',
    condition: 'very_good',
    size: 'xl',
    color: 'pink',
    material: 'coton molletonné',
    gender: 'femme'
  },
  {
    id: '688',
    name: 'Sweatshirts homme',
    price: 42,
    originalPrice: 60,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Sweatshirts homme élégant et intemporel. Excellent état. Fabriqué en jersey lourd de haute qualité.',
    condition: 'excellent',
    size: 'xs',
    color: 'red',
    material: 'jersey lourd',
    gender: 'homme'
  },
  {
    id: '689',
    name: 'Pantalons & Shorts femme',
    price: 125,
    originalPrice: 178,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Pantalons & Shorts femme élégant et intemporel. État neuf. Fabriqué en toile de coton de haute qualité.',
    condition: 'new',
    size: 'l',
    color: 'green',
    material: 'toile de coton',
    gender: 'femme'
  },
  {
    id: '690',
    name: 'Maroquinerie homme',
    price: 138,
    originalPrice: 197,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique Maroquinerie homme de la collection Lacoste. Bon état. Matière premium en toile enduite.',
    condition: 'good',
    size: 'l',
    color: 'orange',
    material: 'toile enduite',
    gender: 'homme'
  },
  {
    id: '691',
    name: 'Polos femme',
    price: 134,
    originalPrice: 191,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Polos femme élégant et intemporel. Bon état. Fabriqué en coton bio de haute qualité.',
    condition: 'good',
    size: 's',
    color: 'yellow',
    material: 'coton bio',
    gender: 'femme'
  },
  {
    id: '692',
    name: 'Pullovers femme',
    price: 106,
    originalPrice: 151,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Pullovers femme authentique Lacoste. État neuf. cachemire durable et confortable.',
    condition: 'new',
    size: 'm',
    color: 'orange',
    material: 'cachemire',
    gender: 'femme'
  },
  {
    id: '693',
    name: 'Robes & Jupes femme',
    price: 200,
    originalPrice: 286,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Robes & Jupes femme en jersey. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 's',
    color: 'beige',
    material: 'jersey',
    gender: 'femme'
  },
  {
    id: '694',
    name: 'Sweatshirts femme',
    price: 31,
    originalPrice: 44,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Magnifique Sweatshirts femme de la collection Lacoste. Excellent état. Matière premium en jersey lourd.',
    condition: 'excellent',
    size: 'xl',
    color: 'orange',
    material: 'jersey lourd',
    gender: 'femme'
  },
  {
    id: '695',
    name: 'Polos homme',
    price: 106,
    originalPrice: 133,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Polos homme authentique Lacoste. Très bon état. coton bio durable et confortable.',
    condition: 'very_good',
    size: 's',
    color: 'yellow',
    material: 'coton bio',
    gender: 'homme'
  },
  {
    id: '696',
    name: 'Tops & Chemises femme',
    price: 189,
    originalPrice: 270,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Tops & Chemises femme en viscose. Excellent état. Coupe ajustée et confortable.',
    condition: 'excellent',
    size: 'xxl_and_more',
    color: 'yellow',
    material: 'viscose',
    gender: 'femme'
  },
  {
    id: '697',
    name: 'Sweatshirts femme',
    price: 183,
    originalPrice: 261,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Sweatshirts femme en coton brossé. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 'l',
    color: 'green',
    material: 'coton brossé',
    gender: 'femme'
  },
  {
    id: '698',
    name: 'T-shirts femme',
    price: 83,
    originalPrice: 119,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Magnifique T-shirts femme de la collection Lacoste. Excellent état. Matière premium en jersey fin.',
    condition: 'excellent',
    size: 'xs',
    color: 'blue',
    material: 'jersey fin',
    gender: 'femme'
  },
  {
    id: '699',
    name: 'Pantalons & Shorts homme',
    price: 63,
    originalPrice: 90,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Pantalons & Shorts homme élégant et intemporel. Bon état. Fabriqué en gabardine de haute qualité.',
    condition: 'good',
    size: 'xl',
    color: 'yellow',
    material: 'gabardine',
    gender: 'homme'
  },
  {
    id: '700',
    name: 'Manteaux & Vestes homme',
    price: 148,
    originalPrice: 211,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Manteaux & Vestes homme élégant et intemporel. État neuf. Fabriqué en laine de haute qualité.',
    condition: 'new',
    size: 'xxl_and_more',
    color: 'yellow',
    material: 'laine',
    gender: 'homme'
  },
  {
    id: '701',
    name: 'Sweatshirts femme',
    price: 116,
    originalPrice: 166,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Magnifique Sweatshirts femme de la collection Lacoste. Bon état. Matière premium en jersey lourd.',
    condition: 'good',
    size: 'xl',
    color: 'red',
    material: 'jersey lourd',
    gender: 'femme'
  },
  {
    id: '702',
    name: 'Pullovers homme',
    price: 139,
    originalPrice: 198,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Pullovers homme en cachemire. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 'm',
    color: 'yellow',
    material: 'cachemire',
    gender: 'homme'
  },
  {
    id: '703',
    name: 'Polos femme',
    price: 88,
    originalPrice: 126,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique Polos femme de la collection Lacoste. Excellent état. Matière premium en coton bio.',
    condition: 'excellent',
    size: 'l',
    color: 'green',
    material: 'coton bio',
    gender: 'femme'
  },
  {
    id: '704',
    name: 'Sweatshirts femme',
    price: 184,
    originalPrice: 263,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique Sweatshirts femme de la collection Lacoste. Bon état. Matière premium en molleton.',
    condition: 'good',
    size: 'l',
    color: 'black',
    material: 'molleton',
    gender: 'femme'
  },
  {
    id: '705',
    name: 'Pullovers homme',
    price: 160,
    originalPrice: 228,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Pullovers homme authentique Lacoste. Excellent état. cachemire durable et confortable.',
    condition: 'excellent',
    size: 'xxl_and_more',
    color: 'blue',
    material: 'cachemire',
    gender: 'homme'
  },
  {
    id: '706',
    name: 'Maroquinerie homme',
    price: 162,
    originalPrice: 203,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique Maroquinerie homme de la collection Lacoste. Très bon état. Matière premium en cuir.',
    condition: 'very_good',
    size: 's',
    color: 'brown',
    material: 'cuir',
    gender: 'homme'
  },
  {
    id: '707',
    name: 'Pantalons & Shorts femme',
    price: 46,
    originalPrice: 58,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Magnifique Pantalons & Shorts femme de la collection Lacoste. Très bon état. Matière premium en toile de coton.',
    condition: 'very_good',
    size: 'xl',
    color: 'blue',
    material: 'toile de coton',
    gender: 'femme'
  },
  {
    id: '708',
    name: 'Pantalons & Shorts femme',
    price: 43,
    originalPrice: 62,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Pantalons & Shorts femme en coton sergé. Excellent état. Coupe ajustée et confortable.',
    condition: 'excellent',
    size: 'm',
    color: 'yellow',
    material: 'coton sergé',
    gender: 'femme'
  },
  {
    id: '709',
    name: 'Chemises homme',
    price: 118,
    originalPrice: 169,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Chemises homme élégant et intemporel. Bon état. Fabriqué en oxford de haute qualité.',
    condition: 'good',
    size: 'm',
    color: 'beige',
    material: 'oxford',
    gender: 'homme'
  },
  {
    id: '710',
    name: 'Pullovers homme',
    price: 104,
    originalPrice: 149,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Magnifique Pullovers homme de la collection Lacoste. État neuf. Matière premium en laine mérinos.',
    condition: 'new',
    size: 'xs',
    color: 'brown',
    material: 'laine mérinos',
    gender: 'homme'
  },
  {
    id: '711',
    name: 'Pantalons & Shorts femme',
    price: 197,
    originalPrice: 282,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Magnifique Pantalons & Shorts femme de la collection Lacoste. Bon état. Matière premium en toile de coton.',
    condition: 'good',
    size: 'm',
    color: 'yellow',
    material: 'toile de coton',
    gender: 'femme'
  },
  {
    id: '712',
    name: 'Survêtements femme',
    price: 153,
    originalPrice: 219,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Survêtements femme authentique Lacoste. Excellent état. polyester technique durable et confortable.',
    condition: 'excellent',
    size: 'm',
    color: 'beige',
    material: 'polyester technique',
    gender: 'femme'
  },
  {
    id: '713',
    name: 'Survêtements femme',
    price: 117,
    originalPrice: 167,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Survêtements femme en coton molletonné. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 'xl',
    color: 'orange',
    material: 'coton molletonné',
    gender: 'femme'
  },
  {
    id: '714',
    name: 'Robes & Jupes femme',
    price: 126,
    originalPrice: 180,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Robes & Jupes femme élégant et intemporel. État neuf. Fabriqué en jersey de haute qualité.',
    condition: 'new',
    size: 'xl',
    color: 'pink',
    material: 'jersey',
    gender: 'femme'
  },
  {
    id: '715',
    name: 'Tops & Chemises femme',
    price: 178,
    originalPrice: 254,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Magnifique Tops & Chemises femme de la collection Lacoste. Bon état. Matière premium en popeline de coton.',
    condition: 'good',
    size: 'xs',
    color: 'blue',
    material: 'popeline de coton',
    gender: 'femme'
  },
  {
    id: '716',
    name: 'Pantalons & Shorts femme',
    price: 139,
    originalPrice: 199,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Pantalons & Shorts femme authentique Lacoste. Bon état. toile de coton durable et confortable.',
    condition: 'good',
    size: 's',
    color: 'orange',
    material: 'toile de coton',
    gender: 'femme'
  },
  {
    id: '717',
    name: 'Manteaux & Vestes homme',
    price: 126,
    originalPrice: 158,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Manteaux & Vestes homme en coton imperméable. Très bon état. Coupe ajustée et confortable.',
    condition: 'very_good',
    size: 'xxl_and_more',
    color: 'yellow',
    material: 'coton imperméable',
    gender: 'homme'
  },
  {
    id: '718',
    name: 'T-shirts homme',
    price: 157,
    originalPrice: 196,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'T-shirts homme élégant et intemporel. Très bon état. Fabriqué en coton organique de haute qualité.',
    condition: 'very_good',
    size: 'l',
    color: 'white',
    material: 'coton organique',
    gender: 'homme'
  },
  {
    id: '719',
    name: 'Pullovers homme',
    price: 54,
    originalPrice: 77,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Magnifique Pullovers homme de la collection Lacoste. Excellent état. Matière premium en cachemire.',
    condition: 'excellent',
    size: 'xxl_and_more',
    color: 'pink',
    material: 'cachemire',
    gender: 'homme'
  },
  {
    id: '720',
    name: 'Polos femme',
    price: 153,
    originalPrice: 191,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Polos femme élégant et intemporel. Très bon état. Fabriqué en coton bio de haute qualité.',
    condition: 'very_good',
    size: 'xl',
    color: 'black',
    material: 'coton bio',
    gender: 'femme'
  },
  {
    id: '721',
    name: 'Pantalons & Shorts homme',
    price: 57,
    originalPrice: 82,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Pantalons & Shorts homme élégant et intemporel. Excellent état. Fabriqué en gabardine de haute qualité.',
    condition: 'excellent',
    size: 'm',
    color: 'orange',
    material: 'gabardine',
    gender: 'homme'
  },
  {
    id: '722',
    name: 'Maroquinerie homme',
    price: 21,
    originalPrice: 30,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Magnifique Maroquinerie homme de la collection Lacoste. État neuf. Matière premium en toile enduite.',
    condition: 'new',
    size: 'xxl_and_more',
    color: 'purple',
    material: 'toile enduite',
    gender: 'homme'
  },
  {
    id: '723',
    name: 'Sweatshirts homme',
    price: 46,
    originalPrice: 65,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Sweatshirts homme authentique Lacoste. État neuf. molleton durable et confortable.',
    condition: 'new',
    size: 'xl',
    color: 'yellow',
    material: 'molleton',
    gender: 'homme'
  },
  {
    id: '724',
    name: 'Maroquinerie homme',
    price: 94,
    originalPrice: 134,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Maroquinerie homme en cuir. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'm',
    color: 'blue',
    material: 'cuir',
    gender: 'homme'
  },
  {
    id: '725',
    name: 'Pullovers homme',
    price: 40,
    originalPrice: 57,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Pullovers homme élégant et intemporel. Bon état. Fabriqué en cachemire de haute qualité.',
    condition: 'good',
    size: 'xs',
    color: 'green',
    material: 'cachemire',
    gender: 'homme'
  },
  {
    id: '726',
    name: 'Manteaux & Vestes homme',
    price: 116,
    originalPrice: 166,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Manteaux & Vestes homme authentique Lacoste. État neuf. polyester recyclé durable et confortable.',
    condition: 'new',
    size: 'xs',
    color: 'yellow',
    material: 'polyester recyclé',
    gender: 'homme'
  },
  {
    id: '727',
    name: 'Pantalons & Shorts femme',
    price: 166,
    originalPrice: 208,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Pantalons & Shorts femme authentique Lacoste. Très bon état. gabardine durable et confortable.',
    condition: 'very_good',
    size: 'xxl_and_more',
    color: 'white',
    material: 'gabardine',
    gender: 'femme'
  },
  {
    id: '728',
    name: 'Chemises homme',
    price: 67,
    originalPrice: 95,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Chemises homme authentique Lacoste. État neuf. oxford durable et confortable.',
    condition: 'new',
    size: 'xs',
    color: 'orange',
    material: 'oxford',
    gender: 'homme'
  },
  {
    id: '729',
    name: 'Sweatshirts homme',
    price: 34,
    originalPrice: 49,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Sweatshirts homme élégant et intemporel. État neuf. Fabriqué en molleton de haute qualité.',
    condition: 'new',
    size: 'm',
    color: 'brown',
    material: 'molleton',
    gender: 'homme'
  },
  {
    id: '730',
    name: 'Manteaux & Vestes femme',
    price: 165,
    originalPrice: 235,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Manteaux & Vestes femme en coton imperméable. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'm',
    color: 'pink',
    material: 'coton imperméable',
    gender: 'femme'
  },
  {
    id: '731',
    name: 'Polos homme',
    price: 160,
    originalPrice: 228,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Polos homme authentique Lacoste. État neuf. coton bio durable et confortable.',
    condition: 'new',
    size: 'xxl_and_more',
    color: 'pink',
    material: 'coton bio',
    gender: 'homme'
  },
  {
    id: '732',
    name: 'Chemises homme',
    price: 151,
    originalPrice: 215,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Chemises homme élégant et intemporel. Bon état. Fabriqué en popeline de haute qualité.',
    condition: 'good',
    size: 's',
    color: 'brown',
    material: 'popeline',
    gender: 'homme'
  },
  {
    id: '733',
    name: 'Survêtements homme',
    price: 104,
    originalPrice: 149,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Survêtements homme en polyester technique. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 'l',
    color: 'yellow',
    material: 'polyester technique',
    gender: 'homme'
  },
  {
    id: '734',
    name: 'Survêtements femme',
    price: 109,
    originalPrice: 156,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Survêtements femme en polyester technique. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'm',
    color: 'red',
    material: 'polyester technique',
    gender: 'femme'
  },
  {
    id: '735',
    name: 'Pantalons & Shorts homme',
    price: 106,
    originalPrice: 151,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Pantalons & Shorts homme authentique Lacoste. Bon état. toile de coton durable et confortable.',
    condition: 'good',
    size: 'xs',
    color: 'black',
    material: 'toile de coton',
    gender: 'homme'
  },
  {
    id: '736',
    name: 'Maroquinerie homme',
    price: 199,
    originalPrice: 284,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Maroquinerie homme en nylon. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 'xs',
    color: 'grey',
    material: 'nylon',
    gender: 'homme'
  },
  {
    id: '737',
    name: 'Pantalons & Shorts homme',
    price: 136,
    originalPrice: 194,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Magnifique Pantalons & Shorts homme de la collection Lacoste. État neuf. Matière premium en coton sergé.',
    condition: 'new',
    size: 'xxl_and_more',
    color: 'brown',
    material: 'coton sergé',
    gender: 'homme'
  },
  {
    id: '738',
    name: 'Survêtements homme',
    price: 181,
    originalPrice: 258,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Survêtements homme authentique Lacoste. État neuf. matière stretch durable et confortable.',
    condition: 'new',
    size: 'xl',
    color: 'yellow',
    material: 'matière stretch',
    gender: 'homme'
  },
  {
    id: '739',
    name: 'Tops & Chemises femme',
    price: 180,
    originalPrice: 225,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Tops & Chemises femme en popeline de coton. Très bon état. Coupe ajustée et confortable.',
    condition: 'very_good',
    size: 's',
    color: 'red',
    material: 'popeline de coton',
    gender: 'femme'
  },
  {
    id: '740',
    name: 'Polos femme',
    price: 128,
    originalPrice: 160,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Magnifique Polos femme de la collection Lacoste. Très bon état. Matière premium en coton piqué.',
    condition: 'very_good',
    size: 'xl',
    color: 'brown',
    material: 'coton piqué',
    gender: 'femme'
  },
  {
    id: '741',
    name: 'Manteaux & Vestes homme',
    price: 55,
    originalPrice: 69,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Manteaux & Vestes homme en coton imperméable. Très bon état. Coupe ajustée et confortable.',
    condition: 'very_good',
    size: 'xl',
    color: 'black',
    material: 'coton imperméable',
    gender: 'homme'
  },
  {
    id: '742',
    name: 'Manteaux & Vestes homme',
    price: 145,
    originalPrice: 181,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Manteaux & Vestes homme en polyester recyclé. Très bon état. Coupe ajustée et confortable.',
    condition: 'very_good',
    size: 'xs',
    color: 'beige',
    material: 'polyester recyclé',
    gender: 'homme'
  },
  {
    id: '743',
    name: 'Chemises femme',
    price: 86,
    originalPrice: 107,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Chemises femme authentique Lacoste. Très bon état. popeline durable et confortable.',
    condition: 'very_good',
    size: 'l',
    color: 'purple',
    material: 'popeline',
    gender: 'femme'
  },
  {
    id: '744',
    name: 'Pullovers femme',
    price: 107,
    originalPrice: 153,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique Pullovers femme de la collection Lacoste. État neuf. Matière premium en laine mérinos.',
    condition: 'new',
    size: 'm',
    color: 'brown',
    material: 'laine mérinos',
    gender: 'femme'
  },
  {
    id: '745',
    name: 'Polos homme',
    price: 209,
    originalPrice: 299,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Polos homme élégant et intemporel. État neuf. Fabriqué en jersey de coton de haute qualité.',
    condition: 'new',
    size: 'xxl_and_more',
    color: 'red',
    material: 'jersey de coton',
    gender: 'homme'
  },
  {
    id: '746',
    name: 'Tops & Chemises femme',
    price: 25,
    originalPrice: 35,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Tops & Chemises femme en soie. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 'xl',
    color: 'beige',
    material: 'soie',
    gender: 'femme'
  },
  {
    id: '747',
    name: 'Pullovers homme',
    price: 30,
    originalPrice: 43,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Pullovers homme authentique Lacoste. État neuf. cachemire durable et confortable.',
    condition: 'new',
    size: 'xxl_and_more',
    color: 'green',
    material: 'cachemire',
    gender: 'homme'
  },
  {
    id: '748',
    name: 'Maroquinerie femme',
    price: 105,
    originalPrice: 131,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Maroquinerie femme en nylon. Très bon état. Coupe ajustée et confortable.',
    condition: 'very_good',
    size: 's',
    color: 'blue',
    material: 'nylon',
    gender: 'femme'
  },
  {
    id: '749',
    name: 'Chemises homme',
    price: 152,
    originalPrice: 217,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Chemises homme authentique Lacoste. Excellent état. popeline durable et confortable.',
    condition: 'excellent',
    size: 's',
    color: 'pink',
    material: 'popeline',
    gender: 'homme'
  },
  {
    id: '750',
    name: 'T-shirts femme',
    price: 179,
    originalPrice: 224,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe T-shirts femme en coton organique. Très bon état. Coupe ajustée et confortable.',
    condition: 'very_good',
    size: 's',
    color: 'brown',
    material: 'coton organique',
    gender: 'femme'
  },
  {
    id: '751',
    name: 'Sweatshirts homme',
    price: 141,
    originalPrice: 202,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Sweatshirts homme élégant et intemporel. Bon état. Fabriqué en coton brossé de haute qualité.',
    condition: 'good',
    size: 's',
    color: 'green',
    material: 'coton brossé',
    gender: 'homme'
  },
  {
    id: '752',
    name: 'Sweatshirts femme',
    price: 112,
    originalPrice: 160,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique Sweatshirts femme de la collection Lacoste. État neuf. Matière premium en molleton.',
    condition: 'new',
    size: 'xxl_and_more',
    color: 'beige',
    material: 'molleton',
    gender: 'femme'
  },
  {
    id: '753',
    name: 'T-shirts femme',
    price: 112,
    originalPrice: 160,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Magnifique T-shirts femme de la collection Lacoste. Excellent état. Matière premium en coton organique.',
    condition: 'excellent',
    size: 'xl',
    color: 'brown',
    material: 'coton organique',
    gender: 'femme'
  },
  {
    id: '754',
    name: 'Pullovers femme',
    price: 190,
    originalPrice: 271,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Pullovers femme en coton tricoté. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'xs',
    color: 'green',
    material: 'coton tricoté',
    gender: 'femme'
  },
  {
    id: '755',
    name: 'Chemises homme',
    price: 70,
    originalPrice: 100,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Chemises homme en popeline. Excellent état. Coupe ajustée et confortable.',
    condition: 'excellent',
    size: 'm',
    color: 'red',
    material: 'popeline',
    gender: 'homme'
  },
  {
    id: '756',
    name: 'Polos homme',
    price: 46,
    originalPrice: 66,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Polos homme authentique Lacoste. État neuf. jersey de coton durable et confortable.',
    condition: 'new',
    size: 'l',
    color: 'pink',
    material: 'jersey de coton',
    gender: 'homme'
  },
  {
    id: '757',
    name: 'Tops & Chemises femme',
    price: 65,
    originalPrice: 93,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Tops & Chemises femme en soie. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'xs',
    color: 'grey',
    material: 'soie',
    gender: 'femme'
  },
  {
    id: '758',
    name: 'Survêtements femme',
    price: 221,
    originalPrice: 276,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Survêtements femme authentique Lacoste. Très bon état. matière stretch durable et confortable.',
    condition: 'very_good',
    size: 'l',
    color: 'yellow',
    material: 'matière stretch',
    gender: 'femme'
  },
  {
    id: '759',
    name: 'Maroquinerie homme',
    price: 111,
    originalPrice: 158,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Maroquinerie homme élégant et intemporel. Bon état. Fabriqué en nylon de haute qualité.',
    condition: 'good',
    size: 'xl',
    color: 'orange',
    material: 'nylon',
    gender: 'homme'
  },
  {
    id: '760',
    name: 'Chemises homme',
    price: 194,
    originalPrice: 277,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique Chemises homme de la collection Lacoste. Bon état. Matière premium en lin.',
    condition: 'good',
    size: 'l',
    color: 'purple',
    material: 'lin',
    gender: 'homme'
  },
  {
    id: '761',
    name: 'Survêtements femme',
    price: 88,
    originalPrice: 125,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Survêtements femme en coton molletonné. Excellent état. Coupe ajustée et confortable.',
    condition: 'excellent',
    size: 'xs',
    color: 'brown',
    material: 'coton molletonné',
    gender: 'femme'
  },
  {
    id: '762',
    name: 'Pullovers femme',
    price: 202,
    originalPrice: 288,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Pullovers femme élégant et intemporel. Bon état. Fabriqué en coton tricoté de haute qualité.',
    condition: 'good',
    size: 'xl',
    color: 'pink',
    material: 'coton tricoté',
    gender: 'femme'
  },
  {
    id: '763',
    name: 'Maroquinerie homme',
    price: 183,
    originalPrice: 261,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Maroquinerie homme authentique Lacoste. Bon état. toile enduite durable et confortable.',
    condition: 'good',
    size: 'xxl_and_more',
    color: 'red',
    material: 'toile enduite',
    gender: 'homme'
  },
  {
    id: '764',
    name: 'Chemises homme',
    price: 225,
    originalPrice: 281,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Magnifique Chemises homme de la collection Lacoste. Très bon état. Matière premium en lin.',
    condition: 'very_good',
    size: 'xs',
    color: 'purple',
    material: 'lin',
    gender: 'homme'
  },
  {
    id: '765',
    name: 'Sweatshirts homme',
    price: 88,
    originalPrice: 125,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Sweatshirts homme élégant et intemporel. Excellent état. Fabriqué en molleton de haute qualité.',
    condition: 'excellent',
    size: 'xs',
    color: 'black',
    material: 'molleton',
    gender: 'homme'
  },
  {
    id: '766',
    name: 'Chemises femme',
    price: 35,
    originalPrice: 50,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Chemises femme élégant et intemporel. Excellent état. Fabriqué en oxford de haute qualité.',
    condition: 'excellent',
    size: 'xxl_and_more',
    color: 'white',
    material: 'oxford',
    gender: 'femme'
  },
  {
    id: '767',
    name: 'Chemises femme',
    price: 156,
    originalPrice: 223,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Chemises femme en popeline. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 'm',
    color: 'white',
    material: 'popeline',
    gender: 'femme'
  },
  {
    id: '768',
    name: 'Manteaux & Vestes homme',
    price: 130,
    originalPrice: 163,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Manteaux & Vestes homme élégant et intemporel. Très bon état. Fabriqué en polyester recyclé de haute qualité.',
    condition: 'very_good',
    size: 'm',
    color: 'white',
    material: 'polyester recyclé',
    gender: 'homme'
  },
  {
    id: '769',
    name: 'Pullovers femme',
    price: 114,
    originalPrice: 163,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Pullovers femme authentique Lacoste. État neuf. coton tricoté durable et confortable.',
    condition: 'new',
    size: 'xxl_and_more',
    color: 'blue',
    material: 'coton tricoté',
    gender: 'femme'
  },
  {
    id: '770',
    name: 'T-shirts homme',
    price: 130,
    originalPrice: 185,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'T-shirts homme élégant et intemporel. État neuf. Fabriqué en coton organique de haute qualité.',
    condition: 'new',
    size: 'xs',
    color: 'white',
    material: 'coton organique',
    gender: 'homme'
  },
  {
    id: '771',
    name: 'Survêtements femme',
    price: 123,
    originalPrice: 154,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Survêtements femme élégant et intemporel. Très bon état. Fabriqué en polyester technique de haute qualité.',
    condition: 'very_good',
    size: 'l',
    color: 'green',
    material: 'polyester technique',
    gender: 'femme'
  },
  {
    id: '772',
    name: 'Manteaux & Vestes femme',
    price: 106,
    originalPrice: 152,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Magnifique Manteaux & Vestes femme de la collection Lacoste. Bon état. Matière premium en polyester recyclé.',
    condition: 'good',
    size: 'xs',
    color: 'blue',
    material: 'polyester recyclé',
    gender: 'femme'
  },
  {
    id: '773',
    name: 'Pantalons & Shorts homme',
    price: 90,
    originalPrice: 129,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Pantalons & Shorts homme authentique Lacoste. Bon état. toile de coton durable et confortable.',
    condition: 'good',
    size: 'l',
    color: 'grey',
    material: 'toile de coton',
    gender: 'homme'
  },
  {
    id: '774',
    name: 'Survêtements homme',
    price: 56,
    originalPrice: 80,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Survêtements homme en polyester technique. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'l',
    color: 'grey',
    material: 'polyester technique',
    gender: 'homme'
  },
  {
    id: '775',
    name: 'Pantalons & Shorts homme',
    price: 62,
    originalPrice: 78,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Pantalons & Shorts homme en coton sergé. Très bon état. Coupe ajustée et confortable.',
    condition: 'very_good',
    size: 'l',
    color: 'black',
    material: 'coton sergé',
    gender: 'homme'
  },
  {
    id: '776',
    name: 'Pantalons & Shorts femme',
    price: 148,
    originalPrice: 211,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Magnifique Pantalons & Shorts femme de la collection Lacoste. Excellent état. Matière premium en gabardine.',
    condition: 'excellent',
    size: 'm',
    color: 'brown',
    material: 'gabardine',
    gender: 'femme'
  },
  {
    id: '777',
    name: 'Survêtements homme',
    price: 142,
    originalPrice: 203,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Survêtements homme en coton molletonné. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'xl',
    color: 'green',
    material: 'coton molletonné',
    gender: 'homme'
  },
  {
    id: '778',
    name: 'Chemises homme',
    price: 95,
    originalPrice: 135,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Chemises homme en lin. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 'xl',
    color: 'green',
    material: 'lin',
    gender: 'homme'
  },
  {
    id: '779',
    name: 'Manteaux & Vestes homme',
    price: 131,
    originalPrice: 187,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Manteaux & Vestes homme élégant et intemporel. Excellent état. Fabriqué en laine de haute qualité.',
    condition: 'excellent',
    size: 'xxl_and_more',
    color: 'beige',
    material: 'laine',
    gender: 'homme'
  },
  {
    id: '780',
    name: 'Manteaux & Vestes homme',
    price: 148,
    originalPrice: 212,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Manteaux & Vestes homme en coton imperméable. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'm',
    color: 'white',
    material: 'coton imperméable',
    gender: 'homme'
  },
  {
    id: '781',
    name: 'Pullovers homme',
    price: 69,
    originalPrice: 98,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Pullovers homme authentique Lacoste. Bon état. laine mérinos durable et confortable.',
    condition: 'good',
    size: 'xl',
    color: 'beige',
    material: 'laine mérinos',
    gender: 'homme'
  },
  {
    id: '782',
    name: 'T-shirts homme',
    price: 107,
    originalPrice: 153,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Magnifique T-shirts homme de la collection Lacoste. Bon état. Matière premium en jersey fin.',
    condition: 'good',
    size: 'm',
    color: 'pink',
    material: 'jersey fin',
    gender: 'homme'
  },
  {
    id: '783',
    name: 'Sweatshirts femme',
    price: 159,
    originalPrice: 199,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Sweatshirts femme authentique Lacoste. Très bon état. coton brossé durable et confortable.',
    condition: 'very_good',
    size: 'xl',
    color: 'white',
    material: 'coton brossé',
    gender: 'femme'
  },
  {
    id: '784',
    name: 'T-shirts homme',
    price: 142,
    originalPrice: 177,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique T-shirts homme de la collection Lacoste. Très bon état. Matière premium en coton.',
    condition: 'very_good',
    size: 'm',
    color: 'black',
    material: 'coton',
    gender: 'homme'
  },
  {
    id: '785',
    name: 'Polos homme',
    price: 204,
    originalPrice: 292,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Polos homme en coton piqué. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 's',
    color: 'yellow',
    material: 'coton piqué',
    gender: 'homme'
  },
  {
    id: '786',
    name: 'Pullovers homme',
    price: 78,
    originalPrice: 111,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Pullovers homme élégant et intemporel. Excellent état. Fabriqué en cachemire de haute qualité.',
    condition: 'excellent',
    size: 'xxl_and_more',
    color: 'red',
    material: 'cachemire',
    gender: 'homme'
  },
  {
    id: '787',
    name: 'Survêtements homme',
    price: 149,
    originalPrice: 213,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Survêtements homme élégant et intemporel. Bon état. Fabriqué en matière stretch de haute qualité.',
    condition: 'good',
    size: 'xs',
    color: 'pink',
    material: 'matière stretch',
    gender: 'homme'
  },
  {
    id: '788',
    name: 'T-shirts femme',
    price: 231,
    originalPrice: 289,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique T-shirts femme de la collection Lacoste. Très bon état. Matière premium en coton.',
    condition: 'very_good',
    size: 'xs',
    color: 'beige',
    material: 'coton',
    gender: 'femme'
  },
  {
    id: '789',
    name: 'Maroquinerie femme',
    price: 30,
    originalPrice: 38,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Maroquinerie femme élégant et intemporel. Très bon état. Fabriqué en cuir de haute qualité.',
    condition: 'very_good',
    size: 's',
    color: 'black',
    material: 'cuir',
    gender: 'femme'
  },
  {
    id: '790',
    name: 'Pullovers homme',
    price: 119,
    originalPrice: 170,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Pullovers homme élégant et intemporel. Bon état. Fabriqué en cachemire de haute qualité.',
    condition: 'good',
    size: 'xl',
    color: 'blue',
    material: 'cachemire',
    gender: 'homme'
  },
  {
    id: '791',
    name: 'Survêtements homme',
    price: 90,
    originalPrice: 129,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Survêtements homme en polyester technique. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 'm',
    color: 'green',
    material: 'polyester technique',
    gender: 'homme'
  },
  {
    id: '792',
    name: 'Robes & Jupes femme',
    price: 100,
    originalPrice: 143,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Robes & Jupes femme authentique Lacoste. État neuf. jersey durable et confortable.',
    condition: 'new',
    size: 'xs',
    color: 'white',
    material: 'jersey',
    gender: 'femme'
  },
  {
    id: '793',
    name: 'T-shirts femme',
    price: 23,
    originalPrice: 33,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe T-shirts femme en coton organique. Excellent état. Coupe ajustée et confortable.',
    condition: 'excellent',
    size: 's',
    color: 'orange',
    material: 'coton organique',
    gender: 'femme'
  },
  {
    id: '794',
    name: 'Pullovers femme',
    price: 190,
    originalPrice: 271,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Pullovers femme authentique Lacoste. Excellent état. laine mérinos durable et confortable.',
    condition: 'excellent',
    size: 'xl',
    color: 'grey',
    material: 'laine mérinos',
    gender: 'femme'
  },
  {
    id: '795',
    name: 'Survêtements homme',
    price: 118,
    originalPrice: 169,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Magnifique Survêtements homme de la collection Lacoste. État neuf. Matière premium en polyester technique.',
    condition: 'new',
    size: 'm',
    color: 'orange',
    material: 'polyester technique',
    gender: 'homme'
  },
  {
    id: '796',
    name: 'Survêtements homme',
    price: 174,
    originalPrice: 218,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Survêtements homme élégant et intemporel. Très bon état. Fabriqué en matière stretch de haute qualité.',
    condition: 'very_good',
    size: 's',
    color: 'black',
    material: 'matière stretch',
    gender: 'homme'
  },
  {
    id: '797',
    name: 'Pantalons & Shorts femme',
    price: 93,
    originalPrice: 133,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Pantalons & Shorts femme en toile de coton. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'xl',
    color: 'red',
    material: 'toile de coton',
    gender: 'femme'
  },
  {
    id: '798',
    name: 'Sweatshirts femme',
    price: 34,
    originalPrice: 48,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Sweatshirts femme authentique Lacoste. État neuf. jersey lourd durable et confortable.',
    condition: 'new',
    size: 'm',
    color: 'orange',
    material: 'jersey lourd',
    gender: 'femme'
  },
  {
    id: '799',
    name: 'Maroquinerie homme',
    price: 64,
    originalPrice: 91,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Maroquinerie homme élégant et intemporel. Bon état. Fabriqué en cuir de haute qualité.',
    condition: 'good',
    size: 'xl',
    color: 'grey',
    material: 'cuir',
    gender: 'homme'
  },
  {
    id: '800',
    name: 'Maroquinerie femme',
    price: 176,
    originalPrice: 251,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Maroquinerie femme élégant et intemporel. Excellent état. Fabriqué en nylon de haute qualité.',
    condition: 'excellent',
    size: 'xxl_and_more',
    color: 'white',
    material: 'nylon',
    gender: 'femme'
  },
  {
    id: '801',
    name: 'T-shirts homme',
    price: 66,
    originalPrice: 94,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'T-shirts homme élégant et intemporel. État neuf. Fabriqué en coton de haute qualité.',
    condition: 'new',
    size: 'xs',
    color: 'red',
    material: 'coton',
    gender: 'homme'
  },
  {
    id: '802',
    name: 'Polos homme',
    price: 182,
    originalPrice: 228,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Polos homme élégant et intemporel. Très bon état. Fabriqué en coton bio de haute qualité.',
    condition: 'very_good',
    size: 'xs',
    color: 'blue',
    material: 'coton bio',
    gender: 'homme'
  },
  {
    id: '803',
    name: 'Pantalons & Shorts homme',
    price: 33,
    originalPrice: 41,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Pantalons & Shorts homme authentique Lacoste. Très bon état. gabardine durable et confortable.',
    condition: 'very_good',
    size: 'xl',
    color: 'black',
    material: 'gabardine',
    gender: 'homme'
  },
  {
    id: '804',
    name: 'Manteaux & Vestes femme',
    price: 34,
    originalPrice: 43,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Manteaux & Vestes femme élégant et intemporel. Très bon état. Fabriqué en coton imperméable de haute qualité.',
    condition: 'very_good',
    size: 'm',
    color: 'purple',
    material: 'coton imperméable',
    gender: 'femme'
  },
  {
    id: '805',
    name: 'Maroquinerie femme',
    price: 138,
    originalPrice: 197,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique Maroquinerie femme de la collection Lacoste. Bon état. Matière premium en nylon.',
    condition: 'good',
    size: 'xl',
    color: 'yellow',
    material: 'nylon',
    gender: 'femme'
  },
  {
    id: '806',
    name: 'T-shirts femme',
    price: 75,
    originalPrice: 107,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Magnifique T-shirts femme de la collection Lacoste. Excellent état. Matière premium en coton.',
    condition: 'excellent',
    size: 'xs',
    color: 'yellow',
    material: 'coton',
    gender: 'femme'
  },
  {
    id: '807',
    name: 'Pullovers femme',
    price: 141,
    originalPrice: 202,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Pullovers femme en cachemire. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 'xs',
    color: 'beige',
    material: 'cachemire',
    gender: 'femme'
  },
  {
    id: '808',
    name: 'Chemises femme',
    price: 114,
    originalPrice: 143,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Chemises femme authentique Lacoste. Très bon état. oxford durable et confortable.',
    condition: 'very_good',
    size: 'xl',
    color: 'beige',
    material: 'oxford',
    gender: 'femme'
  },
  {
    id: '809',
    name: 'Manteaux & Vestes femme',
    price: 240,
    originalPrice: 300,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Manteaux & Vestes femme en polyester recyclé. Très bon état. Coupe ajustée et confortable.',
    condition: 'very_good',
    size: 'l',
    color: 'green',
    material: 'polyester recyclé',
    gender: 'femme'
  },
  {
    id: '810',
    name: 'Maroquinerie femme',
    price: 155,
    originalPrice: 221,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Maroquinerie femme authentique Lacoste. Excellent état. cuir durable et confortable.',
    condition: 'excellent',
    size: 'xl',
    color: 'yellow',
    material: 'cuir',
    gender: 'femme'
  },
  {
    id: '811',
    name: 'T-shirts homme',
    price: 34,
    originalPrice: 48,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe T-shirts homme en coton organique. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 'm',
    color: 'blue',
    material: 'coton organique',
    gender: 'homme'
  },
  {
    id: '812',
    name: 'Robes & Jupes femme',
    price: 197,
    originalPrice: 282,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Robes & Jupes femme authentique Lacoste. Excellent état. coton stretch durable et confortable.',
    condition: 'excellent',
    size: 's',
    color: 'blue',
    material: 'coton stretch',
    gender: 'femme'
  },
  {
    id: '813',
    name: 'Robes & Jupes femme',
    price: 29,
    originalPrice: 41,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Robes & Jupes femme en crêpe. Excellent état. Coupe ajustée et confortable.',
    condition: 'excellent',
    size: 'm',
    color: 'purple',
    material: 'crêpe',
    gender: 'femme'
  },
  {
    id: '814',
    name: 'Polos femme',
    price: 137,
    originalPrice: 196,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Polos femme élégant et intemporel. Bon état. Fabriqué en jersey de coton de haute qualité.',
    condition: 'good',
    size: 'xs',
    color: 'purple',
    material: 'jersey de coton',
    gender: 'femme'
  },
  {
    id: '815',
    name: 'Pantalons & Shorts homme',
    price: 113,
    originalPrice: 162,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Pantalons & Shorts homme élégant et intemporel. Bon état. Fabriqué en toile de coton de haute qualité.',
    condition: 'good',
    size: 'xs',
    color: 'brown',
    material: 'toile de coton',
    gender: 'homme'
  },
  {
    id: '816',
    name: 'Pullovers homme',
    price: 111,
    originalPrice: 159,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Pullovers homme en laine mérinos. Excellent état. Coupe ajustée et confortable.',
    condition: 'excellent',
    size: 'xl',
    color: 'blue',
    material: 'laine mérinos',
    gender: 'homme'
  },
  {
    id: '817',
    name: 'Pantalons & Shorts femme',
    price: 85,
    originalPrice: 121,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Pantalons & Shorts femme authentique Lacoste. État neuf. gabardine durable et confortable.',
    condition: 'new',
    size: 'm',
    color: 'purple',
    material: 'gabardine',
    gender: 'femme'
  },
  {
    id: '818',
    name: 'Chemises homme',
    price: 25,
    originalPrice: 35,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Chemises homme en oxford. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 'l',
    color: 'orange',
    material: 'oxford',
    gender: 'homme'
  },
  {
    id: '819',
    name: 'Chemises femme',
    price: 36,
    originalPrice: 51,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Chemises femme élégant et intemporel. État neuf. Fabriqué en oxford de haute qualité.',
    condition: 'new',
    size: 'xl',
    color: 'brown',
    material: 'oxford',
    gender: 'femme'
  },
  {
    id: '820',
    name: 'Pullovers femme',
    price: 166,
    originalPrice: 207,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Pullovers femme en coton tricoté. Très bon état. Coupe ajustée et confortable.',
    condition: 'very_good',
    size: 'l',
    color: 'yellow',
    material: 'coton tricoté',
    gender: 'femme'
  },
  {
    id: '821',
    name: 'Pullovers femme',
    price: 111,
    originalPrice: 158,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Pullovers femme authentique Lacoste. Excellent état. cachemire durable et confortable.',
    condition: 'excellent',
    size: 'xs',
    color: 'orange',
    material: 'cachemire',
    gender: 'femme'
  },
  {
    id: '822',
    name: 'Manteaux & Vestes femme',
    price: 108,
    originalPrice: 154,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Manteaux & Vestes femme en polyester recyclé. Excellent état. Coupe ajustée et confortable.',
    condition: 'excellent',
    size: 'xl',
    color: 'orange',
    material: 'polyester recyclé',
    gender: 'femme'
  },
  {
    id: '823',
    name: 'Manteaux & Vestes femme',
    price: 109,
    originalPrice: 156,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Manteaux & Vestes femme en polyester recyclé. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'l',
    color: 'orange',
    material: 'polyester recyclé',
    gender: 'femme'
  },
  {
    id: '824',
    name: 'Maroquinerie femme',
    price: 178,
    originalPrice: 222,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Maroquinerie femme en toile enduite. Très bon état. Coupe ajustée et confortable.',
    condition: 'very_good',
    size: 'l',
    color: 'brown',
    material: 'toile enduite',
    gender: 'femme'
  },
  {
    id: '825',
    name: 'Maroquinerie homme',
    price: 97,
    originalPrice: 138,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Maroquinerie homme en toile enduite. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 'xxl_and_more',
    color: 'grey',
    material: 'toile enduite',
    gender: 'homme'
  },
  {
    id: '826',
    name: 'Tops & Chemises femme',
    price: 50,
    originalPrice: 72,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Tops & Chemises femme authentique Lacoste. Excellent état. popeline de coton durable et confortable.',
    condition: 'excellent',
    size: 'xxl_and_more',
    color: 'grey',
    material: 'popeline de coton',
    gender: 'femme'
  },
  {
    id: '827',
    name: 'Pullovers homme',
    price: 130,
    originalPrice: 186,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Pullovers homme élégant et intemporel. État neuf. Fabriqué en coton tricoté de haute qualité.',
    condition: 'new',
    size: 'xl',
    color: 'pink',
    material: 'coton tricoté',
    gender: 'homme'
  },
  {
    id: '828',
    name: 'Survêtements homme',
    price: 139,
    originalPrice: 199,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Survêtements homme en polyester technique. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 'm',
    color: 'yellow',
    material: 'polyester technique',
    gender: 'homme'
  },
  {
    id: '829',
    name: 'T-shirts homme',
    price: 116,
    originalPrice: 166,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe T-shirts homme en coton. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'xxl_and_more',
    color: 'red',
    material: 'coton',
    gender: 'homme'
  },
  {
    id: '830',
    name: 'Survêtements homme',
    price: 32,
    originalPrice: 46,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Survêtements homme élégant et intemporel. État neuf. Fabriqué en matière stretch de haute qualité.',
    condition: 'new',
    size: 's',
    color: 'purple',
    material: 'matière stretch',
    gender: 'homme'
  },
  {
    id: '831',
    name: 'Polos homme',
    price: 115,
    originalPrice: 165,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Polos homme en jersey de coton. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'm',
    color: 'red',
    material: 'jersey de coton',
    gender: 'homme'
  },
  {
    id: '832',
    name: 'Chemises femme',
    price: 60,
    originalPrice: 86,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Chemises femme authentique Lacoste. Bon état. popeline durable et confortable.',
    condition: 'good',
    size: 'l',
    color: 'blue',
    material: 'popeline',
    gender: 'femme'
  },
  {
    id: '833',
    name: 'Maroquinerie homme',
    price: 97,
    originalPrice: 139,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Maroquinerie homme authentique Lacoste. Bon état. cuir durable et confortable.',
    condition: 'good',
    size: 's',
    color: 'beige',
    material: 'cuir',
    gender: 'homme'
  },
  {
    id: '834',
    name: 'Polos homme',
    price: 169,
    originalPrice: 242,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique Polos homme de la collection Lacoste. État neuf. Matière premium en coton piqué.',
    condition: 'new',
    size: 'xxl_and_more',
    color: 'grey',
    material: 'coton piqué',
    gender: 'homme'
  },
  {
    id: '835',
    name: 'Manteaux & Vestes homme',
    price: 74,
    originalPrice: 93,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Magnifique Manteaux & Vestes homme de la collection Lacoste. Très bon état. Matière premium en laine.',
    condition: 'very_good',
    size: 'xxl_and_more',
    color: 'yellow',
    material: 'laine',
    gender: 'homme'
  },
  {
    id: '836',
    name: 'Pullovers femme',
    price: 132,
    originalPrice: 188,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Pullovers femme authentique Lacoste. État neuf. cachemire durable et confortable.',
    condition: 'new',
    size: 'xxl_and_more',
    color: 'black',
    material: 'cachemire',
    gender: 'femme'
  },
  {
    id: '837',
    name: 'Chemises femme',
    price: 194,
    originalPrice: 277,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Chemises femme en oxford. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'l',
    color: 'beige',
    material: 'oxford',
    gender: 'femme'
  },
  {
    id: '838',
    name: 'Maroquinerie homme',
    price: 109,
    originalPrice: 156,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Maroquinerie homme authentique Lacoste. Bon état. toile enduite durable et confortable.',
    condition: 'good',
    size: 'xxl_and_more',
    color: 'grey',
    material: 'toile enduite',
    gender: 'homme'
  },
  {
    id: '839',
    name: 'Maroquinerie homme',
    price: 57,
    originalPrice: 81,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Maroquinerie homme en toile enduite. Excellent état. Coupe ajustée et confortable.',
    condition: 'excellent',
    size: 'xs',
    color: 'blue',
    material: 'toile enduite',
    gender: 'homme'
  },
  {
    id: '840',
    name: 'Sweatshirts homme',
    price: 124,
    originalPrice: 177,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Sweatshirts homme en jersey lourd. Excellent état. Coupe ajustée et confortable.',
    condition: 'excellent',
    size: 'm',
    color: 'green',
    material: 'jersey lourd',
    gender: 'homme'
  },
  {
    id: '841',
    name: 'Manteaux & Vestes homme',
    price: 179,
    originalPrice: 255,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Manteaux & Vestes homme authentique Lacoste. Bon état. coton imperméable durable et confortable.',
    condition: 'good',
    size: 'xl',
    color: 'yellow',
    material: 'coton imperméable',
    gender: 'homme'
  },
  {
    id: '842',
    name: 'Sweatshirts femme',
    price: 193,
    originalPrice: 275,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Sweatshirts femme en jersey lourd. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'xl',
    color: 'black',
    material: 'jersey lourd',
    gender: 'femme'
  },
  {
    id: '843',
    name: 'Sweatshirts homme',
    price: 45,
    originalPrice: 64,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Sweatshirts homme en molleton. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'xs',
    color: 'brown',
    material: 'molleton',
    gender: 'homme'
  },
  {
    id: '844',
    name: 'Manteaux & Vestes femme',
    price: 133,
    originalPrice: 190,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Manteaux & Vestes femme élégant et intemporel. Excellent état. Fabriqué en coton imperméable de haute qualité.',
    condition: 'excellent',
    size: 'xs',
    color: 'orange',
    material: 'coton imperméable',
    gender: 'femme'
  },
  {
    id: '845',
    name: 'Pantalons & Shorts femme',
    price: 91,
    originalPrice: 130,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Magnifique Pantalons & Shorts femme de la collection Lacoste. État neuf. Matière premium en gabardine.',
    condition: 'new',
    size: 'l',
    color: 'yellow',
    material: 'gabardine',
    gender: 'femme'
  },
  {
    id: '846',
    name: 'T-shirts homme',
    price: 149,
    originalPrice: 213,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'T-shirts homme élégant et intemporel. Excellent état. Fabriqué en coton de haute qualité.',
    condition: 'excellent',
    size: 'xxl_and_more',
    color: 'purple',
    material: 'coton',
    gender: 'homme'
  },
  {
    id: '847',
    name: 'T-shirts femme',
    price: 222,
    originalPrice: 278,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe T-shirts femme en coton organique. Très bon état. Coupe ajustée et confortable.',
    condition: 'very_good',
    size: 'l',
    color: 'brown',
    material: 'coton organique',
    gender: 'femme'
  },
  {
    id: '848',
    name: 'Sweatshirts homme',
    price: 161,
    originalPrice: 230,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Sweatshirts homme authentique Lacoste. Excellent état. molleton durable et confortable.',
    condition: 'excellent',
    size: 'xl',
    color: 'white',
    material: 'molleton',
    gender: 'homme'
  },
  {
    id: '849',
    name: 'Polos homme',
    price: 182,
    originalPrice: 260,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique Polos homme de la collection Lacoste. Bon état. Matière premium en jersey de coton.',
    condition: 'good',
    size: 'l',
    color: 'yellow',
    material: 'jersey de coton',
    gender: 'homme'
  },
  {
    id: '850',
    name: 'Chemises femme',
    price: 101,
    originalPrice: 144,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Chemises femme en popeline. Excellent état. Coupe ajustée et confortable.',
    condition: 'excellent',
    size: 's',
    color: 'green',
    material: 'popeline',
    gender: 'femme'
  },
  {
    id: '851',
    name: 'Sweatshirts homme',
    price: 25,
    originalPrice: 36,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Sweatshirts homme en molleton. Excellent état. Coupe ajustée et confortable.',
    condition: 'excellent',
    size: 'xxl_and_more',
    color: 'white',
    material: 'molleton',
    gender: 'homme'
  },
  {
    id: '852',
    name: 'Manteaux & Vestes femme',
    price: 194,
    originalPrice: 242,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Manteaux & Vestes femme authentique Lacoste. Très bon état. laine durable et confortable.',
    condition: 'very_good',
    size: 'm',
    color: 'brown',
    material: 'laine',
    gender: 'femme'
  },
  {
    id: '853',
    name: 'Maroquinerie femme',
    price: 24,
    originalPrice: 34,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Maroquinerie femme élégant et intemporel. État neuf. Fabriqué en nylon de haute qualité.',
    condition: 'new',
    size: 'l',
    color: 'grey',
    material: 'nylon',
    gender: 'femme'
  },
  {
    id: '854',
    name: 'T-shirts homme',
    price: 194,
    originalPrice: 243,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'T-shirts homme authentique Lacoste. Très bon état. coton organique durable et confortable.',
    condition: 'very_good',
    size: 'xl',
    color: 'yellow',
    material: 'coton organique',
    gender: 'homme'
  },
  {
    id: '855',
    name: 'Pantalons & Shorts femme',
    price: 71,
    originalPrice: 101,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Magnifique Pantalons & Shorts femme de la collection Lacoste. État neuf. Matière premium en coton sergé.',
    condition: 'new',
    size: 'xs',
    color: 'white',
    material: 'coton sergé',
    gender: 'femme'
  },
  {
    id: '856',
    name: 'Survêtements femme',
    price: 25,
    originalPrice: 36,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Survêtements femme élégant et intemporel. Excellent état. Fabriqué en matière stretch de haute qualité.',
    condition: 'excellent',
    size: 'm',
    color: 'white',
    material: 'matière stretch',
    gender: 'femme'
  },
  {
    id: '857',
    name: 'Survêtements femme',
    price: 183,
    originalPrice: 261,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Magnifique Survêtements femme de la collection Lacoste. Bon état. Matière premium en coton molletonné.',
    condition: 'good',
    size: 'xl',
    color: 'beige',
    material: 'coton molletonné',
    gender: 'femme'
  },
  {
    id: '858',
    name: 'Pullovers homme',
    price: 205,
    originalPrice: 293,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Pullovers homme authentique Lacoste. État neuf. coton tricoté durable et confortable.',
    condition: 'new',
    size: 'xl',
    color: 'grey',
    material: 'coton tricoté',
    gender: 'homme'
  },
  {
    id: '859',
    name: 'Survêtements femme',
    price: 25,
    originalPrice: 35,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Magnifique Survêtements femme de la collection Lacoste. Bon état. Matière premium en coton molletonné.',
    condition: 'good',
    size: 's',
    color: 'red',
    material: 'coton molletonné',
    gender: 'femme'
  },
  {
    id: '860',
    name: 'Sweatshirts homme',
    price: 146,
    originalPrice: 209,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Sweatshirts homme en jersey lourd. Excellent état. Coupe ajustée et confortable.',
    condition: 'excellent',
    size: 'l',
    color: 'green',
    material: 'jersey lourd',
    gender: 'homme'
  },
  {
    id: '861',
    name: 'Pullovers homme',
    price: 222,
    originalPrice: 278,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Pullovers homme élégant et intemporel. Très bon état. Fabriqué en cachemire de haute qualité.',
    condition: 'very_good',
    size: 'l',
    color: 'orange',
    material: 'cachemire',
    gender: 'homme'
  },
  {
    id: '862',
    name: 'Polos homme',
    price: 139,
    originalPrice: 198,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Polos homme en coton piqué. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 's',
    color: 'brown',
    material: 'coton piqué',
    gender: 'homme'
  },
  {
    id: '863',
    name: 'Survêtements homme',
    price: 156,
    originalPrice: 195,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Survêtements homme authentique Lacoste. Très bon état. polyester technique durable et confortable.',
    condition: 'very_good',
    size: 'm',
    color: 'green',
    material: 'polyester technique',
    gender: 'homme'
  },
  {
    id: '864',
    name: 'Pullovers femme',
    price: 165,
    originalPrice: 235,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Pullovers femme en laine mérinos. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'xs',
    color: 'orange',
    material: 'laine mérinos',
    gender: 'femme'
  },
  {
    id: '865',
    name: 'Manteaux & Vestes homme',
    price: 186,
    originalPrice: 265,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Manteaux & Vestes homme en laine. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'xl',
    color: 'grey',
    material: 'laine',
    gender: 'homme'
  },
  {
    id: '866',
    name: 'Chemises homme',
    price: 200,
    originalPrice: 286,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Chemises homme authentique Lacoste. État neuf. oxford durable et confortable.',
    condition: 'new',
    size: 'xl',
    color: 'white',
    material: 'oxford',
    gender: 'homme'
  },
  {
    id: '867',
    name: 'Chemises femme',
    price: 57,
    originalPrice: 81,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Chemises femme élégant et intemporel. Excellent état. Fabriqué en oxford de haute qualité.',
    condition: 'excellent',
    size: 'xxl_and_more',
    color: 'green',
    material: 'oxford',
    gender: 'femme'
  },
  {
    id: '868',
    name: 'T-shirts femme',
    price: 212,
    originalPrice: 265,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe T-shirts femme en coton. Très bon état. Coupe ajustée et confortable.',
    condition: 'very_good',
    size: 's',
    color: 'blue',
    material: 'coton',
    gender: 'femme'
  },
  {
    id: '869',
    name: 'Pantalons & Shorts femme',
    price: 207,
    originalPrice: 295,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Pantalons & Shorts femme élégant et intemporel. Bon état. Fabriqué en toile de coton de haute qualité.',
    condition: 'good',
    size: 'xs',
    color: 'white',
    material: 'toile de coton',
    gender: 'femme'
  },
  {
    id: '870',
    name: 'Maroquinerie femme',
    price: 69,
    originalPrice: 99,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Maroquinerie femme authentique Lacoste. Excellent état. cuir durable et confortable.',
    condition: 'excellent',
    size: 'm',
    color: 'black',
    material: 'cuir',
    gender: 'femme'
  },
  {
    id: '871',
    name: 'Manteaux & Vestes homme',
    price: 130,
    originalPrice: 186,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Manteaux & Vestes homme élégant et intemporel. État neuf. Fabriqué en polyester recyclé de haute qualité.',
    condition: 'new',
    size: 'xxl_and_more',
    color: 'red',
    material: 'polyester recyclé',
    gender: 'homme'
  },
  {
    id: '872',
    name: 'Manteaux & Vestes homme',
    price: 29,
    originalPrice: 41,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Manteaux & Vestes homme authentique Lacoste. Excellent état. laine durable et confortable.',
    condition: 'excellent',
    size: 'xs',
    color: 'grey',
    material: 'laine',
    gender: 'homme'
  },
  {
    id: '873',
    name: 'Survêtements homme',
    price: 73,
    originalPrice: 104,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Survêtements homme en polyester technique. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'm',
    color: 'black',
    material: 'polyester technique',
    gender: 'homme'
  },
  {
    id: '874',
    name: 'Tops & Chemises femme',
    price: 44,
    originalPrice: 63,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Tops & Chemises femme élégant et intemporel. Excellent état. Fabriqué en viscose de haute qualité.',
    condition: 'excellent',
    size: 's',
    color: 'black',
    material: 'viscose',
    gender: 'femme'
  },
  {
    id: '875',
    name: 'Polos femme',
    price: 104,
    originalPrice: 149,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Polos femme élégant et intemporel. Bon état. Fabriqué en jersey de coton de haute qualité.',
    condition: 'good',
    size: 'xxl_and_more',
    color: 'beige',
    material: 'jersey de coton',
    gender: 'femme'
  },
  {
    id: '876',
    name: 'Pullovers femme',
    price: 208,
    originalPrice: 297,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Pullovers femme en cachemire. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 'xs',
    color: 'white',
    material: 'cachemire',
    gender: 'femme'
  },
  {
    id: '877',
    name: 'Pullovers homme',
    price: 41,
    originalPrice: 58,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Magnifique Pullovers homme de la collection Lacoste. Bon état. Matière premium en coton tricoté.',
    condition: 'good',
    size: 'm',
    color: 'pink',
    material: 'coton tricoté',
    gender: 'homme'
  },
  {
    id: '878',
    name: 'Survêtements femme',
    price: 211,
    originalPrice: 264,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Survêtements femme en coton molletonné. Très bon état. Coupe ajustée et confortable.',
    condition: 'very_good',
    size: 'xs',
    color: 'beige',
    material: 'coton molletonné',
    gender: 'femme'
  },
  {
    id: '879',
    name: 'Tops & Chemises femme',
    price: 216,
    originalPrice: 270,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Tops & Chemises femme authentique Lacoste. Très bon état. soie durable et confortable.',
    condition: 'very_good',
    size: 'm',
    color: 'orange',
    material: 'soie',
    gender: 'femme'
  },
  {
    id: '880',
    name: 'Pantalons & Shorts femme',
    price: 104,
    originalPrice: 149,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Pantalons & Shorts femme en coton sergé. Excellent état. Coupe ajustée et confortable.',
    condition: 'excellent',
    size: 'xxl_and_more',
    color: 'blue',
    material: 'coton sergé',
    gender: 'femme'
  },
  {
    id: '881',
    name: 'Chemises femme',
    price: 130,
    originalPrice: 185,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Chemises femme élégant et intemporel. Excellent état. Fabriqué en lin de haute qualité.',
    condition: 'excellent',
    size: 'xs',
    color: 'yellow',
    material: 'lin',
    gender: 'femme'
  },
  {
    id: '882',
    name: 'Maroquinerie homme',
    price: 141,
    originalPrice: 202,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Maroquinerie homme en toile enduite. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 'xs',
    color: 'orange',
    material: 'toile enduite',
    gender: 'homme'
  },
  {
    id: '883',
    name: 'Sweatshirts homme',
    price: 204,
    originalPrice: 292,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Sweatshirts homme authentique Lacoste. État neuf. coton brossé durable et confortable.',
    condition: 'new',
    size: 's',
    color: 'green',
    material: 'coton brossé',
    gender: 'homme'
  },
  {
    id: '884',
    name: 'Maroquinerie femme',
    price: 152,
    originalPrice: 190,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Magnifique Maroquinerie femme de la collection Lacoste. Très bon état. Matière premium en toile enduite.',
    condition: 'very_good',
    size: 'xl',
    color: 'beige',
    material: 'toile enduite',
    gender: 'femme'
  },
  {
    id: '885',
    name: 'Sweatshirts homme',
    price: 227,
    originalPrice: 284,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Magnifique Sweatshirts homme de la collection Lacoste. Très bon état. Matière premium en jersey lourd.',
    condition: 'very_good',
    size: 's',
    color: 'green',
    material: 'jersey lourd',
    gender: 'homme'
  },
  {
    id: '886',
    name: 'Sweatshirts femme',
    price: 69,
    originalPrice: 99,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Magnifique Sweatshirts femme de la collection Lacoste. Excellent état. Matière premium en jersey lourd.',
    condition: 'excellent',
    size: 'xs',
    color: 'black',
    material: 'jersey lourd',
    gender: 'femme'
  },
  {
    id: '887',
    name: 'Pantalons & Shorts femme',
    price: 126,
    originalPrice: 180,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Pantalons & Shorts femme élégant et intemporel. Excellent état. Fabriqué en toile de coton de haute qualité.',
    condition: 'excellent',
    size: 'l',
    color: 'white',
    material: 'toile de coton',
    gender: 'femme'
  },
  {
    id: '888',
    name: 'Tops & Chemises femme',
    price: 112,
    originalPrice: 160,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Tops & Chemises femme authentique Lacoste. Excellent état. popeline de coton durable et confortable.',
    condition: 'excellent',
    size: 'xxl_and_more',
    color: 'purple',
    material: 'popeline de coton',
    gender: 'femme'
  },
  {
    id: '889',
    name: 'Pullovers femme',
    price: 139,
    originalPrice: 198,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique Pullovers femme de la collection Lacoste. Bon état. Matière premium en cachemire.',
    condition: 'good',
    size: 'xxl_and_more',
    color: 'white',
    material: 'cachemire',
    gender: 'femme'
  },
  {
    id: '890',
    name: 'Chemises homme',
    price: 153,
    originalPrice: 218,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Magnifique Chemises homme de la collection Lacoste. Bon état. Matière premium en lin.',
    condition: 'good',
    size: 's',
    color: 'green',
    material: 'lin',
    gender: 'homme'
  },
  {
    id: '891',
    name: 'Tops & Chemises femme',
    price: 140,
    originalPrice: 200,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Tops & Chemises femme élégant et intemporel. Bon état. Fabriqué en viscose de haute qualité.',
    condition: 'good',
    size: 'l',
    color: 'beige',
    material: 'viscose',
    gender: 'femme'
  },
  {
    id: '892',
    name: 'Polos femme',
    price: 137,
    originalPrice: 196,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Polos femme élégant et intemporel. État neuf. Fabriqué en coton bio de haute qualité.',
    condition: 'new',
    size: 'xs',
    color: 'beige',
    material: 'coton bio',
    gender: 'femme'
  },
  {
    id: '893',
    name: 'Tops & Chemises femme',
    price: 56,
    originalPrice: 80,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Magnifique Tops & Chemises femme de la collection Lacoste. Excellent état. Matière premium en viscose.',
    condition: 'excellent',
    size: 'm',
    color: 'brown',
    material: 'viscose',
    gender: 'femme'
  },
  {
    id: '894',
    name: 'Chemises femme',
    price: 69,
    originalPrice: 99,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Chemises femme authentique Lacoste. Excellent état. lin durable et confortable.',
    condition: 'excellent',
    size: 's',
    color: 'black',
    material: 'lin',
    gender: 'femme'
  },
  {
    id: '895',
    name: 'T-shirts femme',
    price: 95,
    originalPrice: 135,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe T-shirts femme en coton organique. Excellent état. Coupe ajustée et confortable.',
    condition: 'excellent',
    size: 'xs',
    color: 'beige',
    material: 'coton organique',
    gender: 'femme'
  },
  {
    id: '896',
    name: 'Pullovers femme',
    price: 43,
    originalPrice: 62,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Pullovers femme en coton tricoté. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 'm',
    color: 'yellow',
    material: 'coton tricoté',
    gender: 'femme'
  },
  {
    id: '897',
    name: 'Pantalons & Shorts homme',
    price: 51,
    originalPrice: 64,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Pantalons & Shorts homme authentique Lacoste. Très bon état. toile de coton durable et confortable.',
    condition: 'very_good',
    size: 'xs',
    color: 'green',
    material: 'toile de coton',
    gender: 'homme'
  },
  {
    id: '898',
    name: 'Sweatshirts femme',
    price: 145,
    originalPrice: 207,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Sweatshirts femme authentique Lacoste. Excellent état. molleton durable et confortable.',
    condition: 'excellent',
    size: 's',
    color: 'red',
    material: 'molleton',
    gender: 'femme'
  },
  {
    id: '899',
    name: 'Polos femme',
    price: 95,
    originalPrice: 136,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Magnifique Polos femme de la collection Lacoste. Bon état. Matière premium en coton bio.',
    condition: 'good',
    size: 'xs',
    color: 'grey',
    material: 'coton bio',
    gender: 'femme'
  },
  {
    id: '900',
    name: 'Pantalons & Shorts homme',
    price: 29,
    originalPrice: 36,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Pantalons & Shorts homme en coton sergé. Très bon état. Coupe ajustée et confortable.',
    condition: 'very_good',
    size: 's',
    color: 'orange',
    material: 'coton sergé',
    gender: 'homme'
  },
  {
    id: '901',
    name: 'T-shirts homme',
    price: 41,
    originalPrice: 58,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique T-shirts homme de la collection Lacoste. Bon état. Matière premium en coton.',
    condition: 'good',
    size: 'xxl_and_more',
    color: 'beige',
    material: 'coton',
    gender: 'homme'
  },
  {
    id: '902',
    name: 'Pullovers homme',
    price: 48,
    originalPrice: 69,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Pullovers homme authentique Lacoste. Excellent état. coton tricoté durable et confortable.',
    condition: 'excellent',
    size: 'xxl_and_more',
    color: 'purple',
    material: 'coton tricoté',
    gender: 'homme'
  },
  {
    id: '903',
    name: 'Survêtements homme',
    price: 50,
    originalPrice: 72,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Survêtements homme authentique Lacoste. État neuf. matière stretch durable et confortable.',
    condition: 'new',
    size: 'xxl_and_more',
    color: 'green',
    material: 'matière stretch',
    gender: 'homme'
  },
  {
    id: '904',
    name: 'Pullovers homme',
    price: 203,
    originalPrice: 290,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique Pullovers homme de la collection Lacoste. Excellent état. Matière premium en cachemire.',
    condition: 'excellent',
    size: 'xxl_and_more',
    color: 'white',
    material: 'cachemire',
    gender: 'homme'
  },
  {
    id: '905',
    name: 'Survêtements femme',
    price: 47,
    originalPrice: 67,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Magnifique Survêtements femme de la collection Lacoste. Bon état. Matière premium en matière stretch.',
    condition: 'good',
    size: 'xl',
    color: 'beige',
    material: 'matière stretch',
    gender: 'femme'
  },
  {
    id: '906',
    name: 'Sweatshirts femme',
    price: 147,
    originalPrice: 184,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Sweatshirts femme élégant et intemporel. Très bon état. Fabriqué en molleton de haute qualité.',
    condition: 'very_good',
    size: 's',
    color: 'red',
    material: 'molleton',
    gender: 'femme'
  },
  {
    id: '907',
    name: 'Sweatshirts femme',
    price: 206,
    originalPrice: 257,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Magnifique Sweatshirts femme de la collection Lacoste. Très bon état. Matière premium en molleton.',
    condition: 'very_good',
    size: 's',
    color: 'brown',
    material: 'molleton',
    gender: 'femme'
  },
  {
    id: '908',
    name: 'Robes & Jupes femme',
    price: 195,
    originalPrice: 278,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Magnifique Robes & Jupes femme de la collection Lacoste. Excellent état. Matière premium en jersey.',
    condition: 'excellent',
    size: 'xl',
    color: 'orange',
    material: 'jersey',
    gender: 'femme'
  },
  {
    id: '909',
    name: 'Sweatshirts homme',
    price: 35,
    originalPrice: 44,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Magnifique Sweatshirts homme de la collection Lacoste. Très bon état. Matière premium en coton brossé.',
    condition: 'very_good',
    size: 'xs',
    color: 'purple',
    material: 'coton brossé',
    gender: 'homme'
  },
  {
    id: '910',
    name: 'Sweatshirts femme',
    price: 102,
    originalPrice: 145,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Sweatshirts femme authentique Lacoste. État neuf. jersey lourd durable et confortable.',
    condition: 'new',
    size: 's',
    color: 'white',
    material: 'jersey lourd',
    gender: 'femme'
  },
  {
    id: '911',
    name: 'Sweatshirts femme',
    price: 22,
    originalPrice: 31,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Sweatshirts femme élégant et intemporel. Excellent état. Fabriqué en molleton de haute qualité.',
    condition: 'excellent',
    size: 'xxl_and_more',
    color: 'blue',
    material: 'molleton',
    gender: 'femme'
  },
  {
    id: '912',
    name: 'T-shirts homme',
    price: 140,
    originalPrice: 175,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe T-shirts homme en coton. Très bon état. Coupe ajustée et confortable.',
    condition: 'very_good',
    size: 'm',
    color: 'orange',
    material: 'coton',
    gender: 'homme'
  },
  {
    id: '913',
    name: 'T-shirts femme',
    price: 92,
    originalPrice: 132,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Magnifique T-shirts femme de la collection Lacoste. Excellent état. Matière premium en coton.',
    condition: 'excellent',
    size: 'l',
    color: 'black',
    material: 'coton',
    gender: 'femme'
  },
  {
    id: '914',
    name: 'Robes & Jupes femme',
    price: 101,
    originalPrice: 144,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique Robes & Jupes femme de la collection Lacoste. Bon état. Matière premium en crêpe.',
    condition: 'good',
    size: 'xs',
    color: 'purple',
    material: 'crêpe',
    gender: 'femme'
  },
  {
    id: '915',
    name: 'T-shirts femme',
    price: 24,
    originalPrice: 34,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'T-shirts femme élégant et intemporel. État neuf. Fabriqué en jersey fin de haute qualité.',
    condition: 'new',
    size: 'xl',
    color: 'green',
    material: 'jersey fin',
    gender: 'femme'
  },
  {
    id: '916',
    name: 'Tops & Chemises femme',
    price: 138,
    originalPrice: 173,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Magnifique Tops & Chemises femme de la collection Lacoste. Très bon état. Matière premium en viscose.',
    condition: 'very_good',
    size: 'xxl_and_more',
    color: 'grey',
    material: 'viscose',
    gender: 'femme'
  },
  {
    id: '917',
    name: 'Chemises homme',
    price: 126,
    originalPrice: 158,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Chemises homme authentique Lacoste. Très bon état. lin durable et confortable.',
    condition: 'very_good',
    size: 'm',
    color: 'pink',
    material: 'lin',
    gender: 'homme'
  },
  {
    id: '918',
    name: 'Polos femme',
    price: 103,
    originalPrice: 147,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Polos femme authentique Lacoste. Bon état. coton bio durable et confortable.',
    condition: 'good',
    size: 'm',
    color: 'red',
    material: 'coton bio',
    gender: 'femme'
  },
  {
    id: '919',
    name: 'Manteaux & Vestes homme',
    price: 64,
    originalPrice: 80,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Magnifique Manteaux & Vestes homme de la collection Lacoste. Très bon état. Matière premium en coton imperméable.',
    condition: 'very_good',
    size: 'xl',
    color: 'pink',
    material: 'coton imperméable',
    gender: 'homme'
  },
  {
    id: '920',
    name: 'Maroquinerie homme',
    price: 195,
    originalPrice: 279,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Maroquinerie homme en cuir. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 'l',
    color: 'orange',
    material: 'cuir',
    gender: 'homme'
  },
  {
    id: '921',
    name: 'Pantalons & Shorts homme',
    price: 95,
    originalPrice: 119,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Pantalons & Shorts homme élégant et intemporel. Très bon état. Fabriqué en toile de coton de haute qualité.',
    condition: 'very_good',
    size: 'm',
    color: 'grey',
    material: 'toile de coton',
    gender: 'homme'
  },
  {
    id: '922',
    name: 'Polos homme',
    price: 189,
    originalPrice: 270,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Polos homme authentique Lacoste. État neuf. coton piqué durable et confortable.',
    condition: 'new',
    size: 'l',
    color: 'green',
    material: 'coton piqué',
    gender: 'homme'
  },
  {
    id: '923',
    name: 'Pullovers homme',
    price: 92,
    originalPrice: 132,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Pullovers homme authentique Lacoste. Excellent état. cachemire durable et confortable.',
    condition: 'excellent',
    size: 'xl',
    color: 'brown',
    material: 'cachemire',
    gender: 'homme'
  },
  {
    id: '924',
    name: 'Polos homme',
    price: 80,
    originalPrice: 100,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Polos homme en coton bio. Très bon état. Coupe ajustée et confortable.',
    condition: 'very_good',
    size: 's',
    color: 'blue',
    material: 'coton bio',
    gender: 'homme'
  },
  {
    id: '925',
    name: 'Pullovers homme',
    price: 96,
    originalPrice: 120,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Pullovers homme élégant et intemporel. Très bon état. Fabriqué en cachemire de haute qualité.',
    condition: 'very_good',
    size: 's',
    color: 'blue',
    material: 'cachemire',
    gender: 'homme'
  },
  {
    id: '926',
    name: 'Pullovers femme',
    price: 159,
    originalPrice: 227,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique Pullovers femme de la collection Lacoste. État neuf. Matière premium en cachemire.',
    condition: 'new',
    size: 'l',
    color: 'white',
    material: 'cachemire',
    gender: 'femme'
  },
  {
    id: '927',
    name: 'Pullovers homme',
    price: 81,
    originalPrice: 101,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Pullovers homme en laine mérinos. Très bon état. Coupe ajustée et confortable.',
    condition: 'very_good',
    size: 'm',
    color: 'grey',
    material: 'laine mérinos',
    gender: 'homme'
  },
  {
    id: '928',
    name: 'Polos homme',
    price: 193,
    originalPrice: 276,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique Polos homme de la collection Lacoste. Bon état. Matière premium en jersey de coton.',
    condition: 'good',
    size: 'm',
    color: 'brown',
    material: 'jersey de coton',
    gender: 'homme'
  },
  {
    id: '929',
    name: 'Pantalons & Shorts femme',
    price: 219,
    originalPrice: 274,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Pantalons & Shorts femme élégant et intemporel. Très bon état. Fabriqué en toile de coton de haute qualité.',
    condition: 'very_good',
    size: 'm',
    color: 'beige',
    material: 'toile de coton',
    gender: 'femme'
  },
  {
    id: '930',
    name: 'Sweatshirts femme',
    price: 26,
    originalPrice: 32,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Magnifique Sweatshirts femme de la collection Lacoste. Très bon état. Matière premium en jersey lourd.',
    condition: 'very_good',
    size: 'xl',
    color: 'orange',
    material: 'jersey lourd',
    gender: 'femme'
  },
  {
    id: '931',
    name: 'Pullovers homme',
    price: 101,
    originalPrice: 144,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Pullovers homme élégant et intemporel. Bon état. Fabriqué en laine mérinos de haute qualité.',
    condition: 'good',
    size: 's',
    color: 'white',
    material: 'laine mérinos',
    gender: 'homme'
  },
  {
    id: '932',
    name: 'Pullovers homme',
    price: 89,
    originalPrice: 127,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Magnifique Pullovers homme de la collection Lacoste. État neuf. Matière premium en coton tricoté.',
    condition: 'new',
    size: 'l',
    color: 'yellow',
    material: 'coton tricoté',
    gender: 'homme'
  },
  {
    id: '933',
    name: 'Pullovers homme',
    price: 55,
    originalPrice: 78,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Pullovers homme en laine mérinos. Excellent état. Coupe ajustée et confortable.',
    condition: 'excellent',
    size: 'xs',
    color: 'purple',
    material: 'laine mérinos',
    gender: 'homme'
  },
  {
    id: '934',
    name: 'Pantalons & Shorts femme',
    price: 132,
    originalPrice: 188,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Pantalons & Shorts femme élégant et intemporel. Excellent état. Fabriqué en toile de coton de haute qualité.',
    condition: 'excellent',
    size: 's',
    color: 'black',
    material: 'toile de coton',
    gender: 'femme'
  },
  {
    id: '935',
    name: 'Robes & Jupes femme',
    price: 199,
    originalPrice: 284,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Robes & Jupes femme authentique Lacoste. Excellent état. crêpe durable et confortable.',
    condition: 'excellent',
    size: 'xs',
    color: 'grey',
    material: 'crêpe',
    gender: 'femme'
  },
  {
    id: '936',
    name: 'Pullovers homme',
    price: 94,
    originalPrice: 134,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Pullovers homme en cachemire. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'm',
    color: 'white',
    material: 'cachemire',
    gender: 'homme'
  },
  {
    id: '937',
    name: 'Pantalons & Shorts femme',
    price: 132,
    originalPrice: 189,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Pantalons & Shorts femme élégant et intemporel. Excellent état. Fabriqué en toile de coton de haute qualité.',
    condition: 'excellent',
    size: 'xs',
    color: 'black',
    material: 'toile de coton',
    gender: 'femme'
  },
  {
    id: '938',
    name: 'Pantalons & Shorts homme',
    price: 66,
    originalPrice: 83,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Magnifique Pantalons & Shorts homme de la collection Lacoste. Très bon état. Matière premium en coton sergé.',
    condition: 'very_good',
    size: 's',
    color: 'black',
    material: 'coton sergé',
    gender: 'homme'
  },
  {
    id: '939',
    name: 'Pullovers homme',
    price: 141,
    originalPrice: 201,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Pullovers homme en laine mérinos. Excellent état. Coupe ajustée et confortable.',
    condition: 'excellent',
    size: 'xl',
    color: 'white',
    material: 'laine mérinos',
    gender: 'homme'
  },
  {
    id: '940',
    name: 'Tops & Chemises femme',
    price: 44,
    originalPrice: 63,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Tops & Chemises femme authentique Lacoste. Excellent état. popeline de coton durable et confortable.',
    condition: 'excellent',
    size: 'm',
    color: 'beige',
    material: 'popeline de coton',
    gender: 'femme'
  },
  {
    id: '941',
    name: 'Tops & Chemises femme',
    price: 27,
    originalPrice: 39,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Tops & Chemises femme authentique Lacoste. Bon état. popeline de coton durable et confortable.',
    condition: 'good',
    size: 'xxl_and_more',
    color: 'blue',
    material: 'popeline de coton',
    gender: 'femme'
  },
  {
    id: '942',
    name: 'T-shirts homme',
    price: 160,
    originalPrice: 200,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'T-shirts homme authentique Lacoste. Très bon état. coton durable et confortable.',
    condition: 'very_good',
    size: 's',
    color: 'blue',
    material: 'coton',
    gender: 'homme'
  },
  {
    id: '943',
    name: 'T-shirts femme',
    price: 93,
    originalPrice: 133,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe T-shirts femme en jersey fin. Excellent état. Coupe ajustée et confortable.',
    condition: 'excellent',
    size: 'xs',
    color: 'beige',
    material: 'jersey fin',
    gender: 'femme'
  },
  {
    id: '944',
    name: 'Survêtements femme',
    price: 179,
    originalPrice: 255,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Survêtements femme authentique Lacoste. Bon état. matière stretch durable et confortable.',
    condition: 'good',
    size: 's',
    color: 'red',
    material: 'matière stretch',
    gender: 'femme'
  },
  {
    id: '945',
    name: 'Survêtements femme',
    price: 88,
    originalPrice: 125,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Survêtements femme en polyester technique. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'xl',
    color: 'orange',
    material: 'polyester technique',
    gender: 'femme'
  },
  {
    id: '946',
    name: 'Survêtements femme',
    price: 158,
    originalPrice: 226,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Survêtements femme authentique Lacoste. Excellent état. polyester technique durable et confortable.',
    condition: 'excellent',
    size: 'xs',
    color: 'green',
    material: 'polyester technique',
    gender: 'femme'
  },
  {
    id: '947',
    name: 'Survêtements homme',
    price: 78,
    originalPrice: 111,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Magnifique Survêtements homme de la collection Lacoste. État neuf. Matière premium en polyester technique.',
    condition: 'new',
    size: 'm',
    color: 'green',
    material: 'polyester technique',
    gender: 'homme'
  },
  {
    id: '948',
    name: 'Pullovers homme',
    price: 53,
    originalPrice: 66,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Pullovers homme authentique Lacoste. Très bon état. cachemire durable et confortable.',
    condition: 'very_good',
    size: 'l',
    color: 'orange',
    material: 'cachemire',
    gender: 'homme'
  },
  {
    id: '949',
    name: 'Chemises femme',
    price: 187,
    originalPrice: 267,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique Chemises femme de la collection Lacoste. Excellent état. Matière premium en oxford.',
    condition: 'excellent',
    size: 'm',
    color: 'brown',
    material: 'oxford',
    gender: 'femme'
  },
  {
    id: '950',
    name: 'Pantalons & Shorts homme',
    price: 172,
    originalPrice: 245,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Pantalons & Shorts homme élégant et intemporel. Excellent état. Fabriqué en gabardine de haute qualité.',
    condition: 'excellent',
    size: 'xs',
    color: 'yellow',
    material: 'gabardine',
    gender: 'homme'
  },
  {
    id: '951',
    name: 'T-shirts homme',
    price: 55,
    originalPrice: 78,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'T-shirts homme authentique Lacoste. État neuf. jersey fin durable et confortable.',
    condition: 'new',
    size: 'l',
    color: 'red',
    material: 'jersey fin',
    gender: 'homme'
  },
  {
    id: '952',
    name: 'Chemises homme',
    price: 73,
    originalPrice: 104,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Chemises homme en lin. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 'm',
    color: 'white',
    material: 'lin',
    gender: 'homme'
  },
  {
    id: '953',
    name: 'Manteaux & Vestes homme',
    price: 142,
    originalPrice: 203,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Magnifique Manteaux & Vestes homme de la collection Lacoste. État neuf. Matière premium en laine.',
    condition: 'new',
    size: 'xxl_and_more',
    color: 'yellow',
    material: 'laine',
    gender: 'homme'
  },
  {
    id: '954',
    name: 'Sweatshirts femme',
    price: 113,
    originalPrice: 162,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Sweatshirts femme élégant et intemporel. Bon état. Fabriqué en molleton de haute qualité.',
    condition: 'good',
    size: 's',
    color: 'pink',
    material: 'molleton',
    gender: 'femme'
  },
  {
    id: '955',
    name: 'Pantalons & Shorts homme',
    price: 72,
    originalPrice: 103,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Magnifique Pantalons & Shorts homme de la collection Lacoste. Excellent état. Matière premium en toile de coton.',
    condition: 'excellent',
    size: 'xs',
    color: 'pink',
    material: 'toile de coton',
    gender: 'homme'
  },
  {
    id: '956',
    name: 'Tops & Chemises femme',
    price: 176,
    originalPrice: 251,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Tops & Chemises femme élégant et intemporel. Bon état. Fabriqué en popeline de coton de haute qualité.',
    condition: 'good',
    size: 'l',
    color: 'yellow',
    material: 'popeline de coton',
    gender: 'femme'
  },
  {
    id: '957',
    name: 'Maroquinerie femme',
    price: 161,
    originalPrice: 201,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Maroquinerie femme élégant et intemporel. Très bon état. Fabriqué en cuir de haute qualité.',
    condition: 'very_good',
    size: 'm',
    color: 'beige',
    material: 'cuir',
    gender: 'femme'
  },
  {
    id: '958',
    name: 'Robes & Jupes femme',
    price: 169,
    originalPrice: 241,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique Robes & Jupes femme de la collection Lacoste. État neuf. Matière premium en jersey.',
    condition: 'new',
    size: 'xxl_and_more',
    color: 'yellow',
    material: 'jersey',
    gender: 'femme'
  },
  {
    id: '959',
    name: 'Pantalons & Shorts homme',
    price: 71,
    originalPrice: 101,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Pantalons & Shorts homme élégant et intemporel. Excellent état. Fabriqué en coton sergé de haute qualité.',
    condition: 'excellent',
    size: 'xxl_and_more',
    color: 'black',
    material: 'coton sergé',
    gender: 'homme'
  },
  {
    id: '960',
    name: 'Chemises homme',
    price: 28,
    originalPrice: 40,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Chemises homme en popeline. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'm',
    color: 'beige',
    material: 'popeline',
    gender: 'homme'
  },
  {
    id: '961',
    name: 'T-shirts homme',
    price: 190,
    originalPrice: 271,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique T-shirts homme de la collection Lacoste. État neuf. Matière premium en coton.',
    condition: 'new',
    size: 'l',
    color: 'blue',
    material: 'coton',
    gender: 'homme'
  },
  {
    id: '962',
    name: 'Survêtements homme',
    price: 56,
    originalPrice: 80,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Survêtements homme authentique Lacoste. État neuf. polyester technique durable et confortable.',
    condition: 'new',
    size: 'xl',
    color: 'brown',
    material: 'polyester technique',
    gender: 'homme'
  },
  {
    id: '963',
    name: 'Robes & Jupes femme',
    price: 139,
    originalPrice: 199,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Robes & Jupes femme authentique Lacoste. Bon état. crêpe durable et confortable.',
    condition: 'good',
    size: 'xs',
    color: 'yellow',
    material: 'crêpe',
    gender: 'femme'
  },
  {
    id: '964',
    name: 'Manteaux & Vestes femme',
    price: 134,
    originalPrice: 192,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Magnifique Manteaux & Vestes femme de la collection Lacoste. Excellent état. Matière premium en polyester recyclé.',
    condition: 'excellent',
    size: 'm',
    color: 'red',
    material: 'polyester recyclé',
    gender: 'femme'
  },
  {
    id: '965',
    name: 'Sweatshirts homme',
    price: 136,
    originalPrice: 194,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Sweatshirts homme authentique Lacoste. État neuf. coton brossé durable et confortable.',
    condition: 'new',
    size: 'xs',
    color: 'white',
    material: 'coton brossé',
    gender: 'homme'
  },
  {
    id: '966',
    name: 'Maroquinerie femme',
    price: 76,
    originalPrice: 108,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Maroquinerie femme en toile enduite. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 'l',
    color: 'black',
    material: 'toile enduite',
    gender: 'femme'
  },
  {
    id: '967',
    name: 'T-shirts homme',
    price: 165,
    originalPrice: 206,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe T-shirts homme en coton. Très bon état. Coupe ajustée et confortable.',
    condition: 'very_good',
    size: 'xl',
    color: 'black',
    material: 'coton',
    gender: 'homme'
  },
  {
    id: '968',
    name: 'Tops & Chemises femme',
    price: 222,
    originalPrice: 278,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description:
      'Magnifique Tops & Chemises femme de la collection Lacoste. Très bon état. Matière premium en popeline de coton.',
    condition: 'very_good',
    size: 'xl',
    color: 'beige',
    material: 'popeline de coton',
    gender: 'femme'
  },
  {
    id: '969',
    name: 'Survêtements femme',
    price: 48,
    originalPrice: 68,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Survêtements femme élégant et intemporel. Bon état. Fabriqué en coton molletonné de haute qualité.',
    condition: 'good',
    size: 'xxl_and_more',
    color: 'purple',
    material: 'coton molletonné',
    gender: 'femme'
  },
  {
    id: '970',
    name: 'Chemises femme',
    price: 106,
    originalPrice: 151,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Chemises femme en oxford. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'm',
    color: 'pink',
    material: 'oxford',
    gender: 'femme'
  },
  {
    id: '971',
    name: 'T-shirts homme',
    price: 171,
    originalPrice: 244,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'T-shirts homme authentique Lacoste. État neuf. jersey fin durable et confortable.',
    condition: 'new',
    size: 'xs',
    color: 'green',
    material: 'jersey fin',
    gender: 'homme'
  },
  {
    id: '972',
    name: 'Polos femme',
    price: 71,
    originalPrice: 89,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Polos femme authentique Lacoste. Très bon état. jersey de coton durable et confortable.',
    condition: 'very_good',
    size: 'xs',
    color: 'red',
    material: 'jersey de coton',
    gender: 'femme'
  },
  {
    id: '973',
    name: 'Polos homme',
    price: 213,
    originalPrice: 266,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Polos homme authentique Lacoste. Très bon état. coton piqué durable et confortable.',
    condition: 'very_good',
    size: 'xxl_and_more',
    color: 'yellow',
    material: 'coton piqué',
    gender: 'homme'
  },
  {
    id: '974',
    name: 'Manteaux & Vestes femme',
    price: 182,
    originalPrice: 260,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Magnifique Manteaux & Vestes femme de la collection Lacoste. Excellent état. Matière premium en polyester recyclé.',
    condition: 'excellent',
    size: 'm',
    color: 'red',
    material: 'polyester recyclé',
    gender: 'femme'
  },
  {
    id: '975',
    name: 'Chemises homme',
    price: 134,
    originalPrice: 191,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe Chemises homme en popeline. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'xl',
    color: 'red',
    material: 'popeline',
    gender: 'homme'
  },
  {
    id: '976',
    name: 'Maroquinerie homme',
    price: 195,
    originalPrice: 278,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Maroquinerie homme en cuir. Excellent état. Coupe ajustée et confortable.',
    condition: 'excellent',
    size: 's',
    color: 'purple',
    material: 'cuir',
    gender: 'homme'
  },
  {
    id: '977',
    name: 'Sweatshirts homme',
    price: 127,
    originalPrice: 182,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Sweatshirts homme authentique Lacoste. État neuf. molleton durable et confortable.',
    condition: 'new',
    size: 'xs',
    color: 'blue',
    material: 'molleton',
    gender: 'homme'
  },
  {
    id: '978',
    name: 'Survêtements femme',
    price: 155,
    originalPrice: 222,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Survêtements femme authentique Lacoste. État neuf. polyester technique durable et confortable.',
    condition: 'new',
    size: 'xl',
    color: 'purple',
    material: 'polyester technique',
    gender: 'femme'
  },
  {
    id: '979',
    name: 'Pantalons & Shorts homme',
    price: 198,
    originalPrice: 283,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Pantalons & Shorts homme élégant et intemporel. Bon état. Fabriqué en toile de coton de haute qualité.',
    condition: 'good',
    size: 'xs',
    color: 'grey',
    material: 'toile de coton',
    gender: 'homme'
  },
  {
    id: '980',
    name: 'Maroquinerie homme',
    price: 152,
    originalPrice: 190,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Maroquinerie homme authentique Lacoste. Très bon état. nylon durable et confortable.',
    condition: 'very_good',
    size: 'xxl_and_more',
    color: 'grey',
    material: 'nylon',
    gender: 'homme'
  },
  {
    id: '981',
    name: 'Pullovers femme',
    price: 52,
    originalPrice: 74,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Pullovers femme élégant et intemporel. Bon état. Fabriqué en coton tricoté de haute qualité.',
    condition: 'good',
    size: 'xxl_and_more',
    color: 'orange',
    material: 'coton tricoté',
    gender: 'femme'
  },
  {
    id: '982',
    name: 'Polos homme',
    price: 54,
    originalPrice: 67,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Magnifique Polos homme de la collection Lacoste. Très bon état. Matière premium en coton bio.',
    condition: 'very_good',
    size: 's',
    color: 'white',
    material: 'coton bio',
    gender: 'homme'
  },
  {
    id: '983',
    name: 'T-shirts homme',
    price: 39,
    originalPrice: 55,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'T-shirts homme authentique Lacoste. Excellent état. coton organique durable et confortable.',
    condition: 'excellent',
    size: 'm',
    color: 'purple',
    material: 'coton organique',
    gender: 'homme'
  },
  {
    id: '984',
    name: 'Polos femme',
    price: 182,
    originalPrice: 228,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Polos femme authentique Lacoste. Très bon état. coton bio durable et confortable.',
    condition: 'very_good',
    size: 'xxl_and_more',
    color: 'green',
    material: 'coton bio',
    gender: 'femme'
  },
  {
    id: '985',
    name: 'Sweatshirts femme',
    price: 202,
    originalPrice: 289,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Sweatshirts femme élégant et intemporel. Bon état. Fabriqué en coton brossé de haute qualité.',
    condition: 'good',
    size: 'xs',
    color: 'green',
    material: 'coton brossé',
    gender: 'femme'
  },
  {
    id: '986',
    name: 'Tops & Chemises femme',
    price: 33,
    originalPrice: 47,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description:
      'Magnifique Tops & Chemises femme de la collection Lacoste. Excellent état. Matière premium en popeline de coton.',
    condition: 'excellent',
    size: 'l',
    color: 'white',
    material: 'popeline de coton',
    gender: 'femme'
  },
  {
    id: '987',
    name: 'Pantalons & Shorts femme',
    price: 172,
    originalPrice: 246,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Pantalons & Shorts femme authentique Lacoste. État neuf. gabardine durable et confortable.',
    condition: 'new',
    size: 'xxl_and_more',
    color: 'orange',
    material: 'gabardine',
    gender: 'femme'
  },
  {
    id: '988',
    name: 'Sweatshirts homme',
    price: 47,
    originalPrice: 67,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Sweatshirts homme élégant et intemporel. Bon état. Fabriqué en coton brossé de haute qualité.',
    condition: 'good',
    size: 's',
    color: 'red',
    material: 'coton brossé',
    gender: 'homme'
  },
  {
    id: '989',
    name: 'Polos femme',
    price: 135,
    originalPrice: 193,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Polos femme authentique Lacoste. Bon état. coton piqué durable et confortable.',
    condition: 'good',
    size: 'm',
    color: 'blue',
    material: 'coton piqué',
    gender: 'femme'
  },
  {
    id: '990',
    name: 'Polos femme',
    price: 36,
    originalPrice: 52,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Polos femme authentique Lacoste. Bon état. jersey de coton durable et confortable.',
    condition: 'good',
    size: 'xxl_and_more',
    color: 'pink',
    material: 'jersey de coton',
    gender: 'femme'
  },
  {
    id: '991',
    name: 'T-shirts homme',
    price: 203,
    originalPrice: 290,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Superbe T-shirts homme en jersey fin. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 's',
    color: 'red',
    material: 'jersey fin',
    gender: 'homme'
  },
  {
    id: '992',
    name: 'Polos femme',
    price: 162,
    originalPrice: 231,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Polos femme élégant et intemporel. État neuf. Fabriqué en coton bio de haute qualité.',
    condition: 'new',
    size: 'xl',
    color: 'orange',
    material: 'coton bio',
    gender: 'femme'
  },
  {
    id: '993',
    name: 'T-shirts femme',
    price: 199,
    originalPrice: 284,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'T-shirts femme élégant et intemporel. Excellent état. Fabriqué en coton organique de haute qualité.',
    condition: 'excellent',
    size: 'xs',
    color: 'beige',
    material: 'coton organique',
    gender: 'femme'
  },
  {
    id: '994',
    name: 'Manteaux & Vestes homme',
    price: 109,
    originalPrice: 156,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Magnifique Manteaux & Vestes homme de la collection Lacoste. État neuf. Matière premium en laine.',
    condition: 'new',
    size: 'xs',
    color: 'purple',
    material: 'laine',
    gender: 'homme'
  },
  {
    id: '995',
    name: 'Survêtements homme',
    price: 134,
    originalPrice: 191,
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    description: 'Survêtements homme authentique Lacoste. Excellent état. polyester technique durable et confortable.',
    condition: 'excellent',
    size: 'xl',
    color: 'brown',
    material: 'polyester technique',
    gender: 'homme'
  },
  {
    id: '996',
    name: 'Maroquinerie femme',
    price: 146,
    originalPrice: 209,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Maroquinerie femme en cuir. Excellent état. Coupe ajustée et confortable.',
    condition: 'excellent',
    size: 'm',
    color: 'red',
    material: 'cuir',
    gender: 'femme'
  },
  {
    id: '997',
    name: 'Survêtements homme',
    price: 210,
    originalPrice: 300,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Survêtements homme élégant et intemporel. État neuf. Fabriqué en coton molletonné de haute qualité.',
    condition: 'new',
    size: 's',
    color: 'black',
    material: 'coton molletonné',
    gender: 'homme'
  },
  {
    id: '998',
    name: 'T-shirts homme',
    price: 97,
    originalPrice: 139,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe T-shirts homme en coton. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'l',
    color: 'white',
    material: 'coton',
    gender: 'homme'
  },
  {
    id: '999',
    name: 'Pantalons & Shorts homme',
    price: 122,
    originalPrice: 175,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Pantalons & Shorts homme en gabardine. Bon état. Coupe ajustée et confortable.',
    condition: 'good',
    size: 'l',
    color: 'yellow',
    material: 'gabardine',
    gender: 'homme'
  },
  {
    id: '1000',
    name: 'Pullovers femme',
    price: 174,
    originalPrice: 248,
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    description: 'Superbe Pullovers femme en coton tricoté. État neuf. Coupe ajustée et confortable.',
    condition: 'new',
    size: 'm',
    color: 'white',
    material: 'coton tricoté',
    gender: 'femme'
  }
]
