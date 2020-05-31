<template>
  <nuxt-link to="/basket">
    <a-dropdown v-model="visible">
      <a-icon type="shopping-cart" :style="{ fontSize: '20px', color: '#fff'}" />
      <a-menu slot="overlay" @click="handleMenuClick">
        <a-menu-item v-for="item in products" :key="(item.id+1)">
          <card :product="item" />
        </a-menu-item>
        <a-menu-item key="0">
          <div class="item">
            <div class="sub-item">
              <h3>Totale : <span> {{totalPrice}}</span></h3>
            </div>
            <div class="sub-item">
              <a-button icon="shopping-cart" size="small" type="primary">
                Order
              </a-button>
            </div>
          </div>
        </a-menu-item>
      </a-menu>
    </a-dropdown>
  </nuxt-link>
</template>


<script>
  import Card from './Card.vue';

  export default {
    components: {
      Card
    },
    data() {
      return {
        visible: false
      }
    },
    computed: {
      products() {
        return this.$store.getters['card/getCardContent'];
      },
      totalPrice() {
        return this.products.reduce((sum, item) => {
          return sum += (item.unitPrice * item.quantity)
        }, 0);
      }
    },
    mounted() {},
    methods: {
      handleMenuClick(e) {
        if (e.key === '0') {
          this.order();
          this.visible = false;
        }
      },
      order() {
        this.$notification.open({
          type: "success",
          message: 'Your order has been sent',
          description: 'You can Change/Cancel order in less than 1 hour.'
        })
      }
    }
  }

</script>

<style scoped>
  .sub-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .item {
    display: flex;
    flex-direction: row;
    margin: 3px 0 3px 0;
    justify-content: space-between;
  }


  p {
    margin: 0;
  }

  h3 {
    margin: 0;
  }

</style>
