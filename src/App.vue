
<template>
  <div id="app">
    <component :is="layout">
      
    </component>
  </div>
</template>
<script>
import DesignSystemMain from './layout/DesignSystemMain.vue';
export default {
  name: 'App',
  components: {
    DesignSystemMain
  },
  data() {
    return {
      layout: 'design-system-main'
    }
  }
}
</script>
<style lang="scss">
.design-system {
  padding-top: 32px;
}
</style>
