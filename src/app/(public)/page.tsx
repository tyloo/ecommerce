import { CollectionCarousel } from '@/components/collection-carousel'
import { Concept } from '@/components/concept'
import { Hero } from '@/components/hero'
import { HomeGrid } from '@/components/home-grid'
import { ProductCarousel } from '@/components/product-carousel'
import { products } from '@/data/products'

export default async function Home() {
  const menProducts = products.filter((product) => product.gender === 'homme')
  const womenProducts = products.filter((product) => product.gender === 'femme')

  return (
    <main>
      <Hero
        backgroundImage='/home-banner-1.webp'
        title='Lacoste seconde main'
        subtitle={`La plateforme officielle d'achat et de revente Lacoste`}
        primaryCTA={{ text: 'Vendre', href: '#' }}
        secondaryCTA={{ text: 'Acheter', href: '#' }}
      />
      <Concept
        title={`L'élégance intemporelle se transmet`}
        subtitle={`Parce que Lacoste est une histoire d'héritage, la maison française prolonge le cycle de vie de ses pièces avec Lacoste seconde main. Cette nouvelle plateforme authentifie et fait revivre les incontournables Lacoste issus des saisons précédentes. Pour réunir une communauté autour d'un vestiaire de seconde main de qualité. Pour valoriser les archives de la maison Lacoste et le savoir-faire français.`}
        cta={{ text: 'Découvrir la démarche', href: '#' }}
      />
      <ProductCarousel
        title='Les nouveautés de la semaine'
        products={{ homme: menProducts, femme: womenProducts }}
        callToAction={{ label: 'Découvrir', href: '#' }}
      />
      <CollectionCarousel title='Les sélections par taille' type='size' />
      <HomeGrid />
      <CollectionCarousel title='Toutes les catégories' type='type' />
    </main>
  )
}
