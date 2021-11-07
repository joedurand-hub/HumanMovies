import React, {useState} from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { FaStar } from 'react-icons/fa'
import { filterByAverage } from '../../Actions/index'
import './Stars.css'

export default function AverageStars() {
    const dispatch = useDispatch()
    const filterByRating = useSelector((dataStore) => dataStore.getAllMovies)

    const [average, setAverage] = useState(null)
    const [hover, setHover] = useState(null)

const onChange1_2 = () => {
    dispatch(filterByAverage())
}


const averageValue = (1) * 2
    return (
        <div>
            <p>Filter by rating {average}</p>
                    <label >
                        <input type="button" 
                        name="average"
                        value={averageValue}
                        onClick={() => setAverage(`${averageValue - 2} - ${averageValue}`)}
                        />

                        <FaStar 
                        className="star"
                        color={averageValue < hover || average ? "#ffc107" : "#e4e5e9"}
                        size={25}
                        onMouseEnter={() => setHover(averageValue)}
                        onMouseLeave={() => setHover(null)}
                        onClick={() => onChange1_2()}
                        />
                    </label>

        </div>
    )


            
    
}