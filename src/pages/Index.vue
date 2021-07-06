<template>
  <AppFrame>
    <main>Home page</main>
  </AppFrame>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import AppFrame from '../components/AppFrame.vue';

export default defineComponent({
  name: 'Index',
  components: {
    AppFrame
  }
})

</script>