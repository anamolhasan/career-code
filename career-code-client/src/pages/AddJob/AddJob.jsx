import React from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const AddJob = () => {
  const { user } = useAuth();

  const handleAddAJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    // console.log(data)

    // process salary range data
    const { min, max, currency, ...newJob } = data;
    newJob.salaryRange = { min, max, currency };

    // process requirements
    const requirementsString = newJob.requirements;
    const requirementsDirty = requirementsString.split(",");
    const requirementsClean = requirementsDirty.map((req) => req.trim());
    newJob.requirements = requirementsClean;

    // process responsibilities
    newJob.responsibilities = newJob.responsibilities
      .split(",")
      .map((res) => res.trim());

    newJob.status = "active";
    // console.log(Object.keys(newJob).length)
    console.log(newJob);

    // save job to the database
    axios
      .post("http://localhost:3000/jobs", newJob)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your job has been and public",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>Please AddJob</h2>
      <form onSubmit={handleAddAJob}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Basic Info</legend>

          <label className="label">Job Title</label>
          <input
            type="text"
            name="title"
            className="input w-full "
            placeholder="Job title"
          />

          <label className="label">Company</label>
          <input
            type="text"
            name="company"
            className="input w-full"
            placeholder="Company Name"
          />

          <label className="label">Location</label>
          <input
            type="text"
            name="location"
            className="input w-full"
            placeholder="Company location"
          />

          <label className="label">Company logo</label>
          <input
            type="text w-full"
            name="company_logo"
            className="input w-full"
            placeholder="Company Logo URL"
          />
        </fieldset>

        {/* Job type */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Job Type</legend>
          <div className="filter">
            <input
              className="btn filter-reset w-full"
              type="radio"
              name="jobType"
              aria-label="All"
            />
            <input
              className="btn w-full"
              type="radio"
              name="jobType"
              value={"On-Site"}
              aria-label="On-Site"
            />
            <input
              className="btn w-full"
              type="radio"
              name="jobType"
              value={"Remote"}
              aria-label="Remote"
            />
            <input
              className="btn w-full"
              type="radio"
              name="jobType"
              value={"Hybrid"}
              aria-label="Hybrid"
            />
          </div>
        </fieldset>
        {/* fieldset */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Job Category</legend>

          <select
            defaultValue="Job category"
            name="category"
            className="select w-full"
          >
            <option disabled={true}>Job category</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Finance</option>
          </select>
        </fieldset>

        {/* Application Deadline */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Application Deadline</legend>
          <input type="date" name="deadline" className="input w-full" />
        </fieldset>

        {/* Salary Rang  */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Salary Rang</legend>

          <label className="label">Minimum Salary</label>
          <input
            type="text"
            name="min"
            className="input w-full"
            placeholder="Minimum Salary"
          />

          <label className="label">Maximum Salary</label>
          <input
            type="text"
            name="max"
            className="input w-full"
            placeholder="Maximum Salary"
          />

          <select
            defaultValue="Select a Currency"
            name="currency"
            className="select w-full"
          >
            <option disabled={true}>Select a Currency</option>
            <option>BDT</option>
            <option>USD</option>
            <option>EUR</option>
          </select>
        </fieldset>

        {/* Job Description */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend"> Job Description</legend>
          <textarea
            className="textarea w-full"
            name="description"
            placeholder="Job description"
          ></textarea>
        </fieldset>

        {/* Job Requirements */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Job Requirements</legend>
          <textarea
            className="textarea w-full"
            name="requirements"
            placeholder="Requirements (separate by comma)"
          ></textarea>
        </fieldset>

        {/* Job Responsibilities */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">Job Responsibilities </legend>
          <textarea
            className="textarea w-full"
            name="responsibilities"
            placeholder="Responsibilities (separate by comma)"
          ></textarea>
        </fieldset>

        {/* HR Related Info */}
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-full border p-4">
          <legend className="fieldset-legend">HR Related Info</legend>

          <label className="label">HR Name</label>
          <input
            type="text"
            name="hr_name"
            className="input w-full"
            placeholder="HR Name"
          />

          <label className="label">HR Email</label>
          <input
            type="email"
            name="hr_email"
            defaultValue={user.email}
            className="input w-full"
            placeholder="HR Email"
          />
        </fieldset>

        <input type="submit" value="Add Job" className="btn btn-block" />
      </form>
    </div>
  );
};

export default AddJob;
