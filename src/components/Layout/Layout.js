import { useState } from "react";
import Form from "../Form/Form";
import Preview from "../Preview/Preview";
import Header from "./Header";
export default function Layout() {
    const [firstname,setFirstname]=useState('Jayzel');
    const [lastname,setLastname]=useState('Gonzales');
    const [title,setTitle]=useState('Software Developer');
    const [phone,setPhone]=useState('09274558729');
    const [email,setEmail]=useState('j.vbr.gonzales@gmail.com');
    const [address,setAddress]=useState('MANILA,PH');
    const [photo,setPhoto]=useState('');

    function print(){
      console.log(firstname,lastname,title,phone,email,address,photo)
    }
  return (
    <div>
    <Header/>
    <div className="container">
      <div className="row align-items-center">
        <div className="col">
          <Form setFirstname={setFirstname} setLastname={setLastname} setTitle={setTitle} setPhone={setPhone} setEmail={setEmail} setAddress={setAddress} setPhoto={setPhoto}/>
        </div>
        <div className="col">
          <Preview firstname={firstname} lastname={lastname} email={email} phone={phone} title={title} address={address} />
        </div>
        <button onClick={print}>PRINT INFO</button>
      </div>
    </div>
    </div>
  );
}
