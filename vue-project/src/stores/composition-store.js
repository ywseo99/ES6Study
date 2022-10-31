import { defineStore } from "pinia"
import { ref } from 'vue'
import { computed } from 'vue'

export const useCompositionStore = defineStore('composition-store', () => {
    const message = ref('hello')
    const name = ref('composition-store')
    const count = ref(0)
    const doubleCount = computed(() => count.value * 2)

    // ref() 가 state 속성이 되고 
    // computed() 가 getters 역할을 하며 
    // function() 이 actions 역할을 한다


    function increment() {
        count.value ++
    }
    return { name, message, count, doubleCount, increment }
})