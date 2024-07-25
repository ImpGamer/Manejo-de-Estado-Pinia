<template>
    <div>
        <h2>{{ titleForm }}</h2>
        <form @submit.prevent="newProduct()">
            <div>
                <label>Titulo
                    <input v-model="title" type="text" name="title">
                </label>
            </div>
            <div>
                <label>Descripcion
                    <textarea v-model="description" name="description" rows="3" cols="20"></textarea>
                </label>
            </div>
            <div>
                <label>Precio
                    <input v-model="price" type="number" name="price">
                </label>
            </div>
            <div>
                <label>Costo
                    <input v-model="cost" type="number" name="cost">
                </label>
            </div>
            <button>Guardar</button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import ProductService from '@/service/ProductService';
import type { Product } from '@/interfaces/Product';
import { useRouter } from 'vue-router';

const titleForm = ref<string>("Crear Producto")
const title = ref<string>('')
const description = ref<string>('')
const price = ref<number>(0)
const cost = ref<number>(0)
const router = useRouter()

onMounted(() => {

})

const newProduct = async () => {
    const form: Product = {
        id: uuidv4(),
        title: title.value,
        description: description.value,
        price: price.value,
        cost: cost.value
    }

    const res = await ProductService.createProduct(form)
    if (res) {
        router.push('/')
    }
}


</script>

<style scoped></style>