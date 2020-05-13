<template>
    
</template>
<script>
export default {
    async mounted() {
    try {
      await this.$auth.logout();
    } finally {
      this.$router.replace({ name: 'login' });
    }
  }
}
</script>