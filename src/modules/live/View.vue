<template>
  <div>
    <video autoplay="true"
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

    }
  },
  mounted: function () {
    this.$nextTick(function () {
    if (flvjs.isSupported()) {
        var videoElement = document.getElementById('dplayer');
        var flvPlayer = flvjs.createPlayer({
            type: 'flv',
            url: 'https://pull.niur.live/live/stream-9912060_lhd.flv?txSecret=af63bc5f4bca3fc80be6a4ff9ef2d6ce&txTime=66032024'
        });
        flvPlayer.attachMediaElement(videoElement);
        flvPlayer.load();
        flvPlayer.play();
    }
  })
  },
  updated: function () {
    this.$nextTick(function () {
    if (flvjs.isSupported()) {
        var videoElement = document.getElementById('dplayer');
        var flvPlayer = flvjs.createPlayer({
            type: 'flv',
            url: 'https://pull.niur.live/live/stream-9912060_lhd.flv?txSecret=af63bc5f4bca3fc80be6a4ff9ef2d6ce&txTime=66032024'
        });
        flvPlayer.attachMediaElement(videoElement);
        flvPlayer.load();
        flvPlayer.play();
    }
  })
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
