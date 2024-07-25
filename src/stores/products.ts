import type { Product } from '@/interfaces/Product'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductStore = defineStore('products', () => {
  //Obtener los productos del localStorage
  const products = ref<Product[]>(JSON.parse(localStorage.getItem('products') as string))

  //Funcion actions
  function setProducts(newProducts: Product[]) {
    /*Almacenamiento de datos en el localStorage
    El localStorage solamente almacena datos de tipo string, por eso la conversion*/
    localStorage.setItem('products', JSON.stringify(newProducts))
    products.value = newProducts
  }

  return {
    products,
    setProducts
  }
})
