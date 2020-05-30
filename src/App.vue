<template>
  <v-app>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>



<script>
export default {
  name: "App",

  data: () => ({
    //
  })
};
</script>


<style lang="scss">
#app {
  background: #f2f2f2;
}
</style>
