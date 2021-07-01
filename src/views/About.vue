<template>
  <Products :products="products"  />
</template>

<script lang="ts">

import Vue from "vue";
import Products from "../components/Products.vue";

export default Vue.extend({
  name: "Home",
  
  data (){
    return {
       products: []
    }
  },
  methods:{
     async getProduct(){
          
                await this.$axios.get('http://127.0.0.1:8080/products',
                                            {
                              headers: {
                                'Authorization': `Bearer ${this.$cookies.get("token")}`
                              }
                            })
                            .then(response=>{
                            this.products=response.data.products
                            }).catch(err => {
                if (err.request) {
                // client never received a response, or request never left
                console.log(err.request.response.errors)
                } else {
                // anything else
                console.log("something went wrong")
                }
                });
                
                }
            },


  components: {
    Products
  },
  async created(){
    
      this.getProduct();
    
    
  },
});     
</script>