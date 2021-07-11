<template>
  <AppFrame>
    <main>
      <Panel>
        <h1 class="text-xl">Awsome shopping site made with Vue 3!</h1>
        <p class="mt-4">Also using Vite, WindiCSS, and Pinia</p>
        <p class="mt-4">
          See the source code on
          <a class="underline" href="https://github.com">
            Github
            <i-octicon-link-external class="w-4 h-4" />
          </a>
        </p>
      </Panel>
    </main>
  </AppFrame>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useTitle } from '@vueuse/core'

export default defineComponent({
  name: 'Index',
  setup() {
    useTitle('Home | Vue eCommerce')
  }
})

</script>