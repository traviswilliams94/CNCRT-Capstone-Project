import React, {useState} from "react";
import { Card, Image, Button } from 'semantic-ui-react';
import BandCard from "./BandCard";
import AddFestBandForm from "./AddFestBandForm ";
import { format, parse } from 'date-fns';
import { useRecoilValue } from "recoil";
import { festBandsAtom } from "../lib/atoms";

function FestivalCard({festival}){
    const [festivalModal, setFestivalModal] = useState(false)
    const [addBand, setAddBand] = useState(false)
    const realStartDate = parse(festival.start_date, 'yyyy-MM-dd', new Date())
    const realEndDate = parse(festival.end_date, 'yyyy-MM-dd', new Date())
    const displayStartDate = format(realStartDate, "MMMM d, yyyy")
    const displayEndDate = format(realEndDate, "MMMM d, yyyy")
    const allFestBands = useRecoilValue(festBandsAtom)
    
    // const [updateFest, setUpdateFest] = useState({
    //     festival_name: festival.festival_name,
    //     city: festival.city,
    //     start_date: festival.start_date,
    //     end_date: festival.end_date,
    //     festival_image: festival.festival_image,
    //     rating: festival.rating,
    //     comments: festival.comments,
    // })

    // function handleUpdateChange(event){
    //     const name = event.target.name;
    //     let value = event.target.value

    //     setUpdateFest({
    //         ...updateFest,
    //         [name]: value,
    //     });
    // }

    // function handleUpdateSubmit(){
    //     fetch(`festivals/${festival.id}`, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(
    //             updateFest
    //         ),
    //     })
    //     .then((res) => res.json())
    //     .then(setFestivalModal(false))
    //     .then(window.location.reload(true));
    // }

    const festivalBands = allFestBands.filter(
        (festivalBand) => festivalBand.festival.id === festival.id
    );

    const bandCards = festivalBands.map((band) => (
        <BandCard key={band.id} band={band} />
    ))

    function toggleFestivalModal(){
        setFestivalModal(!festivalModal)
    }

    function toggleAddBand() {
        setAddBand(!addBand)
    }
   
    
    

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
                    <span>{displayStartDate} - {displayEndDate}</span>
                </Card.Meta>
                <Card.Description>
                    <strong>{festival.city}</strong>
                    <br />
                    <strong>Rating:</strong> {festival.rating}
                    <br />
                    <strong>Comments: </strong>{festival.comments}
                </Card.Description>
            </Card.Content>
            <Button onClick={toggleFestivalModal} primary>Show Details</Button>
            </Card>
            </div>
            {festivalModal ? 
            <div className="modal">
                <div className="overlay">
                    <div className="modal-content" >
                        <h1>{festival.festival_name}</h1>
                        <img src={festival.festival_image} alt={festival.festival_image} style={{ width: '50%', height: '50%', objectFit: 'cover' }}/>
                        <br />
                        <span style={{fontSize: 'x-large'}}><strong>When: </strong>{displayStartDate} - {displayEndDate}</span>
                        <br />
                        <span style={{fontSize: 'x-large'}}><strong>Where: </strong>{festival.city}</span>
                        <br />
                        <br />
                        <span style={{fontSize: 'x-large'}}><strong>Rating:</strong> {festival.rating}</span>
                        <br />
                        <br />
                        <span style={{fontSize: 'large'}}><strong style={{fontSize: 'x-large'}}>Comments: </strong>{festival.comments}</span>
                        <br />
                        <br />
                        <Button color='blue' onClick={toggleAddBand}>+ Artists</Button>
                        <div className="festBandDisplay">{bandCards}</div>
                        <br />
                        <Button color='red' onClick={toggleFestivalModal}>Exit</Button>

                    </div>
                        
                </div>
            </div> : null}
            {addBand ?  
                <div className="modal">
                    <div className="overlay">
                        <div className="modal-content">
                            <h3>Add an Artist you saw at {festival.festival_name}</h3>
                            <AddFestBandForm festival={festival} addBand={addBand} setAddBand={setAddBand}/>
                            <br />
                            <Button color='red' onClick={toggleAddBand}>Exit</Button>
                        </div>
                    </div>
                </div>
            : null}
        </div>
    )

}

export default FestivalCard;

{/* <form onSubmit={handleUpdateSubmit}>
                            <label>Start Date: </label>
                            <input
                                type='text'
                                name='start_date'
                                onChange={handleUpdateChange}
                                value={updateFest.start_date}
                            />
                            <label>End Date: </label>
                            <input 
                                type='text'
                                name='end_date'
                                onChange={handleUpdateChange}
                                value={updateFest.end_date}
                            />
                            <button type='submit'>Update Fetsival Dates</button>
                        </form> */}