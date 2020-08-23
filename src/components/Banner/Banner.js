import React, {useState, useEffect} from 'react';
import axios from './../../axios';
import request from './../../request';
import './Banner.css';

const Banner = () => {
	const [movie, setMovie] = useState([]);

	useEffect(() => {
    async function fetchData () {
    	const req = await axios.get(request.fetchNetflixOriginals);
    	setMovie(req.data.results[
    		Math.floor(Math.random() * req.data.results.length -1)
    	]);
    	return request;
    }
    fetchData();
	}, []);

	const truncate = (str, len) => {
  	return (str?.length > len ? str.substr(0, len-1) + '.....' : str);
  }

	return(
		<header
		 className = 'banner'
		 style = {{		 	
		 	backgroundSize : 'cover',
		 	backgroundImage : `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
		 	backgroundPosition : 'center' 
		 }
		 }>
			<div className = 'banner_contents'>
			  <h1 className = 'banner_title'>{movie?.title || movie?.name || movie?.original_name}</h1>
			  <div className = "banner_buttons">
				  <button className = 'banner_button'>Play</button>
				  <button className = 'banner_button'>My List</button>
			  </div>
			  <h1 className = 'banner_description'>{truncate(movie?.overview, 180)}</h1>			  
			</div>
			<div className = "banner_fadeButton"></div>
		</header>
	);
}

export default Banner;