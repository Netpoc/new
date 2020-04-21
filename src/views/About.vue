<template>
<v-container fluid>
  <p class="display-3">About Us</p>
<!-- VISION -->
        <v-row class="mt-5" justify="center">
          <v-col cols="12" class="text-justify">
            <v-img 
            src="@/assets/mission.png" 
            max-width="700px" 
            height="300" >
            </v-img>
          <h1 class="display-1  font-weight-bold ma-2">
            Our Mission
          </h1>
          <p class="ma-2">Our mission is to provide a global housing standard
             by providing the highest number of quality, accessible, comfortable and 
             affordable landed property and houses. This will establish our organization 
             to become a recognized and the most preferred real estate company within the 
             market space through our enviable knack for building relationships with the 
             customers. Our mission is also to enable good systems, tools, products and services for our members of staff to enhance their career and help them achieve highest degree of success in their business and personal lives</p>
          </v-col>
          <v-col cols="12" class="text-justify">
            <v-img 
            src="@/assets/vision.png" 
            max-width="700px" 
            height="300">
            </v-img>
          <h1 class="display-1 font-weight-bold">
            Our Vision
          </h1>
           
          <p >
            Our vision is to achieve the highest possible 
            standard of the real estate industry within the shortest 
            period of time while establishing our firm as a preferred 
            real estate company within the market place
          </p>
          
        </v-col>
          <v-col cols="12" class="text-justify">
          <h1 class="display-1 font-weight-bold">
            Our Values
          </h1><br>
          <p class="pt-0">TRUST</p>
          <p class="pt-0">
            PROMPTNESS</p>
          <p class="pt-0">
            SECURITY</p>
          <p class="pt-0">
            CARING</p>
          <p class="pt-0">
            HUMAN CAPITAL DEVELOPMENT</p>
          <p class="pt-0">
            LEADERSHIP DRIVEN</p>            
          </v-col>
          
          
          
          </v-row>
    
    <v-divider></v-divider>
    <!-- Our Team -->

  <v-card flat>
     <v-row justify="center">
       <p class="display-2 font-weight-bold ma-4">Our Team</p>
     </v-row>
    <v-row justify="space-around">
      
      <v-col md="4">
        <v-img
        src="../assets/opm.png"
        contain
        max-height="260"
        >
        </v-img>
        <p class="font-weight-bold ma-0">MRS. PEACE YETUNDE AKINLOLU</p>
        <p>Operations Manager</p>
      </v-col>
      <v-col md="4">
        <v-img 
        src="../assets/MD1.png"
        contain
        max-height="300"
        >
        
        </v-img>
        <p class="font-weight-bold ma-0">MR. OLUFEMI AKINOLA ADEJUMO</p>
        <p>Managing Director</p>
      </v-col>
      <v-col md="4">
        <v-img 
        src="../assets/alpha.jpeg"
        contain
        max-height="300"
        >
        
        </v-img>
        <p class="font-weight-bold ma-0">Alpha Crew</p>
      </v-col>
    </v-row>
    <p class="display-2">Subsidiaries</p><br>
    <v-row align="center" justify="center">
    
    <v-col md="4">
    <v-img src="@/assets/homes.png" max-height="200" contain></v-img>
    </v-col>
    <v-col md="4">
    <v-img src="@/assets/prestige.png" max-height="200" contain></v-img>
    </v-col>
    
    </v-row>
      <p>Oxford Commercial Services International Limited is 
      a member of Oxford Group Nigeria</p>
      <!-- OXFORD GROUP SECTION -->
      <v-divider inset></v-divider>
      <p class="display-3 ma-4">OXFORD GROUP NIGERIA</p>
      <v-row>
      <v-col md="8">
            <p class="ma-5">Oxford Group is Nigeria’s No.1 most diversified commercial business empire, 
              with interest in various sectors of the economy such as real estate, construction, 
              law, technology, finance, property management and many more. At Oxford Group 
              Nigeria our mission is to deliver top-notch services to all our clients in Nigeria 
              and in diaspora.
            </p>
          </v-col>
          <v-divider vertical></v-divider>
          <v-col md="3">
            <v-img src="../assets/Oxford_Group.png">
            </v-img>
          </v-col>      
    </v-row>
      <v-row>
      
      <v-col md="4">
        <v-img 
        src="../assets/hen.png"
        contain
        max-height="300"
        >
        
        </v-img>
        <p class="font-weight-bold ma-0">MR HENRY OGUNKOREDE</p>
        <p>Group General Manager</p>
      </v-col>
      <v-col md="4">
        <v-img 
        src="../assets/GCE.png"
        contain
        max-height="330"
        >
        
        </v-img>
        <p class="font-weight-bold ma-0">Dr. TENIOLA ADESANYA</p>
        <p>Group Chief Executive</p>
      </v-col>
      <v-col md="4">
        <v-img 
        src="../assets/last_man.png"
        contain
        max-height="300"
        >
        
        </v-img>
        <p class="font-weight-bold ma-0">MR. LESLIE ADEMOLA</p>
        <p>Group Chief Operation Officer</p>
      </v-col>
    </v-row>
    
    
  </v-card>

  
  
</v-container>
</template>

<script>


export default {
components:{
  
  
}
}
</script>

<style scoped>
</style>
