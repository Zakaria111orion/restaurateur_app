<template>
  <router-view></router-view>
</template>

<script lang="ts">
import Login from "@/components/Login.vue";
import Products from "@/components/Products.vue";
import Vue from "vue";


export default Vue.extend({
  name: "Home",

  components: {
    Login,
    Products,
  },
  
});
</script>
