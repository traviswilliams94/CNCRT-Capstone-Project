// import React, { useState } from "react";
// import { Card, Icon, Image, Button, Modal } from 'semantic-ui-react';
// import ConcertCard from "./ConcertCard";

// function ConcertModal({ concert }){

// const [modalOpen, setModalOpen] = useState(false)
    

//     return (
        
        
//         <Modal
//             closeIcon
//             onClose={() => setModalOpen(false)}
//             onOpen={() => setModalOpen(true)}
//             open={modalOpen}
//             trigger={<ConcertCard />}

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
        
//     )
// }

// export default ConcertModal;