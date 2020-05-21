<template>
  <div class="container">
    <div class="search-section">
      <h1>Shop like a Mother Now.</h1>
      <p>easy search, better experience</p>
      <search-bar />
    </div>
    <latest-products style="margin-top : 60px" />
    <div class="sub-container">
      <divider title="Product 1" />
      <single-row />
      <divider title="Product 2" />
      <single-row />
    </div>
  </div>
</template>

<script>
  import SearchBar from '~/components/SearchBar'
  import LatestProducts from '~/components/LatestProducts'
  import Divider from '~/components/Divider.vue'
  import SingleRow from '~/components/Products/SingleRow.vue'

  export default {
    components: {
      SearchBar,
      LatestProducts,
      Divider,
      SingleRow
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
