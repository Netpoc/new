<template>
    <v-container fluid>
        <v-row align="center" justify="center">
      <p class="display-3">Our Services</p>
      </v-row>
      
      <v-row align="start" justify="space-around" no-gutters>
        <p>Oxford Commercial Services, deem it fit to also render these services within the confine and dictate of our business model in real estate
          Services include:</p>
          <v-col md="3">
            <v-img src="../assets/building.jpeg" 
            max-height="300" 
            contain>
            </v-img>
            <p class="orange--text 
            font-weight-bold mt-3">
            <v-icon 
            large>mdi-account-hard-hat
            </v-icon>
            Building & Construction Services
            </p>
            
            <p class="ma-2">
              We render services in building houses of any model to our clients, 
              prospect and general public alike. We are also available for 
              construction as we have a reliable engineering team that can 
              handle any construction project.
            </p>
            <v-btn icon to="/About"><v-icon>mdi-arrow-right</v-icon></v-btn>
          </v-col>
          <v-divider vertical inset></v-divider>

          <v-col md="3">
            <v-img src="../assets/consultance.jpeg" 
            max-height="300" 
            contain>
            </v-img>
            <p class="orange--text 
            font-weight-bold mt-3">
            <v-icon 
            large>
            mdi-home-group
            </v-icon>
            Real Estate Consultancy Service
            </p>
            
            <p class="ma-2">
              Over the years, we have gained experience and also acquire sound 
              knowledge via training and retraining in the real estate sector 
              which has put us at a vantage point to offer expertise information 
              as regard real estate that can help our teeming clients or prospects 
              seeking help from us. 
            </p>
            <v-btn icon to="/OurEstates"><v-icon>mdi-arrow-right</v-icon></v-btn>
          </v-col>
          <v-divider vertical inset></v-divider>

          <v-col md="3">
            <v-img src="../assets/estate_mgt.jpeg" 
            height="230" 
            >
            </v-img>
            
            <p class="orange--text 
            font-weight-bold mt-3">
            <v-icon large>
              mdi-chart-line
              </v-icon>
              Real Estate Asset Management Service
              </p>
            
            <p class="ma-2">
              We also realise that many individuals have properties that required 
              sound and professional management. We manage client Asset both fixed, 
              liquid and tangible and multiply their value, appreciable in multiple of 
              their original value in shortest period of time.
            </p>
            <v-btn icon to="/OurEstates"><v-icon>mdi-arrow-right</v-icon></v-btn>
          </v-col>
      </v-row>
    </v-container>
</template>
<script>
export default {
    
  }

</script>
