
export default function Form({setFirstname,setLastname,setAddress,setEmail,setPhone,setPhoto,setTitle}) {
    
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

  return (
   <div>
    <form>
    <div>
      <h2>PERSONAL INFO</h2>
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
    </div>
    </form>
    </div>
  );

}
