export const filters = {
  type: '',
  condition: '',
  size: '',
  color: '',
  sort: ''
}

export const filterOptions = {
  type: 'Type',
  condition: 'État',
  size: 'Taille',
  color: 'Couleur',
  sort: 'Trier par'
}

export const types: Record<string, string> = {
  polos: 'Polos',
  sweatshirts: 'Sweatshirts',
  survetements: 'Survêtements',
  manteaux_vestes: 'Manteaux & Vestes',
  t_shirts: 'T-shirts',
  pullovers: 'Pullovers',
  pantalons_shorts: 'Pantalons & Shorts',
  chemises: 'Chemises',
  maroquinerie: 'Maroquinerie',
  robes_jupes: 'Robes & Jupes',
  tops_chemises: 'Tops & Chemises'
}

export const conditions: Record<string, string> = {
  new: 'État neuf',
  excellent: 'Excellent état',
  very_good: 'Très bon état',
  good: 'Bon état'
}

export const sizes: Record<string, string> = {
  xs: 'XS',
  s: 'S',
  m: 'M',
  l: 'L',
  xl: 'XL',
  xxl_and_more: '2XL et plus'
}

export const colors: Record<string, string> = {
  beige: 'Beige',
  white: 'Blanc',
  blue: 'Bleu',
  grey: 'Gris',
  yellow: 'Jaune',
  brown: 'Marron',
  black: 'Noir',
  orange: 'Orange',
  pink: 'Rose',
  red: 'Rouge',
  green: 'Vert',
  purple: 'Violet'
}

export const sorts: Record<string, string> = {
  'name-asc': 'Nom (A-Z)',
  'name-desc': 'Nom (Z-A)',
  'price-asc': 'Prix croissant',
  'price-desc': 'Prix décroissant'
}
