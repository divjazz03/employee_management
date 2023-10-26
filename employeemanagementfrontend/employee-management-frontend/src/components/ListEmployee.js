import React, { useEffect, useState } from 'react'
import EmployeeService from '../services/EmployeeService';
import { Link } from 'react-router-dom';

const ListEmployee = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        EmployeeService.getAllEmployees()
                        .then((response) => {
                            setEmployees(response.data)
                            console.log(response.data)
                        }).catch(error => console.log(error));
    },[]);

    const deleteEmployeeById = (e, id) => {
        e.preventDefault();
        EmployeeService.deleteEmployeebyId(id);
    }; 
  return (
    <div className='container'>
        <h2 className='text-center'>List of Employees</h2>
        <Link to = "/add-employee" className='btn btn-primary mb-2'>Add Employee</Link>
        <table className='table table-bordered table-striped'>
            <thead>
                <th>Employee Id</th>
                <th>Employee First Name</th>
                <th>Employee Last Name</th>
                <th>Employee Email Id</th>
                <th>Actions</th>
            </thead>
            <tbody>
                {
                    employees.map(
                        employee => 
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>
                                <Link className='btn btn-info' to={`/edit-employee/${employee.id}`}>Update</Link>
                                <button className='btn btn-danger' onClick={(e) => deleteEmployeeById(e, employee.id)}>Delete</button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployee
