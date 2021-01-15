import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link,BrowserRouter as Router} from 'react-router-dom'
const GetData = () => {
    useEffect(() => {
        getDatas()
    }, [])

    const [users, setUsers] = useState([])

    const getDatas = async () => {
        const result = await axios.get("http://localhost:8000/posts/PostMsgRouteGet");
        setUsers(result.data)
    }
    const deleted = async(id) => {
        await axios.delete(`http://localhost:8000/posts/PostMsgRouteGet/${id}`)
        users();
    }

    return (
        <div className="mt-2">
            <h2 className=" w-25 m-auto text-center text-info bg-dark p-2">user data</h2>
            <table className="table table-dark w-25  m-auto ">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Options</th>
                    </tr>
                </thead>
                <tbody className="table-light">

                    {
                        users.map((person, index) => (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{person.title}</td>
                                <td>{person.description}</td>
                                <td>{person.name}</td>
                                <td>{person.email}</td>
                                <td>
                               <Router>
                               <Link className="btn btn-info" to={`/user/${person._id}`}>Edit</Link>
                               </Router>
               
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default GetData
