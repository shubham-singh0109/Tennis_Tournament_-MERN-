import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001')
            .then(result => setUsers(result.data))
            .catch(err => console.log(err));
    }, [])

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/deleteUser/'+id)
        .then(res => {console.log(res)
            window.location.reload()})
        .catch(err => console.log(err))
    }

    return (
        <div>
            <h1>Tennis Tournament</h1>
        <div className="d-flex vh-100 bg-cyan justify-content-center align-items-center">
            <div className="w-75 bg-white rounded p-3">
                
                <h2>Tournaments</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th style={{ width: '15%' }}>Tournament ID</th>
                            <th style={{ width: '20%' }}>Tournament Name</th>
                            <th style={{ width: '11%' }}>Start Date</th>
                            <th style={{ width: '11%' }}>End Date</th>
                            <th style={{ width: '15%' }}>Surface Type</th>
                            <th style={{ width: '10%' }}>Venue ID</th>
                            <th style={{ width: '25%' }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.TournamentID}</td>
                                <td>{user.TournamentName}</td>
                                <td>{user.StartDate}</td>
                                <td>{user.EndDate}</td>
                                <td>{user.SurfaceType}</td>
                                <td>{user.VenueID}</td>
                                <td>
                                    <Link to={`/update/${user._id}`} className='btn btn-success'>Update</Link>
                                    <button className='btn btn-danger'
                                    onClick={(e) => handleDelete(user._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Link to="/create" className='btn btn-success'>Add +</Link>
            </div>
        </div>
        </div>
    );
}

export default Users;
