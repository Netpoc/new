<template>
<v-app>
  <Header></Header>
  <v-card

    dark
    flat
    tile
  >
    <v-window v-model="onboarding">
      <v-window-item
        v-for="n in length"
        :key="`card-${n}`"
      >
        <v-card
          color="transparent"
          height="200"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
            tag="v-card-text"
          >
          <v-img
          class="mb-0 mx-3 d-none d-md-block"
          src="../assets/connect.jpg"
          max-height="150"
          width="300"
          >

        </v-img>
            Transparent themed, for background-imaged slides. Background <br>
            color black added for demonstration purposes.
            <v-card height="100"> It was never hard to achive</v-card>
            <v-btn to="/csr" color="#DF6C30"> go </v-btn>
          </v-row>
        </v-card>
      </v-window-item>
    </v-window>

    <v-card-actions class="justify-space-between">
      <v-btn
        text
        @click="prev"
      >
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-item-group
        v-model="onboarding"
        class="text-center"
        mandatory
      >
        <v-item
          v-for="n in length"
          :key="`btn-${n}`"
          v-slot:default="{ active, toggle }"
        >
          <v-btn
            :input-value="active"
            icon
            @click="toggle"
          >
            <v-icon>record</v-icon>
          </v-btn>
        </v-item>
      </v-item-group>
      <v-btn
        text
        @click="next"
      >
        <v-icon>chevron-right</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>

  
  <v-item-group>
    <v-container>
      <v-row>
        <v-col
          v-for="n in 4"
          :key="n"
          cols="12"
          md="3"
        >
          <v-item v-slot:default="{ active, toggle }">
            <v-card
              :color="active ? 'primary' : ''"
              class="d-flex align-center"
              dark
              height="200"
              @click="toggle"
            >
              <v-scroll-y-transition>
                <div
                  v-if="active"
                  class="display-3 flex-grow-1 text-center"
                >
                  Active
                </div>
              </v-scroll-y-transition>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
  <Footer></Footer>
</v-app>
</template>

<script>
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"
export default {
  data: () => ({
      length: 5,
      onboarding: 0,
    }),

    methods: {
      next () {
        this.onboarding = this.onboarding + 1 === this.length
          ? 0
          : this.onboarding + 1
      },
      prev () {
        this.onboarding = this.onboarding - 1 < 0
          ? this.length - 1
          : this.onboarding - 1
      },
    },
components:{
  Header,
  Footer,
}
}
</script>

<style scoped>
</style>
