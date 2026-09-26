import { useState } from 'react'
import './App.css'
import DisplayTable from './components/DisplayTable';
import Empform from './components/EmpForm';

function App() {

  let [selectEmployee, setSelectEmployee] = useState(null);
  let [addEmp, setAddEmp] = useState();
  let [show, setShow] = useState(false)
  let [employee, setEmployee] = useState([
    { id: 1, Name: 'Harsha', age: 22, salary: 100000 },
    { id: 2, Name: 'vaibhavi', age: 21, salary: 100000 },
    { id: 3, Name: 'neha', age: 24, salary: 100000 },
    { id: 4, Name: 'mrudula', age: 23, salary: 100000 }
  ]);

  function addNewEmployee(newEmployee) {
    if (selectEmployee) {
      setEmployee((previous) => previous.map((emp) => emp.id === selectEmployee.id ? { ...emp, ...newEmployee, id: emp.id } : emp));
      setSelectEmployee(null);
    } else {
      setEmployee((previous) => [...previous, newEmployee]);
    }
    handleClose();
  }

  function deleteEmployee(id) {
    setEmployee((previous) => previous.filter((emp) => emp.id !== id));
  }
  function editEmployee(emp) {
    setSelectEmployee(emp);
    setShow(true);
  }
  function handleAdd() {
    setSelectEmployee(null);
    setShow(true);
  }

  function handleClose() {
    setShow(false);
    setSelectEmployee(null);
  }
  return (
    <>
      <div>




        <DisplayTable
          employees={employee}
          onDelete={deleteEmployee}
          onEdit={editEmployee}
          showfrom={handleAdd}
        />
      </div>
      {show && (<Empform onAdd={addNewEmployee} empToEdit={selectEmployee} />)}
    </>
  )
}

export default App
