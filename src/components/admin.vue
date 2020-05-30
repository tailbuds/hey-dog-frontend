<template>
  <v-app>
    <v-row>
      <v-container>
        <div class="padding">
          <div class="display-2 black-text text-center">Upload Data</div>
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
              <v-file-input
                v-model="bgImg"
                accept="image/*"
                ref="bgImg"
                label="bg-img"
                solo
                required
              ></v-file-input>
            </v-col>

            <v-col cols="12" md="6">
              <v-file-input
                v-model="puppyImg"
                accept="image/*"
                ref="puppyImg"
                label="puppy-img"
                solo
                required
              ></v-file-input>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="6">
              <v-text-field v-model="minLife" type="number" min="0" label="minLife" solo required></v-text-field>
            </v-col>

            <v-col cols="12" md="6">
              <v-text-field v-model="maxLife" type="number" min="0" label="maxLife" solo required></v-text-field>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="6">
              <v-text-field v-model="learningRate" type="text" label="learningRate" solo required></v-text-field>
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
                type="number"
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
                type="number"
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
                type="number"
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
            <v-col cols="12" md="12">
              <v-file-input multiple v-model="images" ref="images" label="images" solo required></v-file-input>
            </v-col>
          </v-row>
          <div class="text-center">
            <v-btn
              class="subtitle-1 success"
              id="submit"
              name="submit"
              v-on:click="submitBreed()"
              type="submit"
              large
            >Submit</v-btn>
          </div>
        </div>
      </v-container>
    </v-row>
  </v-app>
</template>

<script>
import Url from "../url";
import axios from "axios";
export default {
  data() {
    return {
      name: "Zeta",
      tagline: "Good boy",
      bgImg: null,
      puppyImg: null,
      minLife: 10,
      maxLife: 14,
      learningRate: "High",
      minLitter: 6,
      maxLitter: 10,
      size: "Large",
      weightUnit: 9,
      minMaleWeight: 25,
      maxMaleWeight: 45,
      minFemaleWeight: 25,
      maxFemaleWeight: 40,
      heightUnit: 13,
      minMaleHeight: 20,
      maxMaleHeight: 20,
      minFemaleHeight: 20,
      maxFemaleHeight: 20,
      originCountry: 6,
      otherNames: "ZetaDog",
      desc1: "Lorem Ipsum",
      desc2: "Lorem Ipsum",
      desc3: "Lorem Ipsum",
      desc4: "Lorem Ipsum",
      desc5: "Lorem Ipsum",
      desc6: "Lorem Ipsum",
      desc7: "Lorem Ipsum",
      desc8: "Lorem Ipsum",
      desc9: "Lorem Ipsum",
      desc10: "Lorem Ipsum",
      desc11: "Lorem Ipsum",
      desc12: "Lorem Ipsum",
      desc13: "Lorem Ipsum",
      desc14: "Lorem Ipsum",
      desc15: "Lorem Ipsum",
      images: null
    };
  },

  methods: {
    submitBreed() {
      let formData = new FormData();

      formData.set("name", this.name);
      formData.set("tagline", this.tagline);
      formData.append("bgImg", this.bgImg);
      formData.append("puppyImg", this.puppyImg);
      formData.set("minLife", this.minLife);
      formData.set("maxLife", this.maxLife);
      formData.set("learningRate", this.learningRate);
      formData.set("minLitter", this.minLitter);
      formData.set("maxLitter", this.maxLitter);
      formData.set("size", this.size);
      formData.set("weightUnit", this.weightUnit);
      formData.set("minMaleWeight", this.minMaleWeight);
      formData.set("maxMaleWeight", this.maxMaleWeight);
      formData.set("minFemaleWeight", this.minFemaleWeight);
      formData.set("maxFemaleWeight", this.maxFemaleWeight);
      formData.set("heightUnit", this.heightUnit);
      formData.set("minMaleHeight", this.minMaleHeight);
      formData.set("maxMaleHeight", this.maxMaleHeight);
      formData.set("minFemaleHeight", this.minFemaleHeight);
      formData.set("maxFemaleHeight", this.maxFemaleHeight);
      formData.set("originCountry", this.originCountry);
      formData.set("otherNames", this.otherNames);
      formData.set("desc1", this.desc1);
      formData.set("desc2", this.desc2);
      formData.set("desc3", this.desc3);
      formData.set("desc4", this.desc4);
      formData.set("desc5", this.desc5);
      formData.set("desc6", this.desc6);
      formData.set("desc7", this.desc7);
      formData.set("desc8", this.desc8);
      formData.set("desc9", this.desc9);
      formData.set("desc10", this.desc10);
      formData.set("desc11", this.desc11);
      formData.set("desc12", this.desc12);
      formData.set("desc13", this.desc13);
      formData.set("desc14", this.desc14);
      formData.set("desc15", this.desc15);
      for (const i of Object.keys(this.images)) {
        formData.append("images", this.images[i]);
      }

      axios({
        method: "post",
        url: Url.url + "/breeds",
        data: formData,
        headers: { "Content-Type": "multipart/form-data" }
      })
        .then(res => {
          alert("Created Breed");
          console.log(res.data.createdBreed);
        })
        .catch(() => {
          alert("Failed in creating breed");
        });
    }
  }
};
</script>

<style lang="css" scoped>
.padding {
  padding: 10%;
  padding-top: 2%;
}
</style>
