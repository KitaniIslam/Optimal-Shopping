<template>
    <div class="container">
    <div class="search-section">
      <h1>Shop like a Mother Now.</h1>
      <p>easy search, better experience</p>
      <search-bar />
    </div>
    <latest-products />
    <div class="sub-container">
        <div v-for="item in feed" :key="item.category">
            <a-divider orientation="left">
                {{item.category}}
            </a-divider>
            <single-row :row="item.value"/>
        </div>
    </div>
  </div>
</template>


<script>
  import SearchBar from '~/components/SearchBar'
  import LatestProducts from '~/components/LatestProducts'
  import SingleRow from '~/components/Products/SingleRow.vue'

  export default {
    components: {
      SearchBar,
      LatestProducts,
      SingleRow
    },
    computed: {
        feed(){
            return this.$store.getters['card/getRecommendations'];
        }
    },
    mounted(){
      console.log((this.$store.getters['card/getRecommendations'])[0].value)
    }
  }

</script>

<style scoped>
  .container {
    margin: 0;
    display: flex;
    flex: 1;
    flex-direction: column;
    overflow: hidden;
  }

  .sub-container {
    width: 70vw;
    margin: 0 auto;
    padding: 60px 0 60px 0;
  }

  h1 {
    color: #fff;
    margin: 0;
    font-size: 3.5em;
    text-align: center;
  }

  p {
    color: #fff;
    font-size: 1.5em;
    text-align: center;

  }

  .search-section {
    width: 100vw;
    height: 80vh;
    background-color: rgb(75, 135, 139);
    background-image: url('../assets/Images/background2.jpg');
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

</style>
