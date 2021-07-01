import axios from "axios";
const state = {
    user: {},
    token: '',
    form:{
        email: '',
        password: ''
    }
};
const getters = {
    getUser:  (state: any) => state.user
};
const actions = {
    async fetchUser (){
        await axios.post('http://127.0.0.1:8080/signIn', state.form )
        .then(response => {

         })
    }
   
};
const mutations = {

};

export default {
    state,
    getters,
    actions,
    mutations,
}