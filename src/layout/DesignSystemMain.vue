<template>
  <div class="live-stream" >
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'Main',
  components: {
  },
  data() {
    return {
  
    }
  },
  methods: {
    
  }
}
</script>

<style lang="scss">

.live-stream {
  display: flex;
  align-items: center;
  justify-content: center;
  .left-section {
      z-index     : 99;
      position    : fixed;
      text-align  : left;
      
      width       : 250px !important;
      animation   : flash 2s forwards;
      transition  : width 0.5s;
      
      top         : 0;
      bottom      : 0;
      overflow-y  : scroll;
      overflow-x  : hidden;

      animation-duration: 3s;
      animation-name: fadeIn;
      
      /* custome crollbar css */
      &::-webkit-scrollbar
      {
          width   : 0;
          display: none;
      }
      &::-webkit-scrollbar-track {
          -webkit-box-shadow: white; 
      }
      &::-webkit-scrollbar-thumb {
          background: white;
      }
  }
  .main-section {
    margin-left: 300px;
  }

}
</style>
