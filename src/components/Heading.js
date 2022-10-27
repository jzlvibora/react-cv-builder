import '../App.css';
import classes from './Heading.module.css';
import { Container} from 'react-bootstrap';

export const Heading = () =>{
    return (
        <Container className={`section ${classes.section_heading}`} fluid>
        <h1 className='text-uppercase '>Mike Richard</h1>
        <h5 className='text-uppercase'>Software Developer</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fuga perspiciatis illum placeat, tenetur sapiente! Nulla hic porro accusantium! Tempore amet excepturi nisi sapiente nemo at temporibus molestiae obcaecati quos. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, minus dolorum! Dolores illum perspiciatis nobis porro quibusdam maiores magni veniam nostrum eveniet obcaecati</p>
        </Container>
    )
}