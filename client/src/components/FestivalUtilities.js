import React, { useState } from "react";
import AddFestivalForm from "./AddFestivalForm";

function FestivalUtilities({currentUser, festSearchState, setFestSearchState}){
    const [showAddForm, setShowAddForm] = useState(false)

    function handleFestSearch(e){
        setFestSearchState(e.target.value)
    }

    function handleShowAddForm(){
        setShowAddForm((showAddForm) => !showAddForm)
    }

        return (
            <div>
                <br />
                <div className='searchbar'>
                    <strong>Search Festivals: </strong>
                    <input value={festSearchState} onChange={handleFestSearch} />
                </div>
                <br />
                {showAddForm ? 
            <AddFestivalForm currentUser={currentUser}/> : null }
            <br />
            <button onClick={handleShowAddForm}>Add a Festival</button>
            </div>
        )
}

export default FestivalUtilities;