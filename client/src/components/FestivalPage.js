import React, { useState } from "react";
import FestivalUtilities from "./FestivalUtilities";
import FestivalContainer from "./FestivalContainer";

function FestivalPage({currentUser,userFestivals, allFestBands}){
    const [festSearchState, setFestSearchState] =  useState('')

    

    return (
        <div>
            <FestivalUtilities currentUser={currentUser} festSearchState={festSearchState} setFestSearchState={setFestSearchState}/>
            <FestivalContainer userFestivals={userFestivals} festSearchState={festSearchState} allFestBands={allFestBands}/>

        </div>
    )
}

export default FestivalPage;