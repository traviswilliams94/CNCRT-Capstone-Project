import React, { useState } from 'react';

function AboutModal({toggleLearnMore}){

    return (
        <div className="modal">
            <div onClick={toggleLearnMore} className="overlay">
                <div className="modal-content">
                    <h2>About CNCRT</h2>
                    <br />
                    <p>CNRCT was created to help the Architect with a simple, yet common question -- what's the best show you've been to?</p>
                    <br />
                       <p> I go to a lot of concerts, roughly 40 per year. I fell in love with live music the first time I ever went to a show 
                        in 2010. People are always asking me what shows I've been to lately, or what was the best? And I often can't remember,
                        especially when it comes to the "best ever". There have been so many amazing shows and even the great ones can get lost in memory to those more recent,
                        and the photos and videos certainly get lost in the camera roll.</p>
                    <br />
                       <p> CNCRT is a simple, easy to use app for folks like me to save the memories of the concerts they attend over the years. Save pictures, notes,
                        and show details so that you can always keep these memories that are so special to us live music addicts. Even provide each concert with a 
                        rating to help you, somewhat quantitatively, answer the inane question of what was the best one you've been to.
                    </p>
                    <br />
                    <p>I hope you find it fun and helpful. Keep dancing!</p>

                </div>

            </div>
        </div>
        
    )

}

export default AboutModal;