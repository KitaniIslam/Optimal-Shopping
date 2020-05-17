<template>
  <div>
    <a-icon type="menu" class="action-items" :style="{ fontSize: '20px', color: '#fff'}" @click="showDrawer" />
    <a-drawer title="MENU" placement="right" :closable="false" :visible="visible" @close="onClose">
      <a-menu>
        <a-menu-item>
          <nuxt-link to="/">
            <a-icon type="home" />
            Home
          </nuxt-link>
        </a-menu-item>
        <a-menu-item>
          <nuxt-link to="/basket">
            <a-icon type="shopping-cart" />
            Card
          </nuxt-link>
        </a-menu-item>
        <a-menu-item>
          <nuxt-link to="/inbox">
            <a-icon type="inbox" />
            Inbox
          </nuxt-link>
        </a-menu-item>
        <a-menu-item>
          <nuxt-link to="/profile">
            <a-icon type="user" />
            My Profile
          </nuxt-link>
        </a-menu-item>
        <a-menu-item>
          <nuxt-link to="/about">
            <a-icon type="heart" />
            About
          </nuxt-link>
        </a-menu-item>
      </a-menu>
    </a-drawer>
  </div>
</template>

<script>
export default {
    data(){
        return {
            visible: false,
        }
    },
    methods: {
        showDrawer() {
            this.visible = true;
        },
        onClose() {
            this.visible = false;
        },
    }
}
</script>

<style scoped>
</style>