import React, { Suspense } from "react";
import useAuth from "../../hooks/useAuth";
import JobList from "./JobList";

import Loading from "../Shared/Loading";
import useJobApi from "../../api/useJobApi";

const MyPostedJobs = () => {
  const { user } = useAuth();
  const {jobsCreatedByPromise} = useJobApi()
  return (
    <div>
      <h2>MyPostedJobs : </h2>
      <Suspense fallback={<Loading />}>
        <JobList
          jobsCreatedByPromise={jobsCreatedByPromise(
            user.email
           
          )}
        />
      </Suspense>
    </div>
  );
};

export default MyPostedJobs;
