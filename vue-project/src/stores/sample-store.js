import { defineStore } from 'pinia'

import { useOtherStore } from './other-store'


export const useSampleStore = defineStore('sample-store', {
    state: () => {
        return { count: 0 }
    }, 
    // could also be defined as 
    // state: () => ({ count : 0 })
    actions: {
        increment() {
            this.count++
        },
        callOtherAction() {
            const otherStore = useOtherStore()
            return otherStore.otherAction()
        },                 
        longTimeWork() {            
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve('resolved')
                }, 10000)
            })            
        },
        async callLongTimeWork() {
            console.log(`callLongTimeWork`)
            const result = await this.longTimeWork()
            console.log(`done: `, result)
        }
    }
})