<template>
  <v-app>
    <v-navigation-drawer
      width="300"
      v-model="drawer"
      color="#DEC227"
      absolute
      dark
      temporary 
    >
      <v-list>
        <v-list-item>
          <v-img 
          src="@/assets/Commercial_Logo.png"
          max-height="150"
          contain>
          </v-img>
        </v-list-item>
<v-list-item>
        <v-btn text to="/">Home</v-btn>    
</v-list-item>
<v-list-item>
        <v-btn text to="/About">About Us</v-btn>
</v-list-item>
        <v-list-item>
        <v-btn text to="/Blog">Blog</v-btn>
        </v-list-item>
        <v-list-item>
        <v-btn text to="/ourEstate">Our Estate</v-btn>
        </v-list-item>
        <v-list-item>
        <v-btn text to="/Investment">Investment</v-btn>
        </v-list-item>
        <v-list-item>
        <v-btn text to="/OurEstates">Products</v-btn>
        </v-list-item>
        <v-list-item>
        <v-btn text to="/Products">Services</v-btn>
        </v-list-item>
        <v-list-item>
        <v-btn text to="/Csr">CSR</v-btn><br>
        </v-list-item>
        <v-list-item>
        <v-btn text to="/Contact">Contact Us</v-btn>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    
    <v-app-bar 
     dense 
     flat
     absolute
     app 
     height="80">
      <v-img
      class="mx-2"
      src="@/assets/Commercial_Logo.png"
      max-height="110"
      max-width="110"
      contain
      >
      </v-img>

    <v-spacer></v-spacer>

    <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text  to="/">Home</v-btn>
        <v-menu offset-y open-on-hover>
      <template v-slot:activator="{ on }">
        <v-btn
          text
          to="/About"
          v-on="on"
        >
          About Us <v-icon>mdi-chevron-down</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item>
        <v-btn text to="/Gallery">Gallery</v-btn>
        </v-list-item>
        <v-list-item>
        <v-btn text to="/News">News & Events</v-btn>
        </v-list-item>
      </v-list>
    </v-menu>
        
        <v-btn text  to="/Blog">Blog</v-btn>
        <v-btn text   to="/OurEstates">Our Estates</v-btn>
        <v-btn text to="/Investment">Investment</v-btn>
        
        <v-menu offset-y open-on-hover>
      <template v-slot:activator="{ on }">
        <v-btn
          text
          v-on="on"
        >
          Products<v-icon>mdi-chevron-down</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item>
        <v-btn text to="/ourEstates">Our Estates</v-btn>
        </v-list-item>
        <v-list-item>
        <v-btn text to="/Investment">Investment</v-btn>
        </v-list-item>
        <v-list-item>
        <v-btn text to="/Capital">Oxford Capital</v-btn>
        </v-list-item>
        <v-list-item>
        <v-btn text to="/landTrade">Oxford Land Trade</v-btn>
        </v-list-item>
        <v-list-item>
        <v-btn text to="/Kiddies">Oxford Kiddies' Heritage</v-btn>
        </v-list-item>
      </v-list>
    </v-menu>
      
      <v-menu offset-y open-on-hover>
      <template v-slot:activator="{ on }">
        <v-btn
          text
          to="/Services"
          v-on="on"
        >
          Services<v-icon>mdi-chevron-down</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item>
        <v-btn text to="/Assets">Real Estate Assets Management Services</v-btn>
        </v-list-item>
        <v-list-item>
        <v-btn text to="/realEstate">Real Estate Consultancy Service</v-btn>
        </v-list-item>
        <v-list-item>
        <v-btn text to="/Build">Building & Construction Service</v-btn>
        </v-list-item>
      </v-list>
    </v-menu>
        <v-btn text   to="/Csr">CSR</v-btn>
        <v-btn text  to="/Contact">Contact Us</v-btn>
      </v-toolbar-items>

      <v-app-bar-nav-icon 
      @click.stop="drawer = !drawer">
      </v-app-bar-nav-icon>
      
  </v-app-bar>

  <v-content>
    <v-container class="scroll-y" fluid>
    <router-view/>
    
    </v-container>
   
  </v-content>
  <v-btn
  fab
  dark
  fixed
  bottom
  large
  right
  color="success"
  href="https://api.whatsapp.com/send?phone=2347032771718"
  target="_blank"
  >
