
export default {
    namespaced: true,
    state : {
        accountName: 'Sadek Hossain'
    },
    getters: {
        getAccount(state){
            return state.accountName
        }
    }
}
