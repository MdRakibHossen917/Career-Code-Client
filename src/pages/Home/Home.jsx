import React, { Suspense } from "react";
import Banner from "./Banner";
import HotJobs from "./HotJobs";

const jobsPromise = fetch("http://localhost:5000/jobs").then((res) =>
  res.json()
);
const Home = () => {
  // console.log(jobsPromise)
  return (
    <div>
      {/* <h2>Home Page</h2> */}
      <Banner></Banner>
      <Suspense
        fallback={
          <span className="loading loading-spinner loading-xl"></span>
        }
      >
        <HotJobs jobsPromise={jobsPromise}></HotJobs>
      </Suspense>
    </div>
  );
};

export default Home;
