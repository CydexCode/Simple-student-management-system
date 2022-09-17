
import React from 'react'
import { Link } from 'react-router-dom'

function RowDetails({Email, LastName, FirstName, Age, Id, OnDelete}) {
 
  return (
    <tr>
    
    <td>{LastName}</td>
    <td>{FirstName}</td>
    <td>{Age}</td>
    <th>{Email}</th>
    <td className="gap__actions">
      <span className="badge bg-info">
        <Link to={`/${Id}`} className="text-white">
          <i className="fas fa-edit"></i>
        </Link>
      </span>

      <span className="badge bg-danger" onClick={()=>OnDelete(Id)}>
        <i className="fas fa-trash-alt"></i>
      </span>
    </td>
  </tr>
  )
}

export default RowDetails