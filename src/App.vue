<script setup>
import MovieHeader from './components/MovieHeader.vue';
import MovieList from './components/MovieList.vue';
import MovieFooter from './components/MovieFooter.vue';
import { onMounted, ref } from 'vue';

const movies = ref([]);

onMounted(() => {
  fetchMovieData();
});

function fetchMovieData() {
  
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZGQ5MjlmZWMzZmIzOTE0OTQ3ZWUxNjM2YTllYjhhNSIsInN1YiI6IjY2MjdhMzdmMTc2YTk0MDE2NjgxOTAyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o5nxOyvekIumPVUX83BaMCf-dxv0GLuXwswlfY0Xd0w'
  }
};

fetch('https://api.themoviedb.org/3/movie/now_playing?language=ko', options)
  .then(response => response.json())
  .then(response => {
    console.log(response.results);
    movies.value = response.results;
  })
  .catch(err => console.error(err));
}

</script>

<template>
  <movie-header/>
  <movie-list :movies="movies"/>
  <movie-footer/>
</template>

<style scoped>
</style>
