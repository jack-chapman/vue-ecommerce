<template>
  <main>
    <NavTop />
    <section class="mx-4 px-4">
      <slot />
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'AppFrame',
})
</script>