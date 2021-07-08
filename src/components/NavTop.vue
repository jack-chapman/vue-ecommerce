<template>
  <header class="flex flex-row w-full justify-between py-5 px-8 mb-4">
    <div class="flex w-3/4">
      <RouterLink to="/" class="flex items-center !no-underline">
        <i-logos-vue class="mr-2" />
        <h1>Vue eCommerce</h1>
      </RouterLink>

      <nav class="ml-16">
        <ul class="flex space-x-16">
          <li>
            <RouterLink to="/shop" class="flex items-center">
              Shop
              <i-carbon-arrow-right />
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/orders" class="flex items-center">
              Orders
              <i-carbon-arrow-right />
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>

    <div class="flex justify-between w-1/4">
      <div>
        <RouterLink to="/auth/login">Log in or Sign up</RouterLink>
      </div>

      <div class="flex justify-center items-center">
        <span class="mr-3">Basket</span>
        <i-carbon-shopping-cart alt="Shopping Cart" />
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'AppFrame',
  setup() {

  }
})
</script>

<style scoped>
.router-link-active {
  @apply underline;
}
</style>