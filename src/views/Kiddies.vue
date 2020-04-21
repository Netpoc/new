<template>
    <v-row>
        <v-card id="kiddies" color="#2F84C6" dark height="620">
          <v-row align="center" justify="space-around" class="ma-5">
            <v-col md="7">
              <p class="display-2 font-weight-bold">OXFORD KIDDIES' HERITAGE</p>
              <p class="ma-5">This product is designed to help parent invest ahead of time for 
                their kids in other to secure a better future ground to stand upon. 
                This product helps parent to invest in their children’s’ future by 
                buying into real estate solutions, which simply translate parent 
                buying landed property ahead of time for their kids because of the 
                appreciative value landed property is known for. This product is 
                ever increasing in value therefore, by the time the children are 
                of age the value of the land is exponentially high and they can 
                convert it to cash by selling the land should they choose or they 
                can simply develop the property to keep the heritage going on the 
                landed property. This product solution is designed to be affordable 
                and flexible in payment plan which is done installmentally, up-to 
                24 months. The beauty of all this, is that the choice of location 
                will always beat inflation at any point in time in the future.
              </p>
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
                  
                  <strong class="display-1">Oxford Kiddies's Heritage Application</strong>
                  <v-form id="capital-form" 
                  method="POST"
                  ref="form"
                  v-model="valid"
                  :lazy-validation="lazy">
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

            <v-dialog
              v-model="popAlert"
              hide-overlay
              persistent
              max-width="400"
             
              color="success"
            >
              <v-card max-height="100%"
              class="ma-4"
              >
                <p v-if="status===true" class="ma-5">{{notification}}</p>
                
                <v-btn @click="popAlert = false">Close</v-btn>
                <span v-if="status===false">
                Please stand by, your message is been sent.
                  <v-progress-linear
                    
                    indeterminate
                    color="white">
                  
                  </v-progress-linear>
                  </span>
              </v-card>
            </v-dialog> 

            </v-col>
            
            <v-col md="4">
              <v-img src="../assets/family.png" 
              contain 
              height="100%">
              </v-img>
            </v-col>
          </v-row>
        </v-card>
      </v-row>
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

      const url = 'http://192.3.2.50:51100/contact/'
      axios.post(url, {
        email: this.email,
        subject: "Oxford Kiddies Heritage Enquiry",
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