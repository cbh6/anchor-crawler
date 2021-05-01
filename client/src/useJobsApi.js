import { useCallback, useEffect, useState } from "react";
import { API_ROUTES, POLLING_TIME } from "./constants";

const useJobsApi = (query) => {
  const [jobs, setJobs] = useState([]);
  const [intervalId, setIntervalId] = useState();

  const fetchJobs = useCallback(() => {
    console.log("fetching jobs ...");
    fetch(API_ROUTES.jobs)
      .then((response) => response.json())
      .then((data) => setJobs(data));
  }, []);

  const createJob = (url) => {
    fetch(API_ROUTES.jobs, {
      method: "post",
      body: JSON.stringify({ url: url }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((data) => setJobs([data, ...jobs]));
  };

  const startPolling = useCallback(() => {
    const id = setInterval(() => fetchJobs(), POLLING_TIME);
    setIntervalId(id);
  }, [fetchJobs]);

  const stopPolling = useCallback(() => {
    clearInterval(intervalId);
    setIntervalId(null);
  }, [intervalId]);

  useEffect(() => fetchJobs(), []);

  return { jobs, createJob, startPolling, stopPolling, intervalId };
};

export default useJobsApi;
