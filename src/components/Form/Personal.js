import { useState } from "react";
export default function Personal() {
  let updatedData = {
    firstname: "",
    lastname: "",
    job_title: "",
    phone_num: "",
    email: "",
    address: "",
    photo: "",
  };

  const [personalInfo, setPersonalInfo] = useState({});

  function handlePersonalInfoChange(e) {
    const inputId = e.target.id;
    if (inputId === "firstname") {
      updatedData.firstname = e.target.value;
      setPersonalInfo(updatedData);
    }
    if (inputId === "lastname") {
      updatedData.lastname = e.target.value;
      setPersonalInfo(updatedData);
    }
    if (inputId === "job_title") {
      updatedData.job_title = e.target.value;
      setPersonalInfo(updatedData);
    }
    if (inputId === "phone_num") {
      updatedData.phone_num = e.target.value;
      setPersonalInfo(updatedData);
    }
    if (inputId === "email") {
      updatedData.email = e.target.value;
      setPersonalInfo(updatedData);
    }
    if (inputId === "address") {
      updatedData.address = e.target.value;
      setPersonalInfo(updatedData);
    }
    if (inputId === "photo") {
      updatedData.photo = e.target.value;
      setPersonalInfo(updatedData);
    }
  }

  function printPersonalInfo() {
    console.log("hiiii");
    // console.log(personalInfo);
  }

  return (
    <div>
      <div onChange={handlePersonalInfoChange}>
        <div className="mb-2 row">
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="firstname"
              placeholder="First Name"
            />
          </div>
        </div>
        <div className="mb-2 row">
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="lastname"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="mb-2 row">
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="job_title"
              placeholder="Job Title"
            />
          </div>
        </div>
        <div className="mb-2 row">
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="phone_num"
              placeholder="Phone number"
            />
          </div>
        </div>
        <div className="mb-2 row">
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="mb-2 row">
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="Address"
            />
          </div>
        </div>
        <div className="mb-2 row">
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="photo"
              placeholder="Photo"
            />
          </div>
        </div>
      </div>
      <button onClick={printPersonalInfo()}>Print</button>
    </div>
  );
}
