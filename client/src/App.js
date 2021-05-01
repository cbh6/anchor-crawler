import React, { useEffect } from "react";
import { JOB_STATUS } from "./constants";
import useJobsApi from "./useJobsApi";
import "./App.css";
import JobInput from "./components/JobInput";
import JobsList from "./components/JobsList";

function App() {
  const {
    jobs,
    createJob,
    startPolling,
    stopPolling,
    intervalId,
  } = useJobsApi();

  useEffect(() => {
    startPolling();
  }, []);

  useEffect(() => {
    if (jobs.length && !jobs.some((job) => job.status === JOB_STATUS.RUNNING)) {
      console.log("Stop polling");
      stopPolling();
    }
  }, [jobs]);

  const sendJobUrl = (url) => {
    createJob(url);

    // Prevent from creating interval if there is another already running
    if (!intervalId) {
      startPolling();
    }
  };

  return (
    <div className="app">
      <h1>Anchor Crawler</h1>

      <JobInput sendJobUrl={sendJobUrl} />
      <JobsList jobs={jobs} />
    </div>
  );
}

export default App;
