<template>
  <AppFrame>
    <main>
      <Panel>
        <h1 class="text-xl">404: Page not found</h1>
        <p class="mt-4">
          Back to the
          <RouterLink to="/" class="underline">Home page</RouterLink>.
        </p>
      </Panel>
    </main>
  </AppFrame>
</template>

<script lang="ts">
import { useTitle } from "@vueuse/core";
import { defineComponent } from "vue";

export default defineComponent({
  name: 'NotFound',
  setup() {
    useTitle('Not Found | Vue eCommerce')
  }
})
</script>