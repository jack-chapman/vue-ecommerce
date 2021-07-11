<template>
  <main>
    <h1>Log in</h1>
    <button @click="logIn">Go!</button>
  </main>
</template>

<script lang="ts">
import { useTitle } from "@vueuse/core";
import { defineComponent } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useAuthStore } from "../../stores/auth";

export default defineComponent({
  name: 'LogIn',
  setup() {
    useTitle('Log in | Vue eCommerce')

    const route = useRoute()
    const router = useRouter()
    const auth = useAuthStore()

    const logIn = async () => {
      await auth.logIn('email', 'password')
      if (route.query.next && !Array.isArray(route.query.next)) {
        router.push(route.query.next)
      } else {
        router.push('/')
      }
    }

    return {
      logIn
    }
  }
})
</script>