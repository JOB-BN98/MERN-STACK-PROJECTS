import React, { useEffect, useState } from "react";
import Cetus from "./Cetus";
import { useNavigate } from "react-router-dom";

const Rigel = () => {
  const [empdata, empdatachange] = useState(null);
  const navigate = useNavigate();

  const LoadDetail = (id) => {
    navigate("/book/detail/" + id);
  };
  const LoadEdit = (id) => {
    navigate("/book/edit/" + id);
  };
  const Removefunction = (id) => {
    if (window.confirm("Do you want to remove?")) {
      fetch("http://localhost:7000/book/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          alert("Removed successfully.");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  useEffect(() => {
    fetch("http://localhost:7000/book/")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        empdatachange(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {empdata &&
            empdata.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.user}</td>
                <td>{item.book}</td>
                <td>{item.summary}</td>
                <td>
                {/* <Cetus /> */}
                  {/* <a onClick={() => {LoadEdit(item.id);}} className="btn btn-primary"> Edit</a>
                  <a onClick={() => { Removefunction(item.id);}} className="btn btn-danger">Remove</a>
                  <a onClick={() => {LoadDetail(item.id);}} className="btn btn-primary">  Details</a> */}
                  <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul className="dropdown-menu">
    <a href="">
      <li><a onClick={() => {LoadEdit(item.id);}} className="dropdown-item">Edit</a></li>
    </a>
    {/* <li><a className="dropdown-item" href="#">Another action</a></li> */}
    <a href="">
      <li><a onClick={() => { Removefunction(item.id);}} className="dropdown-item">Delete</a></li>
    </a>
  </ul>
</div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default Rigel;
