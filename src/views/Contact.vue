<template>
  <v-container fluid>
    <v-row align="center" justify="space-around">
      
      <v-col md="6" class="ma-3">
        <p class="display-2 font-weight-bold text-justify">Say Hi</p>
        <p class="text-justify">Do you want to make an enquiry, a complaint or you just 
        want to know more about us? Then you’re on the right page. 
        Send us a message right here or contact us on any of the 
        channels lised below.</p>
      </v-col>
      <v-col md="4">
        <v-img src="../assets/contact.png" contain max-width="400">
        </v-img>
      </v-col>
      
    </v-row>
    <v-row align="start" justify="space-around">
            <v-col md="7">
            <p class="display-2 font-weight-bold">
            Leave us a message
          </p>
          <p>Feel free to reach out by leaving us a message below. 
          We promise to get back to you as soon as possible.</p>
            </v-col>
        </v-row>
        
        
        <v-row class="ma-0" align="start" justify="space-around">
        <v-col md="7">
        <v-form
        id="contact-form" 
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
        :rules="subjectRules"
        v-model="subject"
        label="Subject"
        required
        >
        </v-text-field>
        <v-textarea
          :rules="messageRules"
          v-model="message"
          filled
          auto-grow
          label="Write message here..."
          rows="3"
          row-height="30"
          shaped
        ></v-textarea>
        </v-form>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
          :disabled="!valid" 
          @click="sendMessage(), reset(), dialog=true, validate" 
          color="#DF6C30" 
          class="white--text"
          >Send</v-btn>
        </v-card-actions>
        <v-dialog
      v-model="dialog"
      hide-overlay
      persistent
      max-width="300"
    >
      <v-card
        color="primary"
        dark
      >
      <v-card-text v-if="status===true">
      <v-alert type="success">
        {{notification}}
        </v-alert>
        <v-btn @click="dialog = false">Close</v-btn>
      </v-card-text>
        <v-card-text v-if="status===false">
          Please stand by, your message is been sent.
          <v-progress-linear
            indeterminate
            color="white"
            class="mb-0"
          ></v-progress-linear>

        </v-card-text>
      </v-card>
    </v-dialog> 
        
        </v-col>
       
        <v-col md="4" align="left">
          <v-icon>mdi-phone-classic</v-icon><p> +234-703-277-1718<br>
              +234-706-153-7139</p>
          <v-icon>mdi-email-newsletter</v-icon>  <p> hello@oxfordcommercial.com.ng</p>
          <v-icon>mdi-map-marker</v-icon>
          <p>House 291, 3rd Avenue,<br> 331 road, I Close, <br>
            Gowon Estate, <br>Egbeda Lagos.
          </p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d495.42096844193816!2d3.285564872405209!3d6.601138323817965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1586206760246!5m2!1sen!2sng" 
          width="400" 
          height="200" 
          frameborder="0" 
          style="border:0;" 
          allowfullscreen="" 
          aria-hidden="false" 
          tabindex="0">
          </iframe>
        </v-col>
        
        </v-row>
        
  </v-container>
  

</template>

<script>
import axios from 'axios'

export default {
  components: {
   
  },

  data()  {
    return {
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
    subject:'',
    subjectRules: [
      v => !!v || 'Subject is required',
    ],
    message:'',
    messageRules: [
      v => !!v || 'Please add some content to your feedback.',
    ],

    notification: '',
    
      
    }
  },
  methods: {
    sendMessage(){

      const url = 'http://192.3.2.50:51100/contact/'
      axios.post(url, {
        email: this.email,
        subject: this.subject,
        message: this.message,
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

<style scoped>
</style>
