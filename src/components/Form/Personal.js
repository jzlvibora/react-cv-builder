export default function Personal(){
    function handleFPersonalInfoChange(e){
        setFirstname(e.target.value)
    }



    return (
        <div>
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
      </div>
    )

}

