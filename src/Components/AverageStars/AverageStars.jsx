import React, {useState} from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { FaStar } from 'react-icons/fa'
import { filterByAverage0_2, filterByAverage2_4, filterByAverage4_6, filterByAverage6_8, filterByAverage8_10 } from '../../Actions/index'
import './Stars.css'

export default function AverageStars() {
    const dispatch = useDispatch()
    const filterStars = useSelector((dataStore) => dataStore.averageInStars) 
    const [average, setAverage] = useState(null)
    const [hover, setHover] = useState(null)
    
    let averageValue;

    const handleChange = () => {
            console.log(filterStars)
            console.log("anda el 0")
            dispatch(filterByAverage0_2())
    }

    const handleChange2 = () => {
            console.log(filterStars)
            console.log("anda el 2")
            dispatch(filterByAverage2_4())
    }

    const handleChange3 = () => {
            console.log(filterStars)
            console.log("anda el 4")
            dispatch(filterByAverage4_6())
    }

    const handleChange4 = () => {
        console.log("anda el 6")
            dispatch(filterByAverage6_8())
    }

    const handleChange5 = () => {
            console.log(filterStars)
            console.log("anda el 8")
            dispatch(filterByAverage8_10())
    }

    return (
        <div>
        <p>Filter by rating {average}</p>
             <label >
                        <input type="button" name="average" value={averageValue = 2}
                        onClick={() => setAverage(`${averageValue - 2} - ${averageValue}`)}/>

                        <FaStar 
                        className="star" color={averageValue < hover || average ? "#ffc107" : "#e4e5e9"}
                        size={25} onMouseEnter={() => setHover(averageValue)}
                        onMouseLeave={() => setHover(null)} onClick={() => handleChange()} />
                    </label>

                    <label >
                        <input type="button" name="average" value={averageValue = 4}
                        onClick={() => setAverage(`${averageValue - 2} - ${averageValue}`)}/>

                        <FaStar 
                        className="star" color={averageValue < hover || average ? "#ffc107" : "#e4e5e9"}
                        size={25} onMouseEnter={() => setHover(averageValue)}
                        onMouseLeave={() => setHover(null)} onClick={() => handleChange2()} />
                    </label>

                    <label >
                        <input type="button" name="average" value={averageValue = 6}
                        onClick={() => setAverage(`${averageValue - 2} - ${averageValue}`)}/>

                        <FaStar 
                        className="star" color={averageValue < hover || average ? "#ffc107" : "#e4e5e9"}
                        size={25} onMouseEnter={() => setHover(averageValue)}
                        onMouseLeave={() => setHover(null)} onClick={() => handleChange3()} />
                    </label>
                    
                    <label >
                        <input type="button" name="average" value={averageValue = 8}
                        onClick={() => setAverage(`${averageValue - 2} - ${averageValue}`)}/>

                        <FaStar 
                        className="star" color={averageValue < hover || average ? "#ffc107" : "#e4e5e9"}
                        size={25} onMouseEnter={() => setHover(averageValue)}
                        onMouseLeave={() => setHover(null)} onClick={() => handleChange4()} />
                    </label>
                    
                    <label >
                        <input type="button" name="average" value={averageValue = 10}
                        onClick={() => setAverage(`${averageValue - 2} - ${averageValue}`)} />

                        <FaStar 
                        className="star" color={averageValue < hover || average ? "#ffc107" : "#e4e5e9"}
                        size={25} onMouseEnter={() => setHover(averageValue)}
                        onMouseLeave={() => setHover(null)} onClick={() => handleChange5()} />
                    </label>

        </div>
    )


            
    
}