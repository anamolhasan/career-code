import axios from "axios";
import React from "react";
import { useLoaderData, useParams } from "react-router";
import Swal from "sweetalert2";

const ViewApplication = () => {
  const { job_id } = useParams();
  const applications = useLoaderData();

  const handleStatusChange = (e, app_id)=> {
   
    axios.patch(`http://localhost:3000/applications/${app_id}`, {status: e.target.value})
      .then(res => {
         console.log(res.data)
          if (res.data.modifiedCount) {
                   Swal.fire({
                     position: "top-end",
                     icon: "success",
                     title: "application status update",
                     showConfirmButton: false,
                     timer: 1500,
                   });
                 }
      })
      .catch(error => {
        console.log(error)
      })
  }
  return (
    <div>
      <h2 className="text-3xl ">
        {applications.length} Application for : {job_id}
      </h2>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {applications.map((application, index) => (
              <tr key={application._id}>
                <th>{index + 1}</th>
                <td>{application.applicant}</td>
                <td>Quality Control Specialist</td>
                <td>
                  <select onChange={e => handleStatusChange(e, application._id)} defaultValue={application.status} className="select">
                    <option disabled={true}>update status</option>
                    <option>Pending</option>
                    <option>interview</option>
                    <option>hired</option>
                    <option>reject</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplication;
