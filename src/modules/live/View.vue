<template>
  <div>
    <video style="cursor: pointer;" @click="changePausePlay(flvPlayer)" controls  autoplay="true"
    muted="muted" id="dplayer"></video >

  </div>
</template>

<script>
  import flvjs from 'flv.js'
//import DPlayer from 'dplayer';

export default {
  name: 'Typography',
  components: {
    //DPlayer
  },
  data() {
    return {
      flvPlayer: null
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      if (flvjs.isSupported()) {
          var videoElement = document.getElementById('dplayer');
          this.flvPlayer = flvjs.createPlayer({
              type: 'flv',
              url: 'https://pull.niur.live/live/stream-9911977_lhd.flv?txSecret=142c26b5237987f33880f069d5ee66cc&txTime=66032b64',

          });
          this.flvPlayer.attachMediaElement(videoElement);
          this.flvPlayer.load();
          this.flvPlayer.play();
          
      }
    })
    
  },
  updated: function () {
    this.$nextTick(function () {
      if (flvjs.isSupported()) {
          var videoElement = document.getElementById('dplayer');
          this.flvPlayer = flvjs.createPlayer({
              type: 'flv',
              url: 'https://pull.niur.live/live/stream-9911977_lhd.flv?txSecret=142c26b5237987f33880f069d5ee66cc&txTime=66032b64'
          });
          this.flvPlayer.attachMediaElement(videoElement);
          this.flvPlayer.load();
          this.flvPlayer.play();
          
      }
    })
  },
  methods: {
    changePausePlay () {
      console.log('this.flvPlayer :>> ', this.flvPlayer);
      var videoElement = document.getElementById('dplayer');
      console.log('videoElement :>> ', videoElement);
    },
    
  },
}
</script>

<style lang="scss" scoped>
.is-title {
  font-weight: 600;
  font-size: 25px;
  color: #000000;
}
.section-type {
  padding-top: 24px;
  gap: 40px;
  width: 100%;
  .grid-section {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 3fr; 
    gap:40px;
    padding-bottom: 16px;
  }
  .block-info {
    padding-top: 10px;
    
  }
}
</style>
