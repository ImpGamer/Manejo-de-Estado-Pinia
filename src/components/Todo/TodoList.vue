<template>
    <div>
        <div v-if="isEmpty">
            <p>No se encuentra nada en la lista de pendientes.</p>
        </div>
        <div v-else>
            <ul>
                <div v-for="(item, index) in todoList" :key="item.id">
                    <li>
                        {{ item.description }}
                        <span style="margin-left: 25px;">
                            <input :disabled="item.isCompleted" type="checkbox" @change="completeTask(index)">
                            <button type="button" @click="removeTask(index)">Eliminar Tarea</button>
                        </span>
                        <p v-show="item.isCompleted" style="color: greenyellow; font-weight: bold;">Tarea Completada</p>
                    </li>
                </div>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Todo } from '@/interfaces/todo';
import { useTodoStore } from '@/stores/todo';
import { storeToRefs } from 'pinia';

// Crear una instancia de la tienda
const store = useTodoStore();

// Extraer los valores de la tienda usando storeToRefs para mantener la reactividad
const { todoList, isEmpty } = storeToRefs(store);

function addNewTask(newTask: Todo) {
    const newList = [...todoList.value, newTask]
    store.setTodoList(newList)
}

function removeTask(index: number) {
    store.removeTodoItem(index)
}

function completeTask(index: number) {
    todoList.value[index].isCompleted = true
    store.setTodoList([...todoList.value])
}

</script>

<style scoped></style>