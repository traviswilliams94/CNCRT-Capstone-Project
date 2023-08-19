import React, { useState } from "react";
import FestivalUtilities from "./FestivalUtilities";
import FestivalContainer from "./FestivalContainer";

function FestivalPage({currentUser, allFestivals}){
    const [festSearchState, setFestSearchState] =  useState('')

    const userFestivals = allFestivals.filter(
        (festival) => festival.user.id === currentUser.id
    );

    return (
        <div>
            <FestivalUtilities currentUser={currentUser} festSearchState={festSearchState} setFestSearchState={setFestSearchState}/>
            <FestivalContainer userFestivals={userFestivals} festSearchState={festSearchState}/>

        </div>
    )
}

export default FestivalPage;