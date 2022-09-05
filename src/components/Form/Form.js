
export default function Form({setFirstname,setLastname,setAddress,setEmail,setPhone,setPhoto,setTitle, setJobTitle,setCompany,setCompanyAdd,setStartDate,setEndDate,setJobDesc}) {
    
    const personalData="Personal info data"

    function handleFirstnameInputChange(e){
        setFirstname(e.target.value)
    }

    function handleLastnameInputChange(e){
        setLastname(e.target.value)
    }

    function handleTitleInputChange(e){
        setTitle(e.target.value)
    }

    function handlePhoneInputChange(e){
        setPhone(e.target.value)
    }

    function handleEmailInputChange(e){
        setEmail(e.target.value)
    }

    function handleAddressInputChange(e){
        setAddress(e.target.value)
    }

    function handlePhotoInputChange(e){
        setPhoto(e.target.value)
    }

    function handleJobTitleInputChange(e){
      setJobTitle(e.target.value)
    }

    function handleCompanyInputChange(e){
      setCompany(e.target.value)
    }

    function handleStartDateInputChange(e){
      setStartDate(e.target.value)
    }

    function handleEndDateInputChange(e){
      setEndDate(e.target.value)
      
    }

    function handleCompanyAddressInputChange(e){
      setCompanyAdd(e.target.value)
    }

    function handleJobDescInputChange(e){
      setJobDesc(e.target.value)
    }

  return (
   <div>
    <form>
    <div>
      <h3>PERSONAL INFO</h3>
      <hr />
      <div className="mb-2 row">
        <div className="col-sm-10">
          <input type="text" className="form-control" id="firstname" placeholder="First Name" onChange={handleFirstnameInputChange}/>
        </div>
      </div>
      <div className="mb-2 row">
        <div className="col-sm-10">
          <input type="text" className="form-control" id="lastname" placeholder="Last Name" onChange={handleLastnameInputChange}/>
        </div>
      </div>
      <div className="mb-2 row">
        <div className="col-sm-10">
          <input type="text" className="form-control" id="title" placeholder="Job Title" onChange={handleTitleInputChange}/>
        </div>
      </div>
      <div className="mb-2 row">
        <div className="col-sm-10">
          <input type="text" className="form-control" id="phone" placeholder="Phone number" onChange={handlePhoneInputChange}/>
        </div>
      </div>
      <div className="mb-2 row">
        <div className="col-sm-10">
          <input type="text" className="form-control" id="email" placeholder="Email" onChange={handleEmailInputChange}/>
        </div>
      </div>
      <div className="mb-2 row">
        <div className="col-sm-10">
          <input type="text" className="form-control" id="address" placeholder="Address" onChange={handleAddressInputChange}/>
        </div>
      </div>
      <div className="mb-2 row">
        <div className="col-sm-10">
          <input type="text" className="form-control" id="photo" placeholder="Photo" onChange={handlePhotoInputChange}/>
        </div>
      </div>

      <h3>WORK EXPERIENCE</h3>
      <hr />
      <div className="mb-2 row">
        <div className="col-sm-10">
          <input type="text" className="form-control" id="job-title" placeholder="Job Title" onChange={handleJobTitleInputChange}/>
        </div>
      </div>
      <div className="mb-2 row">
        <div className="col-sm-10">
          <input type="text" className="form-control" id="company" placeholder="Company Name" onChange={handleCompanyInputChange}/>
        </div>
      </div>
      <div className="mb-2 row">
        <div className="col-sm-10">
          <input type="date" className="form-control" id="start-date" placeholder="From" onChange={handleStartDateInputChange}/>
        </div>
      </div>
      <div className="mb-2 row">
        <div className="col-sm-10">
          <input type="date" className="form-control" id="end-date" placeholder="To" onChange={handleEndDateInputChange}/>
        </div>
      </div>
      <div className="mb-2 row">
        <div className="col-sm-10">
          <input type="text" className="form-control" id="company-address" placeholder="Company Address" onChange={handleCompanyAddressInputChange}/>
        </div>
      </div>
      <div className="mb-2 row">
        <div className="col-sm-10">
          <textarea className="form-control" id="job-description" placeholder="Job Description" onChange={handleJobDescInputChange}/>
        </div>
      </div>
      

    </div>
    </form>
    </div>
  );

}
