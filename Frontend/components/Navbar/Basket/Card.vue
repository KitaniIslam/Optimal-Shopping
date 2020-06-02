<template>
  <div class="item">
    <div class="info-item">
      <a-icon type="minus-circle" :style="{color: 'red'}" class="delete-button" @click="deleteItem" />
      <p>Product</p>
    </div>
    <a-input-number v-model="product.quantity" size="small" :min="1" @change="onChange" />
    <h3>{{product.quantity * product.unitPrice}} DZD</h3>
  </div>
</template>

<script>
  export default {
    props: {
      product: {
        type: Object,
        default:() => { return{
          title: '',
          originalPrice: 0,
          unitPrice :0 ,
          quantity: 1,
          promotionApplied: false, 
          id: 0}
        }
      }
    },
    methods: {
      onChange(quantity) {
        this.$store.commit('products/changeQuantity',{quantity:quantity,index:this.product.id});
        },
      deleteItem() {
        this.$store.commit('products/deleteItemFromCard',{index:this.product.index});
      }
    }
  }

</script>

<style scoped>
  .item {
    display: flex;
    flex-direction: row;
    margin: 3px 0 3px 0;
  }

  .info-item {
    display: flex;
    flex-direction: row;
    margin-right: 40px;
    align-items: center;
  }

  .delete-button {
    margin-right: 10px;
  }

  p {
    margin: 0;
  }

  h3 {
    margin: 0 0 0 10px;
  }

  .icon {
    margin-left: 15px;
  }

</style>
