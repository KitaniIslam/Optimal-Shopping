<template>
  <div>
    <a-icon type="menu" class="action-items" :style="{ fontSize: '20px', color: '#fff'}" @click="showDrawer" />
    <a-drawer title="MENU" placement="right" :closable="false" :visible="visible" @close="onClose">
      <a-menu>
        <a-menu-item>
          <a-icon type="shopping-cart" />
          Card
        </a-menu-item>
        <a-menu-item>
          <a-icon type="inbox" />
          Inbox
        </a-menu-item>
        <a-menu-item>
          <a-icon type="user" />
          My Profile
        </a-menu-item>
        <a-menu-item>
          <a-icon type="heart" />
          About
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