import React, { Suspense } from "react";
import ApplicationsStat from "./ApplicationsStat";
import ApplicationsList from "./ApplicationsList";
import useAuth from "../../hooks/useAuth";
import { myApplicationsPromise } from "../../api/applicationsApi";

const MyApplications = () => {
  const { user } = useAuth();
  return (
    <div>
      <ApplicationsStat></ApplicationsStat>
      <Suspense fallback={"loading your applications"}>
        <ApplicationsList
          myApplicationsPromise={myApplicationsPromise(user.email)}
        ></ApplicationsList>
      </Suspense>
    </div>
  );
};

export default MyApplications;
