import React from "react";
import { Card, Image } from 'semantic-ui-react';

function BandCard({band}){

    return (
        <div>
            <div style={{ marginLeft: '5%', paddingBottom: '1%'}}>
                <Card style={{ height: '400px'}}>
                    <div style={{ height: '60%', overflow: 'hidden' }}>
                        <Image
                            src={band.band_image}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                    <Card.Content >
                    <Card.Header>{band.band_name}</Card.Header>
                    <Card.Description>
                        <br />
                        <strong>Rating:</strong> {band.rating}
                        <br />
                        {band.setlist_link ? 
                        <a target="_blank"  rel="noreferrer" href={band.setlist_link}>View Setlist</a> : null
                        }
                        <br />
                        <br />
                        <strong>Comments: </strong>{band.comments}
                    </Card.Description>
                    </Card.Content>

                </Card>
            </div>
        </div>
    )
}

export default BandCard;