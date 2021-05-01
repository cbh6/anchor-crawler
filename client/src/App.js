import React, { useEffect, useState } from 'react';
import { JOB_STATUS } from './constants';
import useJobsApi from './hooks/useJobsApi';
import './App.css';
import JobInput from './components/JobInput';
import JobsList from './components/JobsList';
import JobModal from './components/JobModal';

function App() {
  const { jobs, createJob, startPolling, stopPolling, intervalId } = useJobsApi();

  const [selectedJob, setSelectedJob] = useState();
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = (job) => {
    setSelectedJob(job);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedJob(null);
    setIsOpen(false);
  };

  useEffect(() => {
    startPolling();
  }, []);

  useEffect(() => {
    if (jobs.length && !jobs.some((job) => job.status === JOB_STATUS.RUNNING)) {
      console.log('Stop polling');
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
      <JobsList jobs={jobs} onJobClick={openModal} />
      <JobModal selectedJob={selectedJob} modalIsOpen={modalIsOpen} closeModal={closeModal} />

      <p className="footer">
        Created by{' '}
        <a href="https://github.com/cbh6/" target="_blank" rel="noreferrer">
          Cristian Botella Hurtado
        </a>
      </p>
    </div>
  );
}

export default App;
