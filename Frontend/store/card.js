export const state = () => ({
    card: [{
        category: 'a',
        id: 0,
        quantity: 5
    },
    {
        category: 'b',
        id: 0,
        quantity: 3

    }
],
    recommendation: [{
        category: 'b',
        value: [{
          id: '',
          img: '',
          title: 'im from cat b',
          description: '',
          price: 200,
          promotion: {
            havePromotion: false,
            type: '3 with price of 2.5 / 3 and one for free',
            value: 20,
          },
          discount: {
            haveDiscount: true,
            newPrice: 150
          }
        }, ]
      },
      {
        category: 'a',
        value: [{
          id: '',
          img: '',
          title: 'im from cat a',
          description: '',
          price: 100,
          promotion: {
            havePromotion: false,
            type: '3 with price of 2.5 / 3 and one for free',
            value: 20,
          },
          discount: {
            haveDiscount: false,
            newPrice: 80
          }
        },
        {
            id: '',
            img: '',
            title: '',
            description: '',
            price: 100,
            promotion: {
              havePromotion: false,
              type: '3 with price of 2.5 / 3 and one for free',
              value: 20,
            },
            discount: {
              haveDiscount: false,
              newPrice: 80
            }
          }]
      }],
    modal: false,
    selectedCategory: 'a'
  })
  
export const mutations = {
    addToCard (state, payload) {
        // payload is the element of the product in recommendation
        state.card.push(payload);
    },
    addTorecommendation(state, payload){

        const index = getCategoryIndex(payload.category);

        if(index < 0 ) {
            state.recommendation.push(payload);
            return 0;
        }

        (state.recommendation[index].value).push(payload.value);
        return getAddedItemIndex(index);
    },
    deleteItemFromCard(state, payload){
        state.card.splice(payload.index,1);
    },
    showModal(state) {
        state.modal = true;
    },
    hideModal(state) {
        state.modal = false;
    },
    changeQuantity(state, payload){
        state.card[payload.index].quantity = payload.quantity ;
    }
    
};

export const getters = {
    getModalVisible(state){
        return state.modal;
    },
    getRecommendation(state ){
        const index = getCategoryIndex(state.recommendation , state.selectedCategory);
        if(index < 0 ) return []; // TODO: fetch new data from API
        return state.recommendation[index].value ;
    },
    getRecommendations(state){
        return state.recommendation;
    },
    getCardContent(state){
        
        let index = 0;

        return state.card.map((item) => {

            const product = (state.recommendation[getCategoryIndex(state.recommendation ,item.category)])
            .value[item.id] ;

            const price = product.discount.haveDiscount ? product.discount.newPrice : product.price ;
            // TODO: deal with promotion

            return {
                title: product.title,
                originalPrice: product.price,
                unitPrice :price ,
                quantity: item.quantity,
                promotionApplied: false, 
                id: index++
            } ;
        });
    }
};


function getCategoryIndex(state,category){
    return state.findIndex(element => element.category === category );
}

function getAddedItemIndex(index){
    return (state.recommendation[index].value).length -1 ;
}

function getrecommendationCounter(){
    return state.recommendation.length;
}