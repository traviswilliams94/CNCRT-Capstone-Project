import React from "react";
import {Card, Image} from 'semantic-ui-react';
import { format, parse } from 'date-fns';

function TimelineCard({object}){

    // const {band_name, concert_image, date, venue, rating} = concert

    // const realDate = (date) => {
    //     const array =[]
    //     array.push(`${date}T00:00:00`)
    //     return array[0]
    // };

    const realDate = parse(object.object_date, 'yyyy-MM-dd', new Date())
    const displayDate = format(realDate, "MMMM d, yyyy")

        return (
            <div className="tl-item">
                <Card className="content" style={{ height: '300px', width: "200px"}}>
                <div style={{ height: '60%', overflow: 'hidden' }}>
                    <Image
                        src={object.object_image}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
                    <Card.Content>
                        <Card.Header>{object.object_name}</Card.Header>
                        <Card.Meta>{displayDate}</Card.Meta>
                        <Card.Description>
                            <strong>Where: </strong>{object.object_where}
                            <br />
                            <strong>Rating: </strong>{object.object_rating}
                        </Card.Description>
                    </Card.Content>

                </Card>
            </div>
        )
}

export default TimelineCard;