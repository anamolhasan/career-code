import React from 'react'
import { Link, useLoaderData } from 'react-router'

const JobDetails = () => {
    const {
    _id,
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    description,
    company,
    company_logo,
  } = useLoaderData()
    // console.log(job)
  return (
    <div>
        <h2>{title}</h2>
        <Link to={`/jobApply/${_id}`}>
            <button className='btn btn-primary'>Apply Now</button>
        </Link>
    </div>
  )
}

export default JobDetails