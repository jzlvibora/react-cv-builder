import { useState } from "react";
import Form from "../Form/Form";
import Preview from "../Preview/Preview";
export default function Layout() {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col">
          <Form setEmail={setEmail} setPassword={setPassword}></Form>
        </div>
        <div className="col">
          <Preview email={email} password={password}></Preview>
        </div>
      </div>
    </div>
  );
}
