import React, {Component} from 'react';
import './App.css';
import MovieForm from './components/MovieForm';

class App extends Component {

  state = {
    movies: [{title: 'The Matrix', year: 1999}, {title: 'The Shining', year: 1989}, {title: 'The Whale', year: 2022}]
  }

  addNewMovie = (movie) => {
    this.setState({
      movies: [...this.state.movies, movie]
    })
  }

  render() {
  return (
    <div className="App">
      <h1>Class Based Movie Example</h1>
      <MovieForm addNewMovie={this.addNewMovie}/>

    {
      this.state.movies.map((movie, index) => {
        return (
          <div key={index}>
            <h2>{movie.title}</h2>
            <p>Release Year: {movie.year}</p>
          </div>
        )
      }
      )
    }

    </div>
  )}
}


export default App;
