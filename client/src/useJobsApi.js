import { useEffect, useState } from "react";
import { API_ROUTES } from "./constants";

const useJobsApi = (query) => {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = () => {
    fetch(API_ROUTES.jobs)
      .then((response) => response.json())
      .then((data) => setJobs(data));
  };
  useEffect(() => fetchJobs(), []);

  return { jobs, fetchJobs };
};

export default useJobsApi;
