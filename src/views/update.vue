<template>
  <div class="home">
    <v-row :justify="justify">
      <v-col cols="9">
        <div class="bg-img">
          <div class="display-2 black-text text-center">Update Data</div>
          <v-row>
            <v-container>
              <div class="padding">
                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field v-model="name" type="text" label="Name" solo required></v-text-field>
                  </v-col>

                  <v-col cols="12" md="6">
                    <v-text-field v-model="tagline" type="text" label="Tagline" solo required></v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="12" md="6">
                    <v-img
                      height="auto"
                      width="12vw"
                      :src="breed.bgImg"
                      class="white--text align-center images"
                    ></v-img>
                  </v-col>

                  <v-col cols="12" md="6">
                    <v-img
                      height="auto"
                      width="12vw"
                      :src="breed.puppyImg"
                      class="white--text align-center images"
                    ></v-img>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="minLife"
                      type="number"
                      min="0"
                      label="minLife"
                      solo
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="maxLife"
                      type="number"
                      min="0"
                      label="maxLife"
                      solo
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="learningRate"
                      type="text"
                      label="learningRate"
                      solo
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="6">
                    <v-text-field v-model="size" type="text" label="size" solo required></v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="minLitter"
                      type="number"
                      min="0"
                      label="minLitter"
                      solo
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="maxLitter"
                      type="number"
                      min="0"
                      label="maxLitter"
                      solo
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="12" md="12">
                    <v-text-field
                      v-model="weightUnit"
                      type="text"
                      min="0"
                      label="weightUnit"
                      solo
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="minMaleWeight"
                      type="number"
                      min="0"
                      label="minMaleWeight"
                      solo
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="	maxMaleWeight"
                      type="number"
                      min="0"
                      label="	maxMaleWeight"
                      solo
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="minFemaleWeight"
                      type="number"
                      min="0"
                      label="minFemaleWeight"
                      solo
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="	maxFemaleWeight	"
                      type="number"
                      min="0"
                      label="maxFemaleWeight	"
                      solo
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="12" md="12">
                    <v-text-field
                      v-model="heightUnit"
                      type="text"
                      min="0"
                      label="heightUnit"
                      solo
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="minMaleHeight"
                      type="number"
                      min="0"
                      label="minMaleHeight"
                      solo
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="	maxMaleHeight	"
                      type="number"
                      min="0"
                      label="maxMaleHeight	"
                      solo
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="minFemaleHeight"
                      type="number"
                      min="0"
                      label="minFemaleHeight"
                      solo
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="maxFemaleHeight	"
                      type="number"
                      min="0"
                      label="maxFemaleHeight	"
                      solo
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field
                      v-model="originCountry"
                      type="text"
                      min="0"
                      label="originCountry"
                      solo
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" md="6">
                    <v-text-field v-model="otherNames" type="text" label="otherNames" solo required></v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field outlined v-model="desc1" auto-grow type="text" label="desc1" solo></v-text-field>
                  </v-col>

                  <v-col cols="12" md="6">
                    <v-text-field outlined v-model="desc2" type="text" label="desc2" solo></v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field outlined v-model="desc3" type="text" label="desc3" solo></v-text-field>
                  </v-col>

                  <v-col cols="12" md="6">
                    <v-text-field outlined v-model="desc4" type="text" label="desc4" solo></v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field outlined v-model="desc5" type="text" label="desc5" solo></v-text-field>
                  </v-col>

                  <v-col cols="12" md="6">
                    <v-text-field outlined v-model="desc6" type="text" label="desc6" solo></v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field outlined v-model="desc7" type="text" label="desc7" solo></v-text-field>
                  </v-col>

                  <v-col cols="12" md="6">
                    <v-text-field outlined v-model="desc8" type="text" label="desc8" solo></v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field outlined v-model="desc9" type="text" label="desc9" solo></v-text-field>
                  </v-col>

                  <v-col cols="12" md="6">
                    <v-text-field outlined v-model="desc10" type="text" label="desc10" solo></v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field outlined v-model="desc11" type="text" label="desc11" solo></v-text-field>
                  </v-col>

                  <v-col cols="12" md="6">
                    <v-text-field outlined v-model="desc12" type="text" label="desc12" solo></v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="12" md="6">
                    <v-text-field outlined v-model="desc13" type="text" label="desc13" solo></v-text-field>
                  </v-col>

                  <v-col cols="12" md="6">
                    <v-text-field outlined v-model="desc14" type="text" label="desc14" solo></v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-col cols="12" md="12">
                    <v-text-field outlined v-model="desc15" type="text" label="desc15" solo></v-text-field>
                  </v-col>
                </v-row>

                <v-row>
                  <v-img
                    height="auto"
                    width="12vw"
                    :src="this.images.img1"
                    class="white--text align-center puppy-image"
                  ></v-img>
                  <v-img
                    height="auto"
                    width="12vw"
                    :src="this.images.img2"
                    class="white--text align-center puppy-image"
                  ></v-img>
                  <v-img
                    height="auto"
                    width="12vw"
                    :src="this.images.img3"
                    class="white--text align-center puppy-image"
                  ></v-img>
                  <v-img
                    height="auto"
                    width="12vw"
                    :src="this.images.img4"
                    class="white--text align-center puppy-image"
                  ></v-img>
                  <v-img
                    height="auto"
                    width="12vw"
                    :src="this.images.img5"
                    class="white--text align-center puppy-image"
                  ></v-img>
                </v-row>
                <v-row>
                  <v-img
                    height="auto"
                    width="12vw"
                    :src="this.images.img6"
                    class="white--text align-center puppy-image"
                  ></v-img>
                  <v-img
                    height="auto"
                    width="12vw"
                    :src="this.images.img7"
                    class="white--text align-center puppy-image"
                  ></v-img>
                  <v-img
                    height="auto"
                    width="12vw"
                    :src="this.images.img8"
                    class="white--text align-center puppy-image"
                  ></v-img>
                  <v-img
                    height="auto"
                    width="12vw"
                    :src="this.images.img9"
                    class="white--text align-center puppy-image"
                  ></v-img>
                </v-row>
                <br />
                <br />
                <div class="text-center">
                  <v-btn
                    class="subtitle-1 success"
                    id="submit"
                    name="submit"
                    v-on:click="submitBreed()"
                    type="submit"
                    large
                  >Update</v-btn>
                </div>
              </div>
            </v-container>
          </v-row>
        </div>
      </v-col>
      <v-col cols="3">
        <breedList />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Url from "../url";
