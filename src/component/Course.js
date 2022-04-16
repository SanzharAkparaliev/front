import React from 'react'
import {Card,CardBody,CardTitle,CardSubtitle,CardText,CardFooter,Button,Container} from 'reactstrap';

function Course({course}) {
  return (
  <div>
    <Card>
        <CardBody className='text-center'>
            <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
            <CardText>{course.description}</CardText>
            <Container className='text-center'>
                <Button color='danger'>Delete</Button>
                <Button style={{margin:10}} color="warning" >Update</Button>
            </Container>
        </CardBody>
    </Card>
    </div>
  )
}


export default Course