import './App.css'; 
import { Button, Col, Container, Row } from 'reactstrap';
import {ToastContainer,toast} from 'react-toastify';
import Home from './component/Home';
import Course from './component/Course';
import AllCourses from './component/AllCourses';
import AddCourse from './component/AddCourse';
import Header from './component/Header'
import Menu from './component/Menu';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
function App() {
    const btnHandle = () => {
        toast.success("done",{
            position:"top-center",
        })
    }
    return ( 
        <div>
            <Router>
                    <ToastContainer />
                <Container>
                    <Header/>
                    <Row>
                        <Col md={4}>
                                <Menu/>
                            </Col>
                        <Col md={8}> 
                        <Routes>
                            <Route path='/' element={<Home/>} exact/>
                            <Route path='add-course' element={<AddCourse/>} exact/>
                            <Route path='view-course' element={<AllCourses/>} exact/>
                        </Routes>
                        </Col>
                    </Row>
                </Container>
           </Router>
        </div>
    );
}

export default App;