import { Container} from 'react-bootstrap';

export const Education = () =>{
    return (
        <div>
        <h3 className="section_title">Education</h3>
        <hr/>  
        <Container className="section" fluid>
        <p><b>Bachelor of Science in Computer Science</b></p>
        <p>Harvard University , US</p>
        <p>2011-2014</p>
        <br />
        <p><b>Highschool Diploma</b></p>
        <p>Scholastica's College , US</p>
        <p>2010-2014</p>
        </Container>
        </div>

    )
}