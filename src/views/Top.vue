<template>
  <div>
    <button @click="gotToList()" v-if="currentAnime.mal_id">back</button>
    <div class="main-container" v-if="!currentAnime.mal_id">
      <div id="list" class="display-flex">
        <div class="anime-div" v-for="anime in animeList" :key="anime.mal_id" @click="selectAnime(anime)">
          <img class="anime-image" :src="anime.image_url">
          <div class="anime-title">{{anime.title}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: "Top",
    data: function () {
      return {
        animeList: [],
        currentAnime: {},
      }
    },
    created() {
      axios.get(`https://api.jikan.moe/v3/top/anime`)
        .then(
          (response) => {
            this.animeList = response.data.top;
        }
      );
    },
    methods: {
      selectAnime(anime) {
        this.$router.push({ name: 'Anime', params: { id: anime.mal_id } })
      },
      gotToList() {
        this.currentAnime = {};
      }
    }
  };
</script>

<style>
  body {
    background: #191919;
  }
  .main-container {
    display: flex;
    justify-content: center;
  }
  .display-flex {
    display: flex;
    flex-wrap: wrap;
    max-width: 75%;
  }
  .anime-div {
    margin: 10px 20px;
    width: 170px;
  }
  .anime-title {
    white-space: pre-wrap;
    max-width: fit-content;
    padding-top: 10px;
    font-weight: 700;
    color: white;
  }
  .anime-image {
    border-radius: 3px;
    max-height: 250px;
  }
</style>
