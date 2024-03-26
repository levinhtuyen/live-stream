<template>
  <div>
    <video style="cursor: pointer;" @click="changePausePlay(flvPlayer)" controls  autoplay="true"
    muted="muted" id="dplayer"></video >
    <div class="controls">
      <button onclick="flv_load()">Load</button>
      <button onclick="flv_start()">Start</button>
      <button onclick="flv_pause()">Pause</button>
      <button onclick="flv_destroy()">Destroy</button>
      <input style="width:100px" type="text" name="seekpoint"/>
      <button onclick="flv_seekto()">SeekTo</button>
  </div>
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
              url: 'https://pull06.scstream.net/live/stream-9912085_lhd.flv?auth_key=1711465268-0-0-f0b39ecc217264c451b8e9991de7cf3c',

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
              url: 'https://pull06.scstream.net/live/stream-9912085_lhd.flv?auth_key=1711465268-0-0-f0b39ecc217264c451b8e9991de7cf3c'
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
    }
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
