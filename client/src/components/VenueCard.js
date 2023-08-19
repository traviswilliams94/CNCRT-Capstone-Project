import React from "react";
import { Card, Image, Button } from 'semantic-ui-react';

function VenueCard({venue}){

    return (
        <div>
            <div style={{ marginLeft: '5%', paddingBottom: '1%'}}>
            <Card style={{ height: '400px'}} >
            <div style={{ height: '60%', overflow: 'hidden' }}>
                    <Image
                        src={venue.image}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
                <Card.Content>
                    <Card.Header>{venue.venue_name}</Card.Header>
                    <Card.Meta>ID: {venue.id}</Card.Meta>
                    <Card.Description>{venue.city}</Card.Description>
                </Card.Content>
            </Card>
            
        </div>
        </div>
    )

}

export default VenueCard;
