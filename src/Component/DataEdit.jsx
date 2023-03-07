import React from 'react'
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
const DataEdit = () => {
  
  const { id } = useParams();
  console.log(id);
  
  useEffect(() => {
    fetch("http://localhost:8080/database/" + id).then((res) => {
        return res.json();
    }).then((resp) => {
      // setId(resp.id)
      setfirstName(resp.firstName)
      setLastName(resp.LastName)
      setEmail(resp.Email)
      setSalary(resp.Salary)
      setDate(resp.Date)
    }).catch((err) => {
        console.log(err.message);
    })
}, []);

// const [id, setId] = useState("");
const [firstName, setfirstName] = useState("");
const [LastName, setLastName] = useState("");
const [Email, setEmail] = useState("");
const [Salary, setSalary] = useState("");
const [Date, setDate] = useState("");
const[active,activechange]=useState(true);
const navigate=useNavigate();

const HandleSubmit=(e)=>{
    e.preventDefault()  
    // console.log(firstName)
    // console.log(LastName,Email,Date,Salary)

    const userInputData={firstName,LastName,Email,Salary,Date}
    fetch("http://localhost:8080/database/"+id,{
        method:"PUT",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(userInputData)
      }).then((res)=>{
        
        navigate('/');
      }).catch((err)=>{
        console.log(err.message)
      })
}



  return (
    <from className="conatiner">
    <div className="column">

        {/* <div className="col-lg-5">
            <div className="form-group">
                <label>ID</label>
                <input type="number" disabled="disabled" display="hidden" value={id}  onChange={e => setId(e.target.value)} className="form-control"></input>
            </div>
        </div> */}

        <div className="col-lg-5">
            <div className="form-group">
                <label  >
                    First Name
                </label>
                <input required className="form-control" type="text" value={firstName} onChange={e => setfirstName(e.target.value)}></input>

            </div>
        </div>

        <div className="col-lg-5">
            <div className="form-group">
                <label >
                    Last Name
                </label>
                <input type="text" value={LastName} onChange={e => setLastName(e.target.value)} className="form-control"></input>
            </div>
        </div>

        <div className="col-lg-5">
            <div className="form-group">
                <label >Email Id</label>
                <input className="form-control" type="email" value={Email} onChange={e => setEmail(e.target.value)}></input>
            </div>
        </div>

        <div className="col-lg-5">
            <div className="form-group">
                <label > Salary</label>
                <input className="form-control" type="number" value={Salary} onChange={e => setSalary(e.target.value)}></input>
            </div>
        </div>
        <div className="col-lg-5">
            <div className="form-group">
                <label >Date</label>
                <input className="form-control" type="date" value={Date} onChange={e => setDate(e.target.value)}></input>
            </div>
        </div>
        <div className="col-lg-5">
            <div className="form-check">
                <input checked={active} onChange={e => activechange(e.target.checked)} type="checkbox" className="form-check-input"></input>
                <label className="form-check-label">Is Active</label>

            </div>
        </div>

        <div className="col-lg-5">
            <div className="form-group">
                <button className="btn btn-success" type="submit" onClick={HandleSubmit}> Save</button>
                <Link to="/" className="btn btn-danger"  >Back</Link>
            </div>
        </div>
        {/* 25:46 */}

    </div>
</from>
  )
}

export default DataEdit