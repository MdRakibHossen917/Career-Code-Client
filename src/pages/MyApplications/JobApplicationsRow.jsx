import React from "react";

const JobApplicationsRow = ({ application, index }) => {
  const { company, title, company_logo } = application;

  //
  const handleDelete =() =>{
console.log('click')
  }
  return (
    <div>
      {/* row 1 */}
      <tr>
        <th>
          <label>{index + 1}</label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img src={company_logo} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">H{title}</div>
              <div className="text-sm opacity-50">{company}</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br />
          <span className="badge badge-ghost badge-sm">
            Desktop Support Technician
          </span>
        </td>
        <td>Purple</td>
        <th>
          <button
            onClick={handleDelete}
            className="btn bg-red-700 text-white btn-xs"
          >
            Delete
          </button>
        </th>
      </tr>
    </div>
  );
};

export default JobApplicationsRow;
