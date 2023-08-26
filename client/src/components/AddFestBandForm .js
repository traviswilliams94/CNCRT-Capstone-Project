import React, { useState } from "react";
import {Button} from 'semantic-ui-react';

function AddFestBandForm({festival, addBand, setAddBand}){
    const [bandData, setBandData] = useState({
        festival_id: festival.id,
        band_name: "",
        band_image: "",
        setlist_link: "",
        rating: 0,
        comments: "",
        headliner: false,
    })

    function handleBandFormChange(event){
        const name = event.target.name;
        let value = event.target.value

        setBandData({
            ...bandData,
            [name]: value,
        });
    }

    function handleAddBand(){

        fetch('/festivalbands', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json',
            },
            body: JSON.stringify(bandData),
        })
        .then((res) => res.json())
        .then((newBand) => console.log(newBand))
        .then(setAddBand(false))
    }

    return (
        <div>
            <form class='ui form' onSubmit={handleAddBand}>
            <div class="field">
            <label style={{color: 'white'}}>Artist Name: </label>
            <input
                    type='text'
                    name='band_name'
                    onChange={handleBandFormChange}
                    value={bandData.band_name}
                    placeholder="Enter Artist name"
                />
            </div>
            <br />
            <div class="field">
            <label style={{color: 'white'}}>Image: </label>
            <input
                    type='text'
                    name='band_image'
                    onChange={handleBandFormChange}
                    value={bandData.band_image}
                    placeholder="Enter Image URL"
                />
            </div>
            <br />
            <div class="field">
            <label style={{color: 'white'}}>Setlist: </label>
            <input
                    type='text'
                    name='setlist_link'
                    onChange={handleBandFormChange}
                    value={bandData.setlist_link}
                    placeholder="Enter Setlist link from Setlist.fm"
                />
            </div>
            <br />
            <div class="field">
            <label style={{color: 'white'}}>Rating: </label>
            <input
                    type='number'
                    name='rating'
                    onChange={handleBandFormChange}
                    value={bandData.rating}
                    placeholder="Enter Your Rating"
                />
            </div>
            <br />
            <div class="field">
            <label style={{color: 'white'}}>Comments: </label>
            <textarea
                    type='text'
                    name='comments'
                    onChange={handleBandFormChange}
                    value={bandData.comments}
                    placeholder="Enter Your Comments"
                />
            </div>
            <Button color='blue' class='ui button' type='submit'>Add New Band to Festival</Button>
            </form>
        </div>
    )

}

export default AddFestBandForm;