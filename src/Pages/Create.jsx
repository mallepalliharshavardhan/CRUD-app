import {useNavigate, Link } from "react-router-dom";
import { useState } from 'react'
 
import axios from "axios";
let Create = () => {
    let [values, setValues] = useState({
        firstName: "",
        email: "",
        Phone: "",
        Profile: null
    })
  const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://dummyjson.com/users/add",values)        
            .then(res => {
                console.log(res);
                navigate('/')
            }
            )
            .catch(err => console.log(err))
    }
    return (
        <>
            <div className='px-10 py-4 w-150 vh-100 bg-white   text-black items-align-center  bg-gradient-to-r from-blue-300 to-green-150  rounded-md drop-shadow-md'>
                <h3 className="text-xl justify-items-center"> Add an User</h3>

                <form className=" justify-items-start" onSubmit={handleSubmit}>
                    <div className='mb-2  '>
                        <label htmlFor="Name" >FirstName:</label>
                        <input type="text" placeholder="Enter user name" className=" place-item-strech border border-black m-3  " value={values.firstName} onChange={(e) =>  setValues({...values,firstName: e.target.value})} />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="Email" >Email:</label>
                        <input type="email" placeholder="Enter email id" className=" border border-black m-3 " value={values.email} onChange={(e)=> setValues({...values,email: e.target.value})} />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="Phone" >Phone:</label>
                        <input type="tel" placeholder="Enter number" className=" border border-black m-3 " value={values.Phone} onChange={(e)=> setValues({...values,Phone:e.target.value})} />
                    </div>

                    <div className='mb-2 w-5 flex'>
                        <label htmlFor="Profile" >Profile:</label>
                        <input type="file" className=" border border-black m-3  "  onChange={(e)=> setValues({...values,Profile:e.target.files[0] || null}) } />




                    </div>

                    <label htmlFor="Submit"></label>
                    <input type="Submit" className="bg-green-600 rounded-sm hover:bg-green-300 px-2 py-1  " />
                    <Link to="/" className="bg-blue-500 rounded-md px-4 py-1  ">Back</Link>

                </form>
            </div>
        </>
    )
}

export default Create;