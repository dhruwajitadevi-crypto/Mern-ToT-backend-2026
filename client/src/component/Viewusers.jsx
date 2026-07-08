import React, { useEffect, useState } from 'react'
import axios from 'axios'
export const Viewusers = () => {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        loadUser();
    }, [])
    const loadUser =async()=>{
        try{
           const res = await axios.get("http://localhost:3002/user");
           console.log("Data:", res.data.userdata);
           setUsers(res.data.userdata);

        }
        catch(err){
              console.log("Error :", err)
        }
    }
  return (
    <div>
        <h1>List of Users</h1>
        <table>
            <thead>
                <tr>
                    <td>Sr. Number</td>
                    <td>Name</td>
                    <td>Email Id</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody>
                 {
                    users.length>0?(
                        users.map((u,index)=>(
                            <tr key={index}>
                                <td>{u.id}</td>
                                <td>{u.name}</td>
                                <td>{u.email}</td>
                                <td>
                                     <button>edit</button>
                                     <button>delete</button>
                                </td>
                            </tr>
                        )
                    ))
                    :
                    (
                        <tr>
                            <td>
                        no user found
                            </td>
                        </tr>
                    )
                 }
            </tbody>
        </table>
    </div>
  )
}