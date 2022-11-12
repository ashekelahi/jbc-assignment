<template>
  <div v-if="Object.keys(videos).length > 0">
    <VideoPlayer :vSource="videoOptions" />
    <h2>All video links</h2>
    <div v-if="videos.hits.length > 0" class="row">
      <div v-for="video in videos.hits" :key="video.id" class="column">
        <ul class="tags">
          <li v-for="tag in video.tags.split(',')" class="tag">
            {{ tag }}
          </li>
        </ul>
        <a :href="video.videos.small.url">{{ video.videos.small.url }}</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { setVideos, videos } from "~~/store/videos";

const videoOptions =
  "https://cdn.pixabay.com/vimeo/735976929/Waterfall%20-%20126442.mp4?width=1280&hash=f2a3fd71d02adb5d0f9b2a23bfaa11097bf7b264";

const getVideos = async () => {
  const userData = await fetch(
    "https://pixabay.com/api/videos/?key=31177226-859a5cf09f2bbe6c3066342d2"
  )
    .then((response) => response.json())
    .then((data) => setVideos(data));
};

getVideos();
</script>
<style lang="scss" scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  padding: 30px;
  gap: 30px;

  .column {
    flex-basis: calc(31% - 70px / 3);
    padding: 15px;
    border-radius: 7px;
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);

    .tags {
      list-style: none;
      display: flex;
      padding: 0;
      gap: 15px;

      .tag {
        padding: 5px 10px;
        box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);
        text-transform: capitalize;
      }
    }

    a {
      text-decoration: none;
      cursor: pointer;
      color: teal;
      word-break: break-word;
    }
  }
}
</style>
