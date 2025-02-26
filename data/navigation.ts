import { collections } from '@/data/collections'

type NavigationItem = {
  title: string
  href?: string
  items?: NavigationItem[]
}

export const navigation: NavigationItem[] = [
  {
    title: 'Homme',
    href: '/collections/homme',
    items: [
      {
        title: 'Sélections',
        items: [{ title: collections['homme-nouveautes'].name, href: collections['homme-nouveautes'].href }]
      },
      {
        title: 'Catégories',
        href: '/collections/homme',
        items: [
          { title: collections['homme-polos'].name, href: collections['homme-polos'].href },
          { title: collections['homme-sweatshirts'].name, href: collections['homme-sweatshirts'].href },
          { title: collections['homme-survetements'].name, href: collections['homme-survetements'].href },
          { title: collections['homme-manteaux-vestes'].name, href: collections['homme-manteaux-vestes'].href },
          { title: collections['homme-t-shirts'].name, href: collections['homme-t-shirts'].href },
          { title: collections['homme-pullovers'].name, href: collections['homme-pullovers'].href },
          { title: collections['homme-pantalons-shorts'].name, href: collections['homme-pantalons-shorts'].href },
          { title: collections['homme-chemises'].name, href: collections['homme-chemises'].href },
          { title: collections['homme-maroquinerie'].name, href: collections['homme-maroquinerie'].href }
        ]
      },
      {
        title: 'Taille',
        items: [
          { title: collections['homme-xs'].name, href: collections['homme-xs'].href },
          { title: collections['homme-s'].name, href: collections['homme-s'].href },
          { title: collections['homme-m'].name, href: collections['homme-m'].href },
          { title: collections['homme-l'].name, href: collections['homme-l'].href },
          { title: collections['homme-xl'].name, href: collections['homme-xl'].href },
          { title: collections['homme-2xl-et-plus'].name, href: collections['homme-2xl-et-plus'].href }
        ]
      }
    ]
  },
  {
    title: 'Femme',
    href: '/collections/femme',
    items: [
      {
        title: 'Sélections',
        items: [{ title: collections['femme-nouveautes'].name, href: collections['femme-nouveautes'].href }]
      },
      {
        title: 'Catégories',
        href: '/collections/femme',
        items: [
          { title: collections['femme-polos'].name, href: collections['femme-polos'].href },
          { title: collections['femme-sweatshirts'].name, href: collections['femme-sweatshirts'].href },
          { title: collections['femme-robes-jupes'].name, href: collections['femme-robes-jupes'].href },
          { title: collections['femme-manteaux-et-vestes'].name, href: collections['femme-manteaux-et-vestes'].href },
          { title: collections['femme-pullovers'].name, href: collections['femme-pullovers'].href },
          { title: collections['femme-pantalons-shorts'].name, href: collections['femme-pantalons-shorts'].href },
          { title: collections['femme-survetements'].name, href: collections['femme-survetements'].href },
          { title: collections['femme-tops-chemises'].name, href: collections['femme-tops-chemises'].href }
        ]
      },
      {
        title: 'Taille',
        items: [
          { title: collections['femme-xs'].name, href: collections['femme-xs'].href },
          { title: collections['femme-s'].name, href: collections['femme-s'].href },
          { title: collections['femme-m'].name, href: collections['femme-m'].href },
          { title: collections['femme-l'].name, href: collections['femme-l'].href },
          { title: collections['femme-xl'].name, href: collections['femme-xl'].href },
          { title: collections['femme-2xl-et-plus'].name, href: collections['femme-2xl-et-plus'].href }
        ]
      }
    ]
  },
  {
    title: 'Notre démarche',
    href: '/concept'
  },
  {
    title: 'Vendre',
    href: '/sell'
  }
]
