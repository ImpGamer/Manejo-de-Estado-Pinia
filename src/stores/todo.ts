import type { Todo } from '@/interfaces/todo'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

const initialState: Todo[] = [
  {
    id: '1',
    description: 'Crear curso de Vue',
    isCompleted: false
  },
  {
    id: '2',
    description: 'Crear curso de Angular',
    isCompleted: false
  },
  {
    id: '3',
    description: 'Crear curso de React',
    isCompleted: false
  }
]
export const useTodoStore = defineStore('todo', () => {
  //state
  const message = ref<string>('Hola Mundo')
  const todoList = ref<Todo[]>(initialState)

  /*Metodo que nos permite saber si nuestra lista se encuentra vacia de manera computada, es decir
    que este metodo lo almacenara en cache y no lo volvera a ejecutar a menos que cambie el valor de la lista*/
  //getters
  const isEmpty = computed(() => todoList.value.length === 0)

  //actions -> Una action es mediante una funcion modificar los states de la store
  function setTodoList(newValue: Todo[]) {
    todoList.value = newValue
  }
  function removeTodoItem(index: number) {
    todoList.value.splice(index, 1)
  }
  return {
    message,
    todoList,
    isEmpty,
    setTodoList,
    removeTodoItem
  }
})
