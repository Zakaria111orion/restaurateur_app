<template>
  <v-app>
    <v-app-bar app color="amber darken-3" dark>
      <div class="d-flex align-center">
        <div>
          <h3>
            RestaurateurApp
          </h3>
        </div>
      </div>

      <v-spacer></v-spacer>

    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";




export default Vue.extend({
  name: "App",

  data: () => ({
    //
  }),
});
</script>
