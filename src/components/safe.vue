<v-carousel cycle height="300" hide-delimiter-background show-arrows-on-hover>
            <!--##  Slideer Items   ##-->
            <v-carousel-item>
                <v-sheet height="100%">
                    <v-row class="fill-height" align="center" justify="space-around">
                      <v-col md="3" class="ma-2">
                        <v-img
                        src="../assets/man.png"
                        max-height="280"
                        contain
                        >
                        </v-img>
                      </v-col>
                      <v-col md="4">
                        <p class="display-1 md-0 font-weight-light">
                          Own a Property for as Low as
                        </p> <br>
                        <v-btn color="#DF6C30" class="display-1" height="50">
                          N99,999.99
                        </v-btn>

                      </v-col>
                      <!--
                      <v-divider vertical color="#DF6C30"></v-divider>
                      -->
                      <v-col md="4" justify="center">
                        <v-card class="mx-auto" height="100%">
                          <v-card-text>
                            <div>Locations</div>
                            <p class="display-1 text--lighten mb-0">
                              Lagos
                            </p>
                            <p class="ma-0">Ibeju-Lekki | Boys Town | Epe</p>
                            <p class="display-1 text--lighten mb-0">
                              Ogun
                            </p>
                            <p class="ma-0">Atan-Ota | Abeokuta | Shagamu</p>
                            <p class="display-1 text--lighten mb-0">
                              Oyo
                            </p>
                            <p class="ma-0">Ibeju-Lekki | Boys Town | Epe</p>
                          </v-card-text>


                        </v-card>

                      </v-col>
                    </v-row>

                </v-sheet>
            </v-carousel-item>
            <v-carousel-item>
                <v-sheet color="deep-purple" height="100%">
                    <v-row class="fill-height" align="center" justify="space-around">
                      <v-col md="3" class="ma-5">
                        <p class="display-2">PROVIDENCE COURT</p>
                        <p class="subtitle-1 #DF6C30" >ELERANGBE IBEJU-LEKKI WITH C OF O</p>
                      </v-col>
                      <v-col md="4">
                        <v-img
                        src="../assets/HOUSE_4.png"
                        max-height="250"
                        contain
                        >
                        </v-img>

                      </v-col>
                      <v-col md="4">
                        <v-card
                          class="ma-6 pl-5"
                          flat
                          color="deep-purple"
                          >

                            <v-data-table
                            :headers="headers"
                            :items="prov"
                            dense
                            height="110"
                            width="100"
                            hide-default-footer
                            light
                            disable-pagination
                            >
                            </v-data-table>
                        </v-card>
                      </v-col>

                    </v-row>

                </v-sheet>
            </v-carousel-item>

            <v-carousel-item>
                <v-sheet color="success" height="100%">
                    <v-row class="fill-height" align="center" justify="space-around">
                      <v-col md="3" class="ma-5">
                        <p class="display-2">BACKLEYS COURT</p>
                        <p class="subtitle-1 #DF6C30" >IPAJA BOYS TOWN</p>
                      </v-col>
                      <v-col md="4">
                        <v-img
                        src="../assets/HOUSE_2.png"
                        max-height="250"
                        contain
                        >
                        </v-img>

                      </v-col>
                      <v-col md="4">
                        <v-card
                          class="ma-3"
                          flat
                          color="deep-purple"
                          >

                            <v-data-table
                            :headers="headers"
                            :items="prov"
                            dense
                            height="110"
                            width="100"
                            hide-default-footer
                            light
                            disable-pagination
                            >
                            </v-data-table>
                        </v-card>
                      </v-col>

                    </v-row>

                </v-sheet>
            </v-carousel-item>
        </v-carousel>




        <v-row justify="space-around">
    <v-col md="11" class="mb-0">
      <h1 class="display-3">
        Oxford Commercial Services International Limited
      </h1>
      <p class="mt-3">
          Oxford Commercial Services International Limited a member of Oxford
          Group Nigeria has judiciously used client’s investment in purchase
          of Estates in 28 Estate locations. We also engaged in developments
          in these locations bringing about appreciation. Reselling of these
          developing estates comes back with more than 300% return on investment
          ROI. Sharing with the investor becomes easy and affordable at a
          reasonable percentage. Up to about 40% ROI in a year, YOUR INVESTMENT IS:
      </p>
    </v-col>

    <v-col md="3">
      <v-img
      src="../assets/shield.png"
      max-height="50"
      contain
      >
      </v-img>
        <p class="mt-3">SECURED</p>
          <p class="text-justify">Real estate investment remains the best
      investment option today because of its nature and uniqueness.
      Land will always appreciate and it's constant, so there is little or
      no risk in land dealings. The company also ensures proper documentation,
      dealing with Omo Onile (land owner) and as well as the security of the
      estate perimeter.
          </p>
    
    </v-col>
<v-divider vertical inset></v-divider>
    <v-col md="3">
      <v-img
      src="../assets/money-back.png"
      max-height="50"
      contain
      >
      </v-img>
      <p class="ma-3">GUARANTEED </p> 
      <p class="text-justify">A POST-DATED CHEQUE AND DEED OF AGREEMENT as well as
      the receipt for payment will be issued. The deed states the terms of
      the transaction that goes on between both parties and that an agreed
      percentage as a ROI will be granted at a specified date in the future.
    </p>
    </v-col>
<v-divider vertical inset></v-divider>
    <v-col md="3" class="hidden-sm-and-down">
      <v-img
      src="../assets/trust.png"
      max-height="50"
      contain
      >
      </v-img>
      <p class="ma-3">RELIABLE</p>
      <p class="text-justify">As long as we have our landed property intact your
      investment is safe
    </p>
    </v-col>
 
  </v-row>