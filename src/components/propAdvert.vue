<template>
  <v-item-group mandatory>
    <v-container fluid>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-hover v-slot:default="{ hover }">
    <v-card
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
    >
      <v-img
        :aspect-ratio="16/9"
        src="@/assets/1.jpg"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            
            class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal white--text"
            style="height: 100%;"
          >
            <v-row class="ma-3" no-gutters align="top" justify="spaced-around">
                <v-col cols="12" >
                        <v-icon>mdi-currency-ngn <v-divider vertical></v-divider></v-icon>
                        <p>Flexible payment plan</p>
                        
                </v-col>

                <v-col cols="12" md="6">
                        <v-icon>mdi-cctv</v-icon><v-divider inset vertical></v-divider>
                        <p>Perimeter fence with gate house</p>
                </v-col>
                <v-col cols="12" md="6">        
                        <v-icon>mdi-water-pump<v-divider vertical></v-divider></v-icon>
                        <p>Water service treatment</p>
                </v-col>
                
                <v-col cols="12" md="6">        
                        <v-icon>mdi-file-document-edit-outline<v-divider vertical></v-divider></v-icon>
                        <p>Instant Allocation</p>
                </v-col>
                
            </v-row>
          </div>
        </v-expand-transition>
      </v-img>
      <v-card-text
        class="pt-6"
        style="position: relative;"
      >
      <!-- Dialog -->
      <v-dialog v-model="dialog" persistent max-width="850">
          <template v-slot:activator="{ on }">
        <v-btn
        v-on="on"
          absolute
          color="orange"
          class="white--text"
          fab
          large
          right
          top
        >
          <v-icon>mdi-magnify-scan</v-icon>
        </v-btn>
          </template>
          <v-card>
        
        <v-card-text>
            <v-row  align="center" justify="center" class="mb-3">
              <p class="display-2">LAGOS ESTATES</p>
                <v-card color="#2F84C6" flat>
                  <p class="display-1 mt-2">BACKLAYS COURT, IPAJA</p>
                    <v-row align="START">
                <v-col cols="4" class="ma-2">
                    <v-img src="@/assets/22.jpg" max-width="450" contain>
                    </v-img>
                </v-col>
                <v-col cols="7">
                    
                    <v-expansion-panels focusable flat>
                    <v-expansion-panel
                    >
                    <v-expansion-panel-header class="font-weight-bold">BACKLAYS COURT(OXFORD ESTATE)</v-expansion-panel-header>
                    <v-expansion-panel-content eager>
                        <p class="text-justify ma-2"> The ESTATE is located in the heart of Ipaja, Lagos mainland, 
                    fully developed and ready for instant allocation. It is three 
                    minutes drive from the Baruwa Estate Gate. Boystown is opposite 
                    the fence of Saint Ferdinand Catholic Church.</p>
                    </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                    <v-expansion-panel-header>Sizes <v-spacer></v-spacer><v-icon>mdi-tape-measure</v-icon></v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <p class="ma-1">600 Sqm | 300 Sqm | 450 Sqm</p>
                    </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                    <v-expansion-panel-header>TITLE: <v-spacer></v-spacer><v-icon>mdi-file-document-outline</v-icon></v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <p> Court Judgment, Registered Survey and Deed of Assignment.</p>
                    </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                    <v-expansion-panel-header>FEATURES <v-spacer></v-spacer><v-icon>mdi-feather</v-icon></v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <p>
                    • Fully fenced with gate house
                    • Secured Community
                    • Flexible Payment Plan
                    • Well Designed Layout
                    • Highly Developed environment.
                    WHY YOU SHOULD BUY?
                    1. The whole road to the estate is interlocked
                    2. The estate is just 120 plots. Development 
                    will be rapid unlike other big estates
                    3. SHOPRITE IS COMING TO BOYSTOWN, less than a 
                    minute drive to BACKLAYS COURT BOYSTOWN IPAJA</p>
                    <p>ESTATE NEIGHBORHOOD:
                    1. Gowon Housing Estate.
                    2. Abesan Housing Estate.
                    3. Honeyland School.
                    4. St. Ferdinand Catholic Church.</p>
                    </v-expansion-panel-content>
                    </v-expansion-panel>
                    </v-expansion-panels>
                
                    
                </v-col>
                    </v-row>
                </v-card>
            </v-row>
            <v-row class="mb-3">
                <v-card color="#2F84C6" flat>
                  <p class="display-1 mt-2">OXFORD ESTATE FESTAC TOWN</p>
                    <v-row align="start">
                <v-col cols="4" class="ma-2">
                    <v-img src="@/assets/1.jpg" max-width="450" contain>
                    </v-img>
                </v-col>
                <v-col cols="7">
                    
                    <v-expansion-panels focusable flat>
                    <v-expansion-panel
                    >
                    <v-expansion-panel-header>Description</v-expansion-panel-header>
                    <v-expansion-panel-content>
                        A master piece estate carefully designed to suit all those seeking 
                        to invest or build to live in. OXFORD ESTATE Festac Town is one of 
                        the beautiful estate subscribers cannot stop talking about, as it 
                        remains the most popular and best with development springing up as 
                        the speed of light. With Residential and commercial houses being 
                        built, people are trooping daily into this sub-urban estate which 
                        is situated behind the INTERNATIONAL TRADE-FAIR COMPLEX, West-Africa's 
                        largest mixed market. The area is also close to the INTERNATIONAL 
                        BUILDING MATERIAL MARKET COKER, FESTAC TOWN, ALABA INTERNATIONAL 
                        MARKET, APAPA SEAPORT, LAGOS SATELLITE TOWN, NAVY TOWN, the 
                        INTERNATIONAL MARKET and BADAGRY EXPRESS ROAD-connecting Nigeria to 
                        other West Africa countries. Location: Oxford estate is located at 
                        Military Check point, 6th/7th Avenue, Festac Town Lagos, with 5mins 
                        away drive from Alakija junction and 2nd Gate Festac town.
                    </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                    <v-expansion-panel-header>Sizes <v-spacer></v-spacer><v-icon>mdi-tape-measure</v-icon></v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <p class="ma-1">600 Sqm | 300 Sqm | 450 Sqm</p>
                    </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                    <v-expansion-panel-header>TITLE: <v-spacer></v-spacer><v-icon>mdi-file-document-outline</v-icon></v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <p> REGISTERED SURVEY</p>
                    </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                    <v-expansion-panel-header>FEATURES <v-spacer></v-spacer><v-icon>mdi-feather</v-icon></v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <p>
                    - Serene environment
                    - Electricity and power
                    - Well-designed layout
                    - High population density leading to greater demand of housing unit.
                    - Standard drainage system
                    - Commercial hub
                    - Safe Environment with an organized security system.
                    - Properly designed road network.</p>
                    </v-expansion-panel-content>
                    </v-expansion-panel>
                    </v-expansion-panels>
                
                    
                </v-col>
                    </v-row>
                </v-card>
            </v-row>

            <v-row class="mb-3">
                <v-card color="#2F84C6" flat>
                  <p class="display-1 mt-2">ELEGANZA ESTATE, IBEJU-LEKKI</p>
                    <v-row align="start">
                <v-col cols="4" class="ma-2">
                    <v-img src="@/assets/19.jpg" max-width="450" contain>
                    </v-img>
                </v-col>
                <v-col cols="7">
                    
                    <v-expansion-panels focusable flat>
                    <v-expansion-panel
                    >
                    <v-expansion-panel-header>Description</v-expansion-panel-header>
                    <v-expansion-panel-content>
                        A master piece estate carefully designed to suit all those seeking 
                        to invest or build to live in. OXFORD ESTATE Festac Town is one of 
                        the beautiful estate subscribers cannot stop talking about, as it 
                        remains the most popular and best with development springing up as 
                        the speed of light. With Residential and commercial houses being 
                        built, people are trooping daily into this sub-urban estate which 
                        is situated behind the INTERNATIONAL TRADE-FAIR COMPLEX, West-Africa's 
                        largest mixed market. The area is also close to the INTERNATIONAL 
                        BUILDING MATERIAL MARKET COKER, FESTAC TOWN, ALABA INTERNATIONAL 
                        MARKET, APAPA SEAPORT, LAGOS SATELLITE TOWN, NAVY TOWN, the 
                        INTERNATIONAL MARKET and BADAGRY EXPRESS ROAD-connecting Nigeria to 
                        other West Africa countries. Location: Oxford estate is located at 
                        Military Check point, 6th/7th Avenue, Festac Town Lagos, with 5mins 
                        away drive from Alakija junction and 2nd Gate Festac town.
                    </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                    <v-expansion-panel-header>Sizes <v-spacer></v-spacer><v-icon>mdi-tape-measure</v-icon></v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <p class="ma-1">600 Sqm | 300 Sqm | 450 Sqm</p>
                    </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                    <v-expansion-panel-header>TITLE: <v-spacer></v-spacer><v-icon>mdi-file-document-outline</v-icon></v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <p> REGISTERED SURVEY</p>
                    </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                    <v-expansion-panel-header>FEATURES <v-spacer></v-spacer><v-icon>mdi-feather</v-icon></v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <p>
                    - Serene environment
                    - Electricity and power
                    - Well-designed layout
                    - High population density leading to greater demand of housing unit.
                    - Standard drainage system
                    - Commercial hub
                    - Safe Environment with an organized security system.
                    - Properly designed road network.</p>
                    </v-expansion-panel-content>
                    </v-expansion-panel>
                    </v-expansion-panels>
                
                    
                </v-col>
                    </v-row>
                </v-card>
            </v-row>

            <v-row class="mb-3">
                <v-card color="#2F84C6" flat>
                  <p class="display-1 mt-2">OXFORD ESTATE, IMOTA, IKORODU</p>
                    <v-row align="start">
                <v-col cols="4" class="ma-2">
                    <v-img src="@/assets/10.jpg" max-width="450" contain>
                    </v-img>
                </v-col>
                <v-col cols="7">
                    
                    <v-expansion-panels focusable flat>
                    <v-expansion-panel
                    >
                    <v-expansion-panel-header>Description</v-expansion-panel-header>
                    <v-expansion-panel-content>
                        A master piece estate carefully designed to suit all those seeking 
                        to invest or build to live in. OXFORD ESTATE Festac Town is one of 
                        the beautiful estate subscribers cannot stop talking about, as it 
                        remains the most popular and best with development springing up as 
                        the speed of light. With Residential and commercial houses being 
                        built, people are trooping daily into this sub-urban estate which 
                        is situated behind the INTERNATIONAL TRADE-FAIR COMPLEX, West-Africa's 
                        largest mixed market. The area is also close to the INTERNATIONAL 
                        BUILDING MATERIAL MARKET COKER, FESTAC TOWN, ALABA INTERNATIONAL 
                        MARKET, APAPA SEAPORT, LAGOS SATELLITE TOWN, NAVY TOWN, the 
                        INTERNATIONAL MARKET and BADAGRY EXPRESS ROAD-connecting Nigeria to 
                        other West Africa countries. Location: Oxford estate is located at 
                        Military Check point, 6th/7th Avenue, Festac Town Lagos, with 5mins 
                        away drive from Alakija junction and 2nd Gate Festac town.
                    </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                    <v-expansion-panel-header>Sizes <v-spacer></v-spacer><v-icon>mdi-tape-measure</v-icon></v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <p class="ma-1">600 Sqm | 300 Sqm | 450 Sqm</p>
                    </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                    <v-expansion-panel-header>TITLE: <v-spacer></v-spacer><v-icon>mdi-file-document-outline</v-icon></v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <p> REGISTERED SURVEY</p>
                    </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                    <v-expansion-panel-header>FEATURES <v-spacer></v-spacer><v-icon>mdi-feather</v-icon></v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <p>
                    - Serene environment
                    - Electricity and power
                    - Well-designed layout
                    - High population density leading to greater demand of housing unit.
                    - Standard drainage system
                    - Commercial hub
                    - Safe Environment with an organized security system.
                    - Properly designed road network.</p>
                    </v-expansion-panel-content>
                    </v-expansion-panel>
                    </v-expansion-panels>
                
                    
                </v-col>
                    </v-row>
                </v-card>
            </v-row>
        </v-card-text>
        <v-card-actions class="ma-2">
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" @click="dialog = false">Close</v-btn>
          
        </v-card-actions>
      </v-card>
    </v-dialog>
        <div class="font-weight-light grey--text title mb-2">Premium Offers</div>
        <h3 class="display-1 font-weight-light orange--text mb-2">LAGOS ESTATES</h3>
        <div class="font-weight-light title mb-2">
          IBEJU-LEKKI | FESTAC TOWN | ISHERI-OLOFIN | IKORODU | BOYS-TOWN IPAJA
        </div>
      </v-card-text>
    </v-card>
  </v-hover>
        </v-col>

