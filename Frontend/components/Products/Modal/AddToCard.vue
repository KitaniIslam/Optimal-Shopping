<template>
  <a-modal v-model="modalVisible" title="Add to card" @ok="handleOk" @cancel="cancel" :destroyOnClose="true">
    <div class="action">
      <h3>{{modalInfo.title}}</h3>
      <div class="pricing">
        <a-input-number v-model="quantity" size="small" :min="1" @change="onChange" />
        <h2 class="price">{{modalInfo.price * quantity}} DZD</h2>
      </div>
    </div>
  </a-modal>
</template>

<script>
  export default {
    computed: {
      modalVisible: function () {
        return this.$store.getters['card/getModalVisible']
      },
      modalInfo: function () {
        return this.$store.getters['card/getModalInfo']
      }
    },
    data() {
      return {
        quantity: 1
      }
    },
    methods: {
      handleOk() {
        this.$store.commit('card/addToCard', {quantity:this.quantity,category:this.modalInfo.category,id:this.modalInfo.inStore})
        this.quantity = 1;
        this.$store.commit('card/hideModal');
        this.$notification.open({
          type: 'success',
          message: 'Added successfully',
          description: ''
        });
      },
      cancel() {
        this.quantity = 1;
        this.$store.commit('card/hideModal');
      },
      onChange(quantity) {
        this.quantity = quantity;
      },
    }
  }

</script>


<style scoped>
  .action {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .pricing {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .price {
    margin: 0 0 0 20px;
  }

</style>
