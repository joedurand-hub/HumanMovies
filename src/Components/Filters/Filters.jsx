import React from "react";
import { useDispatch} from "react-redux";
import { filterByAverage } from "../../Actions/index";
import './Filter.css';

export default function Filter() {
    const dispatch = useDispatch();  

    const onOrderChange = (e) => {
      dispatch(filterByAverage(e.target.value));   
    }

    return (
        <div className="DivSelect">

            <select id="select" onChange={onOrderChange}>
                <option value="1_2"> 1_2 </option>
                <option value="3_4"> 3_4 </option>
                <option value="5_6"> 5_6 </option>
                <option value="7_8"> 7_8 </option>
                <option value="9_10"> 9_10 </option>
            </select>

        </div>
      );

};