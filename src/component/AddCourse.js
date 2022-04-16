import axios from 'axios';
import React, { Fragment,useEffect,useState } from 'react'
import { toast } from 'react-toastify';
import {Container, Form,FormGroup,Input, Label,Button} from "reactstrap";
import base_url from '../api/bootapi';

function AddCourse() {
    useEffect(() => {
        document.title = "Add New Course "
    },[])

    const [course,setCourse] = useState({});


    const handleForm = (e) => {
        postDataToServer(course);
        e.preventDefault();
        
    }

    const postDataToServer = (data) => {
        axios.post(`${base_url}/courses`,data).then(
            (response) => {
                toast.success("Course added successfully")
            },(error)=>{
                toast.error("Error ! Something went wrong")
            }
        )
    }

  return (
    <Fragment>
        <h1 className='text-center my-3'>Fill Course Detail</h1>
        <Form onSubmit={handleForm}> 
            <FormGroup>
                <label for="userId">Course Id</label>
                <Input type='text' placeholder='Enter here' name='userId' 
                id='userId'
                onChange={(e) =>{
                    setCourse({...course,id:e.target.value})
                }}
                />
            </FormGroup>

            <FormGroup>
                <label for="title">Course Title</label>
                <Input type='text' placeholder='Enter title here' 
                id='title'
                onChange={(e) =>{
                    setCourse({...course,title:e.target.value})
                }}
                />
            </FormGroup>


            <FormGroup>
                <label for="description">Course Description</label>
                <Input type='textarea' placeholder='Enter description here' id='description' style={{height:100}}
                 onChange={(e) =>{
                    setCourse({...course,description:e.target.value})
                }}
                />
            </FormGroup>

            <Container className='text-center'>
                 <Button type="submit" color="success">Add Course</Button> 
                 <Button style={{margin:10}} color="warning"  type="reset" >Clear</Button> 
              </Container>
        </Form>
    </Fragment>
  )
}

export default AddCourse