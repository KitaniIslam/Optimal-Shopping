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
            inStore: 0,
            category: 'b',
            id:1,
            img: 'https://www.blank-sunglasses.com/wp-content/uploads/2020/02/TRAPPER-SUNGLASSES-BLACK-GOLD-SIDE.jpg',
            title: 'Product ',
            description: 'What is Lorem Ipsum Lorem Ipsum is simply dummy',
            price: 30,
            promotion: {
                havePromotion: true,
                type: '3 with price of 2.5 / 3 and one for free',
                value: 20,
            },
            discount: {
                haveDiscount: false,
                newPrice: 80
            }
          },
          {
            inStore: 1,
            category: 'b',
            id:2,
            img: 'https://www.blank-sunglasses.com/wp-content/uploads/2020/02/TRAPPER-SUNGLASSES-BLACK-GOLD-SIDE.jpg',
            title: 'Product ',
            description: 'What is Lorem Ipsum Lorem Ipsum is simply dummy',
            price: 150.50,
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
            inStore: 2,
            category: 'b',
            id:3,
            img: 'https://www.blank-sunglasses.com/wp-content/uploads/2020/02/TRAPPER-SUNGLASSES-BLACK-GOLD-SIDE.jpg',
            title: 'Product ',
            description: 'What is Lorem Ipsum Lorem Ipsum is simply dummy',
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
      },
      {
        category: 'a',
        value: [{
            inStore: 0,
            category: 'a',
            id:5,
            img: 'https://www.blank-sunglasses.com/wp-content/uploads/2020/02/TRAPPER-SUNGLASSES-BLACK-GOLD-SIDE.jpg',
            title: 'Product ',
            description: 'What is Lorem Ipsum Lorem Ipsum is simply dummy',
            price: 30,
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
            inStore: 1,
            category: 'a',
            id:6,
            img: 'https://www.blank-sunglasses.com/wp-content/uploads/2020/02/TRAPPER-SUNGLASSES-BLACK-GOLD-SIDE.jpg',
            title: 'Product ',
            description: 'What is Lorem Ipsum Lorem Ipsum is simply dummy',
            price: 150.50,
            promotion: {
                havePromotion: false,
                type: '3 with price of 2.5 / 3 and one for free',
                value: 20,
            },
            discount: {
                haveDiscount: true,
                newPrice: 80
            }
          },
          {
            inStore: 2,
            category: 'a',
            id:7,
            img: 'https://www.blank-sunglasses.com/wp-content/uploads/2020/02/TRAPPER-SUNGLASSES-BLACK-GOLD-SIDE.jpg',
            title: 'Product ',
            description: 'What is Lorem Ipsum Lorem Ipsum is simply dummy',
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
      }
      ],
    modal: false,
    modalInfo: {},
    selectedCategory: 'h'
  })
  
export const mutations = {
    addToCard(state, payload) {
        // payload is the element of the product in recommendation
        state.card.push(payload);
    },
    addToRecommendation(state, payload){
        // add product to category ( if the category not exist will add it too ) and return the product id in the category (product is : the product index in the array)

        // inStore is the position of the product in category X => X.value[category] = product  
        const categoryIndex = getCategoryIndex(state.recommendation, payload.category);

        if(categoryIndex < 0 ) {
            state.recommendation.push({category:payload.category ,value: [{...payload,inStore:0}]});
            return 0;
        }
        
        const productIndex = getProductAvailability(state,categoryIndex,payload.id );
        
        if(productIndex.isAvailable < 0 ) {
            ((state.recommendation[categoryIndex]).value).push({...payload,inStore:productIndex.categorySize});
            return productIndex.categorySize;
        };


        return productIndex.isAvailable;
    },

    deleteItemFromCard(state, payload){
        state.card.splice(payload.index,1);
    },
    showModal(state,payload) {
        state.modalInfo = payload;
        state.modal = true;
    },
    hideModal(state) {
        state.modalInfo= {};
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
    getModalInfo(state){
        return state.modalInfo;
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
        try {

            return state.card.map((item) => {
    
                const product = state.recommendation[getCategoryIndex(state.recommendation ,item.category)].value[item.id] ;
    
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
        catch(err) {
            return [];
        }
    }
};


function getCategoryIndex(state,category){
    return state.findIndex(element => element.category === category );
}

function getProductAvailability(state,category,productId){
    // const productIndex = getProductAvailability(state,categoryIndex,payload.id );
    const isAvailable = (state.recommendation[category].value).findIndex(element => element.id === productId); 
    return {isAvailable: isAvailable , categorySize: (state.recommendation[category].value).length};
}

function getAddedItemIndex(index){
    return (state.recommendation[index].value).length -1 ;
}

function getrecommendationCounter(){
    return state.recommendation.length;
}