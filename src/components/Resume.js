import classes from './Resume.module.css';
import { Container,Col,Row,Image } from 'react-bootstrap';
import { faHome, faAt,faPhone,faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { WorkXp } from './WorkXp';

export const Resume = () =>{
return (
    <Container fluid >
      <Row>
      <Col xs={3} className={`${classes.left} ${classes.main}`}>
      <Image src='https://www.assyst.de/cms/upload/sub/digitalisierung/15-M.jpg' className={classes.avatar} fluid roundedCircle/ >
        <h3 className={classes.section_title}>Contact</h3>
        <hr/>  
        <Container className={classes.section} fluid>
        <p><FontAwesomeIcon icon={faHome} className={classes.contact_icon}/>123 Forbes St; LA,CA</p>
        <p><FontAwesomeIcon icon={faEnvelope} className={classes.contact_icon}/>janagonz@gmail.com</p>
        <p><FontAwesomeIcon icon={faPhone} className={classes.contact_icon}/>09876453212</p>
        <p><FontAwesomeIcon icon={faAt} className={classes.contact_icon}/>www.janagonz.io</p>
        </Container>

        <h3 className={classes.section_title}>Education</h3>
        <hr/>  
        <Container className={classes.section} fluid>
        <p><b>Bachelor of Science in Computer Science</b></p>
        <p>Harvard University , US</p>
        <p>2011-2014</p>
        <br />
        <p><b>Highschool Diploma</b></p>
        <p>Scholastica's College , US</p>
        <p>2010-2014</p>
        </Container>

        <h3 className={classes.section_title}>Skills</h3>
        <hr/>  
        <Container className={`${classes.section} ${classes.section_skills}`} fluid>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>Typescript</li>
            <li>Angular</li>
            <li>React</li>
            <li>Spring</li>    
        </ul>
        </Container>

      </Col>

      <Col className={`${classes.right} ${classes.main}`} >
      <Container className={`${classes.section} ${classes.section_heading}`} fluid>
       <h1 className='text-uppercase '>Mike Richard</h1>
       <h5 className='text-uppercase'>Software Developer</h5>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fuga perspiciatis illum placeat, tenetur sapiente! Nulla hic porro accusantium! Tempore amet excepturi nisi sapiente nemo at temporibus molestiae obcaecati quos. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, minus dolorum! Dolores illum perspiciatis nobis porro quibusdam maiores magni veniam nostrum eveniet obcaecati</p>
       </Container>

       <h3 className={classes.section_title}>Work Experience</h3>
        <hr/>  
        <Container className={classes.section} fluid>
            <WorkXp/>
        {/* <p><b>Fullstack Developer</b></p>
        <p>Google USA | 2020-2022</p>
        <p>Chicago, Illinois</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae tempora cum possimus deleniti laudantium, quia quo officiis numquam laboriosam sequi sit? Cum molestiae quos sequi labore modi a doloribus eius!</p>
        <br />
        <p><b>Frontend Developer</b></p>
        <p>Emerson USA | 2018-2020</p>
        <p>Chicago, Illinois</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae tempora cum possimus deleniti laudantium, quia quo officiis numquam laboriosam sequi sit? Cum molestiae quos sequi labore modi a doloribus eius!</p>
        <br />
        <p><b>Frontend Developer</b></p>
        <p>Emerson USA | 2018-2020</p>
        <p>Chicago, Illinois</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae tempora cum possimus deleniti laudantium, quia quo officiis numquam laboriosam sequi sit? Cum molestiae quos sequi labore modi a doloribus eius!</p> */}


        </Container>



      </Col>
      </Row>
    </Container>

)
}