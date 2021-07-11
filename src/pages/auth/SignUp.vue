<template>
  <main>Sign Up</main>
</template>

<script lang="ts">
import { useTitle } from "@vueuse/core";
import { defineComponent } from "vue";

export default defineComponent({
  name: 'Sign up',
  setup() {
    useTitle('Sign up | Vue eCommerce')
  }
})
</script>