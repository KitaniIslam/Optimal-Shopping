<template>
    <div class="container">
      <div span="12" class="left-container"></div>
      <div span="12" class="right-container">
        <login />
        <p class="copyright">copyright © {{dt.getFullYear()}} all rights reserved</p>
      </div>
    </div>
</template>

<script>
import Login from '~/components/Login.vue'
export default {
  components: {
    Login
  },
  computed: {
      dt :() => { return new Date()}
  }
}
</script>

<style scoped>
  .container {
    margin: 0 auto;
    height: 100vh;
    display: flex;
    flex-direction: row;
  }
  .right-container {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .left-container {
    background-image: url('../assets/Images/background.jpg');
    background-size: cover;
    background-position: center;
    display: flex;
    height: 100vh;
    flex: 1;
  }
  .yellow-txt {
    color: #34495e;
  }
  .orang-txt {
    color: #34495e;
  }
  h1 {
    font-size: 36px;
    margin: 0;
  }

  .copyright{
      position: absolute;
    bottom: 20px;
  }

@media (max-width:801px)  { 
    .left-container {
        display: none;
    }
    .container {
        background-image: url('../assets/Images/background.jpg');
        background-size: cover;
        background-position: center;
    }
    .container {
        color: #fff;
    }
}
</style>