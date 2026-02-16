import { MetadataRoute } from 'next'

async function getProducts() {
  const res = await fetch(
    'https://apitak.ir/apitak/get_products.php',
    { cache: 'no-store' }
  )

  const products = await res.json()
  return Array.isArray(products) ? products : []
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await getProducts()

  const productUrls = products.map((product: any) => ({
    url: `https://apika.ir/ProductPage/${encodeURIComponent(product.title)}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.9,
  }))

  return [
    {
      url: 'https://apika.ir',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...productUrls,
  ]
}
