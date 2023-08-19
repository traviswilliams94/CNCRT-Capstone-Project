import React from "react";
import FestivalCard from "./FestivalCard";

function FestivalContainer({userFestivals, festSearchState, allFestBands}){

    const orderedFestivals = [...userFestivals].sort((fest1, fest2) => {
        return fest1.festival_name.localeCompare(fest2.festival_name) || fest1.city.localeCompare(fest2.city)
    })

    const festivalDisplay = orderedFestivals.filter(festival => festival.festival_name.toLocaleLowerCase().includes(festSearchState)).map((festival) => (
        <FestivalCard key={festival.id} festival={festival} allFestBands={allFestBands} />
    ))

    return (
        <div className="concertDisplay">
            
            {festivalDisplay}
            
        </div>
    )

}

export default FestivalContainer;