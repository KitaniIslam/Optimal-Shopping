<template>
  <a-card hoverable class="card" :style="{maxWidth:'350px' , minWidth: '200px'}">
    <img slot="cover" alt="product image" :src="simple.img" @click="goDetails()"/>
    <nuxt-link  :to="`/products/${simple.title}`" >
      <a-card-meta :title="simple.title" :description="simple.description" />
      <div class="price-container">
        <h2 class="price">
          <strike v-if="simple.haveDiscount.value">{{simple.price}}</strike>
          {{simple.haveDiscount.value ? simple.haveDiscount.newPrice: simple.price}} DZD
        </h2>
        <div class="tag" v-if="simple.havePromotion">
          <a-tag color="green">Promotion</a-tag>
        </div>
      </div>
    </nuxt-link>
    <template slot="actions" class="ant-card-actions">
      <a-icon key="setting" type="dislike" @click="ckick('dislike')" />
      <a-icon key="edit" type="shopping" @click="ckick('shopping')"/>
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
    },
    methods: {
      ckick(e){
        console.log(`you clicked ${e}`);
      },
      goDetails(){
        this.$router.push(`/products/${this.simple.title}`);
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
