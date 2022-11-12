<template>
  <div>
    <video ref="videoPlayer" class="video-js"></video>
  </div>
</template>

<script>
import videojs from "video.js";
import "video.js/dist/video-js.css";
export default {
  name: "VideoPlayer",
  props: {
    vSource: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      player: null,
      options: {
        controls: true,
        autoplay: true,
        loop: true,
        sources: [
          {
            src: this.vSource,
            type: "video/mp4",
          },
        ],
      },
    };
  },
  mounted() {
    this.player = videojs(this.$refs.videoPlayer, this.options, () => {
      this.player.log("onPlayerReady", this);
    });
  },
  beforeDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  },
};
</script>
