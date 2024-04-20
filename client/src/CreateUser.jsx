import React, { useState } from "react";
import  axios  from "axios";
import {useNavigate} from 'react-router-dom';

function CreateUser () {
    const [TournamentID, setTournamentID] = useState()
    const [TournamentName, setTournamentName] = useState()
    const [StartDate, setStartDate] = useState()
    const [EndDate, setEndDate] = useState()
    const [SurfaceType, setSurfaceType] = useState()
    const [VenueID, setVenueID] = useState()
    const navigate = useNavigate()

    const Submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/createUser", {TournamentID, TournamentName, StartDate, EndDate, SurfaceType, VenueID})
        .then(result => {
            console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="d-flex vh-100 bg-cyan justify-content-center align-items-center">
            <div className="w-75 bg-white rounded p-3">
                <form onSubmit={Submit}>
                    <h2>Add Tournament</h2>
                    <div className="mb-2">
                        <label htmlFor="">Tournament ID</label>
                        <input type="text" placeholder="Generate Tournament ID" className="form-control"
                        onChange={(e) => setTournamentID(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Tournament Name</label>
                        <input type="text" placeholder="Enter Tournament Name" className="form-control"
                        onChange={(e) => setTournamentName(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Start Date</label>
                        <input type="text" placeholder="yyyy-mm-dd" className="form-control"
                        onChange={(e) => setStartDate(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">End Date</label>
                        <input type="text" placeholder="yyyy-mm-dd" className="form-control"
                        onChange={(e) => setEndDate(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Surface Type</label>
                        <input type="text" placeholder="Type of Surface" className="form-control"
                        onChange={(e) => setSurfaceType(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Venue ID</label>
                        <input type="text" placeholder="Enter Venue ID" className="form-control"
                        onChange={(e) => setVenueID(e.target.value)}/>
                    </div>
                    <button className="btn btn-success">Submit</button>
                </form>
            </div>    
        </div>
    )
}

export default CreateUser;