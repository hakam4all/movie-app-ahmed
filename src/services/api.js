import axios from 'axios';

import { API_KEY, BASE_URL, URLTV, findByIdUrl, searchUrl } from "../config/apiConfig";

const getMovies = async (itemValue) => {
  const url = BASE_URL;
  const api = API_KEY;
  try {
    // const apiUrl = "https://google.com";
    const apiUrl = `${url}${itemValue}?api_key=${api}`;
    console.log(apiUrl);
    const response = await axios.get(apiUrl);
    return response.data;

  } catch (error) {

    console.error("Error during fetching movies:", error.message);
    throw error;
  }

};

const getTvShows = async (tv) => {
  const url = URLTV;
  const api = API_KEY;
  try {
    const apiUrl = `${url}/${tv}?api_key=${api}`;
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {

    console.error("Error fetching TV shows:", error);
    throw error;
  }
};


const findItembyID = async (id, type) => {
  const url = findByIdUrl;
  const api = API_KEY;
  console.log(id);
  console.log(type);
  try {
    const apiUrl = `${url}/${type}/${id}?api_key=${api}`;
    console.log(apiUrl);
    const response = await axios.get(apiUrl);

    console.log(response.data)

    return response.data;

  } catch (error) {

    console.error("Error fetching item:", error);
    throw error;
  }
};

const searchList = async (search, queryParams) => {
  const url = searchUrl;
  const api = API_KEY;
  try {
    const apiUrl = `${url}/${search}?query=${queryParams}&api_key=${api}`;
    const response = await axios.get(apiUrl);
    console.log(response.data)
    return response.data;

  } catch (error) {
    console.error("Error Searching", error);
    throw error;
  }
};

export { getMovies, getTvShows, searchList, findItembyID };

// 1- Popular 
/*
const fetch = require('node-fetch');

const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjZhNTVhZWQxYTc2YjRmYzczZjRjNjJhMjliNTA3OSIsInN1YiI6IjY0MmNkMGE0MmRmZmQ4MDBkNDBiYmZmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RMTykFKAp_2g40-yPNGETVtOnOUZ1KI1vHVOumIi5UM'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));

  */

/*2- NOw  Playing

const fetch = require('node-fetch');

const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
const options = {
method: 'GET',
headers: {
  accept: 'application/json',
  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjZhNTVhZWQxYTc2YjRmYzczZjRjNjJhMjliNTA3OSIsInN1YiI6IjY0MmNkMGE0MmRmZmQ4MDBkNDBiYmZmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RMTykFKAp_2g40-yPNGETVtOnOUZ1KI1vHVOumIi5UM'
}
};

fetch(url, options)
.then(res => res.json())
.then(json => console.log(json))
.catch(err => console.error('error:' + err));

3- Top Rated:

const fetch = require('node-fetch');

const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
const options = {
method: 'GET',
headers: {
  accept: 'application/json',
  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjZhNTVhZWQxYTc2YjRmYzczZjRjNjJhMjliNTA3OSIsInN1YiI6IjY0MmNkMGE0MmRmZmQ4MDBkNDBiYmZmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RMTykFKAp_2g40-yPNGETVtOnOUZ1KI1vHVOumIi5UM'
}
};

fetch(url, options)
.then(res => res.json())
.then(json => console.log(json))
.catch(err => console.error('error:' + err));

4- Upcoming

const fetch = require('node-fetch');

const url = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
const options = {
method: 'GET',
headers: {
  accept: 'application/json',
  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjZhNTVhZWQxYTc2YjRmYzczZjRjNjJhMjliNTA3OSIsInN1YiI6IjY0MmNkMGE0MmRmZmQ4MDBkNDBiYmZmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RMTykFKAp_2g40-yPNGETVtOnOUZ1KI1vHVOumIi5UM'
}
};

fetch(url, options)
.then(res => res.json())
.then(json => console.log(json))
.catch(err => console.error('error:' + err));

*/