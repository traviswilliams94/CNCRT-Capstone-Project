import React, { useState } from "react";

function AddVenueForm(){
    const [venueData, setVenueData] = useState({
        venue_name: "",
        city: "",
        image: "",
    })

    function handleVenueFormChange(event){
        const name = event.target.name;
        let value = event.target.value

        setVenueData({
            ...venueData,
            [name]: value,
        });
    }

    function handleVenueSubmit(){
        fetch('/venues', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json',
            },
            body: JSON.stringify(venueData),
        })
        .then((res) => res.json())
        .then((newVenue) => console.log(newVenue))
    }

    return (
        <div>
            <form className='postForm' onSubmit={handleVenueSubmit}>
                <label>Venue Name: </label>
                <input
                    type='text'
                    name='venue_name'
                    onChange={handleVenueFormChange}
                    value={venueData.venue_name}
                    placeholder='Enter venue name'
                />
                <label>City, State: </label>
                <input
                    type='text'
                    name='city'
                    onChange={handleVenueFormChange}
                    value={venueData.city}
                    placeholder="ex: Denver, CO"
                />
                <label>Image: </label>
                <input
                    type='text'
                    name='image'
                    onChange={handleVenueFormChange}
                    value={venueData.image}
                    placeholder="Enter image url"
                />
                <button type='submit'>Upload New Venue</button>
            </form>
        </div>
    )

}

export default AddVenueForm;