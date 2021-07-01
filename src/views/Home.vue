<template>
  <login />
</template>

<script lang="ts">
import Login from "@/components/Login.vue";
import Vue from "vue";


export default Vue.extend({
  name: "Home",

  components: {
    Login,
  },
});
</script>
