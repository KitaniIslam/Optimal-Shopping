<template>
  <div >
    <a-icon type="search" :style="{ fontSize: '20px',marginLeft: '', color: '#fff'}" @click="showSearch" />
    <a-drawer title="Search Products" placement="top" :closable="false" :visible="visibleSearch" @close="onCloseSearch">
      <div class="search">
        <search-bar />
        <div class="copyright">
          <p>copyright © {{dt.getFullYear()}} all rights reserved.</p>
        </div>
      </div>
    </a-drawer>
  </div>
</template>

<script>
import SearchBar from '~/components/SearchBar'
export default {
  components: {
    SearchBar
  },
  computed: {
      dt :() => { return new Date()}
  },
  data(){
      return {
          visibleSearch: false
      }
  },
  methods: {
      showSearch() {
        console.log(this.visibleSearch)
        this.visibleSearch = true;
      },
      onCloseSearch() {
        console.log(this.visibleSearch)
        this.visibleSearch = false;
      },
  }
}
</script>

<style scoped>
  .copyright {
    display: flex;
    flex: 1;
    justify-content: center;
    margin-top: 20px;
  }

  p {
    margin: 0;
  }

  .search-container {
    width: 80vw;
  }

  .search {
  width: 100%;
/* flex: 1;
  display: flex;
    align-items: center;
    flex-direction: column; */
  }

  /* @media ( max-width:801px){
    .search {
      width: 90%;
    }
  } */
</style>