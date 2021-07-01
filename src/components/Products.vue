<template>
<div>
    <v-container>
        <v-card class="justify-center" 
        elevation="1">
            <v-card-title class=" amber darken-1 ">
                <h4> Products </h4> 
                <v-spacer></v-spacer>
                <v-btn text outlined color="green  accent-4"> Add product </v-btn>
                
            </v-card-title>
            <v-divider></v-divider>

            <v-col md="5" offset-md="3">
            <v-card-text>
                
                    <div :key="product._id" v-for="product in products">
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
import {mapGetters} from 'vuex'
export default {
    
    name: 'Products',
    props:{
        products: [],
    },
    data (){
        return {
           
        }

    },
    computed: mapGetters(["allProducts"]),
    
    methods: {


    },
    
    
    components:{
        Product
      

    }


}
</script>

