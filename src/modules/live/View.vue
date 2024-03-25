<template>
  <div>
    <h1>Live stream</h1>
    <video id="dplayer"></video >
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
  mounted() {
    if (flvjs.isSupported()) {
        var videoElement = document.getElementById('dplayer');
        if(videoElement) {
          var flvPlayer = flvjs.createPlayer({
            type: 'flv',
            url: 'https://pull.niur.live/live/stream-9912060_lhd.flv?txSecret=d270064b33342945cfdfaa1243c3b19f&txTime=6601d390'
          });
          flvPlayer.attachMediaElement(videoElement);
          flvPlayer.load();
          
        }
    }
    let vii = flvPlayer.play();
    if (vii!== undefined) {
      vii.then(() => {
        flvPlayer.play();
      }).catch(error => {
        console.log('error :>> ', error);
      })
    }
  },
  computed(){

  },
  watch() {
    if (flvjs.isSupported()) {
      var videoElement = document.getElementById('dplayer');
      if(videoElement) {
        var flvPlayer = flvjs.createPlayer({
          type: 'flv',
          url: 'https://pull.niur.live/live/stream-9912060_lhd.flv?txSecret=d270064b33342945cfdfaa1243c3b19f&txTime=6601d390'
        });
        flvPlayer.attachMediaElement(videoElement);
      }
    }
    let vii = flvPlayer.play();
    if (vii!== undefined) {
    vii.then(() => {
      flvPlayer.play();
    }).catch(error => {
      console.log('error :>> ', error);
    });
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
