<template>
    <v-container fluid>
      <p class="display-3">Oxford Land Trade</p>
      <v-row>
        <v-card id="trade" height="620" width="100%" flat>
          <v-row align="center" class="ma-5">
            <v-col md="4">
              <v-img src="../assets/money-back.png" max-height="50%">
              </v-img>
            </v-col>
            <v-col md="8">
              
              <p class="ma-5">This product trade on land in unit per square meters which when 
                purchased by investors would receive a certificate which can be 
                used as a means of trade instrument and they get profit through 
                the increase on the value of the land as it appreciates. Imagine 
                the stock market where shares and equities of commodities are 
                traded but in this model, the commodity is land and instead of 
                the commodity broken into shares, this time the commodity is 
                broken down into units and measured in per square meters. Minimum 
                unit per square meters available for trade is 1000 units. The 
                product comes it's security packages which include; insurance, 
                deed of agreement, 1000 sqm of equivalent location.
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
                  <strong class="display-1">Oxford Land Trade Application</strong>
                  <v-form
                  id="landTrade-form" 
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
              validate">Submit</v-btn>
            <v-spacer></v-spacer>
            
            <v-btn color="green darken-1" @click="dialog = false">Close</v-btn>
            </v-card-actions>
            </v-card>
            </v-dialog>

            <v-dialog
              v-model="popAlert"
              hide-overlay
              persistent
              width="400"
              class="mx-5"
            >
              <v-card
                color="success"
                dark
                max-height="100%"
              >
                <p v-if="status===true" class="ma-5">{{notification}}</p>
                <div v-if="status===false">
                  Please stand by, your message is been sent.
                
                  <v-progress-linear
                  
                    indeterminate
                    color="white"
                    
                  >
                  
                  </v-progress-linear>

                </div>
                <v-btn @click="popAlert = false">Close</v-btn>
              </v-card>
            </v-dialog> 
            </v-col>
          </v-row>

        </v-card>
      </v-row>
      
    </v-container>
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
        subject: "Oxford Land Trade Enquiry",
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