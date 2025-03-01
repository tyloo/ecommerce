import { AVAILABLE_CONDITIONS } from '../schema'

type Product = {
  slug: string
  name: string
  description: string
  price: number
  originalPrice: number
  condition: AVAILABLE_CONDITIONS
  size: string
  color: string
  images: string[]
  collections: string[]
}

export const products: Product[] = [
  {
    slug: '1-survetements-femme-l-pink-excellent',
    name: 'Survêtements femme',
    description: 'Survêtements femme authentique Lacoste. Excellent état. polyester technique durable et confortable.',
    price: 120,
    originalPrice: 171,
    condition: 'excellent',
    size: 'l',
    color: 'pink',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-survetements', 'femme-l']
  },
  {
    slug: '2-manteaux-and-vestes-femme-l-blue-good',
    name: 'Manteaux & Vestes femme',
    description: 'Magnifique Manteaux & Vestes femme de la collection Lacoste. Bon état. Matière premium en laine.',
    price: 42,
    originalPrice: 60,
    condition: 'good',
    size: 'l',
    color: 'blue',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-l']
  },
  {
    slug: '3-polos-femme-s-brown-good',
    name: 'Polos femme',
    description: 'Magnifique Polos femme de la collection Lacoste. Bon état. Matière premium en jersey de coton.',
    price: 111,
    originalPrice: 158,
    condition: 'good',
    size: 's',
    color: 'brown',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-polos', 'femme-s']
  },
  {
    slug: '4-t-shirts-femme-xs-green-very_good',
    name: 'T-shirts femme',
    description: 'T-shirts femme authentique Lacoste. Très bon état. coton durable et confortable.',
    price: 144,
    originalPrice: 180,
    condition: 'very_good',
    size: 'xs',
    color: 'green',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-xs']
  },
  {
    slug: '5-pullovers-homme-2xl-et-plus-beige-very_good',
    name: 'Pullovers homme',
    description: 'Superbe Pullovers homme en coton tricoté. Très bon état. Coupe ajustée et confortable.',
    price: 63,
    originalPrice: 79,
    condition: 'very_good',
    size: '2xl-et-plus',
    color: 'beige',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-pullovers', 'homme-2xl-et-plus']
  },
  {
    slug: '6-chemises-femme-xs-black-new',
    name: 'Chemises femme',
    description: 'Chemises femme élégant et intemporel. État neuf. Fabriqué en lin de haute qualité.',
    price: 138,
    originalPrice: 197,
    condition: 'new',
    size: 'xs',
    color: 'black',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-xs']
  },
  {
    slug: '7-manteaux-and-vestes-homme-xl-green-excellent',
    name: 'Manteaux & Vestes homme',
    description:
      'Magnifique Manteaux & Vestes homme de la collection Lacoste. Excellent état. Matière premium en laine.',
    price: 190,
    originalPrice: 272,
    condition: 'excellent',
    size: 'xl',
    color: 'green',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-xl']
  },
  {
    slug: '8-sweatshirts-homme-xl-yellow-new',
    name: 'Sweatshirts homme',
    description: 'Magnifique Sweatshirts homme de la collection Lacoste. État neuf. Matière premium en jersey lourd.',
    price: 102,
    originalPrice: 145,
    condition: 'new',
    size: 'xl',
    color: 'yellow',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-sweatshirts', 'homme-xl']
  },
  {
    slug: '9-tops-and-chemises-femme-s-brown-very_good',
    name: 'Tops & Chemises femme',
    description: 'Superbe Tops & Chemises femme en soie. Très bon état. Coupe ajustée et confortable.',
    price: 94,
    originalPrice: 118,
    condition: 'very_good',
    size: 's',
    color: 'brown',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-s']
  },
  {
    slug: '10-t-shirts-femme-m-beige-very_good',
    name: 'T-shirts femme',
    description: 'Superbe T-shirts femme en coton. Très bon état. Coupe ajustée et confortable.',
    price: 146,
    originalPrice: 182,
    condition: 'very_good',
    size: 'm',
    color: 'beige',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-m']
  },
  {
    slug: '11-sweatshirts-femme-s-brown-very_good',
    name: 'Sweatshirts femme',
    description: 'Sweatshirts femme authentique Lacoste. Très bon état. jersey lourd durable et confortable.',
    price: 230,
    originalPrice: 288,
    condition: 'very_good',
    size: 's',
    color: 'brown',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-sweatshirts', 'femme-s']
  },
  {
    slug: '12-survetements-homme-xs-black-excellent',
    name: 'Survêtements homme',
    description: 'Survêtements homme authentique Lacoste. Excellent état. polyester technique durable et confortable.',
    price: 128,
    originalPrice: 183,
    condition: 'excellent',
    size: 'xs',
    color: 'black',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-survetements', 'homme-xs']
  },
  {
    slug: '13-pullovers-femme-2xl-et-plus-green-good',
    name: 'Pullovers femme',
    description: 'Superbe Pullovers femme en laine mérinos. Bon état. Coupe ajustée et confortable.',
    price: 199,
    originalPrice: 284,
    condition: 'good',
    size: '2xl-et-plus',
    color: 'green',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-pullovers', 'femme-2xl-et-plus']
  },
  {
    slug: '14-chemises-femme-2xl-et-plus-beige-good',
    name: 'Chemises femme',
    description: 'Chemises femme authentique Lacoste. Bon état. lin durable et confortable.',
    price: 79,
    originalPrice: 113,
    condition: 'good',
    size: '2xl-et-plus',
    color: 'beige',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-2xl-et-plus']
  },
  {
    slug: '15-survetements-homme-s-grey-new',
    name: 'Survêtements homme',
    description: 'Survêtements homme élégant et intemporel. État neuf. Fabriqué en coton molletonné de haute qualité.',
    price: 157,
    originalPrice: 224,
    condition: 'new',
    size: 's',
    color: 'grey',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-survetements', 'homme-s']
  },
  {
    slug: '16-pantalons-and-shorts-homme-xl-grey-excellent',
    name: 'Pantalons & Shorts homme',
    description: 'Superbe Pantalons & Shorts homme en coton sergé. Excellent état. Coupe ajustée et confortable.',
    price: 188,
    originalPrice: 268,
    condition: 'excellent',
    size: 'xl',
    color: 'grey',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-xl']
  },
  {
    slug: '17-pullovers-homme-xl-red-new',
    name: 'Pullovers homme',
    description: 'Pullovers homme authentique Lacoste. État neuf. laine mérinos durable et confortable.',
    price: 34,
    originalPrice: 49,
    condition: 'new',
    size: 'xl',
    color: 'red',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-pullovers', 'homme-xl']
  },
  {
    slug: '18-pantalons-and-shorts-femme-xl-beige-very_good',
    name: 'Pantalons & Shorts femme',
    description: 'Pantalons & Shorts femme authentique Lacoste. Très bon état. coton sergé durable et confortable.',
    price: 59,
    originalPrice: 74,
    condition: 'very_good',
    size: 'xl',
    color: 'beige',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-xl']
  },
  {
    slug: '19-t-shirts-femme-2xl-et-plus-beige-very_good',
    name: 'T-shirts femme',
    description:
      'Magnifique T-shirts femme de la collection Lacoste. Très bon état. Matière premium en coton organique.',
    price: 227,
    originalPrice: 284,
    condition: 'very_good',
    size: '2xl-et-plus',
    color: 'beige',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-2xl-et-plus']
  },
  {
    slug: '20-tops-and-chemises-femme-2xl-et-plus-orange-good',
    name: 'Tops & Chemises femme',
    description: 'Tops & Chemises femme authentique Lacoste. Bon état. viscose durable et confortable.',
    price: 183,
    originalPrice: 262,
    condition: 'good',
    size: '2xl-et-plus',
    color: 'orange',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-2xl-et-plus']
  },
  {
    slug: '21-sweatshirts-homme-2xl-et-plus-white-good',
    name: 'Sweatshirts homme',
    description: 'Sweatshirts homme authentique Lacoste. Bon état. coton brossé durable et confortable.',
    price: 97,
    originalPrice: 138,
    condition: 'good',
    size: '2xl-et-plus',
    color: 'white',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-sweatshirts', 'homme-2xl-et-plus']
  },
  {
    slug: '22-sweatshirts-femme-xl-pink-good',
    name: 'Sweatshirts femme',
    description: 'Sweatshirts femme élégant et intemporel. Bon état. Fabriqué en jersey lourd de haute qualité.',
    price: 96,
    originalPrice: 137,
    condition: 'good',
    size: 'xl',
    color: 'pink',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-sweatshirts', 'femme-xl']
  },
  {
    slug: '23-polos-homme-s-pink-good',
    name: 'Polos homme',
    description: 'Polos homme authentique Lacoste. Bon état. jersey de coton durable et confortable.',
    price: 36,
    originalPrice: 52,
    condition: 'good',
    size: 's',
    color: 'pink',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-polos', 'homme-s']
  },
  {
    slug: '24-manteaux-and-vestes-homme-xs-blue-good',
    name: 'Manteaux & Vestes homme',
    description: 'Superbe Manteaux & Vestes homme en coton imperméable. Bon état. Coupe ajustée et confortable.',
    price: 55,
    originalPrice: 79,
    condition: 'good',
    size: 'xs',
    color: 'blue',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-xs']
  },
  {
    slug: '25-maroquinerie-femme-m-blue-good',
    name: 'Maroquinerie femme',
    description: 'Maroquinerie femme élégant et intemporel. Bon état. Fabriqué en toile enduite de haute qualité.',
    price: 52,
    originalPrice: 74,
    condition: 'good',
    size: 'm',
    color: 'blue',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-m']
  },
  {
    slug: '26-maroquinerie-homme-xs-yellow-good',
    name: 'Maroquinerie homme',
    description: 'Maroquinerie homme authentique Lacoste. Bon état. nylon durable et confortable.',
    price: 55,
    originalPrice: 79,
    condition: 'good',
    size: 'xs',
    color: 'yellow',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-maroquinerie', 'homme-xs']
  },
  {
    slug: '27-chemises-homme-xs-red-new',
    name: 'Chemises homme',
    description: 'Chemises homme élégant et intemporel. État neuf. Fabriqué en popeline de haute qualité.',
    price: 48,
    originalPrice: 69,
    condition: 'new',
    size: 'xs',
    color: 'red',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-chemises', 'homme-xs']
  },
  {
    slug: '28-chemises-femme-xs-white-new',
    name: 'Chemises femme',
    description: 'Superbe Chemises femme en lin. État neuf. Coupe ajustée et confortable.',
    price: 44,
    originalPrice: 63,
    condition: 'new',
    size: 'xs',
    color: 'white',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-xs']
  },
  {
    slug: '29-t-shirts-homme-xl-red-new',
    name: 'T-shirts homme',
    description: 'Magnifique T-shirts homme de la collection Lacoste. État neuf. Matière premium en coton organique.',
    price: 132,
    originalPrice: 189,
    condition: 'new',
    size: 'xl',
    color: 'red',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-t-shirts', 'homme-xl']
  },
  {
    slug: '30-pullovers-homme-xs-grey-good',
    name: 'Pullovers homme',
    description: 'Pullovers homme authentique Lacoste. Bon état. laine mérinos durable et confortable.',
    price: 31,
    originalPrice: 45,
    condition: 'good',
    size: 'xs',
    color: 'grey',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-pullovers', 'homme-xs']
  },
  {
    slug: '31-robes-and-jupes-femme-s-purple-new',
    name: 'Robes & Jupes femme',
    description: 'Magnifique Robes & Jupes femme de la collection Lacoste. État neuf. Matière premium en crêpe.',
    price: 24,
    originalPrice: 34,
    condition: 'new',
    size: 's',
    color: 'purple',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-s']
  },
  {
    slug: '32-manteaux-and-vestes-femme-m-green-excellent',
    name: 'Manteaux & Vestes femme',
    description:
      'Manteaux & Vestes femme élégant et intemporel. Excellent état. Fabriqué en coton imperméable de haute qualité.',
    price: 104,
    originalPrice: 149,
    condition: 'excellent',
    size: 'm',
    color: 'green',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-m']
  },
  {
    slug: '33-robes-and-jupes-femme-m-green-new',
    name: 'Robes & Jupes femme',
    description: 'Robes & Jupes femme élégant et intemporel. État neuf. Fabriqué en crêpe de haute qualité.',
    price: 139,
    originalPrice: 198,
    condition: 'new',
    size: 'm',
    color: 'green',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-m']
  },
  {
    slug: '34-maroquinerie-femme-s-white-good',
    name: 'Maroquinerie femme',
    description: 'Maroquinerie femme élégant et intemporel. Bon état. Fabriqué en nylon de haute qualité.',
    price: 104,
    originalPrice: 148,
    condition: 'good',
    size: 's',
    color: 'white',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-s']
  },
  {
    slug: '35-pantalons-and-shorts-femme-xl-white-good',
    name: 'Pantalons & Shorts femme',
    description:
      'Magnifique Pantalons & Shorts femme de la collection Lacoste. Bon état. Matière premium en toile de coton.',
    price: 41,
    originalPrice: 59,
    condition: 'good',
    size: 'xl',
    color: 'white',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-xl']
  },
  {
    slug: '36-pullovers-femme-s-blue-very_good',
    name: 'Pullovers femme',
    description:
      'Magnifique Pullovers femme de la collection Lacoste. Très bon état. Matière premium en laine mérinos.',
    price: 38,
    originalPrice: 47,
    condition: 'very_good',
    size: 's',
    color: 'blue',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-pullovers', 'femme-s']
  },
  {
    slug: '37-manteaux-and-vestes-homme-m-blue-very_good',
    name: 'Manteaux & Vestes homme',
    description: 'Superbe Manteaux & Vestes homme en polyester recyclé. Très bon état. Coupe ajustée et confortable.',
    price: 166,
    originalPrice: 207,
    condition: 'very_good',
    size: 'm',
    color: 'blue',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-m']
  },
  {
    slug: '38-tops-and-chemises-femme-xs-black-new',
    name: 'Tops & Chemises femme',
    description: 'Tops & Chemises femme élégant et intemporel. État neuf. Fabriqué en soie de haute qualité.',
    price: 106,
    originalPrice: 152,
    condition: 'new',
    size: 'xs',
    color: 'black',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-xs']
  },
  {
    slug: '39-sweatshirts-homme-m-pink-good',
    name: 'Sweatshirts homme',
    description: 'Sweatshirts homme authentique Lacoste. Bon état. molleton durable et confortable.',
    price: 31,
    originalPrice: 45,
    condition: 'good',
    size: 'm',
    color: 'pink',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-sweatshirts', 'homme-m']
  },
  {
    slug: '40-survetements-homme-s-pink-good',
    name: 'Survêtements homme',
    description:
      'Magnifique Survêtements homme de la collection Lacoste. Bon état. Matière premium en matière stretch.',
    price: 62,
    originalPrice: 88,
    condition: 'good',
    size: 's',
    color: 'pink',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-survetements', 'homme-s']
  },
  {
    slug: '41-pantalons-and-shorts-homme-m-beige-excellent',
    name: 'Pantalons & Shorts homme',
    description:
      'Pantalons & Shorts homme élégant et intemporel. Excellent état. Fabriqué en toile de coton de haute qualité.',
    price: 141,
    originalPrice: 201,
    condition: 'excellent',
    size: 'm',
    color: 'beige',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-m']
  },
  {
    slug: '42-survetements-homme-l-white-new',
    name: 'Survêtements homme',
    description:
      'Magnifique Survêtements homme de la collection Lacoste. État neuf. Matière premium en polyester technique.',
    price: 120,
    originalPrice: 171,
    condition: 'new',
    size: 'l',
    color: 'white',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-survetements', 'homme-l']
  },
  {
    slug: '43-sweatshirts-femme-xs-brown-new',
    name: 'Sweatshirts femme',
    description: 'Superbe Sweatshirts femme en molleton. État neuf. Coupe ajustée et confortable.',
    price: 193,
    originalPrice: 276,
    condition: 'new',
    size: 'xs',
    color: 'brown',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-sweatshirts', 'femme-xs']
  },
  {
    slug: '44-chemises-homme-xl-pink-new',
    name: 'Chemises homme',
    description: 'Chemises homme élégant et intemporel. État neuf. Fabriqué en popeline de haute qualité.',
    price: 80,
    originalPrice: 114,
    condition: 'new',
    size: 'xl',
    color: 'pink',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-chemises', 'homme-xl']
  },
  {
    slug: '45-t-shirts-femme-s-purple-excellent',
    name: 'T-shirts femme',
    description: 'T-shirts femme élégant et intemporel. Excellent état. Fabriqué en coton de haute qualité.',
    price: 40,
    originalPrice: 57,
    condition: 'excellent',
    size: 's',
    color: 'purple',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-s']
  },
  {
    slug: '46-chemises-homme-xl-grey-very_good',
    name: 'Chemises homme',
    description: 'Chemises homme authentique Lacoste. Très bon état. popeline durable et confortable.',
    price: 116,
    originalPrice: 145,
    condition: 'very_good',
    size: 'xl',
    color: 'grey',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-chemises', 'homme-xl']
  },
  {
    slug: '47-maroquinerie-homme-s-brown-good',
    name: 'Maroquinerie homme',
    description: 'Maroquinerie homme élégant et intemporel. Bon état. Fabriqué en nylon de haute qualité.',
    price: 102,
    originalPrice: 145,
    condition: 'good',
    size: 's',
    color: 'brown',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-maroquinerie', 'homme-s']
  },
  {
    slug: '48-chemises-homme-m-orange-excellent',
    name: 'Chemises homme',
    description: 'Chemises homme authentique Lacoste. Excellent état. popeline durable et confortable.',
    price: 190,
    originalPrice: 271,
    condition: 'excellent',
    size: 'm',
    color: 'orange',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-chemises', 'homme-m']
  },
  {
    slug: '49-t-shirts-homme-s-brown-excellent',
    name: 'T-shirts homme',
    description: 'Superbe T-shirts homme en jersey fin. Excellent état. Coupe ajustée et confortable.',
    price: 179,
    originalPrice: 255,
    condition: 'excellent',
    size: 's',
    color: 'brown',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-t-shirts', 'homme-s']
  },
  {
    slug: '50-maroquinerie-femme-xl-pink-excellent',
    name: 'Maroquinerie femme',
    description: 'Maroquinerie femme authentique Lacoste. Excellent état. toile enduite durable et confortable.',
    price: 31,
    originalPrice: 45,
    condition: 'excellent',
    size: 'xl',
    color: 'pink',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-xl']
  },
  {
    slug: '51-manteaux-and-vestes-femme-m-black-very_good',
    name: 'Manteaux & Vestes femme',
    description: 'Superbe Manteaux & Vestes femme en laine. Très bon état. Coupe ajustée et confortable.',
    price: 157,
    originalPrice: 196,
    condition: 'very_good',
    size: 'm',
    color: 'black',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-m']
  },
  {
    slug: '52-survetements-homme-s-orange-good',
    name: 'Survêtements homme',
    description: 'Survêtements homme authentique Lacoste. Bon état. coton molletonné durable et confortable.',
    price: 118,
    originalPrice: 168,
    condition: 'good',
    size: 's',
    color: 'orange',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-survetements', 'homme-s']
  },
  {
    slug: '53-manteaux-and-vestes-femme-m-yellow-new',
    name: 'Manteaux & Vestes femme',
    description: 'Manteaux & Vestes femme authentique Lacoste. État neuf. laine durable et confortable.',
    price: 67,
    originalPrice: 96,
    condition: 'new',
    size: 'm',
    color: 'yellow',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-m']
  },
  {
    slug: '54-t-shirts-femme-xl-black-new',
    name: 'T-shirts femme',
    description: 'Magnifique T-shirts femme de la collection Lacoste. État neuf. Matière premium en coton organique.',
    price: 64,
    originalPrice: 91,
    condition: 'new',
    size: 'xl',
    color: 'black',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-xl']
  },
  {
    slug: '55-robes-and-jupes-femme-2xl-et-plus-green-very_good',
    name: 'Robes & Jupes femme',
    description: 'Robes & Jupes femme authentique Lacoste. Très bon état. coton stretch durable et confortable.',
    price: 149,
    originalPrice: 186,
    condition: 'very_good',
    size: '2xl-et-plus',
    color: 'green',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-2xl-et-plus']
  },
  {
    slug: '56-survetements-femme-xs-red-new',
    name: 'Survêtements femme',
    description:
      'Magnifique Survêtements femme de la collection Lacoste. État neuf. Matière premium en coton molletonné.',
    price: 108,
    originalPrice: 154,
    condition: 'new',
    size: 'xs',
    color: 'red',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-survetements', 'femme-xs']
  },
  {
    slug: '57-manteaux-and-vestes-homme-xl-pink-good',
    name: 'Manteaux & Vestes homme',
    description:
      'Manteaux & Vestes homme élégant et intemporel. Bon état. Fabriqué en polyester recyclé de haute qualité.',
    price: 92,
    originalPrice: 131,
    condition: 'good',
    size: 'xl',
    color: 'pink',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-xl']
  },
  {
    slug: '58-manteaux-and-vestes-homme-s-blue-very_good',
    name: 'Manteaux & Vestes homme',
    description:
      'Manteaux & Vestes homme authentique Lacoste. Très bon état. polyester recyclé durable et confortable.',
    price: 131,
    originalPrice: 164,
    condition: 'very_good',
    size: 's',
    color: 'blue',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-s']
  },
  {
    slug: '59-pullovers-femme-xl-blue-excellent',
    name: 'Pullovers femme',
    description: 'Pullovers femme élégant et intemporel. Excellent état. Fabriqué en coton tricoté de haute qualité.',
    price: 74,
    originalPrice: 106,
    condition: 'excellent',
    size: 'xl',
    color: 'blue',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-pullovers', 'femme-xl']
  },
  {
    slug: '60-pullovers-homme-xl-blue-good',
    name: 'Pullovers homme',
    description: 'Pullovers homme authentique Lacoste. Bon état. laine mérinos durable et confortable.',
    price: 167,
    originalPrice: 238,
    condition: 'good',
    size: 'xl',
    color: 'blue',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-pullovers', 'homme-xl']
  },
  {
    slug: '61-sweatshirts-femme-2xl-et-plus-orange-very_good',
    name: 'Sweatshirts femme',
    description: 'Sweatshirts femme élégant et intemporel. Très bon état. Fabriqué en molleton de haute qualité.',
    price: 223,
    originalPrice: 279,
    condition: 'very_good',
    size: '2xl-et-plus',
    color: 'orange',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-sweatshirts', 'femme-2xl-et-plus']
  },
  {
    slug: '62-polos-femme-xs-white-very_good',
    name: 'Polos femme',
    description: 'Polos femme authentique Lacoste. Très bon état. coton piqué durable et confortable.',
    price: 120,
    originalPrice: 150,
    condition: 'very_good',
    size: 'xs',
    color: 'white',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-polos', 'femme-xs']
  },
  {
    slug: '63-manteaux-and-vestes-femme-l-purple-new',
    name: 'Manteaux & Vestes femme',
    description:
      'Magnifique Manteaux & Vestes femme de la collection Lacoste. État neuf. Matière premium en polyester recyclé.',
    price: 67,
    originalPrice: 95,
    condition: 'new',
    size: 'l',
    color: 'purple',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-l']
  },
  {
    slug: '64-polos-femme-2xl-et-plus-yellow-good',
    name: 'Polos femme',
    description: 'Superbe Polos femme en jersey de coton. Bon état. Coupe ajustée et confortable.',
    price: 153,
    originalPrice: 219,
    condition: 'good',
    size: '2xl-et-plus',
    color: 'yellow',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-polos', 'femme-2xl-et-plus']
  },
  {
    slug: '65-maroquinerie-femme-2xl-et-plus-grey-good',
    name: 'Maroquinerie femme',
    description: 'Maroquinerie femme élégant et intemporel. Bon état. Fabriqué en nylon de haute qualité.',
    price: 38,
    originalPrice: 54,
    condition: 'good',
    size: '2xl-et-plus',
    color: 'grey',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-2xl-et-plus']
  },
  {
    slug: '66-chemises-femme-l-white-good',
    name: 'Chemises femme',
    description: 'Superbe Chemises femme en oxford. Bon état. Coupe ajustée et confortable.',
    price: 149,
    originalPrice: 213,
    condition: 'good',
    size: 'l',
    color: 'white',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-l']
  },
  {
    slug: '67-t-shirts-homme-l-purple-new',
    name: 'T-shirts homme',
    description: 'T-shirts homme élégant et intemporel. État neuf. Fabriqué en jersey fin de haute qualité.',
    price: 99,
    originalPrice: 141,
    condition: 'new',
    size: 'l',
    color: 'purple',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-t-shirts', 'homme-l']
  },
  {
    slug: '68-t-shirts-homme-m-pink-new',
    name: 'T-shirts homme',
    description: 'T-shirts homme authentique Lacoste. État neuf. coton durable et confortable.',
    price: 143,
    originalPrice: 204,
    condition: 'new',
    size: 'm',
    color: 'pink',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-t-shirts', 'homme-m']
  },
  {
    slug: '69-t-shirts-femme-m-grey-new',
    name: 'T-shirts femme',
    description: 'Superbe T-shirts femme en coton. État neuf. Coupe ajustée et confortable.',
    price: 159,
    originalPrice: 227,
    condition: 'new',
    size: 'm',
    color: 'grey',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-m']
  },
  {
    slug: '70-survetements-homme-s-grey-new',
    name: 'Survêtements homme',
    description: 'Superbe Survêtements homme en matière stretch. État neuf. Coupe ajustée et confortable.',
    price: 33,
    originalPrice: 47,
    condition: 'new',
    size: 's',
    color: 'grey',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-survetements', 'homme-s']
  },
  {
    slug: '71-t-shirts-homme-xl-orange-good',
    name: 'T-shirts homme',
    description: 'T-shirts homme élégant et intemporel. Bon état. Fabriqué en coton de haute qualité.',
    price: 114,
    originalPrice: 163,
    condition: 'good',
    size: 'xl',
    color: 'orange',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-t-shirts', 'homme-xl']
  },
  {
    slug: '72-pullovers-homme-xl-beige-new',
    name: 'Pullovers homme',
    description: 'Magnifique Pullovers homme de la collection Lacoste. État neuf. Matière premium en laine mérinos.',
    price: 168,
    originalPrice: 240,
    condition: 'new',
    size: 'xl',
    color: 'beige',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-pullovers', 'homme-xl']
  },
  {
    slug: '73-maroquinerie-femme-l-pink-good',
    name: 'Maroquinerie femme',
    description: 'Superbe Maroquinerie femme en nylon. Bon état. Coupe ajustée et confortable.',
    price: 45,
    originalPrice: 64,
    condition: 'good',
    size: 'l',
    color: 'pink',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-l']
  },
  {
    slug: '74-polos-femme-xs-orange-new',
    name: 'Polos femme',
    description: 'Superbe Polos femme en jersey de coton. État neuf. Coupe ajustée et confortable.',
    price: 141,
    originalPrice: 202,
    condition: 'new',
    size: 'xs',
    color: 'orange',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-polos', 'femme-xs']
  },
  {
    slug: '75-pullovers-homme-xs-purple-very_good',
    name: 'Pullovers homme',
    description: 'Pullovers homme élégant et intemporel. Très bon état. Fabriqué en cachemire de haute qualité.',
    price: 205,
    originalPrice: 256,
    condition: 'very_good',
    size: 'xs',
    color: 'purple',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-pullovers', 'homme-xs']
  },
  {
    slug: '76-survetements-femme-s-blue-good',
    name: 'Survêtements femme',
    description: 'Superbe Survêtements femme en matière stretch. Bon état. Coupe ajustée et confortable.',
    price: 57,
    originalPrice: 82,
    condition: 'good',
    size: 's',
    color: 'blue',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-survetements', 'femme-s']
  },
  {
    slug: '77-robes-and-jupes-femme-s-black-very_good',
    name: 'Robes & Jupes femme',
    description: 'Robes & Jupes femme authentique Lacoste. Très bon état. crêpe durable et confortable.',
    price: 182,
    originalPrice: 228,
    condition: 'very_good',
    size: 's',
    color: 'black',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-s']
  },
  {
    slug: '78-survetements-homme-s-red-excellent',
    name: 'Survêtements homme',
    description:
      'Survêtements homme élégant et intemporel. Excellent état. Fabriqué en polyester technique de haute qualité.',
    price: 124,
    originalPrice: 177,
    condition: 'excellent',
    size: 's',
    color: 'red',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-survetements', 'homme-s']
  },
  {
    slug: '79-manteaux-and-vestes-homme-2xl-et-plus-blue-excellent',
    name: 'Manteaux & Vestes homme',
    description: 'Superbe Manteaux & Vestes homme en coton imperméable. Excellent état. Coupe ajustée et confortable.',
    price: 125,
    originalPrice: 179,
    condition: 'excellent',
    size: '2xl-et-plus',
    color: 'blue',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-2xl-et-plus']
  },
  {
    slug: '80-pullovers-homme-xl-pink-very_good',
    name: 'Pullovers homme',
    description: 'Pullovers homme élégant et intemporel. Très bon état. Fabriqué en laine mérinos de haute qualité.',
    price: 122,
    originalPrice: 153,
    condition: 'very_good',
    size: 'xl',
    color: 'pink',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-pullovers', 'homme-xl']
  },
  {
    slug: '81-sweatshirts-femme-xl-orange-very_good',
    name: 'Sweatshirts femme',
    description: 'Sweatshirts femme authentique Lacoste. Très bon état. jersey lourd durable et confortable.',
    price: 98,
    originalPrice: 122,
    condition: 'very_good',
    size: 'xl',
    color: 'orange',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-sweatshirts', 'femme-xl']
  },
  {
    slug: '82-polos-homme-2xl-et-plus-green-good',
    name: 'Polos homme',
    description: 'Superbe Polos homme en coton bio. Bon état. Coupe ajustée et confortable.',
    price: 208,
    originalPrice: 297,
    condition: 'good',
    size: '2xl-et-plus',
    color: 'green',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-polos', 'homme-2xl-et-plus']
  },
  {
    slug: '83-pullovers-homme-xs-beige-excellent',
    name: 'Pullovers homme',
    description: 'Superbe Pullovers homme en coton tricoté. Excellent état. Coupe ajustée et confortable.',
    price: 172,
    originalPrice: 245,
    condition: 'excellent',
    size: 'xs',
    color: 'beige',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-pullovers', 'homme-xs']
  },
  {
    slug: '84-polos-homme-m-black-good',
    name: 'Polos homme',
    description: 'Polos homme authentique Lacoste. Bon état. jersey de coton durable et confortable.',
    price: 188,
    originalPrice: 268,
    condition: 'good',
    size: 'm',
    color: 'black',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-polos', 'homme-m']
  },
  {
    slug: '85-t-shirts-homme-2xl-et-plus-black-new',
    name: 'T-shirts homme',
    description: 'T-shirts homme élégant et intemporel. État neuf. Fabriqué en coton organique de haute qualité.',
    price: 163,
    originalPrice: 233,
    condition: 'new',
    size: '2xl-et-plus',
    color: 'black',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-t-shirts', 'homme-2xl-et-plus']
  },
  {
    slug: '86-pantalons-and-shorts-homme-xl-orange-good',
    name: 'Pantalons & Shorts homme',
    description:
      'Magnifique Pantalons & Shorts homme de la collection Lacoste. Bon état. Matière premium en toile de coton.',
    price: 175,
    originalPrice: 250,
    condition: 'good',
    size: 'xl',
    color: 'orange',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-xl']
  },
  {
    slug: '87-manteaux-and-vestes-homme-l-purple-good',
    name: 'Manteaux & Vestes homme',
    description: 'Manteaux & Vestes homme authentique Lacoste. Bon état. coton imperméable durable et confortable.',
    price: 54,
    originalPrice: 77,
    condition: 'good',
    size: 'l',
    color: 'purple',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-l']
  },
  {
    slug: '88-pantalons-and-shorts-femme-xl-brown-very_good',
    name: 'Pantalons & Shorts femme',
    description:
      'Magnifique Pantalons & Shorts femme de la collection Lacoste. Très bon état. Matière premium en coton sergé.',
    price: 54,
    originalPrice: 67,
    condition: 'very_good',
    size: 'xl',
    color: 'brown',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-xl']
  },
  {
    slug: '89-robes-and-jupes-femme-xl-beige-new',
    name: 'Robes & Jupes femme',
    description:
      'Magnifique Robes & Jupes femme de la collection Lacoste. État neuf. Matière premium en coton stretch.',
    price: 193,
    originalPrice: 276,
    condition: 'new',
    size: 'xl',
    color: 'beige',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-xl']
  },
  {
    slug: '90-sweatshirts-homme-xs-grey-very_good',
    name: 'Sweatshirts homme',
    description: 'Sweatshirts homme élégant et intemporel. Très bon état. Fabriqué en coton brossé de haute qualité.',
    price: 173,
    originalPrice: 216,
    condition: 'very_good',
    size: 'xs',
    color: 'grey',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-sweatshirts', 'homme-xs']
  },
  {
    slug: '91-pantalons-and-shorts-femme-xs-blue-new',
    name: 'Pantalons & Shorts femme',
    description:
      'Magnifique Pantalons & Shorts femme de la collection Lacoste. État neuf. Matière premium en gabardine.',
    price: 136,
    originalPrice: 194,
    condition: 'new',
    size: 'xs',
    color: 'blue',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-xs']
  },
  {
    slug: '92-maroquinerie-homme-s-black-very_good',
    name: 'Maroquinerie homme',
    description: 'Superbe Maroquinerie homme en cuir. Très bon état. Coupe ajustée et confortable.',
    price: 67,
    originalPrice: 84,
    condition: 'very_good',
    size: 's',
    color: 'black',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-maroquinerie', 'homme-s']
  },
  {
    slug: '93-survetements-homme-m-grey-excellent',
    name: 'Survêtements homme',
    description: 'Superbe Survêtements homme en polyester technique. Excellent état. Coupe ajustée et confortable.',
    price: 97,
    originalPrice: 139,
    condition: 'excellent',
    size: 'm',
    color: 'grey',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-survetements', 'homme-m']
  },
  {
    slug: '94-survetements-femme-l-brown-excellent',
    name: 'Survêtements femme',
    description: 'Superbe Survêtements femme en matière stretch. Excellent état. Coupe ajustée et confortable.',
    price: 137,
    originalPrice: 195,
    condition: 'excellent',
    size: 'l',
    color: 'brown',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-survetements', 'femme-l']
  },
  {
    slug: '95-pullovers-femme-l-grey-new',
    name: 'Pullovers femme',
    description: 'Superbe Pullovers femme en cachemire. État neuf. Coupe ajustée et confortable.',
    price: 31,
    originalPrice: 45,
    condition: 'new',
    size: 'l',
    color: 'grey',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-pullovers', 'femme-l']
  },
  {
    slug: '96-chemises-homme-xs-yellow-good',
    name: 'Chemises homme',
    description: 'Chemises homme authentique Lacoste. Bon état. oxford durable et confortable.',
    price: 29,
    originalPrice: 41,
    condition: 'good',
    size: 'xs',
    color: 'yellow',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-chemises', 'homme-xs']
  },
  {
    slug: '97-maroquinerie-femme-l-purple-very_good',
    name: 'Maroquinerie femme',
    description: 'Superbe Maroquinerie femme en nylon. Très bon état. Coupe ajustée et confortable.',
    price: 198,
    originalPrice: 248,
    condition: 'very_good',
    size: 'l',
    color: 'purple',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-l']
  },
  {
    slug: '98-tops-and-chemises-femme-2xl-et-plus-brown-new',
    name: 'Tops & Chemises femme',
    description: 'Tops & Chemises femme authentique Lacoste. État neuf. viscose durable et confortable.',
    price: 50,
    originalPrice: 72,
    condition: 'new',
    size: '2xl-et-plus',
    color: 'brown',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-2xl-et-plus']
  },
  {
    slug: '99-chemises-homme-2xl-et-plus-orange-excellent',
    name: 'Chemises homme',
    description: 'Magnifique Chemises homme de la collection Lacoste. Excellent état. Matière premium en popeline.',
    price: 24,
    originalPrice: 34,
    condition: 'excellent',
    size: '2xl-et-plus',
    color: 'orange',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-chemises', 'homme-2xl-et-plus']
  },
  {
    slug: '100-maroquinerie-femme-s-purple-very_good',
    name: 'Maroquinerie femme',
    description: 'Maroquinerie femme élégant et intemporel. Très bon état. Fabriqué en toile enduite de haute qualité.',
    price: 232,
    originalPrice: 290,
    condition: 'very_good',
    size: 's',
    color: 'purple',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-s']
  },
  {
    slug: '101-chemises-homme-xl-black-new',
    name: 'Chemises homme',
    description: 'Superbe Chemises homme en popeline. État neuf. Coupe ajustée et confortable.',
    price: 166,
    originalPrice: 237,
    condition: 'new',
    size: 'xl',
    color: 'black',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-chemises', 'homme-xl']
  },
  {
    slug: '102-chemises-homme-l-orange-very_good',
    name: 'Chemises homme',
    description: 'Magnifique Chemises homme de la collection Lacoste. Très bon état. Matière premium en popeline.',
    price: 138,
    originalPrice: 172,
    condition: 'very_good',
    size: 'l',
    color: 'orange',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-chemises', 'homme-l']
  },
  {
    slug: '103-survetements-homme-m-black-new',
    name: 'Survêtements homme',
    description: 'Superbe Survêtements homme en polyester technique. État neuf. Coupe ajustée et confortable.',
    price: 153,
    originalPrice: 218,
    condition: 'new',
    size: 'm',
    color: 'black',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-survetements', 'homme-m']
  },
  {
    slug: '104-polos-femme-l-white-new',
    name: 'Polos femme',
    description: 'Superbe Polos femme en jersey de coton. État neuf. Coupe ajustée et confortable.',
    price: 115,
    originalPrice: 165,
    condition: 'new',
    size: 'l',
    color: 'white',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-polos', 'femme-l']
  },
  {
    slug: '105-polos-homme-s-blue-excellent',
    name: 'Polos homme',
    description: 'Polos homme authentique Lacoste. Excellent état. jersey de coton durable et confortable.',
    price: 61,
    originalPrice: 87,
    condition: 'excellent',
    size: 's',
    color: 'blue',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-polos', 'homme-s']
  },
  {
    slug: '106-manteaux-and-vestes-homme-l-beige-new',
    name: 'Manteaux & Vestes homme',
    description: 'Superbe Manteaux & Vestes homme en polyester recyclé. État neuf. Coupe ajustée et confortable.',
    price: 59,
    originalPrice: 85,
    condition: 'new',
    size: 'l',
    color: 'beige',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-l']
  },
  {
    slug: '107-maroquinerie-femme-s-red-very_good',
    name: 'Maroquinerie femme',
    description: 'Maroquinerie femme authentique Lacoste. Très bon état. cuir durable et confortable.',
    price: 225,
    originalPrice: 281,
    condition: 'very_good',
    size: 's',
    color: 'red',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-s']
  },
  {
    slug: '108-tops-and-chemises-femme-xl-beige-good',
    name: 'Tops & Chemises femme',
    description: 'Superbe Tops & Chemises femme en popeline de coton. Bon état. Coupe ajustée et confortable.',
    price: 84,
    originalPrice: 120,
    condition: 'good',
    size: 'xl',
    color: 'beige',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-xl']
  },
  {
    slug: '109-polos-homme-s-pink-very_good',
    name: 'Polos homme',
    description: 'Polos homme élégant et intemporel. Très bon état. Fabriqué en coton bio de haute qualité.',
    price: 104,
    originalPrice: 130,
    condition: 'very_good',
    size: 's',
    color: 'pink',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-polos', 'homme-s']
  },
  {
    slug: '110-survetements-homme-xs-pink-very_good',
    name: 'Survêtements homme',
    description:
      'Survêtements homme élégant et intemporel. Très bon état. Fabriqué en coton molletonné de haute qualité.',
    price: 62,
    originalPrice: 77,
    condition: 'very_good',
    size: 'xs',
    color: 'pink',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-survetements', 'homme-xs']
  },
  {
    slug: '111-sweatshirts-femme-m-grey-good',
    name: 'Sweatshirts femme',
    description: 'Magnifique Sweatshirts femme de la collection Lacoste. Bon état. Matière premium en molleton.',
    price: 121,
    originalPrice: 173,
    condition: 'good',
    size: 'm',
    color: 'grey',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-sweatshirts', 'femme-m']
  },
  {
    slug: '112-pantalons-and-shorts-femme-m-orange-new',
    name: 'Pantalons & Shorts femme',
    description: 'Pantalons & Shorts femme authentique Lacoste. État neuf. toile de coton durable et confortable.',
    price: 141,
    originalPrice: 201,
    condition: 'new',
    size: 'm',
    color: 'orange',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-m']
  },
  {
    slug: '113-t-shirts-femme-m-white-very_good',
    name: 'T-shirts femme',
    description: 'T-shirts femme authentique Lacoste. Très bon état. coton organique durable et confortable.',
    price: 82,
    originalPrice: 102,
    condition: 'very_good',
    size: 'm',
    color: 'white',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-m']
  },
  {
    slug: '114-survetements-homme-l-blue-good',
    name: 'Survêtements homme',
    description:
      'Magnifique Survêtements homme de la collection Lacoste. Bon état. Matière premium en matière stretch.',
    price: 32,
    originalPrice: 46,
    condition: 'good',
    size: 'l',
    color: 'blue',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-survetements', 'homme-l']
  },
  {
    slug: '115-manteaux-and-vestes-femme-xs-yellow-new',
    name: 'Manteaux & Vestes femme',
    description: 'Superbe Manteaux & Vestes femme en laine. État neuf. Coupe ajustée et confortable.',
    price: 81,
    originalPrice: 116,
    condition: 'new',
    size: 'xs',
    color: 'yellow',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-xs']
  },
  {
    slug: '116-manteaux-and-vestes-homme-m-blue-good',
    name: 'Manteaux & Vestes homme',
    description:
      'Manteaux & Vestes homme élégant et intemporel. Bon état. Fabriqué en polyester recyclé de haute qualité.',
    price: 181,
    originalPrice: 258,
    condition: 'good',
    size: 'm',
    color: 'blue',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-m']
  },
  {
    slug: '117-polos-femme-xl-blue-good',
    name: 'Polos femme',
    description: 'Polos femme élégant et intemporel. Bon état. Fabriqué en jersey de coton de haute qualité.',
    price: 176,
    originalPrice: 252,
    condition: 'good',
    size: 'xl',
    color: 'blue',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-polos', 'femme-xl']
  },
  {
    slug: '118-pullovers-homme-l-orange-good',
    name: 'Pullovers homme',
    description: 'Pullovers homme élégant et intemporel. Bon état. Fabriqué en laine mérinos de haute qualité.',
    price: 151,
    originalPrice: 215,
    condition: 'good',
    size: 'l',
    color: 'orange',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-pullovers', 'homme-l']
  },
  {
    slug: '119-robes-and-jupes-femme-m-black-good',
    name: 'Robes & Jupes femme',
    description: 'Robes & Jupes femme élégant et intemporel. Bon état. Fabriqué en jersey de haute qualité.',
    price: 55,
    originalPrice: 78,
    condition: 'good',
    size: 'm',
    color: 'black',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-m']
  },
  {
    slug: '120-survetements-femme-2xl-et-plus-grey-very_good',
    name: 'Survêtements femme',
    description: 'Survêtements femme authentique Lacoste. Très bon état. coton molletonné durable et confortable.',
    price: 172,
    originalPrice: 215,
    condition: 'very_good',
    size: '2xl-et-plus',
    color: 'grey',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-survetements', 'femme-2xl-et-plus']
  },
  {
    slug: '121-polos-femme-m-orange-good',
    name: 'Polos femme',
    description: 'Superbe Polos femme en coton piqué. Bon état. Coupe ajustée et confortable.',
    price: 134,
    originalPrice: 192,
    condition: 'good',
    size: 'm',
    color: 'orange',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-polos', 'femme-m']
  },
  {
    slug: '122-t-shirts-homme-xl-purple-new',
    name: 'T-shirts homme',
    description: 'T-shirts homme élégant et intemporel. État neuf. Fabriqué en coton organique de haute qualité.',
    price: 107,
    originalPrice: 153,
    condition: 'new',
    size: 'xl',
    color: 'purple',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-t-shirts', 'homme-xl']
  },
  {
    slug: '123-robes-and-jupes-femme-m-purple-very_good',
    name: 'Robes & Jupes femme',
    description: 'Robes & Jupes femme authentique Lacoste. Très bon état. jersey durable et confortable.',
    price: 98,
    originalPrice: 123,
    condition: 'very_good',
    size: 'm',
    color: 'purple',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-m']
  },
  {
    slug: '124-chemises-femme-l-red-new',
    name: 'Chemises femme',
    description: 'Chemises femme élégant et intemporel. État neuf. Fabriqué en oxford de haute qualité.',
    price: 112,
    originalPrice: 160,
    condition: 'new',
    size: 'l',
    color: 'red',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-l']
  },
  {
    slug: '125-pantalons-and-shorts-homme-m-grey-new',
    name: 'Pantalons & Shorts homme',
    description:
      'Magnifique Pantalons & Shorts homme de la collection Lacoste. État neuf. Matière premium en gabardine.',
    price: 92,
    originalPrice: 131,
    condition: 'new',
    size: 'm',
    color: 'grey',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-m']
  },
  {
    slug: '126-t-shirts-homme-2xl-et-plus-red-good',
    name: 'T-shirts homme',
    description: 'Magnifique T-shirts homme de la collection Lacoste. Bon état. Matière premium en jersey fin.',
    price: 77,
    originalPrice: 110,
    condition: 'good',
    size: '2xl-et-plus',
    color: 'red',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-t-shirts', 'homme-2xl-et-plus']
  },
  {
    slug: '127-maroquinerie-femme-l-yellow-new',
    name: 'Maroquinerie femme',
    description: 'Maroquinerie femme authentique Lacoste. État neuf. toile enduite durable et confortable.',
    price: 166,
    originalPrice: 237,
    condition: 'new',
    size: 'l',
    color: 'yellow',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-l']
  },
  {
    slug: '128-survetements-homme-m-blue-new',
    name: 'Survêtements homme',
    description: 'Survêtements homme authentique Lacoste. État neuf. coton molletonné durable et confortable.',
    price: 176,
    originalPrice: 252,
    condition: 'new',
    size: 'm',
    color: 'blue',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-survetements', 'homme-m']
  },
  {
    slug: '129-manteaux-and-vestes-femme-xs-beige-excellent',
    name: 'Manteaux & Vestes femme',
    description: 'Manteaux & Vestes femme authentique Lacoste. Excellent état. laine durable et confortable.',
    price: 64,
    originalPrice: 91,
    condition: 'excellent',
    size: 'xs',
    color: 'beige',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-xs']
  },
  {
    slug: '130-manteaux-and-vestes-homme-2xl-et-plus-pink-very_good',
    name: 'Manteaux & Vestes homme',
    description:
      'Manteaux & Vestes homme élégant et intemporel. Très bon état. Fabriqué en polyester recyclé de haute qualité.',
    price: 87,
    originalPrice: 109,
    condition: 'very_good',
    size: '2xl-et-plus',
    color: 'pink',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-2xl-et-plus']
  },
  {
    slug: '131-t-shirts-femme-s-blue-very_good',
    name: 'T-shirts femme',
    description: 'T-shirts femme élégant et intemporel. Très bon état. Fabriqué en jersey fin de haute qualité.',
    price: 179,
    originalPrice: 224,
    condition: 'very_good',
    size: 's',
    color: 'blue',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-s']
  },
  {
    slug: '132-survetements-homme-xs-beige-new',
    name: 'Survêtements homme',
    description: 'Superbe Survêtements homme en polyester technique. État neuf. Coupe ajustée et confortable.',
    price: 74,
    originalPrice: 106,
    condition: 'new',
    size: 'xs',
    color: 'beige',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-survetements', 'homme-xs']
  },
  {
    slug: '133-t-shirts-femme-xl-blue-very_good',
    name: 'T-shirts femme',
    description: 'Superbe T-shirts femme en jersey fin. Très bon état. Coupe ajustée et confortable.',
    price: 198,
    originalPrice: 248,
    condition: 'very_good',
    size: 'xl',
    color: 'blue',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-xl']
  },
  {
    slug: '134-maroquinerie-homme-xs-white-very_good',
    name: 'Maroquinerie homme',
    description: 'Magnifique Maroquinerie homme de la collection Lacoste. Très bon état. Matière premium en cuir.',
    price: 110,
    originalPrice: 138,
    condition: 'very_good',
    size: 'xs',
    color: 'white',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-maroquinerie', 'homme-xs']
  },
  {
    slug: '135-chemises-femme-m-orange-new',
    name: 'Chemises femme',
    description: 'Superbe Chemises femme en lin. État neuf. Coupe ajustée et confortable.',
    price: 61,
    originalPrice: 87,
    condition: 'new',
    size: 'm',
    color: 'orange',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-m']
  },
  {
    slug: '136-survetements-homme-m-yellow-very_good',
    name: 'Survêtements homme',
    description: 'Survêtements homme authentique Lacoste. Très bon état. coton molletonné durable et confortable.',
    price: 149,
    originalPrice: 186,
    condition: 'very_good',
    size: 'm',
    color: 'yellow',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-survetements', 'homme-m']
  },
  {
    slug: '137-pantalons-and-shorts-femme-xl-grey-good',
    name: 'Pantalons & Shorts femme',
    description: 'Superbe Pantalons & Shorts femme en toile de coton. Bon état. Coupe ajustée et confortable.',
    price: 180,
    originalPrice: 257,
    condition: 'good',
    size: 'xl',
    color: 'grey',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-xl']
  },
  {
    slug: '138-robes-and-jupes-femme-xl-brown-very_good',
    name: 'Robes & Jupes femme',
    description:
      'Robes & Jupes femme élégant et intemporel. Très bon état. Fabriqué en coton stretch de haute qualité.',
    price: 58,
    originalPrice: 72,
    condition: 'very_good',
    size: 'xl',
    color: 'brown',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-xl']
  },
  {
    slug: '139-pullovers-homme-s-beige-good',
    name: 'Pullovers homme',
    description: 'Superbe Pullovers homme en cachemire. Bon état. Coupe ajustée et confortable.',
    price: 201,
    originalPrice: 287,
    condition: 'good',
    size: 's',
    color: 'beige',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-pullovers', 'homme-s']
  },
  {
    slug: '140-pullovers-femme-2xl-et-plus-blue-good',
    name: 'Pullovers femme',
    description: 'Superbe Pullovers femme en laine mérinos. Bon état. Coupe ajustée et confortable.',
    price: 90,
    originalPrice: 129,
    condition: 'good',
    size: '2xl-et-plus',
    color: 'blue',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-pullovers', 'femme-2xl-et-plus']
  },
  {
    slug: '141-chemises-femme-xs-brown-good',
    name: 'Chemises femme',
    description: 'Superbe Chemises femme en popeline. Bon état. Coupe ajustée et confortable.',
    price: 89,
    originalPrice: 127,
    condition: 'good',
    size: 'xs',
    color: 'brown',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-xs']
  },
  {
    slug: '142-sweatshirts-femme-2xl-et-plus-beige-very_good',
    name: 'Sweatshirts femme',
    description:
      'Magnifique Sweatshirts femme de la collection Lacoste. Très bon état. Matière premium en jersey lourd.',
    price: 230,
    originalPrice: 287,
    condition: 'very_good',
    size: '2xl-et-plus',
    color: 'beige',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-sweatshirts', 'femme-2xl-et-plus']
  },
  {
    slug: '143-t-shirts-femme-l-green-very_good',
    name: 'T-shirts femme',
    description: 'Magnifique T-shirts femme de la collection Lacoste. Très bon état. Matière premium en coton.',
    price: 102,
    originalPrice: 127,
    condition: 'very_good',
    size: 'l',
    color: 'green',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-l']
  },
  {
    slug: '144-tops-and-chemises-femme-l-black-very_good',
    name: 'Tops & Chemises femme',
    description: 'Superbe Tops & Chemises femme en viscose. Très bon état. Coupe ajustée et confortable.',
    price: 234,
    originalPrice: 292,
    condition: 'very_good',
    size: 'l',
    color: 'black',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-l']
  },
  {
    slug: '145-t-shirts-femme-2xl-et-plus-orange-good',
    name: 'T-shirts femme',
    description: 'Superbe T-shirts femme en coton organique. Bon état. Coupe ajustée et confortable.',
    price: 45,
    originalPrice: 64,
    condition: 'good',
    size: '2xl-et-plus',
    color: 'orange',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-2xl-et-plus']
  },
  {
    slug: '146-pullovers-femme-l-brown-excellent',
    name: 'Pullovers femme',
    description: 'Superbe Pullovers femme en coton tricoté. Excellent état. Coupe ajustée et confortable.',
    price: 76,
    originalPrice: 108,
    condition: 'excellent',
    size: 'l',
    color: 'brown',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-pullovers', 'femme-l']
  },
  {
    slug: '147-chemises-femme-l-blue-new',
    name: 'Chemises femme',
    description: 'Superbe Chemises femme en popeline. État neuf. Coupe ajustée et confortable.',
    price: 31,
    originalPrice: 45,
    condition: 'new',
    size: 'l',
    color: 'blue',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-l']
  },
  {
    slug: '148-robes-and-jupes-femme-2xl-et-plus-grey-new',
    name: 'Robes & Jupes femme',
    description: 'Superbe Robes & Jupes femme en coton stretch. État neuf. Coupe ajustée et confortable.',
    price: 50,
    originalPrice: 72,
    condition: 'new',
    size: '2xl-et-plus',
    color: 'grey',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-2xl-et-plus']
  },
  {
    slug: '149-chemises-homme-xl-pink-new',
    name: 'Chemises homme',
    description: 'Chemises homme élégant et intemporel. État neuf. Fabriqué en lin de haute qualité.',
    price: 177,
    originalPrice: 253,
    condition: 'new',
    size: 'xl',
    color: 'pink',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-chemises', 'homme-xl']
  },
  {
    slug: '150-manteaux-and-vestes-homme-xs-red-excellent',
    name: 'Manteaux & Vestes homme',
    description:
      'Magnifique Manteaux & Vestes homme de la collection Lacoste. Excellent état. Matière premium en laine.',
    price: 118,
    originalPrice: 169,
    condition: 'excellent',
    size: 'xs',
    color: 'red',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-xs']
  },
  {
    slug: '151-manteaux-and-vestes-homme-l-purple-very_good',
    name: 'Manteaux & Vestes homme',
    description:
      'Magnifique Manteaux & Vestes homme de la collection Lacoste. Très bon état. Matière premium en laine.',
    price: 146,
    originalPrice: 182,
    condition: 'very_good',
    size: 'l',
    color: 'purple',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-l']
  },
  {
    slug: '152-survetements-femme-xl-orange-new',
    name: 'Survêtements femme',
    description:
      'Survêtements femme élégant et intemporel. État neuf. Fabriqué en polyester technique de haute qualité.',
    price: 49,
    originalPrice: 70,
    condition: 'new',
    size: 'xl',
    color: 'orange',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-survetements', 'femme-xl']
  },
  {
    slug: '153-pullovers-homme-l-yellow-new',
    name: 'Pullovers homme',
    description: 'Magnifique Pullovers homme de la collection Lacoste. État neuf. Matière premium en cachemire.',
    price: 97,
    originalPrice: 138,
    condition: 'new',
    size: 'l',
    color: 'yellow',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-pullovers', 'homme-l']
  },
  {
    slug: '154-manteaux-and-vestes-homme-m-purple-very_good',
    name: 'Manteaux & Vestes homme',
    description:
      'Manteaux & Vestes homme authentique Lacoste. Très bon état. coton imperméable durable et confortable.',
    price: 35,
    originalPrice: 44,
    condition: 'very_good',
    size: 'm',
    color: 'purple',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-m']
  },
  {
    slug: '155-chemises-homme-xl-pink-very_good',
    name: 'Chemises homme',
    description: 'Chemises homme élégant et intemporel. Très bon état. Fabriqué en oxford de haute qualité.',
    price: 200,
    originalPrice: 250,
    condition: 'very_good',
    size: 'xl',
    color: 'pink',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-chemises', 'homme-xl']
  },
  {
    slug: '156-manteaux-and-vestes-homme-xs-yellow-new',
    name: 'Manteaux & Vestes homme',
    description: 'Magnifique Manteaux & Vestes homme de la collection Lacoste. État neuf. Matière premium en laine.',
    price: 144,
    originalPrice: 206,
    condition: 'new',
    size: 'xs',
    color: 'yellow',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-xs']
  },
  {
    slug: '157-manteaux-and-vestes-homme-xl-yellow-new',
    name: 'Manteaux & Vestes homme',
    description:
      'Magnifique Manteaux & Vestes homme de la collection Lacoste. État neuf. Matière premium en polyester recyclé.',
    price: 210,
    originalPrice: 300,
    condition: 'new',
    size: 'xl',
    color: 'yellow',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-xl']
  },
  {
    slug: '158-survetements-femme-xl-beige-good',
    name: 'Survêtements femme',
    description: 'Survêtements femme élégant et intemporel. Bon état. Fabriqué en coton molletonné de haute qualité.',
    price: 202,
    originalPrice: 288,
    condition: 'good',
    size: 'xl',
    color: 'beige',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-survetements', 'femme-xl']
  },
  {
    slug: '159-tops-and-chemises-femme-l-pink-excellent',
    name: 'Tops & Chemises femme',
    description:
      'Magnifique Tops & Chemises femme de la collection Lacoste. Excellent état. Matière premium en popeline de coton.',
    price: 134,
    originalPrice: 191,
    condition: 'excellent',
    size: 'l',
    color: 'pink',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-l']
  },
  {
    slug: '160-maroquinerie-homme-s-yellow-excellent',
    name: 'Maroquinerie homme',
    description:
      'Maroquinerie homme élégant et intemporel. Excellent état. Fabriqué en toile enduite de haute qualité.',
    price: 124,
    originalPrice: 177,
    condition: 'excellent',
    size: 's',
    color: 'yellow',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-maroquinerie', 'homme-s']
  },
  {
    slug: '161-sweatshirts-femme-l-orange-very_good',
    name: 'Sweatshirts femme',
    description: 'Sweatshirts femme élégant et intemporel. Très bon état. Fabriqué en molleton de haute qualité.',
    price: 76,
    originalPrice: 95,
    condition: 'very_good',
    size: 'l',
    color: 'orange',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-sweatshirts', 'femme-l']
  },
  {
    slug: '162-pantalons-and-shorts-homme-l-pink-good',
    name: 'Pantalons & Shorts homme',
    description:
      'Magnifique Pantalons & Shorts homme de la collection Lacoste. Bon état. Matière premium en toile de coton.',
    price: 55,
    originalPrice: 79,
    condition: 'good',
    size: 'l',
    color: 'pink',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-l']
  },
  {
    slug: '163-polos-homme-2xl-et-plus-orange-new',
    name: 'Polos homme',
    description: 'Magnifique Polos homme de la collection Lacoste. État neuf. Matière premium en coton bio.',
    price: 122,
    originalPrice: 174,
    condition: 'new',
    size: '2xl-et-plus',
    color: 'orange',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-polos', 'homme-2xl-et-plus']
  },
  {
    slug: '164-t-shirts-homme-xl-pink-very_good',
    name: 'T-shirts homme',
    description: 'T-shirts homme élégant et intemporel. Très bon état. Fabriqué en coton de haute qualité.',
    price: 82,
    originalPrice: 103,
    condition: 'very_good',
    size: 'xl',
    color: 'pink',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-t-shirts', 'homme-xl']
  },
  {
    slug: '165-survetements-femme-l-grey-new',
    name: 'Survêtements femme',
    description: 'Superbe Survêtements femme en coton molletonné. État neuf. Coupe ajustée et confortable.',
    price: 83,
    originalPrice: 119,
    condition: 'new',
    size: 'l',
    color: 'grey',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-survetements', 'femme-l']
  },
  {
    slug: '166-manteaux-and-vestes-femme-2xl-et-plus-purple-very_good',
    name: 'Manteaux & Vestes femme',
    description:
      'Manteaux & Vestes femme authentique Lacoste. Très bon état. coton imperméable durable et confortable.',
    price: 27,
    originalPrice: 34,
    condition: 'very_good',
    size: '2xl-et-plus',
    color: 'purple',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-2xl-et-plus']
  },
  {
    slug: '167-sweatshirts-homme-xl-black-new',
    name: 'Sweatshirts homme',
    description: 'Sweatshirts homme authentique Lacoste. État neuf. coton brossé durable et confortable.',
    price: 190,
    originalPrice: 271,
    condition: 'new',
    size: 'xl',
    color: 'black',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-sweatshirts', 'homme-xl']
  },
  {
    slug: '168-survetements-femme-xs-pink-excellent',
    name: 'Survêtements femme',
    description:
      'Magnifique Survêtements femme de la collection Lacoste. Excellent état. Matière premium en polyester technique.',
    price: 105,
    originalPrice: 150,
    condition: 'excellent',
    size: 'xs',
    color: 'pink',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-survetements', 'femme-xs']
  },
  {
    slug: '169-pantalons-and-shorts-homme-s-yellow-good',
    name: 'Pantalons & Shorts homme',
    description: 'Pantalons & Shorts homme élégant et intemporel. Bon état. Fabriqué en coton sergé de haute qualité.',
    price: 197,
    originalPrice: 281,
    condition: 'good',
    size: 's',
    color: 'yellow',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-s']
  },
  {
    slug: '170-polos-homme-s-orange-new',
    name: 'Polos homme',
    description: 'Polos homme authentique Lacoste. État neuf. coton bio durable et confortable.',
    price: 135,
    originalPrice: 193,
    condition: 'new',
    size: 's',
    color: 'orange',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-polos', 'homme-s']
  },
  {
    slug: '171-polos-homme-2xl-et-plus-purple-excellent',
    name: 'Polos homme',
    description: 'Polos homme authentique Lacoste. Excellent état. coton bio durable et confortable.',
    price: 167,
    originalPrice: 238,
    condition: 'excellent',
    size: '2xl-et-plus',
    color: 'purple',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-polos', 'homme-2xl-et-plus']
  },
  {
    slug: '172-t-shirts-homme-2xl-et-plus-green-good',
    name: 'T-shirts homme',
    description: 'T-shirts homme élégant et intemporel. Bon état. Fabriqué en coton organique de haute qualité.',
    price: 110,
    originalPrice: 157,
    condition: 'good',
    size: '2xl-et-plus',
    color: 'green',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-t-shirts', 'homme-2xl-et-plus']
  },
  {
    slug: '173-chemises-homme-s-green-new',
    name: 'Chemises homme',
    description: 'Chemises homme élégant et intemporel. État neuf. Fabriqué en lin de haute qualité.',
    price: 183,
    originalPrice: 262,
    condition: 'new',
    size: 's',
    color: 'green',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-chemises', 'homme-s']
  },
  {
    slug: '174-polos-femme-xl-yellow-very_good',
    name: 'Polos femme',
    description: 'Polos femme élégant et intemporel. Très bon état. Fabriqué en coton piqué de haute qualité.',
    price: 82,
    originalPrice: 103,
    condition: 'very_good',
    size: 'xl',
    color: 'yellow',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-polos', 'femme-xl']
  },
  {
    slug: '175-survetements-homme-xs-brown-very_good',
    name: 'Survêtements homme',
    description: 'Survêtements homme authentique Lacoste. Très bon état. matière stretch durable et confortable.',
    price: 39,
    originalPrice: 49,
    condition: 'very_good',
    size: 'xs',
    color: 'brown',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-survetements', 'homme-xs']
  },
  {
    slug: '176-t-shirts-homme-l-beige-good',
    name: 'T-shirts homme',
    description: 'Magnifique T-shirts homme de la collection Lacoste. Bon état. Matière premium en jersey fin.',
    price: 31,
    originalPrice: 45,
    condition: 'good',
    size: 'l',
    color: 'beige',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-t-shirts', 'homme-l']
  },
  {
    slug: '177-pantalons-and-shorts-femme-2xl-et-plus-green-good',
    name: 'Pantalons & Shorts femme',
    description: 'Superbe Pantalons & Shorts femme en toile de coton. Bon état. Coupe ajustée et confortable.',
    price: 35,
    originalPrice: 50,
    condition: 'good',
    size: '2xl-et-plus',
    color: 'green',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-2xl-et-plus']
  },
  {
    slug: '178-polos-homme-2xl-et-plus-white-excellent',
    name: 'Polos homme',
    description: 'Polos homme élégant et intemporel. Excellent état. Fabriqué en jersey de coton de haute qualité.',
    price: 118,
    originalPrice: 168,
    condition: 'excellent',
    size: '2xl-et-plus',
    color: 'white',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-polos', 'homme-2xl-et-plus']
  },
  {
    slug: '179-survetements-homme-2xl-et-plus-orange-excellent',
    name: 'Survêtements homme',
    description: 'Superbe Survêtements homme en coton molletonné. Excellent état. Coupe ajustée et confortable.',
    price: 69,
    originalPrice: 99,
    condition: 'excellent',
    size: '2xl-et-plus',
    color: 'orange',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-survetements', 'homme-2xl-et-plus']
  },
  {
    slug: '180-survetements-femme-xl-purple-new',
    name: 'Survêtements femme',
    description: 'Survêtements femme élégant et intemporel. État neuf. Fabriqué en coton molletonné de haute qualité.',
    price: 88,
    originalPrice: 125,
    condition: 'new',
    size: 'xl',
    color: 'purple',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-survetements', 'femme-xl']
  },
  {
    slug: '181-survetements-homme-s-orange-excellent',
    name: 'Survêtements homme',
    description:
      'Magnifique Survêtements homme de la collection Lacoste. Excellent état. Matière premium en matière stretch.',
    price: 95,
    originalPrice: 136,
    condition: 'excellent',
    size: 's',
    color: 'orange',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-survetements', 'homme-s']
  },
  {
    slug: '182-robes-and-jupes-femme-s-blue-excellent',
    name: 'Robes & Jupes femme',
    description: 'Superbe Robes & Jupes femme en crêpe. Excellent état. Coupe ajustée et confortable.',
    price: 202,
    originalPrice: 289,
    condition: 'excellent',
    size: 's',
    color: 'blue',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-s']
  },
  {
    slug: '183-pullovers-femme-xl-grey-new',
    name: 'Pullovers femme',
    description: 'Magnifique Pullovers femme de la collection Lacoste. État neuf. Matière premium en cachemire.',
    price: 67,
    originalPrice: 95,
    condition: 'new',
    size: 'xl',
    color: 'grey',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-pullovers', 'femme-xl']
  },
  {
    slug: '184-manteaux-and-vestes-femme-xl-yellow-very_good',
    name: 'Manteaux & Vestes femme',
    description: 'Superbe Manteaux & Vestes femme en laine. Très bon état. Coupe ajustée et confortable.',
    price: 124,
    originalPrice: 155,
    condition: 'very_good',
    size: 'xl',
    color: 'yellow',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-xl']
  },
  {
    slug: '185-sweatshirts-homme-s-beige-good',
    name: 'Sweatshirts homme',
    description: 'Sweatshirts homme élégant et intemporel. Bon état. Fabriqué en coton brossé de haute qualité.',
    price: 170,
    originalPrice: 243,
    condition: 'good',
    size: 's',
    color: 'beige',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-sweatshirts', 'homme-s']
  },
  {
    slug: '186-tops-and-chemises-femme-xl-blue-excellent',
    name: 'Tops & Chemises femme',
    description: 'Tops & Chemises femme authentique Lacoste. Excellent état. soie durable et confortable.',
    price: 22,
    originalPrice: 32,
    condition: 'excellent',
    size: 'xl',
    color: 'blue',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-xl']
  },
  {
    slug: '187-survetements-homme-l-orange-new',
    name: 'Survêtements homme',
    description:
      'Magnifique Survêtements homme de la collection Lacoste. État neuf. Matière premium en polyester technique.',
    price: 188,
    originalPrice: 268,
    condition: 'new',
    size: 'l',
    color: 'orange',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-survetements', 'homme-l']
  },
  {
    slug: '188-manteaux-and-vestes-homme-xl-black-excellent',
    name: 'Manteaux & Vestes homme',
    description:
      'Manteaux & Vestes homme authentique Lacoste. Excellent état. coton imperméable durable et confortable.',
    price: 207,
    originalPrice: 296,
    condition: 'excellent',
    size: 'xl',
    color: 'black',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-xl']
  },
  {
    slug: '189-t-shirts-femme-m-purple-excellent',
    name: 'T-shirts femme',
    description:
      'Magnifique T-shirts femme de la collection Lacoste. Excellent état. Matière premium en coton organique.',
    price: 154,
    originalPrice: 220,
    condition: 'excellent',
    size: 'm',
    color: 'purple',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-m']
  },
  {
    slug: '190-t-shirts-homme-m-green-new',
    name: 'T-shirts homme',
    description: 'T-shirts homme élégant et intemporel. État neuf. Fabriqué en coton organique de haute qualité.',
    price: 168,
    originalPrice: 240,
    condition: 'new',
    size: 'm',
    color: 'green',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-t-shirts', 'homme-m']
  },
  {
    slug: '191-pantalons-and-shorts-femme-l-black-good',
    name: 'Pantalons & Shorts femme',
    description: 'Superbe Pantalons & Shorts femme en coton sergé. Bon état. Coupe ajustée et confortable.',
    price: 50,
    originalPrice: 71,
    condition: 'good',
    size: 'l',
    color: 'black',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-l']
  },
  {
    slug: '192-tops-and-chemises-femme-xl-brown-new',
    name: 'Tops & Chemises femme',
    description: 'Magnifique Tops & Chemises femme de la collection Lacoste. État neuf. Matière premium en viscose.',
    price: 123,
    originalPrice: 176,
    condition: 'new',
    size: 'xl',
    color: 'brown',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-xl']
  },
  {
    slug: '193-pantalons-and-shorts-femme-m-brown-good',
    name: 'Pantalons & Shorts femme',
    description: 'Superbe Pantalons & Shorts femme en toile de coton. Bon état. Coupe ajustée et confortable.',
    price: 120,
    originalPrice: 171,
    condition: 'good',
    size: 'm',
    color: 'brown',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-m']
  },
  {
    slug: '194-pantalons-and-shorts-homme-xs-red-very_good',
    name: 'Pantalons & Shorts homme',
    description: 'Pantalons & Shorts homme authentique Lacoste. Très bon état. toile de coton durable et confortable.',
    price: 120,
    originalPrice: 150,
    condition: 'very_good',
    size: 'xs',
    color: 'red',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-xs']
  },
  {
    slug: '195-polos-femme-s-black-very_good',
    name: 'Polos femme',
    description: 'Superbe Polos femme en coton piqué. Très bon état. Coupe ajustée et confortable.',
    price: 97,
    originalPrice: 121,
    condition: 'very_good',
    size: 's',
    color: 'black',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-polos', 'femme-s']
  },
  {
    slug: '196-pullovers-femme-xs-beige-excellent',
    name: 'Pullovers femme',
    description: 'Superbe Pullovers femme en coton tricoté. Excellent état. Coupe ajustée et confortable.',
    price: 154,
    originalPrice: 220,
    condition: 'excellent',
    size: 'xs',
    color: 'beige',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-pullovers', 'femme-xs']
  },
  {
    slug: '197-survetements-homme-l-purple-good',
    name: 'Survêtements homme',
    description: 'Superbe Survêtements homme en polyester technique. Bon état. Coupe ajustée et confortable.',
    price: 120,
    originalPrice: 172,
    condition: 'good',
    size: 'l',
    color: 'purple',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-survetements', 'homme-l']
  },
  {
    slug: '198-robes-and-jupes-femme-2xl-et-plus-brown-excellent',
    name: 'Robes & Jupes femme',
    description: 'Robes & Jupes femme authentique Lacoste. Excellent état. crêpe durable et confortable.',
    price: 94,
    originalPrice: 134,
    condition: 'excellent',
    size: '2xl-et-plus',
    color: 'brown',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-2xl-et-plus']
  },
  {
    slug: '199-survetements-femme-xs-brown-excellent',
    name: 'Survêtements femme',
    description:
      'Survêtements femme élégant et intemporel. Excellent état. Fabriqué en polyester technique de haute qualité.',
    price: 42,
    originalPrice: 60,
    condition: 'excellent',
    size: 'xs',
    color: 'brown',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-survetements', 'femme-xs']
  },
  {
    slug: '200-sweatshirts-homme-l-black-excellent',
    name: 'Sweatshirts homme',
    description: 'Superbe Sweatshirts homme en jersey lourd. Excellent état. Coupe ajustée et confortable.',
    price: 83,
    originalPrice: 119,
    condition: 'excellent',
    size: 'l',
    color: 'black',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-sweatshirts', 'homme-l']
  },
  {
    slug: '201-robes-and-jupes-femme-xl-red-good',
    name: 'Robes & Jupes femme',
    description: 'Robes & Jupes femme authentique Lacoste. Bon état. crêpe durable et confortable.',
    price: 145,
    originalPrice: 207,
    condition: 'good',
    size: 'xl',
    color: 'red',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-xl']
  },
  {
    slug: '202-manteaux-and-vestes-femme-xl-purple-new',
    name: 'Manteaux & Vestes femme',
    description: 'Magnifique Manteaux & Vestes femme de la collection Lacoste. État neuf. Matière premium en laine.',
    price: 139,
    originalPrice: 198,
    condition: 'new',
    size: 'xl',
    color: 'purple',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-xl']
  },
  {
    slug: '203-sweatshirts-femme-xl-green-new',
    name: 'Sweatshirts femme',
    description: 'Superbe Sweatshirts femme en molleton. État neuf. Coupe ajustée et confortable.',
    price: 46,
    originalPrice: 65,
    condition: 'new',
    size: 'xl',
    color: 'green',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-sweatshirts', 'femme-xl']
  },
  {
    slug: '204-chemises-femme-2xl-et-plus-red-very_good',
    name: 'Chemises femme',
    description: 'Chemises femme authentique Lacoste. Très bon état. popeline durable et confortable.',
    price: 63,
    originalPrice: 79,
    condition: 'very_good',
    size: '2xl-et-plus',
    color: 'red',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-2xl-et-plus']
  },
  {
    slug: '205-pantalons-and-shorts-homme-l-pink-very_good',
    name: 'Pantalons & Shorts homme',
    description:
      'Magnifique Pantalons & Shorts homme de la collection Lacoste. Très bon état. Matière premium en coton sergé.',
    price: 66,
    originalPrice: 83,
    condition: 'very_good',
    size: 'l',
    color: 'pink',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-l']
  },
  {
    slug: '206-chemises-femme-xl-black-good',
    name: 'Chemises femme',
    description: 'Magnifique Chemises femme de la collection Lacoste. Bon état. Matière premium en lin.',
    price: 102,
    originalPrice: 146,
    condition: 'good',
    size: 'xl',
    color: 'black',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-xl']
  },
  {
    slug: '207-manteaux-and-vestes-femme-2xl-et-plus-brown-new',
    name: 'Manteaux & Vestes femme',
    description: 'Manteaux & Vestes femme authentique Lacoste. État neuf. polyester recyclé durable et confortable.',
    price: 76,
    originalPrice: 108,
    condition: 'new',
    size: '2xl-et-plus',
    color: 'brown',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-2xl-et-plus']
  },
  {
    slug: '208-tops-and-chemises-femme-l-black-good',
    name: 'Tops & Chemises femme',
    description: 'Tops & Chemises femme authentique Lacoste. Bon état. soie durable et confortable.',
    price: 193,
    originalPrice: 276,
    condition: 'good',
    size: 'l',
    color: 'black',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-l']
  },
  {
    slug: '209-t-shirts-femme-xl-red-very_good',
    name: 'T-shirts femme',
    description: 'Magnifique T-shirts femme de la collection Lacoste. Très bon état. Matière premium en jersey fin.',
    price: 216,
    originalPrice: 270,
    condition: 'very_good',
    size: 'xl',
    color: 'red',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-xl']
  },
  {
    slug: '210-t-shirts-femme-m-orange-new',
    name: 'T-shirts femme',
    description: 'Magnifique T-shirts femme de la collection Lacoste. État neuf. Matière premium en coton.',
    price: 148,
    originalPrice: 212,
    condition: 'new',
    size: 'm',
    color: 'orange',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-m']
  },
  {
    slug: '211-maroquinerie-homme-2xl-et-plus-black-excellent',
    name: 'Maroquinerie homme',
    description:
      'Maroquinerie homme élégant et intemporel. Excellent état. Fabriqué en toile enduite de haute qualité.',
    price: 135,
    originalPrice: 193,
    condition: 'excellent',
    size: '2xl-et-plus',
    color: 'black',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-maroquinerie', 'homme-2xl-et-plus']
  },
  {
    slug: '212-t-shirts-homme-m-brown-excellent',
    name: 'T-shirts homme',
    description: 'Superbe T-shirts homme en coton organique. Excellent état. Coupe ajustée et confortable.',
    price: 25,
    originalPrice: 36,
    condition: 'excellent',
    size: 'm',
    color: 'brown',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-t-shirts', 'homme-m']
  },
  {
    slug: '213-survetements-femme-m-red-very_good',
    name: 'Survêtements femme',
    description:
      'Magnifique Survêtements femme de la collection Lacoste. Très bon état. Matière premium en matière stretch.',
    price: 111,
    originalPrice: 139,
    condition: 'very_good',
    size: 'm',
    color: 'red',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-survetements', 'femme-m']
  },
  {
    slug: '214-robes-and-jupes-femme-xl-blue-excellent',
    name: 'Robes & Jupes femme',
    description: 'Superbe Robes & Jupes femme en coton stretch. Excellent état. Coupe ajustée et confortable.',
    price: 28,
    originalPrice: 40,
    condition: 'excellent',
    size: 'xl',
    color: 'blue',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-xl']
  },
  {
    slug: '215-t-shirts-homme-xl-beige-excellent',
    name: 'T-shirts homme',
    description: 'T-shirts homme élégant et intemporel. Excellent état. Fabriqué en coton organique de haute qualité.',
    price: 48,
    originalPrice: 68,
    condition: 'excellent',
    size: 'xl',
    color: 'beige',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-t-shirts', 'homme-xl']
  },
  {
    slug: '216-pullovers-femme-2xl-et-plus-pink-excellent',
    name: 'Pullovers femme',
    description: 'Pullovers femme authentique Lacoste. Excellent état. coton tricoté durable et confortable.',
    price: 111,
    originalPrice: 158,
    condition: 'excellent',
    size: '2xl-et-plus',
    color: 'pink',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-pullovers', 'femme-2xl-et-plus']
  },
  {
    slug: '217-robes-and-jupes-femme-s-blue-very_good',
    name: 'Robes & Jupes femme',
    description: 'Superbe Robes & Jupes femme en coton stretch. Très bon état. Coupe ajustée et confortable.',
    price: 78,
    originalPrice: 97,
    condition: 'very_good',
    size: 's',
    color: 'blue',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-s']
  },
  {
    slug: '218-sweatshirts-femme-xs-pink-excellent',
    name: 'Sweatshirts femme',
    description: 'Magnifique Sweatshirts femme de la collection Lacoste. Excellent état. Matière premium en molleton.',
    price: 85,
    originalPrice: 121,
    condition: 'excellent',
    size: 'xs',
    color: 'pink',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-sweatshirts', 'femme-xs']
  },
  {
    slug: '219-manteaux-and-vestes-homme-xl-purple-new',
    name: 'Manteaux & Vestes homme',
    description:
      'Manteaux & Vestes homme élégant et intemporel. État neuf. Fabriqué en polyester recyclé de haute qualité.',
    price: 128,
    originalPrice: 183,
    condition: 'new',
    size: 'xl',
    color: 'purple',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-xl']
  },
  {
    slug: '220-pantalons-and-shorts-femme-xl-yellow-very_good',
    name: 'Pantalons & Shorts femme',
    description: 'Superbe Pantalons & Shorts femme en toile de coton. Très bon état. Coupe ajustée et confortable.',
    price: 181,
    originalPrice: 226,
    condition: 'very_good',
    size: 'xl',
    color: 'yellow',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-xl']
  },
  {
    slug: '221-polos-homme-xs-pink-new',
    name: 'Polos homme',
    description: 'Polos homme authentique Lacoste. État neuf. coton bio durable et confortable.',
    price: 198,
    originalPrice: 283,
    condition: 'new',
    size: 'xs',
    color: 'pink',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-polos', 'homme-xs']
  },
  {
    slug: '222-t-shirts-homme-l-pink-new',
    name: 'T-shirts homme',
    description: 'T-shirts homme authentique Lacoste. État neuf. coton durable et confortable.',
    price: 100,
    originalPrice: 143,
    condition: 'new',
    size: 'l',
    color: 'pink',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-t-shirts', 'homme-l']
  },
  {
    slug: '223-sweatshirts-homme-s-white-new',
    name: 'Sweatshirts homme',
    description: 'Sweatshirts homme authentique Lacoste. État neuf. coton brossé durable et confortable.',
    price: 139,
    originalPrice: 198,
    condition: 'new',
    size: 's',
    color: 'white',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-sweatshirts', 'homme-s']
  },
  {
    slug: '224-sweatshirts-femme-xs-red-good',
    name: 'Sweatshirts femme',
    description: 'Sweatshirts femme élégant et intemporel. Bon état. Fabriqué en jersey lourd de haute qualité.',
    price: 147,
    originalPrice: 210,
    condition: 'good',
    size: 'xs',
    color: 'red',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-sweatshirts', 'femme-xs']
  },
  {
    slug: '225-survetements-femme-l-grey-good',
    name: 'Survêtements femme',
    description: 'Survêtements femme élégant et intemporel. Bon état. Fabriqué en matière stretch de haute qualité.',
    price: 133,
    originalPrice: 190,
    condition: 'good',
    size: 'l',
    color: 'grey',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-survetements', 'femme-l']
  },
  {
    slug: '226-manteaux-and-vestes-femme-xl-brown-good',
    name: 'Manteaux & Vestes femme',
    description: 'Superbe Manteaux & Vestes femme en coton imperméable. Bon état. Coupe ajustée et confortable.',
    price: 115,
    originalPrice: 164,
    condition: 'good',
    size: 'xl',
    color: 'brown',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-xl']
  },
  {
    slug: '227-survetements-femme-m-red-very_good',
    name: 'Survêtements femme',
    description: 'Superbe Survêtements femme en coton molletonné. Très bon état. Coupe ajustée et confortable.',
    price: 130,
    originalPrice: 162,
    condition: 'very_good',
    size: 'm',
    color: 'red',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-survetements', 'femme-m']
  },
  {
    slug: '228-survetements-femme-xl-beige-very_good',
    name: 'Survêtements femme',
    description: 'Survêtements femme authentique Lacoste. Très bon état. coton molletonné durable et confortable.',
    price: 145,
    originalPrice: 181,
    condition: 'very_good',
    size: 'xl',
    color: 'beige',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-survetements', 'femme-xl']
  },
  {
    slug: '229-manteaux-and-vestes-homme-xs-grey-excellent',
    name: 'Manteaux & Vestes homme',
    description: 'Manteaux & Vestes homme élégant et intemporel. Excellent état. Fabriqué en laine de haute qualité.',
    price: 57,
    originalPrice: 81,
    condition: 'excellent',
    size: 'xs',
    color: 'grey',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-xs']
  },
  {
    slug: '230-pullovers-femme-m-red-good',
    name: 'Pullovers femme',
    description: 'Pullovers femme authentique Lacoste. Bon état. coton tricoté durable et confortable.',
    price: 120,
    originalPrice: 172,
    condition: 'good',
    size: 'm',
    color: 'red',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-pullovers', 'femme-m']
  },
  {
    slug: '231-pullovers-femme-l-pink-very_good',
    name: 'Pullovers femme',
    description:
      'Magnifique Pullovers femme de la collection Lacoste. Très bon état. Matière premium en laine mérinos.',
    price: 235,
    originalPrice: 294,
    condition: 'very_good',
    size: 'l',
    color: 'pink',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-pullovers', 'femme-l']
  },
  {
    slug: '232-pantalons-and-shorts-femme-2xl-et-plus-white-good',
    name: 'Pantalons & Shorts femme',
    description: 'Superbe Pantalons & Shorts femme en toile de coton. Bon état. Coupe ajustée et confortable.',
    price: 69,
    originalPrice: 99,
    condition: 'good',
    size: '2xl-et-plus',
    color: 'white',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-2xl-et-plus']
  },
  {
    slug: '233-robes-and-jupes-femme-xl-black-excellent',
    name: 'Robes & Jupes femme',
    description:
      'Robes & Jupes femme élégant et intemporel. Excellent état. Fabriqué en coton stretch de haute qualité.',
    price: 62,
    originalPrice: 89,
    condition: 'excellent',
    size: 'xl',
    color: 'black',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-xl']
  },
  {
    slug: '234-t-shirts-femme-2xl-et-plus-red-new',
    name: 'T-shirts femme',
    description: 'Superbe T-shirts femme en jersey fin. État neuf. Coupe ajustée et confortable.',
    price: 144,
    originalPrice: 206,
    condition: 'new',
    size: '2xl-et-plus',
    color: 'red',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-2xl-et-plus']
  },
  {
    slug: '235-survetements-homme-xl-pink-excellent',
    name: 'Survêtements homme',
    description: 'Superbe Survêtements homme en coton molletonné. Excellent état. Coupe ajustée et confortable.',
    price: 88,
    originalPrice: 126,
    condition: 'excellent',
    size: 'xl',
    color: 'pink',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-survetements', 'homme-xl']
  },
  {
    slug: '236-polos-homme-2xl-et-plus-beige-good',
    name: 'Polos homme',
    description: 'Polos homme authentique Lacoste. Bon état. coton bio durable et confortable.',
    price: 174,
    originalPrice: 248,
    condition: 'good',
    size: '2xl-et-plus',
    color: 'beige',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-polos', 'homme-2xl-et-plus']
  },
  {
    slug: '237-pullovers-homme-l-brown-good',
    name: 'Pullovers homme',
    description: 'Pullovers homme élégant et intemporel. Bon état. Fabriqué en laine mérinos de haute qualité.',
    price: 148,
    originalPrice: 212,
    condition: 'good',
    size: 'l',
    color: 'brown',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-pullovers', 'homme-l']
  },
  {
    slug: '238-sweatshirts-homme-s-yellow-very_good',
    name: 'Sweatshirts homme',
    description: 'Magnifique Sweatshirts homme de la collection Lacoste. Très bon état. Matière premium en molleton.',
    price: 139,
    originalPrice: 174,
    condition: 'very_good',
    size: 's',
    color: 'yellow',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-sweatshirts', 'homme-s']
  },
  {
    slug: '239-sweatshirts-femme-xs-black-new',
    name: 'Sweatshirts femme',
    description: 'Sweatshirts femme élégant et intemporel. État neuf. Fabriqué en molleton de haute qualité.',
    price: 162,
    originalPrice: 232,
    condition: 'new',
    size: 'xs',
    color: 'black',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-sweatshirts', 'femme-xs']
  },
  {
    slug: '240-sweatshirts-femme-l-purple-new',
    name: 'Sweatshirts femme',
    description: 'Sweatshirts femme authentique Lacoste. État neuf. molleton durable et confortable.',
    price: 78,
    originalPrice: 112,
    condition: 'new',
    size: 'l',
    color: 'purple',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-sweatshirts', 'femme-l']
  },
  {
    slug: '241-maroquinerie-homme-s-blue-good',
    name: 'Maroquinerie homme',
    description: 'Magnifique Maroquinerie homme de la collection Lacoste. Bon état. Matière premium en nylon.',
    price: 118,
    originalPrice: 168,
    condition: 'good',
    size: 's',
    color: 'blue',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-maroquinerie', 'homme-s']
  },
  {
    slug: '242-chemises-homme-s-purple-excellent',
    name: 'Chemises homme',
    description: 'Chemises homme authentique Lacoste. Excellent état. oxford durable et confortable.',
    price: 115,
    originalPrice: 164,
    condition: 'excellent',
    size: 's',
    color: 'purple',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-chemises', 'homme-s']
  },
  {
    slug: '243-manteaux-and-vestes-femme-m-beige-good',
    name: 'Manteaux & Vestes femme',
    description: 'Superbe Manteaux & Vestes femme en laine. Bon état. Coupe ajustée et confortable.',
    price: 30,
    originalPrice: 43,
    condition: 'good',
    size: 'm',
    color: 'beige',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-m']
  },
  {
    slug: '244-pullovers-homme-xs-red-excellent',
    name: 'Pullovers homme',
    description: 'Superbe Pullovers homme en coton tricoté. Excellent état. Coupe ajustée et confortable.',
    price: 204,
    originalPrice: 292,
    condition: 'excellent',
    size: 'xs',
    color: 'red',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-pullovers', 'homme-xs']
  },
  {
    slug: '245-t-shirts-homme-s-brown-new',
    name: 'T-shirts homme',
    description: 'T-shirts homme élégant et intemporel. État neuf. Fabriqué en coton organique de haute qualité.',
    price: 29,
    originalPrice: 41,
    condition: 'new',
    size: 's',
    color: 'brown',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-t-shirts', 'homme-s']
  },
  {
    slug: '246-chemises-homme-l-green-new',
    name: 'Chemises homme',
    description: 'Magnifique Chemises homme de la collection Lacoste. État neuf. Matière premium en oxford.',
    price: 75,
    originalPrice: 107,
    condition: 'new',
    size: 'l',
    color: 'green',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-chemises', 'homme-l']
  },
  {
    slug: '247-manteaux-and-vestes-homme-xl-yellow-excellent',
    name: 'Manteaux & Vestes homme',
    description: 'Superbe Manteaux & Vestes homme en polyester recyclé. Excellent état. Coupe ajustée et confortable.',
    price: 76,
    originalPrice: 109,
    condition: 'excellent',
    size: 'xl',
    color: 'yellow',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-xl']
  },
  {
    slug: '248-survetements-femme-xs-beige-very_good',
    name: 'Survêtements femme',
    description: 'Survêtements femme authentique Lacoste. Très bon état. coton molletonné durable et confortable.',
    price: 158,
    originalPrice: 198,
    condition: 'very_good',
    size: 'xs',
    color: 'beige',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-survetements', 'femme-xs']
  },
  {
    slug: '249-pullovers-homme-xs-yellow-very_good',
    name: 'Pullovers homme',
    description: 'Pullovers homme élégant et intemporel. Très bon état. Fabriqué en laine mérinos de haute qualité.',
    price: 87,
    originalPrice: 109,
    condition: 'very_good',
    size: 'xs',
    color: 'yellow',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-pullovers', 'homme-xs']
  },
  {
    slug: '250-pullovers-homme-m-red-good',
    name: 'Pullovers homme',
    description: 'Pullovers homme authentique Lacoste. Bon état. laine mérinos durable et confortable.',
    price: 94,
    originalPrice: 134,
    condition: 'good',
    size: 'm',
    color: 'red',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-pullovers', 'homme-m']
  },
  {
    slug: '251-pantalons-and-shorts-homme-m-yellow-good',
    name: 'Pantalons & Shorts homme',
    description: 'Pantalons & Shorts homme authentique Lacoste. Bon état. coton sergé durable et confortable.',
    price: 69,
    originalPrice: 98,
    condition: 'good',
    size: 'm',
    color: 'yellow',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-m']
  },
  {
    slug: '252-sweatshirts-femme-2xl-et-plus-red-good',
    name: 'Sweatshirts femme',
    description: 'Superbe Sweatshirts femme en jersey lourd. Bon état. Coupe ajustée et confortable.',
    price: 179,
    originalPrice: 256,
    condition: 'good',
    size: '2xl-et-plus',
    color: 'red',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-sweatshirts', 'femme-2xl-et-plus']
  },
  {
    slug: '253-survetements-femme-xs-pink-good',
    name: 'Survêtements femme',
    description:
      'Magnifique Survêtements femme de la collection Lacoste. Bon état. Matière premium en polyester technique.',
    price: 147,
    originalPrice: 210,
    condition: 'good',
    size: 'xs',
    color: 'pink',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-survetements', 'femme-xs']
  },
  {
    slug: '254-pantalons-and-shorts-homme-s-green-very_good',
    name: 'Pantalons & Shorts homme',
    description:
      'Magnifique Pantalons & Shorts homme de la collection Lacoste. Très bon état. Matière premium en gabardine.',
    price: 204,
    originalPrice: 255,
    condition: 'very_good',
    size: 's',
    color: 'green',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-s']
  },
  {
    slug: '255-sweatshirts-femme-s-yellow-very_good',
    name: 'Sweatshirts femme',
    description: 'Sweatshirts femme authentique Lacoste. Très bon état. molleton durable et confortable.',
    price: 199,
    originalPrice: 249,
    condition: 'very_good',
    size: 's',
    color: 'yellow',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-sweatshirts', 'femme-s']
  },
  {
    slug: '256-maroquinerie-femme-m-blue-good',
    name: 'Maroquinerie femme',
    description: 'Superbe Maroquinerie femme en nylon. Bon état. Coupe ajustée et confortable.',
    price: 101,
    originalPrice: 144,
    condition: 'good',
    size: 'm',
    color: 'blue',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-m']
  },
  {
    slug: '257-survetements-homme-2xl-et-plus-orange-good',
    name: 'Survêtements homme',
    description:
      'Magnifique Survêtements homme de la collection Lacoste. Bon état. Matière premium en polyester technique.',
    price: 175,
    originalPrice: 250,
    condition: 'good',
    size: '2xl-et-plus',
    color: 'orange',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-survetements', 'homme-2xl-et-plus']
  },
  {
    slug: '258-polos-femme-l-red-very_good',
    name: 'Polos femme',
    description: 'Polos femme élégant et intemporel. Très bon état. Fabriqué en coton bio de haute qualité.',
    price: 112,
    originalPrice: 140,
    condition: 'very_good',
    size: 'l',
    color: 'red',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-polos', 'femme-l']
  },
  {
    slug: '259-polos-homme-l-blue-good',
    name: 'Polos homme',
    description: 'Polos homme élégant et intemporel. Bon état. Fabriqué en jersey de coton de haute qualité.',
    price: 107,
    originalPrice: 153,
    condition: 'good',
    size: 'l',
    color: 'blue',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-polos', 'homme-l']
  },
  {
    slug: '260-pullovers-femme-m-orange-very_good',
    name: 'Pullovers femme',
    description: 'Pullovers femme authentique Lacoste. Très bon état. laine mérinos durable et confortable.',
    price: 175,
    originalPrice: 219,
    condition: 'very_good',
    size: 'm',
    color: 'orange',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-pullovers', 'femme-m']
  },
  {
    slug: '261-pullovers-femme-m-black-good',
    name: 'Pullovers femme',
    description: 'Superbe Pullovers femme en coton tricoté. Bon état. Coupe ajustée et confortable.',
    price: 134,
    originalPrice: 191,
    condition: 'good',
    size: 'm',
    color: 'black',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-pullovers', 'femme-m']
  },
  {
    slug: '262-chemises-homme-2xl-et-plus-grey-new',
    name: 'Chemises homme',
    description: 'Magnifique Chemises homme de la collection Lacoste. État neuf. Matière premium en popeline.',
    price: 118,
    originalPrice: 169,
    condition: 'new',
    size: '2xl-et-plus',
    color: 'grey',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-chemises', 'homme-2xl-et-plus']
  },
  {
    slug: '263-pantalons-and-shorts-homme-xs-beige-excellent',
    name: 'Pantalons & Shorts homme',
    description:
      'Pantalons & Shorts homme élégant et intemporel. Excellent état. Fabriqué en gabardine de haute qualité.',
    price: 35,
    originalPrice: 50,
    condition: 'excellent',
    size: 'xs',
    color: 'beige',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-xs']
  },
  {
    slug: '264-survetements-homme-xl-grey-excellent',
    name: 'Survêtements homme',
    description: 'Survêtements homme authentique Lacoste. Excellent état. polyester technique durable et confortable.',
    price: 59,
    originalPrice: 85,
    condition: 'excellent',
    size: 'xl',
    color: 'grey',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-survetements', 'homme-xl']
  },
  {
    slug: '265-chemises-femme-xs-white-very_good',
    name: 'Chemises femme',
    description: 'Magnifique Chemises femme de la collection Lacoste. Très bon état. Matière premium en lin.',
    price: 38,
    originalPrice: 47,
    condition: 'very_good',
    size: 'xs',
    color: 'white',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-xs']
  },
  {
    slug: '266-polos-femme-s-blue-very_good',
    name: 'Polos femme',
    description: 'Magnifique Polos femme de la collection Lacoste. Très bon état. Matière premium en coton bio.',
    price: 28,
    originalPrice: 35,
    condition: 'very_good',
    size: 's',
    color: 'blue',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-polos', 'femme-s']
  },
  {
    slug: '267-sweatshirts-homme-xs-green-good',
    name: 'Sweatshirts homme',
    description: 'Superbe Sweatshirts homme en jersey lourd. Bon état. Coupe ajustée et confortable.',
    price: 94,
    originalPrice: 134,
    condition: 'good',
    size: 'xs',
    color: 'green',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-sweatshirts', 'homme-xs']
  },
  {
    slug: '268-chemises-femme-s-pink-excellent',
    name: 'Chemises femme',
    description: 'Magnifique Chemises femme de la collection Lacoste. Excellent état. Matière premium en oxford.',
    price: 182,
    originalPrice: 260,
    condition: 'excellent',
    size: 's',
    color: 'pink',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-s']
  },
  {
    slug: '269-pullovers-femme-2xl-et-plus-brown-new',
    name: 'Pullovers femme',
    description: 'Magnifique Pullovers femme de la collection Lacoste. État neuf. Matière premium en laine mérinos.',
    price: 175,
    originalPrice: 250,
    condition: 'new',
    size: '2xl-et-plus',
    color: 'brown',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-pullovers', 'femme-2xl-et-plus']
  },
  {
    slug: '270-survetements-femme-2xl-et-plus-green-new',
    name: 'Survêtements femme',
    description: 'Survêtements femme authentique Lacoste. État neuf. polyester technique durable et confortable.',
    price: 132,
    originalPrice: 188,
    condition: 'new',
    size: '2xl-et-plus',
    color: 'green',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-survetements', 'femme-2xl-et-plus']
  },
  {
    slug: '271-survetements-femme-xs-brown-new',
    name: 'Survêtements femme',
    description: 'Superbe Survêtements femme en polyester technique. État neuf. Coupe ajustée et confortable.',
    price: 25,
    originalPrice: 36,
    condition: 'new',
    size: 'xs',
    color: 'brown',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-survetements', 'femme-xs']
  },
  {
    slug: '272-chemises-homme-m-blue-excellent',
    name: 'Chemises homme',
    description: 'Chemises homme élégant et intemporel. Excellent état. Fabriqué en lin de haute qualité.',
    price: 203,
    originalPrice: 290,
    condition: 'excellent',
    size: 'm',
    color: 'blue',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-chemises', 'homme-m']
  },
  {
    slug: '273-tops-and-chemises-femme-2xl-et-plus-black-new',
    name: 'Tops & Chemises femme',
    description: 'Tops & Chemises femme élégant et intemporel. État neuf. Fabriqué en viscose de haute qualité.',
    price: 106,
    originalPrice: 152,
    condition: 'new',
    size: '2xl-et-plus',
    color: 'black',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-2xl-et-plus']
  },
  {
    slug: '274-robes-and-jupes-femme-xl-orange-good',
    name: 'Robes & Jupes femme',
    description: 'Robes & Jupes femme authentique Lacoste. Bon état. coton stretch durable et confortable.',
    price: 155,
    originalPrice: 221,
    condition: 'good',
    size: 'xl',
    color: 'orange',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-xl']
  },
  {
    slug: '275-survetements-femme-xl-green-excellent',
    name: 'Survêtements femme',
    description: 'Survêtements femme authentique Lacoste. Excellent état. matière stretch durable et confortable.',
    price: 83,
    originalPrice: 118,
    condition: 'excellent',
    size: 'xl',
    color: 'green',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-survetements', 'femme-xl']
  },
  {
    slug: '276-survetements-femme-m-brown-new',
    name: 'Survêtements femme',
    description:
      'Survêtements femme élégant et intemporel. État neuf. Fabriqué en polyester technique de haute qualité.',
    price: 209,
    originalPrice: 299,
    condition: 'new',
    size: 'm',
    color: 'brown',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-survetements', 'femme-m']
  },
  {
    slug: '277-maroquinerie-homme-l-grey-new',
    name: 'Maroquinerie homme',
    description: 'Magnifique Maroquinerie homme de la collection Lacoste. État neuf. Matière premium en nylon.',
    price: 119,
    originalPrice: 170,
    condition: 'new',
    size: 'l',
    color: 'grey',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-maroquinerie', 'homme-l']
  },
  {
    slug: '278-chemises-homme-m-grey-excellent',
    name: 'Chemises homme',
    description: 'Superbe Chemises homme en popeline. Excellent état. Coupe ajustée et confortable.',
    price: 31,
    originalPrice: 45,
    condition: 'excellent',
    size: 'm',
    color: 'grey',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-chemises', 'homme-m']
  },
  {
    slug: '279-maroquinerie-femme-2xl-et-plus-pink-excellent',
    name: 'Maroquinerie femme',
    description: 'Maroquinerie femme élégant et intemporel. Excellent état. Fabriqué en cuir de haute qualité.',
    price: 78,
    originalPrice: 111,
    condition: 'excellent',
    size: '2xl-et-plus',
    color: 'pink',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-2xl-et-plus']
  },
  {
    slug: '280-polos-homme-m-blue-good',
    name: 'Polos homme',
    description: 'Superbe Polos homme en coton bio. Bon état. Coupe ajustée et confortable.',
    price: 31,
    originalPrice: 45,
    condition: 'good',
    size: 'm',
    color: 'blue',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-polos', 'homme-m']
  },
  {
    slug: '281-chemises-homme-xl-yellow-new',
    name: 'Chemises homme',
    description: 'Chemises homme élégant et intemporel. État neuf. Fabriqué en popeline de haute qualité.',
    price: 53,
    originalPrice: 76,
    condition: 'new',
    size: 'xl',
    color: 'yellow',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-chemises', 'homme-xl']
  },
  {
    slug: '282-maroquinerie-homme-l-pink-very_good',
    name: 'Maroquinerie homme',
    description: 'Maroquinerie homme élégant et intemporel. Très bon état. Fabriqué en cuir de haute qualité.',
    price: 154,
    originalPrice: 193,
    condition: 'very_good',
    size: 'l',
    color: 'pink',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-maroquinerie', 'homme-l']
  },
  {
    slug: '283-manteaux-and-vestes-femme-l-red-excellent',
    name: 'Manteaux & Vestes femme',
    description:
      'Magnifique Manteaux & Vestes femme de la collection Lacoste. Excellent état. Matière premium en coton imperméable.',
    price: 200,
    originalPrice: 285,
    condition: 'excellent',
    size: 'l',
    color: 'red',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-l']
  },
  {
    slug: '284-pantalons-and-shorts-homme-l-green-excellent',
    name: 'Pantalons & Shorts homme',
    description: 'Pantalons & Shorts homme authentique Lacoste. Excellent état. coton sergé durable et confortable.',
    price: 170,
    originalPrice: 243,
    condition: 'excellent',
    size: 'l',
    color: 'green',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-l']
  },
  {
    slug: '285-pullovers-homme-xl-grey-good',
    name: 'Pullovers homme',
    description: 'Superbe Pullovers homme en cachemire. Bon état. Coupe ajustée et confortable.',
    price: 181,
    originalPrice: 258,
    condition: 'good',
    size: 'xl',
    color: 'grey',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-pullovers', 'homme-xl']
  },
  {
    slug: '286-polos-homme-l-purple-very_good',
    name: 'Polos homme',
    description: 'Polos homme élégant et intemporel. Très bon état. Fabriqué en jersey de coton de haute qualité.',
    price: 224,
    originalPrice: 280,
    condition: 'very_good',
    size: 'l',
    color: 'purple',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-polos', 'homme-l']
  },
  {
    slug: '287-sweatshirts-femme-m-grey-good',
    name: 'Sweatshirts femme',
    description: 'Sweatshirts femme élégant et intemporel. Bon état. Fabriqué en molleton de haute qualité.',
    price: 73,
    originalPrice: 104,
    condition: 'good',
    size: 'm',
    color: 'grey',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-sweatshirts', 'femme-m']
  },
  {
    slug: '288-maroquinerie-homme-s-black-excellent',
    name: 'Maroquinerie homme',
    description: 'Superbe Maroquinerie homme en cuir. Excellent état. Coupe ajustée et confortable.',
    price: 137,
    originalPrice: 196,
    condition: 'excellent',
    size: 's',
    color: 'black',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-maroquinerie', 'homme-s']
  },
  {
    slug: '289-manteaux-and-vestes-femme-m-yellow-good',
    name: 'Manteaux & Vestes femme',
    description: 'Superbe Manteaux & Vestes femme en laine. Bon état. Coupe ajustée et confortable.',
    price: 62,
    originalPrice: 89,
    condition: 'good',
    size: 'm',
    color: 'yellow',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-m']
  },
  {
    slug: '290-maroquinerie-homme-xs-green-excellent',
    name: 'Maroquinerie homme',
    description: 'Maroquinerie homme élégant et intemporel. Excellent état. Fabriqué en nylon de haute qualité.',
    price: 138,
    originalPrice: 197,
    condition: 'excellent',
    size: 'xs',
    color: 'green',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-maroquinerie', 'homme-xs']
  },
  {
    slug: '291-pullovers-femme-xl-blue-very_good',
    name: 'Pullovers femme',
    description: 'Superbe Pullovers femme en laine mérinos. Très bon état. Coupe ajustée et confortable.',
    price: 34,
    originalPrice: 42,
    condition: 'very_good',
    size: 'xl',
    color: 'blue',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-pullovers', 'femme-xl']
  },
  {
    slug: '292-t-shirts-homme-xs-black-new',
    name: 'T-shirts homme',
    description: 'T-shirts homme authentique Lacoste. État neuf. jersey fin durable et confortable.',
    price: 127,
    originalPrice: 181,
    condition: 'new',
    size: 'xs',
    color: 'black',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-t-shirts', 'homme-xs']
  },
  {
    slug: '293-pantalons-and-shorts-femme-s-red-excellent',
    name: 'Pantalons & Shorts femme',
    description: 'Pantalons & Shorts femme authentique Lacoste. Excellent état. toile de coton durable et confortable.',
    price: 185,
    originalPrice: 264,
    condition: 'excellent',
    size: 's',
    color: 'red',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-s']
  },
  {
    slug: '294-survetements-femme-xl-beige-good',
    name: 'Survêtements femme',
    description:
      'Magnifique Survêtements femme de la collection Lacoste. Bon état. Matière premium en coton molletonné.',
    price: 59,
    originalPrice: 85,
    condition: 'good',
    size: 'xl',
    color: 'beige',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-survetements', 'femme-xl']
  },
  {
    slug: '295-sweatshirts-homme-s-purple-very_good',
    name: 'Sweatshirts homme',
    description:
      'Magnifique Sweatshirts homme de la collection Lacoste. Très bon état. Matière premium en coton brossé.',
    price: 192,
    originalPrice: 240,
    condition: 'very_good',
    size: 's',
    color: 'purple',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-sweatshirts', 'homme-s']
  },
  {
    slug: '296-t-shirts-homme-m-blue-very_good',
    name: 'T-shirts homme',
    description: 'T-shirts homme élégant et intemporel. Très bon état. Fabriqué en coton de haute qualité.',
    price: 173,
    originalPrice: 216,
    condition: 'very_good',
    size: 'm',
    color: 'blue',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-t-shirts', 'homme-m']
  },
  {
    slug: '297-t-shirts-femme-l-white-new',
    name: 'T-shirts femme',
    description: 'T-shirts femme authentique Lacoste. État neuf. jersey fin durable et confortable.',
    price: 47,
    originalPrice: 67,
    condition: 'new',
    size: 'l',
    color: 'white',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-l']
  },
  {
    slug: '298-survetements-femme-m-green-very_good',
    name: 'Survêtements femme',
    description:
      'Magnifique Survêtements femme de la collection Lacoste. Très bon état. Matière premium en polyester technique.',
    price: 219,
    originalPrice: 274,
    condition: 'very_good',
    size: 'm',
    color: 'green',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-survetements', 'femme-m']
  },
  {
    slug: '299-sweatshirts-femme-xs-yellow-new',
    name: 'Sweatshirts femme',
    description: 'Sweatshirts femme authentique Lacoste. État neuf. molleton durable et confortable.',
    price: 55,
    originalPrice: 79,
    condition: 'new',
    size: 'xs',
    color: 'yellow',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-sweatshirts', 'femme-xs']
  },
  {
    slug: '300-survetements-homme-m-blue-good',
    name: 'Survêtements homme',
    description: 'Superbe Survêtements homme en polyester technique. Bon état. Coupe ajustée et confortable.',
    price: 130,
    originalPrice: 186,
    condition: 'good',
    size: 'm',
    color: 'blue',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-survetements', 'homme-m']
  },
  {
    slug: '301-manteaux-and-vestes-homme-xs-grey-very_good',
    name: 'Manteaux & Vestes homme',
    description:
      'Magnifique Manteaux & Vestes homme de la collection Lacoste. Très bon état. Matière premium en laine.',
    price: 178,
    originalPrice: 222,
    condition: 'very_good',
    size: 'xs',
    color: 'grey',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-xs']
  },
  {
    slug: '302-pullovers-homme-2xl-et-plus-beige-good',
    name: 'Pullovers homme',
    description: 'Pullovers homme authentique Lacoste. Bon état. cachemire durable et confortable.',
    price: 41,
    originalPrice: 59,
    condition: 'good',
    size: '2xl-et-plus',
    color: 'beige',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-pullovers', 'homme-2xl-et-plus']
  },
  {
    slug: '303-survetements-femme-xs-white-new',
    name: 'Survêtements femme',
    description:
      'Magnifique Survêtements femme de la collection Lacoste. État neuf. Matière premium en polyester technique.',
    price: 155,
    originalPrice: 222,
    condition: 'new',
    size: 'xs',
    color: 'white',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-survetements', 'femme-xs']
  },
  {
    slug: '304-tops-and-chemises-femme-xs-white-very_good',
    name: 'Tops & Chemises femme',
    description:
      'Magnifique Tops & Chemises femme de la collection Lacoste. Très bon état. Matière premium en viscose.',
    price: 200,
    originalPrice: 250,
    condition: 'very_good',
    size: 'xs',
    color: 'white',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-xs']
  },
  {
    slug: '305-pantalons-and-shorts-homme-xs-green-new',
    name: 'Pantalons & Shorts homme',
    description: 'Pantalons & Shorts homme authentique Lacoste. État neuf. coton sergé durable et confortable.',
    price: 71,
    originalPrice: 102,
    condition: 'new',
    size: 'xs',
    color: 'green',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-xs']
  },
  {
    slug: '306-manteaux-and-vestes-homme-2xl-et-plus-beige-very_good',
    name: 'Manteaux & Vestes homme',
    description: 'Manteaux & Vestes homme élégant et intemporel. Très bon état. Fabriqué en laine de haute qualité.',
    price: 223,
    originalPrice: 279,
    condition: 'very_good',
    size: '2xl-et-plus',
    color: 'beige',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-2xl-et-plus']
  },
  {
    slug: '307-manteaux-and-vestes-femme-m-beige-good',
    name: 'Manteaux & Vestes femme',
    description: 'Magnifique Manteaux & Vestes femme de la collection Lacoste. Bon état. Matière premium en laine.',
    price: 141,
    originalPrice: 202,
    condition: 'good',
    size: 'm',
    color: 'beige',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-m']
  },
  {
    slug: '308-survetements-homme-2xl-et-plus-red-very_good',
    name: 'Survêtements homme',
    description: 'Superbe Survêtements homme en matière stretch. Très bon état. Coupe ajustée et confortable.',
    price: 122,
    originalPrice: 153,
    condition: 'very_good',
    size: '2xl-et-plus',
    color: 'red',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-survetements', 'homme-2xl-et-plus']
  },
  {
    slug: '309-pantalons-and-shorts-homme-xs-black-very_good',
    name: 'Pantalons & Shorts homme',
    description: 'Pantalons & Shorts homme authentique Lacoste. Très bon état. gabardine durable et confortable.',
    price: 53,
    originalPrice: 66,
    condition: 'very_good',
    size: 'xs',
    color: 'black',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-xs']
  },
  {
    slug: '310-manteaux-and-vestes-femme-xl-beige-good',
    name: 'Manteaux & Vestes femme',
    description:
      'Manteaux & Vestes femme élégant et intemporel. Bon état. Fabriqué en polyester recyclé de haute qualité.',
    price: 95,
    originalPrice: 136,
    condition: 'good',
    size: 'xl',
    color: 'beige',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-xl']
  },
  {
    slug: '311-t-shirts-homme-l-red-new',
    name: 'T-shirts homme',
    description: 'T-shirts homme élégant et intemporel. État neuf. Fabriqué en coton organique de haute qualité.',
    price: 139,
    originalPrice: 199,
    condition: 'new',
    size: 'l',
    color: 'red',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-t-shirts', 'homme-l']
  },
  {
    slug: '312-manteaux-and-vestes-homme-xs-orange-good',
    name: 'Manteaux & Vestes homme',
    description: 'Manteaux & Vestes homme authentique Lacoste. Bon état. laine durable et confortable.',
    price: 95,
    originalPrice: 136,
    condition: 'good',
    size: 'xs',
    color: 'orange',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-xs']
  },
  {
    slug: '313-manteaux-and-vestes-femme-xl-purple-new',
    name: 'Manteaux & Vestes femme',
    description: 'Superbe Manteaux & Vestes femme en laine. État neuf. Coupe ajustée et confortable.',
    price: 190,
    originalPrice: 272,
    condition: 'new',
    size: 'xl',
    color: 'purple',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-xl']
  },
  {
    slug: '314-pantalons-and-shorts-femme-xs-purple-good',
    name: 'Pantalons & Shorts femme',
    description: 'Pantalons & Shorts femme authentique Lacoste. Bon état. gabardine durable et confortable.',
    price: 123,
    originalPrice: 176,
    condition: 'good',
    size: 'xs',
    color: 'purple',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-xs']
  },
  {
    slug: '315-pantalons-and-shorts-femme-s-purple-new',
    name: 'Pantalons & Shorts femme',
    description: 'Pantalons & Shorts femme élégant et intemporel. État neuf. Fabriqué en coton sergé de haute qualité.',
    price: 61,
    originalPrice: 87,
    condition: 'new',
    size: 's',
    color: 'purple',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-s']
  },
  {
    slug: '316-t-shirts-femme-xs-grey-good',
    name: 'T-shirts femme',
    description: 'Superbe T-shirts femme en jersey fin. Bon état. Coupe ajustée et confortable.',
    price: 125,
    originalPrice: 179,
    condition: 'good',
    size: 'xs',
    color: 'grey',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-xs']
  },
  {
    slug: '317-chemises-homme-xs-red-good',
    name: 'Chemises homme',
    description: 'Chemises homme authentique Lacoste. Bon état. lin durable et confortable.',
    price: 46,
    originalPrice: 66,
    condition: 'good',
    size: 'xs',
    color: 'red',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-chemises', 'homme-xs']
  },
  {
    slug: '318-robes-and-jupes-femme-xl-pink-new',
    name: 'Robes & Jupes femme',
    description: 'Robes & Jupes femme élégant et intemporel. État neuf. Fabriqué en jersey de haute qualité.',
    price: 92,
    originalPrice: 131,
    condition: 'new',
    size: 'xl',
    color: 'pink',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-xl']
  },
  {
    slug: '319-sweatshirts-femme-xs-blue-new',
    name: 'Sweatshirts femme',
    description: 'Magnifique Sweatshirts femme de la collection Lacoste. État neuf. Matière premium en molleton.',
    price: 197,
    originalPrice: 282,
    condition: 'new',
    size: 'xs',
    color: 'blue',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-sweatshirts', 'femme-xs']
  },
  {
    slug: '320-pullovers-femme-xl-red-excellent',
    name: 'Pullovers femme',
    description: 'Superbe Pullovers femme en coton tricoté. Excellent état. Coupe ajustée et confortable.',
    price: 21,
    originalPrice: 30,
    condition: 'excellent',
    size: 'xl',
    color: 'red',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-pullovers', 'femme-xl']
  },
  {
    slug: '321-pullovers-femme-s-red-very_good',
    name: 'Pullovers femme',
    description: 'Pullovers femme authentique Lacoste. Très bon état. laine mérinos durable et confortable.',
    price: 30,
    originalPrice: 38,
    condition: 'very_good',
    size: 's',
    color: 'red',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-pullovers', 'femme-s']
  },
  {
    slug: '322-maroquinerie-femme-2xl-et-plus-brown-new',
    name: 'Maroquinerie femme',
    description: 'Maroquinerie femme élégant et intemporel. État neuf. Fabriqué en nylon de haute qualité.',
    price: 170,
    originalPrice: 243,
    condition: 'new',
    size: '2xl-et-plus',
    color: 'brown',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-2xl-et-plus']
  },
  {
    slug: '323-manteaux-and-vestes-femme-l-orange-very_good',
    name: 'Manteaux & Vestes femme',
    description: 'Superbe Manteaux & Vestes femme en laine. Très bon état. Coupe ajustée et confortable.',
    price: 40,
    originalPrice: 50,
    condition: 'very_good',
    size: 'l',
    color: 'orange',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-l']
  },
  {
    slug: '324-sweatshirts-homme-m-red-excellent',
    name: 'Sweatshirts homme',
    description: 'Superbe Sweatshirts homme en jersey lourd. Excellent état. Coupe ajustée et confortable.',
    price: 108,
    originalPrice: 154,
    condition: 'excellent',
    size: 'm',
    color: 'red',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-sweatshirts', 'homme-m']
  },
  {
    slug: '325-pantalons-and-shorts-femme-m-black-new',
    name: 'Pantalons & Shorts femme',
    description: 'Pantalons & Shorts femme authentique Lacoste. État neuf. coton sergé durable et confortable.',
    price: 56,
    originalPrice: 80,
    condition: 'new',
    size: 'm',
    color: 'black',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-m']
  },
  {
    slug: '326-maroquinerie-homme-xl-black-very_good',
    name: 'Maroquinerie homme',
    description:
      'Magnifique Maroquinerie homme de la collection Lacoste. Très bon état. Matière premium en toile enduite.',
    price: 230,
    originalPrice: 288,
    condition: 'very_good',
    size: 'xl',
    color: 'black',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-maroquinerie', 'homme-xl']
  },
  {
    slug: '327-sweatshirts-femme-2xl-et-plus-black-very_good',
    name: 'Sweatshirts femme',
    description: 'Superbe Sweatshirts femme en molleton. Très bon état. Coupe ajustée et confortable.',
    price: 61,
    originalPrice: 76,
    condition: 'very_good',
    size: '2xl-et-plus',
    color: 'black',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-sweatshirts', 'femme-2xl-et-plus']
  },
  {
    slug: '328-pantalons-and-shorts-femme-xl-beige-good',
    name: 'Pantalons & Shorts femme',
    description:
      'Magnifique Pantalons & Shorts femme de la collection Lacoste. Bon état. Matière premium en gabardine.',
    price: 92,
    originalPrice: 132,
    condition: 'good',
    size: 'xl',
    color: 'beige',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-xl']
  },
  {
    slug: '329-chemises-homme-xs-brown-excellent',
    name: 'Chemises homme',
    description: 'Superbe Chemises homme en oxford. Excellent état. Coupe ajustée et confortable.',
    price: 95,
    originalPrice: 136,
    condition: 'excellent',
    size: 'xs',
    color: 'brown',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-chemises', 'homme-xs']
  },
  {
    slug: '330-manteaux-and-vestes-femme-l-black-good',
    name: 'Manteaux & Vestes femme',
    description: 'Manteaux & Vestes femme authentique Lacoste. Bon état. coton imperméable durable et confortable.',
    price: 92,
    originalPrice: 131,
    condition: 'good',
    size: 'l',
    color: 'black',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-l']
  },
  {
    slug: '331-pantalons-and-shorts-femme-xs-blue-excellent',
    name: 'Pantalons & Shorts femme',
    description:
      'Pantalons & Shorts femme élégant et intemporel. Excellent état. Fabriqué en toile de coton de haute qualité.',
    price: 61,
    originalPrice: 87,
    condition: 'excellent',
    size: 'xs',
    color: 'blue',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-xs']
  },
  {
    slug: '332-maroquinerie-homme-xl-blue-new',
    name: 'Maroquinerie homme',
    description: 'Superbe Maroquinerie homme en cuir. État neuf. Coupe ajustée et confortable.',
    price: 199,
    originalPrice: 284,
    condition: 'new',
    size: 'xl',
    color: 'blue',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-maroquinerie', 'homme-xl']
  },
  {
    slug: '333-sweatshirts-femme-s-black-good',
    name: 'Sweatshirts femme',
    description: 'Sweatshirts femme authentique Lacoste. Bon état. jersey lourd durable et confortable.',
    price: 62,
    originalPrice: 89,
    condition: 'good',
    size: 's',
    color: 'black',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-sweatshirts', 'femme-s']
  },
  {
    slug: '334-t-shirts-homme-m-red-very_good',
    name: 'T-shirts homme',
    description: 'Magnifique T-shirts homme de la collection Lacoste. Très bon état. Matière premium en jersey fin.',
    price: 86,
    originalPrice: 108,
    condition: 'very_good',
    size: 'm',
    color: 'red',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-t-shirts', 'homme-m']
  },
  {
    slug: '335-t-shirts-homme-2xl-et-plus-pink-new',
    name: 'T-shirts homme',
    description: 'T-shirts homme élégant et intemporel. État neuf. Fabriqué en jersey fin de haute qualité.',
    price: 104,
    originalPrice: 148,
    condition: 'new',
    size: '2xl-et-plus',
    color: 'pink',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-t-shirts', 'homme-2xl-et-plus']
  },
  {
    slug: '336-polos-homme-2xl-et-plus-orange-new',
    name: 'Polos homme',
    description: 'Magnifique Polos homme de la collection Lacoste. État neuf. Matière premium en jersey de coton.',
    price: 79,
    originalPrice: 113,
    condition: 'new',
    size: '2xl-et-plus',
    color: 'orange',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-polos', 'homme-2xl-et-plus']
  },
  {
    slug: '337-chemises-homme-xl-yellow-good',
    name: 'Chemises homme',
    description: 'Superbe Chemises homme en oxford. Bon état. Coupe ajustée et confortable.',
    price: 98,
    originalPrice: 140,
    condition: 'good',
    size: 'xl',
    color: 'yellow',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-chemises', 'homme-xl']
  },
  {
    slug: '338-polos-homme-s-grey-new',
    name: 'Polos homme',
    description: 'Magnifique Polos homme de la collection Lacoste. État neuf. Matière premium en coton bio.',
    price: 124,
    originalPrice: 177,
    condition: 'new',
    size: 's',
    color: 'grey',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-polos', 'homme-s']
  },
  {
    slug: '339-t-shirts-homme-xs-red-new',
    name: 'T-shirts homme',
    description: 'Magnifique T-shirts homme de la collection Lacoste. État neuf. Matière premium en coton organique.',
    price: 190,
    originalPrice: 272,
    condition: 'new',
    size: 'xs',
    color: 'red',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-t-shirts', 'homme-xs']
  },
  {
    slug: '340-survetements-femme-xs-pink-very_good',
    name: 'Survêtements femme',
    description: 'Superbe Survêtements femme en polyester technique. Très bon état. Coupe ajustée et confortable.',
    price: 119,
    originalPrice: 149,
    condition: 'very_good',
    size: 'xs',
    color: 'pink',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-survetements', 'femme-xs']
  },
  {
    slug: '341-pantalons-and-shorts-homme-xl-grey-very_good',
    name: 'Pantalons & Shorts homme',
    description:
      'Pantalons & Shorts homme élégant et intemporel. Très bon état. Fabriqué en gabardine de haute qualité.',
    price: 166,
    originalPrice: 208,
    condition: 'very_good',
    size: 'xl',
    color: 'grey',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-xl']
  },
  {
    slug: '342-pullovers-homme-xs-pink-very_good',
    name: 'Pullovers homme',
    description:
      'Magnifique Pullovers homme de la collection Lacoste. Très bon état. Matière premium en laine mérinos.',
    price: 196,
    originalPrice: 245,
    condition: 'very_good',
    size: 'xs',
    color: 'pink',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-pullovers', 'homme-xs']
  },
  {
    slug: '343-survetements-femme-m-purple-excellent',
    name: 'Survêtements femme',
    description:
      'Survêtements femme élégant et intemporel. Excellent état. Fabriqué en matière stretch de haute qualité.',
    price: 39,
    originalPrice: 56,
    condition: 'excellent',
    size: 'm',
    color: 'purple',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-survetements', 'femme-m']
  },
  {
    slug: '344-pantalons-and-shorts-femme-xl-red-very_good',
    name: 'Pantalons & Shorts femme',
    description:
      'Pantalons & Shorts femme élégant et intemporel. Très bon état. Fabriqué en toile de coton de haute qualité.',
    price: 222,
    originalPrice: 278,
    condition: 'very_good',
    size: 'xl',
    color: 'red',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-xl']
  },
  {
    slug: '345-sweatshirts-homme-s-blue-good',
    name: 'Sweatshirts homme',
    description: 'Superbe Sweatshirts homme en jersey lourd. Bon état. Coupe ajustée et confortable.',
    price: 185,
    originalPrice: 264,
    condition: 'good',
    size: 's',
    color: 'blue',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-sweatshirts', 'homme-s']
  },
  {
    slug: '346-sweatshirts-femme-xl-brown-new',
    name: 'Sweatshirts femme',
    description: 'Magnifique Sweatshirts femme de la collection Lacoste. État neuf. Matière premium en coton brossé.',
    price: 50,
    originalPrice: 72,
    condition: 'new',
    size: 'xl',
    color: 'brown',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-sweatshirts', 'femme-xl']
  },
  {
    slug: '347-maroquinerie-homme-xl-green-good',
    name: 'Maroquinerie homme',
    description: 'Superbe Maroquinerie homme en nylon. Bon état. Coupe ajustée et confortable.',
    price: 88,
    originalPrice: 126,
    condition: 'good',
    size: 'xl',
    color: 'green',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-maroquinerie', 'homme-xl']
  },
  {
    slug: '348-t-shirts-homme-s-red-very_good',
    name: 'T-shirts homme',
    description: 'T-shirts homme élégant et intemporel. Très bon état. Fabriqué en coton de haute qualité.',
    price: 186,
    originalPrice: 232,
    condition: 'very_good',
    size: 's',
    color: 'red',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-t-shirts', 'homme-s']
  },
  {
    slug: '349-maroquinerie-homme-xl-grey-new',
    name: 'Maroquinerie homme',
    description: 'Magnifique Maroquinerie homme de la collection Lacoste. État neuf. Matière premium en nylon.',
    price: 56,
    originalPrice: 80,
    condition: 'new',
    size: 'xl',
    color: 'grey',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-maroquinerie', 'homme-xl']
  },
  {
    slug: '350-pantalons-and-shorts-femme-2xl-et-plus-red-very_good',
    name: 'Pantalons & Shorts femme',
    description: 'Superbe Pantalons & Shorts femme en coton sergé. Très bon état. Coupe ajustée et confortable.',
    price: 37,
    originalPrice: 46,
    condition: 'very_good',
    size: '2xl-et-plus',
    color: 'red',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-2xl-et-plus']
  },
  {
    slug: '351-manteaux-and-vestes-homme-l-purple-good',
    name: 'Manteaux & Vestes homme',
    description: 'Manteaux & Vestes homme authentique Lacoste. Bon état. laine durable et confortable.',
    price: 138,
    originalPrice: 197,
    condition: 'good',
    size: 'l',
    color: 'purple',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-l']
  },
  {
    slug: '352-chemises-homme-xl-green-good',
    name: 'Chemises homme',
    description: 'Chemises homme authentique Lacoste. Bon état. oxford durable et confortable.',
    price: 112,
    originalPrice: 160,
    condition: 'good',
    size: 'xl',
    color: 'green',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-chemises', 'homme-xl']
  },
  {
    slug: '353-pullovers-homme-s-grey-very_good',
    name: 'Pullovers homme',
    description: 'Superbe Pullovers homme en coton tricoté. Très bon état. Coupe ajustée et confortable.',
    price: 161,
    originalPrice: 201,
    condition: 'very_good',
    size: 's',
    color: 'grey',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-pullovers', 'homme-s']
  },
  {
    slug: '354-pullovers-homme-m-brown-new',
    name: 'Pullovers homme',
    description: 'Superbe Pullovers homme en coton tricoté. État neuf. Coupe ajustée et confortable.',
    price: 64,
    originalPrice: 91,
    condition: 'new',
    size: 'm',
    color: 'brown',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-pullovers', 'homme-m']
  },
  {
    slug: '355-pullovers-homme-xs-pink-very_good',
    name: 'Pullovers homme',
    description: 'Magnifique Pullovers homme de la collection Lacoste. Très bon état. Matière premium en cachemire.',
    price: 26,
    originalPrice: 32,
    condition: 'very_good',
    size: 'xs',
    color: 'pink',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-pullovers', 'homme-xs']
  },
  {
    slug: '356-t-shirts-femme-s-purple-good',
    name: 'T-shirts femme',
    description: 'Magnifique T-shirts femme de la collection Lacoste. Bon état. Matière premium en coton.',
    price: 181,
    originalPrice: 259,
    condition: 'good',
    size: 's',
    color: 'purple',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-s']
  },
  {
    slug: '357-pantalons-and-shorts-homme-2xl-et-plus-orange-excellent',
    name: 'Pantalons & Shorts homme',
    description: 'Pantalons & Shorts homme authentique Lacoste. Excellent état. gabardine durable et confortable.',
    price: 174,
    originalPrice: 249,
    condition: 'excellent',
    size: '2xl-et-plus',
    color: 'orange',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-2xl-et-plus']
  },
  {
    slug: '358-sweatshirts-homme-xl-purple-good',
    name: 'Sweatshirts homme',
    description: 'Superbe Sweatshirts homme en coton brossé. Bon état. Coupe ajustée et confortable.',
    price: 132,
    originalPrice: 188,
    condition: 'good',
    size: 'xl',
    color: 'purple',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-sweatshirts', 'homme-xl']
  },
  {
    slug: '359-sweatshirts-femme-l-yellow-good',
    name: 'Sweatshirts femme',
    description: 'Magnifique Sweatshirts femme de la collection Lacoste. Bon état. Matière premium en molleton.',
    price: 29,
    originalPrice: 42,
    condition: 'good',
    size: 'l',
    color: 'yellow',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-sweatshirts', 'femme-l']
  },
  {
    slug: '360-sweatshirts-homme-s-grey-very_good',
    name: 'Sweatshirts homme',
    description: 'Sweatshirts homme élégant et intemporel. Très bon état. Fabriqué en molleton de haute qualité.',
    price: 96,
    originalPrice: 120,
    condition: 'very_good',
    size: 's',
    color: 'grey',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-sweatshirts', 'homme-s']
  },
  {
    slug: '361-polos-homme-s-beige-very_good',
    name: 'Polos homme',
    description: 'Polos homme élégant et intemporel. Très bon état. Fabriqué en coton piqué de haute qualité.',
    price: 185,
    originalPrice: 231,
    condition: 'very_good',
    size: 's',
    color: 'beige',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-polos', 'homme-s']
  },
  {
    slug: '362-pullovers-homme-2xl-et-plus-yellow-new',
    name: 'Pullovers homme',
    description: 'Pullovers homme authentique Lacoste. État neuf. cachemire durable et confortable.',
    price: 104,
    originalPrice: 148,
    condition: 'new',
    size: '2xl-et-plus',
    color: 'yellow',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-pullovers', 'homme-2xl-et-plus']
  },
  {
    slug: '363-maroquinerie-femme-s-black-excellent',
    name: 'Maroquinerie femme',
    description: 'Maroquinerie femme authentique Lacoste. Excellent état. toile enduite durable et confortable.',
    price: 201,
    originalPrice: 287,
    condition: 'excellent',
    size: 's',
    color: 'black',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-s']
  },
  {
    slug: '364-survetements-homme-m-red-very_good',
    name: 'Survêtements homme',
    description:
      'Survêtements homme élégant et intemporel. Très bon état. Fabriqué en polyester technique de haute qualité.',
    price: 209,
    originalPrice: 261,
    condition: 'very_good',
    size: 'm',
    color: 'red',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-survetements', 'homme-m']
  },
  {
    slug: '365-pullovers-homme-xl-white-good',
    name: 'Pullovers homme',
    description: 'Magnifique Pullovers homme de la collection Lacoste. Bon état. Matière premium en cachemire.',
    price: 105,
    originalPrice: 150,
    condition: 'good',
    size: 'xl',
    color: 'white',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-pullovers', 'homme-xl']
  },
  {
    slug: '366-survetements-homme-2xl-et-plus-grey-good',
    name: 'Survêtements homme',
    description: 'Superbe Survêtements homme en polyester technique. Bon état. Coupe ajustée et confortable.',
    price: 108,
    originalPrice: 154,
    condition: 'good',
    size: '2xl-et-plus',
    color: 'grey',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-survetements', 'homme-2xl-et-plus']
  },
  {
    slug: '367-pantalons-and-shorts-femme-xs-brown-new',
    name: 'Pantalons & Shorts femme',
    description: 'Superbe Pantalons & Shorts femme en toile de coton. État neuf. Coupe ajustée et confortable.',
    price: 127,
    originalPrice: 182,
    condition: 'new',
    size: 'xs',
    color: 'brown',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-xs']
  },
  {
    slug: '368-pantalons-and-shorts-femme-xs-black-new',
    name: 'Pantalons & Shorts femme',
    description: 'Pantalons & Shorts femme authentique Lacoste. État neuf. gabardine durable et confortable.',
    price: 105,
    originalPrice: 150,
    condition: 'new',
    size: 'xs',
    color: 'black',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-xs']
  },
  {
    slug: '369-manteaux-and-vestes-femme-l-orange-excellent',
    name: 'Manteaux & Vestes femme',
    description: 'Superbe Manteaux & Vestes femme en polyester recyclé. Excellent état. Coupe ajustée et confortable.',
    price: 193,
    originalPrice: 275,
    condition: 'excellent',
    size: 'l',
    color: 'orange',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-l']
  },
  {
    slug: '370-polos-homme-xl-green-good',
    name: 'Polos homme',
    description: 'Superbe Polos homme en coton piqué. Bon état. Coupe ajustée et confortable.',
    price: 27,
    originalPrice: 38,
    condition: 'good',
    size: 'xl',
    color: 'green',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-polos', 'homme-xl']
  },
  {
    slug: '371-manteaux-and-vestes-homme-xl-grey-new',
    name: 'Manteaux & Vestes homme',
    description:
      'Magnifique Manteaux & Vestes homme de la collection Lacoste. État neuf. Matière premium en polyester recyclé.',
    price: 46,
    originalPrice: 65,
    condition: 'new',
    size: 'xl',
    color: 'grey',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-xl']
  },
  {
    slug: '372-t-shirts-femme-m-grey-good',
    name: 'T-shirts femme',
    description: 'T-shirts femme élégant et intemporel. Bon état. Fabriqué en coton de haute qualité.',
    price: 60,
    originalPrice: 86,
    condition: 'good',
    size: 'm',
    color: 'grey',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-m']
  },
  {
    slug: '373-survetements-homme-s-grey-excellent',
    name: 'Survêtements homme',
    description: 'Superbe Survêtements homme en polyester technique. Excellent état. Coupe ajustée et confortable.',
    price: 181,
    originalPrice: 259,
    condition: 'excellent',
    size: 's',
    color: 'grey',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-survetements', 'homme-s']
  },
  {
    slug: '374-robes-and-jupes-femme-2xl-et-plus-purple-good',
    name: 'Robes & Jupes femme',
    description: 'Magnifique Robes & Jupes femme de la collection Lacoste. Bon état. Matière premium en jersey.',
    price: 194,
    originalPrice: 277,
    condition: 'good',
    size: '2xl-et-plus',
    color: 'purple',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-2xl-et-plus']
  },
  {
    slug: '375-t-shirts-femme-xl-yellow-very_good',
    name: 'T-shirts femme',
    description: 'T-shirts femme élégant et intemporel. Très bon état. Fabriqué en coton organique de haute qualité.',
    price: 135,
    originalPrice: 169,
    condition: 'very_good',
    size: 'xl',
    color: 'yellow',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-xl']
  },
  {
    slug: '376-t-shirts-femme-2xl-et-plus-yellow-excellent',
    name: 'T-shirts femme',
    description: 'T-shirts femme élégant et intemporel. Excellent état. Fabriqué en jersey fin de haute qualité.',
    price: 48,
    originalPrice: 69,
    condition: 'excellent',
    size: '2xl-et-plus',
    color: 'yellow',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-2xl-et-plus']
  },
  {
    slug: '377-pullovers-femme-l-red-new',
    name: 'Pullovers femme',
    description: 'Pullovers femme authentique Lacoste. État neuf. coton tricoté durable et confortable.',
    price: 184,
    originalPrice: 263,
    condition: 'new',
    size: 'l',
    color: 'red',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-pullovers', 'femme-l']
  },
  {
    slug: '378-pullovers-homme-s-beige-new',
    name: 'Pullovers homme',
    description: 'Pullovers homme élégant et intemporel. État neuf. Fabriqué en cachemire de haute qualité.',
    price: 104,
    originalPrice: 149,
    condition: 'new',
    size: 's',
    color: 'beige',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-pullovers', 'homme-s']
  },
  {
    slug: '379-sweatshirts-femme-l-red-very_good',
    name: 'Sweatshirts femme',
    description: 'Sweatshirts femme élégant et intemporel. Très bon état. Fabriqué en coton brossé de haute qualité.',
    price: 110,
    originalPrice: 138,
    condition: 'very_good',
    size: 'l',
    color: 'red',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-sweatshirts', 'femme-l']
  },
  {
    slug: '380-chemises-femme-l-white-very_good',
    name: 'Chemises femme',
    description: 'Chemises femme authentique Lacoste. Très bon état. lin durable et confortable.',
    price: 214,
    originalPrice: 268,
    condition: 'very_good',
    size: 'l',
    color: 'white',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-l']
  },
  {
    slug: '381-tops-and-chemises-femme-xs-brown-new',
    name: 'Tops & Chemises femme',
    description: 'Tops & Chemises femme authentique Lacoste. État neuf. popeline de coton durable et confortable.',
    price: 104,
    originalPrice: 149,
    condition: 'new',
    size: 'xs',
    color: 'brown',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-xs']
  },
  {
    slug: '382-sweatshirts-femme-2xl-et-plus-brown-new',
    name: 'Sweatshirts femme',
    description: 'Sweatshirts femme élégant et intemporel. État neuf. Fabriqué en coton brossé de haute qualité.',
    price: 83,
    originalPrice: 118,
    condition: 'new',
    size: '2xl-et-plus',
    color: 'brown',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-sweatshirts', 'femme-2xl-et-plus']
  },
  {
    slug: '383-survetements-femme-l-purple-new',
    name: 'Survêtements femme',
    description: 'Superbe Survêtements femme en polyester technique. État neuf. Coupe ajustée et confortable.',
    price: 24,
    originalPrice: 34,
    condition: 'new',
    size: 'l',
    color: 'purple',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-survetements', 'femme-l']
  },
  {
    slug: '384-sweatshirts-homme-xs-pink-excellent',
    name: 'Sweatshirts homme',
    description: 'Sweatshirts homme élégant et intemporel. Excellent état. Fabriqué en molleton de haute qualité.',
    price: 85,
    originalPrice: 121,
    condition: 'excellent',
    size: 'xs',
    color: 'pink',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-sweatshirts', 'homme-xs']
  },
  {
    slug: '385-maroquinerie-femme-l-beige-very_good',
    name: 'Maroquinerie femme',
    description: 'Maroquinerie femme élégant et intemporel. Très bon état. Fabriqué en nylon de haute qualité.',
    price: 61,
    originalPrice: 76,
    condition: 'very_good',
    size: 'l',
    color: 'beige',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-l']
  },
  {
    slug: '386-chemises-femme-xl-beige-good',
    name: 'Chemises femme',
    description: 'Superbe Chemises femme en oxford. Bon état. Coupe ajustée et confortable.',
    price: 150,
    originalPrice: 214,
    condition: 'good',
    size: 'xl',
    color: 'beige',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-xl']
  },
  {
    slug: '387-chemises-homme-xs-yellow-very_good',
    name: 'Chemises homme',
    description: 'Chemises homme élégant et intemporel. Très bon état. Fabriqué en lin de haute qualité.',
    price: 130,
    originalPrice: 163,
    condition: 'very_good',
    size: 'xs',
    color: 'yellow',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-chemises', 'homme-xs']
  },
  {
    slug: '388-pullovers-femme-xs-brown-good',
    name: 'Pullovers femme',
    description: 'Magnifique Pullovers femme de la collection Lacoste. Bon état. Matière premium en coton tricoté.',
    price: 175,
    originalPrice: 250,
    condition: 'good',
    size: 'xs',
    color: 'brown',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-pullovers', 'femme-xs']
  },
  {
    slug: '389-manteaux-and-vestes-femme-m-beige-new',
    name: 'Manteaux & Vestes femme',
    description: 'Manteaux & Vestes femme élégant et intemporel. État neuf. Fabriqué en laine de haute qualité.',
    price: 202,
    originalPrice: 288,
    condition: 'new',
    size: 'm',
    color: 'beige',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-m']
  },
  {
    slug: '390-manteaux-and-vestes-homme-m-purple-very_good',
    name: 'Manteaux & Vestes homme',
    description: 'Superbe Manteaux & Vestes homme en laine. Très bon état. Coupe ajustée et confortable.',
    price: 70,
    originalPrice: 87,
    condition: 'very_good',
    size: 'm',
    color: 'purple',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-m']
  },
  {
    slug: '391-pantalons-and-shorts-homme-xl-brown-excellent',
    name: 'Pantalons & Shorts homme',
    description: 'Pantalons & Shorts homme authentique Lacoste. Excellent état. toile de coton durable et confortable.',
    price: 117,
    originalPrice: 167,
    condition: 'excellent',
    size: 'xl',
    color: 'brown',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-xl']
  },
  {
    slug: '392-maroquinerie-homme-xs-yellow-very_good',
    name: 'Maroquinerie homme',
    description: 'Maroquinerie homme authentique Lacoste. Très bon état. nylon durable et confortable.',
    price: 170,
    originalPrice: 213,
    condition: 'very_good',
    size: 'xs',
    color: 'yellow',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-maroquinerie', 'homme-xs']
  },
  {
    slug: '393-t-shirts-femme-xs-white-very_good',
    name: 'T-shirts femme',
    description: 'Magnifique T-shirts femme de la collection Lacoste. Très bon état. Matière premium en jersey fin.',
    price: 73,
    originalPrice: 91,
    condition: 'very_good',
    size: 'xs',
    color: 'white',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-xs']
  },
  {
    slug: '394-robes-and-jupes-femme-2xl-et-plus-beige-excellent',
    name: 'Robes & Jupes femme',
    description:
      'Robes & Jupes femme élégant et intemporel. Excellent état. Fabriqué en coton stretch de haute qualité.',
    price: 199,
    originalPrice: 284,
    condition: 'excellent',
    size: '2xl-et-plus',
    color: 'beige',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-2xl-et-plus']
  },
  {
    slug: '395-tops-and-chemises-femme-l-black-good',
    name: 'Tops & Chemises femme',
    description: 'Superbe Tops & Chemises femme en popeline de coton. Bon état. Coupe ajustée et confortable.',
    price: 81,
    originalPrice: 116,
    condition: 'good',
    size: 'l',
    color: 'black',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-l']
  },
  {
    slug: '396-chemises-femme-s-brown-very_good',
    name: 'Chemises femme',
    description: 'Chemises femme authentique Lacoste. Très bon état. popeline durable et confortable.',
    price: 46,
    originalPrice: 58,
    condition: 'very_good',
    size: 's',
    color: 'brown',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-s']
  },
  {
    slug: '397-sweatshirts-femme-2xl-et-plus-orange-very_good',
    name: 'Sweatshirts femme',
    description: 'Sweatshirts femme élégant et intemporel. Très bon état. Fabriqué en molleton de haute qualité.',
    price: 61,
    originalPrice: 76,
    condition: 'very_good',
    size: '2xl-et-plus',
    color: 'orange',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-sweatshirts', 'femme-2xl-et-plus']
  },
  {
    slug: '398-tops-and-chemises-femme-xs-yellow-good',
    name: 'Tops & Chemises femme',
    description: 'Tops & Chemises femme élégant et intemporel. Bon état. Fabriqué en viscose de haute qualité.',
    price: 153,
    originalPrice: 219,
    condition: 'good',
    size: 'xs',
    color: 'yellow',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-xs']
  },
  {
    slug: '399-chemises-femme-xs-white-excellent',
    name: 'Chemises femme',
    description: 'Superbe Chemises femme en popeline. Excellent état. Coupe ajustée et confortable.',
    price: 186,
    originalPrice: 266,
    condition: 'excellent',
    size: 'xs',
    color: 'white',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-xs']
  },
  {
    slug: '400-polos-homme-xl-grey-excellent',
    name: 'Polos homme',
    description: 'Magnifique Polos homme de la collection Lacoste. Excellent état. Matière premium en jersey de coton.',
    price: 186,
    originalPrice: 266,
    condition: 'excellent',
    size: 'xl',
    color: 'grey',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-polos', 'homme-xl']
  },
  {
    slug: '401-t-shirts-femme-xl-orange-excellent',
    name: 'T-shirts femme',
    description: 'T-shirts femme authentique Lacoste. Excellent état. coton organique durable et confortable.',
    price: 89,
    originalPrice: 127,
    condition: 'excellent',
    size: 'xl',
    color: 'orange',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-xl']
  },
  {
    slug: '402-t-shirts-femme-s-beige-excellent',
    name: 'T-shirts femme',
    description: 'Magnifique T-shirts femme de la collection Lacoste. Excellent état. Matière premium en coton.',
    price: 99,
    originalPrice: 141,
    condition: 'excellent',
    size: 's',
    color: 'beige',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-s']
  },
  {
    slug: '403-survetements-homme-l-purple-good',
    name: 'Survêtements homme',
    description: 'Survêtements homme élégant et intemporel. Bon état. Fabriqué en coton molletonné de haute qualité.',
    price: 149,
    originalPrice: 213,
    condition: 'good',
    size: 'l',
    color: 'purple',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-survetements', 'homme-l']
  },
  {
    slug: '404-maroquinerie-homme-m-beige-good',
    name: 'Maroquinerie homme',
    description: 'Maroquinerie homme élégant et intemporel. Bon état. Fabriqué en toile enduite de haute qualité.',
    price: 200,
    originalPrice: 285,
    condition: 'good',
    size: 'm',
    color: 'beige',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-maroquinerie', 'homme-m']
  },
  {
    slug: '405-survetements-femme-xl-green-excellent',
    name: 'Survêtements femme',
    description: 'Survêtements femme authentique Lacoste. Excellent état. coton molletonné durable et confortable.',
    price: 86,
    originalPrice: 123,
    condition: 'excellent',
    size: 'xl',
    color: 'green',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-survetements', 'femme-xl']
  },
  {
    slug: '406-pantalons-and-shorts-homme-xs-purple-good',
    name: 'Pantalons & Shorts homme',
    description:
      'Magnifique Pantalons & Shorts homme de la collection Lacoste. Bon état. Matière premium en coton sergé.',
    price: 90,
    originalPrice: 128,
    condition: 'good',
    size: 'xs',
    color: 'purple',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-xs']
  },
  {
    slug: '407-chemises-femme-xs-yellow-good',
    name: 'Chemises femme',
    description: 'Chemises femme authentique Lacoste. Bon état. popeline durable et confortable.',
    price: 166,
    originalPrice: 237,
    condition: 'good',
    size: 'xs',
    color: 'yellow',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-xs']
  },
  {
    slug: '408-polos-homme-2xl-et-plus-beige-new',
    name: 'Polos homme',
    description: 'Polos homme élégant et intemporel. État neuf. Fabriqué en jersey de coton de haute qualité.',
    price: 164,
    originalPrice: 234,
    condition: 'new',
    size: '2xl-et-plus',
    color: 'beige',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-polos', 'homme-2xl-et-plus']
  },
  {
    slug: '409-maroquinerie-homme-m-black-very_good',
    name: 'Maroquinerie homme',
    description: 'Maroquinerie homme authentique Lacoste. Très bon état. toile enduite durable et confortable.',
    price: 91,
    originalPrice: 114,
    condition: 'very_good',
    size: 'm',
    color: 'black',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-maroquinerie', 'homme-m']
  },
  {
    slug: '410-maroquinerie-homme-xs-pink-very_good',
    name: 'Maroquinerie homme',
    description: 'Superbe Maroquinerie homme en toile enduite. Très bon état. Coupe ajustée et confortable.',
    price: 122,
    originalPrice: 153,
    condition: 'very_good',
    size: 'xs',
    color: 'pink',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-maroquinerie', 'homme-xs']
  },
  {
    slug: '411-pullovers-homme-s-beige-good',
    name: 'Pullovers homme',
    description: 'Pullovers homme authentique Lacoste. Bon état. coton tricoté durable et confortable.',
    price: 55,
    originalPrice: 78,
    condition: 'good',
    size: 's',
    color: 'beige',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-pullovers', 'homme-s']
  },
  {
    slug: '412-manteaux-and-vestes-femme-s-purple-excellent',
    name: 'Manteaux & Vestes femme',
    description:
      'Manteaux & Vestes femme authentique Lacoste. Excellent état. polyester recyclé durable et confortable.',
    price: 162,
    originalPrice: 232,
    condition: 'excellent',
    size: 's',
    color: 'purple',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-s']
  },
  {
    slug: '413-tops-and-chemises-femme-s-beige-good',
    name: 'Tops & Chemises femme',
    description:
      'Tops & Chemises femme élégant et intemporel. Bon état. Fabriqué en popeline de coton de haute qualité.',
    price: 72,
    originalPrice: 103,
    condition: 'good',
    size: 's',
    color: 'beige',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-s']
  },
  {
    slug: '414-tops-and-chemises-femme-s-red-very_good',
    name: 'Tops & Chemises femme',
    description: 'Superbe Tops & Chemises femme en viscose. Très bon état. Coupe ajustée et confortable.',
    price: 142,
    originalPrice: 177,
    condition: 'very_good',
    size: 's',
    color: 'red',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-s']
  },
  {
    slug: '415-polos-homme-l-green-new',
    name: 'Polos homme',
    description: 'Polos homme authentique Lacoste. État neuf. coton piqué durable et confortable.',
    price: 120,
    originalPrice: 171,
    condition: 'new',
    size: 'l',
    color: 'green',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-polos', 'homme-l']
  },
  {
    slug: '416-chemises-femme-m-orange-good',
    name: 'Chemises femme',
    description: 'Magnifique Chemises femme de la collection Lacoste. Bon état. Matière premium en popeline.',
    price: 29,
    originalPrice: 42,
    condition: 'good',
    size: 'm',
    color: 'orange',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-m']
  },
  {
    slug: '417-robes-and-jupes-femme-2xl-et-plus-yellow-new',
    name: 'Robes & Jupes femme',
    description: 'Magnifique Robes & Jupes femme de la collection Lacoste. État neuf. Matière premium en jersey.',
    price: 207,
    originalPrice: 296,
    condition: 'new',
    size: '2xl-et-plus',
    color: 'yellow',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-2xl-et-plus']
  },
  {
    slug: '418-pantalons-and-shorts-homme-l-green-good',
    name: 'Pantalons & Shorts homme',
    description: 'Pantalons & Shorts homme authentique Lacoste. Bon état. coton sergé durable et confortable.',
    price: 56,
    originalPrice: 80,
    condition: 'good',
    size: 'l',
    color: 'green',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-l']
  },
  {
    slug: '419-sweatshirts-femme-s-black-very_good',
    name: 'Sweatshirts femme',
    description: 'Magnifique Sweatshirts femme de la collection Lacoste. Très bon état. Matière premium en molleton.',
    price: 163,
    originalPrice: 204,
    condition: 'very_good',
    size: 's',
    color: 'black',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-sweatshirts', 'femme-s']
  },
  {
    slug: '420-maroquinerie-femme-s-yellow-very_good',
    name: 'Maroquinerie femme',
    description: 'Superbe Maroquinerie femme en cuir. Très bon état. Coupe ajustée et confortable.',
    price: 152,
    originalPrice: 190,
    condition: 'very_good',
    size: 's',
    color: 'yellow',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-s']
  },
  {
    slug: '421-sweatshirts-femme-xs-yellow-very_good',
    name: 'Sweatshirts femme',
    description: 'Superbe Sweatshirts femme en molleton. Très bon état. Coupe ajustée et confortable.',
    price: 102,
    originalPrice: 128,
    condition: 'very_good',
    size: 'xs',
    color: 'yellow',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-sweatshirts', 'femme-xs']
  },
  {
    slug: '422-maroquinerie-femme-xl-blue-new',
    name: 'Maroquinerie femme',
    description: 'Magnifique Maroquinerie femme de la collection Lacoste. État neuf. Matière premium en cuir.',
    price: 65,
    originalPrice: 93,
    condition: 'new',
    size: 'xl',
    color: 'blue',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-xl']
  },
  {
    slug: '423-t-shirts-homme-s-orange-very_good',
    name: 'T-shirts homme',
    description: 'Superbe T-shirts homme en jersey fin. Très bon état. Coupe ajustée et confortable.',
    price: 155,
    originalPrice: 194,
    condition: 'very_good',
    size: 's',
    color: 'orange',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-t-shirts', 'homme-s']
  },
  {
    slug: '424-t-shirts-femme-l-beige-very_good',
    name: 'T-shirts femme',
    description: 'Superbe T-shirts femme en coton organique. Très bon état. Coupe ajustée et confortable.',
    price: 200,
    originalPrice: 250,
    condition: 'very_good',
    size: 'l',
    color: 'beige',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-l']
  },
  {
    slug: '425-manteaux-and-vestes-femme-2xl-et-plus-brown-new',
    name: 'Manteaux & Vestes femme',
    description:
      'Manteaux & Vestes femme élégant et intemporel. État neuf. Fabriqué en polyester recyclé de haute qualité.',
    price: 74,
    originalPrice: 106,
    condition: 'new',
    size: '2xl-et-plus',
    color: 'brown',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-2xl-et-plus']
  },
  {
    slug: '426-pantalons-and-shorts-femme-xl-green-new',
    name: 'Pantalons & Shorts femme',
    description: 'Superbe Pantalons & Shorts femme en toile de coton. État neuf. Coupe ajustée et confortable.',
    price: 135,
    originalPrice: 193,
    condition: 'new',
    size: 'xl',
    color: 'green',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-xl']
  },
  {
    slug: '427-chemises-femme-s-orange-excellent',
    name: 'Chemises femme',
    description: 'Superbe Chemises femme en popeline. Excellent état. Coupe ajustée et confortable.',
    price: 133,
    originalPrice: 190,
    condition: 'excellent',
    size: 's',
    color: 'orange',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-s']
  },
  {
    slug: '428-pullovers-homme-s-green-excellent',
    name: 'Pullovers homme',
    description: 'Pullovers homme élégant et intemporel. Excellent état. Fabriqué en cachemire de haute qualité.',
    price: 190,
    originalPrice: 272,
    condition: 'excellent',
    size: 's',
    color: 'green',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-pullovers', 'homme-s']
  },
  {
    slug: '429-t-shirts-homme-xl-purple-new',
    name: 'T-shirts homme',
    description: 'T-shirts homme élégant et intemporel. État neuf. Fabriqué en jersey fin de haute qualité.',
    price: 67,
    originalPrice: 96,
    condition: 'new',
    size: 'xl',
    color: 'purple',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-t-shirts', 'homme-xl']
  },
  {
    slug: '430-survetements-femme-2xl-et-plus-green-very_good',
    name: 'Survêtements femme',
    description: 'Superbe Survêtements femme en matière stretch. Très bon état. Coupe ajustée et confortable.',
    price: 54,
    originalPrice: 68,
    condition: 'very_good',
    size: '2xl-et-plus',
    color: 'green',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-survetements', 'femme-2xl-et-plus']
  },
  {
    slug: '431-chemises-homme-l-beige-excellent',
    name: 'Chemises homme',
    description: 'Chemises homme élégant et intemporel. Excellent état. Fabriqué en oxford de haute qualité.',
    price: 192,
    originalPrice: 274,
    condition: 'excellent',
    size: 'l',
    color: 'beige',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-chemises', 'homme-l']
  },
  {
    slug: '432-manteaux-and-vestes-femme-s-beige-new',
    name: 'Manteaux & Vestes femme',
    description: 'Manteaux & Vestes femme authentique Lacoste. État neuf. laine durable et confortable.',
    price: 105,
    originalPrice: 150,
    condition: 'new',
    size: 's',
    color: 'beige',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-s']
  },
  {
    slug: '433-pantalons-and-shorts-femme-s-white-very_good',
    name: 'Pantalons & Shorts femme',
    description: 'Superbe Pantalons & Shorts femme en gabardine. Très bon état. Coupe ajustée et confortable.',
    price: 33,
    originalPrice: 41,
    condition: 'very_good',
    size: 's',
    color: 'white',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-s']
  },
  {
    slug: '434-pantalons-and-shorts-homme-xs-beige-excellent',
    name: 'Pantalons & Shorts homme',
    description: 'Pantalons & Shorts homme authentique Lacoste. Excellent état. coton sergé durable et confortable.',
    price: 123,
    originalPrice: 176,
    condition: 'excellent',
    size: 'xs',
    color: 'beige',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-xs']
  },
  {
    slug: '435-pantalons-and-shorts-femme-s-red-new',
    name: 'Pantalons & Shorts femme',
    description: 'Pantalons & Shorts femme authentique Lacoste. État neuf. coton sergé durable et confortable.',
    price: 76,
    originalPrice: 108,
    condition: 'new',
    size: 's',
    color: 'red',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-s']
  },
  {
    slug: '436-sweatshirts-homme-l-brown-excellent',
    name: 'Sweatshirts homme',
    description: 'Superbe Sweatshirts homme en molleton. Excellent état. Coupe ajustée et confortable.',
    price: 175,
    originalPrice: 250,
    condition: 'excellent',
    size: 'l',
    color: 'brown',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-sweatshirts', 'homme-l']
  },
  {
    slug: '437-t-shirts-homme-xs-orange-new',
    name: 'T-shirts homme',
    description: 'Magnifique T-shirts homme de la collection Lacoste. État neuf. Matière premium en coton.',
    price: 67,
    originalPrice: 96,
    condition: 'new',
    size: 'xs',
    color: 'orange',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-t-shirts', 'homme-xs']
  },
  {
    slug: '438-t-shirts-homme-m-beige-good',
    name: 'T-shirts homme',
    description: 'T-shirts homme élégant et intemporel. Bon état. Fabriqué en coton de haute qualité.',
    price: 193,
    originalPrice: 275,
    condition: 'good',
    size: 'm',
    color: 'beige',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-t-shirts', 'homme-m']
  },
  {
    slug: '439-tops-and-chemises-femme-s-pink-new',
    name: 'Tops & Chemises femme',
    description:
      'Tops & Chemises femme élégant et intemporel. État neuf. Fabriqué en popeline de coton de haute qualité.',
    price: 169,
    originalPrice: 242,
    condition: 'new',
    size: 's',
    color: 'pink',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-s']
  },
  {
    slug: '440-sweatshirts-femme-2xl-et-plus-black-new',
    name: 'Sweatshirts femme',
    description: 'Sweatshirts femme authentique Lacoste. État neuf. molleton durable et confortable.',
    price: 83,
    originalPrice: 118,
    condition: 'new',
    size: '2xl-et-plus',
    color: 'black',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-sweatshirts', 'femme-2xl-et-plus']
  },
  {
    slug: '441-pullovers-femme-s-red-good',
    name: 'Pullovers femme',
    description: 'Superbe Pullovers femme en cachemire. Bon état. Coupe ajustée et confortable.',
    price: 48,
    originalPrice: 68,
    condition: 'good',
    size: 's',
    color: 'red',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-pullovers', 'femme-s']
  },
  {
    slug: '442-pantalons-and-shorts-femme-xl-yellow-excellent',
    name: 'Pantalons & Shorts femme',
    description: 'Superbe Pantalons & Shorts femme en toile de coton. Excellent état. Coupe ajustée et confortable.',
    price: 159,
    originalPrice: 227,
    condition: 'excellent',
    size: 'xl',
    color: 'yellow',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-xl']
  },
  {
    slug: '443-polos-homme-xs-pink-new',
    name: 'Polos homme',
    description: 'Superbe Polos homme en jersey de coton. État neuf. Coupe ajustée et confortable.',
    price: 111,
    originalPrice: 158,
    condition: 'new',
    size: 'xs',
    color: 'pink',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-polos', 'homme-xs']
  },
  {
    slug: '444-manteaux-and-vestes-homme-xl-purple-new',
    name: 'Manteaux & Vestes homme',
    description: 'Superbe Manteaux & Vestes homme en laine. État neuf. Coupe ajustée et confortable.',
    price: 191,
    originalPrice: 273,
    condition: 'new',
    size: 'xl',
    color: 'purple',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-xl']
  },
  {
    slug: '445-chemises-homme-xl-pink-excellent',
    name: 'Chemises homme',
    description: 'Chemises homme élégant et intemporel. Excellent état. Fabriqué en lin de haute qualité.',
    price: 103,
    originalPrice: 147,
    condition: 'excellent',
    size: 'xl',
    color: 'pink',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-chemises', 'homme-xl']
  },
  {
    slug: '446-sweatshirts-femme-2xl-et-plus-blue-excellent',
    name: 'Sweatshirts femme',
    description: 'Superbe Sweatshirts femme en coton brossé. Excellent état. Coupe ajustée et confortable.',
    price: 190,
    originalPrice: 271,
    condition: 'excellent',
    size: '2xl-et-plus',
    color: 'blue',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-sweatshirts', 'femme-2xl-et-plus']
  },
  {
    slug: '447-sweatshirts-femme-xs-white-new',
    name: 'Sweatshirts femme',
    description: 'Superbe Sweatshirts femme en coton brossé. État neuf. Coupe ajustée et confortable.',
    price: 41,
    originalPrice: 58,
    condition: 'new',
    size: 'xs',
    color: 'white',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-sweatshirts', 'femme-xs']
  },
  {
    slug: '448-manteaux-and-vestes-femme-xl-green-excellent',
    name: 'Manteaux & Vestes femme',
    description:
      'Magnifique Manteaux & Vestes femme de la collection Lacoste. Excellent état. Matière premium en polyester recyclé.',
    price: 97,
    originalPrice: 138,
    condition: 'excellent',
    size: 'xl',
    color: 'green',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-xl']
  },
  {
    slug: '449-survetements-homme-m-beige-excellent',
    name: 'Survêtements homme',
    description:
      'Magnifique Survêtements homme de la collection Lacoste. Excellent état. Matière premium en polyester technique.',
    price: 167,
    originalPrice: 239,
    condition: 'excellent',
    size: 'm',
    color: 'beige',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-survetements', 'homme-m']
  },
  {
    slug: '450-pullovers-homme-2xl-et-plus-blue-new',
    name: 'Pullovers homme',
    description: 'Pullovers homme élégant et intemporel. État neuf. Fabriqué en cachemire de haute qualité.',
    price: 116,
    originalPrice: 166,
    condition: 'new',
    size: '2xl-et-plus',
    color: 'blue',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-pullovers', 'homme-2xl-et-plus']
  },
  {
    slug: '451-pullovers-homme-2xl-et-plus-brown-excellent',
    name: 'Pullovers homme',
    description: 'Pullovers homme authentique Lacoste. Excellent état. coton tricoté durable et confortable.',
    price: 75,
    originalPrice: 107,
    condition: 'excellent',
    size: '2xl-et-plus',
    color: 'brown',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-pullovers', 'homme-2xl-et-plus']
  },
  {
    slug: '452-survetements-femme-l-blue-new',
    name: 'Survêtements femme',
    description:
      'Magnifique Survêtements femme de la collection Lacoste. État neuf. Matière premium en coton molletonné.',
    price: 53,
    originalPrice: 75,
    condition: 'new',
    size: 'l',
    color: 'blue',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-survetements', 'femme-l']
  },
  {
    slug: '453-pullovers-homme-xs-grey-new',
    name: 'Pullovers homme',
    description: 'Superbe Pullovers homme en cachemire. État neuf. Coupe ajustée et confortable.',
    price: 153,
    originalPrice: 218,
    condition: 'new',
    size: 'xs',
    color: 'grey',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-pullovers', 'homme-xs']
  },
  {
    slug: '454-chemises-femme-l-red-excellent',
    name: 'Chemises femme',
    description: 'Chemises femme élégant et intemporel. Excellent état. Fabriqué en lin de haute qualité.',
    price: 57,
    originalPrice: 81,
    condition: 'excellent',
    size: 'l',
    color: 'red',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-l']
  },
  {
    slug: '455-pantalons-and-shorts-homme-s-brown-good',
    name: 'Pantalons & Shorts homme',
    description:
      'Magnifique Pantalons & Shorts homme de la collection Lacoste. Bon état. Matière premium en toile de coton.',
    price: 193,
    originalPrice: 275,
    condition: 'good',
    size: 's',
    color: 'brown',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-s']
  },
  {
    slug: '456-polos-homme-l-purple-new',
    name: 'Polos homme',
    description: 'Polos homme authentique Lacoste. État neuf. jersey de coton durable et confortable.',
    price: 199,
    originalPrice: 284,
    condition: 'new',
    size: 'l',
    color: 'purple',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-polos', 'homme-l']
  },
  {
    slug: '457-survetements-homme-xs-blue-very_good',
    name: 'Survêtements homme',
    description: 'Superbe Survêtements homme en matière stretch. Très bon état. Coupe ajustée et confortable.',
    price: 195,
    originalPrice: 244,
    condition: 'very_good',
    size: 'xs',
    color: 'blue',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-survetements', 'homme-xs']
  },
  {
    slug: '458-sweatshirts-femme-l-yellow-excellent',
    name: 'Sweatshirts femme',
    description: 'Sweatshirts femme élégant et intemporel. Excellent état. Fabriqué en coton brossé de haute qualité.',
    price: 83,
    originalPrice: 119,
    condition: 'excellent',
    size: 'l',
    color: 'yellow',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-sweatshirts', 'femme-l']
  },
  {
    slug: '459-maroquinerie-homme-m-grey-good',
    name: 'Maroquinerie homme',
    description: 'Maroquinerie homme authentique Lacoste. Bon état. nylon durable et confortable.',
    price: 36,
    originalPrice: 51,
    condition: 'good',
    size: 'm',
    color: 'grey',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-maroquinerie', 'homme-m']
  },
  {
    slug: '460-survetements-femme-xl-red-excellent',
    name: 'Survêtements femme',
    description: 'Survêtements femme authentique Lacoste. Excellent état. polyester technique durable et confortable.',
    price: 170,
    originalPrice: 243,
    condition: 'excellent',
    size: 'xl',
    color: 'red',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-survetements', 'femme-xl']
  },
  {
    slug: '461-polos-homme-xs-yellow-excellent',
    name: 'Polos homme',
    description: 'Polos homme élégant et intemporel. Excellent état. Fabriqué en coton bio de haute qualité.',
    price: 137,
    originalPrice: 196,
    condition: 'excellent',
    size: 'xs',
    color: 'yellow',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-polos', 'homme-xs']
  },
  {
    slug: '462-polos-homme-m-yellow-very_good',
    name: 'Polos homme',
    description: 'Magnifique Polos homme de la collection Lacoste. Très bon état. Matière premium en jersey de coton.',
    price: 71,
    originalPrice: 89,
    condition: 'very_good',
    size: 'm',
    color: 'yellow',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-polos', 'homme-m']
  },
  {
    slug: '463-polos-homme-s-blue-very_good',
    name: 'Polos homme',
    description: 'Polos homme élégant et intemporel. Très bon état. Fabriqué en coton bio de haute qualité.',
    price: 146,
    originalPrice: 182,
    condition: 'very_good',
    size: 's',
    color: 'blue',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-polos', 'homme-s']
  },
  {
    slug: '464-pantalons-and-shorts-femme-l-brown-good',
    name: 'Pantalons & Shorts femme',
    description: 'Pantalons & Shorts femme authentique Lacoste. Bon état. toile de coton durable et confortable.',
    price: 51,
    originalPrice: 73,
    condition: 'good',
    size: 'l',
    color: 'brown',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-l']
  },
  {
    slug: '465-tops-and-chemises-femme-xl-brown-new',
    name: 'Tops & Chemises femme',
    description: 'Superbe Tops & Chemises femme en soie. État neuf. Coupe ajustée et confortable.',
    price: 84,
    originalPrice: 120,
    condition: 'new',
    size: 'xl',
    color: 'brown',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-xl']
  },
  {
    slug: '466-manteaux-and-vestes-homme-xl-red-excellent',
    name: 'Manteaux & Vestes homme',
    description: 'Manteaux & Vestes homme élégant et intemporel. Excellent état. Fabriqué en laine de haute qualité.',
    price: 195,
    originalPrice: 278,
    condition: 'excellent',
    size: 'xl',
    color: 'red',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-xl']
  },
  {
    slug: '467-manteaux-and-vestes-femme-xl-white-good',
    name: 'Manteaux & Vestes femme',
    description:
      'Manteaux & Vestes femme élégant et intemporel. Bon état. Fabriqué en coton imperméable de haute qualité.',
    price: 21,
    originalPrice: 30,
    condition: 'good',
    size: 'xl',
    color: 'white',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-xl']
  },
  {
    slug: '468-t-shirts-femme-xs-orange-very_good',
    name: 'T-shirts femme',
    description: 'T-shirts femme authentique Lacoste. Très bon état. coton durable et confortable.',
    price: 74,
    originalPrice: 93,
    condition: 'very_good',
    size: 'xs',
    color: 'orange',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-xs']
  },
  {
    slug: '469-tops-and-chemises-femme-2xl-et-plus-pink-excellent',
    name: 'Tops & Chemises femme',
    description:
      'Tops & Chemises femme élégant et intemporel. Excellent état. Fabriqué en popeline de coton de haute qualité.',
    price: 43,
    originalPrice: 62,
    condition: 'excellent',
    size: '2xl-et-plus',
    color: 'pink',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-2xl-et-plus']
  },
  {
    slug: '470-manteaux-and-vestes-femme-xs-black-excellent',
    name: 'Manteaux & Vestes femme',
    description: 'Manteaux & Vestes femme authentique Lacoste. Excellent état. laine durable et confortable.',
    price: 190,
    originalPrice: 271,
    condition: 'excellent',
    size: 'xs',
    color: 'black',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-xs']
  },
  {
    slug: '471-survetements-femme-l-yellow-excellent',
    name: 'Survêtements femme',
    description:
      'Survêtements femme élégant et intemporel. Excellent état. Fabriqué en polyester technique de haute qualité.',
    price: 125,
    originalPrice: 178,
    condition: 'excellent',
    size: 'l',
    color: 'yellow',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-survetements', 'femme-l']
  },
  {
    slug: '472-chemises-homme-xs-black-excellent',
    name: 'Chemises homme',
    description: 'Chemises homme élégant et intemporel. Excellent état. Fabriqué en oxford de haute qualité.',
    price: 55,
    originalPrice: 79,
    condition: 'excellent',
    size: 'xs',
    color: 'black',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-chemises', 'homme-xs']
  },
  {
    slug: '473-robes-and-jupes-femme-xl-blue-excellent',
    name: 'Robes & Jupes femme',
    description: 'Robes & Jupes femme élégant et intemporel. Excellent état. Fabriqué en crêpe de haute qualité.',
    price: 187,
    originalPrice: 267,
    condition: 'excellent',
    size: 'xl',
    color: 'blue',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-xl']
  },
  {
    slug: '474-pullovers-homme-xl-blue-very_good',
    name: 'Pullovers homme',
    description:
      'Magnifique Pullovers homme de la collection Lacoste. Très bon état. Matière premium en laine mérinos.',
    price: 237,
    originalPrice: 296,
    condition: 'very_good',
    size: 'xl',
    color: 'blue',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-pullovers', 'homme-xl']
  },
  {
    slug: '475-pantalons-and-shorts-homme-xs-beige-new',
    name: 'Pantalons & Shorts homme',
    description: 'Pantalons & Shorts homme authentique Lacoste. État neuf. gabardine durable et confortable.',
    price: 52,
    originalPrice: 74,
    condition: 'new',
    size: 'xs',
    color: 'beige',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-xs']
  },
  {
    slug: '476-sweatshirts-homme-xs-grey-excellent',
    name: 'Sweatshirts homme',
    description: 'Sweatshirts homme authentique Lacoste. Excellent état. jersey lourd durable et confortable.',
    price: 26,
    originalPrice: 37,
    condition: 'excellent',
    size: 'xs',
    color: 'grey',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-sweatshirts', 'homme-xs']
  },
  {
    slug: '477-manteaux-and-vestes-homme-xs-yellow-excellent',
    name: 'Manteaux & Vestes homme',
    description:
      'Manteaux & Vestes homme élégant et intemporel. Excellent état. Fabriqué en coton imperméable de haute qualité.',
    price: 53,
    originalPrice: 75,
    condition: 'excellent',
    size: 'xs',
    color: 'yellow',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-xs']
  },
  {
    slug: '478-pullovers-homme-xs-grey-good',
    name: 'Pullovers homme',
    description: 'Magnifique Pullovers homme de la collection Lacoste. Bon état. Matière premium en coton tricoté.',
    price: 132,
    originalPrice: 189,
    condition: 'good',
    size: 'xs',
    color: 'grey',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-pullovers', 'homme-xs']
  },
  {
    slug: '479-polos-homme-s-orange-very_good',
    name: 'Polos homme',
    description: 'Superbe Polos homme en coton bio. Très bon état. Coupe ajustée et confortable.',
    price: 146,
    originalPrice: 182,
    condition: 'very_good',
    size: 's',
    color: 'orange',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-polos', 'homme-s']
  },
  {
    slug: '480-manteaux-and-vestes-femme-s-purple-excellent',
    name: 'Manteaux & Vestes femme',
    description: 'Superbe Manteaux & Vestes femme en polyester recyclé. Excellent état. Coupe ajustée et confortable.',
    price: 106,
    originalPrice: 152,
    condition: 'excellent',
    size: 's',
    color: 'purple',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-s']
  },
  {
    slug: '481-chemises-femme-2xl-et-plus-red-excellent',
    name: 'Chemises femme',
    description: 'Magnifique Chemises femme de la collection Lacoste. Excellent état. Matière premium en lin.',
    price: 160,
    originalPrice: 229,
    condition: 'excellent',
    size: '2xl-et-plus',
    color: 'red',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-2xl-et-plus']
  },
  {
    slug: '482-manteaux-and-vestes-femme-xs-purple-excellent',
    name: 'Manteaux & Vestes femme',
    description:
      'Manteaux & Vestes femme authentique Lacoste. Excellent état. polyester recyclé durable et confortable.',
    price: 175,
    originalPrice: 250,
    condition: 'excellent',
    size: 'xs',
    color: 'purple',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-xs']
  },
  {
    slug: '483-survetements-homme-l-blue-good',
    name: 'Survêtements homme',
    description: 'Superbe Survêtements homme en matière stretch. Bon état. Coupe ajustée et confortable.',
    price: 25,
    originalPrice: 36,
    condition: 'good',
    size: 'l',
    color: 'blue',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-survetements', 'homme-l']
  },
  {
    slug: '484-robes-and-jupes-femme-s-green-excellent',
    name: 'Robes & Jupes femme',
    description: 'Robes & Jupes femme élégant et intemporel. Excellent état. Fabriqué en jersey de haute qualité.',
    price: 36,
    originalPrice: 51,
    condition: 'excellent',
    size: 's',
    color: 'green',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-s']
  },
  {
    slug: '485-maroquinerie-homme-xl-red-excellent',
    name: 'Maroquinerie homme',
    description: 'Magnifique Maroquinerie homme de la collection Lacoste. Excellent état. Matière premium en nylon.',
    price: 102,
    originalPrice: 146,
    condition: 'excellent',
    size: 'xl',
    color: 'red',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-maroquinerie', 'homme-xl']
  },
  {
    slug: '486-t-shirts-homme-xs-yellow-very_good',
    name: 'T-shirts homme',
    description: 'Superbe T-shirts homme en coton. Très bon état. Coupe ajustée et confortable.',
    price: 81,
    originalPrice: 101,
    condition: 'very_good',
    size: 'xs',
    color: 'yellow',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-t-shirts', 'homme-xs']
  },
  {
    slug: '487-maroquinerie-femme-s-brown-new',
    name: 'Maroquinerie femme',
    description: 'Maroquinerie femme élégant et intemporel. État neuf. Fabriqué en toile enduite de haute qualité.',
    price: 153,
    originalPrice: 219,
    condition: 'new',
    size: 's',
    color: 'brown',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-s']
  },
  {
    slug: '488-maroquinerie-homme-xs-blue-new',
    name: 'Maroquinerie homme',
    description: 'Superbe Maroquinerie homme en nylon. État neuf. Coupe ajustée et confortable.',
    price: 90,
    originalPrice: 129,
    condition: 'new',
    size: 'xs',
    color: 'blue',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-maroquinerie', 'homme-xs']
  },
  {
    slug: '489-pullovers-femme-l-black-new',
    name: 'Pullovers femme',
    description: 'Pullovers femme authentique Lacoste. État neuf. coton tricoté durable et confortable.',
    price: 122,
    originalPrice: 174,
    condition: 'new',
    size: 'l',
    color: 'black',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-pullovers', 'femme-l']
  },
  {
    slug: '490-pullovers-homme-xs-green-good',
    name: 'Pullovers homme',
    description: 'Magnifique Pullovers homme de la collection Lacoste. Bon état. Matière premium en laine mérinos.',
    price: 24,
    originalPrice: 34,
    condition: 'good',
    size: 'xs',
    color: 'green',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-pullovers', 'homme-xs']
  },
  {
    slug: '491-pullovers-femme-l-brown-very_good',
    name: 'Pullovers femme',
    description: 'Magnifique Pullovers femme de la collection Lacoste. Très bon état. Matière premium en cachemire.',
    price: 44,
    originalPrice: 55,
    condition: 'very_good',
    size: 'l',
    color: 'brown',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-pullovers', 'femme-l']
  },
  {
    slug: '492-pantalons-and-shorts-femme-xl-blue-excellent',
    name: 'Pantalons & Shorts femme',
    description:
      'Magnifique Pantalons & Shorts femme de la collection Lacoste. Excellent état. Matière premium en coton sergé.',
    price: 92,
    originalPrice: 132,
    condition: 'excellent',
    size: 'xl',
    color: 'blue',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-xl']
  },
  {
    slug: '493-sweatshirts-homme-xs-black-new',
    name: 'Sweatshirts homme',
    description: 'Sweatshirts homme authentique Lacoste. État neuf. jersey lourd durable et confortable.',
    price: 193,
    originalPrice: 275,
    condition: 'new',
    size: 'xs',
    color: 'black',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-sweatshirts', 'homme-xs']
  },
  {
    slug: '494-t-shirts-homme-xl-beige-excellent',
    name: 'T-shirts homme',
    description: 'T-shirts homme authentique Lacoste. Excellent état. coton durable et confortable.',
    price: 122,
    originalPrice: 175,
    condition: 'excellent',
    size: 'xl',
    color: 'beige',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-t-shirts', 'homme-xl']
  },
  {
    slug: '495-pantalons-and-shorts-homme-m-yellow-excellent',
    name: 'Pantalons & Shorts homme',
    description:
      'Pantalons & Shorts homme élégant et intemporel. Excellent état. Fabriqué en toile de coton de haute qualité.',
    price: 200,
    originalPrice: 285,
    condition: 'excellent',
    size: 'm',
    color: 'yellow',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-m']
  },
  {
    slug: '496-polos-homme-xs-green-new',
    name: 'Polos homme',
    description: 'Polos homme authentique Lacoste. État neuf. jersey de coton durable et confortable.',
    price: 196,
    originalPrice: 280,
    condition: 'new',
    size: 'xs',
    color: 'green',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-polos', 'homme-xs']
  },
  {
    slug: '497-polos-femme-xs-white-good',
    name: 'Polos femme',
    description: 'Polos femme authentique Lacoste. Bon état. coton piqué durable et confortable.',
    price: 208,
    originalPrice: 297,
    condition: 'good',
    size: 'xs',
    color: 'white',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-polos', 'femme-xs']
  },
  {
    slug: '498-maroquinerie-homme-xs-red-good',
    name: 'Maroquinerie homme',
    description: 'Magnifique Maroquinerie homme de la collection Lacoste. Bon état. Matière premium en nylon.',
    price: 141,
    originalPrice: 201,
    condition: 'good',
    size: 'xs',
    color: 'red',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-maroquinerie', 'homme-xs']
  },
  {
    slug: '499-polos-femme-m-brown-very_good',
    name: 'Polos femme',
    description: 'Polos femme authentique Lacoste. Très bon état. jersey de coton durable et confortable.',
    price: 164,
    originalPrice: 205,
    condition: 'very_good',
    size: 'm',
    color: 'brown',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-polos', 'femme-m']
  },
  {
    slug: '500-pantalons-and-shorts-femme-xs-white-new',
    name: 'Pantalons & Shorts femme',
    description: 'Superbe Pantalons & Shorts femme en toile de coton. État neuf. Coupe ajustée et confortable.',
    price: 78,
    originalPrice: 111,
    condition: 'new',
    size: 'xs',
    color: 'white',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-xs']
  },
  {
    slug: '501-maroquinerie-homme-s-red-very_good',
    name: 'Maroquinerie homme',
    description: 'Magnifique Maroquinerie homme de la collection Lacoste. Très bon état. Matière premium en cuir.',
    price: 89,
    originalPrice: 111,
    condition: 'very_good',
    size: 's',
    color: 'red',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-maroquinerie', 'homme-s']
  },
  {
    slug: '502-manteaux-and-vestes-homme-xl-green-excellent',
    name: 'Manteaux & Vestes homme',
    description:
      'Magnifique Manteaux & Vestes homme de la collection Lacoste. Excellent état. Matière premium en polyester recyclé.',
    price: 138,
    originalPrice: 197,
    condition: 'excellent',
    size: 'xl',
    color: 'green',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-xl']
  },
  {
    slug: '503-tops-and-chemises-femme-l-purple-good',
    name: 'Tops & Chemises femme',
    description: 'Tops & Chemises femme authentique Lacoste. Bon état. popeline de coton durable et confortable.',
    price: 39,
    originalPrice: 56,
    condition: 'good',
    size: 'l',
    color: 'purple',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-l']
  },
  {
    slug: '504-chemises-homme-m-purple-very_good',
    name: 'Chemises homme',
    description: 'Chemises homme élégant et intemporel. Très bon état. Fabriqué en popeline de haute qualité.',
    price: 226,
    originalPrice: 283,
    condition: 'very_good',
    size: 'm',
    color: 'purple',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-chemises', 'homme-m']
  },
  {
    slug: '505-manteaux-and-vestes-femme-2xl-et-plus-blue-new',
    name: 'Manteaux & Vestes femme',
    description: 'Manteaux & Vestes femme authentique Lacoste. État neuf. coton imperméable durable et confortable.',
    price: 209,
    originalPrice: 299,
    condition: 'new',
    size: '2xl-et-plus',
    color: 'blue',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-2xl-et-plus']
  },
  {
    slug: '506-manteaux-and-vestes-homme-xs-grey-good',
    name: 'Manteaux & Vestes homme',
    description: 'Magnifique Manteaux & Vestes homme de la collection Lacoste. Bon état. Matière premium en laine.',
    price: 125,
    originalPrice: 178,
    condition: 'good',
    size: 'xs',
    color: 'grey',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-xs']
  },
  {
    slug: '507-survetements-homme-xl-blue-excellent',
    name: 'Survêtements homme',
    description: 'Survêtements homme authentique Lacoste. Excellent état. matière stretch durable et confortable.',
    price: 79,
    originalPrice: 113,
    condition: 'excellent',
    size: 'xl',
    color: 'blue',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-survetements', 'homme-xl']
  },
  {
    slug: '508-survetements-homme-m-brown-new',
    name: 'Survêtements homme',
    description:
      'Magnifique Survêtements homme de la collection Lacoste. État neuf. Matière premium en polyester technique.',
    price: 152,
    originalPrice: 217,
    condition: 'new',
    size: 'm',
    color: 'brown',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-survetements', 'homme-m']
  },
  {
    slug: '509-pantalons-and-shorts-homme-l-orange-good',
    name: 'Pantalons & Shorts homme',
    description:
      'Magnifique Pantalons & Shorts homme de la collection Lacoste. Bon état. Matière premium en gabardine.',
    price: 186,
    originalPrice: 266,
    condition: 'good',
    size: 'l',
    color: 'orange',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-l']
  },
  {
    slug: '510-pullovers-femme-l-white-new',
    name: 'Pullovers femme',
    description: 'Superbe Pullovers femme en coton tricoté. État neuf. Coupe ajustée et confortable.',
    price: 165,
    originalPrice: 235,
    condition: 'new',
    size: 'l',
    color: 'white',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-pullovers', 'femme-l']
  },
  {
    slug: '511-pantalons-and-shorts-femme-l-green-good',
    name: 'Pantalons & Shorts femme',
    description: 'Pantalons & Shorts femme élégant et intemporel. Bon état. Fabriqué en gabardine de haute qualité.',
    price: 187,
    originalPrice: 267,
    condition: 'good',
    size: 'l',
    color: 'green',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-l']
  },
  {
    slug: '512-pullovers-homme-l-green-very_good',
    name: 'Pullovers homme',
    description: 'Superbe Pullovers homme en cachemire. Très bon état. Coupe ajustée et confortable.',
    price: 184,
    originalPrice: 230,
    condition: 'very_good',
    size: 'l',
    color: 'green',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-pullovers', 'homme-l']
  },
  {
    slug: '513-maroquinerie-femme-m-green-new',
    name: 'Maroquinerie femme',
    description: 'Superbe Maroquinerie femme en nylon. État neuf. Coupe ajustée et confortable.',
    price: 127,
    originalPrice: 181,
    condition: 'new',
    size: 'm',
    color: 'green',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-m']
  },
  {
    slug: '514-pullovers-homme-l-red-very_good',
    name: 'Pullovers homme',
    description: 'Superbe Pullovers homme en coton tricoté. Très bon état. Coupe ajustée et confortable.',
    price: 170,
    originalPrice: 212,
    condition: 'very_good',
    size: 'l',
    color: 'red',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-pullovers', 'homme-l']
  },
  {
    slug: '515-sweatshirts-femme-s-purple-new',
    name: 'Sweatshirts femme',
    description: 'Sweatshirts femme authentique Lacoste. État neuf. jersey lourd durable et confortable.',
    price: 131,
    originalPrice: 187,
    condition: 'new',
    size: 's',
    color: 'purple',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-sweatshirts', 'femme-s']
  },
  {
    slug: '516-manteaux-and-vestes-homme-2xl-et-plus-purple-good',
    name: 'Manteaux & Vestes homme',
    description: 'Superbe Manteaux & Vestes homme en laine. Bon état. Coupe ajustée et confortable.',
    price: 160,
    originalPrice: 228,
    condition: 'good',
    size: '2xl-et-plus',
    color: 'purple',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-2xl-et-plus']
  },
  {
    slug: '517-t-shirts-femme-l-orange-new',
    name: 'T-shirts femme',
    description: 'T-shirts femme élégant et intemporel. État neuf. Fabriqué en coton de haute qualité.',
    price: 118,
    originalPrice: 169,
    condition: 'new',
    size: 'l',
    color: 'orange',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-l']
  },
  {
    slug: '518-manteaux-and-vestes-homme-s-grey-good',
    name: 'Manteaux & Vestes homme',
    description:
      'Manteaux & Vestes homme élégant et intemporel. Bon état. Fabriqué en coton imperméable de haute qualité.',
    price: 139,
    originalPrice: 198,
    condition: 'good',
    size: 's',
    color: 'grey',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-s']
  },
  {
    slug: '519-survetements-homme-l-red-very_good',
    name: 'Survêtements homme',
    description: 'Superbe Survêtements homme en polyester technique. Très bon état. Coupe ajustée et confortable.',
    price: 24,
    originalPrice: 30,
    condition: 'very_good',
    size: 'l',
    color: 'red',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-survetements', 'homme-l']
  },
  {
    slug: '520-sweatshirts-homme-xl-orange-good',
    name: 'Sweatshirts homme',
    description: 'Sweatshirts homme élégant et intemporel. Bon état. Fabriqué en jersey lourd de haute qualité.',
    price: 27,
    originalPrice: 38,
    condition: 'good',
    size: 'xl',
    color: 'orange',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-sweatshirts', 'homme-xl']
  },
  {
    slug: '521-survetements-homme-xl-white-very_good',
    name: 'Survêtements homme',
    description:
      'Survêtements homme élégant et intemporel. Très bon état. Fabriqué en coton molletonné de haute qualité.',
    price: 29,
    originalPrice: 36,
    condition: 'very_good',
    size: 'xl',
    color: 'white',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-survetements', 'homme-xl']
  },
  {
    slug: '522-t-shirts-homme-l-yellow-excellent',
    name: 'T-shirts homme',
    description: 'Superbe T-shirts homme en coton. Excellent état. Coupe ajustée et confortable.',
    price: 111,
    originalPrice: 159,
    condition: 'excellent',
    size: 'l',
    color: 'yellow',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-t-shirts', 'homme-l']
  },
  {
    slug: '523-pullovers-femme-l-yellow-excellent',
    name: 'Pullovers femme',
    description: 'Magnifique Pullovers femme de la collection Lacoste. Excellent état. Matière premium en cachemire.',
    price: 192,
    originalPrice: 274,
    condition: 'excellent',
    size: 'l',
    color: 'yellow',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-pullovers', 'femme-l']
  },
  {
    slug: '524-pantalons-and-shorts-femme-2xl-et-plus-grey-new',
    name: 'Pantalons & Shorts femme',
    description: 'Pantalons & Shorts femme authentique Lacoste. État neuf. coton sergé durable et confortable.',
    price: 91,
    originalPrice: 130,
    condition: 'new',
    size: '2xl-et-plus',
    color: 'grey',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-2xl-et-plus']
  },
  {
    slug: '525-polos-homme-xl-white-new',
    name: 'Polos homme',
    description: 'Magnifique Polos homme de la collection Lacoste. État neuf. Matière premium en jersey de coton.',
    price: 195,
    originalPrice: 279,
    condition: 'new',
    size: 'xl',
    color: 'white',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-polos', 'homme-xl']
  },
  {
    slug: '526-survetements-homme-xs-grey-new',
    name: 'Survêtements homme',
    description: 'Superbe Survêtements homme en coton molletonné. État neuf. Coupe ajustée et confortable.',
    price: 174,
    originalPrice: 248,
    condition: 'new',
    size: 'xs',
    color: 'grey',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-survetements', 'homme-xs']
  },
  {
    slug: '527-pantalons-and-shorts-homme-2xl-et-plus-white-very_good',
    name: 'Pantalons & Shorts homme',
    description: 'Superbe Pantalons & Shorts homme en coton sergé. Très bon état. Coupe ajustée et confortable.',
    price: 106,
    originalPrice: 133,
    condition: 'very_good',
    size: '2xl-et-plus',
    color: 'white',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-2xl-et-plus']
  },
  {
    slug: '528-pullovers-femme-l-brown-good',
    name: 'Pullovers femme',
    description: 'Pullovers femme élégant et intemporel. Bon état. Fabriqué en laine mérinos de haute qualité.',
    price: 172,
    originalPrice: 245,
    condition: 'good',
    size: 'l',
    color: 'brown',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-pullovers', 'femme-l']
  },
  {
    slug: '529-t-shirts-homme-xl-grey-good',
    name: 'T-shirts homme',
    description: 'T-shirts homme élégant et intemporel. Bon état. Fabriqué en jersey fin de haute qualité.',
    price: 125,
    originalPrice: 179,
    condition: 'good',
    size: 'xl',
    color: 'grey',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-t-shirts', 'homme-xl']
  },
  {
    slug: '530-maroquinerie-homme-xl-blue-very_good',
    name: 'Maroquinerie homme',
    description: 'Maroquinerie homme élégant et intemporel. Très bon état. Fabriqué en cuir de haute qualité.',
    price: 102,
    originalPrice: 127,
    condition: 'very_good',
    size: 'xl',
    color: 'blue',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-maroquinerie', 'homme-xl']
  },
  {
    slug: '531-robes-and-jupes-femme-2xl-et-plus-grey-new',
    name: 'Robes & Jupes femme',
    description: 'Magnifique Robes & Jupes femme de la collection Lacoste. État neuf. Matière premium en crêpe.',
    price: 167,
    originalPrice: 239,
    condition: 'new',
    size: '2xl-et-plus',
    color: 'grey',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-2xl-et-plus']
  },
  {
    slug: '532-pantalons-and-shorts-homme-xs-blue-excellent',
    name: 'Pantalons & Shorts homme',
    description:
      'Pantalons & Shorts homme élégant et intemporel. Excellent état. Fabriqué en toile de coton de haute qualité.',
    price: 195,
    originalPrice: 279,
    condition: 'excellent',
    size: 'xs',
    color: 'blue',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-xs']
  },
  {
    slug: '533-pantalons-and-shorts-femme-m-green-excellent',
    name: 'Pantalons & Shorts femme',
    description: 'Superbe Pantalons & Shorts femme en gabardine. Excellent état. Coupe ajustée et confortable.',
    price: 88,
    originalPrice: 126,
    condition: 'excellent',
    size: 'm',
    color: 'green',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-m']
  },
  {
    slug: '534-polos-femme-2xl-et-plus-purple-new',
    name: 'Polos femme',
    description: 'Superbe Polos femme en coton piqué. État neuf. Coupe ajustée et confortable.',
    price: 22,
    originalPrice: 31,
    condition: 'new',
    size: '2xl-et-plus',
    color: 'purple',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-polos', 'femme-2xl-et-plus']
  },
  {
    slug: '535-chemises-femme-l-purple-new',
    name: 'Chemises femme',
    description: 'Chemises femme élégant et intemporel. État neuf. Fabriqué en popeline de haute qualité.',
    price: 159,
    originalPrice: 227,
    condition: 'new',
    size: 'l',
    color: 'purple',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-l']
  },
  {
    slug: '536-maroquinerie-homme-s-white-good',
    name: 'Maroquinerie homme',
    description: 'Maroquinerie homme authentique Lacoste. Bon état. cuir durable et confortable.',
    price: 100,
    originalPrice: 143,
    condition: 'good',
    size: 's',
    color: 'white',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-maroquinerie', 'homme-s']
  },
  {
    slug: '537-pantalons-and-shorts-femme-xl-beige-new',
    name: 'Pantalons & Shorts femme',
    description:
      'Magnifique Pantalons & Shorts femme de la collection Lacoste. État neuf. Matière premium en toile de coton.',
    price: 130,
    originalPrice: 186,
    condition: 'new',
    size: 'xl',
    color: 'beige',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-xl']
  },
  {
    slug: '538-survetements-femme-xs-brown-very_good',
    name: 'Survêtements femme',
    description:
      'Survêtements femme élégant et intemporel. Très bon état. Fabriqué en coton molletonné de haute qualité.',
    price: 211,
    originalPrice: 264,
    condition: 'very_good',
    size: 'xs',
    color: 'brown',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-survetements', 'femme-xs']
  },
  {
    slug: '539-chemises-femme-xs-green-very_good',
    name: 'Chemises femme',
    description: 'Chemises femme élégant et intemporel. Très bon état. Fabriqué en oxford de haute qualité.',
    price: 166,
    originalPrice: 208,
    condition: 'very_good',
    size: 'xs',
    color: 'green',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-xs']
  },
  {
    slug: '540-maroquinerie-femme-s-white-very_good',
    name: 'Maroquinerie femme',
    description: 'Maroquinerie femme authentique Lacoste. Très bon état. toile enduite durable et confortable.',
    price: 164,
    originalPrice: 205,
    condition: 'very_good',
    size: 's',
    color: 'white',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-s']
  },
  {
    slug: '541-pantalons-and-shorts-femme-xs-red-new',
    name: 'Pantalons & Shorts femme',
    description: 'Pantalons & Shorts femme authentique Lacoste. État neuf. coton sergé durable et confortable.',
    price: 186,
    originalPrice: 265,
    condition: 'new',
    size: 'xs',
    color: 'red',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-xs']
  },
  {
    slug: '542-manteaux-and-vestes-homme-xs-green-good',
    name: 'Manteaux & Vestes homme',
    description: 'Magnifique Manteaux & Vestes homme de la collection Lacoste. Bon état. Matière premium en laine.',
    price: 92,
    originalPrice: 131,
    condition: 'good',
    size: 'xs',
    color: 'green',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-xs']
  },
  {
    slug: '543-survetements-femme-2xl-et-plus-white-new',
    name: 'Survêtements femme',
    description:
      'Magnifique Survêtements femme de la collection Lacoste. État neuf. Matière premium en polyester technique.',
    price: 88,
    originalPrice: 125,
    condition: 'new',
    size: '2xl-et-plus',
    color: 'white',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-survetements', 'femme-2xl-et-plus']
  },
  {
    slug: '544-pullovers-homme-s-beige-good',
    name: 'Pullovers homme',
    description: 'Pullovers homme authentique Lacoste. Bon état. laine mérinos durable et confortable.',
    price: 77,
    originalPrice: 110,
    condition: 'good',
    size: 's',
    color: 'beige',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-pullovers', 'homme-s']
  },
  {
    slug: '545-maroquinerie-femme-2xl-et-plus-pink-new',
    name: 'Maroquinerie femme',
    description: 'Magnifique Maroquinerie femme de la collection Lacoste. État neuf. Matière premium en cuir.',
    price: 50,
    originalPrice: 71,
    condition: 'new',
    size: '2xl-et-plus',
    color: 'pink',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-2xl-et-plus']
  },
  {
    slug: '546-pullovers-femme-2xl-et-plus-purple-excellent',
    name: 'Pullovers femme',
    description:
      'Magnifique Pullovers femme de la collection Lacoste. Excellent état. Matière premium en coton tricoté.',
    price: 155,
    originalPrice: 222,
    condition: 'excellent',
    size: '2xl-et-plus',
    color: 'purple',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-pullovers', 'femme-2xl-et-plus']
  },
  {
    slug: '547-robes-and-jupes-femme-s-white-excellent',
    name: 'Robes & Jupes femme',
    description: 'Robes & Jupes femme authentique Lacoste. Excellent état. crêpe durable et confortable.',
    price: 158,
    originalPrice: 225,
    condition: 'excellent',
    size: 's',
    color: 'white',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-s']
  },
  {
    slug: '548-robes-and-jupes-femme-xl-blue-excellent',
    name: 'Robes & Jupes femme',
    description: 'Robes & Jupes femme élégant et intemporel. Excellent état. Fabriqué en crêpe de haute qualité.',
    price: 131,
    originalPrice: 187,
    condition: 'excellent',
    size: 'xl',
    color: 'blue',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-xl']
  },
  {
    slug: '549-sweatshirts-homme-2xl-et-plus-beige-very_good',
    name: 'Sweatshirts homme',
    description: 'Sweatshirts homme élégant et intemporel. Très bon état. Fabriqué en coton brossé de haute qualité.',
    price: 174,
    originalPrice: 217,
    condition: 'very_good',
    size: '2xl-et-plus',
    color: 'beige',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-sweatshirts', 'homme-2xl-et-plus']
  },
  {
    slug: '550-polos-femme-m-brown-very_good',
    name: 'Polos femme',
    description: 'Polos femme élégant et intemporel. Très bon état. Fabriqué en coton piqué de haute qualité.',
    price: 230,
    originalPrice: 287,
    condition: 'very_good',
    size: 'm',
    color: 'brown',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-polos', 'femme-m']
  },
  {
    slug: '551-survetements-femme-s-black-new',
    name: 'Survêtements femme',
    description:
      'Magnifique Survêtements femme de la collection Lacoste. État neuf. Matière premium en matière stretch.',
    price: 92,
    originalPrice: 131,
    condition: 'new',
    size: 's',
    color: 'black',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-survetements', 'femme-s']
  },
  {
    slug: '552-manteaux-and-vestes-homme-l-purple-good',
    name: 'Manteaux & Vestes homme',
    description: 'Superbe Manteaux & Vestes homme en polyester recyclé. Bon état. Coupe ajustée et confortable.',
    price: 56,
    originalPrice: 80,
    condition: 'good',
    size: 'l',
    color: 'purple',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-l']
  },
  {
    slug: '553-t-shirts-homme-l-red-new',
    name: 'T-shirts homme',
    description: 'T-shirts homme élégant et intemporel. État neuf. Fabriqué en coton organique de haute qualité.',
    price: 208,
    originalPrice: 297,
    condition: 'new',
    size: 'l',
    color: 'red',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-t-shirts', 'homme-l']
  },
  {
    slug: '554-pullovers-homme-xs-beige-good',
    name: 'Pullovers homme',
    description: 'Superbe Pullovers homme en cachemire. Bon état. Coupe ajustée et confortable.',
    price: 111,
    originalPrice: 158,
    condition: 'good',
    size: 'xs',
    color: 'beige',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-pullovers', 'homme-xs']
  },
  {
    slug: '555-chemises-homme-s-brown-very_good',
    name: 'Chemises homme',
    description: 'Chemises homme authentique Lacoste. Très bon état. popeline durable et confortable.',
    price: 234,
    originalPrice: 292,
    condition: 'very_good',
    size: 's',
    color: 'brown',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-chemises', 'homme-s']
  },
  {
    slug: '556-chemises-femme-xl-red-new',
    name: 'Chemises femme',
    description: 'Superbe Chemises femme en popeline. État neuf. Coupe ajustée et confortable.',
    price: 141,
    originalPrice: 201,
    condition: 'new',
    size: 'xl',
    color: 'red',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-xl']
  },
  {
    slug: '557-survetements-homme-xl-green-good',
    name: 'Survêtements homme',
    description: 'Superbe Survêtements homme en matière stretch. Bon état. Coupe ajustée et confortable.',
    price: 137,
    originalPrice: 195,
    condition: 'good',
    size: 'xl',
    color: 'green',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-survetements', 'homme-xl']
  },
  {
    slug: '558-chemises-homme-s-grey-good',
    name: 'Chemises homme',
    description: 'Superbe Chemises homme en oxford. Bon état. Coupe ajustée et confortable.',
    price: 50,
    originalPrice: 72,
    condition: 'good',
    size: 's',
    color: 'grey',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-chemises', 'homme-s']
  },
  {
    slug: '559-pantalons-and-shorts-homme-xl-brown-very_good',
    name: 'Pantalons & Shorts homme',
    description: 'Pantalons & Shorts homme authentique Lacoste. Très bon état. toile de coton durable et confortable.',
    price: 147,
    originalPrice: 184,
    condition: 'very_good',
    size: 'xl',
    color: 'brown',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-xl']
  },
  {
    slug: '560-t-shirts-homme-s-grey-excellent',
    name: 'T-shirts homme',
    description: 'Superbe T-shirts homme en coton. Excellent état. Coupe ajustée et confortable.',
    price: 164,
    originalPrice: 234,
    condition: 'excellent',
    size: 's',
    color: 'grey',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-t-shirts', 'homme-s']
  },
  {
    slug: '561-robes-and-jupes-femme-xs-white-excellent',
    name: 'Robes & Jupes femme',
    description: 'Robes & Jupes femme authentique Lacoste. Excellent état. crêpe durable et confortable.',
    price: 22,
    originalPrice: 32,
    condition: 'excellent',
    size: 'xs',
    color: 'white',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-xs']
  },
  {
    slug: '562-survetements-femme-xl-grey-good',
    name: 'Survêtements femme',
    description: 'Survêtements femme élégant et intemporel. Bon état. Fabriqué en matière stretch de haute qualité.',
    price: 202,
    originalPrice: 288,
    condition: 'good',
    size: 'xl',
    color: 'grey',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-survetements', 'femme-xl']
  },
  {
    slug: '563-chemises-homme-xs-grey-very_good',
    name: 'Chemises homme',
    description: 'Superbe Chemises homme en oxford. Très bon état. Coupe ajustée et confortable.',
    price: 133,
    originalPrice: 166,
    condition: 'very_good',
    size: 'xs',
    color: 'grey',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-chemises', 'homme-xs']
  },
  {
    slug: '564-survetements-homme-m-beige-excellent',
    name: 'Survêtements homme',
    description:
      'Survêtements homme élégant et intemporel. Excellent état. Fabriqué en matière stretch de haute qualité.',
    price: 71,
    originalPrice: 102,
    condition: 'excellent',
    size: 'm',
    color: 'beige',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-survetements', 'homme-m']
  },
  {
    slug: '565-manteaux-and-vestes-femme-m-green-new',
    name: 'Manteaux & Vestes femme',
    description:
      'Manteaux & Vestes femme élégant et intemporel. État neuf. Fabriqué en polyester recyclé de haute qualité.',
    price: 179,
    originalPrice: 255,
    condition: 'new',
    size: 'm',
    color: 'green',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-m']
  },
  {
    slug: '566-polos-homme-xl-white-new',
    name: 'Polos homme',
    description: 'Magnifique Polos homme de la collection Lacoste. État neuf. Matière premium en jersey de coton.',
    price: 177,
    originalPrice: 253,
    condition: 'new',
    size: 'xl',
    color: 'white',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-polos', 'homme-xl']
  },
  {
    slug: '567-manteaux-and-vestes-homme-s-yellow-excellent',
    name: 'Manteaux & Vestes homme',
    description:
      'Manteaux & Vestes homme authentique Lacoste. Excellent état. polyester recyclé durable et confortable.',
    price: 190,
    originalPrice: 272,
    condition: 'excellent',
    size: 's',
    color: 'yellow',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-s']
  },
  {
    slug: '568-chemises-homme-s-brown-excellent',
    name: 'Chemises homme',
    description: 'Superbe Chemises homme en oxford. Excellent état. Coupe ajustée et confortable.',
    price: 37,
    originalPrice: 53,
    condition: 'excellent',
    size: 's',
    color: 'brown',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-chemises', 'homme-s']
  },
  {
    slug: '569-pantalons-and-shorts-homme-2xl-et-plus-white-good',
    name: 'Pantalons & Shorts homme',
    description:
      'Magnifique Pantalons & Shorts homme de la collection Lacoste. Bon état. Matière premium en toile de coton.',
    price: 46,
    originalPrice: 66,
    condition: 'good',
    size: '2xl-et-plus',
    color: 'white',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-2xl-et-plus']
  },
  {
    slug: '570-sweatshirts-femme-l-brown-new',
    name: 'Sweatshirts femme',
    description: 'Superbe Sweatshirts femme en jersey lourd. État neuf. Coupe ajustée et confortable.',
    price: 188,
    originalPrice: 268,
    condition: 'new',
    size: 'l',
    color: 'brown',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-sweatshirts', 'femme-l']
  },
  {
    slug: '571-pantalons-and-shorts-homme-xl-green-new',
    name: 'Pantalons & Shorts homme',
    description: 'Superbe Pantalons & Shorts homme en toile de coton. État neuf. Coupe ajustée et confortable.',
    price: 158,
    originalPrice: 226,
    condition: 'new',
    size: 'xl',
    color: 'green',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-xl']
  },
  {
    slug: '572-robes-and-jupes-femme-m-orange-good',
    name: 'Robes & Jupes femme',
    description: 'Robes & Jupes femme authentique Lacoste. Bon état. coton stretch durable et confortable.',
    price: 162,
    originalPrice: 232,
    condition: 'good',
    size: 'm',
    color: 'orange',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-m']
  },
  {
    slug: '573-chemises-femme-xs-orange-excellent',
    name: 'Chemises femme',
    description: 'Superbe Chemises femme en lin. Excellent état. Coupe ajustée et confortable.',
    price: 162,
    originalPrice: 232,
    condition: 'excellent',
    size: 'xs',
    color: 'orange',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-xs']
  },
  {
    slug: '574-pullovers-femme-xs-beige-new',
    name: 'Pullovers femme',
    description: 'Superbe Pullovers femme en coton tricoté. État neuf. Coupe ajustée et confortable.',
    price: 169,
    originalPrice: 242,
    condition: 'new',
    size: 'xs',
    color: 'beige',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-pullovers', 'femme-xs']
  },
  {
    slug: '575-tops-and-chemises-femme-xs-pink-new',
    name: 'Tops & Chemises femme',
    description: 'Tops & Chemises femme élégant et intemporel. État neuf. Fabriqué en viscose de haute qualité.',
    price: 87,
    originalPrice: 124,
    condition: 'new',
    size: 'xs',
    color: 'pink',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-xs']
  },
  {
    slug: '576-t-shirts-homme-s-beige-good',
    name: 'T-shirts homme',
    description: 'T-shirts homme authentique Lacoste. Bon état. jersey fin durable et confortable.',
    price: 204,
    originalPrice: 291,
    condition: 'good',
    size: 's',
    color: 'beige',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-t-shirts', 'homme-s']
  },
  {
    slug: '577-chemises-femme-xl-green-new',
    name: 'Chemises femme',
    description: 'Magnifique Chemises femme de la collection Lacoste. État neuf. Matière premium en popeline.',
    price: 132,
    originalPrice: 188,
    condition: 'new',
    size: 'xl',
    color: 'green',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-xl']
  },
  {
    slug: '578-manteaux-and-vestes-homme-xl-brown-new',
    name: 'Manteaux & Vestes homme',
    description: 'Manteaux & Vestes homme authentique Lacoste. État neuf. laine durable et confortable.',
    price: 125,
    originalPrice: 179,
    condition: 'new',
    size: 'xl',
    color: 'brown',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-xl']
  },
  {
    slug: '579-polos-homme-xl-brown-very_good',
    name: 'Polos homme',
    description: 'Superbe Polos homme en jersey de coton. Très bon état. Coupe ajustée et confortable.',
    price: 106,
    originalPrice: 132,
    condition: 'very_good',
    size: 'xl',
    color: 'brown',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-polos', 'homme-xl']
  },
  {
    slug: '580-tops-and-chemises-femme-m-red-new',
    name: 'Tops & Chemises femme',
    description: 'Superbe Tops & Chemises femme en viscose. État neuf. Coupe ajustée et confortable.',
    price: 33,
    originalPrice: 47,
    condition: 'new',
    size: 'm',
    color: 'red',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-m']
  },
  {
    slug: '581-chemises-femme-m-blue-very_good',
    name: 'Chemises femme',
    description: 'Chemises femme élégant et intemporel. Très bon état. Fabriqué en lin de haute qualité.',
    price: 126,
    originalPrice: 157,
    condition: 'very_good',
    size: 'm',
    color: 'blue',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-m']
  },
  {
    slug: '582-polos-homme-l-grey-very_good',
    name: 'Polos homme',
    description: 'Polos homme authentique Lacoste. Très bon état. coton bio durable et confortable.',
    price: 178,
    originalPrice: 223,
    condition: 'very_good',
    size: 'l',
    color: 'grey',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-polos', 'homme-l']
  },
  {
    slug: '583-chemises-femme-m-pink-good',
    name: 'Chemises femme',
    description: 'Chemises femme authentique Lacoste. Bon état. oxford durable et confortable.',
    price: 82,
    originalPrice: 117,
    condition: 'good',
    size: 'm',
    color: 'pink',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-m']
  },
  {
    slug: '584-pantalons-and-shorts-homme-xl-green-new',
    name: 'Pantalons & Shorts homme',
    description: 'Superbe Pantalons & Shorts homme en gabardine. État neuf. Coupe ajustée et confortable.',
    price: 202,
    originalPrice: 288,
    condition: 'new',
    size: 'xl',
    color: 'green',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-xl']
  },
  {
    slug: '585-pullovers-femme-xl-grey-new',
    name: 'Pullovers femme',
    description: 'Magnifique Pullovers femme de la collection Lacoste. État neuf. Matière premium en laine mérinos.',
    price: 188,
    originalPrice: 269,
    condition: 'new',
    size: 'xl',
    color: 'grey',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-pullovers', 'femme-xl']
  },
  {
    slug: '586-polos-homme-s-pink-good',
    name: 'Polos homme',
    description: 'Polos homme élégant et intemporel. Bon état. Fabriqué en jersey de coton de haute qualité.',
    price: 167,
    originalPrice: 238,
    condition: 'good',
    size: 's',
    color: 'pink',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-polos', 'homme-s']
  },
  {
    slug: '587-manteaux-and-vestes-femme-2xl-et-plus-beige-new',
    name: 'Manteaux & Vestes femme',
    description: 'Magnifique Manteaux & Vestes femme de la collection Lacoste. État neuf. Matière premium en laine.',
    price: 25,
    originalPrice: 35,
    condition: 'new',
    size: '2xl-et-plus',
    color: 'beige',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-2xl-et-plus']
  },
  {
    slug: '588-polos-femme-xl-black-very_good',
    name: 'Polos femme',
    description: 'Polos femme authentique Lacoste. Très bon état. coton bio durable et confortable.',
    price: 184,
    originalPrice: 230,
    condition: 'very_good',
    size: 'xl',
    color: 'black',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-polos', 'femme-xl']
  },
  {
    slug: '589-maroquinerie-femme-m-pink-new',
    name: 'Maroquinerie femme',
    description: 'Magnifique Maroquinerie femme de la collection Lacoste. État neuf. Matière premium en nylon.',
    price: 178,
    originalPrice: 254,
    condition: 'new',
    size: 'm',
    color: 'pink',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-m']
  },
  {
    slug: '590-survetements-femme-l-green-good',
    name: 'Survêtements femme',
    description: 'Survêtements femme élégant et intemporel. Bon état. Fabriqué en matière stretch de haute qualité.',
    price: 27,
    originalPrice: 38,
    condition: 'good',
    size: 'l',
    color: 'green',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-survetements', 'femme-l']
  },
  {
    slug: '591-maroquinerie-homme-2xl-et-plus-orange-excellent',
    name: 'Maroquinerie homme',
    description:
      'Maroquinerie homme élégant et intemporel. Excellent état. Fabriqué en toile enduite de haute qualité.',
    price: 32,
    originalPrice: 46,
    condition: 'excellent',
    size: '2xl-et-plus',
    color: 'orange',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-maroquinerie', 'homme-2xl-et-plus']
  },
  {
    slug: '592-manteaux-and-vestes-femme-m-green-excellent',
    name: 'Manteaux & Vestes femme',
    description: 'Manteaux & Vestes femme authentique Lacoste. Excellent état. laine durable et confortable.',
    price: 148,
    originalPrice: 212,
    condition: 'excellent',
    size: 'm',
    color: 'green',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-m']
  },
  {
    slug: '593-sweatshirts-femme-2xl-et-plus-yellow-new',
    name: 'Sweatshirts femme',
    description: 'Sweatshirts femme authentique Lacoste. État neuf. molleton durable et confortable.',
    price: 83,
    originalPrice: 118,
    condition: 'new',
    size: '2xl-et-plus',
    color: 'yellow',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-sweatshirts', 'femme-2xl-et-plus']
  },
  {
    slug: '594-pantalons-and-shorts-homme-s-grey-good',
    name: 'Pantalons & Shorts homme',
    description: 'Superbe Pantalons & Shorts homme en toile de coton. Bon état. Coupe ajustée et confortable.',
    price: 130,
    originalPrice: 185,
    condition: 'good',
    size: 's',
    color: 'grey',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-s']
  },
  {
    slug: '595-polos-femme-m-pink-good',
    name: 'Polos femme',
    description: 'Superbe Polos femme en jersey de coton. Bon état. Coupe ajustée et confortable.',
    price: 37,
    originalPrice: 53,
    condition: 'good',
    size: 'm',
    color: 'pink',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-polos', 'femme-m']
  },
  {
    slug: '596-pullovers-homme-s-purple-good',
    name: 'Pullovers homme',
    description: 'Superbe Pullovers homme en laine mérinos. Bon état. Coupe ajustée et confortable.',
    price: 154,
    originalPrice: 220,
    condition: 'good',
    size: 's',
    color: 'purple',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-pullovers', 'homme-s']
  },
  {
    slug: '597-polos-homme-m-brown-very_good',
    name: 'Polos homme',
    description: 'Polos homme élégant et intemporel. Très bon état. Fabriqué en coton piqué de haute qualité.',
    price: 78,
    originalPrice: 97,
    condition: 'very_good',
    size: 'm',
    color: 'brown',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-polos', 'homme-m']
  },
  {
    slug: '598-pullovers-femme-2xl-et-plus-black-good',
    name: 'Pullovers femme',
    description: 'Pullovers femme authentique Lacoste. Bon état. coton tricoté durable et confortable.',
    price: 92,
    originalPrice: 131,
    condition: 'good',
    size: '2xl-et-plus',
    color: 'black',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-pullovers', 'femme-2xl-et-plus']
  },
  {
    slug: '599-maroquinerie-homme-s-white-very_good',
    name: 'Maroquinerie homme',
    description: 'Superbe Maroquinerie homme en nylon. Très bon état. Coupe ajustée et confortable.',
    price: 204,
    originalPrice: 255,
    condition: 'very_good',
    size: 's',
    color: 'white',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-maroquinerie', 'homme-s']
  },
  {
    slug: '600-pullovers-femme-s-pink-new',
    name: 'Pullovers femme',
    description: 'Pullovers femme élégant et intemporel. État neuf. Fabriqué en laine mérinos de haute qualité.',
    price: 183,
    originalPrice: 262,
    condition: 'new',
    size: 's',
    color: 'pink',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-pullovers', 'femme-s']
  },
  {
    slug: '601-chemises-femme-xl-red-very_good',
    name: 'Chemises femme',
    description: 'Superbe Chemises femme en oxford. Très bon état. Coupe ajustée et confortable.',
    price: 212,
    originalPrice: 265,
    condition: 'very_good',
    size: 'xl',
    color: 'red',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-xl']
  },
  {
    slug: '602-pullovers-homme-l-green-very_good',
    name: 'Pullovers homme',
    description: 'Pullovers homme élégant et intemporel. Très bon état. Fabriqué en laine mérinos de haute qualité.',
    price: 43,
    originalPrice: 54,
    condition: 'very_good',
    size: 'l',
    color: 'green',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-pullovers', 'homme-l']
  },
  {
    slug: '603-polos-homme-2xl-et-plus-green-good',
    name: 'Polos homme',
    description: 'Polos homme authentique Lacoste. Bon état. jersey de coton durable et confortable.',
    price: 144,
    originalPrice: 206,
    condition: 'good',
    size: '2xl-et-plus',
    color: 'green',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-polos', 'homme-2xl-et-plus']
  },
  {
    slug: '604-chemises-homme-2xl-et-plus-red-good',
    name: 'Chemises homme',
    description: 'Chemises homme élégant et intemporel. Bon état. Fabriqué en lin de haute qualité.',
    price: 151,
    originalPrice: 215,
    condition: 'good',
    size: '2xl-et-plus',
    color: 'red',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-chemises', 'homme-2xl-et-plus']
  },
  {
    slug: '605-sweatshirts-homme-m-brown-very_good',
    name: 'Sweatshirts homme',
    description: 'Superbe Sweatshirts homme en coton brossé. Très bon état. Coupe ajustée et confortable.',
    price: 102,
    originalPrice: 127,
    condition: 'very_good',
    size: 'm',
    color: 'brown',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-sweatshirts', 'homme-m']
  },
  {
    slug: '606-polos-femme-l-blue-good',
    name: 'Polos femme',
    description: 'Polos femme élégant et intemporel. Bon état. Fabriqué en jersey de coton de haute qualité.',
    price: 90,
    originalPrice: 129,
    condition: 'good',
    size: 'l',
    color: 'blue',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-polos', 'femme-l']
  },
  {
    slug: '607-pullovers-femme-xs-orange-very_good',
    name: 'Pullovers femme',
    description: 'Pullovers femme élégant et intemporel. Très bon état. Fabriqué en cachemire de haute qualité.',
    price: 130,
    originalPrice: 162,
    condition: 'very_good',
    size: 'xs',
    color: 'orange',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-pullovers', 'femme-xs']
  },
  {
    slug: '608-survetements-homme-m-black-good',
    name: 'Survêtements homme',
    description: 'Survêtements homme élégant et intemporel. Bon état. Fabriqué en matière stretch de haute qualité.',
    price: 91,
    originalPrice: 130,
    condition: 'good',
    size: 'm',
    color: 'black',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-survetements', 'homme-m']
  },
  {
    slug: '609-pullovers-femme-xl-purple-very_good',
    name: 'Pullovers femme',
    description: 'Pullovers femme authentique Lacoste. Très bon état. coton tricoté durable et confortable.',
    price: 210,
    originalPrice: 262,
    condition: 'very_good',
    size: 'xl',
    color: 'purple',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-pullovers', 'femme-xl']
  },
  {
    slug: '610-robes-and-jupes-femme-xs-green-very_good',
    name: 'Robes & Jupes femme',
    description: 'Magnifique Robes & Jupes femme de la collection Lacoste. Très bon état. Matière premium en jersey.',
    price: 233,
    originalPrice: 291,
    condition: 'very_good',
    size: 'xs',
    color: 'green',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-xs']
  },
  {
    slug: '611-t-shirts-femme-l-green-excellent',
    name: 'T-shirts femme',
    description: 'T-shirts femme élégant et intemporel. Excellent état. Fabriqué en jersey fin de haute qualité.',
    price: 148,
    originalPrice: 212,
    condition: 'excellent',
    size: 'l',
    color: 'green',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-l']
  },
  {
    slug: '612-pullovers-femme-2xl-et-plus-yellow-good',
    name: 'Pullovers femme',
    description: 'Magnifique Pullovers femme de la collection Lacoste. Bon état. Matière premium en laine mérinos.',
    price: 55,
    originalPrice: 78,
    condition: 'good',
    size: '2xl-et-plus',
    color: 'yellow',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-pullovers', 'femme-2xl-et-plus']
  },
  {
    slug: '613-polos-homme-xs-orange-excellent',
    name: 'Polos homme',
    description: 'Polos homme authentique Lacoste. Excellent état. jersey de coton durable et confortable.',
    price: 80,
    originalPrice: 114,
    condition: 'excellent',
    size: 'xs',
    color: 'orange',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-polos', 'homme-xs']
  },
  {
    slug: '614-pullovers-homme-xs-white-very_good',
    name: 'Pullovers homme',
    description:
      'Magnifique Pullovers homme de la collection Lacoste. Très bon état. Matière premium en coton tricoté.',
    price: 206,
    originalPrice: 258,
    condition: 'very_good',
    size: 'xs',
    color: 'white',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-pullovers', 'homme-xs']
  },
  {
    slug: '615-pantalons-and-shorts-homme-2xl-et-plus-yellow-excellent',
    name: 'Pantalons & Shorts homme',
    description: 'Superbe Pantalons & Shorts homme en gabardine. Excellent état. Coupe ajustée et confortable.',
    price: 54,
    originalPrice: 77,
    condition: 'excellent',
    size: '2xl-et-plus',
    color: 'yellow',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-2xl-et-plus']
  },
  {
    slug: '616-polos-homme-xl-red-good',
    name: 'Polos homme',
    description: 'Polos homme authentique Lacoste. Bon état. coton bio durable et confortable.',
    price: 98,
    originalPrice: 140,
    condition: 'good',
    size: 'xl',
    color: 'red',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-polos', 'homme-xl']
  },
  {
    slug: '617-sweatshirts-homme-2xl-et-plus-brown-good',
    name: 'Sweatshirts homme',
    description: 'Magnifique Sweatshirts homme de la collection Lacoste. Bon état. Matière premium en jersey lourd.',
    price: 41,
    originalPrice: 59,
    condition: 'good',
    size: '2xl-et-plus',
    color: 'brown',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-sweatshirts', 'homme-2xl-et-plus']
  },
  {
    slug: '618-manteaux-and-vestes-homme-m-orange-good',
    name: 'Manteaux & Vestes homme',
    description:
      'Manteaux & Vestes homme élégant et intemporel. Bon état. Fabriqué en polyester recyclé de haute qualité.',
    price: 97,
    originalPrice: 139,
    condition: 'good',
    size: 'm',
    color: 'orange',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-m']
  },
  {
    slug: '619-chemises-homme-xl-blue-new',
    name: 'Chemises homme',
    description: 'Superbe Chemises homme en popeline. État neuf. Coupe ajustée et confortable.',
    price: 208,
    originalPrice: 297,
    condition: 'new',
    size: 'xl',
    color: 'blue',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-chemises', 'homme-xl']
  },
  {
    slug: '620-maroquinerie-femme-s-beige-good',
    name: 'Maroquinerie femme',
    description: 'Maroquinerie femme élégant et intemporel. Bon état. Fabriqué en nylon de haute qualité.',
    price: 37,
    originalPrice: 53,
    condition: 'good',
    size: 's',
    color: 'beige',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-s']
  },
  {
    slug: '621-t-shirts-homme-xs-green-very_good',
    name: 'T-shirts homme',
    description: 'T-shirts homme authentique Lacoste. Très bon état. coton durable et confortable.',
    price: 120,
    originalPrice: 150,
    condition: 'very_good',
    size: 'xs',
    color: 'green',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-t-shirts', 'homme-xs']
  },
  {
    slug: '622-manteaux-and-vestes-homme-2xl-et-plus-grey-new',
    name: 'Manteaux & Vestes homme',
    description: 'Superbe Manteaux & Vestes homme en polyester recyclé. État neuf. Coupe ajustée et confortable.',
    price: 79,
    originalPrice: 113,
    condition: 'new',
    size: '2xl-et-plus',
    color: 'grey',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-2xl-et-plus']
  },
  {
    slug: '623-polos-femme-2xl-et-plus-orange-very_good',
    name: 'Polos femme',
    description: 'Polos femme élégant et intemporel. Très bon état. Fabriqué en coton piqué de haute qualité.',
    price: 118,
    originalPrice: 147,
    condition: 'very_good',
    size: '2xl-et-plus',
    color: 'orange',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-polos', 'femme-2xl-et-plus']
  },
  {
    slug: '624-pantalons-and-shorts-homme-2xl-et-plus-pink-very_good',
    name: 'Pantalons & Shorts homme',
    description: 'Pantalons & Shorts homme authentique Lacoste. Très bon état. gabardine durable et confortable.',
    price: 55,
    originalPrice: 69,
    condition: 'very_good',
    size: '2xl-et-plus',
    color: 'pink',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-2xl-et-plus']
  },
  {
    slug: '625-pullovers-homme-l-white-very_good',
    name: 'Pullovers homme',
    description: 'Pullovers homme authentique Lacoste. Très bon état. coton tricoté durable et confortable.',
    price: 134,
    originalPrice: 167,
    condition: 'very_good',
    size: 'l',
    color: 'white',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-pullovers', 'homme-l']
  },
  {
    slug: '626-tops-and-chemises-femme-m-black-very_good',
    name: 'Tops & Chemises femme',
    description: 'Tops & Chemises femme authentique Lacoste. Très bon état. soie durable et confortable.',
    price: 152,
    originalPrice: 190,
    condition: 'very_good',
    size: 'm',
    color: 'black',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-m']
  },
  {
    slug: '627-robes-and-jupes-femme-xl-blue-new',
    name: 'Robes & Jupes femme',
    description: 'Robes & Jupes femme authentique Lacoste. État neuf. crêpe durable et confortable.',
    price: 136,
    originalPrice: 194,
    condition: 'new',
    size: 'xl',
    color: 'blue',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-xl']
  },
  {
    slug: '628-pantalons-and-shorts-femme-xs-grey-very_good',
    name: 'Pantalons & Shorts femme',
    description:
      'Pantalons & Shorts femme élégant et intemporel. Très bon état. Fabriqué en toile de coton de haute qualité.',
    price: 59,
    originalPrice: 74,
    condition: 'very_good',
    size: 'xs',
    color: 'grey',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-xs']
  },
  {
    slug: '629-chemises-homme-2xl-et-plus-red-new',
    name: 'Chemises homme',
    description: 'Chemises homme élégant et intemporel. État neuf. Fabriqué en popeline de haute qualité.',
    price: 43,
    originalPrice: 61,
    condition: 'new',
    size: '2xl-et-plus',
    color: 'red',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-chemises', 'homme-2xl-et-plus']
  },
  {
    slug: '630-maroquinerie-homme-s-blue-new',
    name: 'Maroquinerie homme',
    description: 'Superbe Maroquinerie homme en nylon. État neuf. Coupe ajustée et confortable.',
    price: 90,
    originalPrice: 129,
    condition: 'new',
    size: 's',
    color: 'blue',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-maroquinerie', 'homme-s']
  },
  {
    slug: '631-robes-and-jupes-femme-l-green-excellent',
    name: 'Robes & Jupes femme',
    description: 'Superbe Robes & Jupes femme en jersey. Excellent état. Coupe ajustée et confortable.',
    price: 196,
    originalPrice: 280,
    condition: 'excellent',
    size: 'l',
    color: 'green',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-l']
  },
  {
    slug: '632-tops-and-chemises-femme-m-red-new',
    name: 'Tops & Chemises femme',
    description: 'Tops & Chemises femme élégant et intemporel. État neuf. Fabriqué en viscose de haute qualité.',
    price: 153,
    originalPrice: 219,
    condition: 'new',
    size: 'm',
    color: 'red',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-m']
  },
  {
    slug: '633-manteaux-and-vestes-homme-2xl-et-plus-white-excellent',
    name: 'Manteaux & Vestes homme',
    description: 'Manteaux & Vestes homme authentique Lacoste. Excellent état. laine durable et confortable.',
    price: 29,
    originalPrice: 42,
    condition: 'excellent',
    size: '2xl-et-plus',
    color: 'white',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-2xl-et-plus']
  },
  {
    slug: '634-sweatshirts-homme-xl-pink-very_good',
    name: 'Sweatshirts homme',
    description: 'Superbe Sweatshirts homme en coton brossé. Très bon état. Coupe ajustée et confortable.',
    price: 35,
    originalPrice: 44,
    condition: 'very_good',
    size: 'xl',
    color: 'pink',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-sweatshirts', 'homme-xl']
  },
  {
    slug: '635-robes-and-jupes-femme-xs-red-excellent',
    name: 'Robes & Jupes femme',
    description: 'Robes & Jupes femme authentique Lacoste. Excellent état. jersey durable et confortable.',
    price: 160,
    originalPrice: 228,
    condition: 'excellent',
    size: 'xs',
    color: 'red',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-xs']
  },
  {
    slug: '636-chemises-femme-xs-grey-very_good',
    name: 'Chemises femme',
    description: 'Chemises femme élégant et intemporel. Très bon état. Fabriqué en lin de haute qualité.',
    price: 198,
    originalPrice: 248,
    condition: 'very_good',
    size: 'xs',
    color: 'grey',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-xs']
  },
  {
    slug: '637-t-shirts-femme-m-grey-new',
    name: 'T-shirts femme',
    description: 'Superbe T-shirts femme en jersey fin. État neuf. Coupe ajustée et confortable.',
    price: 166,
    originalPrice: 237,
    condition: 'new',
    size: 'm',
    color: 'grey',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-m']
  },
  {
    slug: '638-pullovers-homme-2xl-et-plus-blue-excellent',
    name: 'Pullovers homme',
    description:
      'Magnifique Pullovers homme de la collection Lacoste. Excellent état. Matière premium en laine mérinos.',
    price: 78,
    originalPrice: 111,
    condition: 'excellent',
    size: '2xl-et-plus',
    color: 'blue',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-pullovers', 'homme-2xl-et-plus']
  },
  {
    slug: '639-sweatshirts-homme-s-grey-very_good',
    name: 'Sweatshirts homme',
    description: 'Sweatshirts homme élégant et intemporel. Très bon état. Fabriqué en coton brossé de haute qualité.',
    price: 207,
    originalPrice: 259,
    condition: 'very_good',
    size: 's',
    color: 'grey',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-sweatshirts', 'homme-s']
  },
  {
    slug: '640-survetements-homme-2xl-et-plus-blue-very_good',
    name: 'Survêtements homme',
    description: 'Superbe Survêtements homme en matière stretch. Très bon état. Coupe ajustée et confortable.',
    price: 72,
    originalPrice: 90,
    condition: 'very_good',
    size: '2xl-et-plus',
    color: 'blue',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-survetements', 'homme-2xl-et-plus']
  },
  {
    slug: '641-manteaux-and-vestes-femme-l-black-excellent',
    name: 'Manteaux & Vestes femme',
    description:
      'Manteaux & Vestes femme authentique Lacoste. Excellent état. coton imperméable durable et confortable.',
    price: 95,
    originalPrice: 135,
    condition: 'excellent',
    size: 'l',
    color: 'black',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-l']
  },
  {
    slug: '642-t-shirts-femme-xs-green-very_good',
    name: 'T-shirts femme',
    description:
      'Magnifique T-shirts femme de la collection Lacoste. Très bon état. Matière premium en coton organique.',
    price: 82,
    originalPrice: 103,
    condition: 'very_good',
    size: 'xs',
    color: 'green',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-xs']
  },
  {
    slug: '643-survetements-homme-2xl-et-plus-grey-good',
    name: 'Survêtements homme',
    description:
      'Magnifique Survêtements homme de la collection Lacoste. Bon état. Matière premium en coton molletonné.',
    price: 181,
    originalPrice: 258,
    condition: 'good',
    size: '2xl-et-plus',
    color: 'grey',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-survetements', 'homme-2xl-et-plus']
  },
  {
    slug: '644-sweatshirts-homme-m-yellow-excellent',
    name: 'Sweatshirts homme',
    description: 'Superbe Sweatshirts homme en coton brossé. Excellent état. Coupe ajustée et confortable.',
    price: 127,
    originalPrice: 181,
    condition: 'excellent',
    size: 'm',
    color: 'yellow',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-sweatshirts', 'homme-m']
  },
  {
    slug: '645-robes-and-jupes-femme-xl-brown-very_good',
    name: 'Robes & Jupes femme',
    description: 'Superbe Robes & Jupes femme en crêpe. Très bon état. Coupe ajustée et confortable.',
    price: 131,
    originalPrice: 164,
    condition: 'very_good',
    size: 'xl',
    color: 'brown',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-xl']
  },
  {
    slug: '646-tops-and-chemises-femme-2xl-et-plus-red-good',
    name: 'Tops & Chemises femme',
    description:
      'Magnifique Tops & Chemises femme de la collection Lacoste. Bon état. Matière premium en popeline de coton.',
    price: 74,
    originalPrice: 106,
    condition: 'good',
    size: '2xl-et-plus',
    color: 'red',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-2xl-et-plus']
  },
  {
    slug: '647-pullovers-homme-xs-pink-excellent',
    name: 'Pullovers homme',
    description:
      'Magnifique Pullovers homme de la collection Lacoste. Excellent état. Matière premium en laine mérinos.',
    price: 179,
    originalPrice: 255,
    condition: 'excellent',
    size: 'xs',
    color: 'pink',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-pullovers', 'homme-xs']
  },
  {
    slug: '648-pullovers-femme-xl-brown-very_good',
    name: 'Pullovers femme',
    description: 'Superbe Pullovers femme en laine mérinos. Très bon état. Coupe ajustée et confortable.',
    price: 66,
    originalPrice: 83,
    condition: 'very_good',
    size: 'xl',
    color: 'brown',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-pullovers', 'femme-xl']
  },
  {
    slug: '649-sweatshirts-femme-l-beige-new',
    name: 'Sweatshirts femme',
    description: 'Superbe Sweatshirts femme en coton brossé. État neuf. Coupe ajustée et confortable.',
    price: 148,
    originalPrice: 212,
    condition: 'new',
    size: 'l',
    color: 'beige',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-sweatshirts', 'femme-l']
  },
  {
    slug: '650-maroquinerie-homme-s-purple-good',
    name: 'Maroquinerie homme',
    description: 'Maroquinerie homme authentique Lacoste. Bon état. toile enduite durable et confortable.',
    price: 77,
    originalPrice: 110,
    condition: 'good',
    size: 's',
    color: 'purple',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-maroquinerie', 'homme-s']
  },
  {
    slug: '651-pantalons-and-shorts-homme-m-yellow-very_good',
    name: 'Pantalons & Shorts homme',
    description: 'Pantalons & Shorts homme authentique Lacoste. Très bon état. coton sergé durable et confortable.',
    price: 41,
    originalPrice: 51,
    condition: 'very_good',
    size: 'm',
    color: 'yellow',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-m']
  },
  {
    slug: '652-survetements-homme-xl-white-new',
    name: 'Survêtements homme',
    description: 'Survêtements homme authentique Lacoste. État neuf. polyester technique durable et confortable.',
    price: 83,
    originalPrice: 118,
    condition: 'new',
    size: 'xl',
    color: 'white',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-survetements', 'homme-xl']
  },
  {
    slug: '653-pullovers-femme-2xl-et-plus-black-good',
    name: 'Pullovers femme',
    description: 'Pullovers femme élégant et intemporel. Bon état. Fabriqué en coton tricoté de haute qualité.',
    price: 190,
    originalPrice: 271,
    condition: 'good',
    size: '2xl-et-plus',
    color: 'black',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-pullovers', 'femme-2xl-et-plus']
  },
  {
    slug: '654-chemises-femme-xs-grey-new',
    name: 'Chemises femme',
    description: 'Chemises femme authentique Lacoste. État neuf. oxford durable et confortable.',
    price: 185,
    originalPrice: 264,
    condition: 'new',
    size: 'xs',
    color: 'grey',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-xs']
  },
  {
    slug: '655-tops-and-chemises-femme-xl-purple-good',
    name: 'Tops & Chemises femme',
    description: 'Superbe Tops & Chemises femme en viscose. Bon état. Coupe ajustée et confortable.',
    price: 179,
    originalPrice: 255,
    condition: 'good',
    size: 'xl',
    color: 'purple',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-xl']
  },
  {
    slug: '656-t-shirts-femme-l-brown-excellent',
    name: 'T-shirts femme',
    description:
      'Magnifique T-shirts femme de la collection Lacoste. Excellent état. Matière premium en coton organique.',
    price: 155,
    originalPrice: 222,
    condition: 'excellent',
    size: 'l',
    color: 'brown',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-l']
  },
  {
    slug: '657-polos-femme-l-purple-excellent',
    name: 'Polos femme',
    description: 'Polos femme élégant et intemporel. Excellent état. Fabriqué en coton piqué de haute qualité.',
    price: 67,
    originalPrice: 95,
    condition: 'excellent',
    size: 'l',
    color: 'purple',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-polos', 'femme-l']
  },
  {
    slug: '658-manteaux-and-vestes-homme-l-pink-very_good',
    name: 'Manteaux & Vestes homme',
    description: 'Superbe Manteaux & Vestes homme en laine. Très bon état. Coupe ajustée et confortable.',
    price: 131,
    originalPrice: 164,
    condition: 'very_good',
    size: 'l',
    color: 'pink',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-l']
  },
  {
    slug: '659-pullovers-homme-l-green-good',
    name: 'Pullovers homme',
    description: 'Magnifique Pullovers homme de la collection Lacoste. Bon état. Matière premium en laine mérinos.',
    price: 209,
    originalPrice: 298,
    condition: 'good',
    size: 'l',
    color: 'green',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-pullovers', 'homme-l']
  },
  {
    slug: '660-tops-and-chemises-femme-2xl-et-plus-purple-new',
    name: 'Tops & Chemises femme',
    description: 'Tops & Chemises femme élégant et intemporel. État neuf. Fabriqué en viscose de haute qualité.',
    price: 109,
    originalPrice: 156,
    condition: 'new',
    size: '2xl-et-plus',
    color: 'purple',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-2xl-et-plus']
  },
  {
    slug: '661-sweatshirts-femme-2xl-et-plus-yellow-new',
    name: 'Sweatshirts femme',
    description: 'Superbe Sweatshirts femme en coton brossé. État neuf. Coupe ajustée et confortable.',
    price: 46,
    originalPrice: 66,
    condition: 'new',
    size: '2xl-et-plus',
    color: 'yellow',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-sweatshirts', 'femme-2xl-et-plus']
  },
  {
    slug: '662-maroquinerie-femme-xl-yellow-very_good',
    name: 'Maroquinerie femme',
    description: 'Maroquinerie femme authentique Lacoste. Très bon état. toile enduite durable et confortable.',
    price: 138,
    originalPrice: 173,
    condition: 'very_good',
    size: 'xl',
    color: 'yellow',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-xl']
  },
  {
    slug: '663-sweatshirts-homme-l-pink-new',
    name: 'Sweatshirts homme',
    description: 'Magnifique Sweatshirts homme de la collection Lacoste. État neuf. Matière premium en jersey lourd.',
    price: 179,
    originalPrice: 256,
    condition: 'new',
    size: 'l',
    color: 'pink',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-sweatshirts', 'homme-l']
  },
  {
    slug: '664-pantalons-and-shorts-femme-l-green-very_good',
    name: 'Pantalons & Shorts femme',
    description: 'Pantalons & Shorts femme authentique Lacoste. Très bon état. gabardine durable et confortable.',
    price: 78,
    originalPrice: 98,
    condition: 'very_good',
    size: 'l',
    color: 'green',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-l']
  },
  {
    slug: '665-chemises-homme-s-pink-excellent',
    name: 'Chemises homme',
    description: 'Superbe Chemises homme en lin. Excellent état. Coupe ajustée et confortable.',
    price: 119,
    originalPrice: 170,
    condition: 'excellent',
    size: 's',
    color: 'pink',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-chemises', 'homme-s']
  },
  {
    slug: '666-polos-femme-xs-white-new',
    name: 'Polos femme',
    description: 'Superbe Polos femme en coton bio. État neuf. Coupe ajustée et confortable.',
    price: 148,
    originalPrice: 212,
    condition: 'new',
    size: 'xs',
    color: 'white',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-polos', 'femme-xs']
  },
  {
    slug: '667-robes-and-jupes-femme-2xl-et-plus-black-good',
    name: 'Robes & Jupes femme',
    description: 'Robes & Jupes femme authentique Lacoste. Bon état. jersey durable et confortable.',
    price: 50,
    originalPrice: 72,
    condition: 'good',
    size: '2xl-et-plus',
    color: 'black',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-2xl-et-plus']
  },
  {
    slug: '668-maroquinerie-homme-2xl-et-plus-red-good',
    name: 'Maroquinerie homme',
    description: 'Superbe Maroquinerie homme en cuir. Bon état. Coupe ajustée et confortable.',
    price: 22,
    originalPrice: 32,
    condition: 'good',
    size: '2xl-et-plus',
    color: 'red',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-maroquinerie', 'homme-2xl-et-plus']
  },
  {
    slug: '669-polos-femme-l-black-very_good',
    name: 'Polos femme',
    description: 'Polos femme élégant et intemporel. Très bon état. Fabriqué en coton bio de haute qualité.',
    price: 114,
    originalPrice: 142,
    condition: 'very_good',
    size: 'l',
    color: 'black',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-polos', 'femme-l']
  },
  {
    slug: '670-chemises-homme-s-red-very_good',
    name: 'Chemises homme',
    description: 'Chemises homme authentique Lacoste. Très bon état. oxford durable et confortable.',
    price: 199,
    originalPrice: 249,
    condition: 'very_good',
    size: 's',
    color: 'red',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-chemises', 'homme-s']
  },
  {
    slug: '671-pantalons-and-shorts-femme-xs-yellow-new',
    name: 'Pantalons & Shorts femme',
    description: 'Pantalons & Shorts femme authentique Lacoste. État neuf. toile de coton durable et confortable.',
    price: 102,
    originalPrice: 146,
    condition: 'new',
    size: 'xs',
    color: 'yellow',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-xs']
  },
  {
    slug: '672-maroquinerie-homme-xl-red-good',
    name: 'Maroquinerie homme',
    description: 'Magnifique Maroquinerie homme de la collection Lacoste. Bon état. Matière premium en toile enduite.',
    price: 198,
    originalPrice: 283,
    condition: 'good',
    size: 'xl',
    color: 'red',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-maroquinerie', 'homme-xl']
  },
  {
    slug: '673-tops-and-chemises-femme-s-beige-good',
    name: 'Tops & Chemises femme',
    description: 'Tops & Chemises femme authentique Lacoste. Bon état. popeline de coton durable et confortable.',
    price: 85,
    originalPrice: 121,
    condition: 'good',
    size: 's',
    color: 'beige',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-s']
  },
  {
    slug: '674-maroquinerie-femme-xs-white-very_good',
    name: 'Maroquinerie femme',
    description: 'Magnifique Maroquinerie femme de la collection Lacoste. Très bon état. Matière premium en nylon.',
    price: 238,
    originalPrice: 297,
    condition: 'very_good',
    size: 'xs',
    color: 'white',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-xs']
  },
  {
    slug: '675-pantalons-and-shorts-femme-s-grey-excellent',
    name: 'Pantalons & Shorts femme',
    description: 'Superbe Pantalons & Shorts femme en coton sergé. Excellent état. Coupe ajustée et confortable.',
    price: 39,
    originalPrice: 55,
    condition: 'excellent',
    size: 's',
    color: 'grey',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-s']
  },
  {
    slug: '676-pantalons-and-shorts-homme-l-grey-new',
    name: 'Pantalons & Shorts homme',
    description: 'Pantalons & Shorts homme authentique Lacoste. État neuf. toile de coton durable et confortable.',
    price: 69,
    originalPrice: 98,
    condition: 'new',
    size: 'l',
    color: 'grey',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-l']
  },
  {
    slug: '677-pantalons-and-shorts-homme-l-orange-good',
    name: 'Pantalons & Shorts homme',
    description: 'Pantalons & Shorts homme élégant et intemporel. Bon état. Fabriqué en coton sergé de haute qualité.',
    price: 126,
    originalPrice: 180,
    condition: 'good',
    size: 'l',
    color: 'orange',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-l']
  },
  {
    slug: '678-tops-and-chemises-femme-2xl-et-plus-pink-new',
    name: 'Tops & Chemises femme',
    description: 'Magnifique Tops & Chemises femme de la collection Lacoste. État neuf. Matière premium en viscose.',
    price: 156,
    originalPrice: 223,
    condition: 'new',
    size: '2xl-et-plus',
    color: 'pink',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-2xl-et-plus']
  },
  {
    slug: '679-polos-femme-l-white-good',
    name: 'Polos femme',
    description: 'Polos femme élégant et intemporel. Bon état. Fabriqué en coton bio de haute qualité.',
    price: 83,
    originalPrice: 119,
    condition: 'good',
    size: 'l',
    color: 'white',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-polos', 'femme-l']
  },
  {
    slug: '680-pantalons-and-shorts-femme-s-red-new',
    name: 'Pantalons & Shorts femme',
    description: 'Superbe Pantalons & Shorts femme en toile de coton. État neuf. Coupe ajustée et confortable.',
    price: 41,
    originalPrice: 59,
    condition: 'new',
    size: 's',
    color: 'red',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-s']
  },
  {
    slug: '681-t-shirts-homme-2xl-et-plus-green-very_good',
    name: 'T-shirts homme',
    description: 'Superbe T-shirts homme en coton organique. Très bon état. Coupe ajustée et confortable.',
    price: 119,
    originalPrice: 149,
    condition: 'very_good',
    size: '2xl-et-plus',
    color: 'green',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-t-shirts', 'homme-2xl-et-plus']
  },
  {
    slug: '682-sweatshirts-femme-l-beige-good',
    name: 'Sweatshirts femme',
    description: 'Sweatshirts femme élégant et intemporel. Bon état. Fabriqué en jersey lourd de haute qualité.',
    price: 117,
    originalPrice: 167,
    condition: 'good',
    size: 'l',
    color: 'beige',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-sweatshirts', 'femme-l']
  },
  {
    slug: '683-maroquinerie-homme-2xl-et-plus-pink-new',
    name: 'Maroquinerie homme',
    description: 'Magnifique Maroquinerie homme de la collection Lacoste. État neuf. Matière premium en nylon.',
    price: 38,
    originalPrice: 54,
    condition: 'new',
    size: '2xl-et-plus',
    color: 'pink',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-maroquinerie', 'homme-2xl-et-plus']
  },
  {
    slug: '684-pantalons-and-shorts-homme-2xl-et-plus-blue-very_good',
    name: 'Pantalons & Shorts homme',
    description:
      'Pantalons & Shorts homme élégant et intemporel. Très bon état. Fabriqué en gabardine de haute qualité.',
    price: 130,
    originalPrice: 163,
    condition: 'very_good',
    size: '2xl-et-plus',
    color: 'blue',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-2xl-et-plus']
  },
  {
    slug: '685-t-shirts-femme-xl-yellow-good',
    name: 'T-shirts femme',
    description: 'T-shirts femme élégant et intemporel. Bon état. Fabriqué en coton de haute qualité.',
    price: 209,
    originalPrice: 298,
    condition: 'good',
    size: 'xl',
    color: 'yellow',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-xl']
  },
  {
    slug: '686-manteaux-and-vestes-homme-m-green-excellent',
    name: 'Manteaux & Vestes homme',
    description: 'Superbe Manteaux & Vestes homme en polyester recyclé. Excellent état. Coupe ajustée et confortable.',
    price: 210,
    originalPrice: 300,
    condition: 'excellent',
    size: 'm',
    color: 'green',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-m']
  },
  {
    slug: '687-survetements-femme-xl-pink-very_good',
    name: 'Survêtements femme',
    description: 'Survêtements femme authentique Lacoste. Très bon état. coton molletonné durable et confortable.',
    price: 85,
    originalPrice: 106,
    condition: 'very_good',
    size: 'xl',
    color: 'pink',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-survetements', 'femme-xl']
  },
  {
    slug: '688-sweatshirts-homme-xs-red-excellent',
    name: 'Sweatshirts homme',
    description: 'Sweatshirts homme élégant et intemporel. Excellent état. Fabriqué en jersey lourd de haute qualité.',
    price: 42,
    originalPrice: 60,
    condition: 'excellent',
    size: 'xs',
    color: 'red',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-sweatshirts', 'homme-xs']
  },
  {
    slug: '689-pantalons-and-shorts-femme-l-green-new',
    name: 'Pantalons & Shorts femme',
    description:
      'Pantalons & Shorts femme élégant et intemporel. État neuf. Fabriqué en toile de coton de haute qualité.',
    price: 125,
    originalPrice: 178,
    condition: 'new',
    size: 'l',
    color: 'green',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-l']
  },
  {
    slug: '690-maroquinerie-homme-l-orange-good',
    name: 'Maroquinerie homme',
    description: 'Magnifique Maroquinerie homme de la collection Lacoste. Bon état. Matière premium en toile enduite.',
    price: 138,
    originalPrice: 197,
    condition: 'good',
    size: 'l',
    color: 'orange',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-maroquinerie', 'homme-l']
  },
  {
    slug: '691-polos-femme-s-yellow-good',
    name: 'Polos femme',
    description: 'Polos femme élégant et intemporel. Bon état. Fabriqué en coton bio de haute qualité.',
    price: 134,
    originalPrice: 191,
    condition: 'good',
    size: 's',
    color: 'yellow',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-polos', 'femme-s']
  },
  {
    slug: '692-pullovers-femme-m-orange-new',
    name: 'Pullovers femme',
    description: 'Pullovers femme authentique Lacoste. État neuf. cachemire durable et confortable.',
    price: 106,
    originalPrice: 151,
    condition: 'new',
    size: 'm',
    color: 'orange',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-pullovers', 'femme-m']
  },
  {
    slug: '693-robes-and-jupes-femme-s-beige-good',
    name: 'Robes & Jupes femme',
    description: 'Superbe Robes & Jupes femme en jersey. Bon état. Coupe ajustée et confortable.',
    price: 200,
    originalPrice: 286,
    condition: 'good',
    size: 's',
    color: 'beige',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-s']
  },
  {
    slug: '694-sweatshirts-femme-xl-orange-excellent',
    name: 'Sweatshirts femme',
    description:
      'Magnifique Sweatshirts femme de la collection Lacoste. Excellent état. Matière premium en jersey lourd.',
    price: 31,
    originalPrice: 44,
    condition: 'excellent',
    size: 'xl',
    color: 'orange',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-sweatshirts', 'femme-xl']
  },
  {
    slug: '695-polos-homme-s-yellow-very_good',
    name: 'Polos homme',
    description: 'Polos homme authentique Lacoste. Très bon état. coton bio durable et confortable.',
    price: 106,
    originalPrice: 133,
    condition: 'very_good',
    size: 's',
    color: 'yellow',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-polos', 'homme-s']
  },
  {
    slug: '696-tops-and-chemises-femme-2xl-et-plus-yellow-excellent',
    name: 'Tops & Chemises femme',
    description: 'Superbe Tops & Chemises femme en viscose. Excellent état. Coupe ajustée et confortable.',
    price: 189,
    originalPrice: 270,
    condition: 'excellent',
    size: '2xl-et-plus',
    color: 'yellow',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-2xl-et-plus']
  },
  {
    slug: '697-sweatshirts-femme-l-green-good',
    name: 'Sweatshirts femme',
    description: 'Superbe Sweatshirts femme en coton brossé. Bon état. Coupe ajustée et confortable.',
    price: 183,
    originalPrice: 261,
    condition: 'good',
    size: 'l',
    color: 'green',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-sweatshirts', 'femme-l']
  },
  {
    slug: '698-t-shirts-femme-xs-blue-excellent',
    name: 'T-shirts femme',
    description: 'Magnifique T-shirts femme de la collection Lacoste. Excellent état. Matière premium en jersey fin.',
    price: 83,
    originalPrice: 119,
    condition: 'excellent',
    size: 'xs',
    color: 'blue',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-xs']
  },
  {
    slug: '699-pantalons-and-shorts-homme-xl-yellow-good',
    name: 'Pantalons & Shorts homme',
    description: 'Pantalons & Shorts homme élégant et intemporel. Bon état. Fabriqué en gabardine de haute qualité.',
    price: 63,
    originalPrice: 90,
    condition: 'good',
    size: 'xl',
    color: 'yellow',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-xl']
  },
  {
    slug: '700-manteaux-and-vestes-homme-2xl-et-plus-yellow-new',
    name: 'Manteaux & Vestes homme',
    description: 'Manteaux & Vestes homme élégant et intemporel. État neuf. Fabriqué en laine de haute qualité.',
    price: 148,
    originalPrice: 211,
    condition: 'new',
    size: '2xl-et-plus',
    color: 'yellow',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-2xl-et-plus']
  },
  {
    slug: '701-sweatshirts-femme-xl-red-good',
    name: 'Sweatshirts femme',
    description: 'Magnifique Sweatshirts femme de la collection Lacoste. Bon état. Matière premium en jersey lourd.',
    price: 116,
    originalPrice: 166,
    condition: 'good',
    size: 'xl',
    color: 'red',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-sweatshirts', 'femme-xl']
  },
  {
    slug: '702-pullovers-homme-m-yellow-good',
    name: 'Pullovers homme',
    description: 'Superbe Pullovers homme en cachemire. Bon état. Coupe ajustée et confortable.',
    price: 139,
    originalPrice: 198,
    condition: 'good',
    size: 'm',
    color: 'yellow',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-pullovers', 'homme-m']
  },
  {
    slug: '703-polos-femme-l-green-excellent',
    name: 'Polos femme',
    description: 'Magnifique Polos femme de la collection Lacoste. Excellent état. Matière premium en coton bio.',
    price: 88,
    originalPrice: 126,
    condition: 'excellent',
    size: 'l',
    color: 'green',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-polos', 'femme-l']
  },
  {
    slug: '704-sweatshirts-femme-l-black-good',
    name: 'Sweatshirts femme',
    description: 'Magnifique Sweatshirts femme de la collection Lacoste. Bon état. Matière premium en molleton.',
    price: 184,
    originalPrice: 263,
    condition: 'good',
    size: 'l',
    color: 'black',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-sweatshirts', 'femme-l']
  },
  {
    slug: '705-pullovers-homme-2xl-et-plus-blue-excellent',
    name: 'Pullovers homme',
    description: 'Pullovers homme authentique Lacoste. Excellent état. cachemire durable et confortable.',
    price: 160,
    originalPrice: 228,
    condition: 'excellent',
    size: '2xl-et-plus',
    color: 'blue',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-pullovers', 'homme-2xl-et-plus']
  },
  {
    slug: '706-maroquinerie-homme-s-brown-very_good',
    name: 'Maroquinerie homme',
    description: 'Magnifique Maroquinerie homme de la collection Lacoste. Très bon état. Matière premium en cuir.',
    price: 162,
    originalPrice: 203,
    condition: 'very_good',
    size: 's',
    color: 'brown',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-maroquinerie', 'homme-s']
  },
  {
    slug: '707-pantalons-and-shorts-femme-xl-blue-very_good',
    name: 'Pantalons & Shorts femme',
    description:
      'Magnifique Pantalons & Shorts femme de la collection Lacoste. Très bon état. Matière premium en toile de coton.',
    price: 46,
    originalPrice: 58,
    condition: 'very_good',
    size: 'xl',
    color: 'blue',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-xl']
  },
  {
    slug: '708-pantalons-and-shorts-femme-m-yellow-excellent',
    name: 'Pantalons & Shorts femme',
    description: 'Superbe Pantalons & Shorts femme en coton sergé. Excellent état. Coupe ajustée et confortable.',
    price: 43,
    originalPrice: 62,
    condition: 'excellent',
    size: 'm',
    color: 'yellow',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-m']
  },
  {
    slug: '709-chemises-homme-m-beige-good',
    name: 'Chemises homme',
    description: 'Chemises homme élégant et intemporel. Bon état. Fabriqué en oxford de haute qualité.',
    price: 118,
    originalPrice: 169,
    condition: 'good',
    size: 'm',
    color: 'beige',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-chemises', 'homme-m']
  },
  {
    slug: '710-pullovers-homme-xs-brown-new',
    name: 'Pullovers homme',
    description: 'Magnifique Pullovers homme de la collection Lacoste. État neuf. Matière premium en laine mérinos.',
    price: 104,
    originalPrice: 149,
    condition: 'new',
    size: 'xs',
    color: 'brown',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-pullovers', 'homme-xs']
  },
  {
    slug: '711-pantalons-and-shorts-femme-m-yellow-good',
    name: 'Pantalons & Shorts femme',
    description:
      'Magnifique Pantalons & Shorts femme de la collection Lacoste. Bon état. Matière premium en toile de coton.',
    price: 197,
    originalPrice: 282,
    condition: 'good',
    size: 'm',
    color: 'yellow',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-m']
  },
  {
    slug: '712-survetements-femme-m-beige-excellent',
    name: 'Survêtements femme',
    description: 'Survêtements femme authentique Lacoste. Excellent état. polyester technique durable et confortable.',
    price: 153,
    originalPrice: 219,
    condition: 'excellent',
    size: 'm',
    color: 'beige',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-survetements', 'femme-m']
  },
  {
    slug: '713-survetements-femme-xl-orange-good',
    name: 'Survêtements femme',
    description: 'Superbe Survêtements femme en coton molletonné. Bon état. Coupe ajustée et confortable.',
    price: 117,
    originalPrice: 167,
    condition: 'good',
    size: 'xl',
    color: 'orange',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-survetements', 'femme-xl']
  },
  {
    slug: '714-robes-and-jupes-femme-xl-pink-new',
    name: 'Robes & Jupes femme',
    description: 'Robes & Jupes femme élégant et intemporel. État neuf. Fabriqué en jersey de haute qualité.',
    price: 126,
    originalPrice: 180,
    condition: 'new',
    size: 'xl',
    color: 'pink',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-xl']
  },
  {
    slug: '715-tops-and-chemises-femme-xs-blue-good',
    name: 'Tops & Chemises femme',
    description:
      'Magnifique Tops & Chemises femme de la collection Lacoste. Bon état. Matière premium en popeline de coton.',
    price: 178,
    originalPrice: 254,
    condition: 'good',
    size: 'xs',
    color: 'blue',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-xs']
  },
  {
    slug: '716-pantalons-and-shorts-femme-s-orange-good',
    name: 'Pantalons & Shorts femme',
    description: 'Pantalons & Shorts femme authentique Lacoste. Bon état. toile de coton durable et confortable.',
    price: 139,
    originalPrice: 199,
    condition: 'good',
    size: 's',
    color: 'orange',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-s']
  },
  {
    slug: '717-manteaux-and-vestes-homme-2xl-et-plus-yellow-very_good',
    name: 'Manteaux & Vestes homme',
    description: 'Superbe Manteaux & Vestes homme en coton imperméable. Très bon état. Coupe ajustée et confortable.',
    price: 126,
    originalPrice: 158,
    condition: 'very_good',
    size: '2xl-et-plus',
    color: 'yellow',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-2xl-et-plus']
  },
  {
    slug: '718-t-shirts-homme-l-white-very_good',
    name: 'T-shirts homme',
    description: 'T-shirts homme élégant et intemporel. Très bon état. Fabriqué en coton organique de haute qualité.',
    price: 157,
    originalPrice: 196,
    condition: 'very_good',
    size: 'l',
    color: 'white',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-t-shirts', 'homme-l']
  },
  {
    slug: '719-pullovers-homme-2xl-et-plus-pink-excellent',
    name: 'Pullovers homme',
    description: 'Magnifique Pullovers homme de la collection Lacoste. Excellent état. Matière premium en cachemire.',
    price: 54,
    originalPrice: 77,
    condition: 'excellent',
    size: '2xl-et-plus',
    color: 'pink',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-pullovers', 'homme-2xl-et-plus']
  },
  {
    slug: '720-polos-femme-xl-black-very_good',
    name: 'Polos femme',
    description: 'Polos femme élégant et intemporel. Très bon état. Fabriqué en coton bio de haute qualité.',
    price: 153,
    originalPrice: 191,
    condition: 'very_good',
    size: 'xl',
    color: 'black',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-polos', 'femme-xl']
  },
  {
    slug: '721-pantalons-and-shorts-homme-m-orange-excellent',
    name: 'Pantalons & Shorts homme',
    description:
      'Pantalons & Shorts homme élégant et intemporel. Excellent état. Fabriqué en gabardine de haute qualité.',
    price: 57,
    originalPrice: 82,
    condition: 'excellent',
    size: 'm',
    color: 'orange',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-m']
  },
  {
    slug: '722-maroquinerie-homme-2xl-et-plus-purple-new',
    name: 'Maroquinerie homme',
    description: 'Magnifique Maroquinerie homme de la collection Lacoste. État neuf. Matière premium en toile enduite.',
    price: 21,
    originalPrice: 30,
    condition: 'new',
    size: '2xl-et-plus',
    color: 'purple',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-maroquinerie', 'homme-2xl-et-plus']
  },
  {
    slug: '723-sweatshirts-homme-xl-yellow-new',
    name: 'Sweatshirts homme',
    description: 'Sweatshirts homme authentique Lacoste. État neuf. molleton durable et confortable.',
    price: 46,
    originalPrice: 65,
    condition: 'new',
    size: 'xl',
    color: 'yellow',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-sweatshirts', 'homme-xl']
  },
  {
    slug: '724-maroquinerie-homme-m-blue-new',
    name: 'Maroquinerie homme',
    description: 'Superbe Maroquinerie homme en cuir. État neuf. Coupe ajustée et confortable.',
    price: 94,
    originalPrice: 134,
    condition: 'new',
    size: 'm',
    color: 'blue',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-maroquinerie', 'homme-m']
  },
  {
    slug: '725-pullovers-homme-xs-green-good',
    name: 'Pullovers homme',
    description: 'Pullovers homme élégant et intemporel. Bon état. Fabriqué en cachemire de haute qualité.',
    price: 40,
    originalPrice: 57,
    condition: 'good',
    size: 'xs',
    color: 'green',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-pullovers', 'homme-xs']
  },
  {
    slug: '726-manteaux-and-vestes-homme-xs-yellow-new',
    name: 'Manteaux & Vestes homme',
    description: 'Manteaux & Vestes homme authentique Lacoste. État neuf. polyester recyclé durable et confortable.',
    price: 116,
    originalPrice: 166,
    condition: 'new',
    size: 'xs',
    color: 'yellow',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-xs']
  },
  {
    slug: '727-pantalons-and-shorts-femme-2xl-et-plus-white-very_good',
    name: 'Pantalons & Shorts femme',
    description: 'Pantalons & Shorts femme authentique Lacoste. Très bon état. gabardine durable et confortable.',
    price: 166,
    originalPrice: 208,
    condition: 'very_good',
    size: '2xl-et-plus',
    color: 'white',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-2xl-et-plus']
  },
  {
    slug: '728-chemises-homme-xs-orange-new',
    name: 'Chemises homme',
    description: 'Chemises homme authentique Lacoste. État neuf. oxford durable et confortable.',
    price: 67,
    originalPrice: 95,
    condition: 'new',
    size: 'xs',
    color: 'orange',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-chemises', 'homme-xs']
  },
  {
    slug: '729-sweatshirts-homme-m-brown-new',
    name: 'Sweatshirts homme',
    description: 'Sweatshirts homme élégant et intemporel. État neuf. Fabriqué en molleton de haute qualité.',
    price: 34,
    originalPrice: 49,
    condition: 'new',
    size: 'm',
    color: 'brown',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-sweatshirts', 'homme-m']
  },
  {
    slug: '730-manteaux-and-vestes-femme-m-pink-new',
    name: 'Manteaux & Vestes femme',
    description: 'Superbe Manteaux & Vestes femme en coton imperméable. État neuf. Coupe ajustée et confortable.',
    price: 165,
    originalPrice: 235,
    condition: 'new',
    size: 'm',
    color: 'pink',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-m']
  },
  {
    slug: '731-polos-homme-2xl-et-plus-pink-new',
    name: 'Polos homme',
    description: 'Polos homme authentique Lacoste. État neuf. coton bio durable et confortable.',
    price: 160,
    originalPrice: 228,
    condition: 'new',
    size: '2xl-et-plus',
    color: 'pink',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-polos', 'homme-2xl-et-plus']
  },
  {
    slug: '732-chemises-homme-s-brown-good',
    name: 'Chemises homme',
    description: 'Chemises homme élégant et intemporel. Bon état. Fabriqué en popeline de haute qualité.',
    price: 151,
    originalPrice: 215,
    condition: 'good',
    size: 's',
    color: 'brown',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-chemises', 'homme-s']
  },
  {
    slug: '733-survetements-homme-l-yellow-good',
    name: 'Survêtements homme',
    description: 'Superbe Survêtements homme en polyester technique. Bon état. Coupe ajustée et confortable.',
    price: 104,
    originalPrice: 149,
    condition: 'good',
    size: 'l',
    color: 'yellow',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-survetements', 'homme-l']
  },
  {
    slug: '734-survetements-femme-m-red-new',
    name: 'Survêtements femme',
    description: 'Superbe Survêtements femme en polyester technique. État neuf. Coupe ajustée et confortable.',
    price: 109,
    originalPrice: 156,
    condition: 'new',
    size: 'm',
    color: 'red',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-survetements', 'femme-m']
  },
  {
    slug: '735-pantalons-and-shorts-homme-xs-black-good',
    name: 'Pantalons & Shorts homme',
    description: 'Pantalons & Shorts homme authentique Lacoste. Bon état. toile de coton durable et confortable.',
    price: 106,
    originalPrice: 151,
    condition: 'good',
    size: 'xs',
    color: 'black',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-xs']
  },
  {
    slug: '736-maroquinerie-homme-xs-grey-good',
    name: 'Maroquinerie homme',
    description: 'Superbe Maroquinerie homme en nylon. Bon état. Coupe ajustée et confortable.',
    price: 199,
    originalPrice: 284,
    condition: 'good',
    size: 'xs',
    color: 'grey',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-maroquinerie', 'homme-xs']
  },
  {
    slug: '737-pantalons-and-shorts-homme-2xl-et-plus-brown-new',
    name: 'Pantalons & Shorts homme',
    description:
      'Magnifique Pantalons & Shorts homme de la collection Lacoste. État neuf. Matière premium en coton sergé.',
    price: 136,
    originalPrice: 194,
    condition: 'new',
    size: '2xl-et-plus',
    color: 'brown',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-2xl-et-plus']
  },
  {
    slug: '738-survetements-homme-xl-yellow-new',
    name: 'Survêtements homme',
    description: 'Survêtements homme authentique Lacoste. État neuf. matière stretch durable et confortable.',
    price: 181,
    originalPrice: 258,
    condition: 'new',
    size: 'xl',
    color: 'yellow',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-survetements', 'homme-xl']
  },
  {
    slug: '739-tops-and-chemises-femme-s-red-very_good',
    name: 'Tops & Chemises femme',
    description: 'Superbe Tops & Chemises femme en popeline de coton. Très bon état. Coupe ajustée et confortable.',
    price: 180,
    originalPrice: 225,
    condition: 'very_good',
    size: 's',
    color: 'red',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-s']
  },
  {
    slug: '740-polos-femme-xl-brown-very_good',
    name: 'Polos femme',
    description: 'Magnifique Polos femme de la collection Lacoste. Très bon état. Matière premium en coton piqué.',
    price: 128,
    originalPrice: 160,
    condition: 'very_good',
    size: 'xl',
    color: 'brown',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-polos', 'femme-xl']
  },
  {
    slug: '741-manteaux-and-vestes-homme-xl-black-very_good',
    name: 'Manteaux & Vestes homme',
    description: 'Superbe Manteaux & Vestes homme en coton imperméable. Très bon état. Coupe ajustée et confortable.',
    price: 55,
    originalPrice: 69,
    condition: 'very_good',
    size: 'xl',
    color: 'black',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-xl']
  },
  {
    slug: '742-manteaux-and-vestes-homme-xs-beige-very_good',
    name: 'Manteaux & Vestes homme',
    description: 'Superbe Manteaux & Vestes homme en polyester recyclé. Très bon état. Coupe ajustée et confortable.',
    price: 145,
    originalPrice: 181,
    condition: 'very_good',
    size: 'xs',
    color: 'beige',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-xs']
  },
  {
    slug: '743-chemises-femme-l-purple-very_good',
    name: 'Chemises femme',
    description: 'Chemises femme authentique Lacoste. Très bon état. popeline durable et confortable.',
    price: 86,
    originalPrice: 107,
    condition: 'very_good',
    size: 'l',
    color: 'purple',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-l']
  },
  {
    slug: '744-pullovers-femme-m-brown-new',
    name: 'Pullovers femme',
    description: 'Magnifique Pullovers femme de la collection Lacoste. État neuf. Matière premium en laine mérinos.',
    price: 107,
    originalPrice: 153,
    condition: 'new',
    size: 'm',
    color: 'brown',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-pullovers', 'femme-m']
  },
  {
    slug: '745-polos-homme-2xl-et-plus-red-new',
    name: 'Polos homme',
    description: 'Polos homme élégant et intemporel. État neuf. Fabriqué en jersey de coton de haute qualité.',
    price: 209,
    originalPrice: 299,
    condition: 'new',
    size: '2xl-et-plus',
    color: 'red',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-polos', 'homme-2xl-et-plus']
  },
  {
    slug: '746-tops-and-chemises-femme-xl-beige-good',
    name: 'Tops & Chemises femme',
    description: 'Superbe Tops & Chemises femme en soie. Bon état. Coupe ajustée et confortable.',
    price: 25,
    originalPrice: 35,
    condition: 'good',
    size: 'xl',
    color: 'beige',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-xl']
  },
  {
    slug: '747-pullovers-homme-2xl-et-plus-green-new',
    name: 'Pullovers homme',
    description: 'Pullovers homme authentique Lacoste. État neuf. cachemire durable et confortable.',
    price: 30,
    originalPrice: 43,
    condition: 'new',
    size: '2xl-et-plus',
    color: 'green',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-pullovers', 'homme-2xl-et-plus']
  },
  {
    slug: '748-maroquinerie-femme-s-blue-very_good',
    name: 'Maroquinerie femme',
    description: 'Superbe Maroquinerie femme en nylon. Très bon état. Coupe ajustée et confortable.',
    price: 105,
    originalPrice: 131,
    condition: 'very_good',
    size: 's',
    color: 'blue',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-s']
  },
  {
    slug: '749-chemises-homme-s-pink-excellent',
    name: 'Chemises homme',
    description: 'Chemises homme authentique Lacoste. Excellent état. popeline durable et confortable.',
    price: 152,
    originalPrice: 217,
    condition: 'excellent',
    size: 's',
    color: 'pink',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-chemises', 'homme-s']
  },
  {
    slug: '750-t-shirts-femme-s-brown-very_good',
    name: 'T-shirts femme',
    description: 'Superbe T-shirts femme en coton organique. Très bon état. Coupe ajustée et confortable.',
    price: 179,
    originalPrice: 224,
    condition: 'very_good',
    size: 's',
    color: 'brown',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-s']
  },
  {
    slug: '751-sweatshirts-homme-s-green-good',
    name: 'Sweatshirts homme',
    description: 'Sweatshirts homme élégant et intemporel. Bon état. Fabriqué en coton brossé de haute qualité.',
    price: 141,
    originalPrice: 202,
    condition: 'good',
    size: 's',
    color: 'green',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-sweatshirts', 'homme-s']
  },
  {
    slug: '752-sweatshirts-femme-2xl-et-plus-beige-new',
    name: 'Sweatshirts femme',
    description: 'Magnifique Sweatshirts femme de la collection Lacoste. État neuf. Matière premium en molleton.',
    price: 112,
    originalPrice: 160,
    condition: 'new',
    size: '2xl-et-plus',
    color: 'beige',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-sweatshirts', 'femme-2xl-et-plus']
  },
  {
    slug: '753-t-shirts-femme-xl-brown-excellent',
    name: 'T-shirts femme',
    description:
      'Magnifique T-shirts femme de la collection Lacoste. Excellent état. Matière premium en coton organique.',
    price: 112,
    originalPrice: 160,
    condition: 'excellent',
    size: 'xl',
    color: 'brown',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-xl']
  },
  {
    slug: '754-pullovers-femme-xs-green-new',
    name: 'Pullovers femme',
    description: 'Superbe Pullovers femme en coton tricoté. État neuf. Coupe ajustée et confortable.',
    price: 190,
    originalPrice: 271,
    condition: 'new',
    size: 'xs',
    color: 'green',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-pullovers', 'femme-xs']
  },
  {
    slug: '755-chemises-homme-m-red-excellent',
    name: 'Chemises homme',
    description: 'Superbe Chemises homme en popeline. Excellent état. Coupe ajustée et confortable.',
    price: 70,
    originalPrice: 100,
    condition: 'excellent',
    size: 'm',
    color: 'red',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-chemises', 'homme-m']
  },
  {
    slug: '756-polos-homme-l-pink-new',
    name: 'Polos homme',
    description: 'Polos homme authentique Lacoste. État neuf. jersey de coton durable et confortable.',
    price: 46,
    originalPrice: 66,
    condition: 'new',
    size: 'l',
    color: 'pink',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-polos', 'homme-l']
  },
  {
    slug: '757-tops-and-chemises-femme-xs-grey-new',
    name: 'Tops & Chemises femme',
    description: 'Superbe Tops & Chemises femme en soie. État neuf. Coupe ajustée et confortable.',
    price: 65,
    originalPrice: 93,
    condition: 'new',
    size: 'xs',
    color: 'grey',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-xs']
  },
  {
    slug: '758-survetements-femme-l-yellow-very_good',
    name: 'Survêtements femme',
    description: 'Survêtements femme authentique Lacoste. Très bon état. matière stretch durable et confortable.',
    price: 221,
    originalPrice: 276,
    condition: 'very_good',
    size: 'l',
    color: 'yellow',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-survetements', 'femme-l']
  },
  {
    slug: '759-maroquinerie-homme-xl-orange-good',
    name: 'Maroquinerie homme',
    description: 'Maroquinerie homme élégant et intemporel. Bon état. Fabriqué en nylon de haute qualité.',
    price: 111,
    originalPrice: 158,
    condition: 'good',
    size: 'xl',
    color: 'orange',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-maroquinerie', 'homme-xl']
  },
  {
    slug: '760-chemises-homme-l-purple-good',
    name: 'Chemises homme',
    description: 'Magnifique Chemises homme de la collection Lacoste. Bon état. Matière premium en lin.',
    price: 194,
    originalPrice: 277,
    condition: 'good',
    size: 'l',
    color: 'purple',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-chemises', 'homme-l']
  },
  {
    slug: '761-survetements-femme-xs-brown-excellent',
    name: 'Survêtements femme',
    description: 'Superbe Survêtements femme en coton molletonné. Excellent état. Coupe ajustée et confortable.',
    price: 88,
    originalPrice: 125,
    condition: 'excellent',
    size: 'xs',
    color: 'brown',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-survetements', 'femme-xs']
  },
  {
    slug: '762-pullovers-femme-xl-pink-good',
    name: 'Pullovers femme',
    description: 'Pullovers femme élégant et intemporel. Bon état. Fabriqué en coton tricoté de haute qualité.',
    price: 202,
    originalPrice: 288,
    condition: 'good',
    size: 'xl',
    color: 'pink',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-pullovers', 'femme-xl']
  },
  {
    slug: '763-maroquinerie-homme-2xl-et-plus-red-good',
    name: 'Maroquinerie homme',
    description: 'Maroquinerie homme authentique Lacoste. Bon état. toile enduite durable et confortable.',
    price: 183,
    originalPrice: 261,
    condition: 'good',
    size: '2xl-et-plus',
    color: 'red',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-maroquinerie', 'homme-2xl-et-plus']
  },
  {
    slug: '764-chemises-homme-xs-purple-very_good',
    name: 'Chemises homme',
    description: 'Magnifique Chemises homme de la collection Lacoste. Très bon état. Matière premium en lin.',
    price: 225,
    originalPrice: 281,
    condition: 'very_good',
    size: 'xs',
    color: 'purple',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-chemises', 'homme-xs']
  },
  {
    slug: '765-sweatshirts-homme-xs-black-excellent',
    name: 'Sweatshirts homme',
    description: 'Sweatshirts homme élégant et intemporel. Excellent état. Fabriqué en molleton de haute qualité.',
    price: 88,
    originalPrice: 125,
    condition: 'excellent',
    size: 'xs',
    color: 'black',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-sweatshirts', 'homme-xs']
  },
  {
    slug: '766-chemises-femme-2xl-et-plus-white-excellent',
    name: 'Chemises femme',
    description: 'Chemises femme élégant et intemporel. Excellent état. Fabriqué en oxford de haute qualité.',
    price: 35,
    originalPrice: 50,
    condition: 'excellent',
    size: '2xl-et-plus',
    color: 'white',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-2xl-et-plus']
  },
  {
    slug: '767-chemises-femme-m-white-good',
    name: 'Chemises femme',
    description: 'Superbe Chemises femme en popeline. Bon état. Coupe ajustée et confortable.',
    price: 156,
    originalPrice: 223,
    condition: 'good',
    size: 'm',
    color: 'white',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-m']
  },
  {
    slug: '768-manteaux-and-vestes-homme-m-white-very_good',
    name: 'Manteaux & Vestes homme',
    description:
      'Manteaux & Vestes homme élégant et intemporel. Très bon état. Fabriqué en polyester recyclé de haute qualité.',
    price: 130,
    originalPrice: 163,
    condition: 'very_good',
    size: 'm',
    color: 'white',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-m']
  },
  {
    slug: '769-pullovers-femme-2xl-et-plus-blue-new',
    name: 'Pullovers femme',
    description: 'Pullovers femme authentique Lacoste. État neuf. coton tricoté durable et confortable.',
    price: 114,
    originalPrice: 163,
    condition: 'new',
    size: '2xl-et-plus',
    color: 'blue',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-pullovers', 'femme-2xl-et-plus']
  },
  {
    slug: '770-t-shirts-homme-xs-white-new',
    name: 'T-shirts homme',
    description: 'T-shirts homme élégant et intemporel. État neuf. Fabriqué en coton organique de haute qualité.',
    price: 130,
    originalPrice: 185,
    condition: 'new',
    size: 'xs',
    color: 'white',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-t-shirts', 'homme-xs']
  },
  {
    slug: '771-survetements-femme-l-green-very_good',
    name: 'Survêtements femme',
    description:
      'Survêtements femme élégant et intemporel. Très bon état. Fabriqué en polyester technique de haute qualité.',
    price: 123,
    originalPrice: 154,
    condition: 'very_good',
    size: 'l',
    color: 'green',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-survetements', 'femme-l']
  },
  {
    slug: '772-manteaux-and-vestes-femme-xs-blue-good',
    name: 'Manteaux & Vestes femme',
    description:
      'Magnifique Manteaux & Vestes femme de la collection Lacoste. Bon état. Matière premium en polyester recyclé.',
    price: 106,
    originalPrice: 152,
    condition: 'good',
    size: 'xs',
    color: 'blue',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-xs']
  },
  {
    slug: '773-pantalons-and-shorts-homme-l-grey-good',
    name: 'Pantalons & Shorts homme',
    description: 'Pantalons & Shorts homme authentique Lacoste. Bon état. toile de coton durable et confortable.',
    price: 90,
    originalPrice: 129,
    condition: 'good',
    size: 'l',
    color: 'grey',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-l']
  },
  {
    slug: '774-survetements-homme-l-grey-new',
    name: 'Survêtements homme',
    description: 'Superbe Survêtements homme en polyester technique. État neuf. Coupe ajustée et confortable.',
    price: 56,
    originalPrice: 80,
    condition: 'new',
    size: 'l',
    color: 'grey',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-survetements', 'homme-l']
  },
  {
    slug: '775-pantalons-and-shorts-homme-l-black-very_good',
    name: 'Pantalons & Shorts homme',
    description: 'Superbe Pantalons & Shorts homme en coton sergé. Très bon état. Coupe ajustée et confortable.',
    price: 62,
    originalPrice: 78,
    condition: 'very_good',
    size: 'l',
    color: 'black',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-l']
  },
  {
    slug: '776-pantalons-and-shorts-femme-m-brown-excellent',
    name: 'Pantalons & Shorts femme',
    description:
      'Magnifique Pantalons & Shorts femme de la collection Lacoste. Excellent état. Matière premium en gabardine.',
    price: 148,
    originalPrice: 211,
    condition: 'excellent',
    size: 'm',
    color: 'brown',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-m']
  },
  {
    slug: '777-survetements-homme-xl-green-new',
    name: 'Survêtements homme',
    description: 'Superbe Survêtements homme en coton molletonné. État neuf. Coupe ajustée et confortable.',
    price: 142,
    originalPrice: 203,
    condition: 'new',
    size: 'xl',
    color: 'green',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-survetements', 'homme-xl']
  },
  {
    slug: '778-chemises-homme-xl-green-good',
    name: 'Chemises homme',
    description: 'Superbe Chemises homme en lin. Bon état. Coupe ajustée et confortable.',
    price: 95,
    originalPrice: 135,
    condition: 'good',
    size: 'xl',
    color: 'green',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-chemises', 'homme-xl']
  },
  {
    slug: '779-manteaux-and-vestes-homme-2xl-et-plus-beige-excellent',
    name: 'Manteaux & Vestes homme',
    description: 'Manteaux & Vestes homme élégant et intemporel. Excellent état. Fabriqué en laine de haute qualité.',
    price: 131,
    originalPrice: 187,
    condition: 'excellent',
    size: '2xl-et-plus',
    color: 'beige',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-2xl-et-plus']
  },
  {
    slug: '780-manteaux-and-vestes-homme-m-white-new',
    name: 'Manteaux & Vestes homme',
    description: 'Superbe Manteaux & Vestes homme en coton imperméable. État neuf. Coupe ajustée et confortable.',
    price: 148,
    originalPrice: 212,
    condition: 'new',
    size: 'm',
    color: 'white',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-m']
  },
  {
    slug: '781-pullovers-homme-xl-beige-good',
    name: 'Pullovers homme',
    description: 'Pullovers homme authentique Lacoste. Bon état. laine mérinos durable et confortable.',
    price: 69,
    originalPrice: 98,
    condition: 'good',
    size: 'xl',
    color: 'beige',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-pullovers', 'homme-xl']
  },
  {
    slug: '782-t-shirts-homme-m-pink-good',
    name: 'T-shirts homme',
    description: 'Magnifique T-shirts homme de la collection Lacoste. Bon état. Matière premium en jersey fin.',
    price: 107,
    originalPrice: 153,
    condition: 'good',
    size: 'm',
    color: 'pink',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-t-shirts', 'homme-m']
  },
  {
    slug: '783-sweatshirts-femme-xl-white-very_good',
    name: 'Sweatshirts femme',
    description: 'Sweatshirts femme authentique Lacoste. Très bon état. coton brossé durable et confortable.',
    price: 159,
    originalPrice: 199,
    condition: 'very_good',
    size: 'xl',
    color: 'white',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-sweatshirts', 'femme-xl']
  },
  {
    slug: '784-t-shirts-homme-m-black-very_good',
    name: 'T-shirts homme',
    description: 'Magnifique T-shirts homme de la collection Lacoste. Très bon état. Matière premium en coton.',
    price: 142,
    originalPrice: 177,
    condition: 'very_good',
    size: 'm',
    color: 'black',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-t-shirts', 'homme-m']
  },
  {
    slug: '785-polos-homme-s-yellow-good',
    name: 'Polos homme',
    description: 'Superbe Polos homme en coton piqué. Bon état. Coupe ajustée et confortable.',
    price: 204,
    originalPrice: 292,
    condition: 'good',
    size: 's',
    color: 'yellow',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-polos', 'homme-s']
  },
  {
    slug: '786-pullovers-homme-2xl-et-plus-red-excellent',
    name: 'Pullovers homme',
    description: 'Pullovers homme élégant et intemporel. Excellent état. Fabriqué en cachemire de haute qualité.',
    price: 78,
    originalPrice: 111,
    condition: 'excellent',
    size: '2xl-et-plus',
    color: 'red',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-pullovers', 'homme-2xl-et-plus']
  },
  {
    slug: '787-survetements-homme-xs-pink-good',
    name: 'Survêtements homme',
    description: 'Survêtements homme élégant et intemporel. Bon état. Fabriqué en matière stretch de haute qualité.',
    price: 149,
    originalPrice: 213,
    condition: 'good',
    size: 'xs',
    color: 'pink',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-survetements', 'homme-xs']
  },
  {
    slug: '788-t-shirts-femme-xs-beige-very_good',
    name: 'T-shirts femme',
    description: 'Magnifique T-shirts femme de la collection Lacoste. Très bon état. Matière premium en coton.',
    price: 231,
    originalPrice: 289,
    condition: 'very_good',
    size: 'xs',
    color: 'beige',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-xs']
  },
  {
    slug: '789-maroquinerie-femme-s-black-very_good',
    name: 'Maroquinerie femme',
    description: 'Maroquinerie femme élégant et intemporel. Très bon état. Fabriqué en cuir de haute qualité.',
    price: 30,
    originalPrice: 38,
    condition: 'very_good',
    size: 's',
    color: 'black',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-s']
  },
  {
    slug: '790-pullovers-homme-xl-blue-good',
    name: 'Pullovers homme',
    description: 'Pullovers homme élégant et intemporel. Bon état. Fabriqué en cachemire de haute qualité.',
    price: 119,
    originalPrice: 170,
    condition: 'good',
    size: 'xl',
    color: 'blue',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-pullovers', 'homme-xl']
  },
  {
    slug: '791-survetements-homme-m-green-good',
    name: 'Survêtements homme',
    description: 'Superbe Survêtements homme en polyester technique. Bon état. Coupe ajustée et confortable.',
    price: 90,
    originalPrice: 129,
    condition: 'good',
    size: 'm',
    color: 'green',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-survetements', 'homme-m']
  },
  {
    slug: '792-robes-and-jupes-femme-xs-white-new',
    name: 'Robes & Jupes femme',
    description: 'Robes & Jupes femme authentique Lacoste. État neuf. jersey durable et confortable.',
    price: 100,
    originalPrice: 143,
    condition: 'new',
    size: 'xs',
    color: 'white',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-xs']
  },
  {
    slug: '793-t-shirts-femme-s-orange-excellent',
    name: 'T-shirts femme',
    description: 'Superbe T-shirts femme en coton organique. Excellent état. Coupe ajustée et confortable.',
    price: 23,
    originalPrice: 33,
    condition: 'excellent',
    size: 's',
    color: 'orange',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-s']
  },
  {
    slug: '794-pullovers-femme-xl-grey-excellent',
    name: 'Pullovers femme',
    description: 'Pullovers femme authentique Lacoste. Excellent état. laine mérinos durable et confortable.',
    price: 190,
    originalPrice: 271,
    condition: 'excellent',
    size: 'xl',
    color: 'grey',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-pullovers', 'femme-xl']
  },
  {
    slug: '795-survetements-homme-m-orange-new',
    name: 'Survêtements homme',
    description:
      'Magnifique Survêtements homme de la collection Lacoste. État neuf. Matière premium en polyester technique.',
    price: 118,
    originalPrice: 169,
    condition: 'new',
    size: 'm',
    color: 'orange',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-survetements', 'homme-m']
  },
  {
    slug: '796-survetements-homme-s-black-very_good',
    name: 'Survêtements homme',
    description:
      'Survêtements homme élégant et intemporel. Très bon état. Fabriqué en matière stretch de haute qualité.',
    price: 174,
    originalPrice: 218,
    condition: 'very_good',
    size: 's',
    color: 'black',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-survetements', 'homme-s']
  },
  {
    slug: '797-pantalons-and-shorts-femme-xl-red-new',
    name: 'Pantalons & Shorts femme',
    description: 'Superbe Pantalons & Shorts femme en toile de coton. État neuf. Coupe ajustée et confortable.',
    price: 93,
    originalPrice: 133,
    condition: 'new',
    size: 'xl',
    color: 'red',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-xl']
  },
  {
    slug: '798-sweatshirts-femme-m-orange-new',
    name: 'Sweatshirts femme',
    description: 'Sweatshirts femme authentique Lacoste. État neuf. jersey lourd durable et confortable.',
    price: 34,
    originalPrice: 48,
    condition: 'new',
    size: 'm',
    color: 'orange',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-sweatshirts', 'femme-m']
  },
  {
    slug: '799-maroquinerie-homme-xl-grey-good',
    name: 'Maroquinerie homme',
    description: 'Maroquinerie homme élégant et intemporel. Bon état. Fabriqué en cuir de haute qualité.',
    price: 64,
    originalPrice: 91,
    condition: 'good',
    size: 'xl',
    color: 'grey',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-maroquinerie', 'homme-xl']
  },
  {
    slug: '800-maroquinerie-femme-2xl-et-plus-white-excellent',
    name: 'Maroquinerie femme',
    description: 'Maroquinerie femme élégant et intemporel. Excellent état. Fabriqué en nylon de haute qualité.',
    price: 176,
    originalPrice: 251,
    condition: 'excellent',
    size: '2xl-et-plus',
    color: 'white',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-2xl-et-plus']
  },
  {
    slug: '801-t-shirts-homme-xs-red-new',
    name: 'T-shirts homme',
    description: 'T-shirts homme élégant et intemporel. État neuf. Fabriqué en coton de haute qualité.',
    price: 66,
    originalPrice: 94,
    condition: 'new',
    size: 'xs',
    color: 'red',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-t-shirts', 'homme-xs']
  },
  {
    slug: '802-polos-homme-xs-blue-very_good',
    name: 'Polos homme',
    description: 'Polos homme élégant et intemporel. Très bon état. Fabriqué en coton bio de haute qualité.',
    price: 182,
    originalPrice: 228,
    condition: 'very_good',
    size: 'xs',
    color: 'blue',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-polos', 'homme-xs']
  },
  {
    slug: '803-pantalons-and-shorts-homme-xl-black-very_good',
    name: 'Pantalons & Shorts homme',
    description: 'Pantalons & Shorts homme authentique Lacoste. Très bon état. gabardine durable et confortable.',
    price: 33,
    originalPrice: 41,
    condition: 'very_good',
    size: 'xl',
    color: 'black',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-xl']
  },
  {
    slug: '804-manteaux-and-vestes-femme-m-purple-very_good',
    name: 'Manteaux & Vestes femme',
    description:
      'Manteaux & Vestes femme élégant et intemporel. Très bon état. Fabriqué en coton imperméable de haute qualité.',
    price: 34,
    originalPrice: 43,
    condition: 'very_good',
    size: 'm',
    color: 'purple',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-m']
  },
  {
    slug: '805-maroquinerie-femme-xl-yellow-good',
    name: 'Maroquinerie femme',
    description: 'Magnifique Maroquinerie femme de la collection Lacoste. Bon état. Matière premium en nylon.',
    price: 138,
    originalPrice: 197,
    condition: 'good',
    size: 'xl',
    color: 'yellow',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-xl']
  },
  {
    slug: '806-t-shirts-femme-xs-yellow-excellent',
    name: 'T-shirts femme',
    description: 'Magnifique T-shirts femme de la collection Lacoste. Excellent état. Matière premium en coton.',
    price: 75,
    originalPrice: 107,
    condition: 'excellent',
    size: 'xs',
    color: 'yellow',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-xs']
  },
  {
    slug: '807-pullovers-femme-xs-beige-good',
    name: 'Pullovers femme',
    description: 'Superbe Pullovers femme en cachemire. Bon état. Coupe ajustée et confortable.',
    price: 141,
    originalPrice: 202,
    condition: 'good',
    size: 'xs',
    color: 'beige',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-pullovers', 'femme-xs']
  },
  {
    slug: '808-chemises-femme-xl-beige-very_good',
    name: 'Chemises femme',
    description: 'Chemises femme authentique Lacoste. Très bon état. oxford durable et confortable.',
    price: 114,
    originalPrice: 143,
    condition: 'very_good',
    size: 'xl',
    color: 'beige',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-xl']
  },
  {
    slug: '809-manteaux-and-vestes-femme-l-green-very_good',
    name: 'Manteaux & Vestes femme',
    description: 'Superbe Manteaux & Vestes femme en polyester recyclé. Très bon état. Coupe ajustée et confortable.',
    price: 240,
    originalPrice: 300,
    condition: 'very_good',
    size: 'l',
    color: 'green',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-l']
  },
  {
    slug: '810-maroquinerie-femme-xl-yellow-excellent',
    name: 'Maroquinerie femme',
    description: 'Maroquinerie femme authentique Lacoste. Excellent état. cuir durable et confortable.',
    price: 155,
    originalPrice: 221,
    condition: 'excellent',
    size: 'xl',
    color: 'yellow',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-xl']
  },
  {
    slug: '811-t-shirts-homme-m-blue-good',
    name: 'T-shirts homme',
    description: 'Superbe T-shirts homme en coton organique. Bon état. Coupe ajustée et confortable.',
    price: 34,
    originalPrice: 48,
    condition: 'good',
    size: 'm',
    color: 'blue',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-t-shirts', 'homme-m']
  },
  {
    slug: '812-robes-and-jupes-femme-s-blue-excellent',
    name: 'Robes & Jupes femme',
    description: 'Robes & Jupes femme authentique Lacoste. Excellent état. coton stretch durable et confortable.',
    price: 197,
    originalPrice: 282,
    condition: 'excellent',
    size: 's',
    color: 'blue',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-s']
  },
  {
    slug: '813-robes-and-jupes-femme-m-purple-excellent',
    name: 'Robes & Jupes femme',
    description: 'Superbe Robes & Jupes femme en crêpe. Excellent état. Coupe ajustée et confortable.',
    price: 29,
    originalPrice: 41,
    condition: 'excellent',
    size: 'm',
    color: 'purple',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-m']
  },
  {
    slug: '814-polos-femme-xs-purple-good',
    name: 'Polos femme',
    description: 'Polos femme élégant et intemporel. Bon état. Fabriqué en jersey de coton de haute qualité.',
    price: 137,
    originalPrice: 196,
    condition: 'good',
    size: 'xs',
    color: 'purple',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-polos', 'femme-xs']
  },
  {
    slug: '815-pantalons-and-shorts-homme-xs-brown-good',
    name: 'Pantalons & Shorts homme',
    description:
      'Pantalons & Shorts homme élégant et intemporel. Bon état. Fabriqué en toile de coton de haute qualité.',
    price: 113,
    originalPrice: 162,
    condition: 'good',
    size: 'xs',
    color: 'brown',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-xs']
  },
  {
    slug: '816-pullovers-homme-xl-blue-excellent',
    name: 'Pullovers homme',
    description: 'Superbe Pullovers homme en laine mérinos. Excellent état. Coupe ajustée et confortable.',
    price: 111,
    originalPrice: 159,
    condition: 'excellent',
    size: 'xl',
    color: 'blue',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-pullovers', 'homme-xl']
  },
  {
    slug: '817-pantalons-and-shorts-femme-m-purple-new',
    name: 'Pantalons & Shorts femme',
    description: 'Pantalons & Shorts femme authentique Lacoste. État neuf. gabardine durable et confortable.',
    price: 85,
    originalPrice: 121,
    condition: 'new',
    size: 'm',
    color: 'purple',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-m']
  },
  {
    slug: '818-chemises-homme-l-orange-good',
    name: 'Chemises homme',
    description: 'Superbe Chemises homme en oxford. Bon état. Coupe ajustée et confortable.',
    price: 25,
    originalPrice: 35,
    condition: 'good',
    size: 'l',
    color: 'orange',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-chemises', 'homme-l']
  },
  {
    slug: '819-chemises-femme-xl-brown-new',
    name: 'Chemises femme',
    description: 'Chemises femme élégant et intemporel. État neuf. Fabriqué en oxford de haute qualité.',
    price: 36,
    originalPrice: 51,
    condition: 'new',
    size: 'xl',
    color: 'brown',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-xl']
  },
  {
    slug: '820-pullovers-femme-l-yellow-very_good',
    name: 'Pullovers femme',
    description: 'Superbe Pullovers femme en coton tricoté. Très bon état. Coupe ajustée et confortable.',
    price: 166,
    originalPrice: 207,
    condition: 'very_good',
    size: 'l',
    color: 'yellow',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-pullovers', 'femme-l']
  },
  {
    slug: '821-pullovers-femme-xs-orange-excellent',
    name: 'Pullovers femme',
    description: 'Pullovers femme authentique Lacoste. Excellent état. cachemire durable et confortable.',
    price: 111,
    originalPrice: 158,
    condition: 'excellent',
    size: 'xs',
    color: 'orange',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-pullovers', 'femme-xs']
  },
  {
    slug: '822-manteaux-and-vestes-femme-xl-orange-excellent',
    name: 'Manteaux & Vestes femme',
    description: 'Superbe Manteaux & Vestes femme en polyester recyclé. Excellent état. Coupe ajustée et confortable.',
    price: 108,
    originalPrice: 154,
    condition: 'excellent',
    size: 'xl',
    color: 'orange',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-xl']
  },
  {
    slug: '823-manteaux-and-vestes-femme-l-orange-new',
    name: 'Manteaux & Vestes femme',
    description: 'Superbe Manteaux & Vestes femme en polyester recyclé. État neuf. Coupe ajustée et confortable.',
    price: 109,
    originalPrice: 156,
    condition: 'new',
    size: 'l',
    color: 'orange',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-l']
  },
  {
    slug: '824-maroquinerie-femme-l-brown-very_good',
    name: 'Maroquinerie femme',
    description: 'Superbe Maroquinerie femme en toile enduite. Très bon état. Coupe ajustée et confortable.',
    price: 178,
    originalPrice: 222,
    condition: 'very_good',
    size: 'l',
    color: 'brown',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-l']
  },
  {
    slug: '825-maroquinerie-homme-2xl-et-plus-grey-good',
    name: 'Maroquinerie homme',
    description: 'Superbe Maroquinerie homme en toile enduite. Bon état. Coupe ajustée et confortable.',
    price: 97,
    originalPrice: 138,
    condition: 'good',
    size: '2xl-et-plus',
    color: 'grey',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-maroquinerie', 'homme-2xl-et-plus']
  },
  {
    slug: '826-tops-and-chemises-femme-2xl-et-plus-grey-excellent',
    name: 'Tops & Chemises femme',
    description: 'Tops & Chemises femme authentique Lacoste. Excellent état. popeline de coton durable et confortable.',
    price: 50,
    originalPrice: 72,
    condition: 'excellent',
    size: '2xl-et-plus',
    color: 'grey',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-2xl-et-plus']
  },
  {
    slug: '827-pullovers-homme-xl-pink-new',
    name: 'Pullovers homme',
    description: 'Pullovers homme élégant et intemporel. État neuf. Fabriqué en coton tricoté de haute qualité.',
    price: 130,
    originalPrice: 186,
    condition: 'new',
    size: 'xl',
    color: 'pink',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-pullovers', 'homme-xl']
  },
  {
    slug: '828-survetements-homme-m-yellow-good',
    name: 'Survêtements homme',
    description: 'Superbe Survêtements homme en polyester technique. Bon état. Coupe ajustée et confortable.',
    price: 139,
    originalPrice: 199,
    condition: 'good',
    size: 'm',
    color: 'yellow',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-survetements', 'homme-m']
  },
  {
    slug: '829-t-shirts-homme-2xl-et-plus-red-new',
    name: 'T-shirts homme',
    description: 'Superbe T-shirts homme en coton. État neuf. Coupe ajustée et confortable.',
    price: 116,
    originalPrice: 166,
    condition: 'new',
    size: '2xl-et-plus',
    color: 'red',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-t-shirts', 'homme-2xl-et-plus']
  },
  {
    slug: '830-survetements-homme-s-purple-new',
    name: 'Survêtements homme',
    description: 'Survêtements homme élégant et intemporel. État neuf. Fabriqué en matière stretch de haute qualité.',
    price: 32,
    originalPrice: 46,
    condition: 'new',
    size: 's',
    color: 'purple',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-survetements', 'homme-s']
  },
  {
    slug: '831-polos-homme-m-red-new',
    name: 'Polos homme',
    description: 'Superbe Polos homme en jersey de coton. État neuf. Coupe ajustée et confortable.',
    price: 115,
    originalPrice: 165,
    condition: 'new',
    size: 'm',
    color: 'red',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-polos', 'homme-m']
  },
  {
    slug: '832-chemises-femme-l-blue-good',
    name: 'Chemises femme',
    description: 'Chemises femme authentique Lacoste. Bon état. popeline durable et confortable.',
    price: 60,
    originalPrice: 86,
    condition: 'good',
    size: 'l',
    color: 'blue',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-l']
  },
  {
    slug: '833-maroquinerie-homme-s-beige-good',
    name: 'Maroquinerie homme',
    description: 'Maroquinerie homme authentique Lacoste. Bon état. cuir durable et confortable.',
    price: 97,
    originalPrice: 139,
    condition: 'good',
    size: 's',
    color: 'beige',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-maroquinerie', 'homme-s']
  },
  {
    slug: '834-polos-homme-2xl-et-plus-grey-new',
    name: 'Polos homme',
    description: 'Magnifique Polos homme de la collection Lacoste. État neuf. Matière premium en coton piqué.',
    price: 169,
    originalPrice: 242,
    condition: 'new',
    size: '2xl-et-plus',
    color: 'grey',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-polos', 'homme-2xl-et-plus']
  },
  {
    slug: '835-manteaux-and-vestes-homme-2xl-et-plus-yellow-very_good',
    name: 'Manteaux & Vestes homme',
    description:
      'Magnifique Manteaux & Vestes homme de la collection Lacoste. Très bon état. Matière premium en laine.',
    price: 74,
    originalPrice: 93,
    condition: 'very_good',
    size: '2xl-et-plus',
    color: 'yellow',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-2xl-et-plus']
  },
  {
    slug: '836-pullovers-femme-2xl-et-plus-black-new',
    name: 'Pullovers femme',
    description: 'Pullovers femme authentique Lacoste. État neuf. cachemire durable et confortable.',
    price: 132,
    originalPrice: 188,
    condition: 'new',
    size: '2xl-et-plus',
    color: 'black',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-pullovers', 'femme-2xl-et-plus']
  },
  {
    slug: '837-chemises-femme-l-beige-new',
    name: 'Chemises femme',
    description: 'Superbe Chemises femme en oxford. État neuf. Coupe ajustée et confortable.',
    price: 194,
    originalPrice: 277,
    condition: 'new',
    size: 'l',
    color: 'beige',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-l']
  },
  {
    slug: '838-maroquinerie-homme-2xl-et-plus-grey-good',
    name: 'Maroquinerie homme',
    description: 'Maroquinerie homme authentique Lacoste. Bon état. toile enduite durable et confortable.',
    price: 109,
    originalPrice: 156,
    condition: 'good',
    size: '2xl-et-plus',
    color: 'grey',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-maroquinerie', 'homme-2xl-et-plus']
  },
  {
    slug: '839-maroquinerie-homme-xs-blue-excellent',
    name: 'Maroquinerie homme',
    description: 'Superbe Maroquinerie homme en toile enduite. Excellent état. Coupe ajustée et confortable.',
    price: 57,
    originalPrice: 81,
    condition: 'excellent',
    size: 'xs',
    color: 'blue',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-maroquinerie', 'homme-xs']
  },
  {
    slug: '840-sweatshirts-homme-m-green-excellent',
    name: 'Sweatshirts homme',
    description: 'Superbe Sweatshirts homme en jersey lourd. Excellent état. Coupe ajustée et confortable.',
    price: 124,
    originalPrice: 177,
    condition: 'excellent',
    size: 'm',
    color: 'green',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-sweatshirts', 'homme-m']
  },
  {
    slug: '841-manteaux-and-vestes-homme-xl-yellow-good',
    name: 'Manteaux & Vestes homme',
    description: 'Manteaux & Vestes homme authentique Lacoste. Bon état. coton imperméable durable et confortable.',
    price: 179,
    originalPrice: 255,
    condition: 'good',
    size: 'xl',
    color: 'yellow',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-xl']
  },
  {
    slug: '842-sweatshirts-femme-xl-black-new',
    name: 'Sweatshirts femme',
    description: 'Superbe Sweatshirts femme en jersey lourd. État neuf. Coupe ajustée et confortable.',
    price: 193,
    originalPrice: 275,
    condition: 'new',
    size: 'xl',
    color: 'black',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-sweatshirts', 'femme-xl']
  },
  {
    slug: '843-sweatshirts-homme-xs-brown-new',
    name: 'Sweatshirts homme',
    description: 'Superbe Sweatshirts homme en molleton. État neuf. Coupe ajustée et confortable.',
    price: 45,
    originalPrice: 64,
    condition: 'new',
    size: 'xs',
    color: 'brown',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-sweatshirts', 'homme-xs']
  },
  {
    slug: '844-manteaux-and-vestes-femme-xs-orange-excellent',
    name: 'Manteaux & Vestes femme',
    description:
      'Manteaux & Vestes femme élégant et intemporel. Excellent état. Fabriqué en coton imperméable de haute qualité.',
    price: 133,
    originalPrice: 190,
    condition: 'excellent',
    size: 'xs',
    color: 'orange',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-xs']
  },
  {
    slug: '845-pantalons-and-shorts-femme-l-yellow-new',
    name: 'Pantalons & Shorts femme',
    description:
      'Magnifique Pantalons & Shorts femme de la collection Lacoste. État neuf. Matière premium en gabardine.',
    price: 91,
    originalPrice: 130,
    condition: 'new',
    size: 'l',
    color: 'yellow',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-l']
  },
  {
    slug: '846-t-shirts-homme-2xl-et-plus-purple-excellent',
    name: 'T-shirts homme',
    description: 'T-shirts homme élégant et intemporel. Excellent état. Fabriqué en coton de haute qualité.',
    price: 149,
    originalPrice: 213,
    condition: 'excellent',
    size: '2xl-et-plus',
    color: 'purple',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-t-shirts', 'homme-2xl-et-plus']
  },
  {
    slug: '847-t-shirts-femme-l-brown-very_good',
    name: 'T-shirts femme',
    description: 'Superbe T-shirts femme en coton organique. Très bon état. Coupe ajustée et confortable.',
    price: 222,
    originalPrice: 278,
    condition: 'very_good',
    size: 'l',
    color: 'brown',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-l']
  },
  {
    slug: '848-sweatshirts-homme-xl-white-excellent',
    name: 'Sweatshirts homme',
    description: 'Sweatshirts homme authentique Lacoste. Excellent état. molleton durable et confortable.',
    price: 161,
    originalPrice: 230,
    condition: 'excellent',
    size: 'xl',
    color: 'white',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-sweatshirts', 'homme-xl']
  },
  {
    slug: '849-polos-homme-l-yellow-good',
    name: 'Polos homme',
    description: 'Magnifique Polos homme de la collection Lacoste. Bon état. Matière premium en jersey de coton.',
    price: 182,
    originalPrice: 260,
    condition: 'good',
    size: 'l',
    color: 'yellow',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-polos', 'homme-l']
  },
  {
    slug: '850-chemises-femme-s-green-excellent',
    name: 'Chemises femme',
    description: 'Superbe Chemises femme en popeline. Excellent état. Coupe ajustée et confortable.',
    price: 101,
    originalPrice: 144,
    condition: 'excellent',
    size: 's',
    color: 'green',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-s']
  },
  {
    slug: '851-sweatshirts-homme-2xl-et-plus-white-excellent',
    name: 'Sweatshirts homme',
    description: 'Superbe Sweatshirts homme en molleton. Excellent état. Coupe ajustée et confortable.',
    price: 25,
    originalPrice: 36,
    condition: 'excellent',
    size: '2xl-et-plus',
    color: 'white',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-sweatshirts', 'homme-2xl-et-plus']
  },
  {
    slug: '852-manteaux-and-vestes-femme-m-brown-very_good',
    name: 'Manteaux & Vestes femme',
    description: 'Manteaux & Vestes femme authentique Lacoste. Très bon état. laine durable et confortable.',
    price: 194,
    originalPrice: 242,
    condition: 'very_good',
    size: 'm',
    color: 'brown',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-m']
  },
  {
    slug: '853-maroquinerie-femme-l-grey-new',
    name: 'Maroquinerie femme',
    description: 'Maroquinerie femme élégant et intemporel. État neuf. Fabriqué en nylon de haute qualité.',
    price: 24,
    originalPrice: 34,
    condition: 'new',
    size: 'l',
    color: 'grey',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-l']
  },
  {
    slug: '854-t-shirts-homme-xl-yellow-very_good',
    name: 'T-shirts homme',
    description: 'T-shirts homme authentique Lacoste. Très bon état. coton organique durable et confortable.',
    price: 194,
    originalPrice: 243,
    condition: 'very_good',
    size: 'xl',
    color: 'yellow',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-t-shirts', 'homme-xl']
  },
  {
    slug: '855-pantalons-and-shorts-femme-xs-white-new',
    name: 'Pantalons & Shorts femme',
    description:
      'Magnifique Pantalons & Shorts femme de la collection Lacoste. État neuf. Matière premium en coton sergé.',
    price: 71,
    originalPrice: 101,
    condition: 'new',
    size: 'xs',
    color: 'white',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-xs']
  },
  {
    slug: '856-survetements-femme-m-white-excellent',
    name: 'Survêtements femme',
    description:
      'Survêtements femme élégant et intemporel. Excellent état. Fabriqué en matière stretch de haute qualité.',
    price: 25,
    originalPrice: 36,
    condition: 'excellent',
    size: 'm',
    color: 'white',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-survetements', 'femme-m']
  },
  {
    slug: '857-survetements-femme-xl-beige-good',
    name: 'Survêtements femme',
    description:
      'Magnifique Survêtements femme de la collection Lacoste. Bon état. Matière premium en coton molletonné.',
    price: 183,
    originalPrice: 261,
    condition: 'good',
    size: 'xl',
    color: 'beige',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-survetements', 'femme-xl']
  },
  {
    slug: '858-pullovers-homme-xl-grey-new',
    name: 'Pullovers homme',
    description: 'Pullovers homme authentique Lacoste. État neuf. coton tricoté durable et confortable.',
    price: 205,
    originalPrice: 293,
    condition: 'new',
    size: 'xl',
    color: 'grey',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-pullovers', 'homme-xl']
  },
  {
    slug: '859-survetements-femme-s-red-good',
    name: 'Survêtements femme',
    description:
      'Magnifique Survêtements femme de la collection Lacoste. Bon état. Matière premium en coton molletonné.',
    price: 25,
    originalPrice: 35,
    condition: 'good',
    size: 's',
    color: 'red',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-survetements', 'femme-s']
  },
  {
    slug: '860-sweatshirts-homme-l-green-excellent',
    name: 'Sweatshirts homme',
    description: 'Superbe Sweatshirts homme en jersey lourd. Excellent état. Coupe ajustée et confortable.',
    price: 146,
    originalPrice: 209,
    condition: 'excellent',
    size: 'l',
    color: 'green',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-sweatshirts', 'homme-l']
  },
  {
    slug: '861-pullovers-homme-l-orange-very_good',
    name: 'Pullovers homme',
    description: 'Pullovers homme élégant et intemporel. Très bon état. Fabriqué en cachemire de haute qualité.',
    price: 222,
    originalPrice: 278,
    condition: 'very_good',
    size: 'l',
    color: 'orange',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-pullovers', 'homme-l']
  },
  {
    slug: '862-polos-homme-s-brown-new',
    name: 'Polos homme',
    description: 'Superbe Polos homme en coton piqué. État neuf. Coupe ajustée et confortable.',
    price: 139,
    originalPrice: 198,
    condition: 'new',
    size: 's',
    color: 'brown',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-polos', 'homme-s']
  },
  {
    slug: '863-survetements-homme-m-green-very_good',
    name: 'Survêtements homme',
    description: 'Survêtements homme authentique Lacoste. Très bon état. polyester technique durable et confortable.',
    price: 156,
    originalPrice: 195,
    condition: 'very_good',
    size: 'm',
    color: 'green',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-survetements', 'homme-m']
  },
  {
    slug: '864-pullovers-femme-xs-orange-new',
    name: 'Pullovers femme',
    description: 'Superbe Pullovers femme en laine mérinos. État neuf. Coupe ajustée et confortable.',
    price: 165,
    originalPrice: 235,
    condition: 'new',
    size: 'xs',
    color: 'orange',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-pullovers', 'femme-xs']
  },
  {
    slug: '865-manteaux-and-vestes-homme-xl-grey-new',
    name: 'Manteaux & Vestes homme',
    description: 'Superbe Manteaux & Vestes homme en laine. État neuf. Coupe ajustée et confortable.',
    price: 186,
    originalPrice: 265,
    condition: 'new',
    size: 'xl',
    color: 'grey',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-xl']
  },
  {
    slug: '866-chemises-homme-xl-white-new',
    name: 'Chemises homme',
    description: 'Chemises homme authentique Lacoste. État neuf. oxford durable et confortable.',
    price: 200,
    originalPrice: 286,
    condition: 'new',
    size: 'xl',
    color: 'white',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-chemises', 'homme-xl']
  },
  {
    slug: '867-chemises-femme-2xl-et-plus-green-excellent',
    name: 'Chemises femme',
    description: 'Chemises femme élégant et intemporel. Excellent état. Fabriqué en oxford de haute qualité.',
    price: 57,
    originalPrice: 81,
    condition: 'excellent',
    size: '2xl-et-plus',
    color: 'green',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-2xl-et-plus']
  },
  {
    slug: '868-t-shirts-femme-s-blue-very_good',
    name: 'T-shirts femme',
    description: 'Superbe T-shirts femme en coton. Très bon état. Coupe ajustée et confortable.',
    price: 212,
    originalPrice: 265,
    condition: 'very_good',
    size: 's',
    color: 'blue',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-s']
  },
  {
    slug: '869-pantalons-and-shorts-femme-xs-white-good',
    name: 'Pantalons & Shorts femme',
    description:
      'Pantalons & Shorts femme élégant et intemporel. Bon état. Fabriqué en toile de coton de haute qualité.',
    price: 207,
    originalPrice: 295,
    condition: 'good',
    size: 'xs',
    color: 'white',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-xs']
  },
  {
    slug: '870-maroquinerie-femme-m-black-excellent',
    name: 'Maroquinerie femme',
    description: 'Maroquinerie femme authentique Lacoste. Excellent état. cuir durable et confortable.',
    price: 69,
    originalPrice: 99,
    condition: 'excellent',
    size: 'm',
    color: 'black',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-m']
  },
  {
    slug: '871-manteaux-and-vestes-homme-2xl-et-plus-red-new',
    name: 'Manteaux & Vestes homme',
    description:
      'Manteaux & Vestes homme élégant et intemporel. État neuf. Fabriqué en polyester recyclé de haute qualité.',
    price: 130,
    originalPrice: 186,
    condition: 'new',
    size: '2xl-et-plus',
    color: 'red',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-2xl-et-plus']
  },
  {
    slug: '872-manteaux-and-vestes-homme-xs-grey-excellent',
    name: 'Manteaux & Vestes homme',
    description: 'Manteaux & Vestes homme authentique Lacoste. Excellent état. laine durable et confortable.',
    price: 29,
    originalPrice: 41,
    condition: 'excellent',
    size: 'xs',
    color: 'grey',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-xs']
  },
  {
    slug: '873-survetements-homme-m-black-new',
    name: 'Survêtements homme',
    description: 'Superbe Survêtements homme en polyester technique. État neuf. Coupe ajustée et confortable.',
    price: 73,
    originalPrice: 104,
    condition: 'new',
    size: 'm',
    color: 'black',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-survetements', 'homme-m']
  },
  {
    slug: '874-tops-and-chemises-femme-s-black-excellent',
    name: 'Tops & Chemises femme',
    description: 'Tops & Chemises femme élégant et intemporel. Excellent état. Fabriqué en viscose de haute qualité.',
    price: 44,
    originalPrice: 63,
    condition: 'excellent',
    size: 's',
    color: 'black',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-s']
  },
  {
    slug: '875-polos-femme-2xl-et-plus-beige-good',
    name: 'Polos femme',
    description: 'Polos femme élégant et intemporel. Bon état. Fabriqué en jersey de coton de haute qualité.',
    price: 104,
    originalPrice: 149,
    condition: 'good',
    size: '2xl-et-plus',
    color: 'beige',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-polos', 'femme-2xl-et-plus']
  },
  {
    slug: '876-pullovers-femme-xs-white-good',
    name: 'Pullovers femme',
    description: 'Superbe Pullovers femme en cachemire. Bon état. Coupe ajustée et confortable.',
    price: 208,
    originalPrice: 297,
    condition: 'good',
    size: 'xs',
    color: 'white',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-pullovers', 'femme-xs']
  },
  {
    slug: '877-pullovers-homme-m-pink-good',
    name: 'Pullovers homme',
    description: 'Magnifique Pullovers homme de la collection Lacoste. Bon état. Matière premium en coton tricoté.',
    price: 41,
    originalPrice: 58,
    condition: 'good',
    size: 'm',
    color: 'pink',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-pullovers', 'homme-m']
  },
  {
    slug: '878-survetements-femme-xs-beige-very_good',
    name: 'Survêtements femme',
    description: 'Superbe Survêtements femme en coton molletonné. Très bon état. Coupe ajustée et confortable.',
    price: 211,
    originalPrice: 264,
    condition: 'very_good',
    size: 'xs',
    color: 'beige',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-survetements', 'femme-xs']
  },
  {
    slug: '879-tops-and-chemises-femme-m-orange-very_good',
    name: 'Tops & Chemises femme',
    description: 'Tops & Chemises femme authentique Lacoste. Très bon état. soie durable et confortable.',
    price: 216,
    originalPrice: 270,
    condition: 'very_good',
    size: 'm',
    color: 'orange',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-m']
  },
  {
    slug: '880-pantalons-and-shorts-femme-2xl-et-plus-blue-excellent',
    name: 'Pantalons & Shorts femme',
    description: 'Superbe Pantalons & Shorts femme en coton sergé. Excellent état. Coupe ajustée et confortable.',
    price: 104,
    originalPrice: 149,
    condition: 'excellent',
    size: '2xl-et-plus',
    color: 'blue',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-2xl-et-plus']
  },
  {
    slug: '881-chemises-femme-xs-yellow-excellent',
    name: 'Chemises femme',
    description: 'Chemises femme élégant et intemporel. Excellent état. Fabriqué en lin de haute qualité.',
    price: 130,
    originalPrice: 185,
    condition: 'excellent',
    size: 'xs',
    color: 'yellow',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-xs']
  },
  {
    slug: '882-maroquinerie-homme-xs-orange-good',
    name: 'Maroquinerie homme',
    description: 'Superbe Maroquinerie homme en toile enduite. Bon état. Coupe ajustée et confortable.',
    price: 141,
    originalPrice: 202,
    condition: 'good',
    size: 'xs',
    color: 'orange',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-maroquinerie', 'homme-xs']
  },
  {
    slug: '883-sweatshirts-homme-s-green-new',
    name: 'Sweatshirts homme',
    description: 'Sweatshirts homme authentique Lacoste. État neuf. coton brossé durable et confortable.',
    price: 204,
    originalPrice: 292,
    condition: 'new',
    size: 's',
    color: 'green',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-sweatshirts', 'homme-s']
  },
  {
    slug: '884-maroquinerie-femme-xl-beige-very_good',
    name: 'Maroquinerie femme',
    description:
      'Magnifique Maroquinerie femme de la collection Lacoste. Très bon état. Matière premium en toile enduite.',
    price: 152,
    originalPrice: 190,
    condition: 'very_good',
    size: 'xl',
    color: 'beige',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-xl']
  },
  {
    slug: '885-sweatshirts-homme-s-green-very_good',
    name: 'Sweatshirts homme',
    description:
      'Magnifique Sweatshirts homme de la collection Lacoste. Très bon état. Matière premium en jersey lourd.',
    price: 227,
    originalPrice: 284,
    condition: 'very_good',
    size: 's',
    color: 'green',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-sweatshirts', 'homme-s']
  },
  {
    slug: '886-sweatshirts-femme-xs-black-excellent',
    name: 'Sweatshirts femme',
    description:
      'Magnifique Sweatshirts femme de la collection Lacoste. Excellent état. Matière premium en jersey lourd.',
    price: 69,
    originalPrice: 99,
    condition: 'excellent',
    size: 'xs',
    color: 'black',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-sweatshirts', 'femme-xs']
  },
  {
    slug: '887-pantalons-and-shorts-femme-l-white-excellent',
    name: 'Pantalons & Shorts femme',
    description:
      'Pantalons & Shorts femme élégant et intemporel. Excellent état. Fabriqué en toile de coton de haute qualité.',
    price: 126,
    originalPrice: 180,
    condition: 'excellent',
    size: 'l',
    color: 'white',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-l']
  },
  {
    slug: '888-tops-and-chemises-femme-2xl-et-plus-purple-excellent',
    name: 'Tops & Chemises femme',
    description: 'Tops & Chemises femme authentique Lacoste. Excellent état. popeline de coton durable et confortable.',
    price: 112,
    originalPrice: 160,
    condition: 'excellent',
    size: '2xl-et-plus',
    color: 'purple',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-2xl-et-plus']
  },
  {
    slug: '889-pullovers-femme-2xl-et-plus-white-good',
    name: 'Pullovers femme',
    description: 'Magnifique Pullovers femme de la collection Lacoste. Bon état. Matière premium en cachemire.',
    price: 139,
    originalPrice: 198,
    condition: 'good',
    size: '2xl-et-plus',
    color: 'white',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-pullovers', 'femme-2xl-et-plus']
  },
  {
    slug: '890-chemises-homme-s-green-good',
    name: 'Chemises homme',
    description: 'Magnifique Chemises homme de la collection Lacoste. Bon état. Matière premium en lin.',
    price: 153,
    originalPrice: 218,
    condition: 'good',
    size: 's',
    color: 'green',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-chemises', 'homme-s']
  },
  {
    slug: '891-tops-and-chemises-femme-l-beige-good',
    name: 'Tops & Chemises femme',
    description: 'Tops & Chemises femme élégant et intemporel. Bon état. Fabriqué en viscose de haute qualité.',
    price: 140,
    originalPrice: 200,
    condition: 'good',
    size: 'l',
    color: 'beige',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-l']
  },
  {
    slug: '892-polos-femme-xs-beige-new',
    name: 'Polos femme',
    description: 'Polos femme élégant et intemporel. État neuf. Fabriqué en coton bio de haute qualité.',
    price: 137,
    originalPrice: 196,
    condition: 'new',
    size: 'xs',
    color: 'beige',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-polos', 'femme-xs']
  },
  {
    slug: '893-tops-and-chemises-femme-m-brown-excellent',
    name: 'Tops & Chemises femme',
    description:
      'Magnifique Tops & Chemises femme de la collection Lacoste. Excellent état. Matière premium en viscose.',
    price: 56,
    originalPrice: 80,
    condition: 'excellent',
    size: 'm',
    color: 'brown',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-m']
  },
  {
    slug: '894-chemises-femme-s-black-excellent',
    name: 'Chemises femme',
    description: 'Chemises femme authentique Lacoste. Excellent état. lin durable et confortable.',
    price: 69,
    originalPrice: 99,
    condition: 'excellent',
    size: 's',
    color: 'black',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-s']
  },
  {
    slug: '895-t-shirts-femme-xs-beige-excellent',
    name: 'T-shirts femme',
    description: 'Superbe T-shirts femme en coton organique. Excellent état. Coupe ajustée et confortable.',
    price: 95,
    originalPrice: 135,
    condition: 'excellent',
    size: 'xs',
    color: 'beige',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-xs']
  },
  {
    slug: '896-pullovers-femme-m-yellow-good',
    name: 'Pullovers femme',
    description: 'Superbe Pullovers femme en coton tricoté. Bon état. Coupe ajustée et confortable.',
    price: 43,
    originalPrice: 62,
    condition: 'good',
    size: 'm',
    color: 'yellow',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-pullovers', 'femme-m']
  },
  {
    slug: '897-pantalons-and-shorts-homme-xs-green-very_good',
    name: 'Pantalons & Shorts homme',
    description: 'Pantalons & Shorts homme authentique Lacoste. Très bon état. toile de coton durable et confortable.',
    price: 51,
    originalPrice: 64,
    condition: 'very_good',
    size: 'xs',
    color: 'green',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-xs']
  },
  {
    slug: '898-sweatshirts-femme-s-red-excellent',
    name: 'Sweatshirts femme',
    description: 'Sweatshirts femme authentique Lacoste. Excellent état. molleton durable et confortable.',
    price: 145,
    originalPrice: 207,
    condition: 'excellent',
    size: 's',
    color: 'red',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-sweatshirts', 'femme-s']
  },
  {
    slug: '899-polos-femme-xs-grey-good',
    name: 'Polos femme',
    description: 'Magnifique Polos femme de la collection Lacoste. Bon état. Matière premium en coton bio.',
    price: 95,
    originalPrice: 136,
    condition: 'good',
    size: 'xs',
    color: 'grey',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-polos', 'femme-xs']
  },
  {
    slug: '900-pantalons-and-shorts-homme-s-orange-very_good',
    name: 'Pantalons & Shorts homme',
    description: 'Superbe Pantalons & Shorts homme en coton sergé. Très bon état. Coupe ajustée et confortable.',
    price: 29,
    originalPrice: 36,
    condition: 'very_good',
    size: 's',
    color: 'orange',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-s']
  },
  {
    slug: '901-t-shirts-homme-2xl-et-plus-beige-good',
    name: 'T-shirts homme',
    description: 'Magnifique T-shirts homme de la collection Lacoste. Bon état. Matière premium en coton.',
    price: 41,
    originalPrice: 58,
    condition: 'good',
    size: '2xl-et-plus',
    color: 'beige',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-t-shirts', 'homme-2xl-et-plus']
  },
  {
    slug: '902-pullovers-homme-2xl-et-plus-purple-excellent',
    name: 'Pullovers homme',
    description: 'Pullovers homme authentique Lacoste. Excellent état. coton tricoté durable et confortable.',
    price: 48,
    originalPrice: 69,
    condition: 'excellent',
    size: '2xl-et-plus',
    color: 'purple',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-pullovers', 'homme-2xl-et-plus']
  },
  {
    slug: '903-survetements-homme-2xl-et-plus-green-new',
    name: 'Survêtements homme',
    description: 'Survêtements homme authentique Lacoste. État neuf. matière stretch durable et confortable.',
    price: 50,
    originalPrice: 72,
    condition: 'new',
    size: '2xl-et-plus',
    color: 'green',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-survetements', 'homme-2xl-et-plus']
  },
  {
    slug: '904-pullovers-homme-2xl-et-plus-white-excellent',
    name: 'Pullovers homme',
    description: 'Magnifique Pullovers homme de la collection Lacoste. Excellent état. Matière premium en cachemire.',
    price: 203,
    originalPrice: 290,
    condition: 'excellent',
    size: '2xl-et-plus',
    color: 'white',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-pullovers', 'homme-2xl-et-plus']
  },
  {
    slug: '905-survetements-femme-xl-beige-good',
    name: 'Survêtements femme',
    description:
      'Magnifique Survêtements femme de la collection Lacoste. Bon état. Matière premium en matière stretch.',
    price: 47,
    originalPrice: 67,
    condition: 'good',
    size: 'xl',
    color: 'beige',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-survetements', 'femme-xl']
  },
  {
    slug: '906-sweatshirts-femme-s-red-very_good',
    name: 'Sweatshirts femme',
    description: 'Sweatshirts femme élégant et intemporel. Très bon état. Fabriqué en molleton de haute qualité.',
    price: 147,
    originalPrice: 184,
    condition: 'very_good',
    size: 's',
    color: 'red',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-sweatshirts', 'femme-s']
  },
  {
    slug: '907-sweatshirts-femme-s-brown-very_good',
    name: 'Sweatshirts femme',
    description: 'Magnifique Sweatshirts femme de la collection Lacoste. Très bon état. Matière premium en molleton.',
    price: 206,
    originalPrice: 257,
    condition: 'very_good',
    size: 's',
    color: 'brown',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-sweatshirts', 'femme-s']
  },
  {
    slug: '908-robes-and-jupes-femme-xl-orange-excellent',
    name: 'Robes & Jupes femme',
    description: 'Magnifique Robes & Jupes femme de la collection Lacoste. Excellent état. Matière premium en jersey.',
    price: 195,
    originalPrice: 278,
    condition: 'excellent',
    size: 'xl',
    color: 'orange',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-xl']
  },
  {
    slug: '909-sweatshirts-homme-xs-purple-very_good',
    name: 'Sweatshirts homme',
    description:
      'Magnifique Sweatshirts homme de la collection Lacoste. Très bon état. Matière premium en coton brossé.',
    price: 35,
    originalPrice: 44,
    condition: 'very_good',
    size: 'xs',
    color: 'purple',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-sweatshirts', 'homme-xs']
  },
  {
    slug: '910-sweatshirts-femme-s-white-new',
    name: 'Sweatshirts femme',
    description: 'Sweatshirts femme authentique Lacoste. État neuf. jersey lourd durable et confortable.',
    price: 102,
    originalPrice: 145,
    condition: 'new',
    size: 's',
    color: 'white',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-sweatshirts', 'femme-s']
  },
  {
    slug: '911-sweatshirts-femme-2xl-et-plus-blue-excellent',
    name: 'Sweatshirts femme',
    description: 'Sweatshirts femme élégant et intemporel. Excellent état. Fabriqué en molleton de haute qualité.',
    price: 22,
    originalPrice: 31,
    condition: 'excellent',
    size: '2xl-et-plus',
    color: 'blue',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-sweatshirts', 'femme-2xl-et-plus']
  },
  {
    slug: '912-t-shirts-homme-m-orange-very_good',
    name: 'T-shirts homme',
    description: 'Superbe T-shirts homme en coton. Très bon état. Coupe ajustée et confortable.',
    price: 140,
    originalPrice: 175,
    condition: 'very_good',
    size: 'm',
    color: 'orange',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-t-shirts', 'homme-m']
  },
  {
    slug: '913-t-shirts-femme-l-black-excellent',
    name: 'T-shirts femme',
    description: 'Magnifique T-shirts femme de la collection Lacoste. Excellent état. Matière premium en coton.',
    price: 92,
    originalPrice: 132,
    condition: 'excellent',
    size: 'l',
    color: 'black',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-l']
  },
  {
    slug: '914-robes-and-jupes-femme-xs-purple-good',
    name: 'Robes & Jupes femme',
    description: 'Magnifique Robes & Jupes femme de la collection Lacoste. Bon état. Matière premium en crêpe.',
    price: 101,
    originalPrice: 144,
    condition: 'good',
    size: 'xs',
    color: 'purple',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-xs']
  },
  {
    slug: '915-t-shirts-femme-xl-green-new',
    name: 'T-shirts femme',
    description: 'T-shirts femme élégant et intemporel. État neuf. Fabriqué en jersey fin de haute qualité.',
    price: 24,
    originalPrice: 34,
    condition: 'new',
    size: 'xl',
    color: 'green',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-xl']
  },
  {
    slug: '916-tops-and-chemises-femme-2xl-et-plus-grey-very_good',
    name: 'Tops & Chemises femme',
    description:
      'Magnifique Tops & Chemises femme de la collection Lacoste. Très bon état. Matière premium en viscose.',
    price: 138,
    originalPrice: 173,
    condition: 'very_good',
    size: '2xl-et-plus',
    color: 'grey',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-2xl-et-plus']
  },
  {
    slug: '917-chemises-homme-m-pink-very_good',
    name: 'Chemises homme',
    description: 'Chemises homme authentique Lacoste. Très bon état. lin durable et confortable.',
    price: 126,
    originalPrice: 158,
    condition: 'very_good',
    size: 'm',
    color: 'pink',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-chemises', 'homme-m']
  },
  {
    slug: '918-polos-femme-m-red-good',
    name: 'Polos femme',
    description: 'Polos femme authentique Lacoste. Bon état. coton bio durable et confortable.',
    price: 103,
    originalPrice: 147,
    condition: 'good',
    size: 'm',
    color: 'red',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-polos', 'femme-m']
  },
  {
    slug: '919-manteaux-and-vestes-homme-xl-pink-very_good',
    name: 'Manteaux & Vestes homme',
    description:
      'Magnifique Manteaux & Vestes homme de la collection Lacoste. Très bon état. Matière premium en coton imperméable.',
    price: 64,
    originalPrice: 80,
    condition: 'very_good',
    size: 'xl',
    color: 'pink',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-xl']
  },
  {
    slug: '920-maroquinerie-homme-l-orange-good',
    name: 'Maroquinerie homme',
    description: 'Superbe Maroquinerie homme en cuir. Bon état. Coupe ajustée et confortable.',
    price: 195,
    originalPrice: 279,
    condition: 'good',
    size: 'l',
    color: 'orange',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-maroquinerie', 'homme-l']
  },
  {
    slug: '921-pantalons-and-shorts-homme-m-grey-very_good',
    name: 'Pantalons & Shorts homme',
    description:
      'Pantalons & Shorts homme élégant et intemporel. Très bon état. Fabriqué en toile de coton de haute qualité.',
    price: 95,
    originalPrice: 119,
    condition: 'very_good',
    size: 'm',
    color: 'grey',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-m']
  },
  {
    slug: '922-polos-homme-l-green-new',
    name: 'Polos homme',
    description: 'Polos homme authentique Lacoste. État neuf. coton piqué durable et confortable.',
    price: 189,
    originalPrice: 270,
    condition: 'new',
    size: 'l',
    color: 'green',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-polos', 'homme-l']
  },
  {
    slug: '923-pullovers-homme-xl-brown-excellent',
    name: 'Pullovers homme',
    description: 'Pullovers homme authentique Lacoste. Excellent état. cachemire durable et confortable.',
    price: 92,
    originalPrice: 132,
    condition: 'excellent',
    size: 'xl',
    color: 'brown',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-pullovers', 'homme-xl']
  },
  {
    slug: '924-polos-homme-s-blue-very_good',
    name: 'Polos homme',
    description: 'Superbe Polos homme en coton bio. Très bon état. Coupe ajustée et confortable.',
    price: 80,
    originalPrice: 100,
    condition: 'very_good',
    size: 's',
    color: 'blue',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-polos', 'homme-s']
  },
  {
    slug: '925-pullovers-homme-s-blue-very_good',
    name: 'Pullovers homme',
    description: 'Pullovers homme élégant et intemporel. Très bon état. Fabriqué en cachemire de haute qualité.',
    price: 96,
    originalPrice: 120,
    condition: 'very_good',
    size: 's',
    color: 'blue',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-pullovers', 'homme-s']
  },
  {
    slug: '926-pullovers-femme-l-white-new',
    name: 'Pullovers femme',
    description: 'Magnifique Pullovers femme de la collection Lacoste. État neuf. Matière premium en cachemire.',
    price: 159,
    originalPrice: 227,
    condition: 'new',
    size: 'l',
    color: 'white',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-pullovers', 'femme-l']
  },
  {
    slug: '927-pullovers-homme-m-grey-very_good',
    name: 'Pullovers homme',
    description: 'Superbe Pullovers homme en laine mérinos. Très bon état. Coupe ajustée et confortable.',
    price: 81,
    originalPrice: 101,
    condition: 'very_good',
    size: 'm',
    color: 'grey',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-pullovers', 'homme-m']
  },
  {
    slug: '928-polos-homme-m-brown-good',
    name: 'Polos homme',
    description: 'Magnifique Polos homme de la collection Lacoste. Bon état. Matière premium en jersey de coton.',
    price: 193,
    originalPrice: 276,
    condition: 'good',
    size: 'm',
    color: 'brown',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-polos', 'homme-m']
  },
  {
    slug: '929-pantalons-and-shorts-femme-m-beige-very_good',
    name: 'Pantalons & Shorts femme',
    description:
      'Pantalons & Shorts femme élégant et intemporel. Très bon état. Fabriqué en toile de coton de haute qualité.',
    price: 219,
    originalPrice: 274,
    condition: 'very_good',
    size: 'm',
    color: 'beige',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-m']
  },
  {
    slug: '930-sweatshirts-femme-xl-orange-very_good',
    name: 'Sweatshirts femme',
    description:
      'Magnifique Sweatshirts femme de la collection Lacoste. Très bon état. Matière premium en jersey lourd.',
    price: 26,
    originalPrice: 32,
    condition: 'very_good',
    size: 'xl',
    color: 'orange',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-sweatshirts', 'femme-xl']
  },
  {
    slug: '931-pullovers-homme-s-white-good',
    name: 'Pullovers homme',
    description: 'Pullovers homme élégant et intemporel. Bon état. Fabriqué en laine mérinos de haute qualité.',
    price: 101,
    originalPrice: 144,
    condition: 'good',
    size: 's',
    color: 'white',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-pullovers', 'homme-s']
  },
  {
    slug: '932-pullovers-homme-l-yellow-new',
    name: 'Pullovers homme',
    description: 'Magnifique Pullovers homme de la collection Lacoste. État neuf. Matière premium en coton tricoté.',
    price: 89,
    originalPrice: 127,
    condition: 'new',
    size: 'l',
    color: 'yellow',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-pullovers', 'homme-l']
  },
  {
    slug: '933-pullovers-homme-xs-purple-excellent',
    name: 'Pullovers homme',
    description: 'Superbe Pullovers homme en laine mérinos. Excellent état. Coupe ajustée et confortable.',
    price: 55,
    originalPrice: 78,
    condition: 'excellent',
    size: 'xs',
    color: 'purple',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-pullovers', 'homme-xs']
  },
  {
    slug: '934-pantalons-and-shorts-femme-s-black-excellent',
    name: 'Pantalons & Shorts femme',
    description:
      'Pantalons & Shorts femme élégant et intemporel. Excellent état. Fabriqué en toile de coton de haute qualité.',
    price: 132,
    originalPrice: 188,
    condition: 'excellent',
    size: 's',
    color: 'black',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-s']
  },
  {
    slug: '935-robes-and-jupes-femme-xs-grey-excellent',
    name: 'Robes & Jupes femme',
    description: 'Robes & Jupes femme authentique Lacoste. Excellent état. crêpe durable et confortable.',
    price: 199,
    originalPrice: 284,
    condition: 'excellent',
    size: 'xs',
    color: 'grey',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-xs']
  },
  {
    slug: '936-pullovers-homme-m-white-new',
    name: 'Pullovers homme',
    description: 'Superbe Pullovers homme en cachemire. État neuf. Coupe ajustée et confortable.',
    price: 94,
    originalPrice: 134,
    condition: 'new',
    size: 'm',
    color: 'white',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-pullovers', 'homme-m']
  },
  {
    slug: '937-pantalons-and-shorts-femme-xs-black-excellent',
    name: 'Pantalons & Shorts femme',
    description:
      'Pantalons & Shorts femme élégant et intemporel. Excellent état. Fabriqué en toile de coton de haute qualité.',
    price: 132,
    originalPrice: 189,
    condition: 'excellent',
    size: 'xs',
    color: 'black',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-xs']
  },
  {
    slug: '938-pantalons-and-shorts-homme-s-black-very_good',
    name: 'Pantalons & Shorts homme',
    description:
      'Magnifique Pantalons & Shorts homme de la collection Lacoste. Très bon état. Matière premium en coton sergé.',
    price: 66,
    originalPrice: 83,
    condition: 'very_good',
    size: 's',
    color: 'black',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-s']
  },
  {
    slug: '939-pullovers-homme-xl-white-excellent',
    name: 'Pullovers homme',
    description: 'Superbe Pullovers homme en laine mérinos. Excellent état. Coupe ajustée et confortable.',
    price: 141,
    originalPrice: 201,
    condition: 'excellent',
    size: 'xl',
    color: 'white',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-pullovers', 'homme-xl']
  },
  {
    slug: '940-tops-and-chemises-femme-m-beige-excellent',
    name: 'Tops & Chemises femme',
    description: 'Tops & Chemises femme authentique Lacoste. Excellent état. popeline de coton durable et confortable.',
    price: 44,
    originalPrice: 63,
    condition: 'excellent',
    size: 'm',
    color: 'beige',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-m']
  },
  {
    slug: '941-tops-and-chemises-femme-2xl-et-plus-blue-good',
    name: 'Tops & Chemises femme',
    description: 'Tops & Chemises femme authentique Lacoste. Bon état. popeline de coton durable et confortable.',
    price: 27,
    originalPrice: 39,
    condition: 'good',
    size: '2xl-et-plus',
    color: 'blue',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-2xl-et-plus']
  },
  {
    slug: '942-t-shirts-homme-s-blue-very_good',
    name: 'T-shirts homme',
    description: 'T-shirts homme authentique Lacoste. Très bon état. coton durable et confortable.',
    price: 160,
    originalPrice: 200,
    condition: 'very_good',
    size: 's',
    color: 'blue',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-t-shirts', 'homme-s']
  },
  {
    slug: '943-t-shirts-femme-xs-beige-excellent',
    name: 'T-shirts femme',
    description: 'Superbe T-shirts femme en jersey fin. Excellent état. Coupe ajustée et confortable.',
    price: 93,
    originalPrice: 133,
    condition: 'excellent',
    size: 'xs',
    color: 'beige',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-xs']
  },
  {
    slug: '944-survetements-femme-s-red-good',
    name: 'Survêtements femme',
    description: 'Survêtements femme authentique Lacoste. Bon état. matière stretch durable et confortable.',
    price: 179,
    originalPrice: 255,
    condition: 'good',
    size: 's',
    color: 'red',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-survetements', 'femme-s']
  },
  {
    slug: '945-survetements-femme-xl-orange-new',
    name: 'Survêtements femme',
    description: 'Superbe Survêtements femme en polyester technique. État neuf. Coupe ajustée et confortable.',
    price: 88,
    originalPrice: 125,
    condition: 'new',
    size: 'xl',
    color: 'orange',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-survetements', 'femme-xl']
  },
  {
    slug: '946-survetements-femme-xs-green-excellent',
    name: 'Survêtements femme',
    description: 'Survêtements femme authentique Lacoste. Excellent état. polyester technique durable et confortable.',
    price: 158,
    originalPrice: 226,
    condition: 'excellent',
    size: 'xs',
    color: 'green',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-survetements', 'femme-xs']
  },
  {
    slug: '947-survetements-homme-m-green-new',
    name: 'Survêtements homme',
    description:
      'Magnifique Survêtements homme de la collection Lacoste. État neuf. Matière premium en polyester technique.',
    price: 78,
    originalPrice: 111,
    condition: 'new',
    size: 'm',
    color: 'green',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-survetements', 'homme-m']
  },
  {
    slug: '948-pullovers-homme-l-orange-very_good',
    name: 'Pullovers homme',
    description: 'Pullovers homme authentique Lacoste. Très bon état. cachemire durable et confortable.',
    price: 53,
    originalPrice: 66,
    condition: 'very_good',
    size: 'l',
    color: 'orange',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-pullovers', 'homme-l']
  },
  {
    slug: '949-chemises-femme-m-brown-excellent',
    name: 'Chemises femme',
    description: 'Magnifique Chemises femme de la collection Lacoste. Excellent état. Matière premium en oxford.',
    price: 187,
    originalPrice: 267,
    condition: 'excellent',
    size: 'm',
    color: 'brown',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-m']
  },
  {
    slug: '950-pantalons-and-shorts-homme-xs-yellow-excellent',
    name: 'Pantalons & Shorts homme',
    description:
      'Pantalons & Shorts homme élégant et intemporel. Excellent état. Fabriqué en gabardine de haute qualité.',
    price: 172,
    originalPrice: 245,
    condition: 'excellent',
    size: 'xs',
    color: 'yellow',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-xs']
  },
  {
    slug: '951-t-shirts-homme-l-red-new',
    name: 'T-shirts homme',
    description: 'T-shirts homme authentique Lacoste. État neuf. jersey fin durable et confortable.',
    price: 55,
    originalPrice: 78,
    condition: 'new',
    size: 'l',
    color: 'red',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-t-shirts', 'homme-l']
  },
  {
    slug: '952-chemises-homme-m-white-good',
    name: 'Chemises homme',
    description: 'Superbe Chemises homme en lin. Bon état. Coupe ajustée et confortable.',
    price: 73,
    originalPrice: 104,
    condition: 'good',
    size: 'm',
    color: 'white',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-chemises', 'homme-m']
  },
  {
    slug: '953-manteaux-and-vestes-homme-2xl-et-plus-yellow-new',
    name: 'Manteaux & Vestes homme',
    description: 'Magnifique Manteaux & Vestes homme de la collection Lacoste. État neuf. Matière premium en laine.',
    price: 142,
    originalPrice: 203,
    condition: 'new',
    size: '2xl-et-plus',
    color: 'yellow',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-2xl-et-plus']
  },
  {
    slug: '954-sweatshirts-femme-s-pink-good',
    name: 'Sweatshirts femme',
    description: 'Sweatshirts femme élégant et intemporel. Bon état. Fabriqué en molleton de haute qualité.',
    price: 113,
    originalPrice: 162,
    condition: 'good',
    size: 's',
    color: 'pink',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-sweatshirts', 'femme-s']
  },
  {
    slug: '955-pantalons-and-shorts-homme-xs-pink-excellent',
    name: 'Pantalons & Shorts homme',
    description:
      'Magnifique Pantalons & Shorts homme de la collection Lacoste. Excellent état. Matière premium en toile de coton.',
    price: 72,
    originalPrice: 103,
    condition: 'excellent',
    size: 'xs',
    color: 'pink',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-xs']
  },
  {
    slug: '956-tops-and-chemises-femme-l-yellow-good',
    name: 'Tops & Chemises femme',
    description:
      'Tops & Chemises femme élégant et intemporel. Bon état. Fabriqué en popeline de coton de haute qualité.',
    price: 176,
    originalPrice: 251,
    condition: 'good',
    size: 'l',
    color: 'yellow',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-l']
  },
  {
    slug: '957-maroquinerie-femme-m-beige-very_good',
    name: 'Maroquinerie femme',
    description: 'Maroquinerie femme élégant et intemporel. Très bon état. Fabriqué en cuir de haute qualité.',
    price: 161,
    originalPrice: 201,
    condition: 'very_good',
    size: 'm',
    color: 'beige',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-m']
  },
  {
    slug: '958-robes-and-jupes-femme-2xl-et-plus-yellow-new',
    name: 'Robes & Jupes femme',
    description: 'Magnifique Robes & Jupes femme de la collection Lacoste. État neuf. Matière premium en jersey.',
    price: 169,
    originalPrice: 241,
    condition: 'new',
    size: '2xl-et-plus',
    color: 'yellow',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-2xl-et-plus']
  },
  {
    slug: '959-pantalons-and-shorts-homme-2xl-et-plus-black-excellent',
    name: 'Pantalons & Shorts homme',
    description:
      'Pantalons & Shorts homme élégant et intemporel. Excellent état. Fabriqué en coton sergé de haute qualité.',
    price: 71,
    originalPrice: 101,
    condition: 'excellent',
    size: '2xl-et-plus',
    color: 'black',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-2xl-et-plus']
  },
  {
    slug: '960-chemises-homme-m-beige-new',
    name: 'Chemises homme',
    description: 'Superbe Chemises homme en popeline. État neuf. Coupe ajustée et confortable.',
    price: 28,
    originalPrice: 40,
    condition: 'new',
    size: 'm',
    color: 'beige',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-chemises', 'homme-m']
  },
  {
    slug: '961-t-shirts-homme-l-blue-new',
    name: 'T-shirts homme',
    description: 'Magnifique T-shirts homme de la collection Lacoste. État neuf. Matière premium en coton.',
    price: 190,
    originalPrice: 271,
    condition: 'new',
    size: 'l',
    color: 'blue',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-t-shirts', 'homme-l']
  },
  {
    slug: '962-survetements-homme-xl-brown-new',
    name: 'Survêtements homme',
    description: 'Survêtements homme authentique Lacoste. État neuf. polyester technique durable et confortable.',
    price: 56,
    originalPrice: 80,
    condition: 'new',
    size: 'xl',
    color: 'brown',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-survetements', 'homme-xl']
  },
  {
    slug: '963-robes-and-jupes-femme-xs-yellow-good',
    name: 'Robes & Jupes femme',
    description: 'Robes & Jupes femme authentique Lacoste. Bon état. crêpe durable et confortable.',
    price: 139,
    originalPrice: 199,
    condition: 'good',
    size: 'xs',
    color: 'yellow',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-xs']
  },
  {
    slug: '964-manteaux-and-vestes-femme-m-red-excellent',
    name: 'Manteaux & Vestes femme',
    description:
      'Magnifique Manteaux & Vestes femme de la collection Lacoste. Excellent état. Matière premium en polyester recyclé.',
    price: 134,
    originalPrice: 192,
    condition: 'excellent',
    size: 'm',
    color: 'red',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-m']
  },
  {
    slug: '965-sweatshirts-homme-xs-white-new',
    name: 'Sweatshirts homme',
    description: 'Sweatshirts homme authentique Lacoste. État neuf. coton brossé durable et confortable.',
    price: 136,
    originalPrice: 194,
    condition: 'new',
    size: 'xs',
    color: 'white',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-sweatshirts', 'homme-xs']
  },
  {
    slug: '966-maroquinerie-femme-l-black-good',
    name: 'Maroquinerie femme',
    description: 'Superbe Maroquinerie femme en toile enduite. Bon état. Coupe ajustée et confortable.',
    price: 76,
    originalPrice: 108,
    condition: 'good',
    size: 'l',
    color: 'black',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-l']
  },
  {
    slug: '967-t-shirts-homme-xl-black-very_good',
    name: 'T-shirts homme',
    description: 'Superbe T-shirts homme en coton. Très bon état. Coupe ajustée et confortable.',
    price: 165,
    originalPrice: 206,
    condition: 'very_good',
    size: 'xl',
    color: 'black',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-t-shirts', 'homme-xl']
  },
  {
    slug: '968-tops-and-chemises-femme-xl-beige-very_good',
    name: 'Tops & Chemises femme',
    description:
      'Magnifique Tops & Chemises femme de la collection Lacoste. Très bon état. Matière premium en popeline de coton.',
    price: 222,
    originalPrice: 278,
    condition: 'very_good',
    size: 'xl',
    color: 'beige',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-xl']
  },
  {
    slug: '969-survetements-femme-2xl-et-plus-purple-good',
    name: 'Survêtements femme',
    description: 'Survêtements femme élégant et intemporel. Bon état. Fabriqué en coton molletonné de haute qualité.',
    price: 48,
    originalPrice: 68,
    condition: 'good',
    size: '2xl-et-plus',
    color: 'purple',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-survetements', 'femme-2xl-et-plus']
  },
  {
    slug: '970-chemises-femme-m-pink-new',
    name: 'Chemises femme',
    description: 'Superbe Chemises femme en oxford. État neuf. Coupe ajustée et confortable.',
    price: 106,
    originalPrice: 151,
    condition: 'new',
    size: 'm',
    color: 'pink',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-m']
  },
  {
    slug: '971-t-shirts-homme-xs-green-new',
    name: 'T-shirts homme',
    description: 'T-shirts homme authentique Lacoste. État neuf. jersey fin durable et confortable.',
    price: 171,
    originalPrice: 244,
    condition: 'new',
    size: 'xs',
    color: 'green',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-t-shirts', 'homme-xs']
  },
  {
    slug: '972-polos-femme-xs-red-very_good',
    name: 'Polos femme',
    description: 'Polos femme authentique Lacoste. Très bon état. jersey de coton durable et confortable.',
    price: 71,
    originalPrice: 89,
    condition: 'very_good',
    size: 'xs',
    color: 'red',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-polos', 'femme-xs']
  },
  {
    slug: '973-polos-homme-2xl-et-plus-yellow-very_good',
    name: 'Polos homme',
    description: 'Polos homme authentique Lacoste. Très bon état. coton piqué durable et confortable.',
    price: 213,
    originalPrice: 266,
    condition: 'very_good',
    size: '2xl-et-plus',
    color: 'yellow',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-polos', 'homme-2xl-et-plus']
  },
  {
    slug: '974-manteaux-and-vestes-femme-m-red-excellent',
    name: 'Manteaux & Vestes femme',
    description:
      'Magnifique Manteaux & Vestes femme de la collection Lacoste. Excellent état. Matière premium en polyester recyclé.',
    price: 182,
    originalPrice: 260,
    condition: 'excellent',
    size: 'm',
    color: 'red',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-m']
  },
  {
    slug: '975-chemises-homme-xl-red-new',
    name: 'Chemises homme',
    description: 'Superbe Chemises homme en popeline. État neuf. Coupe ajustée et confortable.',
    price: 134,
    originalPrice: 191,
    condition: 'new',
    size: 'xl',
    color: 'red',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-chemises', 'homme-xl']
  },
  {
    slug: '976-maroquinerie-homme-s-purple-excellent',
    name: 'Maroquinerie homme',
    description: 'Superbe Maroquinerie homme en cuir. Excellent état. Coupe ajustée et confortable.',
    price: 195,
    originalPrice: 278,
    condition: 'excellent',
    size: 's',
    color: 'purple',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-maroquinerie', 'homme-s']
  },
  {
    slug: '977-sweatshirts-homme-xs-blue-new',
    name: 'Sweatshirts homme',
    description: 'Sweatshirts homme authentique Lacoste. État neuf. molleton durable et confortable.',
    price: 127,
    originalPrice: 182,
    condition: 'new',
    size: 'xs',
    color: 'blue',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-sweatshirts', 'homme-xs']
  },
  {
    slug: '978-survetements-femme-xl-purple-new',
    name: 'Survêtements femme',
    description: 'Survêtements femme authentique Lacoste. État neuf. polyester technique durable et confortable.',
    price: 155,
    originalPrice: 222,
    condition: 'new',
    size: 'xl',
    color: 'purple',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-survetements', 'femme-xl']
  },
  {
    slug: '979-pantalons-and-shorts-homme-xs-grey-good',
    name: 'Pantalons & Shorts homme',
    description:
      'Pantalons & Shorts homme élégant et intemporel. Bon état. Fabriqué en toile de coton de haute qualité.',
    price: 198,
    originalPrice: 283,
    condition: 'good',
    size: 'xs',
    color: 'grey',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-xs']
  },
  {
    slug: '980-maroquinerie-homme-2xl-et-plus-grey-very_good',
    name: 'Maroquinerie homme',
    description: 'Maroquinerie homme authentique Lacoste. Très bon état. nylon durable et confortable.',
    price: 152,
    originalPrice: 190,
    condition: 'very_good',
    size: '2xl-et-plus',
    color: 'grey',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-maroquinerie', 'homme-2xl-et-plus']
  },
  {
    slug: '981-pullovers-femme-2xl-et-plus-orange-good',
    name: 'Pullovers femme',
    description: 'Pullovers femme élégant et intemporel. Bon état. Fabriqué en coton tricoté de haute qualité.',
    price: 52,
    originalPrice: 74,
    condition: 'good',
    size: '2xl-et-plus',
    color: 'orange',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-pullovers', 'femme-2xl-et-plus']
  },
  {
    slug: '982-polos-homme-s-white-very_good',
    name: 'Polos homme',
    description: 'Magnifique Polos homme de la collection Lacoste. Très bon état. Matière premium en coton bio.',
    price: 54,
    originalPrice: 67,
    condition: 'very_good',
    size: 's',
    color: 'white',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-polos', 'homme-s']
  },
  {
    slug: '983-t-shirts-homme-m-purple-excellent',
    name: 'T-shirts homme',
    description: 'T-shirts homme authentique Lacoste. Excellent état. coton organique durable et confortable.',
    price: 39,
    originalPrice: 55,
    condition: 'excellent',
    size: 'm',
    color: 'purple',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-t-shirts', 'homme-m']
  },
  {
    slug: '984-polos-femme-2xl-et-plus-green-very_good',
    name: 'Polos femme',
    description: 'Polos femme authentique Lacoste. Très bon état. coton bio durable et confortable.',
    price: 182,
    originalPrice: 228,
    condition: 'very_good',
    size: '2xl-et-plus',
    color: 'green',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-polos', 'femme-2xl-et-plus']
  },
  {
    slug: '985-sweatshirts-femme-xs-green-good',
    name: 'Sweatshirts femme',
    description: 'Sweatshirts femme élégant et intemporel. Bon état. Fabriqué en coton brossé de haute qualité.',
    price: 202,
    originalPrice: 289,
    condition: 'good',
    size: 'xs',
    color: 'green',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-sweatshirts', 'femme-xs']
  },
  {
    slug: '986-tops-and-chemises-femme-l-white-excellent',
    name: 'Tops & Chemises femme',
    description:
      'Magnifique Tops & Chemises femme de la collection Lacoste. Excellent état. Matière premium en popeline de coton.',
    price: 33,
    originalPrice: 47,
    condition: 'excellent',
    size: 'l',
    color: 'white',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-l']
  },
  {
    slug: '987-pantalons-and-shorts-femme-2xl-et-plus-orange-new',
    name: 'Pantalons & Shorts femme',
    description: 'Pantalons & Shorts femme authentique Lacoste. État neuf. gabardine durable et confortable.',
    price: 172,
    originalPrice: 246,
    condition: 'new',
    size: '2xl-et-plus',
    color: 'orange',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-2xl-et-plus']
  },
  {
    slug: '988-sweatshirts-homme-s-red-good',
    name: 'Sweatshirts homme',
    description: 'Sweatshirts homme élégant et intemporel. Bon état. Fabriqué en coton brossé de haute qualité.',
    price: 47,
    originalPrice: 67,
    condition: 'good',
    size: 's',
    color: 'red',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-sweatshirts', 'homme-s']
  },
  {
    slug: '989-polos-femme-m-blue-good',
    name: 'Polos femme',
    description: 'Polos femme authentique Lacoste. Bon état. coton piqué durable et confortable.',
    price: 135,
    originalPrice: 193,
    condition: 'good',
    size: 'm',
    color: 'blue',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-polos', 'femme-m']
  },
  {
    slug: '990-polos-femme-2xl-et-plus-pink-good',
    name: 'Polos femme',
    description: 'Polos femme authentique Lacoste. Bon état. jersey de coton durable et confortable.',
    price: 36,
    originalPrice: 52,
    condition: 'good',
    size: '2xl-et-plus',
    color: 'pink',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-polos', 'femme-2xl-et-plus']
  },
  {
    slug: '991-t-shirts-homme-s-red-new',
    name: 'T-shirts homme',
    description: 'Superbe T-shirts homme en jersey fin. État neuf. Coupe ajustée et confortable.',
    price: 203,
    originalPrice: 290,
    condition: 'new',
    size: 's',
    color: 'red',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-t-shirts', 'homme-s']
  },
  {
    slug: '992-polos-femme-xl-orange-new',
    name: 'Polos femme',
    description: 'Polos femme élégant et intemporel. État neuf. Fabriqué en coton bio de haute qualité.',
    price: 162,
    originalPrice: 231,
    condition: 'new',
    size: 'xl',
    color: 'orange',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-polos', 'femme-xl']
  },
  {
    slug: '993-t-shirts-femme-xs-beige-excellent',
    name: 'T-shirts femme',
    description: 'T-shirts femme élégant et intemporel. Excellent état. Fabriqué en coton organique de haute qualité.',
    price: 199,
    originalPrice: 284,
    condition: 'excellent',
    size: 'xs',
    color: 'beige',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['femme', 'femme-xs']
  },
  {
    slug: '994-manteaux-and-vestes-homme-xs-purple-new',
    name: 'Manteaux & Vestes homme',
    description: 'Magnifique Manteaux & Vestes homme de la collection Lacoste. État neuf. Matière premium en laine.',
    price: 109,
    originalPrice: 156,
    condition: 'new',
    size: 'xs',
    color: 'purple',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-xs']
  },
  {
    slug: '995-survetements-homme-xl-brown-excellent',
    name: 'Survêtements homme',
    description: 'Survêtements homme authentique Lacoste. Excellent état. polyester technique durable et confortable.',
    price: 134,
    originalPrice: 191,
    condition: 'excellent',
    size: 'xl',
    color: 'brown',
    images: [
      '/products/1/image_1.jpg',
      '/products/1/image_2.jpg',
      '/products/1/image_3.jpg',
      '/products/1/image_4.jpg',
      '/products/1/image_5.jpg',
      '/products/1/image_6.jpg'
    ],
    collections: ['homme', 'homme-survetements', 'homme-xl']
  },
  {
    slug: '996-maroquinerie-femme-m-red-excellent',
    name: 'Maroquinerie femme',
    description: 'Superbe Maroquinerie femme en cuir. Excellent état. Coupe ajustée et confortable.',
    price: 146,
    originalPrice: 209,
    condition: 'excellent',
    size: 'm',
    color: 'red',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-m']
  },
  {
    slug: '997-survetements-homme-s-black-new',
    name: 'Survêtements homme',
    description: 'Survêtements homme élégant et intemporel. État neuf. Fabriqué en coton molletonné de haute qualité.',
    price: 210,
    originalPrice: 300,
    condition: 'new',
    size: 's',
    color: 'black',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-survetements', 'homme-s']
  },
  {
    slug: '998-t-shirts-homme-l-white-new',
    name: 'T-shirts homme',
    description: 'Superbe T-shirts homme en coton. État neuf. Coupe ajustée et confortable.',
    price: 97,
    originalPrice: 139,
    condition: 'new',
    size: 'l',
    color: 'white',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-t-shirts', 'homme-l']
  },
  {
    slug: '999-pantalons-and-shorts-homme-l-yellow-good',
    name: 'Pantalons & Shorts homme',
    description: 'Superbe Pantalons & Shorts homme en gabardine. Bon état. Coupe ajustée et confortable.',
    price: 122,
    originalPrice: 175,
    condition: 'good',
    size: 'l',
    color: 'yellow',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['homme', 'homme-l']
  },
  {
    slug: '1000-pullovers-femme-m-white-new',
    name: 'Pullovers femme',
    description: 'Superbe Pullovers femme en coton tricoté. État neuf. Coupe ajustée et confortable.',
    price: 174,
    originalPrice: 248,
    condition: 'new',
    size: 'm',
    color: 'white',
    images: [
      '/products/2/image_1.jpg',
      '/products/2/image_2.jpg',
      '/products/2/image_3.jpg',
      '/products/2/image_4.jpg',
      '/products/2/image_5.jpg',
      '/products/2/image_6.jpg'
    ],
    collections: ['femme', 'femme-pullovers', 'femme-m']
  }
]
