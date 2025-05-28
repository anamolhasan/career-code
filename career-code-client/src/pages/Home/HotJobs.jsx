import React, { use } from 'react'
import JobCard from '../Shared/JobCard'
import { div } from 'motion/react-client'

const HotJobs = ({jobsPromise}) => {

    const jobs = use(jobsPromise)
    console.log(jobs)
  return (
      <div className='my-20'>
        <h2 className='text-4xl text-center'>Hot Jobs of the Day </h2>
        <p className='text-xl text-center py-1'>Search and connect with the right candidates faster.</p>
         <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 m-10'>
        {
            jobs.map(job => <JobCard key={job._id} job={job}/>)
        }
    </div>
      </div>
  )
}

export default HotJobs