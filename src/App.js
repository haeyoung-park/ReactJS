import React, {Component} from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    title  : 'BabaraPalvin',
    poster : 'https://nation.com.pk/print_images/medium/2019-03-15/barbara-palvin-named-victoria-s-secret-angel-1552670925-8836.jpg'
  },
  {
    title  : 'WHO YOU ARE',
    poster : 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBUJuVA.img?h=195&w=270&m=6&q=60&o=f&l=f&x=215&y=149'
  },
  {
    title  : 'H',
    poster : 'https://s27589.pcdn.co/wp-content/uploads/2018/03/Katniss.jpg'
  },
  {
    title  : 'IronMan ',
    poster : 'https://upload.wikimedia.org/wikipedia/en/d/d5/Iron_Man_3_theatrical_poster.jpg'
  },
  {
    title  : 'IronMan2',
    poster : 'https://i2.wp.com/thisisdotun.com/wp-content/uploads/2018/05/marvel-avengers-infinity-war-iron-man-sixth-scale-figure-hot-toys-feature-903421.jpg?resize=768%2C465&ssl=1'
  }

]


class App extends Component{
  render(){
    return (
      <div className="App">
        {movies.map((movie, index) => {
          return <Movie title = {movie.title} poster = {movie.poster} key = {index}/>
        })}
      </div>
    );
  }
}

export default App;