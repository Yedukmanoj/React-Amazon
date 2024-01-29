import React from "react";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function Explore(){
    return(
        <>
        <div className="explore">
            <h1>Explore opportunities</h1>
            <div className="cards">
            <Card style={{ width: '18rem' }}>
    
      <Card.Body>
        <Card.Title>Teams</Card.Title>
        <Card.Text>
          Get to know Amazon's teams,from Amazon Web Services to subsidiaries
        </Card.Text>
        <a href="#">See all teams</a>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
     
      <Card.Body>
        <Card.Title>Job Categories</Card.Title>
        <Card.Text>
          Want to be an Amazonian? Find the right job for you.
        </Card.Text>
       <a href="#">See all job categories</a>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
     
      <Card.Body>
        <Card.Title>Location</Card.Title>
        <Card.Text>
         View Amazon's office locations across the globe
        </Card.Text>
       <a href="#">See all location</a>
      </Card.Body>
    </Card>
            </div>
        </div>

       
        </>
    )
}

export default Explore