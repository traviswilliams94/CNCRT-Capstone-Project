import React, { useState } from "react";
import {Button} from 'semantic-ui-react';

function UpdateConcertForm({concert, setUpdateModal}){
    const [updateData, setUpdateData]  = useState({
    
        band_name: concert.band_name,
        date: concert.date,
        venue_id: concert.venue.id,
        opener: concert.opener,
        concert_image: concert.concert_image,
        setlist_link: concert.setlist_link,
        rating: concert.rating,
        comments: concert.comments,
    })

    function handleUpdateChange(event){
        const name = event.target.name;
        let value = event.target.value

        setUpdateData({
            ...updateData,
            [name]: value,
        });
    }

    function handleUpdateSubmit(){
        fetch(`concerts/${concert.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(
                updateData
              ),
        })
        .then((res) => res.json())
        .then(setUpdateModal(false))
        .then ((updatedConcert) => console.log(updatedConcert))
        .then(window.location.reload(true));
    }

    return (
        <div>
            <form class='ui form' onSubmit={handleUpdateSubmit}>
                <div class="field">
                <label style={{fontSize: 'large', color: 'white'}}>Artist Name: </label>
                <input
                    type='text'
                    name='band_name'
                    onChange={handleUpdateChange}
                    value={updateData.band_name}
                />
                </div>
                <div class="field">
                <label style={{fontSize: 'large', color: 'white'}}>Date: </label>
                <input
                    type='text'
                    name='date'
                    onChange={handleUpdateChange}
                    value={updateData.date}
                />
                </div>
                <div class="field">
                <label style={{fontSize: 'large', color: 'white'}}>Venue ID: </label>
                <input
                    type='number'
                    name='venue_id'
                    onChange={handleUpdateChange}
                    value={updateData.venue_id}
                />
                </div>
                <div class="field">
                <label style={{fontSize: 'large', color: 'white'}}>Opener: </label>
                <input
                    type='text'
                    name='opener'
                    onChange={handleUpdateChange}
                    value={updateData.opener}
                />
                </div>
                <div class="field">
                <label style={{fontSize: 'large', color: 'white'}}>Image: </label>
                <input
                    type='text'
                    name='concert_image'
                    onChange={handleUpdateChange}
                    value={updateData.concert_image}
                />
                </div>
                <div class="field">
                <label style={{fontSize: 'large', color: 'white'}}>Setlist: </label>
                <input
                    type='text'
                    name='setlist_link'
                    onChange={handleUpdateChange}
                    value={updateData.setlist_link}
                />
                </div>
                <div class="field">
                <label style={{fontSize: 'large', color: 'white'}}>Rating: </label>
                <input 
                    type='number'
                    name='rating'
                    onChange={handleUpdateChange}
                    value={updateData.rating}
                />
                </div>
                <div class="field">
                <label style={{fontSize: 'large', color: 'white'}}>Comments: </label>
                <textarea className='commentbox'
                    type='text'
                    name='comments'
                    onChange={handleUpdateChange}
                    value={updateData.comments}
                />
                </div>
                <Button color='blue' class='ui button' type='submit'>Update</Button>
            </form>
        </div>
    )
}

export default UpdateConcertForm;