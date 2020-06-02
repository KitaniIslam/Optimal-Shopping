<template>
  <a-layout-header class="header">
        <!-- <div class="logo" /> -->
        <nuxt-link to="/">
          <p class="optimal-txt">OPTIMAL <span class="shopping-txt">SHOPPING</span></p>
        </nuxt-link>
        <div class="action">
            <nuxt-link to="/about">
              <p>ABOUT</p>
            </nuxt-link>
            <search v-if="visibleSearchIcon" class="action-items" />
            <basket class="action-items"/>
            <inbox class="action-items"/> 
            <nuxt-link to="/profile">
              <a-icon type="user" :style="{ fontSize: '20px', color: '#fff'}"  class="action-items"/>
            </nuxt-link>
        </div>
        <div class="menu">
          <search v-if="visibleSearchIcon" class="for-mobile" />
          <side-menu class="action-items"/>
        </div>
  </a-layout-header>
</template>

<script>
  import Basket from '~/components/Navbar/Basket'
  import Inbox from '~/components/Navbar/Inbox'
  import SearchBar from '~/components/SearchBar'
  import Search from '~/components/Navbar/Search'
  import SideMenu from '~/components/SideMenu'

  export default {
    components:  {
      Basket,
      Inbox,
      SearchBar,
      Search,
      SideMenu
    },
    watch: {
      $route () {
        if(this.$route.fullPath != '/' ) this.visibleSearchIcon = true
        else this.visibleSearchIcon = false
      }
    },
    data(){
      return {
        visibleSearch: false,
        visibleSearchIcon: false
      }
    },
    mounted(){
      if(this.$route.fullPath != '/' ) this.visibleSearchIcon = true;
      else this.visibleSearchIcon = false;
    },
    methods: {
      // logout() {
      //   this.$router.push('/logout');
      // }
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
    align-items: center;
    justify-content: center;
  }
  p {
    margin: 0 0 0 15px;
    color: #fff;
  }

  .logo {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 20px;
    margin-left: 20px;
    background-image: url('../../assets/Logo/my_logo.jpg');
    background-size: cover;
    background-position: center;
  }

  .optimal-txt {
    font-weight: bold;
    margin: 0;
  }

  .shopping-txt {
    font-weight: lighter;
    margin: 0;
  }

  .menu {
    display: none;
  }

  .action-items {
    margin-left: 20px;
  }

  @media (max-width: 480px) {
    .menu {
      display: flex;
      align-items:center ;
      flex-direction: row;
    }

    .action {
      display: none;
    }
  }
</style>