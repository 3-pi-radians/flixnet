import React from 'react';
import Row from './components/Row/Row';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import request from './request';
import './App.css';

function App() {
  console.log("request",request);
  return (
    <div className="App">
    <Navbar />
    <Banner />
      <Row title = "FLIXNET ORIGINALS" fetchUrl = {request.fetchNetflixOriginals}  isOriginal/>
      <Row title = "Tending Now" fetchUrl = {request.fetchTrending} />
      <Row title = "Top Rated" fetchUrl = {request.fetchTopRated} />
      <Row title = "Action Movies" fetchUrl = {request.fetchActionMovies} />
      <Row title = "Comedy Movies" fetchUrl = {request.fetchComedyMovies} />
      <Row title = "Romantic Movies" fetchUrl = {request.fetchRomanceMovies} />
      <Row title = "Horror Movies" fetchUrl = {request.fetchHorrorMovies} />
      <Row title = "Documentaries" fetchUrl = {request.fetchDocumetaries} />
    </div>
  );
}

export default App;
