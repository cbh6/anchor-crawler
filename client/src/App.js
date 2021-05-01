import React, { useState, useEffect } from "react";
import { POLLING_TIME } from './constants';
import useJobsApi from "./useJobsApi";
import "./App.css";

function App() {
  const [intervalId, setIntervalId] = useState();
  const { jobs, fetchJobs } = useJobsApi();

  useEffect(() => {
    fetchJobs();
    const id = setInterval(() => fetchJobs(), POLLING_TIME);
    setIntervalId(id);
  }, []);

  useEffect(() => {
    console.log(jobs.length);
    if (jobs.length && jobs.every((job) => job.status === "finished")) {
      console.log("Stop polling");
      clearInterval(intervalId);
    }
  }, [jobs, intervalId]);

  return (
    <div className="app">
      <h1>Test</h1>
      {jobs.map((job) => (
        <p key={job._id}>
          {job.url} || {job.status}
        </p>
      ))}
    </div>
  );
}

export default App;
