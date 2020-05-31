// products store :
const products = [{
  category: '',
  val: [{
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
  }, ]
}]

// methods 
function getters() {
  return 'all products for category / products for all catigories / one product for one category '
}

function add() {
  // add product one specific category or category with products 
}

// ============================================ || ============================================

// Latest store :

const latest = [{
  category: '',
  id: '',
  img: '',
  title: '',
  price: 100,
}];


// Methods :

function latestGetters() {
    return 'list of all latest products ';
}


// ============================================ || ============================================
// addToCard store


const card = [{
    category: '',
    id: 'id in rocomondation store ',
    quantity: 5
}];

const rocomondation = [
    {
        category: 'a',
        val: [{
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
        }, ]
      }

]


// methods :
function getRocomondation(){
    return 'list of product for certain category'
}

function getCardItems(){
    return 'all items added to card with calculated price depends on quantity and product offer'
}

function addItemToCard(payload){
    rocomondation.push(payload); //depends on category .
    card.push(payload); //only id and category and quantity
}

function addItemToRocomondation(payload){
    rocomondation.push(payload); // incase search for product or selecting a product to see details 
}

function deleteIemFromCard(){}

// ============================================ || ============================================
// user store

const user = {
    fullName: '',
    nbInvoices : 20,
    restToPay: 100
}

const invoices = [{
    id: '',
    total: 1000,
    restToPay: 50,
    editable: false,
    state: 'received/not yet'
}]

const newInvoice = [{
    total: 1000,
}]
