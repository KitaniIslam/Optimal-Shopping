<template>
  <a-divider orientation="left"> 
      {{title}}
  </a-divider>
</template>
<script>
  export default {
    props: {
        title: {
          type: String,
          default: "Product"
        }
      }
  }
</script>
