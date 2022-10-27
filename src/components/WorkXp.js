import classes from './WorkXp.module.css';
import '../App.css'
import { Container} from 'react-bootstrap';

export const WorkXp = ()=>{
    return (
        <div><h3 className="section_title">Work Experience</h3>
        <hr/>  
        <Container className={classes.section} fluid>
        
        <section className="py-5">
  <ul className={classes.timeline}>
    <li className={`${classes.timeline_item} mb-5`}>
      <h5 className="fw-bold">Fullstack Developer</h5>
      <p className="text-muted mb-2 fw-bold">Google Inc.</p>
      <p className="text-muted mb-2 fw-bold">11 March 2020 - 12 June 2022</p>
      <p className="text-muted">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
        necessitatibus adipisci, ad alias, voluptate pariatur officia
        repellendus repellat inventore fugit perferendis totam dolor
        voluptas et corrupti distinctio maxime corporis optio?
      </p>
    </li>

    <li className={`${classes.timeline_item} mb-5`}>
      <h5 className="fw-bold">Frontend Developer</h5>
      <p className="text-muted mb-2 fw-bold">Amazon Inc.</p>
      <p className="text-muted mb-2 fw-bold">11 March 2020 - 12 June 2022</p>
      <p className="text-muted">
        Quisque ornare dui nibh, sagittis egestas nisi luctus nec. Sed
        aliquet laoreet sapien, eget pulvinar lectus maximus vel.
        Phasellus suscipit porta mattis.
      </p>
    </li>

    <li className={`${classes.timeline_item} mb-5`}>
      <h5 className="fw-bold">Backend Developer</h5>
      <p className="text-muted mb-2 fw-bold">Johnsons Inc.</p>
      <p className="text-muted mb-2 fw-bold">11 March 2020 - 12 June 2022</p>
      <p className="text-muted">
        Orci varius natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Nulla ullamcorper arcu lacus, maximus
        facilisis erat pellentesque nec. Duis et dui maximus dui aliquam
        convallis. Quisque consectetur purus erat, et ullamcorper sapien
        tincidunt vitae.
      </p>
    </li>

    <li className={`${classes.timeline_item} mb-5`}>
      <h5 className="fw-bold">UI/UX Designer</h5>
      <p className="text-muted mb-2 fw-bold">Amazon Inc.</p>
      <p className="text-muted mb-2 fw-bold">11 March 2020 - 12 June 2022</p>
      <p className="text-muted">
        Nulla ac tellus convallis, pulvinar nulla ac, fermentum diam. Sed
        et urna sit amet massa dapibus tristique non finibus ligula. Nam
        pharetra libero nibh, id feugiat tortor rhoncus vitae. Ut suscipit
        vulputate mattis.
      </p>
    </li>
  </ul>
</section>
        </Container>
        </div> 

    )
}