import { ref } from 'vue';

export default function useFetchMovieData() {

    const movies = ref([]);

    function fetchMovieData(movieType) {
        let url = '';
      
        if (['now_playing', 'popular', 'top_rated'].includes(movieType)) {
          url = `https://api.themoviedb.org/3/movie/${movieType}?language=ko`;
        } else {
          url = `https://api.themoviedb.org/3/search/movie?query=${movieType}&language=ko`;
        }
        
        const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZGQ5MjlmZWMzZmIzOTE0OTQ3ZWUxNjM2YTllYjhhNSIsInN1YiI6IjY2MjdhMzdmMTc2YTk0MDE2NjgxOTAyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o5nxOyvekIumPVUX83BaMCf-dxv0GLuXwswlfY0Xd0w'
        }
      };
      
      fetch(url, options)
        .then(response => response.json())
        .then(response => {
          console.log(response.results);
          movies.value = response.results;
        })
        .catch(err => console.error(err));
      }

      return { movies, fetchMovieData };

}