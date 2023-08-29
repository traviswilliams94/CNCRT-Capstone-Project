import React from "react";
import TimelineCard from "./TimelineCard";

function BuddyTimeline({concertObjects, festivalObjects}){

    const allTimeline = [...concertObjects, ...festivalObjects]

    const timelineConcerts = allTimeline.sort((a, b) => new Date(...a.object_date.split('/').reverse()) - new Date(...b.object_date.split('/').reverse()));

    const timelineDisplay = timelineConcerts.map((object, i) => {
        if(i % 2 === 0){
            return  <div className="container left"><TimelineCard key={object.id} object={object} /></div>;
        }
        else {
            return <div className="container right"><TimelineCard key={object.id} object={object} /></div>;
        }
    })

    return(
        <div className="timeline">
                {timelineDisplay}
            </div>
    )
}

export default BuddyTimeline;