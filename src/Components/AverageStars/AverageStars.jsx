import React, {useState} from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { FaStar } from 'react-icons/fa'
import './Stars.css'

export default function AverageStars() {
    const movies = useSelector((dataStore) => dataStore.getAllMovies) 
    const name = useSelector((dataStore) => dataStore.getMovieByName)
    const [average, setAverage] = useState(null)
    const [hover, setHover] = useState(null)

    const dataMovies = movies.results?.map(movie => {
        return movie

    }).sort((a, b) => {
        const movie1 = a.vote_average;
        const movie2 = b.vote_average;
        if(movie1 < movie2) {
            if(movie1 < 7 && movie1 > 6) {
                console.log("movie menor a 7 y mayor a 6", movie1)
            }
            return -1
        }
        if(movie1 > movie2) return 1
    })

    const dataNames = name.results?.map(movie => {
        return movie

    }).sort((a, b) => {
        const movie1 = a.vote_average;
        const movie2 = b.vote_average;
        if(movie1 < movie2) return -1
        if(movie1 > movie2) return 1
    })


    console.log("Me ordena de menor a mayor el inicio --> : ", dataMovies)
    console.log("Me ordena de menor a mayor por nombre --> : ", dataNames)
    // Pensamiento de 4am
    // Se deben renderizar las cards, sean de inicio o del input
    // En cualquiera de esos casos si se apreta el filtro de estrellas;
    // Debe ordenarlas y mostrarlas según ese puntaje

    return (
        <div>
            <p>Filter by rating {average}</p>
            {
                // Creo un array de 5 espacios, lo itero y dentro hago que empiece a contar desde 1
                // Y lo multiplico por 2 para que cada estrella va de 2 en 2.

                [...Array(5)].map((star, index) => {
                    const averageValue = (index + 1) * 2
                    
                    return (
                        // Creo un input para cada estrella y las oculto con css
                        // Dentro de estos inputs tengo que generar el "match" 
                        // para que tome el value elegido y que busque en el filtro
                        // las movies que contengan esos valores
                        <label >
                            <input type="radio" 
                            name="average"
                            value={averageValue}
                            onClick={() => setAverage(averageValue)}
                            />
                        <FaStar 
                        // Renderizo las estrellas y les asigno color
                        className="star"
                        color={averageValue < hover || average ? "#ffc107" : "#e4e5e9"}
                        size={25}
                        onMouseEnter={() => setHover(averageValue)}
                        onMouseLeave={() => setHover(null)}/>
                        </label>
                    ) 

                })
            }
        </div>
    )
}