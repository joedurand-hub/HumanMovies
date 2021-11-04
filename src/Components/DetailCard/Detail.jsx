import React from 'react'
import { useSelector } from 'react-redux'
import Nav from '../Nav/Nav.jsx';
import './Detail.css'

export function MovieDetailById() {
    const movie = useSelector((dataStore) => dataStore.getMovieById)

    console.log("State del detail", movie)
    const baseImgUrl = "https://image.tmdb.org/t/p/"
    const size = "w500/"

        return (
        <div>
            <Nav/>    

            <div className="box">
                <div>
                    <img src={`${baseImgUrl}${size}${movie.backdrop_path}`} alt="Image not found"/>
                </div>
            
                <div>
                    <h2> {movie.title} </h2> 
                    {movie.genres?.map((genre, index) => (
                        <h3 key={index}> {genre.name} </h3>
                    ))}
                    <p>{movie.overview}</p>
                        web: {movie.homepage}
                </div>
            </div>            
        

        </div>
    )
}

export default MovieDetailById;