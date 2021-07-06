<template>
  <AppFrame>
    <main>Auth page</main>
    <div>
      <RouterLink to="/auth/login">Log in</RouterLink>
      <RouterLink to="/auth/signup">Sign up</RouterLink>
    </div>
    <RouterView />
  </AppFrame>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import AppFrame from '../../components/AppFrame.vue';

export default defineComponent({
  name: 'Auth',
  components: {
    AppFrame
  }
})

</script>