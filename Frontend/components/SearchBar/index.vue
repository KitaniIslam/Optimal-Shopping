<template>
  <div class="">
    <a-input-group compact style="display: flex">
      <a-select default-value="Option1">
        <a-select-option value="Option1">
          Option1
        </a-select-option>
        <a-select-option value="Option2">
          Option2
        </a-select-option>
      </a-select>
      <a-input placeholder="Search ...">
        <a-tooltip slot="suffix" title="Find product">
          <a-icon type="search" style="color: rgba(0,0,0,.45)" />
        </a-tooltip>
      </a-input>
    </a-input-group>
  </div>
</template>


<style scoped>
.search {
  width: 40%;
}

@media ( max-width:801px){
  .search {
    width: 90%;
  }
}
</style>