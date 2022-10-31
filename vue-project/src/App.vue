<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'

import { useSampleStore } from './stores/sample-store'
import { useCounterStore } from './stores/counter';
import { useCompositionStore } from './stores/composition-store'

const store = useCounterStore()
const compositionStore = useCompositionStore()
const sampleStore = useSampleStore()

console.log(`--- optiosn-api style store`)
store.count++

// with autocompletion 
store.$patch({ count: store.count + 1 })
// or using an action instead

store.increment()

console.log(` store.count ${store.count}`)


console.log(`--- composition-api style store`)
console.log(` name: ${compositionStore.name}`)



// 하나의 store에서 다른 store의 actiosn을 호출하는 예제
const ret = sampleStore.callOtherAction()
console.log(`call other store's actions. ret: ${ret}`)



const callLongTimeAction = () => {
  sampleStore.callLongTimeWork()
}


// const callback = () => {
//   console.log(`callback `)
// }
// sampleStore.$onAction(callback, true)

const unsubscribe = sampleStore.$onAction(
  ({
    name, 
    store, 
    args, 
    after, 
    onError, 
  }) => {
    // a shared variable for this specific action call
    const startTime = Date.now()
    // this will trigger before an action on 'store' is executed
    console.log(`Start "${name}" with params [${args.join(', ')}].`)

    // this will trigger if the action succeeds and after it has fully run
    // it waits for any returned promised
    after((result) => {
      console.log(
        `Finished "${name}" after ${Date.now() - startTime} ms \n Result: ${result}`
      )
    })
    // this will trigger if the action throws or returns a promise that reject
    onError((error) => {
      console.warn(`Failed "${name}" after ${Date.now() - startTime}ms \nError ${error}`)
    })
  }
)


// plugin 
console.log(`plugin_value: "${sampleStore.plugin_value}"`)

</script>


<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>


  <main>
    <button v-on:click="callLongTimeAction()">
      call long time async action 
    </button>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
