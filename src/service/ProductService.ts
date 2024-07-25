import api from '@/api/api'
import type { Product } from '@/interfaces/Product'

const getProducts = async (): Promise<Product[]> => {
  const { data } = await api.get('/products')
  return data
}

const getProductById = async (id: string): Promise<Product> => {
  const { data } = await api.get(`/products/${id}}`)
  return data
}

const createProduct = async (product: Product): Promise<Product> => {
  const { data } = await api.post(`/products`, product)
  return data
}
const deleteProduct = async (id: string): Promise<Product> => {
  const { data } = await api.delete(`/products/${id}}`)
  return data
}
const updateProduct = async (id: string, product: Product): Promise<Product> => {
  const { data } = await api.put(`/products/${id}}`, product)
  return data
}

export default {
  getProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct
}
