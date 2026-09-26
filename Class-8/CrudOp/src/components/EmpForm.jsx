import {useEffect, useState} from 'react'
let Empform = ({onAdd,empToEdit})=>{
let [data,setData]=useState({
    id:"",Name:"",age:"",salary:""
});

  useEffect(()=>{
    if(empToEdit){
        setData({...empToEdit});
    }
  },[empToEdit])

function handlesubmit(event){
    event.preventDefault();
     onAdd({...data,
        id:Number(data.id),
        age:Number(data.age),
        salary:Number(data.salary)
     }) ;
}
 

    return(
        <>
           <div className='bg-purple-300'> 
            <form onSubmit={handlesubmit}> 
             <h1> Employeeform</h1>
             <div> 
                <label> Id</label>
            <input type="number" placeholder="enter Id" onChange={(e)=>{setData({ ...data,id: e.target.value})}} value={data.id}/>
             </div>
            <div> 
                <label> Name</label>
            <input type="text" placeholder="enter Name" onChange={(e)=>{ setData({...data,Name: e.target.value})} } value={data.Name}/>
             </div>
              <div> 
                <label> Age</label>
            <input type="number" placeholder="enter age" onChange={(e)=>{setData({...data,age:e.target.value})}} value={data.age}/>
             </div> <div> 
                <label> Salary</label>
            <input type="number" placeholder="enter salary" onChange={(e)=>{setData({...data,salary:e.target.value})}} value={data.salary}/>
             </div> 
             <button className="bg-green-400 rounded-sm m-1" type='submit'>Save</button>
             </form>
              
           </div>

        </>
    )
}

export default Empform;