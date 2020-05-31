export const state = () => ({
    products : []
});

export const mutations = {
    feedProducts(state, payload){
        state.products = payload;
    }
}

export const getters ={
    getProducts( state){
        return state.products;
    }
} 