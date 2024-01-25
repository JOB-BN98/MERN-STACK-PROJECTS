import React, { useEffect, useState } from 'react'
import Cygnus from './Cygnus'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Deneb=()=> {
    const [email, emailupdate] = useState('');
    const [password, passwordupdate] = useState('');

    const usenavigate=useNavigate();

    useEffect(()=>{
sessionStorage.clear();
    },[]);

    const ProceedLogin = (e) => {
        e.preventDefault();
        if (validate()) {
            ///implentation
            // console.log('proceed');
            fetch("http://localhost:8000/user/" + email).then((res) => {
                return res.json();
            }).then((resp) => {
                // console.log(resp.pass);
                if (Object.keys(resp).length === 0) {
                    toast.error('Please Enter valid Email');
                } else {
                    if (resp.pass === password) {
                        toast.success('Success');
                        sessionStorage.setItem('email',email);
                        sessionStorage.setItem('userrole',resp.role);
                        usenavigate('/rigel')
                    }else{
                        toast.error('Please Enter valid credentials');
                    }
                }
            }).catch((err) => {
                toast.error('Login Failed due to :' + err.message);
            });
        }
    }

    const ProceedLoginusingAPI = (e) => {
        e.preventDefault();
        if (validate()) {
            ///implementation
            // console.log('proceed');
            let inputobj={"email": email,
            "password": password};
            fetch("https://localhost:44308/User/Authenticate",{
                method:'POST',
                headers:{'content-type':'application/json'},
                body:JSON.stringify(inputobj)
            }).then((res) => {
                return res.json();
            }).then((resp) => {
                console.log(resp)
                if (Object.keys(resp).length === 0) {
                    toast.error('Login failed, invalid credentials');
                }else{
                     toast.success('Success');
                     sessionStorage.setItem('email',email);
                     sessionStorage.setItem('jwttoken',resp.jwtToken);
                   usenavigate('/')
                }
                // if (Object.keys(resp).length === 0) {
                //     toast.error('Please Enter valid email');
                // } else {
                //     if (resp.password === password) {
                //         toast.success('Success');
                //         sessionStorage.setItem('email',email);
                //         usenavigate('/')
                //     }else{
                //         toast.error('Please Enter valid credentials');
                //     }
                // }
            }).catch((err) => {
                toast.error('Login Failed due to :' + err.message);
            });
        }
    }
    const validate = () => {
        let result = true;
        if (email === '' || email === null) {
            result = false;
            toast.warning('Please Enter Username');
        }
        if (password === '' || password === null) {
            result = false;
            toast.warning('Please Enter Password');
        }
        return result;
    }
  return (
    <>
    <center>
        <form onSubmit={ProceedLogin} action="">
          <div className="form-floating mb-3">
            <input type="email" name='email' value={email} onChange={e => emailupdate(e.target.value)} className="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input type="password" name='password' value={password} onChange={e => passwordupdate(e.target.value)} className="form-control" id="floatingPassword" placeholder="Password"/>
            <label htmlFor="floatingPassword">Password</label>
          </div><br></br>
            <button type="submit" className="btn btn-outline-success">Login</button>
        </form>
    </center>
    </>
  )
}

export default Deneb;