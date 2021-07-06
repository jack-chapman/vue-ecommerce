<template>
  <RouterView />
  <div>
    <p v-if="result">{{ result }}</p>
    <button @click="handleClick">Click</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { boostrap } from './api/bootstrap';

export default defineComponent({
  name: 'App',
  setup() {
    const result = ref<any>()
    const handleClick = async () => {
      result.value = await boostrap()
    }

    return {
      result,
      handleClick
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
