import React, { useEffect, useState } from "react";

function AddFestivalForm({}){

    const [festData, setFestData] = useState({
        festival_name: "",
        city: "",
        start_date: "",
        end_date: "",
        festival_image: "",
        rating: 0,
        comments: "",
    })

    function handleFestFormChange(event){
        const name = event.target.name;
        let value = event.target.value

        setFestData({
            ...festData,
            [name]: value,
        });
    }

    function handleFestSubmit(){

        fetch('/festivals', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json',
            },
            body: JSON.stringify(festData),
        })
        .then((res) => res.json())
        .then((newFestival) => console.log(newFestival))
    }

    return (
        <div>
            <form className='postForm' onSubmit={handleFestSubmit}>
                <label>Festival Name: </label>
                <input
                    type='text'
                    name='festival_name'
                    onChange={handleFestFormChange}
                    value={festData.festival_name}
                    placeholder="Coachella 2023"
                />
                <br />
                <label>City: </label>
                <input
                    type='text'
                    name='city'
                    onChange={handleFestFormChange}
                    value={festData.city}
                    placeholder="Indio, CA"
                />
                <br />
                <label>Start Date: </label>
                <input
                    type='text'
                    name='start_date'
                    onChange={handleFestFormChange}
                    value={festData.start_date}
                    placeholder="April 17th, 2023"
                />
                <br />
                <label>End Date: </label>
                <input
                    type='text'
                    name='end_date'
                    onChange={handleFestFormChange}
                    value={festData.end_date}
                    placeholder="April 19th, 2023"
                />
                <br />
                <label>Image: </label>
                <input
                    type="text"
                    name='festival_image'
                    onChange={handleFestFormChange}
                    value={festData.festival_image}
                    placeholder="Enter link to image"
                />
                <br />
                <label>Rating: </label>
                <input 
                    type='number'
                    name='rating'
                    onChange={handleFestFormChange}
                    value={festData.rating}
                    placeholder='Enter your rating'
                />
                <br />
                <label>Comments: </label>
                <input className='commentbox'
                    type='text'
                    name='comments'
                    onChange={handleFestFormChange}
                    value={festData.comments}
                    placeholder="Enter your comments"
                />
                <br />
                <br />
                <button type='submit'>Upload New Festival</button>
            </form>
        </div>
    )
}

export default AddFestivalForm;