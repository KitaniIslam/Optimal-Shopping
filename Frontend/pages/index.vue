<template>
  <div class="container">
    <div class="search-section">
      <h1>Shop like a Mother Now.</h1>
      <p>easy search, better experience</p>
      <search-bar />
    </div>
  </div>
</template>

<script>
import SearchBar from '~/components/SearchBar'
export default {
  components: {
    SearchBar
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  display: flex;
  flex: 1;
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

.search-section{
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
