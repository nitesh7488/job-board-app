import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobForm from './JobForm';
import JobCard from './JobCard';
import { toast } from 'react-toastify';

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [editingJob, setEditingJob] = useState(null);

  const fetchJobs = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/jobs');
      setJobs(res.data);
    } catch (err) {
      toast.error('Failed to fetch jobs');
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleAddOrUpdate = async (jobData) => {
    try {
      if (editingJob) {
        await axios.put(`http://localhost:5000/api/jobs/${editingJob._id}`, jobData);
        toast.success('Job updated successfully!');
      } else {
        await axios.post('http://localhost:5000/api/jobs', jobData);
        toast.success('Job added successfully!');
      }
      setEditingJob(null);
      fetchJobs();
    } catch (err) {
      toast.error('Failed to save job');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this job?')) {
      try {
        await axios.delete(`http://localhost:5000/api/jobs/${id}`);
        toast.success('Job deleted!');
        fetchJobs();
      } catch (err) {
        toast.error('Error deleting job');
      }
    }
  };

  return (
    <div>
      <JobForm onSubmit={handleAddOrUpdate} editingJob={editingJob} />
      <hr />
      {jobs.map((job) => (
        <JobCard
          key={job._id}
          job={job}
          onEdit={() => setEditingJob(job)}
          onDelete={() => handleDelete(job._id)}
        />
      ))}
    </div>
  );
};

export default JobList;
