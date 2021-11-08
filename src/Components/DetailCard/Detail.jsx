import React from 'react'
import { useSelector } from 'react-redux'
import Nav from '../Nav/Nav.jsx';
import './Detail.css'

export function MovieDetailById() {
    const movieDetail = useSelector((dataStore) => dataStore.getMovieById)

    console.log("State del detail", movieDetail)
    const baseImgUrl = "https://image.tmdb.org/t/p/"
    const size = "w500/"

        return (
        <div>
            <Nav/>    
            <div className="div">

                    <h2> {movieDetail.title} </h2> <br />
            <div className="box">
                    <img src={`${baseImgUrl}${size}${movieDetail.backdrop_path}`} alt="Image not found"/>
            
                <div className="boxInfo">
                    <h4>Description:</h4>
                    <h4>{movieDetail.overview}</h4>
                    <p>Vote average: {movieDetail.vote_average}</p>
                    <p>Genres:</p>
                    {movieDetail.genres?.map((genre, index) => (
                        <p key={index}> {genre.name} </p>
                    ))} <br />
                        web: {movieDetail.homepage}
                </div>
            </div>            
        

        </div>
        </div>
    )
}

export default MovieDetailById;