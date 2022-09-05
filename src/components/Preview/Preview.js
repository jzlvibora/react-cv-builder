import classes from './Preview.module.css'
import {MdEmail} from 'react-icons/md';
import {AiFillHome} from 'react-icons/ai';
import {AiFillPhone} from 'react-icons/ai'

export default function Preview({firstname,lastname,email,phone,address,title,photo,jobTitle,startDate,endDate,company,companyAdd,jobDesc}) {
  return (
    <div className={classes.preview}>
      <div className="row">
        
        <div className="col-5">
            <div className={classes.personal}>
            <img src='https://cdn-icons-png.flaticon.com/512/1226/1226097.png' className="img-thumbnail rounded" alt="..."/>
            <div className={classes.title}>
            <h3>{firstname}</h3>
            <h3>{lastname}</h3>
            </div>
            <h5>{title}</h5>
            <hr />
            <div className="contact">
                <div className={classes.section__title}>
                    <h6>Contact Details</h6>
                    <div className={classes.content}>
                    <p><MdEmail className='mx-2'/>{email}</p>
                    <p><AiFillHome className='mx-2'/>{address}</p>
                    <p><AiFillPhone className='mx-2'/>{phone}</p>
                    </div>
                </div>
            </div>
        </div>
        </div>

        <main className="col-7">
        <div className="work">
                <div className={classes.section__title}>
                    <h6>Work Experience</h6>
                    <div className={classes.content}>
                    <p>{jobTitle}</p>
                    <p><span>{startDate}</span> to <span>{endDate}</span></p>
                    <p>{company}</p>
                    <p>{companyAdd}</p>
                    <p>{jobDesc}</p>
                    </div>
                </div>
            </div>
{/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, fugit impedit vitae consectetur eius minus cumque enim corrupti id sequi sapiente, aut possimus corporis nam! Quo quibusdam reiciendis quaerat enim? */}
        </main>

      </div>
    </div>
  );
}
