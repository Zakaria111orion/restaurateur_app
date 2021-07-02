import axios from "axios";


const state = {
    user: {},
    token: '',
};
const getters = {
    getUser:  (state: any) => state.user,
    getToken:  (state: any) => state.token,

};
const actions = {
    async fetchUser ({ commit }: { commit: Function }, form: any){
        
        await axios.post('http://127.0.0.1:8080/signIn', form )
        .then(response => {
            
            commit('setUser',response.data)
         })
         .catch(err =>{console.log(err)})

    },
    
   
};
const mutations = {
    setUser: (state: any, user: any)=>(state.user = user.existinguser, state.token= user.token)

};

export default {
    state,
    getters,
    actions,
    mutations,
}