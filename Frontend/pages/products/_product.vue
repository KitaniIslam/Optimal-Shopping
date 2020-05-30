<template>
    <div class="container">
        <description />
        <a-divider orientation="left" :style="{marginTop: '5rem'}">See also</a-divider>
        <single-row />
    </div>
</template>

<script>
import Description from '~/components/Products/Description.vue'
import SingleRow from '~/components/Products/SingleRow.vue'
export default {
    components: {
        Description,
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

@media (max-width: 568px ) {
    .container {
        width: 80vw;
    }
}
</style>