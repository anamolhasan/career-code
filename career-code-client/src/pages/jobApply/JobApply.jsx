import React from "react";
import { Link, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id: jobId } = useParams();

  const { user } = useAuth();

  // console.log(jobId, user);

  const handleApplyFormSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const linkIn = form.linkIn.value;
    const github = form.github.value;
    const resume = form.resume.value;

    // console.log(linkIn, github, resume);

    const application = {
      jobId,
      applicant: user.email,
      linkIn,
      github,
      resume,
    };

    axios
      .post("http://localhost:3000/applications", application)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
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
      <h3 className="text-4xl text-center">
        Apply for this job: <Link to={`/jobs/${jobId}`}>details</Link>{" "}
      </h3>

      <form onSubmit={handleApplyFormSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xl border p-4">
          <label className="label">Linked in Link</label>
          <input
            type="url"
            name="linkIn"
            className="input"
            placeholder="Linked in profile link"
          />

          <label className="label">Github Link</label>
          <input
            type="url"
            name="github"
            className="input"
            placeholder="Github Link"
          />

          <label className="label">Resume Link</label>
          <input
            type="url"
            name="resume"
            className="input"
            placeholder="Resume Link"
          />

          <input type="submit" value="Apply now" className="btn" />
        </fieldset>
      </form>
    </div>
  );
};

export default JobApply;
