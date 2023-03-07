// import React from 'react'
// import { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// const DataList = () => {

//     const [data, setData] = useState("")

//     //    fetching data through localhost

//     useEffect(() => {
//         fetch("http://localhost:8080/database").then((res) => {
//             return res.json();
//         }).then((result) => {
//             console.log(result); //printing data in console
//             setData(result);// setting database data in DATA 
//         }).catch((err) => {
//             console.log(err.message);
//         })
//     }, [])

//     return (
//         <div className="container">
//             <div className="card">
//                 <div className="card-body">
//                     <div className="divbtn">
//                         <Link to="/data/create" className="btn btn-success">Add Employee</Link>
//                     </div>
//                     <table className="table table-bordered">
//                         <thead className="bg-dark text-white">
//                             <tr>
//                                 <td>ID</td>
//                                 <td>First Name</td>
//                                 <td>Last Name</td>
//                                 <td>Email</td>
//                                 <td>Salary</td>
//                                 <td>Date</td>
//                                 <td>Action</td>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {/* map funtion in setData */}
//                             {data &&
//                                 data?.map(el => (
//                                     <tr key={el.id}>
//                                         <td>{el.id}</td>
//                                         <td>{el.first_name}</td>
//                                         <td>{el.last_name}</td>
//                                         <td>{el.email}</td>
//                                         <td>{el.salary}</td>
//                                         <td>{el.date}</td>
//                                         <td>
//                                             <button>Update</button>
//                                             <button>Edit</button>
//                                             <button>Delete</button>
//                                         </td>
//                                     </tr>
//                                 ))
//                             }
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default DataList

import React from 'react'
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const DataList = () => {
const [data, setData] = useState("")
const navigate=useNavigate()


//function for edit existing data
const handleUpdate=(id)=>{
    navigate("/data/edit/"+id)
}

//Delete function
const handleDelete=(id)=>{
    fetch("http://localhost:8080/database/"+id,{
            method:"DELETE"
          }).then((res)=>{
           alert("deleted")
           window.location.reload();
          }).catch((err)=>{
            console.log(err.message)
          })

}
    //    fetching data through localhost
    useEffect(() => {
        fetch("http://localhost:8080/database").then((res) => {
            return res.json();
        }).then((result) => {
            console.log(result); //printing data in console
            setData(result);// setting database data in DATA 
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])

    return (
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <div className="divbtn">
                        <Link to="/data/create" className="btn btn-success">Add Employee</Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                {/* <td>ID</td> */}
                                <td>First Name</td>
                                <td>Last Name</td>
                                <td>Email</td>
                                <td>Salary</td>
                                <td>Date</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {/* map funtion in setData */}
                            {data &&
                                data?.map(el => (
                                    <tr key={el.id}>
                                        {/* <td>{el.id}</td> */}
                                        <td>{el.firstName}</td>
                                        <td>{el.LastName}</td>
                                        <td>{el.Email}</td>
                                        <td>{el.Salary}</td>
                                        <td>{el.Date}</td>
                                        <td>
                                            <button onClick={()=>{handleUpdate(el.id)}}>Update</button>
                                            <button  onClick={()=>{handleDelete(el.id)}}>Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default DataList