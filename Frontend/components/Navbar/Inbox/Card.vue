<template>
    <div class="item">
        <div class="info-item">
            <p>1 hour ago</p>
        </div>
        <h3>1700 DZD</h3>
        <a-icon type="printer" :style="{ fontSize: '20px'}" class="icon"/>
        <a-icon type="arrow-right" :style="{ fontSize: '20px'}" class="icon"/>
    </div>
</template>

<style scoped>
.item {
  display: flex;
  flex-direction: row;
  margin: 3px 0 3px 0;
}

.info-item {
  display: flex;
  flex-direction: column;
  margin-right: 30px;
}

p {
  margin: 0;
}

h3 {
  margin: 0;
}

.icon {
  margin-left: 15px;
}
</style>