import { products } from '@/data/products'
import { NextRequest, NextResponse } from 'next/server'

const LIMIT = 20

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const type = searchParams.get('type')
  const condition = searchParams.get('condition')
  const size = searchParams.get('size')
  const color = searchParams.get('color')
  const sort = searchParams.get('sort')
  const gender = searchParams.get('gender')
  const category = searchParams.get('category')
  const page = parseInt(searchParams.get('page') || '1')

  let filteredProducts = [...products]

  // Apply filters
  if (gender) {
    filteredProducts = filteredProducts.filter((product) => product.gender.toLowerCase() === gender.toLowerCase())
  }

  if (category) {
    filteredProducts = filteredProducts.filter((product) => product.name.toLowerCase().includes(category.toLowerCase()))
  }

  if (type) {
    filteredProducts = filteredProducts.filter((product) => product.name.toLowerCase().includes(type.toLowerCase()))
  }

  if (condition) {
    filteredProducts = filteredProducts.filter((product) => product.condition.toLowerCase() === condition.toLowerCase())
  }

  if (size) {
    filteredProducts = filteredProducts.filter((product) => product.size.toLowerCase() === size.toLowerCase())
  }

  if (color) {
    filteredProducts = filteredProducts.filter((product) => product.color.toLowerCase() === color.toLowerCase())
  }

  // Apply sorting
  if (sort) {
    switch (sort) {
      case 'price-asc':
        filteredProducts.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        filteredProducts.sort((a, b) => b.price - a.price)
        break
      case 'name-asc':
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name))
        break
      case 'name-desc':
        filteredProducts.sort((a, b) => b.name.localeCompare(a.name))
        break
    }
  }

  // Calculate pagination
  const totalItems = filteredProducts.length
  const totalPages = Math.ceil(totalItems / LIMIT)
  const startIndex = (page - 1) * LIMIT
  const endIndex = startIndex + LIMIT
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex)

  return NextResponse.json({
    products: paginatedProducts,
    pagination: {
      page,
      totalItems,
      totalPages
    }
  })
}
