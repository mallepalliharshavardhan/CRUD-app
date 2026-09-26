

let DisplayTable= ({employees,onDelete,onEdit})=>{
     

    return(
        <>
          <button className=" w-half bg-green-500 rounded-sm"  >+ Add emp</button>
           <table>
            <thead>
              <tr>
                <th> ID</th>
                <th> Name</th>
                <th> Age</th>
                <th> Salary</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
                {employees.map((e)=>
                  <tr key={e.id}> 
                    <td> {e.id}  </td>
                    <td> {e.Name}  </td>
                    <td> {e.age}  </td>
                    <td> {e.salary}  </td>
                    <td>
                        <button className="bg-red-400 rounded-sm m-1" type="button" onClick={()=>{onDelete(e.id)}}>delete</button>
                        <button className="bg-blue-400 rounded-sm m-1" type='button' onClick={()=>{onEdit(e)}}> Edit</button>
                         
                    </td>
                    
                  </tr>

                )}
            </tbody>
           </table>

        </>
    )
};

export default DisplayTable ;