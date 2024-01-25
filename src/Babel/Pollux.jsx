import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

  const Pollux = () =>{

  const [user, userchange] = useState("");
  const [pass, passwordchange] = useState("");
  const [id, emailchange] = useState("");
  const [city, citychange] = useState("");
  const [country, countrychange] = useState("india");
  const [add1, add1change] = useState("");
  const [add2, add2change] = useState("");
  const [zip, zipchange] = useState("");
  const [gender, genderchange] = useState("male");

  const navigate = useNavigate();

  const IsValidate = () => {
      let isproceed = true;
      let errormessage = 'Please enter the value in ';
      if (user === null || user === '') {
          isproceed = false;
          errormessage += ' Username';
      }
      if (add1 === null || add1 === '') {
          isproceed = false;
          errormessage += ' Address';
      }
      if (pass === null || pass === '') {
          isproceed = false;
          errormessage += ' Password';
      }
      if (id === null || id === '') {
          isproceed = false;
          errormessage += ' Email';
      }

      if(!isproceed){
          toast.warning(errormessage)
      }else{
          if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(id)){

          }else{
              isproceed = false;
              toast.warning('Please enter the valid Email')
          }
      }
      return isproceed;
  }


  const runsubmit = (e) => {
          e.preventDefault();
          let regobj = { user, pass, id, city, country, add1, add2, zip, gender };
          if (IsValidate()) {
          //console.log(regobj);
          fetch("http://localhost:8000/user", {
              method: "POST",
              headers: { 'content-type': 'application/json' },
              body: JSON.stringify(regobj)
          }).then((res) => {
              toast.success('Registered successfully.')
              navigate('/deneb');
          }).catch((err) => {
              toast.error('Failed :' + err.message);
          });
      }
   }
  return (
    <>  
    <center>
      <form className="row g-3" onSubmit={runsubmit}>
      <div className="col-md-6">
      <label htmlFor="inputEmail4" className="form-label">User Name</label>
      <input type="user" name='user' value={user} onChange={e => userchange(e.target.value)} className="form-control" id="inputEmail4" placeholder="ex: BeetleJuice"/>
        </div>
        <div className="col-md-6">
      <label htmlFor="inputEmail4" className="form-label">Email</label>
      <input type="id" name='id' value={id} onChange={e => emailchange(e.target.value)} className="form-control" id="inputEmail4" placeholder="email@germinate.com"/>
        </div>
        <div className="col-md-6">
      <label htmlFor="inputPassword4" className="form-label">Password</label>
      <input type="password" name='pass' value={pass} onChange={e => passwordchange(e.target.value)} className="form-control" id="inputPassword4" placeholder="password here"/>
        </div>
        <div className="col-12">
      <label htmlFor="inputAddress" className="form-label">Address</label>
      <input type="text" name='add1' value={add1} onChange={e => add1change(e.target.value)} className="form-control" id="inputAddress" placeholder="Type in Address..."/>
        </div>
        <div className="col-12">
      <label htmlFor="inputAddress2" className="form-label">Address (optional)</label>
      <input type="text" name='add2' value={add2} onChange={e => add2change(e.target.value)} className="form-control" id="inputAddress2" placeholder="Type in Apartment, studio, or floor"/>
        </div>
        <div className="col-md-6">
      <label htmlFor="inputCity" className="form-label">City</label>
      <input type="text" name='city' value={city} onChange={e => citychange(e.target.value)} className="form-control" id="inputCity" placeholder="Type in the city..."/>
        </div>
        <div className="col-md-4">
      <label htmlFor="inputState" className="form-label">Country</label>
      <select value={country} onChange={e => countrychange(e.target.value)} id="inputState" className="form-select">
        <option selected>Choose...</option>
        <option value="india">India</option>
        <option value="germany">Germany</option>
        <option value="korea">Korea</option>
      </select>
        </div>
        <div className="col-md-2">
      <label htmlFor="inputZip" className="form-label">Zip</label>
      <input type="text" name='zip' value={zip} onChange={e => zipchange(e.target.value)} className="form-control" id="inputZip"  placeholder="Type in zipcode..."/>
        </div>
        <div className="col-12">
      <div className="form-check">
             <label>Gender</label><br></br>
              <input className="form-check-input" type="checkbox" checked={gender === 'male'} onChange={e => genderchange(e.target.value)} name="gender" value="male"></input>
              <label>Male</label><br></br>
              <input className="form-check-input" type="checkbox" checked={gender === 'female'} onChange={e => genderchange(e.target.value)} name="gender" value="female"></input>
              <label>Female</label>
      </div>
        </div>
        <div className="col-12">
      <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    </center>
    </>
  )
}
export default Pollux;
