import React, { useEffect, useState } from "react";
import AddConcertForm from "./AddConcertForm";

function UtilitiesBar({currentUser, searchState, setSearchState}){
    const [showForm, setShowForm] = useState(false)

    function handleShowForm(){
        setShowForm((showForm) => !showForm)
    }

    function handleSearch(e){
        setSearchState(e.target.value)
    }

    return (
        <div>
            <div id='searchbar'>
                <strong>Search By Artist: </strong>
                <input value={searchState} onChange={handleSearch} />
            </div>
            <br />
            <br />
            {showForm ? 
            <AddConcertForm currentUser={currentUser}/> : null }
            <button onClick={handleShowForm}>Add a Concert</button>
        </div>
    )
}

export default UtilitiesBar;