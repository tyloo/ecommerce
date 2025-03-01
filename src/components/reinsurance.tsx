import Image from 'next/image'

type ReinsuranceProps = {
  title: string
  imageUrl: string
  imageAlt: string
  imageWidth: number
  imageHeight: number
}

const reinsurances: ReinsuranceProps[] = [
  {
    title: 'Articles authentifiés et nettoyés en France par Lacoste',
    imageUrl: '/icons/reinsurrance-1.webp',
    imageAlt: 'Reinsurance 1',
    imageWidth: 48,
    imageHeight: 48
  },
  {
    title: 'Retours sous 14 jours',
    imageUrl: '/icons/reinsurrance-2.webp',
    imageAlt: 'Reinsurance 2',
    imageWidth: 48,
    imageHeight: 48
  },
  {
    title: "Livraison gratuite à partir de 150€ d'achat",
    imageUrl: '/icons/reinsurrance-3.webp',
    imageAlt: 'Reinsurance 3',
    imageWidth: 48,
    imageHeight: 48
  },
  {
    title: 'Paiement 100% sécurisé',
    imageUrl: '/icons/reinsurrance-4.webp',
    imageAlt: 'Reinsurance 4',
    imageWidth: 48,
    imageHeight: 48
  }
]

export function Reinsurance() {
  return (
    <div className='container grid min-h-20 grid-cols-1 gap-8 p-12 md:grid-cols-2 lg:grid-cols-4'>
      {reinsurances.map((reinsurance, index) => (
        <div key={`reinsurance-${index}`} className='flex flex-col items-center gap-4 text-center'>
          <Image
            src={reinsurance.imageUrl}
            alt={reinsurance.imageAlt}
            width={reinsurance.imageWidth}
            height={reinsurance.imageHeight}
          />
          <div className='text-sm font-medium'>{reinsurance.title}</div>
        </div>
      ))}
    </div>
  )
}
