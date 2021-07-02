<template>
  

<v-container class="login pa-10" >
<v-row>
    <v-col md="5" offset-md="3">
        <v-card class="justify-center" 
    elevation="2"
    outlined>
        <v-card-title class="amber darken-3">
            <h4>
            Login </h4>
            <v-spacer></v-spacer>
        </v-card-title>
        <v-card-text class="text-center" >
            <v-container>
              <v-form @submit.prevent="onSignup">
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field class="pt-5"
                      name="email"
                      label="Mail"
                      id="email"
                      v-model="form.email"
                      type="email"
                      required></v-text-field>
                  </v-flex>
                </v-layout>
                 <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="password"
                      label="Password"
                      id="password"
                      v-model="form.password"
                      type="password"
                      required></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row justify-center>
                  <v-flex >
                    
                    <v-btn block type="submit" color="amber darken-1" outlined text>Sign in</v-btn>
                  </v-flex>
                </v-layout>
              </v-form>
              </v-container>
</v-card-text>


    </v-card></v-col>
  </v-row>

</v-container>
 
</template>

<script>
import axios from 'axios'
import VueCookies from 'vue-cookies';
import {mapGetters, mapActions} from 'vuex'

axios.defaults.withCredentials = true
export default {
  name: 'Login',
  data () {
      return {
        form: {
                email: '',
                password: ''
            }
      }
    },
    computed: {
      ...mapGetters(["getUser", "getToken"]),
    },
    watch:{
      getToken:function(newVal,oldVal){
        if(newVal !== null && oldVal == ''){this.$router.push('/Products')}
        
      }
    },
     
    methods: {
      ...mapActions(["fetchUser"]),

     async  onSignup  () {
      await this.fetchUser(this.form);

      console.log(this.getToken) 
      
      }
    },
    

}
</script>