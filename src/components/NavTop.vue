<template>
  <header>
    <RouterLink to="/">
      <h1>Vue eCommerce</h1>
    </RouterLink>

    <div>
      <RouterLink to="/auth/login">Log in or Sign up</RouterLink>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'AppFrame'
})
</script>