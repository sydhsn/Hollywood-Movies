import React, {Component} from 'react';
import "./App.css";
import  MoviesList  from "./components/monster-list/monster-lis.component";
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {  movies:[], searchField:''};
  }

  componentDidMount() {
    fetch("https://api.myjson.com/bins/a33mp")
    .then(response => response.json())
    .then(users => {
      this.setState({movies:users});
    });
  };

  handleChange = e => {
    this.setState({searchField:e.target.value});
  }

  render() {

    const {movies, searchField } = this.state;
    const filteredmovies = movies.filter(movie => {
    return movie.title.toLowerCase().includes(searchField.toLowerCase())
    })
  
  return (
          <div className="App">
              <h1>Movies Hollywood</h1>
              <SearchBox placeholder="Search Movie"  handleChange={this.handleChange}
              />
              <MoviesList movies={filteredmovies}/>
          </div>
          );
  }
}

export default App;