import React from "react";
import Modal from "react-modal";
import { format } from "date-fns";
import { JOB_STATUS } from "../constants";

function JobModal({ selectedJob, modalIsOpen, closeModal }) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      ariaHideApp={false}
      style={{
        overlay: {
          background: "black",
        },
        content: {
          background: "#393939",
          color: "white",
          border: `3px solid ${
            selectedJob && selectedJob.status === JOB_STATUS.ERROR
              ? "#ff4d4d"
              : "rgb(9, 255, 0)"
          }`,
          borderRadius: "5px",
        },
      }}
    >
      <button className="modal-close" onClick={closeModal}>
        X
      </button>
      {selectedJob ? (
        <>
          <h2>Job info</h2>
          <p>
            <strong>Url:</strong> {selectedJob.url}
          </p>
          <p>
            <strong>Status: </strong>
            <span className={`job-status status-${selectedJob.status}`}>
              {selectedJob.status}
            </span>
          </p>
          <p>
            <strong>Start date:</strong>{" "}
            {format(new Date(selectedJob.start_date), "MM/dd/yyyy HH:mm:ss")}
          </p>
          <p>
            <strong>End date:</strong>{" "}
            {format(new Date(selectedJob.end_date), "MM/dd/yyyy HH:mm:ss")}
          </p>
          <h3>Anchors crawl result:</h3>
          <ul>
            {selectedJob.result
              ? selectedJob.result.map((anchor, i) => (
                  <li key={`${anchor}_${i}`}>
                    <a href={anchor} target="_blank" rel="noreferrer">
                      {anchor}
                    </a>
                  </li>
                ))
              : null}
          </ul>
        </>
      ) : null}
    </Modal>
  );
}

export default JobModal;
