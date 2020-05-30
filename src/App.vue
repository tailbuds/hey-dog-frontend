<template>
  <v-app>
    <v-content>
      <admin />
    </v-content>
  </v-app>
</template>



<script>
import admin from "./components/admin";

export default {
  name: "App",

  components: {
    admin
  },

  data: () => ({
    //
  })
};
</script>


<style lang="scss">
#app {
  background: white;
}
</style>
