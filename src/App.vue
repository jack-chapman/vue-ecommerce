<template>
  <RouterView v-slot="{ Component }">
    <Transition name="fade" mode="out-in">
      <Component :is="Component" />
    </Transition>
  </RouterView>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'App',

})
</script>

<style>
body {
  @apply bg-gray-200;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

#nprogress {
  pointer-events: none;
}

#nprogress .bar {
  @apply bg-gray-600 opacity-75;

  position: fixed;
  z-index: 1031;
  top: 0;
  left: 0;

  width: 100%;
  height: 2px;
}
</style>