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

    const baseImgUrl = "https://image.tmdb.org/t/p/"
    const size = "w500/"
    return (

        <div className="container">

            {movies.results?.map((movie, index) => (

            <div >
                <h2 key={index}> {movie.original_title} </h2> 
                <img src={`${baseImgUrl}${size}${movie.backdrop_path}`} alt="Image not found"/>
                <p>{`${movie.overview.substr(0, 75)}...`}</p>
    
                <Link to={`/movie/`} key={movie.id}> 
                <button onClick={() => dispatch(getMoviebyId(movie.id))}>Ver más</button>
                </Link>
           </div>            
            ))}
        </div>

    )
};

export default Cards;
