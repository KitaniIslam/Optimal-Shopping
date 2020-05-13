<template>
  <div class="container">
    <div class="search-section">
      <h1>Search for your product Now !</h1>
      <p>easy search, add to basket in one click</p>
      <div class="search">
        <a-input-group compact style="display: flex">
          <a-select default-value="Option1">
            <a-select-option value="Option1">
              Option1
            </a-select-option>
            <a-select-option value="Option2">
              Option2
            </a-select-option>
          </a-select>
          <a-input style/>
        </a-input-group>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {}
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
}

p {
  color: #fff;
}

.search {
  width: 40%;
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

@media ( max-width:801px){
  .search {
    width: 90%;
  }
}
</style>
