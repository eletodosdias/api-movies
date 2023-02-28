import React from "react";
import SearchBar from "./SearchBar";
import Movies from "./Movies";
import axios from 'axios';
import './style.css'

class App extends React.Component {

  state = { movies: [], favorites: [] };

  searchSubmitHandler = async ( digit ) => {
    const resp = await axios.get(
      "https://www.omdbapi.com/?apikey=18eaeb4f", 
      { params: { s: digit} } );

      console.log(resp.data.Search);
      console.log(resp.data);

      this.setState( () => {
        return { movies: resp.data.Search }
      })
  }
  
  // handleFavorites = (e, id) => {
  //   e.preventDefault();
  //   for (let index = 0; index < array.length; index++) {
  //     if( index === id ){

  //     }
      
  //   }  }

  render() {
    console.log(this.state.movies, "  in App.js");
    return (
      <div className="wrapper">
        <h1>Movies API with axios</h1>
        
        <SearchBar onSubmit={this.searchSubmitHandler} />
        <hr />
        <Movies movies={this.state.movies} />

        
      </div>
    )
  }
}

export default App;
