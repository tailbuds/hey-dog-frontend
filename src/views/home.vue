<template>
  <div class="home">
    <admin />
  </div>
</template>

<script>
// @ is an alias to /src
import admin from "@/components/admin.vue";
export default {
  name: "home",
  components: {
    admin
  }
};
</script>
