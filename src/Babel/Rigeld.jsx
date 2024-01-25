import React from 'react'
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Rigeld=()=> {
    const { empid } = useParams();

    const [empdata, empdatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:7000/book/" + empid).then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);
  return (
    <div>
                    {/* <div className="row">
                <div className="offset-lg-3 col-lg-6"> */}
                <div className="cform-floating mb-3">
                
                <div className="form-floating mb-3" style={{ "textAlign": "left" }}>
                    <div className="form-floating mb-3">
                        <h2>Employee Create</h2>
                    </div>
                    <div className="form-floating mb-3"></div>
    
                    {empdata &&
                        <div>
                            <h2>The User name is : <b>{empdata.user}</b>  ({empdata.id})</h2>
                            <h3>Book Details</h3>
                            <h5>User is : {empdata.book}</h5>
                            <h5>Book is : {empdata.summary}</h5>
                            <Link className="btn btn-danger" to="/">Back to Listing</Link>
                        </div>
                    }
                </div>
                </div>
                {/* </div>
                </div> */}
    </div>  
  )
}

export default Rigeld;