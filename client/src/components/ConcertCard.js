import React, {useState} from "react";
import { Card, Icon, Image, Button, Modal } from 'semantic-ui-react';
import ConcertModal from "./ConcertModal";

function ConcertCard({concert}){

    const [showButton, setShowButton] = useState({display: 'none'});

    
    return (
        <div>
            <div style={{ marginLeft: '5%', paddingBottom: '1%'}}>
            <Card style={{ height: '400px'}} 
            onMouseEnter={() => {
                setShowButton({display: 'grid'});
            }}
            onMouseLeave={() => {
                setShowButton({display: 'none'})
            }}>
                <div style={{ height: '60%', overflow: 'hidden' }}>
                    <Image
                        src={concert.concert_image}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
            <Card.Content>
                <Card.Header>{concert.band_name}</Card.Header>
                <Card.Meta>
                    <span><strong>{concert.opener}</strong></span>
                    <br />
                    <span>{concert.date}</span>
                </Card.Meta>
                <Card.Description>
                <strong>{concert.venue.venue_name}</strong>
                    <br />
                    <strong>Rating:</strong> {concert.rating}
                    <br />
                    {concert.setlist_link ? 
                    <a target="_blank" href={concert.setlist_link}>View Setlist</a> : null
                    }
                    <br />
                    <br />
                    <strong>Comments: </strong>{concert.comments}
                </Card.Description>
            </Card.Content>
            <div style={showButton} >
            <Button color="blue" icon>
                <Icon name="edit" />
            </Button>
            <Button color='red' icon>
                <Icon name="trash alternate" />
            </Button>
            </div>
            </Card>
            
        </div>
        </div>
    )
}

export default ConcertCard;



// <div>
        //     <img src={concert.concert_image} />
        //     <p><strong>{concert.band_name}</strong></p>
        //     <p>Date: {concert.date}</p>
        //     <p>Venue: {concert.venue.venue_name}</p>
        //     <p>Opener: {concert.opener}</p>
        //     <p>Setlist: {concert.setlist_link}</p>
        //     <p>Rating: {concert.rating}</p>
        //     <p>Comments: {concert.comments}</p>
        // </div>