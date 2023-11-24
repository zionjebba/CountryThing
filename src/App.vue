<template>
  <div>
    <header-component></header-component>
    <div class="page">
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script setup>
import HeaderComponent from './components/HeaderComponent.vue';
</script>

<style scoped>
.container {
  width: 100%;
}

:root{
        --primary-color: #fff;
        --secondary-color: #212121;

    }
  .dark{
        --primary-color: #212121;
        --secondary-color:  #edf2fc;
    }

.page{
  background: var(--primary-color);
  padding-top: 200px;
}

/* .page {
  width: 50%;
  
} */
</style>
