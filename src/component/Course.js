import axios from 'axios';
import React from 'react'
import { toast } from 'react-toastify';
import {Card,CardBody,CardTitle,CardSubtitle,CardText,CardFooter,Button,Container} from 'reactstrap';
import base_url from '../api/bootapi';

function Course({course,update}) {
  const deleteCourse = (id) =>{
    axios.delete(`${base_url}/courses/${id}`).then(
      (response) => {
        toast.success("course deleted")
        update(id);
      },
      (error) =>{
        toast.error("course not delete !! Server problem")
      }
    )
  }
  return (
  <div>
    <Card>
        <CardBody className='text-center'>
            <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
            <CardText>{course.description}</CardText>
            <Container className='text-center'>
                <Button color='danger' onClick={() => {deleteCourse(course.id)}}>Delete</Button>
                <Button style={{margin:10}} color="warning" >Update</Button>
            </Container>
        </CardBody>
    </Card>
    </div>
  )
}


export default Course