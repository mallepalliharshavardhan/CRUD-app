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
     });setData({ id: "", Name: "", age: "", salary: "" }); 
     
}
 useEffect(()=>{
    if(empToEdit){
        setData({...empToEdit})
    }else{
        setData({id:"",Name:"",age:"",salary:""});
    }
 },[empToEdit]);

    return(
        <>
           <div className='bg-purple-300 align-items'> 
             <h1 className="text-xl text-orange-600">Employee form</h1>
            <form onSubmit={handlesubmit}> 
             
             <div> 
                <label className="m-2" > Id :</label>
            <input className="m-2 border border-black bg-white rounded-sm   "  type="number" placeholder="enter Id" onChange={(e)=>{setData({ ...data,id: e.target.value})}} value={data.id}/>
             </div>
            <div> 
                <label className="m-2"> Name :</label>
            <input className="m-2 border border-black bg-white rounded-sm   " type="text" placeholder="enter Name" onChange={(e)=>{ setData({...data,Name: e.target.value})} } value={data.Name}/>
             </div>
              <div> 
                <label className="m-2"> Age :</label>
            <input className="m-2 border border-black bg-white rounded-sm   " type="number" placeholder="enter age" onChange={(e)=>{setData({...data,age:e.target.value})}} value={data.age}/>
             </div> <div> 
                <label className="m-2"> Salary :</label>
            <input className="m-2 border border-black bg-white rounded-sm   " type="number" placeholder="enter salary" onChange={(e)=>{setData({...data,salary:e.target.value})}} value={data.salary}/>
             </div> 
             <button className="bg-green-400 rounded-sm m-1" type='submit'>Save</button>
             </form>
              
           </div>

        </>
    )
}

export default Empform;