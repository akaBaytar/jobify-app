import { StatusCodes } from 'http-status-codes';
import Job from '../models/job.js';

// POST
// api/v1/jobs
const createJob = async (req, res) => {
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

// GET
// api/v1/jobs
const getAllJobs = async (req, res) => {
  const jobs = await Job.find({});
  res.status(StatusCodes.OK).json({ jobs });
};

// GET
// api/v1/jobs/:id
const getJob = async (req, res) => {
  const { id } = req.params;
  const job = await Job.findById(id);

  res.status(StatusCodes.OK).json({ job });
};

// PATCH
// api/v1/jobs/:id
const updateJob = async (req, res) => {
  const { id } = req.params;
  const job = await Job.findByIdAndUpdate(id, req.body, { new: true });

  res.status(StatusCodes.OK).json({ msg: 'Job updated succesfully.',job });
};

// DELETE
// api/v1/jobs/:id
const deleteJob = async (req, res) => {
  const { id } = req.params;
  const job = await Job.findByIdAndDelete(id);

  res.status(StatusCodes.OK).json({ msg: 'Job deleted succesfully.', job });
};

export { createJob, getAllJobs, getJob, updateJob, deleteJob };
