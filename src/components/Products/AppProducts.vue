<template>
    <div>
        <ul>
            <li v-for="product in products" :key="product.id">
                {{ product.title }}
                <button @click="deleteProduct(product.id)">Eliminar Producto</button>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import ProductService from '@/service/ProductService';
import { useProductStore } from '@/stores/products';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const products_store = useProductStore()
const router = useRouter()

const { products } = storeToRefs(products_store)
onMounted(async () => {
    await fetchProducts()
})

const fetchProducts = async () => {
    const ps = await ProductService.getProducts()
    products_store.setProducts(ps)
}

async function deleteProduct(id: string) {
    const data = await ProductService.deleteProduct(id)
    console.log('Eliminando producto...')
    if (data) {
        router.push('/product')
    }
}


</script>

<style scoped></style>