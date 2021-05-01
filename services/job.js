const axios = require("axios");
const cheerio = require("cheerio");
const Job = require("../models/Job");
const { JOB_STATUS } = require("../utils/constants");

const delay = ms => new Promise(res => setTimeout(res, ms));

module.exports = {
  createJob: async (url) => {
    const newJob = new Job({
      url,
      status: JOB_STATUS.RUNNING,
      result: [],
      start_date: new Date(),
      end_date: null,
    });

    await newJob.save();
    return newJob;
  },
  getJobs: async () => {
    const jobs = await Job.find();
    return jobs;
  },
  crawlJobUrl: async (url, jobId) => {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const result = $("a")
      .map((i, el) => $(el).attr("href"))
      .get();

    await delay(5000);

    await Job.findByIdAndUpdate(jobId, {
      result,
      status: JOB_STATUS.FINISHED,
      end_date: new Date(),
    });

    return result;
  },
};
