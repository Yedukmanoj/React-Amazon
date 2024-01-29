import React from "react";
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


function Cardone(){
    return(
        <>
        <div className="view">
          <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Oppertunities for students</Card.Title>
       
        <Card.Text>
        Learn about, search for, and apply to internships and full-time opportunities for students.
        </Card.Text>
       <input type="text" placeholder="View open jobs"/>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Warehouse and Hourly Jobs</Card.Title>
       
        <Card.Text>
        Search open jobs and learn about job opportunities at Amazon warehouses and stores.
        </Card.Text>
       <input type="text" placeholder="View open jobs"/>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Software Development</Card.Title>
       
        <Card.Text>
        Explore job opportunities and what it's like to be a software engineer at Amazon.
        </Card.Text>
       <input type="text" placeholder="View open jobs"/>
      </Card.Body>
    </Card>


    </div>
        </>
    )
}
export default Cardone