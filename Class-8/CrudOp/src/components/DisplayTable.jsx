

let DisplayTable= ({employees,onDelete})=>{
     

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
                        <button type="button" onClick={()=>{onDelete(e.id)}}>delete</button>
                        <button type='button' > Read</button>
                        <button type="button">Update </button>
                    </td>
                    
                  </tr>

                )}
            </tbody>
           </table>

        </>
    )
};

export default DisplayTable ;