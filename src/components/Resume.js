import '../App.css'
import { Container,Col,Row,Image } from 'react-bootstrap';
import { WorkXp } from './WorkXp';
import { Contact } from './Contact';
import {Education} from './Education';
import { Skills } from './Skills';
import { Heading } from './Heading';

export const Resume = () =>{
return (
    <Container fluid >
      <Row>
      <Col xs={3} className="left main">
        <Contact/>
        <Education/>
        <Skills/>
      </Col>

      <Col className="right main" >
        <Heading/>
        <WorkXp/>
      </Col>
      </Row>
    </Container>

)
}