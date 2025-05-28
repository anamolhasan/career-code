import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { RiQuillPenAiFill } from "react-icons/ri";
import { Link } from "react-router";

const JobCard = ({ job }) => {
  const {
    _id,
    title,
    location,
    jobtype,
    category,
    applicationDeadline,
    description,
    company,
    company_logo,
  } = job;
  return (
    <div className="card bg-base-100 w-96 shadow-sm border py-5 px-2">
      <div className="flex ">
        <div className="">
            {/* header */}
          <div className="flex items-center gap-5">
            <img className="h-20" src={company_logo} alt="Shoes" />
            <div>
              <h2 className="text-xl">{company}</h2>
              <p className="flex items-center gap-2">
                <span><IoLocationOutline /></span>
                {location}
              </p>
            </div>
          </div>

          {/* body */}
          <div className="card-body">
            <div>
                <h2 className="card-title">{title}</h2>
                <div className=" space-x-3 text-xs">
                    <span>full time</span>
                    <span>6 minute ago</span>
                </div>
            </div>
            <p>{description}</p>
          </div>
        </div>
        <div className="pr-3 "><RiQuillPenAiFill /></div>
      </div>

      {/* bottom btn */}
      <div className="card-actions justify-between p-3">
        <button className="text-2xl font-bold">$ 500</button>
        <Link to={`/jobs/${_id}`} className="btn btn-primary" >Job Details</Link>
      </div>
    </div>
  );
};

export default JobCard;
