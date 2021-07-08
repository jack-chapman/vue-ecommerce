<template>
  <AppFrame>
    <main>Home page</main>
    <div>
      <p v-if="result">{{ result }}</p>
      <button @click="handleClick">Click</button>
    </div>
  </AppFrame>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { boostrap } from '../api/bootstrap';

import AppFrame from '../components/AppFrame.vue';

export default defineComponent({
  name: 'Index',
  components: {
    AppFrame
  },
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