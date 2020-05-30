<template>
  <v-app>
    <v-row>
      <v-col lg="7">
        <v-container>
          <div class="display-2 black-text text-center">Upload Data</div>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field v-model="name" type="text" label="Name" required></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field v-model="tagline" type="text" label="Tagline" required></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="6">
              <v-file-input v-model="bg" accept="image/*" label="bg-img"></v-file-input>
            </v-col>

            <v-col cols="12" md="6">
              <v-file-input v-model="puppy" accept="image/*" label="puppy-img"></v-file-input>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field v-model="minLife" type="number" min="0" label="minLife" required></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field v-model="maxlife" type="number" min="0" label="maxlife" required></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field v-model="learningRate" type="text" label="learningRate" required></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field v-model="size" type="text" label="size" required></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field v-model="minLitter" type="number" min="0" label="minLitter" required></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field v-model="maxLitter" type="number" min="0" label="maxLitter" required></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="12">
              <v-text-field v-model="weightUnit" type="number" min="0" label="weightUnit"></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="minMaleWeight"
                type="number"
                min="0"
                label="minMaleWeight"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                v-model="	maxMaleWeight"
                type="number"
                min="0"
                label="	maxMaleWeight"
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
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                v-model="	maxFemaleWeight	"
                type="number"
                min="0"
                label="maxFemaleWeight	"
                required
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="12">
              <v-text-field v-model="heigthUnit" type="number" min="0" label="heigthUnit"></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="minMaleHeight"
                type="number"
                min="0"
                label="minMaleHeight"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                v-model="	maxMaleHeight	"
                type="number"
                min="0"
                label="maxMaleHeight	"
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
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field
                v-model="maxFemaleHeight	"
                type="number"
                min="0"
                label="maxFemaleHeight	"
                required
              ></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="originCountry"
                type="number"
                min="0"
                label="originCountry"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field v-model="otherNames" type="text" label="otherNames" required></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="6">
              <v-text-field outlined v-model="desc1" type="text" label="desc1" required></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field outlined v-model="desc2" type="text" label="desc2" required></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="6">
              <v-text-field outlined v-model="desc3" type="text" label="desc3" required></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field outlined v-model="desc4" type="text" label="desc4" required></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="6">
              <v-text-field outlined v-model="desc5" type="text" label="desc5" required></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field outlined v-model="desc6" type="text" label="desc6" required></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="6">
              <v-text-field outlined v-model="desc7" type="text" label="desc7" required></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field outlined v-model="desc8" type="text" label="desc8" required></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="6">
              <v-text-field outlined v-model="desc9" type="text" label="desc9" required></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field outlined v-model="desc10" type="text" label="desc10" required></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="6">
              <v-text-field outlined v-model="desc11" type="text" label="desc11" required></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field outlined v-model="desc12" type="text" label="desc12" required></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="6">
              <v-text-field outlined v-model="desc13" type="text" label="desc13" required></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field outlined v-model="desc14" type="text" label="desc14" required></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="12">
              <v-text-field outlined v-model="desc15" type="text" label="desc15" required></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="12">
              <v-file-input multiple v-model="images" accept="image/*" label="images"></v-file-input>
            </v-col>
          </v-row>
          <v-btn
            class="subtitle-1"
            id="submit"
            name="submit"
            v-on:click="submitBreed"
            type="submit"
            large
          >Submit</v-btn>
        </v-container>
      </v-col>
      <!---Form complete-->
    </v-row>
  </v-app>
</template>

<script>
import url from "../url";
import axios from "axios";
export default {
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
      name: "",
      tagline: "",
      bgImg: "",
      puppyImg: "",
      minLife: " ",
      maxLife: "",
      learningRate: "",
      minLitter: "",
      maxLitter: "",
      size: "",
      weightUnit: "",
      minMaleWeight: "",
      maxMaleWeight: "",
      minFemaleWeight: "",
      maxFemaleWeight: "",
      heigthUnit: "",
      minMaleHeight: "",
      maxMaleHeight: "",
      minFemaleHeight: "",
      maxFemaleHeight: "",
      originCountry: "",
      otherNames: "",
      desc1: "",
      desc2: "",
      desc3: "",
      desc4: "",
      desc5: "",
      desc6: "",
      desc7: "",
      desc8: "",
      desc9: "",
      desc10: "",
      desc11: "",
      desc12: "",
      desc13: "",
      desc14: "",
      desc15: "",
      images: ""
    };
  },

  methods: {
    submitBreed: function() {
      var name = this.name;
      var tagline = this.tagline;
      var bgImg = this.bgImg;
      var puppyImg = this.puppyImg;
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
      var heigthUnit = this.heigthUnit;
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
      var images = this.images;
      axios
        .patch(url.url + "/breeds", {
          name: name,
          tagline: tagline,
          bgImg: bgImg,
          puppyImg: puppyImg,
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
          heigthUnit: heigthUnit,
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
          desc15: desc15,
          images: images
        })
        .then(response => {
          console.log(response);
        })
        .catch(err => console.log(err));
    }
  }
};
</script>
