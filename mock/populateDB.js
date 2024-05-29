import { readFile } from 'fs/promises';

import mongoose from 'mongoose';

import Job from '../models/job.js';
import User from '../models/user.js';

try {
  await mongoose.connect(process.env.MONGO_URI);

  const user = await User.findOne({ email: 'demo@mail.com' });

  const list = JSON.parse(
    await readFile(new URL('./jobs.json', import.meta.url))
  );

  const jobs = list.map((job) => {
    return { ...job, createdBy: user._id };
  });

  await Job.deleteMany({ createdBy: user._id });
  await Job.create(jobs);

  console.log('Mock data added to database successfully.');

  process.exit(0);
} catch (error) {
  console.log(error);

  process.exit(1);
}
