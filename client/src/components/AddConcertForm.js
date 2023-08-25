import React, { useState } from "react";
import {Button} from 'semantic-ui-react';

function AddConcertForm({currentUser}){
    const [formData, setFormData]  = useState({
        // user_id: currentUser.id,
        band_name: "",
        date: "",
        venue_id: 0,
        opener: "",
        concert_image: "",
        setlist_link: "",
        rating: 0,
        comments: "",
    })


    function handleFormChange(event){
        const name = event.target.name;
        let value = event.target.value

        setFormData({
            ...formData,
            [name]: value,
        });
    }

    function handleConcertSubmit(event){
        // event.preventDefault();

        fetch('/concerts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then((res) => res.json())
        .then((newConcert) => console.log(newConcert))
    }

    return(
        <div className="addConcertForm">
            <form class='ui form' onSubmit={handleConcertSubmit}>
                <div class="field">
                <label style={{fontSize: 'large'}}>Artist Name: </label>
                <input
                    type='text'
                    name='band_name'
                    onChange={handleFormChange}
                    value={formData.band_name}
                    placeholder="Enter Band name"
                />
                </div>
                <div class="field">
                <label style={{fontSize: 'large'}}>Date: </label>
                <input
                    type='text'
                    name='date'
                    onChange={handleFormChange}
                    value={formData.date}
                    placeholder="YYYY-MM-DD"
                />
                </div>
                <div class="field">
                <label style={{fontSize: 'large'}}>Venue ID: </label>
                <input
                    type='number'
                    name='venue_id'
                    onChange={handleFormChange}
                    value={formData.venue_id}
                    placeholder="Enter venue ID"
                />
                </div>
                <div class="field">
                <label style={{fontSize: 'large'}}>Opener: </label>
                <input
                    type='text'
                    name='opener'
                    onChange={handleFormChange}
                    value={formData.opener}
                    placeholder="Add openers separated by commas"
                />
                </div>
                <div class="field">
                <label style={{fontSize: 'large'}}>Image: </label>
                <input
                    type='text'
                    name='concert_image'
                    onChange={handleFormChange}
                    value={formData.concert_image}
                    placeholder="Enter link to image"
                />
                </div>
                <div class="field">
                <label style={{fontSize: 'large'}}>Setlist: </label>
                <input
                    type='text'
                    name='setlist_link'
                    onChange={handleFormChange}
                    value={formData.setlist_link}
                    placeholder="Add setlist from setlist.fm"
                />
                </div>
                <div class="field">
                <label style={{fontSize: 'large'}}>Rating: </label>
                <input 
                    type='number'
                    name='rating'
                    onChange={handleFormChange}
                    value={formData.rating}
                    placeholder='Enter your rating'
                />
                </div>
                <div class="field">
                <label style={{fontSize: 'large'}}>Comments: </label>
                <input className='commentbox'
                    type='text'
                    name='comments'
                    onChange={handleFormChange}
                    value={formData.comments}
                    placeholder="Enter your comments"
                />
                </div>
                <Button color='blue' class='ui button' type='submit'>Upload New Concert</Button>
            </form>
        </div>
    )
}

export default AddConcertForm;