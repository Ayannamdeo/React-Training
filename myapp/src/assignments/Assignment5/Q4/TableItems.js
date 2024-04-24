export function TableItems({pageItems, isLoading}){
    if (isLoading) return <h1>Loading....</h1>;

return (  
    <table className="table">
        <thead>
            <tr>
                <th scope='col'>ID</th>
                <th scope='col'>Title</th>
                <th scope='col'>Body</th>
            </tr>
        </thead>
        <tbody>
            {pageItems.map(item => (
                <tr>
                    <td>{item.id} </td>
                    <td>{item.title} </td>
                    <td>{item.body} </td>
                </tr>
            ))}
        </tbody>
    </table>
  ) 
}
