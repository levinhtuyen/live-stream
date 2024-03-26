<template>
  <div>
    <div style="cursor: pointer; width: 900px;" @click="changePausePlay(flvPlayer)" muted="muted" id="dplayer"></div >

  </div>
</template>

<script>
  import flvjs from 'flv.js'
  //import Hls from 'hls.js'
import DPlayer from 'dplayer';
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
    //this.$nextTick(function () {
    //  if (flvjs.isSupported()) {
    //      var videoElement = document.getElementById('dplayer');
    //      this.flvPlayer = flvjs.createPlayer({
    //          type: 'flv',
    //          url: 'https://pull.niur.live/live/stream-9911977_lhd.flv?txSecret=142c26b5237987f33880f069d5ee66cc&txTime=66032b64',

    //      });
    //      this.flvPlayer.attachMediaElement(videoElement);
    //      this.flvPlayer.load();
    //      this.flvPlayer.play();
          
    //  }
    //})


    this.$nextTick(function () {
      const dp = new DPlayer({
        container: document.getElementById('dplayer'),
        live:true,
        autoplay: true,
        volume: 0.7,
        mutex: false,
        preload: 'auto',
        screenshot: true,
        hotkey: true,
        video: {
            url: 'https://pull06.scstream.net/live/stream-9912015_lhd.flv?auth_key=1711469708-0-0-b9f1364cb137bb2f7086241868410c81',
            type: 'customFlv',
            
            customType: {
                customFlv: function (video, player) {
                  console.log('player :>> ', player);
                    const flvPlayer = flvjs.createPlayer({
                        type: 'flv',
                        url: video.src,
                    });
                    flvPlayer.attachMediaElement(video);
                    flvPlayer.load();
                    flvPlayer.play();
                },
            },
        },
      });
      console.log('dp :>> ', dp);
    })
  },
  updated: function () {
    //this.$nextTick(function () {
    //  if (flvjs.isSupported()) {
    //      var videoElement = document.getElementById('dplayer');
    //      this.flvPlayer = flvjs.createPlayer({
    //          type: 'flv',
    //          url: 'https://pull06.scstream.net/live/stream-9912015_lhd.flv?auth_key=1711469708-0-0-b9f1364cb137bb2f7086241868410c81'
    //      });
    //      this.flvPlayer.attachMediaElement(videoElement);
    //      this.flvPlayer.load();
    //      this.flvPlayer.play();
          
    //  }
    //})
    //this.$nextTick(function () {
    //  const dp = new DPlayer({
    //    container: document.getElementById('dplayer'),
    //    live: true,
    //    danmaku: true,
    //    apiBackend: {
    //        read: function (options) {
    //            console.log('Pretend to connect WebSocket');
    //            options.success([]);
    //        },
    //        send: function (options) {
    //            console.log('Pretend to send danmaku via WebSocket', options.data);
    //            options.success();
    //        },
    //    },
    //    video: {
    //        url: 'https://pull06.scstream.net/live/stream-9912015_lhd.flv?auth_key=1711469708-0-0-b9f1364cb137bb2f7086241868410c81',
    //        type: 'customHls',
    //        customType: {
    //            customHls: function (video) {
    //                const hls = new Hls();
    //                hls.loadSource(video.src);
    //                hls.attachMedia(video);
    //            },
    //        },
    //    },
    //  });
    //  console.log('dp :>> ', dp);
    //})
    //this.$nextTick(function () {
    //  const dp = new DPlayer({
    //    container: document.getElementById('dplayer'),
    //    live: true,
    //    video: {
    //        url: 'https://pull06.scstream.net/live/stream-9912015_lhd.flv?auth_key=1711469708-0-0-b9f1364cb137bb2f7086241868410c81',
    //        type: 'customHls',
    //        customType: {
    //          customHls: function (video) {
    //            console.log('video :>> ', video);
    //              const hls = new Hls();
    //              hls.media = 'https://pull06.scstream.net/live/stream-9912015_lhd.flv?auth_key=1711469708-0-0-b9f1364cb137bb2f7086241868410c81'
    //              console.log('hls :>> ', hls);
    //          },
    //      },
    //    },
    //  });
    //  console.log('dp :>> ', dp);
    //})
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
