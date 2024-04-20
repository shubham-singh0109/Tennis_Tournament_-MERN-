import React, {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function UpdateUser () {
    const {id} = useParams()
    const [TournamentID, setTournamentID] = useState()
    const [TournamentName, setTournamentName] = useState()
    const [StartDate, setStartDate] = useState()
    const [EndDate, setEndDate] = useState()
    const [SurfaceType, setSurfaceType] = useState()
    const [VenueID, setVenueID] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:3001/getUser/'+id)
            .then(result => {console.log(result)
                setTournamentID(result.data.TournamentID)
                setTournamentName(result.data.TournamentName)
                setStartDate(result.data.StartDate)
                setEndDate(result.data.EndDate)
                setSurfaceType(result.data.SurfaceType)
                setVenueID(result.data.VenueID)
            })
            .catch(err => console.log(err));
    }, [])

    const Update = (e) => {
        e.preventDefault();
        axios.put("http://localhost:3001/updateUser/"+id, {TournamentID, TournamentName, StartDate, EndDate, SurfaceType, VenueID})
        .then(result => {
            console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="d-flex vh-100 bg-cyan justify-content-center align-items-center">
        <div className="w-75 bg-white rounded p-3">
            <form onSubmit={Update}>
                <h2>Update Tournament</h2>
                <div className="mb-2">
                    <label htmlFor="">Tournament ID</label>
                    <input type="text" placeholder="Enter Tournament ID" className="form-control"
                    value={TournamentID} onChange={(e) => setTournamentID(e.target.value)}/>
                </div>
                <div className="mb-2">
                    <label htmlFor="">Tournament Name</label>
                    <input type="text" placeholder="Enter Tournament Name" className="form-control"
                    value={TournamentName} onChange={(e) => setTournamentName(e.target.value)}/>
                </div>
                <div className="mb-2">
                    <label htmlFor="">Start Date</label>
                    <input type="text" placeholder="yyyy-mm-dd" className="form-control"
                    value={StartDate} onChange={(e) => setStartDate(e.target.value)}/>
                </div>
                <div className="mb-2">
                    <label htmlFor="">End Date</label>
                    <input type="text" placeholder="yyyy-mm-dd" className="form-control"
                    value={EndDate} onChange={(e) => setEndDate(e.target.value)}/>
                </div>
                <div className="mb-2">
                    <label htmlFor="">Surface Type</label>
                    <input type="text" placeholder="Type of Surface" className="form-control"
                    value={SurfaceType} onChange={(e) => setSurfaceType(e.target.value)}/>
                </div>
                <div className="mb-2">
                    <label htmlFor="">Venue ID</label>
                    <input type="text" placeholder="Enter Venue ID" className="form-control"
                    value={VenueID} onChange={(e) => setVenueID(e.target.value)}/>
                </div>
                <button className="btn btn-success">Update</button>
            </form>
        </div>    
    </div>
    )
}

export default UpdateUser;