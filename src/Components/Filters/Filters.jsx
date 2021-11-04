import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByPopularity } from "../../Actions/index";
export default function Filter() {
    const dispatch = useDispatch();  

    const onOrderChange = (e) => {
      dispatch(filterByPopularity(e.target.value));   
    }

    return (
    <div>
        <div className="DivSelect">

            <select id="select" onChange={onOrderChange}>
                <option value="Most popular"> Order </option>
                <option value="ASC"> Weight + (menos - mas)</option>
                <option value="Most popular"></option>
            </select>

        </div>
    </div>
      );

};