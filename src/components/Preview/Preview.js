import classes from './Preview.module.css'
import {MdEmail} from 'react-icons/md';
import {AiFillHome} from 'react-icons/ai';
import {AiFillPhone} from 'react-icons/ai'

export default function Preview({ email, password }) {
  return (
    <div className={classes.preview}>
      <div className="row">
        
        <div className="col-5">
            <div className={classes.personal}>
            <img src='https://cdn-icons-png.flaticon.com/512/1226/1226097.png' className="img-thumbnail rounded" alt="..."/>
            <div className={classes.title}>
            <h3>Jayzel</h3>
            <h3>Gonzales</h3>
            </div>
            <h5>Software Developer</h5>
            <hr />
            <div className="contact">
                <div className={classes.section__title}>
                    <h6>Contact Details</h6>
                    <div className={classes.content}>
                    <p><MdEmail/>j.vbr.gonzales@gmail.com</p>
                    <p><AiFillHome/>Manila, PH</p>
                    <p><AiFillPhone/>09274558729</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <main className="col-7">
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, fugit impedit vitae consectetur eius minus cumque enim corrupti id sequi sapiente, aut possimus corporis nam! Quo quibusdam reiciendis quaerat enim?
        </main>

      </div>
    </div>
  );
}