<v-icon >mdi-whatsapp</v-icon>
</v-btn> 
  <v-footer
      dark
      padless
      bottom
      color="#DF6C30"
    >
    
    <v-card width="100%">
    <v-row align="center" justify="space-between">
      <v-col md="2" class="caption text-justify ma-5">
        <v-img
        
          src="@/assets/Commercial_Logo.png"
          max-width="40%"
          >
          </v-img>
        <p class="font-weight-bold ma-0">About Us</p>
        <p>
        Oxford Commercial Services International Limited a member of Oxford
          Group Nigeria has judiciously used client’s investment in purchase
          of Estates in 28 Estate locations.
        </p>
      </v-col>
      <v-col md="auto" class="caption text-justify ma-5">
        <p class="font-weight-bold ma-0">Our Products</p>
        <ul>
          <li><v-btn small text to="/Capital">Oxford Capital</v-btn></li>
          <li><v-btn small text to="/landTrade">Oxford Land Trade</v-btn></li>
          <li><v-btn small text to="/Kiddies">Oxford Kiddies' Heritage</v-btn></li>
        </ul>
        <p class="font-weight-bold ma-0">Our Services</p>
        <ul>
          <li><v-btn small text to="/Services">Building & Construction Services</v-btn></li>
          <li><v-btn small text to="/Services">Real Estate Consultancy Service</v-btn></li>
          <li><v-btn small text to="/Services">Real Estate Asset Management Service</v-btn></li>
        </ul>
      </v-col>
      
      <v-col md="auto" class="caption text-justify">
        <p class="font-weight-bold ma-0">Contact Us</p>
        
          <v-icon>mdi-phone-classic</v-icon><p> +234-703-277-1718<br>
              +234-706-153-7139</p>
          <v-icon>mdi-email-newsletter</v-icon>  <p> hello@oxfordcommercial.com.ng</p>
          <v-divider centered></v-divider>
          <p class="font-weight-bold ma-0">Follow Us:</p>
          <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-2 white--text"
          icon
          :href="icon.url"
          :target="icon.target"
          >
          <v-icon>{{icon.name}}</v-icon>
        </v-btn>
            
      </v-col>
    </v-row>
    <v-divider horizontal></v-divider>
        <v-row align="center" no-gutters>
          <v-col cols="4" align-self="center">
          <v-card width="100" 
          flat 
          href="https://netpoc.com.ng" 
          target="_blank"
          >
        <v-img
        src="@/assets/Netpoc.png" 
        max-height="200" 
        >
        </v-img>
        <v-overlay absolute value="false" opacity=".7">
        </v-overlay>

          </v-card>
      </v-col>
      
      <v-col cols="auto" >
        &copy; {{ new Date().getFullYear() }}
        <p
        class="white--text pt-0"
        >
          Oxford Commercial Services International Limited
        </p>
        </v-col>

        </v-row>
        </v-card>
        
    </v-footer>
 
  </v-app>

</template>
<script>


  export default {
    
    data() {
      return {
        overlay: true,
        drawer: null,
        
        icons: [
        {
          name:'mdi-facebook',
          url: 'https://www.facebook.com/oxfordestateng',
          target: '_blank'
        },
        {
          name:'mdi-twitter',
          url: 'https://www.twitter.com/oxfordestate',
          target: '_blank'
        },
        {
          name:'mdi-google-plus',
          url: 'https://www.instagram.com/AfricanTurtles',
          target: '_blank'
        },
        {
          name:'mdi-linkedin',
          url: 'https://www.linkedin.com/AfricanTurtles',
          target: '_blank'
        },
        {
          name:'mdi-instagram',
          url: 'https://www.instagram.com/oxfordcommercials',
          target: '_blank'
        },

      ],
      }
      
    },
    
    
    watch: {
        '$route' (to) {
          document.title = to.meta.title || 'Oxford Commercial Services Ltd.'
        }
      },
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .9;
  position: absolute;
  width: 100%;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: none;
    }
  }
}
</style>
