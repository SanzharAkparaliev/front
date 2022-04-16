import React,{useEffect} from 'react'
import { Container,Button} from "reactstrap";
function Home() {
  useEffect(() => {
    document.title = "Home || learn code "
    },[]);
  return (
    <div >
        <div className='jumbotron text-center'>
            <h1 className='display-3'>Learn Code</h1>
            <p>Complete React Js Project + Backend Spring Boot</p>
            <Container>
                <Button color='primary' outline>Start Using</Button>
            </Container>
        </div>
    </div>
  )
}

export default Home