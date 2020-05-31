<template>
  <div>
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
        <a-icon key="setting" type="dislike"  />
        <a-icon key="edit" type="shopping" @click="addToCard"/>
      </template>
    </a-card>
    <addToCard :product="{ title:simple.title,id:simple.id, price: simple.price }"/>
  </div>
</template>

<script>
import AddToCard from '~/components/Products/Modal/AddToCard.vue'
  export default {
    components: {
      AddToCard
    },
    props: {
      simple: {
        type: Object,
        default: function () {
          return {
            img: 'https://www.blank-sunglasses.com/wp-content/uploads/2020/02/TRAPPER-SUNGLASSES-BLACK-GOLD-SIDE.jpg',
            title: 'Product',
            description: 'What is Lorem Ipsum Lorem Ipsum is simply dummy',
            id: 10,
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
    data(){
      return {
        feedbackModal: false,
      }
    },
    methods: {
      addToCard(){
            this.$store.commit('card/showModal');
      },
      sendFeedback(){
        // this.$store.commit('card/hideModal')

        this.feedbackModal = true;
      },
      goDetails(){
        this.$router.push(`/products/${this.simple.title}`);
      },
      handleOk(){
        console.log('yeeeeeeeeeeeeey !!');
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
