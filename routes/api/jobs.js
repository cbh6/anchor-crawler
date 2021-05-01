const express = require("express");
const router = express.Router();
const { validationResult } = require("express-validator");
const JobService = require("../../services/job");
const JobValidation = require("../../validation/job");

// @route   GET api/jobs
// @desc    Get all jobs
// @access  Public
router.get("/", async (req, res) => {
  try {
    const jobs = await JobService.getJobs();
    res.json(jobs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   POST api/jobs
// @desc    Create a job
// @access  Public
router.post("/", JobValidation.create(), async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const job = await JobService.createJob(req.body.url);
    JobService.crawlJobUrl(job.url, job._id);
    res.json(job);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
