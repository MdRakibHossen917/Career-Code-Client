import React, { use, useState } from "react";
import JobApplicationsRow from "./JobApplicationsRow";

const ApplicationsList = ({ myApplicationsPromise }) => {
  const loadedApplications = use(myApplicationsPromise);
  const [applications, setApplications] = useState(loadedApplications);

  //This function will be called if delete is successful.
  const handleDeleteSuccess = (id) => {
    const filtered = applications.filter((app) => app._id !== id);
    setApplications(filtered);
  };

  return (
    <div>
      <h2 className="text-3xl">
        Job applications so far: {applications.length}
      </h2>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application, index) => (
              <JobApplicationsRow
                key={application._id}
                index={index}
                application={application}
                onDeleteSuccess={handleDeleteSuccess}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationsList;
