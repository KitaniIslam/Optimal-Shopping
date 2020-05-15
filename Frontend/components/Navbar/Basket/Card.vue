<template>
    <div class="item">
        <div class="info-item">
          <!-- <a-button  shape="circle" type="danger" icon="minus-circle" size="small" class="delete-button" /> -->
          <a-icon type="minus-circle" :style="{color: 'red'}" class="delete-button" @click="deleteItem"/>
          <p>Product</p>
        </div>
        <a-input-number id="inputNumber" v-model="quantity" size="small" :min="1" @change="onChange" />
        <h3>{{total}} DZD</h3>
    </div>
</template>

<script>
export default {
    data (){
        return {
            quantity : 1,
            total : 170,
            unitPrice: 170
        }
    },
    methods: {
        onChange(qVal){
            this.total = this.unitPrice * this.quantity; 
        },
        deleteItem(){
          // TODO: delete item from card list
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