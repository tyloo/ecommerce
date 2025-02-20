import { Hero } from '@/components/hero'

export default async function Home() {
  return (
    <main>
      <Hero
        backgroundImage='/home-banner-1.webp'
        title='Lacoste seconde main'
        subtitle='La plateforme officielle d’achat et de revente Lacoste'
        primaryCTA={{ text: 'Vendre', href: '#' }}
        secondaryCTA={{ text: 'Acheter', href: '#' }}
      />
      <div>Concept</div>
      <div>Nouveautés</div>
      <div>Sélection par taille</div>
      <div>Grid</div>
      <div>All categories</div>
      <div>Newsletter</div>
    </main>
  )
}
