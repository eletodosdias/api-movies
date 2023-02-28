import React from "react";
import Movie from "./Movie";
import './style.css'
class Movies extends React.Component {

    render() {
        console.log(this.props.movies);
        return (
            <>
               
               
                    <div >
                        <h2>Movies List: </h2>
                        <div className="container">

                        {   this.props.movies &&
                            this.props.movies.map( (movie)  => {
                                return(

                                    // <Movie movie={m} key={m.imdbID} />

                                    <div className="card" key={movie.imdbID} >
                                        <Movie movie={movie}/>

                                    {/* 
                                        <h2 >{Title}</h2>
                                        <img src={Poster} alt={Title} width="35%" /> */}
                     
                                    </div>
                                )
                            } )

                        }
                        </div>
                    </div>
     
                 
            </>
        )
    }
}

export default Movies;