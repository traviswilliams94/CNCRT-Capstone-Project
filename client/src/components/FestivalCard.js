import React, {useState} from "react";
import { Card, Icon, Image, Button, Modal, Header } from 'semantic-ui-react';

function FestivalCard({festival}){
    const [festivalModal, setFestivalModal] = useState(false)

    return (
        <div>
            <div style={{ marginLeft: '5%', paddingBottom: '1%'}}>
            <Card style={{ height: '400px'}} >
            <div style={{ height: '60%', overflow: 'hidden' }}>
                    <Image
                        src={festival.festival_image}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
            <Card.Content>
                <Card.Header>{festival.festival_name}</Card.Header>
                <Card.Meta>
                    <span>{festival.start_date} - {festival.end_date}</span>
                </Card.Meta>
                <Card.Description>
                    <strong>{festival.city}</strong>
                    <br />
                    <strong>Rating:</strong> {festival.rating}
                    <br />
                    <strong>Comments: </strong>{festival.comments}
                </Card.Description>
            </Card.Content>
            <Button primary>Show Details</Button>
            </Card>

            </div>
        </div>
    )

}

export default FestivalCard;