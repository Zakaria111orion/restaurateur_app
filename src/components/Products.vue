<template>
<div>
    <v-container>
        <v-card class="justify-center" 
        elevation="1">
            <v-card-title class=" amber darken-1 ">
                <h4> Products from {{getUser.name}} </h4> 
                <v-spacer></v-spacer>
                <v-btn text outlined color="green  accent-4"> Add product </v-btn>
                
            </v-card-title>
            <v-divider></v-divider>

            <v-col md="5" offset-md="3">
            <v-card-text>
                
                    <div :key="product._id" v-for="product in allProducts">
                        <Product :product=product />
                    </div>
               
            </v-card-text>
             </v-col>
        </v-card>
    </v-container>
   
   
</div>
</template>

<script lang="ts">

import Product from '@/components/pro.vue'
import {mapGetters, mapActions} from 'vuex'
export default {
    
    name: 'Products',

    data (){
        return {
           token: ''
        }

    },
    
    methods: {
        ...mapActions(["fetchProducts"]),

        geto() {
          this.token =this.getToken;
      },


    },
     
    computed: {
        ...mapGetters(["allProducts", "getUser", "getToken"]),
        
    },
    created(){
        if(this.getToken == '' ){this.$router.push('/Login')}
       else{this.fetchProducts(this.getToken)}
        
    },
    
    components:{
        Product
      

    },

    watch:{
      
    }


}
</script>

