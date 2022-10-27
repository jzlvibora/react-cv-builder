import '../App.css';
import { Container} from 'react-bootstrap';
import classes from './Skills.module.css';


export const Skills = () =>{
    return (
        <div>
        <h3 className="section_title">Skills</h3>
        <hr/>  
        <Container className={`section ${classes.section_skills}`} fluid>
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
        </div>

    )
}