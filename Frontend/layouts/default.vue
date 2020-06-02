<template>
  <div>
    <navbar />
    <addToCard />
    <nuxt/>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
import AddToCard from '~/components/Products/Modal/AddToCard.vue'
export default {
  components: {
    Navbar,
    AddToCard
  }
}
</script>

