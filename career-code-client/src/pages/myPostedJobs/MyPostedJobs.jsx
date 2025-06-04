import React, { Suspense } from 'react'
import useAuth from '../../hooks/useAuth'
import JobList from './JobList'
import { jobsCreatedByPromise } from '../../api/jobsApi'

const MyPostedJobs = () => {
    const {user} = useAuth()
    console.log(user)
  return (
    <div>
        <h2>MyPostedJobs : </h2>
        <Suspense fallback={'loading.......'}>
            <JobList 
            jobsCreatedByPromise={jobsCreatedByPromise(user.email)}
            />
        </Suspense>
    </div>
  )
}

export default MyPostedJobs