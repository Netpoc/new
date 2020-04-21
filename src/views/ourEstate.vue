<template>
    <v-container fluid>
      <v-row align="center" justify="center">
        <p class="display-3">Our Estates</p>
      </v-row>
        <propAdvert />
        
    </v-container>
   


</template>

<script>
import propAdvert from "@/components/propAdvert.vue"


export default {
    components: {
        propAdvert,
        
    },
    data() {
        return {
          headers: [
            {
              text: 'Size',
              value: 'size',
            },
            {
              text: 'Regular',
              value: 'regular',
            },
            {
              text: 'Promo',
              value: 'promo'
            }
          ],
          prov: [
            {
              size: '600SQM',
              regular: '8,000,000.00',
              promo: '5,000,000.00',
            },
            {
              size: '300SQM',
              regular: '8,000,000.00',
              promo: '5,000,000.00',
            },
            {
              size: '450SQM',
              regular: '8,000,000.00',
              promo: '5,000,000.00',
            }
          ],
          boys: [
            {
              size: '600SQM',
              regular: '15,000,000.00',
              promo: '12,000,000.00',
            },
            {
              size: '300SQM',
              regular: '8,000,000.00',
              promo: '6,000,000.00',
            },
            {
              size: '450SQM',
              regular: '12,000,000.00',
              promo: '9,000,000.00',
            }
          ],
            colors: [
                'indigo',
                'warning',
                'pink darken-2',
                'red lighten-1',
                'deep-purple accent-4',
            ],

            slides: [
                'LAGOS',
                'OGUN',
                'IBADAN',
                'BADAGRY',
                'IKORODU',
            ],

        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        }
    },
}

</script>
