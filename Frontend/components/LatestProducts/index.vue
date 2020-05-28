<template>
  <div class="container">
    <p class="bg-text ">NEW ARRIVALS</p>
    <h1 class="title">NEW ARRIVALS</h1>
    <div class="product-card-container">
      <a-card hoverable :style="{minWidth: '200px'}" v-for="item in latest" :key="item.index" class="product-card">
        <img slot="cover" alt="example" :src="item.img" />
        <a-card-meta :title="item.title" :description="item.price+' DZD'">
        </a-card-meta>
      </a-card>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        latest: [{
            img: 'https://www.blank-sunglasses.com/wp-content/uploads/2020/02/TRAPPER-SUNGLASSES-BLACK-GOLD-SIDE.jpg',
            title: 'TRAPPER SUNGLASSES BLACK GOLD SIDE',
            price: 300
          },
          {
            img: 'https://www.blank-sunglasses.com/wp-content/uploads/2020/02/TRAPPER-SUNGLASSES-BLACK-GOLD-SIDE.jpg',
            title: 'TRAPPER GREEN SIDE',
            price: 250
          },
          {
            img: 'https://www.blank-sunglasses.com/wp-content/uploads/2020/02/TRAPPER-SUNGLASSES-BLACK-GOLD-SIDE.jpg',
            title: 'Product 1 ',
            price: 700
          }
        ]
      }
    }
  }

</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: #f5f5dc;
    padding: 70px 0 70px 0;
    position: relative;
  }

  .bg-text {
    position: absolute;
    font-size: 25rem;
    margin: 0;
    opacity: 0.1;
    text-align: center;
    line-height: 80%;
  }

  .product-card-container {
    display: flex;
    width: 80vw;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
  }

  .product-card {
    margin: 0 10px;
  }

  .title {
    font-size: 2.5em;
    margin: 0 0 60px 0;
  }

  @media (max-width: 801px) {
      .product-card-container {
        overflow: scroll;
        overflow-y: hidden;
        justify-content: flex-start;
      }
  }

</style>
