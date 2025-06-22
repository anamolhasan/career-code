import React, { Suspense } from "react";
import Banner from "./Banner";
import HotJobs from "./HotJobs";


const jobsPromise = fetch('https://career-code-server-lemon.vercel.app/jobs').then(res => res.json())
const Home = () => {


  return (
   <>
   <Banner />
  <Suspense fallback={<p>loading..........</p>}>
      <HotJobs jobsPromise={jobsPromise}/>
  </Suspense>
   </>
  );
};

export default Home;
