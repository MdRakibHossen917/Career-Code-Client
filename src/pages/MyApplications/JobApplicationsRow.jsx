import React from "react";
import Swal from "sweetalert2";

const JobApplicationsRow = ({ application, index, onDeleteSuccess }) => {
  const { _id, company, title, company_logo } = application;
  // console.log("Deleting application with ID:", _id);
  const confirmAndDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/applications/${_id}`, {
          method: "DELETE",
        })
        
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              // Notify parent to remove this row
              onDeleteSuccess(_id);

              Swal.fire({
                title: "Deleted!",
                text: "The application has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={company_logo} alt="Company Logo" />
            </div>
          </div>
          <div>
            <div className="font-bold">{title}</div>
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
          onClick={() => confirmAndDelete(_id)}
          className="btn bg-red-700 text-white btn-xs"
        >
          Delete
        </button>
      </th>
    </tr>
  );
};

export default JobApplicationsRow;
