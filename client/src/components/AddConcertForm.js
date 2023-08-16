import React, { useEffect, useState } from "react";

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
        <div>
            <form id='addnewconcert' onSubmit={handleConcertSubmit}>
                <label>Artist Name: </label>
                <input
                    type='text'
                    name='band_name'
                    onChange={handleFormChange}
                    value={formData.band_name}
                    placeholder="Enter Band name"
                />
                <label>Date: </label>
                <input
                    type='text'
                    name='date'
                    onChange={handleFormChange}
                    value={formData.date}
                    placeholder="Enter Date of show"
                />
                <label>Venue ID: </label>
                <input
                    type='number'
                    name='venue_id'
                    onChange={handleFormChange}
                    value={formData.venue_id}
                    placeholder="Enter venue ID"
                />
                <label>Opener: </label>
                <input
                    type='text'
                    name='opener'
                    onChange={handleFormChange}
                    value={formData.opener}
                    placeholder="Add openers separated by commas"
                />
                <label>Image: </label>
                <input
                    type='text'
                    name='concert_image'
                    onChange={handleFormChange}
                    value={formData.concert_image}
                    placeholder="Enter link to image"
                />
                <label>Setlist: </label>
                <input
                    type='text'
                    name='setlist_link'
                    onChange={handleFormChange}
                    value={formData.setlist_link}
                    placeholder="Add setlist from setlist.fm"
                />
                <label>Rating: </label>
                <input 
                    type='number'
                    name='rating'
                    onChange={handleFormChange}
                    value={formData.rating}
                    placeholder='Enter your rating'
                />
                <label>Comments: </label>
                <input className='commentbox'
                    type='text'
                    name='comments'
                    onChange={handleFormChange}
                    value={formData.comments}
                    placeholder="Enter your comments"
                />
                <button type='submit'>Upload New Concert</button>
            </form>
        </div>
    )
}

export default AddConcertForm;