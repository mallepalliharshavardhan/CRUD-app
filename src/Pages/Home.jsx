import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

let Home = ()=> {
 const [data,setData] = useState([]);

    useEffect(() => {
        
      axios.get("https://dummyjson.com/users")
      .then(res =>setData(res.data.users || []))
      .catch(err=> console.log(err));
    },[])


    return (
        <div className='align-center flex-column vh-100' >
            <h2  > List of Users</h2>
             <div className='justify-items-end'>
                <Link to='/create' className='text-black bg-green-400 rounded-sm position-end'>Add +</Link>
              </div>  
            <div className=' bg-white p-4 rounded-sm text-black'>
             
                <table className="  table-auto p-4  w-full">
                  <thead >
                    <tr className="p-10 bg-blue-174 mb-5">
                        <th> ID</th>
                        <th> Name </th>
                        <th> Email</th>
                        <th> Phone</th>
                        <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((d,i)=>(
                        <tr  key={d.id || i} className="g-4">
                            <td> {d.id}</td>
                            <td> {d.firstName}</td>
                            <td> {d.email}</td>
                            <td> {d.phone}</td>
                            <td className='gap-y-7'> 
                                <button  className=' bg-blue-500 hover:bg-blue-300   rounded px-2 py-1 mr-2'><Link to="/read">Read</Link></button> 
                                <button className=' bg-red-500 hover:bg-red-300  rounded px-2 py-1 mr-2'>Delete</button> 
                                <button className='bg-yellow-500 hover:bg-yellow-300  rounded px-2 py-1 mr-2'><Link to="/update:id">Update</Link></button>

                              </td>
                        </tr>
                    ))}
                  </tbody>
                </table> 
            </div>
        </div>
    )
}

export default Home;