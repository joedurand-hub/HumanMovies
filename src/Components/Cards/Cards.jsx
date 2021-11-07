import React, {useEffect} from 'react';
import {  useDispatch, useSelector } from 'react-redux'
import { getMovies, getMoviebyId } from '../../Actions/index';
import {Link} from 'react-router-dom';
import './Cards.css'

export function Cards() { 
  const dispatch = useDispatch();
  const movies = useSelector((dataStore) => dataStore.getAllMovies) 
  const name = useSelector((dataStore) => dataStore.getMovieByName)


    useEffect(() => {
        dispatch(getMovies())
    }, [dispatch])

    const imageURL = "https://image.tmdb.org/t/p/"
    const size = "w500/"
        return (

            <div className="container">
                {name.results ? 
                name.results?.map((movie, index) => (
    
                <div onClick={() => dispatch(getMoviebyId(movie.id))} className="card">
                <Link to={`/movie/`} key={movie.id}> 
                    <h1 key={index}> {movie.original_title} </h1> 
                    <img src={`${imageURL}${size}${movie.backdrop_path}`} alt="Image not found"/>
                    <strong><p>{`${movie.overview.substr(0, 65)}...`}</p></strong>    
                </Link>
                </div>     
    
                )) 
                : movies.results?.map((element, i) => (
    
                    <div onClick={() => dispatch(getMoviebyId(element.id))} className="card">
                    <Link to={`/movie/`} key={element.id}> 
                        <h1 key={i}> {element.original_title} </h1> 
                        <img src={`${imageURL}${size}${element.backdrop_path}`} alt="Image not found"/>
                        <strong><p>{`${element.overview.substr(0, 65)}...`}</p></strong>    
                    </Link>
                    </div>     
    
                )) 
                
                }
    
            </div>
    
        )  
   
};

export default Cards;
