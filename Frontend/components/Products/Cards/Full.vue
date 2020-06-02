<template>
  <div>
    <a-card hoverable class="card" :style="{maxWidth:'350px' , minWidth: '200px'}">
      <img slot="cover" alt="product image" :src="simple.img" @click="goDetails()" />
      <nuxt-link :to="`/products/${simple.title}`">
        <a-card-meta :title="simple.title" :description="simple.description" />
        <div class="price-container">
          <h2 class="price">
            <strike v-if="simple.discount.haveDiscount">{{simple.price}}</strike>
            {{simple.discount.haveDiscount ? simple.discount.newPrice: simple.price}} DZD
          </h2>
          <div class="tag" v-if="simple.promotion.havePromotion">
            <a-tag color="green">Promotion</a-tag>
          </div>
        </div>
      </nuxt-link>
      <template slot="actions" class="ant-card-actions">
        <a-icon key="setting" type="dislike" />
        <a-icon key="edit" type="shopping" @click="addToCard" />
      </template>
    </a-card>
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
            category: '',
            id: 0,
            img: '',
            title: '',
            description: '',
            price: 0,
            promotion: {
              havePromotion: false,
              type: '',
              value: 0,
            },
            discount: {
              haveDiscount: false,
              newPrice: 0
            }
          }
        }
      }
    },
    data() {
      return {}
    },
    methods: {
      addToCard() {
        this.$store.commit('products/showModal', {
          title: this.simple.title,
          id: this.simple.id,
          price: this.simple.price,
          inStore: this.simple.inStore,
          category: this.simple.category
        });
      },
      sendFeedback() {},
      goDetails() {
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
