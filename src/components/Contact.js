
import classes from './Contact.module.css'
import '../App.css'

import { Container,Image } from 'react-bootstrap';
import { faHome, faAt,faPhone,faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Contact = () =>{
    return (
        <div>
        <Image src='https://www.assyst.de/cms/upload/sub/digitalisierung/15-M.jpg' className={classes.avatar} fluid roundedCircle center/ >
        <h3 className="section_title">Contact</h3>
        <hr/>  
        <Container className="section" fluid>
        <p><FontAwesomeIcon icon={faHome} className={classes.contact_icon}/>123 Forbes St; LA,CA</p>
        <p><FontAwesomeIcon icon={faEnvelope} className={classes.contact_icon}/>janagonz@gmail.com</p>
        <p><FontAwesomeIcon icon={faPhone} className={classes.contact_icon}/>09876453212</p>
        <p><FontAwesomeIcon icon={faAt} className={classes.contact_icon}/>www.janagonz.io</p>
        </Container>
        </div>

    )
}