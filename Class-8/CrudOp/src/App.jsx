 import {useState} from 'react'
import './App.css'
import DisplayTable from './components/DisplayTable';
import Empform from './components/EmpForm';

function App() {
  let [addEmp,setAddEmp] = useState();
  let[employee,setEmployee]= useState([
    {id:1,Name:'Harsha' ,age:22 ,salary: 100000},
    {id:2,Name: 'vaibhavi',age:21 ,salary: 100000},
    {id:3,Name:'neha' ,age:24 ,salary: 100000},
    {id:4,Name:'mrudula' ,age:23 ,salary: 100000}
  ]);
  
  function addNewEmployee(newEmployee){
      setEmployee((previous)=>[...previous,newEmployee]);
  }

  return (
    <>
        <div>
            
          <h1 className='text-5xl text-blue-500'> Class 8</h1>
           
           
           <DisplayTable employees={employee}/>
          </div>
          <Empform onAdd={addNewEmployee} />
    </>
  )
}

export default App
