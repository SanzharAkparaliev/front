import React,{useState,useEffect} from "react";
import Course  from "./Course";
import base_url from '../api/bootapi';
import axios from 'axios';
import { toast } from "react-toastify";

const AllCourses=()=>{
    useEffect(() => {
        document.title = "All Courses"
    },[])

    const getAllCoursesFromServer = () =>{
        axios.get(`${base_url}/courses`).then(
            (response) => {
            
                toast.success("courses has been loaded",{
                    position:'bottom-center'
                });
                setCourses(response.data)
            },
            (error)=>{
                toast.error("something went wrong",{
                    position:'bottom-center'
                });
            }
        )
    }
    useEffect(() => {
        getAllCoursesFromServer();
    },[])

    const [courses,setCourses] = useState([])
    return (
        <div>
            <h1>All Course</h1>
            <p>List of courses are as follows</p>

            {courses.length > 0 ?
            courses.map((item) => <Course key={item.id} course={item}/>)
            :"No courses"
        }    
        </div>
    ) 
}

export default AllCourses