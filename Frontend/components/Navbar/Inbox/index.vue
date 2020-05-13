<template>
  <a-dropdown>
    <a-icon type="inbox" :style="{ fontSize: '20px', color: '#fff'}" class="icon"/>
    <a-menu slot="overlay">
      <a-menu-item key="0">
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
      </a-menu-item>
      <a-menu-item key="1">
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
      </a-menu-item>
      <!-- <a-menu-divider /> -->
    </a-menu>
  </a-dropdown>
</template>
