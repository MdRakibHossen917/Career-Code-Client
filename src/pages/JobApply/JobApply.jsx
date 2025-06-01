import React from "react";
import { Link, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const JobApply = () => {
    //jobId is Id
  const { id: jobId } = useParams();
  //Custom hooks useAuth
  const { user } = useAuth();
  console.log(jobId, user);

  const handleApplyFromSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedIn = form.likedIn.value;
    const github = form.github.value;
    const Resume = form.Resume.value;
    console.log(linkedIn, github, Resume);

    const application = {
        jobId,
        applicant: user.email, 
        linkedIn,
        github,
        Resume
    }
    //
    axios.post('http://localhost:5000/applications',application)
    .then(res=>{
        console.log(res.data)
        if (res.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your application has been submitted",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();

        }
        
    })
    .catch(error=>{
        console.log(error)
    })

  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h3 className="text-4xl font-bold mb-6">
        Apply for this job:{" "}
        <Link to={`/jobs/${jobId}`}>
          <span className="text-blue-700 underline">Details</span>
        </Link>
      </h3>
      <form onSubmit={handleApplyFromSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <label className="label">LinkedIn Link</label>
          <input
            type="url"
            name="likedIn"
            className="input"
            placeholder="LinkedIn Profile Link"
          />

          <label className="label">Github Link</label>
          <input
            type="url"
            name="github"
            className="input"
            placeholder="Github Profile Link"
          />

          <label className="label">Resume Link</label>
          <input
            type="url"
            name="Resume"
            className="input"
            placeholder="Resume Link"
          />

          <button className="btn btn-primary mt-6 w-full">Apply</button>
        </fieldset>
      </form>
    </div>
  );
};

export default JobApply;
