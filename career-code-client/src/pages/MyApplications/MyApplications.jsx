import React, { Suspense } from 'react'
import ApplicationStats from './ApplicationStats'
import ApplicationList from './ApplicationList'
import useAuth from '../../hooks/useAuth'
import { myApplicationsPromise } from '../../api/applicationApi'
import Loading from '../Shared/Loading'





const MyApplications = () => {

  const {user} = useAuth()

  return (
    <div>
      <ApplicationStats />
     <Suspense fallback={<Loading />}>
        <ApplicationList myApplicationsPromise={myApplicationsPromise(user.email)}/>
     </Suspense>
    </div>
  )
}

export default MyApplications