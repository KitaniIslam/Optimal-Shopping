<template>
    <div class="container">
        <product-details />
        <a-divider orientation="left" :style="{marginTop: '5rem'}">See also</a-divider>
        <single-row />
    </div>
</template>

<script>
import ProductDetails from '~/components/ProductDetails';
import SingleRow from '~/components/Products/SingleRow.vue'
export default {
    components: {
        ProductDetails,
        SingleRow
    }
    
}
</script>

<style scoped>
.container {
    width: 70vw;
    margin: 0 auto;
    padding: 1rem 0 0 0 ;
}
</style>