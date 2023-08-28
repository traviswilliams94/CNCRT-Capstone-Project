import { isMatch } from "date-fns";
import React, { useState } from "react";
import {Button} from 'semantic-ui-react';



function AddFestivalForm(){

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


    function handleFestSubmit(event){
        if (isMatch(festData.start_date, 'yyyy-MM-dd') && (isMatch(festData.end_date, 'yyyy-MM-dd'))) {
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
    else {
        event.preventDefault();
        return (
            alert('Dates must be in yyyy-MM-dd format')
        )
    }
}

    return (
        <div className="addConcertForm">
            <form class='ui form' onSubmit={handleFestSubmit}>
                <div class="field">
                <label style={{fontSize: 'large'}}>Festival Name: </label>
                <input
                    type='text'
                    name='festival_name'
                    onChange={handleFestFormChange}
                    value={festData.festival_name}
                    placeholder="Coachella 2023"
                />
                </div>
                <br />
                <div class="field">
                <label style={{fontSize: 'large'}}>City: </label>
                <input
                    type='text'
                    name='city'
                    onChange={handleFestFormChange}
                    value={festData.city}
                    placeholder="Indio, CA"
                />
                </div>
                <br />
                <div class="field">
                <label style={{fontSize: 'large'}}>Start Date: </label>
                <input
                    type='text'
                    name='start_date'
                    onChange={handleFestFormChange}
                    value={festData.start_date}
                    placeholder="2023-04-17"
                />
                </div>
                <br />
                <div class="field">
                <label style={{fontSize: 'large'}}>End Date: </label>
                <input
                    type='text'
                    name='end_date'
                    onChange={handleFestFormChange}
                    value={festData.end_date}
                    placeholder="2023-04-19"
                />
                </div>
                <br />
                <div class="field">
                <label style={{fontSize: 'large'}}>Image: </label>
                <input
                    type="text"
                    name='festival_image'
                    onChange={handleFestFormChange}
                    value={festData.festival_image}
                    placeholder="Enter link to image"
                />
                </div> 
                <br />
                <div class="field">
                <label style={{fontSize: 'large'}}>Rating: </label>
                <input 
                    type='number'
                    name='rating'
                    onChange={handleFestFormChange}
                    value={festData.rating}
                    placeholder='Enter your rating'
                />
                </div>
                <br />
                <div class="field">
                <label style={{fontSize: 'large'}}>Comments: </label>
                <textarea className='commentbox'
                    type='text'
                    name='comments'
                    onChange={handleFestFormChange}
                    value={festData.comments}
                    placeholder="Enter your comments"
                />
                </div>
                <Button color='blue' class='ui button' type='submit'>Upload New Festival</Button>
            </form>
        </div>
    )
}

export default AddFestivalForm;