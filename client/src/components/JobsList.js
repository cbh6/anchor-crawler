import React from "react";
import { format } from "date-fns";

function JobsList({ jobs, onJobClick }) {
  return (
    <div className="job-list">
      {jobs.map((job, i) => (
        <div className="job-item" key={job._id} onClick={() => onJobClick(job)}>
          <div className="job-index">{i + 1}</div>
          <div className={`job-status status-${job.status}`}>{job.status}</div>
          <div className="job-date">
            {format(new Date(job.start_date), "MM/dd/yyyy HH:mm:ss")}
          </div>
          <div className="job-url">
            <a href={job.url} target="_blank" rel="noreferrer">
              {job.url}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default JobsList;
