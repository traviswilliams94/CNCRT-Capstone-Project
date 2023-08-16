import React, { useEffect, useState } from "react";
import AddConcertForm from "./AddConcertForm";

function UtilitiesBar({currentUser, searchState, setSearchState, filterYear, setFilterYear}){
    const [showForm, setShowForm] = useState(false)

    function handleShowForm(){
        setShowForm((showForm) => !showForm)
    }

    function handleSearch(e){
        setSearchState(e.target.value)
    }

    function handleYearChange(e){
        setFilterYear(e.target.value)
      }

    return (
        <div>
            <br />
            <div id='searchbar'>
                <strong>Search By Artist: </strong>
                <input value={searchState} onChange={handleSearch} />
            </div>
            <br />
            <strong>Filter by year: </strong>
            <select onChange={handleYearChange} value={filterYear}>
                <option value=""></option>
                <option value='2016'>2016</option>
                <option value='2017'>2017</option>
                <option value='2018'>2018</option>
                <option value='2019'>2019</option>
                <option value='2020'>2020</option>
                <option value='2021'>2021</option>
                <option value='2022'>2022</option>
                <option value='2023'>2023</option>
                <option value='2024'>2024</option>
                <option value='2025'>2025</option>
                <option value='2026'>2026</option>
            </select>
            <br />
            <br />
            {showForm ? 
            <AddConcertForm currentUser={currentUser}/> : null }
            <button onClick={handleShowForm}>Add a Concert</button>
        </div>
    )
}

export default UtilitiesBar;