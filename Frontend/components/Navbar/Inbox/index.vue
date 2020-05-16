<template>
  <nuxt-link to="/inbox">
    <a-dropdown>
      <a-icon type="inbox" :style="{ fontSize: '20px', color: '#fff'}" />
      <a-menu slot="overlay">
        <!-- <a-empty /> -->
        <a-menu-item key="1">
          <card />
        </a-menu-item>
        <a-menu-divider />
        <a-menu-item key="0" disabled>
          Last activity
        </a-menu-item>
      </a-menu>
    </a-dropdown>
  </nuxt-link>

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

