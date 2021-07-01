<template >
    <v-container>
        <v-card class="justify-center" 
        elevation="2"
        >
            <v-card-title class="amber lighten-3 pa-3">{{product.name}}
                <v-spacer></v-spacer>
                <i class="far fa-times-circle" ></i>
            </v-card-title>
            <v-card-text class="body-1 pa-3">{{product.price}}</v-card-text>
        
        </v-card>
        
        
    </v-container>
</template>



<script lang="ts">


export default {
    name: 'Product',
    props:{
        product: Object,
    },
    data (){
        return{

        }


    },
    methods: {


    }
    
}
</script>
<style scoped>
.far {
    color: red;
}


</style>