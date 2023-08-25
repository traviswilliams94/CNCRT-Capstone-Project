import React, { useState } from "react";
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
            <div class='ui search'>
                <label style={{fontSize: 'large'}}><strong>Search By Artist: </strong></label>
                <input class='prompt' type='text'  placeholder="search lower case" value={searchState} onChange={handleSearch} />
                
            </div>
            <br />
            <div className="yearfilter">
            <strong style={{fontSize: 'large'}}>Filter by Year: </strong>
            <select class='ui scrolling dropdown' onChange={handleYearChange} value={filterYear}>
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
            </div>
            <br />
            <strong style={{fontSize: 'large'}}>Filter By Venue: </strong>
            <select class='ui scrolling dropdown' onChange={handleVenueFilter} value={venueFilter}>
                <option value="">All</option>
                {venueOptions}
            </select>
            <br />
            <br />
            {showForm ? 
            <div>
            <AddConcertForm currentUser={currentUser}/> 
            <br />
            <Button onClick={handleShowForm}>Close Form</Button>
            </div>
            : 
            <Button onClick={handleShowForm}>Add a Concert</Button>}
        </div>
    )
}
    
export default UtilitiesBar;