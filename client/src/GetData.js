import React, { useState, useEffect } from 'react'
import axios from 'axios'

const GetData = () => {
    useEffect(() => {
        getDatas()
    }, [])

    const [users,setUsers] = useState([])

    const getDatas = async () => {
        const result = await axios.get("http://localhost:8000/posts/PostMsgRouteGet");
        setUsers(result.data)
    }
    console.log(users);
    return (
        <div className="my-2">

        </div>
    )
}

export default GetData
