

let DisplayTable= ({employees})=>{
    let handleAdd= (e)=>{
    
    }

    return(
        <>
          <button className="bg-green-500 rounded-sm" onClick={handleAdd}>+ Add emp</button>
           <table>
            <thead>
              <tr>
                <th> ID</th>
                <th> Name</th>
                <th> Age</th>
                <th> Salary</th>
              </tr>
            </thead>
            <tbody>
                {employees.map((e)=>
                  <tr key={e.id}> 
                    <td> {e.id}  </td>
                    <td> {e.Name}  </td>
                    <td> {e.age}  </td>
                    <td> {e.salary}  </td>
                    
                  </tr>

                )}
            </tbody>
           </table>

        </>
    )
};

export default DisplayTable ;