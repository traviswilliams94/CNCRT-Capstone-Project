import React, { useState } from "react";
import AddFestivalForm from "./AddFestivalForm";
import { Button } from 'semantic-ui-react';

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
                <div class='ui search'>
                    <strong style={{fontSize: 'large'}}>Search Festivals: </strong>
                    <input class='prompt' type='text'  placeholder="search lower case" value={festSearchState} onChange={handleFestSearch} />
                </div>
                <br />
                {showAddForm ? 
                <div>
                    <AddFestivalForm currentUser={currentUser}/>
                    <br />
                    <Button onClick={handleShowAddForm}>Close Form</Button>
                </div>
                :
                <Button onClick={handleShowAddForm}>Add a Festival</Button>
                }
            </div>
        )
}

export default FestivalUtilities;

