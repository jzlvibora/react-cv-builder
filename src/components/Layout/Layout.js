import { useState } from "react";
import Form from "../Form/Form";
import Preview from "../Preview/Preview";
export default function Layout() {
    const [email,setEmail] = useState('');

  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col">
          <Form setEmail={setEmail}></Form>
        </div>
        <div className="col">
          <Preview email={email}></Preview>
        </div>
      </div>
    </div>
  );
}
