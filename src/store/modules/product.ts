import axios from "axios";

axios.defaults.withCredentials = true;

const state = {
    products: []
};
const getters = {
    allProducts:  (state: any) => state.products
};
const actions = {
   async deleteProduct({ commit }: { commit: Function }, id: any){
    await axios.delete(`http://127.0.0.1:8080/products/${id}` )
    .then(response => {
        
        commit('removeProduct',id)
     })
     .catch(err =>{console.log(err)})
   },

   async fetchProducts ({ commit }: { commit: Function }, to: any){
        
    await axios.get('http://127.0.0.1:8080/products',
                                            {
                              headers: {
                                'Authorization': `Bearer ${to}`
                              }
                            })
                            .then(response=>{
                                commit('setProducts',response.data)
                            }).catch(err => {
                if (err.request) {
                // client never received a response, or request never left
                console.log(err.request.response.errors)
                } else {
                // anything else
                console.log("something went wrong")
                }
                });

},








};
const mutations = {

    removeProduct: (state:any,id:any) => state.products = state.products.filter((product:any)=> product._id !== id),
    setProducts: (state:any,data:any) => (state.products = data.products)
};

export default {
    state,
    getters,
    actions,
    mutations,
}