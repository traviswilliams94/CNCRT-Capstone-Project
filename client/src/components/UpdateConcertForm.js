import React, { useState } from "react";

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
            <form id='updateconcert' onSubmit={handleUpdateSubmit}>
                <label>Artist Name: </label>
                <input
                    type='text'
                    name='band_name'
                    onChange={handleUpdateChange}
                    value={updateData.band_name}
                />
                <label>Date: </label>
                <input
                    type='text'
                    name='date'
                    onChange={handleUpdateChange}
                    value={updateData.date}
                />
                <label>Venue ID: </label>
                <input
                    type='number'
                    name='venue_id'
                    onChange={handleUpdateChange}
                    value={updateData.venue_id}
                />
                <label>Opener: </label>
                <input
                    type='text'
                    name='opener'
                    onChange={handleUpdateChange}
                    value={updateData.opener}
                />
                <label>Image: </label>
                <input
                    type='text'
                    name='concert_image'
                    onChange={handleUpdateChange}
                    value={updateData.concert_image}
                />
                <label>Setlist: </label>
                <input
                    type='text'
                    name='setlist_link'
                    onChange={handleUpdateChange}
                    value={updateData.setlist_link}
                />
                <label>Rating: </label>
                <input 
                    type='number'
                    name='rating'
                    onChange={handleUpdateChange}
                    value={updateData.rating}
                />
                <label>Comments: </label>
                <input className='commentbox'
                    type='text'
                    name='comments'
                    onChange={handleUpdateChange}
                    value={updateData.comments}
                />
                <button className="updatemodalbutton" type='submit'>Update</button>
            </form>
        </div>
    )
}

export default UpdateConcertForm;