import axios from "axios";
import breedList from "@/components/breedList.vue";

export default {
  name: "home",
  components: {
    breedList
  },

  mounted: function() {
    this.updateData(this.$route.params.breedId);
    this.$router.afterEach((to, from, next) => {
      this.updateData(this.$route.params.breedId);
      next();
    });
  },
  // var id=$routeParams.params.id;
  //   mounted() {
  //     axios
  //     //   .get(url.url + "/breeds/" + id)
  //       .then(breed => {
  //         // console.log("its breeds de" + JSON.stringify(breed.data));
  //         this.breeds = breed.data;
  //         // console.log(this.breeds);
  //       })

  //       .catch(err => {
  //         console.log(err);
  //       });
  //   },

  data() {
    return {
      justify: null,
      name: null,
      tagline: null,
      bgImg: null,
      puppyImg: null,
      minLife: null,
      maxLife: null,
      learningRate: null,
      minLitter: null,
      maxLitter: null,
      size: null,
      weightUnit: null,
      minMaleWeight: null,
      maxMaleWeight: null,
      minFemaleWeight: null,
      maxFemaleWeight: null,
      heightUnit: null,
      minMaleHeight: null,
      maxMaleHeight: null,
      minFemaleHeight: null,
      maxFemaleHeight: null,
      originCountry: null,
      otherNames: null,
      desc1: null,
      desc2: null,
      desc3: null,
      desc4: null,
      desc5: null,
      desc6: null,
      desc7: null,
      desc8: null,
      desc9: null,
      desc10: null,
      desc11: null,
      desc12: null,
      desc13: null,
      desc14: null,
      desc15: null,
      images: null
    };
  },

  methods: {
    submitBreed: function() {
      var name = this.name;
      var tagline = this.tagline;
      // var bgImg = this.bgImg;
      // var puppyImg = this.puppyImg;
      var minLife = this.minLife;
      var maxLife = this.maxLife;
      var learningRate = this.learningRate;
      var minLitter = this.minLitter;
      var maxLitter = this.maxLitter;
      var size = this.size;
      var weightUnit = this.weightUnit;
      var minMaleWeight = this.minMaleWeight;
      var maxMaleWeight = this.maxMaleWeight;
      var minFemaleWeight = this.minFemaleWeight;
      var maxFemaleWeight = this.minFemaleWeight;
      var heightUnit = this.heightUnit;
      var minMaleHeight = this.minMaleWeight;
      var maxMaleHeight = this.maxMaleWeight;
      var minFemaleHeight = this.minFemaleWeight;
      var maxFemaleHeight = this.maxFemaleWeight;
      var originCountry = this.originCountry;
      var otherNames = this.otherNames;
      var desc1 = this.desc1;
      var desc2 = this.desc2;
      var desc3 = this.desc3;
      var desc4 = this.desc4;
      var desc5 = this.desc5;
      var desc6 = this.desc6;
      var desc7 = this.desc7;
      var desc8 = this.desc8;
      var desc9 = this.desc9;
      var desc10 = this.desc10;
      var desc11 = this.desc11;
      var desc12 = this.desc12;
      var desc13 = this.desc13;
      var desc14 = this.desc14;
      var desc15 = this.desc15;
      //var images = this.images;
      axios
        .patch(Url.url + "/breeds", {
          name: name,
          tagline: tagline,
          minLife: minLife,
          maxLife: maxLife,
          learningRate: learningRate,
          minLitter: minLitter,
          maxLitter: maxLitter,
          size: size,
          weightUnit: weightUnit,
          minMaleWeight: minMaleWeight,
          maxMaleWeight: maxMaleWeight,
          minFemaleWeight: minFemaleWeight,
          maxFemaleWeight: maxFemaleWeight,
          heightUnit: heightUnit,
          minMaleHeight: minMaleHeight,
          maxMaleHeight: maxMaleHeight,
          minFemaleHeight: minFemaleHeight,
          maxFemaleHeight: maxFemaleHeight,
          originCountry: originCountry,
          otherNames: otherNames,
          desc1: desc1,
          desc2: desc2,
          desc3: desc3,
          desc4: desc4,
          desc5: desc5,
          desc6: desc6,
          desc7: desc7,
          desc8: desc8,
          desc9: desc9,
          desc10: desc10,
          desc11: desc11,
          desc12: desc12,
          desc13: desc13,
          desc14: desc14,
          desc15: desc15
        })
        .then(response => {
          console.log(response);
        })
        .catch(err => console.log(err));
    },
    updateData(breedId) {
      if (breedId) {
        axios
          .get(Url.url + `/breeds/${breedId}`)
          .then(breed => {
            console.log(breed);
            return breed;
          })
          .then(breed => {
            this.breed = breed.data;
            return this.breed;
          })
          .then(breed => {
            this.name = breed.name;
            this.tagline = breed.tagline;
            this.bgImg = breed.bgImg;
            this.minLife = breed.minLife;
            this.maxLife = breed.maxLife;
            this.learningRate = breed.learningRate;
            this.minLitter = breed.minLitter;
            this.maxLitter = breed.maxLitter;
            this.size = breed.size;
            this.weightUnit = breed.weightUnit;
            this.minMaleWeight = breed.minMaleWeight;
            this.maxMaleWeight = breed.maxMaleWeight;
            this.minFemaleWeight = breed.minFemaleWeight;
            this.maxFemaleWeight = breed.maxFemaleWeight;
            this.heightUnit = breed.heightUnit;
            this.minMaleHeight = breed.minMaleHeight;
            this.maxMaleHeight = breed.maxMaleHeight;
            this.minFemaleHeight = breed.minFemaleHeight;
            this.maxFemaleHeight = breed.maxFemaleHeight;
            this.originCountry = breed.originCountry;
            this.otherNames = breed.otherNames;
            this.desc1 = breed.desc1;
            this.desc2 = breed.desc2;
            this.desc3 = breed.desc3;
            this.desc4 = breed.desc4;
            this.desc5 = breed.desc5;
            this.desc6 = breed.desc6;
            this.desc7 = breed.desc7;
            this.desc8 = breed.desc8;
            this.desc9 = breed.desc9;
            this.desc10 = breed.desc10;
            this.desc11 = breed.desc11;
            this.desc12 = breed.desc12;
            this.desc13 = breed.desc13;
            this.desc14 = breed.desc14;
            this.desc15 = breed.desc15;
            this.images = breed.BreedImages;
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  }
};
</script>

<style lang="css" scoped>
.padding {
  padding: 10%;
  padding-top: 2%;
}
.images {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>
