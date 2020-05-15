<template>
  <a-dropdown v-model="visible">
    <a-icon type="shopping-cart" :style="{ fontSize: '20px', color: '#fff'}" class="icon"/>
    <a-menu slot="overlay" @click="handleMenuClick">
      <a-menu-item key="3">
        <card />
      </a-menu-item>
      <a-menu-item key="1">
        <card />
      </a-menu-item>
      <a-menu-item key="2">
        <card />
      </a-menu-item>
      <a-menu-divider />
      <a-menu-item key="0">
        <div class="item">
          <div class="sub-item">
            <h3>Totale : <span> 510 DZD</span></h3>
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
</template>


<script>
import Card from './Card.vue';

export default {
  components :{
    Card
  },
  data (){
    return {
      visible:false
    }
  },
  methods: {
    handleMenuClick(e){
      if (e.key === '0') {
        this.order();
        this.visible = false;
      }
    },
    order(){
      this.$notification.open({
        type:"success",
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

.icon {
  margin-left:20px ;
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