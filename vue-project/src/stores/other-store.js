import { defineStore } from 'pinia'

export const useOtherStore = defineStore('other-store', {
    state: () => {
        return { 
            count: 0,
            name: 'other-store',
        }
    }, 
    // could also be defined as 
    // state: () => ({ count : 0 })
    actions: {
        increment() {
            this.count++
        },
        otherAction() {
            console.log(`[otherAction] ${this.name}`)
            return this.name
        }
    }
})