<template>
  <div>
    <div class="main-title">{{anime.title}} - {{anime.score}} ({{anime.scored_by}})</div>
    <div>
      <span v-for="pic in picturesList" :key="pic.large">
        <img :src="pic.large" class="pic">
      </span>
    </div>
    <iframe width="420" height="315" :src="anime.trailer_url"></iframe>
    <div class="synopsis">{{anime.synopsis}}</div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: "Anime",
    data: function () {
      return {
        anime: {},
        picturesList: [],
      }
    },
    created() {
      const id = this.$route.params.id;
      axios.get(`https://api.jikan.moe/v3/anime/${id}`)
        .then(
          (response) => {
            this.anime = response.data;
        }
      );
      axios.get(`https://api.jikan.moe/v3/anime/${id}/pictures`)
        .then(
          (response) => {
            this.picturesList = response.data.pictures;
        }
      );
    }
  };
</script>

<style>
  .main-title {
    color: white;
    font-size: 2em;
    padding: 5px;
  }
  .synopsis {
    color: white;
  }
  .pic {
    height: 200px;
  }
</style>
