import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

function Menu() {
  return (
    <ListGroup>
        <ListGroupItem tag="a" href='/' action>
            Home
        </ListGroupItem>
        
        <ListGroupItem tag="a" href='/add-course' action>
            Add Course
        </ListGroupItem>
        
         <ListGroupItem tag="a" href='/view-course' action>
            View Courses
        </ListGroupItem> 
        
        <ListGroupItem tag="a" href='#!' action>
            About
        </ListGroupItem>

        <ListGroupItem tag="a" href='#!' action>
            Contact
        </ListGroupItem>
    </ListGroup>
  )
}

export default Menu