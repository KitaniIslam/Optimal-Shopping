<template>
  <div class="row">
    <full v-for="item in row" :key="item.title" :simple="item" />
  </div>
</template>

<script>
  import Full from '~/components/Products/Cards/Full.vue'

  export default {
    props: {
      row: {
        type: Array,
        default: ()=> { return[] }
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
