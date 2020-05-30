<template>
  <div class="home">
    <v-row :justify="justify">
      <v-col cols="9">
        <admin />
      </v-col>
      <v-col cols="3">
        <breedList />
      </v-col>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src
import admin from "@/components/admin.vue";
import breedList from "@/components/breedList.vue";
export default {
  name: "home",
  components: {
    admin,
    breedList
  },
  data() {
    return {
      justify: null
    };
  }
};
</script>
