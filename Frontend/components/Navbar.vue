<template>
  <a-layout-header class="header">
        <div class="logo" />
        <div class="action">
            <p>ABOUT</p>
            <a-icon type="shopping-cart" :style="{ fontSize: '20px', color: '#fff'}" class="icon"/>
            <a-icon type="inbox" :style="{ fontSize: '20px', color: '#fff'}" class="icon"/>
            <a-icon type="user" :style="{ fontSize: '20px', color: '#fff'}"  class="icon"/>
        </div>

  </a-layout-header>
</template>

<script>
  export default {
    computed: {
      userName() {
        return this.$store.getters['user/getName']
      }
    },
    methods: {
      logout() {
        this.$router.push('/logout');
      }
    }
  }
</script>

<style scoped>
  .header {
    background-color: #3498DB;
    display: flex;
    flex-direction: row;
    width: 100% !important;
    align-items: center;
    justify-content: space-between;
  }
  .action {
      justify-self: flex-end;
    display: flex;
    /* flex: 1; */
    align-items: center;
    justify-content: center;
  }
  p {
    margin: 0 0 0 15px;
    color: #fff;
  }

  .icon {
      margin-left: 15px;
  }
  .logo {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 20px;
    margin-left: 20px;
    background-image: url('../assets/Logo/my_logo.jpg');
    background-size: cover;
    background-position: center;
  }
</style>