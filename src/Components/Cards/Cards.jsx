import React, {useEffect} from 'react';
import {  useDispatch, useSelector } from 'react-redux'
import { getMovies, getMoviebyId } from '../../Actions/index';
import {Link} from 'react-router-dom';
import './Cards.css'

export function Cards() { 
  const dispatch = useDispatch();
  const movies = useSelector((dataStore) => dataStore.allMovies);  

    useEffect(() => {
        dispatch(getMovies(movies))
        return () => {
            dispatch(getMovies(movies)) 
        }
    }, [dispatch])

    console.log("State de Movies", movies.results)

    const imageURL = "https://image.tmdb.org/t/p/"
    const size = "w500/"
    return (

        <div className="container">

            {movies.results?.map((movie, index) => (

                <div onClick={() => dispatch(getMoviebyId(movie.id))} className="card">
                <Link to={`/movie/`} key={movie.id}> 
                    <h1 key={index}> {movie.original_title} </h1> 
                    <img src={`${imageURL}${size}${movie.backdrop_path}`} alt="Image not found"/>
                    <strong><p>{`${movie.overview.substr(0, 65)}...`}</p></strong>    
                </Link>
           </div>     

            ))}
        </div>

    )
};

export default Cards;
