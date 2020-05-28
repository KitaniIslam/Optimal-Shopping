<template>
    <div class="container">
        <a-empty :image="simpleImage" >
            <span slot="description">OPS ! No Data .</span>
            <nuxt-link to="/">
                <a-button >
                Select Product
                </a-button>
            </nuxt-link>
        </a-empty>
    </div>
</template>

<script>
import { Empty } from 'ant-design-vue';
export default {
  beforeCreate() {
    this.simpleImage = Empty.PRESENTED_IMAGE_SIMPLE;
  },
};
</script>

<style scoped>
.container {
    height: calc(100vh - 64px);
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>