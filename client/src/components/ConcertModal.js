// import React, { useState } from "react";
// import { Card, Icon, Image, Button, Modal } from 'semantic-ui-react';

// function ConcertModal({modalOpen, setModalOpen, concert, openModal}){

// const [modalOpen, setModalOpen] = useState(false)
    

//     function openModal(){
//         setModalOpen(true) 
          
//     }

//     return (
//         <div>
        
//         <Modal
//             closeIcon
//             onClose={() => setModalOpen(false)}
//             onOpen={() => setModalOpen(true)}
//             open={modalOpen}
//             trigger={}

//         >
//             <Modal.Header>{concert.band_name}</Modal.Header>
//             <Modal.Content image>
//                 <Image size='medium' src={concert.concert_image} wrapped />
//                 <Modal.Description>
//                     <p><strong>Venue: </strong>{concert.venue.venue_name}</p>
//                     <p><strong>Date: </strong>{concert.date}</p>
//                     <p><strong>Rating: </strong>{concert.rating}</p>
//                     <p><strong>Opener: </strong>{concert.opener}</p>
//                     <p><strong>Setlist: </strong>{concert.setlist_link}</p>
//                     <p><strong>Comments: </strong>{concert.comments}</p>
        
//                 </Modal.Description>
//             </Modal.Content>
//         </Modal>
//         </div>
//     )
// }

// export default ConcertModal;