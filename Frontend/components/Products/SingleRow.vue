<template>
  <div class="row">
    <full v-for="item in row" :key="item.index" :simple="item" />
  </div>
</template>

<script>
  import Full from '~/components/Products/Cards/Full.vue'

  export default {
    props: {
      row: {
        type: [],
        default: [{
            img: 'https://www.blank-sunglasses.com/wp-content/uploads/2020/02/TRAPPER-SUNGLASSES-BLACK-GOLD-SIDE.jpg',
            title: 'Product ',
            description: 'What is Lorem Ipsum Lorem Ipsum is simply dummy',
            price: 30,
            havePromotion: false,
            haveDiscount: {
              value: false,
              newPrice: 0
            }
          },
          {
            img: 'https://www.blank-sunglasses.com/wp-content/uploads/2020/02/TRAPPER-SUNGLASSES-BLACK-GOLD-SIDE.jpg',
            title: 'Product ',
            description: 'What is Lorem Ipsum Lorem Ipsum is simply dummy',
            price: 150.50,
            havePromotion: true,
            haveDiscount: {
              value: false,
              newPrice: 0
            }
          },
          {
            img: 'https://www.blank-sunglasses.com/wp-content/uploads/2020/02/TRAPPER-SUNGLASSES-BLACK-GOLD-SIDE.jpg',
            title: 'Product ',
            description: 'What is Lorem Ipsum Lorem Ipsum is simply dummy',
            price: 100,
            havePromotion: false,
            haveDiscount: {
              value: true,
              newPrice: 80
            }
          }
        ]
      }
    },
    data() {
      return {}
    },
    components: {
      Full
    }
  }

</script>

<style scoped>
  .row {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }

  @media (max-width: 801px) {
    .row {
      overflow: scroll;
      overflow-y: hidden;
      justify-content: flex-start;
    }
  }

</style>