<!--- Second Estate ad Ogun State -->
        <v-col
          cols="12"
          md="4"
        >
          <v-hover v-slot:default="{ hover }">
            <v-card
            class="mx-auto"
            color="grey lighten-4"
            max-width="600"
            >
            <v-img
                :aspect-ratio="16/9"
                src="@/assets/16.jpg"
            >
                <v-expand-transition>
                <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal white--text"
                    style="height: 100%;"
                >
                    <v-row class="ma-3" no-gutters align="top" justify="spaced-around">
                        <v-col cols="12" >
                                <v-icon>mdi-currency-ngn</v-icon>
                                <p>Flexible payment plan</p>
                                
                        </v-col>

                        <v-col cols="12" md="6">
                                <v-icon>mdi-cart-plus</v-icon>
                                <p>Shopping mall</p>
                        </v-col>
                        <v-col cols="12" md="6">        
                                <v-icon>mdi-account-question-outline</v-icon>
                                <p>No Land grabbers (Omo-Onile)</p>
                        </v-col>
                        
                        <v-col cols="12" md="6">        
                                <v-icon>mdi-file-document-edit-outline</v-icon>
                                <p>Instant Allocation</p>
                        </v-col>
                        
                    </v-row>
                </div>
                </v-expand-transition>
            </v-img>
            <v-card-text
                class="pt-6"
                style="position: relative;"
            >
                <v-dialog v-model="ogun" persistent max-width="850">
                <template v-slot:activator="{ on }">
                <v-btn
                v-on="on"
                absolute
                color="orange"
                class="white--text"
                fab
                large
                right
                top
                >
                <v-icon>mdi-magnify-scan</v-icon>
                </v-btn>
                </template>

               <!-- MAIN DIALOG CONTENT -->
                <v-card color="#DF6C30" dark>
                <v-card-text>
                    <v-card-text>
                    <v-row align="center" justify="center" class="mb-3">
                          <p class="display-2">OGUN ESTATES</p>
                      <v-card flat>
                        <v-row align="start">
                          <v-col cols="4" class="ma-2">
                            <v-img src="@/assets/zaam.jpg" max-width="450" contain>
                            </v-img>
                          </v-col>
                        <v-col cols="7">
                    
                            <v-expansion-panels focusable flat>
                            <v-expansion-panel
                            >
                            <v-expansion-panel-header>ZAAM ESTATE (OXFORD ESTATE ADEKOYENI ATAN-OTA)</v-expansion-panel-header>
                            <v-expansion-panel-content eager>
                                LOCATION: Its located at Adekoyeni, 5mins away drive from Winners Chapel, and Covenant University.
                            </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel>
                            <v-expansion-panel-header>Sizes <v-spacer></v-spacer><v-icon>mdi-tape-measure</v-icon></v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <p class="ma-1">600 Sqm | 300 Sqm | 450 Sqm</p>
                            </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel>
                            <v-expansion-panel-header>TITLE: <v-spacer></v-spacer><v-icon>mdi-file-document-outline</v-icon></v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <p>Registered Survey</p>
                            </v-expansion-panel-content>
                            </v-expansion-panel>
                            <v-expansion-panel>
                            <v-expansion-panel-header>FEATURES <v-spacer></v-spacer><v-icon>mdi-feather</v-icon></v-expansion-panel-header>
                            <v-expansion-panel-content>
                                <p>
                                *Shopping mall
                                *Civic Center
                                *Modern School
                                *Fenced with gate house
                                *Water Service Treatment
                                *Good drainage system with interlocked road.
                                *Stable Power Supply
                                *Flexible Payment Plans (Outright and Instalment)
                                *No Land grabbers (Omo-Onile)
                                *Instant Allocation
                                *Highly Developed environment
                                </p>
                            </v-expansion-panel-content>
                            </v-expansion-panel>
                            </v-expansion-panels>
                        </v-col>
                    </v-row>
                </v-card>
                    </v-row>
                    <v-row>
                        <v-card flat>
                    <v-row>
                <v-col cols="4" class="ma-2">
                    <v-img src="@/assets/abk2.jpg" max-width="450" contain>
                    </v-img>
                </v-col>
                <v-col cols="7">
                    
                    <v-expansion-panels focusable flat>
                    <v-expansion-panel
                    >
                    <v-expansion-panel-header class="font-weight-bold">BACKLAYS COURT(OXFORD ESTATE)</v-expansion-panel-header>
                    <v-expansion-panel-content eager>
                        <p class="text-justify">The ESTATE is located in the heart of Ipaja, Lagos mainland, 
                    fully developed and ready for instant allocation. It is three 
                    minutes drive from the Baruwa Estate Gate. Boystown is opposite 
                    the fence of Saint Ferdinand Catholic Church.</p>
                    </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                    <v-expansion-panel-header>Sizes <v-spacer></v-spacer><v-icon>mdi-tape-measure</v-icon></v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <p class="ma-1">600 Sqm | 300 Sqm | 450 Sqm</p>
                    </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                    <v-expansion-panel-header>TITLE: <v-spacer></v-spacer><v-icon>mdi-file-document-outline</v-icon></v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <p> Court Judgment, Registered Survey and Deed of Assignment.</p>
                    </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                    <v-expansion-panel-header>FEATURES <v-spacer></v-spacer><v-icon>mdi-feather</v-icon></v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <p>
                    • Fully fenced with gate house
                    • Secured Community
                    • Flexible Payment Plan
                    • Well Designed Layout
                    • Highly Developed environment.
                    WHY YOU SHOULD BUY?
                    1. The whole road to the estate is interlocked
                    2. The estate is just 120 plots. Development 
                    will be rapid unlike other big estates
                    3. SHOPRITE IS COMING TO BOYSTOWN, less than a 
                    minute drive to BACKLAYS COURT BOYSTOWN IPAJA</p>
                    <p>ESTATE NEIGHBORHOOD:
                    1. Gowon Housing Estate.
                    2. Abesan Housing Estate.
                    3. Honeyland School.
                    4. St. Ferdinand Catholic Church.</p>
                    </v-expansion-panel-content>
                    </v-expansion-panel>
                    </v-expansion-panels>
                
                    
                </v-col>
                    </v-row>
                </v-card>
                    </v-row>
                </v-card-text>
                    </v-card-text>
                <v-card-actions class="ma-2">
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" @click="ogun = false">Close</v-btn>
                
                </v-card-actions>
            </v-card>
            </v-dialog>
                <div class="font-weight-light grey--text title mb-2">Premium Offers</div>
                <h3 class="display-1 font-weight-light orange--text mb-2">OGUN ESTATES</h3>
                <div class="font-weight-light title mb-2">
                ATAN-OTA | SHAGAMU | IBAFO | MOWE SHIMAWA
                </div>
            </v-card-text>
            </v-card>
        </v-hover>
        </v-col>
        <!-- Lagos End Here-->

        <v-col
          cols="12"
          md="4"
        >
          <v-hover v-slot:default="{ hover }">
    <v-card
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
    >
      <v-img
        :aspect-ratio="16/9"
        src="@/assets/6.jpg"
      >
        <v-expand-transition>
          <div
                    v-if="hover"
                    class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal white--text"
                    style="height: 100%;"
                >
                    <v-row class="ma-3" no-gutters align="top" justify="spaced-around">
                        <v-col cols="12" >
                                <v-icon>mdi-currency-ngn</v-icon>
                                <p>Flexible payment plan</p>
                                
                        </v-col>

                        <v-col cols="12" md="6">
                                <v-icon>mdi-cart-plus</v-icon>
                                <p>Shopping mall</p>
                        </v-col>
                        <v-col cols="12" md="6">        
                                <v-icon>mdi-account-question-outline</v-icon>
                                <p>No Land grabbers (Omo-Onile)</p>
                        </v-col>
                        
                        <v-col cols="12" md="6">        
                                <v-icon>mdi-file-document-edit-outline</v-icon>
                                <p>Instant Allocation</p>
                        </v-col>
                        
                    </v-row>
                </div>
                
        </v-expand-transition>
      </v-img>
      <v-card-text
        class="pt-6"
        style="position: relative;"
      >
        <v-dialog v-model="oyo" persistent max-width="800" scrollable>
          <template v-slot:activator="{ on }">
        <v-btn
        v-on="on"
          absolute
          color="orange"
          class="white--text"
          fab
          large
          right
          top
        >
          <v-icon>mdi-magnify-scan</v-icon>
        </v-btn>
          </template>


        <!-- OYO STATE MAIN CONTENT -->
        <v-card>
        
        <v-card-text>
            <v-row justify="center">
              <p class="display-2"> OYO ESTATES</P>
              <v-card>
                <v-row>
                <v-col cols="4" class="ma-2">
                    <v-img src="@/assets/5.jpg" max-width="250" contain>
                    </v-img>
                </v-col>

                <v-col cols="7">
                  <v-expansion-panels focusable flat>
                    <v-expansion-panel
                    >
                    <v-expansion-panel-header class="font-weight-bold">BACKLAYS COURT(OXFORD ESTATE)</v-expansion-panel-header>
                    <v-expansion-panel-content eager>
                        <p class="text-justify">The ESTATE is located in the heart of Ipaja, Lagos mainland, 
                    fully developed and ready for instant allocation. It is three 
                    minutes drive from the Baruwa Estate Gate. Boystown is opposite 
                    the fence of Saint Ferdinand Catholic Church.</p>
                    </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                    <v-expansion-panel-header>Sizes <v-spacer></v-spacer><v-icon>mdi-tape-measure</v-icon></v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <p class="ma-1">600 Sqm | 300 Sqm | 450 Sqm</p>
                    </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                    <v-expansion-panel-header>TITLE: <v-spacer></v-spacer><v-icon>mdi-file-document-outline</v-icon></v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <p> Court Judgment, Registered Survey and Deed of Assignment.</p>
                    </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                    <v-expansion-panel-header>FEATURES <v-spacer></v-spacer><v-icon>mdi-feather</v-icon></v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <p>
                    • Fully fenced with gate house
                    • Secured Community
                    • Flexible Payment Plan
                    • Well Designed Layout
                    • Highly Developed environment.
                    WHY YOU SHOULD BUY?
                    1. The whole road to the estate is interlocked
                    2. The estate is just 120 plots. Development 
                    will be rapid unlike other big estates
                    3. SHOPRITE IS COMING TO BOYSTOWN, less than a 
                    minute drive to BACKLAYS COURT BOYSTOWN IPAJA</p>
                    <p>ESTATE NEIGHBORHOOD:
                    1. Gowon Housing Estate.
                    2. Abesan Housing Estate.
                    3. Honeyland School.
                    4. St. Ferdinand Catholic Church.</p>
                    </v-expansion-panel-content>
                    </v-expansion-panel>
                    </v-expansion-panels>

                </v-col>
                </v-row>
                </v-card>
            </v-row>
            
            <v-row>
                <v-col cols="4" class="ma-2">
                    <v-img src="@/assets/ib6.jpg" max-width="250" contain>
                    </v-img>
                </v-col>

                <v-col col="7">
                  <v-expansion-panels focusable flat>
                    <v-expansion-panel
                    >
                    <v-expansion-panel-header class="font-weight-bold">BACKLAYS COURT(OXFORD ESTATE)</v-expansion-panel-header>
                    <v-expansion-panel-content eager>
                        <p class="text-justify">The ESTATE is located in the heart of Ipaja, Lagos mainland, 
                    fully developed and ready for instant allocation. It is three 
                    minutes drive from the Baruwa Estate Gate. Boystown is opposite 
                    the fence of Saint Ferdinand Catholic Church.</p>
                    </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                    <v-expansion-panel-header>Sizes <v-spacer></v-spacer><v-icon>mdi-tape-measure</v-icon></v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <p class="ma-1">600 Sqm | 300 Sqm | 450 Sqm</p>
                    </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                    <v-expansion-panel-header>TITLE: <v-spacer></v-spacer><v-icon>mdi-file-document-outline</v-icon></v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <p> Court Judgment, Registered Survey and Deed of Assignment.</p>
                    </v-expansion-panel-content>
                    </v-expansion-panel>
                    <v-expansion-panel>
                    <v-expansion-panel-header>FEATURES <v-spacer></v-spacer><v-icon>mdi-feather</v-icon></v-expansion-panel-header>
                    <v-expansion-panel-content>
                        <p>
                    • Fully fenced with gate house
                    • Secured Community
                    • Flexible Payment Plan
                    • Well Designed Layout
                    • Highly Developed environment.
                    WHY YOU SHOULD BUY?
                    1. The whole road to the estate is interlocked
                    2. The estate is just 120 plots. Development 
                    will be rapid unlike other big estates
                    3. SHOPRITE IS COMING TO BOYSTOWN, less than a 
                    minute drive to BACKLAYS COURT BOYSTOWN IPAJA</p>
                    <p>ESTATE NEIGHBORHOOD:
                    1. Gowon Housing Estate.
                    2. Abesan Housing Estate.
                    3. Honeyland School.
                    4. St. Ferdinand Catholic Church.</p>
                    </v-expansion-panel-content>
                    </v-expansion-panel>
                    </v-expansion-panels>
                  </v-col>
                
            </v-row>
        </v-card-text>
        <v-card-actions class="ma-2">
          <v-spacer></v-spacer>
          
          <v-btn color="green darken-1" text @click="oyo = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
        <div class="font-weight-light grey--text title mb-2">Premium Offers</div>
        <h3 class="display-1 font-weight-light orange--text mb-2">OYO ESTSTES</h3>
        <div class="font-weight-light title mb-2">
          NEW FELELE |<br> IBADAN LAGUN
        </div>
      </v-card-text>
    </v-card>
  </v-hover>
        </v-col>

        
        
      </v-row>
    </v-container>
  </v-item-group>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
        ogun: false,
        oyo: false,
      }
    },
  }
</script>