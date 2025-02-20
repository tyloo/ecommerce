import { Concept } from '@/components/concept'
import { Hero } from '@/components/hero'

export default async function Home() {
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
        cta={{ text: 'Découvrir la démarche de Lacoste Seconde main', href: '#' }}
      />
      <div>Nouveautés</div>
      <div>Sélection par taille</div>
      <div>Grid</div>
      <div>All categories</div>
      <div>Newsletter</div>
    </main>
  )
}
