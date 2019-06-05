import React, {Component} from 'react';
import './App.css';
import Movie from './Movie';


class App extends Component{

  // Render : componentWillMount ()  => render () => componentDidMount ()
    
  // Update componentWillReceiveProps () => shouldComponentUpdate () == true => componentWillUpdate () => render () => componentDidMount ()



  // State가 변경될 때 마다 Component는 다시 Render하게 된다.

  // Component -  State              :            - Class
  //           ㄴ Statless Component : only Props - function(Props.value (ex. poster))  : 그냥 return을 위해 존재   don't have state! 
  
  state = {}

  componentDidMount (){
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie) => {
      
      return <Movie 
          title = {movie.title} 
          poster = {movie.medium_cover_image} 
          key = {movie.id}
          genres = {movie.genres}
          synopsis = {movie.synopsis}  
        />
    })
     return movies;
  }

   _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({
      movies
    })
  }

  _callApi = () => {
    // console.log(fetch('https://yts.am/api/v2/list_movies.json?sort_by-rating')); // Promise : new JavaScript Concept <- Asynchronous

    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=like_count') // Ajax

    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  render(){
    const { movies } = this.state;
    return (
      <div className = {movies ? "App" : "App--loading"}>
          {movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }

} //Class

export default App;