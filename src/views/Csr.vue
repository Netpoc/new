<template>
  <v-container fluid>
      <v-row align="center" justify="space-around">
        <p class="display-3 text-center">
            Corporate Social Responsibility
          </p>
      </v-row>
      <v-row>
        <v-col md="5">
          <v-img src="../assets/csr.jpg"
            max-height="300"
            ></v-img>

        </v-col>
        <v-col md="7" xm="12" class="ma-auto">
          <p class="text-justify ma-2">We are a firm with humanistic tendencies and as such want to give back to our immediate business environment, by affecting the lives of the youth positive through various means like sports, entertainment, educational support scheme, leadership skill training, charity etc</p>
        </v-col>
        </v-row>
  </v-container>
</template>

<script>

export default {

methods: {
    onScroll (e) {
      if (typeof window === 'undefined') return
      const top = window.pageYOffset ||   e.target.scrollTop || 0
      this.fab = top > 50
    }
      }
}
</script>

<style scoped>
</style>
