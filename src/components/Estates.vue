<template>
  <v-card>
    <v-tabs
      v-model="tabs"
      align-with-title
      centered
      >
        <v-tab href="#lagos">Lagos</v-tab>
        <v-tab href="#ogun">Ogun</v-tab>
        <v-tab href="#oyo">Oyo</v-tab>
        <v-tabs-slider color="#DF6C30"></v-tabs-slider>
    </v-tabs>
    <v-card-text>
      <v-tabs-items v-model="tabs">
        <v-tab-item
          v-for="content in ['lagos', 'ogun', 'oyo']"
          :key="content"
          :value="content"
        >
          <v-card
            height="200px"
            flat
          >
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
    data: () => ({
      fab: false,
      hidden: false,
      tabs: null,
    }),

    computed: {
      activeFab () {
        switch (this.tabs) {
          case 'lagos': return {
            estates: [
              {
                title:'success',
                icon: 'mdi-share'
              },
              {
                title:'success',
                icon: 'mdi-share'
              },
              {
                title:'success',
                icon: 'mdi-share'},
            ] }
            case 'ogun': return {
              estates: [
                {
                  title:'success',
                  icon: 'mdi-share'
                },
                {
                  title:'success',
                  icon: 'mdi-share'
                },
                {
                  title:'success',
                  icon: 'mdi-share'},
              ] }
              case 'oyo': return {
                estates: [
                  {
                    title:'success',
                    icon: 'mdi-share'
                  },
                  {
                    title:'success',
                    icon: 'mdi-share'
                  },
                  {
                    title:'success',
                    icon: 'mdi-share'},
                ] }

          default: return {}
        }
      },
    },
  }
</script>
