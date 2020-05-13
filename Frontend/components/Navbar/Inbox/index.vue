<template>
  <a-dropdown>
    <a-icon type="inbox" :style="{ fontSize: '20px', color: '#fff'}" class="inbox"/>
    <a-menu slot="overlay">
      <!-- <a-empty /> -->
      <a-menu-item key="1">
        <card />
      </a-menu-item>
      <a-menu-divider />
      <a-menu-item key="0" disabled>
        Click to Display all invoices.
      </a-menu-item>
    </a-menu>
  </a-dropdown>
</template>

<script>
import Card from './Card';
// TODO: manage empty list
export default {
  components: {
    Card
  }
}
</script>

<style scoped>
.inbox {
  margin-left:20px ;
}
</style>