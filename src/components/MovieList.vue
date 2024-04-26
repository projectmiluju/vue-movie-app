<script setup>
import MovieCard from './MovieCard.vue';

defineProps(['movies']);

</script>

<template>
    <main class="dark:bg-slate-700">
    <section class="max-w-7xl mx-auto py-7">
      <div class="flex justify-start flex-wrap">
        <movie-card 
          v-for="movie in movies"
          :movie="movie"
          :key="movie.id"
        />
      </div>
    </section>
  </main>
</template>

<style scoped>
</style>
