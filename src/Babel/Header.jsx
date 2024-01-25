import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Header=()=> {
    const [tempuser, tempuserupdate] = useState('');
    const [showmenu, showmenuupdate] = useState(false);

    const usenavigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/header' || location.pathname === '/rigel' || location.pathname === '/vega') {
            showmenuupdate(true);
            let temp = sessionStorage.getItem('email');
            if (temp === '' || temp === null) {
                toast.error('Email login error: session ended');
                usenavigate('/deneb');
            } else {
                tempuserupdate(temp);
            }
        } else {
            showmenuupdate(false);
        }

    }, [location])
  return (
    <>
    {showmenu &&
     <div className="navbar navbar-expand-lg bg-body-tertiary" style={{ float: 'right' }}>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
        <a className="navbar-brand" href="/rigel">{tempuser}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/vega">Add Contents</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#">Features</a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="/deneb">Logout</a>
            </li>
          </ul>
        </div>
          </div>
        </nav>
        </div>
    }
    </>
  );
}

export default Header;