<template>
  <AppFrame>
    <main>Auth page</main>
    <p v-if="showLoginRequired">You must be logged in before you can access that page!</p>
    <div>
      <RouterLink :to="{ path: '/auth/login', query: route.query }">Log in</RouterLink>
      <RouterLink :to="{ path: '/auth/signup', query: route.query }">Sign up</RouterLink>
    </div>
    <RouterView />
  </AppFrame>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useRoute } from 'vue-router';

import AppFrame from '../../components/AppFrame.vue';

export default defineComponent({
  name: 'Auth',
  components: {
    AppFrame
  },
  setup() {
    const route = useRoute()

    const showLoginRequired = computed(() => {
      return route.query.notify
    })

    return {
      showLoginRequired,
      route
    }
  }
})

</script>