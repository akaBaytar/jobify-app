import { StatusCodes } from 'http-status-codes';
import day from 'dayjs';

import mongoose from 'mongoose';

import Job from '../models/job.js';

// POST
// api/v1/jobs
const createJob = async (req, res) => {
  req.body.createdBy = req.user.uid;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

// GET
// api/v1/jobs
const getAllJobs = async (req, res) => {
  const { search, status, type, sort } = req.query;

  const query = {
    createdBy: req.user.uid,
  };

  if (search) {
    query.$or = [
      { company: { $regex: search, $options: 'i' } },
      { position: { $regex: search, $options: 'i' } },
      { location: { $regex: search, $options: 'i' } },
    ];
  }

  if (type && type !== 'all') query.type = type;

  if (status && status !== 'all') query.status = status;

  const sorting = {
    oldest: 'createdAt',
    newest: '-createdAt',
    'a-z': 'position',
    'z-a': '-position',
  };

  const sortKey = sorting[sort] || sorting.newest;

  const currentPage = +req.query.page || 1;
  const limit = +req.query.limit || 12;
  const skip = (currentPage - 1) * limit;

  const jobs = await Job.find(query).sort(sortKey).skip(skip).limit(limit);

  const totalJobs = await Job.countDocuments(query);
  const totalPages = Math.ceil(totalJobs / limit);

  res.status(StatusCodes.OK).json({ currentPage, totalPages, totalJobs, jobs });
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

  res.status(StatusCodes.OK).json({ msg: 'Job updated succesfully.', job });
};

// DELETE
// api/v1/jobs/:id
const deleteJob = async (req, res) => {
  const { id } = req.params;
  const job = await Job.findByIdAndDelete(id);

  res.status(StatusCodes.OK).json({ msg: 'Job deleted succesfully.', job });
};

// GET
// api/v1/jobs/stats
const showStats = async (req, res) => {
  let stats = await Job.aggregate([
    { $match: { createdBy: new mongoose.Types.ObjectId(req.user.uid) } },
    { $group: { _id: '$status', count: { $sum: 1 } } },
  ]);

  stats = stats.reduce((accumulator, current) => {
    const { _id: title, count } = current;

    accumulator[title] = count;

    return accumulator;
  }, {});

  const applicationStats = {
    pending: stats.pending || 0,
    interview: stats.interview || 0,
    declined: stats.declined || 0,
  };

  let monthlyApplications = await Job.aggregate([
    { $match: { createdBy: new mongoose.Types.ObjectId(req.user.uid) } },
    {
      $group: {
        _id: { year: { $year: '$createdAt' }, month: { $month: '$createdAt' } },
        count: { $sum: 1 },
      },
    },
    { $sort: { '_id.year': -1, '_id.month': -1 } },
    { $limit: 6 },
  ]);

  monthlyApplications = monthlyApplications
    .map((application) => {
      const {
        _id: { year, month },
        count,
      } = application;

      const date = day()
        .month(month - 1)
        .year(year)
        .format('MMM YY');

      return { date, count };
    })
    .reverse();

  res.status(StatusCodes.OK).json({ applicationStats, monthlyApplications });
};

export { createJob, getAllJobs, getJob, updateJob, deleteJob, showStats };
