import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Rigele = () => {
    const [id, idchange] = useState("");
    const [user, userchange] = useState("");
    const [book, bookchange] = useState("");
    const [summary, summarychange] = useState("");
    
    const { bid } = useParams();

    //const [empdata, empdatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:7000/book/" + bid).then((res) => {
            return res.json();
        }).then((resp) => {
            idchange(resp.id);
            userchange(resp.user);
            bookchange(resp.book);
            summarychange(resp.summary);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    const navigate=useNavigate();

    const runsubmit=(e)=>{
      e.preventDefault();
      const empdata={id,user,book,summary};
      

      fetch("http://localhost:7000/book/"+bid,{
        method:"PUT",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(empdata)
      }).then((res)=>{
        alert('Saved successfully.')
        navigate('/rigel');
      }).catch((err)=>{
        console.log(err.message)
      })

     }
  return (
    <div>
          <form onSubmit={runsubmit}>
      <center>
        <br></br><br></br><br></br>
        <div className="form-floating mb-3">
          <input value={id} onChange={e => idchange(e.target.value)} className="form-control" placeholder="Type Id here.." />
          <label for="floatingInput">Id of User:</label>
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
          {/* <select className="form-select" id="floatingSelect" aria-label="Floating label  select example" >
        <option selected>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
          </select> */}
          <label for="floatingSelect">Rate the Book</label>
          <br></br>
              <button type="submit" className="btn btn-outline-success">Store</button>
        </div>
      </center>
    </form>
    </div>
  )
}

export default Rigele;
