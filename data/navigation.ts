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
        items: [
          {
            title: 'Nouveautés',
            href: '/collections/homme-new'
          }
        ]
      },
      {
        title: 'Catégories',
        href: '/collections/homme',
        items: [
          {
            title: 'Polos',
            href: '/collections/homme-s'
          },
          {
            title: 'Sweatshirts',
            href: '/collections/homme-s'
          },
          {
            title: 'Survêtements',
            href: '/collections/homme-s'
          },
          {
            title: 'Manteaux & Vestes',
            href: '/collections/homme-s'
          },
          {
            title: 'T-shirts',
            href: '/collections/homme-s'
          },
          {
            title: 'Pullovers',
            href: '/collections/homme-s'
          },
          {
            title: 'Pantalons & Shorts',
            href: '/collections/homme-s'
          },
          {
            title: 'Chemises',
            href: '/collections/homme-s'
          },
          {
            title: 'Maroquinerie',
            href: '/collections/homme-s'
          }
        ]
      },
      {
        title: 'Taille',
        items: [
          {
            title: 'XS',
            href: '/collections/homme-xs'
          },
          {
            title: 'S',
            href: '/collections/homme-s'
          },
          {
            title: 'M',
            href: '/collections/homme-m'
          },
          {
            title: 'L',
            href: '/collections/homme-l'
          },
          {
            title: 'XL',
            href: '/collections/homme-xl'
          },
          {
            title: '2XL et plus',
            href: '/collections/homme-2xl-and-more'
          }
        ]
      }
    ]
  },
  {
    title: 'Femme',
    href: '/collections/femme',
    items: [
      {
        title: 'Univers',
        items: [
          {
            title: 'Robe',
            href: '/collections/femme-robe'
          },
          {
            title: 'Short',
            href: '/collections/femme-short'
          },
          {
            title: 'Pandalon',
            href: '/collections/femme-pandalon'
          }
        ]
      },
      {
        title: 'Taille',
        items: [
          {
            title: 'S',
            href: '/collections/femme-s'
          },
          {
            title: 'M',
            href: '/collections/femme-m'
          },
          {
            title: 'L',
            href: '/collections/femme-l'
          },
          {
            title: 'XL',
            href: '/collections/femme-xl'
          }
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
