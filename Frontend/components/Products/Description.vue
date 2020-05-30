<template>
    <div class="container">
        <div class="img-section ">
            <a-card hoverable class="card" :style="{maxWidth:'350px' , minWidth: '200px'}">
                <img slot="cover" alt="product image" :src="simple.img" />
            </a-card>
        </div>
        <div class="description-section ">
            <h1>{{simple.title}}</h1>
            <p>{{simple.description}}</p>
                <h1 >
                    <strike v-if="simple.haveDiscount.value">{{simple.price}}</strike>
                    {{simple.haveDiscount.value ? simple.haveDiscount.newPrice: simple.price}} DZD
                </h1>
            <a-divider />
            <div class="action-alignment">
                <div class="tag" v-if="simple.havePromotion">
                    <a-tag color="green">Promotion</a-tag>
                </div>
                <p>3 items with price of 200 inted of 240</p>
            </div>
            <div class="action-section action-alignment">
                <div class="pricing action-alignment">
                    <a-input-number  v-model="quantity" size="small" :min="1" :step="1" @change="onChange" />
                    <h2 class="price"> {{total }} DZD</h2>
                </div>
                <a-button type="primary">Add To Card</a-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
      simple: {
        type: Object,
        default: function () {
          return {
            img: 'https://www.blank-sunglasses.com/wp-content/uploads/2020/02/TRAPPER-SUNGLASSES-BLACK-GOLD-SIDE.jpg',
            title: 'Product ',
            description: 'What is Lorem Ipsum Lorem Ipsum is simply dummy',
            price: 100,
            havePromotion: true,
            haveDiscount: {
              value: true,
              newPrice: 80
            }
          }
        }
      }
    },
    data(){
        return {
            quantity : 1,
            total: 0,
            unitPrice: 0
        }
    },
    methods: {
        onChange(qVal){
            this.total = this.unitPrice * this.quantity; 
        }
    },
    mounted(){
        this.unitPrice = this.simple.haveDiscount.value ? this.simple.haveDiscount.newPrice : this.simple.price ;
        this.total = this.unitPrice;
    }
  }
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: row;
}

.img-section {
    flex: 1;
}

.center {
    display: flex;
    align-items: center;
    justify-content: center;
}

.description-section {
    flex: 2;
    padding: 0 0 0 5rem;
    flex-direction: column;
}

.action-alignment {
    display: flex;
    flex-direction: row;
}

.action-section {
    justify-content: space-between;    
}

.price {
    margin: 0 0 0 30px;
}

.pricing {
    align-items: baseline;
    justify-content: center;

}

</style>