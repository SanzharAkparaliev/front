import React from 'react'
import { CardBody,Card } from 'reactstrap';

function Header() {
  return (
    <div>
      <Card className='my-2 bg-warning '>
        <CardBody>
           <h1 className='text-center my-3'>Welcome to Courses Application</h1>
        </CardBody>
      </Card>
    </div>
  )
}

export default Header;