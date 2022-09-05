import { useState } from "react";
import Form from "../Form/Form";
import Preview from "../Preview/Preview";
import Header from "./Header";
import classes from "./Layout.module.css"

export default function Layout() {
    const [firstname,setFirstname]=useState('Jayzel');
    const [lastname,setLastname]=useState('Gonzales');
    const [title,setTitle]=useState('Software Developer');
    const [phone,setPhone]=useState('09274558729');
    const [email,setEmail]=useState('j.vbr.gonzales@gmail.com');
    const [address,setAddress]=useState('MANILA,PH');
    const [photo,setPhoto]=useState('');

    const [jobTitle,setJobTitle]=useState('Associate Software Engineer');
    const [company,setCompany]=useState('Google');
    const [companyAdd,setCompanyAdd]=useState('Tokyo,JP');
    const [startDate,setStartDate]=useState('09-20-19');
    const [endDate,setEndDate]=useState('09-25-23');
    const [jobDesc,setJobDesc]=useState('Implementing new features');
    


 

    function print(){
      console.log(firstname,lastname,title,phone,email,address,photo)
    }
  return (
    <div>
    <Header/>
    <div className="container">
      <div className="row align-items-center">
        <div className="col">
          <Form setFirstname={setFirstname} setLastname={setLastname} setTitle={setTitle} setPhone={setPhone} setEmail={setEmail} setAddress={setAddress} setPhoto={setPhoto} setJobTitle={setJobTitle} setCompany={setCompany} setStartDate={setStartDate} setEndDate={setEndDate} setCompanyAdd={setCompanyAdd} setJobDesc={setJobDesc}/>
        </div>
        <div className="col">
          <Preview firstname={firstname} lastname={lastname} email={email} phone={phone} title={title} address={address} jobTitle ={jobTitle} startDate={startDate} endDate={endDate} company={company} companyAdd={companyAdd} jobDesc={jobDesc} />
        </div>
        <button onClick={print}>PRINT INFO</button>
      </div>
    </div>
    </div>
  );
}
