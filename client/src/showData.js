import React, { useState } from 'react'
import axios from 'axios'
const ShowData = () => {
    const [user, setUser] = useState({
        title: '',
        description: '',
        name: '',
        email: '',
    });
    const { title, description, name, email } = user;


    const OnINputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })

    }
    const OnsubmitEvent = async (e) => {
        e.preventDefault();
        try {
            const result = await axios.post("http://localhost:8000/posts/PostMsgs", user);
            document.querySelector('#title').value='';
            
            document.querySelector('#description').value = '';
            document.querySelector('#name').value = '';
            document.querySelector('#email').value = '';
            const sucess = document.querySelector('.succes');
            const success = document.createElement('div');
            success.classList.add("btn","btn-success");
            success.innerHTML="insert succesfull";
            sucess.appendChild(success)
            setTimeout(()=>{
            success.innerHTML="";
            success.classList.remove("btn","btn-success")
                
            },2000)

        } catch (error) {

        }
    }
    return (
        <div className="mt-2">
            <h4 className="bg-info py-3 my-3 text-light display-2">Add User</h4>
            <div  className="succes"></div>
            <form className="col-sm-5 m-auto" action="" onSubmit={e => OnsubmitEvent(e)}>
                <div className="form-group mt-5">
                    <input className=" my-2 form-control" placeholder="enter your title" onChange={e => OnINputChange(e)} type="text" value={title} id="title" name="title" />
                </div>
                <div className="form-group">
                    <input className=" my-2 form-control" placeholder="enter your description" onChange={e => OnINputChange(e)} type="text" id="description" value={description} name="description" />
                </div>
                <div className="form-group">
                    <input className="my-2 form-control" placeholder="enter your name" onChange={e => OnINputChange(e)} type="text" value={name} id="name" name="name" />
                </div>
                <div className="form-group">
                    <input className="my-2 form-control" placeholder="enter your email" onChange={e => OnINputChange(e)} type="text" value={email} id="email" name="email" />
                </div>
                <button className="btn btn-outline-info">Add User</button>
            </form>
        </div>
    )
}

export default ShowData
