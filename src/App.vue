<script setup>
import MovieHeader from './components/MovieHeader.vue';
import MovieList from './components/MovieList.vue';
import MovieFooter from './components/MovieFooter.vue';
import { onMounted, ref } from 'vue';
import useFetchMovieData from './composables/useFetchMovieData';

const { movies, fetchMovieData} = useFetchMovieData();

onMounted(() => {
  fetchMovieData();
});


function handleLinkClick(e) {
  console.log(e);
  fetchMovieData(e)
}

function handleSearchInputType(e) {
  fetchMovieData(e);
}

</script>

<template>
  <movie-header 
      @linkClick="handleLinkClick"
      @searchInputType="handleSearchInputType"
  />
  <movie-list :movies="movies"/>
  <movie-footer/>
</template>

<style scoped>
</style>
