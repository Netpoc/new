<template>

  
  <v-container fluid>
    <v-card
    flat  
  >
    <v-window v-model="onboarding">
      <v-window-item>
        <v-card
          color="transparent"
          height="300"
          flat
        >
          <v-row
            class="fill-height"
            align="center"
            justify="space-around"
            tag="v-card-text"
          >
          <v-col md="5">
            <p  class="display-1 font-weight-bold">Home</p>
            <p>A home is the web to which a family is forged, knitted and 
            protected. The building block of every person born, start 
            from the home, which makes the home a very powerful and 
            intricate place of value to every human being.</p>
            <v-btn @click="toHome" color="#DF6C30"> Read More </v-btn>
          </v-col>
          <v-col md="4">
            
              <v-img scr="../assets/family.png" contain>
              </v-img>
            
          </v-col>
            
          </v-row>
        </v-card>
      </v-window-item>

      <v-window-item>
        <v-card
          color="transparent"
          height="300"
          flat
          dark
        >
          <v-row
            class="fill-height"
            align="center"
            justify="space-around"
            tag="v-card-text"
          >
          <v-col md="5">
            <p  class="display-1 font-weight-bold">Home Decor Inspiration</p>
            <p>
              As a rule of thumb, 60% of your living room should be a dominant 
              color, 30% should be a secondary color, and 10% should be an 
              accent color.
            </p>
            <v-btn @click="toHome" color="#DF6C30"> Read More </v-btn>
          </v-col>
          <v-col md="4">
            
              <v-img scr="../assets/family.png" contain>
              </v-img>
            
          </v-col>
            
          </v-row>
        </v-card>
      </v-window-item>

      <v-window-item>
        <v-card
          color="transparent"
          height="300"
          flat
        >
          <v-row
            class="fill-height"
            align="center"
            justify="space-around"
            tag="v-card-text"
          >
          <v-col md="5">
            <p  class="display-1 font-weight-bold">Family Focus</p>
            <p>
              What makes a family worth is physical and eternal value is Love. 
              With love deep rooted in the family, they become indivisible, 
              cohesive, strong and stand by each other no matter what.
              </p>
            <v-btn @click="toHome" color="#DF6C30"> Read More </v-btn>
          </v-col>
          <v-col md="4">
            
              <v-img scr="../assets/family.png" contain>
              </v-img>
            
          </v-col>
            
          </v-row>
        </v-card>
      </v-window-item>
    </v-window>

    
      <v-btn
        text
        @click="prev"
      >
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-btn
        text
        @click="next"
      >
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    
  </v-card>
  <!--Blogs Content-->
  <v-row align="center">
    <v-card id="home">
      <v-row align="center" justify="center">
      <v-col md="3" class="ma-5">
        <v-img 
          src="../assets/HOUSE_2.png"
          max-height="50%"
          contain>
        </v-img>
      </v-col>
      
      <v-col md="4">
        <p>Home</p>
        <p class="text-justify ma-5">A home is the web to which a family is forged, knitted and protected. 
        The building block of every person born, start from the home, which 
        makes the home a very powerful and intricate place of value to every 
        human being. It is imperative as a human, to build; nurture and sustain 
        a home in furtherance of life on earth, pursuit of happiness and 
        wealthiness of body/mind.
        <br>
        <a class="mt-4">Read More</a>
        </p>
        
      </v-col>
      </v-row>
  </v-card>
  </v-row>
  <v-row align="center">
    <v-card id="insp" dark>
      <v-row align="center" justify="center">
      <v-col md="3" class="ma-5">
        <v-img 
          src="../assets/decor.jpg"
          max-height="50%"
          contain>
        </v-img>
      </v-col>
      
      <v-col md="4"><p>Home Decor Inspiration</p>
        <p class="text-justify ma-5">
          As a rule of thumb, 60% of your living room should be a dominant color, 
          30% should be a secondary color, and 10% should be an accent color. 
          Choose dominant and secondary colors you're especially comfortable with. 
          Know that your dominant color choice will greatly impact the room's feel
        <br>
        <a class="mt-4">Read More</a>
        </p>
        
      </v-col>
      </v-row>
  </v-card>
  </v-row>
  <v-row align="center">
    <v-card id="fam">
      <v-row align="center" justify="center">
      <v-col md="3" class="ma-5">
        <v-img 
          src="../assets/family.png"
          max-height="50%"
          contain>
        </v-img>
      </v-col>
      
      <v-col md="4">
        <p>Family Focus</p>
        <p class="text-justify ma-5">
          The family unit is the building block of life for every individual and 
          the stage upon which identity and the first stage of self-awareness is 
          forged. There are certain characteristics and habits we get comfortable 
          with and we often replicate to people around us and to our immediate 
          environment as well because of what we were thought and also impressed 
          on us from our homes. What makes a family worth is physical and eternal 
          value is Love. With love deep rooted in the family, they become 
          indivisible, cohesive, strong and stand by each other no matter what. 
          Having said this, we all will acknowledge that family values are the 
          fundamental principles that make the fibers of our personality 
          indestructible, adaptive and preservative but where that value wasn’t 
          laid well or met with tragic event from childhood then that individual 
          is on thin ice and only a matter of time before they break.
        <br>
        <a class="mt-4">Read More</a>
        </p>
        
      </v-col>
      </v-row>
  </v-card>
  </v-row>
  
  </v-container>
  

</template>

<script>


export default {
components:{
  
  
},
data: () => ({
      length: 3,
      onboarding: 0,
    }),

    methods: {
      next () {
        this.onboarding = this.onboarding + 1 === this.length
          ? 0
          : this.onboarding + 1
      },
      prev () {
        this.onboarding = this.onboarding - 1 === this.length
          ? this.length - 1
          : this.onboarding - 1
      },
      toInspiration () {
      this.$vuetify.goTo('#insp')
      },
      toHome () {
      this.$vuetify.goTo('#home')
      },
      toFam () {
      this.$vuetify.goTo('#fam')
      },
    }
}
</script>

<style scoped>
</style>
