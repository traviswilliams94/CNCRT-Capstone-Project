import React from "react";
import {Card, Image} from 'semantic-ui-react';

function TimelineCard({concert}){

        return (
            <div className="tl-item">
                <Card className="content" style={{ height: '300px', width: "200px"}}>
                <div style={{ height: '60%', overflow: 'hidden' }}>
                    <Image
                        src={concert.concert_image}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
                    <Card.Content>
                        <Card.Header>{concert.band_name}</Card.Header>
                        <Card.Meta>{concert.date}</Card.Meta>
                        <Card.Description>
                            <strong>Where: </strong>{concert.venue.venue_name}
                            <br />
                            <strong>Rating: </strong>{concert.rating}
                        </Card.Description>
                    </Card.Content>

                </Card>
            </div>
        )
}

export default TimelineCard;