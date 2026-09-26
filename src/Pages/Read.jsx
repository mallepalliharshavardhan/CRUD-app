
import {useState,useEffect} from 'react';
import axios from 'axios';
import { Link,useParams } from 'react-router-dom';
let Read=()=>{
     const [data,setData] = useState([]);
     const{id} =useParams();

    useEffect(() => {
        
      axios.get("https://dummyjson.com/users" + id)
      .then(res =>setData(res.data.users || []))
      .catch(err=> console.log(err));
    },[])

    return(
        <>
        <div className="w-160 vh-100 bg-white bg-linear-to-r from blue-493 to-grey-386 text-black">
          <h1 >
            Details of User 
        </h1>
        <p>Name:{data.firstName}</p>
         <p> Email:{data.email}</p>
         <p>Phone:{data.phone}</p>
         
         </div>
        
        </>
    )
 }

export default Read;