import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Vega=()=> {
  const [id, idchange] = useState("");
  const [user, userchange] = useState("");
  const [book, bookchange] = useState("");
  const [summary, summarychange] = useState("");

  
  const navigate = useNavigate();

  const IsValidate = () => {
      let isproceed = true;
      let errormessage = 'Please enter the value in ';
      if (user === null || user === '') {
          isproceed = false;
          errormessage += ' User';
      }
      if (book === null || book === '') {
          isproceed = false;
          errormessage += ' Book';
      }
      if (summary === null || summary === '') {
          isproceed = false;
          errormessage += ' Summary';
      }

      if(!isproceed){
          toast.warning(errormessage)
      }else{
          if(/^[a-zA-Z0-9]+$/.test(user)){

          }else{
              isproceed = false;
              toast.warning('Please enter name of Client/User')
          }
      }
      return isproceed;
  }


  const runsubmit = (e) => {
          e.preventDefault();
          let regobj = {id, user, book, summary };
          if (IsValidate()) {
          //console.log(regobj);
          fetch("http://localhost:7000/book", {
              method: "POST",
              headers: { 'content-type': 'application/json' },
              body: JSON.stringify(regobj)
          }).then((res) => {
              toast.success('Book Data stored successfully.')
              navigate('/rigel');
          }).catch((err) => {
              toast.error('Failed :' + err.message);
          });
      }
   }
  return (
    <>
    <form onSubmit={runsubmit}>
      <center>
        <br></br><br></br><br></br>
        <div className="form-floating mb-3">
          <input value={id} onChange={e => idchange(e.target.value)} className="form-control" placeholder="Type Id here.." />
          <label for="floatingInput">Id of User:{id}</label>
        </div>
        <div className="form-floating mb-3">
          <input value={user} onChange={e => userchange(e.target.value)} type="text" className="form-control" id="floatingInputDisabled" placeholder="name@example.com" />
          <label for="floatingInputDisabled">Name of User</label>
        </div>
        <div className="form-floating mb-3">
          <textarea value={book} onChange={e => bookchange(e.target.value)} className="form-control" placeholder="Leave a comment here" id="floatingTextareaDisabled" ></textarea>
          <label for="floatingTextareaDisabled">Name of Book</label>
        </div>
        <div className="form-floating mb-3">
          <textarea value={summary} onChange={e => summarychange(e.target.value)} className="form-control" placeholder="Leave a comment here" id="floatingTextarea2Disabled" style={{height: '100px'}}/>
          <label for="floatingTextarea2Disabled">Summary</label>
        </div>
        <div className="form-floating">
          {/* <select className="form-select" id="floatingSelectDisabled" aria-label="Floating label disabled select example" disabled>
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
          </select>
          <label for="floatingSelectDisabled">Rate the Book</label> */}
          <br></br>
              <button type="submit" className="btn btn-outline-success">Store</button>
        </div>
      </center>
    </form>
    </>
  )
}

export default Vega;