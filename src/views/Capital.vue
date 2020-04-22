<template>
    <v-conatiner fluid>
        <p class="display-3">Oxford Capital</p>
          <v-row class="ma-5">
              
            <v-col md="8">
              
              <p class="text-justify ml-5">
                 Oxford Capital is a legacy investment, and a capital investment, that gives 
                 up to 300% return on investment in less than two years and it’s a one in life 
                 time business opportunity for investors. It is a capital investment and a 
                 Joint ventured investment model that runs through out a life time, meaning 
                 endless income as long as the business contract exist. It centres on land development 
                 either as estate, court, villa or city depending on capital involvement
                Oxford Capital Investment simply offer investment avenue for prospective investors to 
                make enormous returns through land investment development. How this work is in 
                two distinct features, Oxford Capital and Capital Plus.
                Oxford Capital investment is about landed property acquisition and development which 
                covers only the basic amenities and infrastructure such as gate & perimeter fencing, 
                security, road layout with interlocking road network, portable water, Light etc.
                Oxford Capital Plus investment has all the features of Oxford Capital but the 
                difference is just that there would be structural Development on the landed property 
                as added value, which would be then offer for sale to the public and our investors 
                smiling to the bank with enormous profits
              </p>

              <!-- CALL TO ACTION DIALOG -->
            <v-dialog v-model="dialog" persistent max-width="600">
            <template v-slot:activator="{ on }">
              <v-btn
                v-on="on"
                rounded
                absolute
                color="orange"
                class="white--text"
                large
              >
                Get started
              </v-btn>
            </template>
            <v-card>
              <v-row>
                <v-col class="ma-4">
                  <strong class="display-1">Oxford Capital Application</strong>
                  <v-form
                  id="capital-form" 
                  method="POST"
                  ref="form"
                  v-model="valid"
                  :lazy-validation="lazy"
                  >
                    <v-text-field
                    :rules="nameRules"
                    v-model="name"
                    label="Name"
                    required
                    >
                    </v-text-field>
                    <v-text-field
                    :rules="emailRules"
                    v-model="email"
                    label="Email"
                    required
                    >
                    </v-text-field>
                    <v-text-field
                    :rules="phoneRules"
                    v-model="phone"
                    label="Phone"
                    required
                    >
                    </v-text-field>
                  </v-form>
                </v-col>
              </v-row>
            <v-card-actions class="ma-2">
              <v-btn 
              color="success" 
              rounded
              :disabled="!valid" 
              @click="sendMessage(), 
              reset(), 
              popAlert=true, 
              validate"
              >Submit</v-btn>
            <v-spacer></v-spacer>
            
            <v-btn color="green darken-1" @click="dialog = false">Close</v-btn>
            </v-card-actions>
            
            </v-card>
            </v-dialog>
            
          <!-- CALL TO ACTION MAIL DELIVERY STATUS DIALOG -->
            <v-dialog
              v-model="popAlert"
              hide-overlay
              persistent
              max-width="400"
            >
            
              <v-card max-height="100%"
              class="ma-4"
              color="success"
              v-if="status===true"
              >
                <p class="ma-5">{{notification}}</p>
                
                <v-btn @click="popAlert = false">Close</v-btn>
              
              <v-card-text v-if="status===false">
                Please stand by, your message is been sent.
                  <v-progress-linear
                    class="mb-0"
                    indeterminate
                    color="white">
                  
                  </v-progress-linear>
                  </v-card-text>
              </v-card>
            </v-dialog> 

            </v-col>
            <v-col md="3">
              <v-img src="../assets/money.png" max-height="300" contain>
              </v-img>
            </v-col>
          </v-row>
          <v-row class="ma-5">
            
            <v-expansion-panels flat focusable tile accordion align="center">
              
            <v-expansion-panel
            >
            <p class="display-2">FREQUENTLY ASKED QUESTIONS (FAQs)</p>
            <v-expansion-panel-header>Where is the location?</v-expansion-panel-header>
            <v-expansion-panel-content>
            <p class="ma-3">Answer - All our locations are situated in prime developing areas of Lagos, 
            Abeokuta & Ibadan with ongoing development which makes them suitable for 
            investors, featuring notable landmarks.
            </p>
            </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel
            >
            <v-expansion-panel-header>How much is the total cost involved?</v-expansion-panel-header>
            <v-expansion-panel-content>
            <p class="ma-3">Answer-  This has to be worked out because of varying aspect of the project involvement.
            </p>
            </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel
            >
            <v-expansion-panel-header>Will Amenities be assessed?</v-expansion-panel-header>
            <v-expansion-panel-content>
            <p class="ma-3">Answer- Yes.
            </p>
            </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel
            >
            <v-expansion-panel-header>Is it easy to access the main road?</v-expansion-panel-header>
            <v-expansion-panel-content>
            <p class="ma-3">Answer- Definitely yes. One reason that makes us your number stop is the 
              locations of our estate nearness to commercial activities and road link 
              to the main high way.
            </p>
            </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel
            >
            <v-expansion-panel-header>What documents have you on the estate?</v-expansion-panel-header>
            <v-expansion-panel-content>
            <p class="ma-3">   Answer-  Documentes on our locations varies from registered survey to 
              Certificate of Occupancy. Non is under government accusition.
            </p>
            </v-expansion-panel-content>
            </v-expansion-panel>

            <v-expansion-panel
            >
            <v-expansion-panel-header>Is the land safe and free from land grabbers (omo’nile)</v-expansion-panel-header>
            <v-expansion-panel-content>
            <p class="ma-3">   Answer- Yes, because we have painstakingly removed the issue of land grabbers from the equation. 
            </p>
            </v-expansion-panel-content>
            </v-expansion-panel>
            </v-expansion-panels>
          </v-row>
    </v-conatiner>
</template>
<script>
import axios from 'axios'

export default {

  data()  {
    return {
      popAlert: false,
      dialog: false,
      status: false,
      valid: true,
    name:'',
    nameRules: [
        v => !!v || 'Name is required',
        
      ],
      phone:'',
      phoneRules: [
        v => !!v || 'Phone numeber is required',
      ],

    email:'',
    emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],

    notification: '',
    
      
    }
  },
  methods: {
    sendMessage(){

      const url = 'https://192.3.2.50:51100/contact/'
      axios.post(url, {
        email: this.email,
        subject: "Oxford Capital Enquiry",
        phone: this.phone,
        name: this.name
      }).then(response => {
        this.notification = response.data;
        this.status = true;
      })
      .catch(error => {
        this.notification= error;
        this.status= true;
        
      })
    },
    validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
  },
}
</script>