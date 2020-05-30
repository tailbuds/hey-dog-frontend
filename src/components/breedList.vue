<template>
  <v-app>
    <v-item-group v-for="(breed, i) in breeds" :key="i" lg="4" class="padding">
      <v-card class="pa-2" raised color="#ffffff">
        <v-img
          height="100"
          width="100"
          :src="breed.puppyImg"
          class="white--text align-end puppy-image"
        ></v-img>
        <v-card-subtitle class="subtitle-1 text-center" v-text="breed.name"></v-card-subtitle>
        <v-card-text>
          <div class="text-center">
            <v-btn class="ma-2" color="#F6D668" medium @click="update(breed.breedId)" dark>
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn color="red" medium @click="deleteBreed(breed.breedId)" dark>
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-item-group>
  </v-app>
</template>

<script>
import Url from "../url";
import axios from "axios";
import Request from "axios-request-handler";

const requestInstance = new Request(Url.url + "/breeds", {
  lockable: false,
  cancelable: true,
  errorHandler: error => {
    console.log(error);
  }
});

export default {
  mounted() {
    /**
     * Function to sort alphabetically an array of objects by some specific key.
     *
     * @param {String} property Key of the object to sort.
     */
    const dynamicSort = property => {
      let sortOrder = 1;

      if (property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
      }

      return function(a, b) {
        if (sortOrder == -1) {
          return b[property].localeCompare(a[property]);
        } else {
          return a[property].localeCompare(b[property]);
        }
      };
    };

    requestInstance.poll(3000).get(breeds => {
      breeds.data.sort(dynamicSort("name"));
      this.breeds = breeds.data;
    });
    // axios
    //   .get(Url.url + "/breeds")
    //   .then(breeds => {
    //     console.log(breeds);
    //     return breeds;
    //   })
    //   .then(breed => {
    //     this.breeds = breed.data;
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  },
  data() {
    return {
      dialog: false,
      breeds: null
    };
  },

  methods: {
    deleteBreed(breedId) {
      axios
        .delete(Url.url + `/breeds/${breedId}`)
        .then(res => {
          console.log(res);

          this.dialog = false;
        })
        .catch(err => {
          console.log(err);
        });
    },

    update(breedId) {
      this.$router.push(`/update/${breedId}`);
    }
  }
};
</script>

<style lang="css" scoped>
#app {
  background: #ffffff;
}
.padding {
  padding: 10%;
  padding-top: 5%;
}
.puppy-image {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>
