const API_KEY = "7e21aa22dc8a953a089eb20632af5cf9";

const requests = {
	fetchTrending : `/trending/all/day?api_key=${API_KEY}`,
	fetchNetflixOriginals : `/discover/tv?api_key=${API_KEY}&language=en-US`,
	fetchHorrorMovies : `discover/movie?api_key=${API_KEY}&with_genres=27`,
	fetchTopRated : `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	fetchComedyMovies : `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	fetchRomanceMovies : `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	fetchActionMovies : `/discover/movie?api_key=${API_KEY}&with_genres=28`,
	fetchDocumetaries : `/discover/movie?api_key=${API_KEY}&with_genres=99`
}

export default requests;