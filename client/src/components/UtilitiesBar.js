import React, { useEffect, useState } from "react";
import AddConcertForm from "./AddConcertForm";
import { Button } from 'semantic-ui-react';

function UtilitiesBar({currentUser, searchState, setSearchState, filterYear, setFilterYear, venueOptions, venueFilter, setVenueFilter}){
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

    function handleVenueFilter(e){
        setVenueFilter(e.target.value)
    }

   


    return (
        <div>
            <br />
            <div className='searchbar'>
                <label><strong>Search By Artist: </strong></label>
                <input value={searchState} onChange={handleSearch} />
            </div>
            <br />
            <strong>Filter by year: </strong>
            <select onChange={handleYearChange} value={filterYear}>
                <option value="">All</option>
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
            <strong>Filter By Venue: </strong>
            <select onChange={handleVenueFilter} value={venueFilter}>
                <option value="">All</option>
                {venueOptions}
            </select>
            <br />
            <br />
            {showForm ? 
            <AddConcertForm currentUser={currentUser}/> : null }
            <Button onClick={handleShowForm}>Add a Concert</Button>
        </div>
    )
}

export default UtilitiesBar;