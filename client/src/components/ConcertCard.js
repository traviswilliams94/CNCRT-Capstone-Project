import React, {useState} from "react";
import { Card, Icon, Image, Button } from 'semantic-ui-react';
import UpdateConcertForm from "./UpdateConcertForm";
import { format, parse } from 'date-fns';

function ConcertCard({concert}){

    const [showButton, setShowButton] = useState({display: 'none'});
    const [deleteModal, setDeleteModal] = useState(false);
    const [updateModal, setUpdateModal] = useState(false);

    const realDate = parse(concert.date, 'yyyy-MM-dd', new Date())
    const displayDate = format(realDate, "MMMM d, yyyy")

    function toggleDeleteModal(){
        setDeleteModal(!deleteModal);
    };

    function toggleUpdateModal(){
        setUpdateModal(!updateModal)
    };

    function deleteConcert(){

        fetch(`/concerts/${concert.id}`, {
            method: "DELETE",
        })
        .then((r) => r.json())
        .then(setDeleteModal(false))
        .then(() => console.log("deleted!"))
        .then(window.location.reload(true));
    }

    
    return (
        <div>
            <div style={{ marginLeft: '5%', paddingBottom: '1%'}}>
            <Card style={{ height: '400px', marginBottom: '10px'}} 
            onMouseEnter={() => {
                setShowButton({display: 'grid'});
            }}
            onMouseLeave={() => {
                setShowButton({display: 'none'})
            }}>
                <div style={{ height: '60%', overflow: 'hidden' }}>
                    <Image
                        src={concert.concert_image}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
            <Card.Content>
                <Card.Header>{concert.band_name}</Card.Header>
                <Card.Meta>
                    <span><strong>{concert.opener}</strong></span>
                    <br />
                    <span>{displayDate}</span>
                </Card.Meta>
                <Card.Description>
                <strong>{concert.venue.venue_name}</strong>
                    <br />
                    <strong>Rating:</strong> {concert.rating}
                    <br />
                    {concert.setlist_link ? 
                    <a target="_blank" rel="noreferrer" href={concert.setlist_link}>View Setlist</a> : null
                    }
                    <br />
                    <br />
                    <strong>Comments: </strong>{concert.comments}
                </Card.Description>
            </Card.Content>
            <div style={showButton} >
            <Button onClick={toggleUpdateModal} color="blue" icon>
                <Icon name="edit" />
            </Button>
            <Button onClick={toggleDeleteModal} color='red' icon>
                <Icon name="trash alternate" />
            </Button>
            </div>
            </Card>
            </div>
            {deleteModal ? 
        <div className="modal">
          <div onClick={toggleDeleteModal} className="overlay">
          <div className="modal-content">
            <h3>Are you sure you want to delete the {concert.band_name} concert?</h3>
            <p>
              Once deleted, it cannot be recovered.
            </p>
            <Button color='green' onClick={toggleDeleteModal}>
              No, Keep
            </Button>
            
            <Button color='red' style={{marginLeft: '250px'}} onClick={deleteConcert}>
              Yes, Delete
            </Button>
          </div>
          </div>
        </div> : null
      }
            {updateModal ?
            <div className="modal">
            <div className="overlay">
            <div className="modal-content">
              <h1>Update the {concert.band_name} concert:</h1>
              <br />
              <div>
                <p style={{fontSize: 'large'}}>• Only adjust the fields you want to update</p>
                <p style={{fontSize: 'large'}}>• Add new comments after existing comments to keep the existing</p>
                <p style={{fontSize: 'large'}}>• Dates must be formatted YYYY-MM-DD</p>
              </div>
              <br />
              <div>
                <UpdateConcertForm concert={concert} setUpdateModal={setUpdateModal}/>
              </div>
              {/* <button className="updatemodalbutton" onClick={toggleUpdateModal}>
                Update
              </button> */}
              <br />
              <Button color="red" onClick={toggleUpdateModal}>
                Exit
              </Button>
            </div>
            </div>
          </div> : null
            }
        </div>
    )
}

export default ConcertCard;



// <div>
        //     <img src={concert.concert_image} />
        //     <p><strong>{concert.band_name}</strong></p>
        //     <p>Date: {concert.date}</p>
        //     <p>Venue: {concert.venue.venue_name}</p>
        //     <p>Opener: {concert.opener}</p>
        //     <p>Setlist: {concert.setlist_link}</p>
        //     <p>Rating: {concert.rating}</p>
        //     <p>Comments: {concert.comments}</p>
        // </div>