<template>
  <a-card hoverable class="card" :style="{maxWidth:'350px' , minWidth: '200px'}">
    <img slot="cover" alt="product image" :src="simple.img" />
    <a-card-meta :title="simple.title" :description="simple.description">
    </a-card-meta>
    <div class="price-container">
      <h2 class="price">
        <strike v-if="simple.haveDiscount.value">{{simple.price}}</strike>
        {{simple.haveDiscount.value ? simple.haveDiscount.newPrice: simple.price}} DZD
      </h2>
      <div class="tag" v-if="simple.havePromotion">
        <a-tag color="green">Promotion</a-tag>
      </div>
    </div>
    <template slot="actions" class="ant-card-actions">
      <a-icon key="setting" type="dislike" />
      <a-icon key="edit" type="shopping" />
    </template>
  </a-card>
</template>

<script>
  export default {
    props: {
      simple: {
        type: Object,
        default: function () {
          return {
            img: 'https://www.blank-sunglasses.com/wp-content/uploads/2020/02/TRAPPER-SUNGLASSES-BLACK-GOLD-SIDE.jpg',
            title: 'Product',
            description: 'What is Lorem Ipsum Lorem Ipsum is simply dummy',
            price: 30,
            havePromotion: false,
            haveDiscount: {
              value: false,
              newPrice: 0
            }
          }
        }
      }
    }
  }

</script>

<style scoped>
  .card {
    margin: 10px;
  }

  .price-container {
    margin: 10px 0 0 0;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .tag {
    margin-left: 10px;
  }

  .price {
    margin: 0;
  }

</style>
