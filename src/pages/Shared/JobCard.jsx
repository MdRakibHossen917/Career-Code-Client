import { Link } from "react-router";
import { MapPin } from "lucide-react";
import React from "react";

const JobCard = ({ job }) => {
  const {
    _id,
    title,
    status,
    company,
    requirements,
    company_logo,
    description,
    location,
    salaryRange,
  } = job;

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <div className="flex items-center gap-4 p-4">
        <figure>
          <img className="w-20" src={company_logo} alt="Company Logo" />
        </figure>
        <div>
          <h3 className="text-xl font-bold">{company}</h3>
          <p className="flex items-center gap-1 text-gray-600">
            <MapPin size={16} />
            {location}
          </p>
        </div>
      </div>

      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">{status}</div>
        </h2>
        <p>
          Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
        </p>
        <p>{description}</p>

        <div className="card-actions justify-end flex-wrap gap-2">
          {requirements?.map((require, index) => (
            <div key={index} className="badge badge-outline">
              {require}
            </div>
          ))}
        </div>

        <div className="card-actions justify-end mt-4">
          <Link to={`/Jobs/${_id}`}>
            <button className="btn btn-success">Show Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
