import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobForm from './JobForm';
import JobCard from './JobCard';
import { toast } from 'react-toastify';
import { motion, AnimatePresence } from 'framer-motion';

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [editingJob, setEditingJob] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/jobs`);
      setJobs(res.data);
    } catch (err) {
      toast.error(err.response?.data?.error || 'Failed to fetch jobs');
      console.error('Fetch Jobs Error:', err.response || err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleAddOrUpdate = async (jobData) => {
    try {
      if (editingJob) {
        await axios.put(
          `${import.meta.env.VITE_API_URL}/api/jobs/${editingJob._id}`,
          jobData
        );
        toast.success('Job updated successfully!');
      } else {
        await axios.post(
          `${import.meta.env.VITE_API_URL}/api/jobs`,
          jobData
        );
        toast.success('Job added successfully!');
      }
      setEditingJob(null);
      await fetchJobs();
    } catch (err) {
      toast.error(err.response?.data?.error || 'Failed to save job');
      console.error('Save Job Error:', err.response || err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this job?')) {
      try {
        await axios.delete(`${import.meta.env.VITE_API_URL}/api/jobs/${id}`);
        toast.success('Job deleted successfully!');
        await fetchJobs();
      } catch (err) {
        toast.error(err.response?.data?.error || 'Failed to delete job');
        console.error('Delete Job Error:', err.response || err);
      }
    }
  };

  return (
    <div className="row">
      <div className="col-lg-5 mb-4 mb-lg-0">
        <JobForm onSubmit={handleAddOrUpdate} editingJob={editingJob} />
      </div>
      <div className="col-lg-7">
        <div className="sticky-top pt-3" style={{ top: '20px' }}>
          <motion.h3 
            className="text-center mb-4 pb-2 border-bottom"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <i className="bi bi-briefcase me-2"></i>
            Job Listings
          </motion.h3>
          
          {loading ? (
            <motion.div 
              className="text-center py-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-3">Loading jobs...</p>
            </motion.div>
          ) : jobs.length === 0 ? (
            <motion.div 
              className="text-center py-5 bg-light rounded"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <i className="bi bi-inbox text-muted" style={{ fontSize: '3rem' }}></i>
              <p className="mt-3">No jobs found. Add your first job!</p>
            </motion.div>
          ) : (
            <div className="job-list-container" style={{ maxHeight: 'calc(100vh - 200px)', overflowY: 'auto' }}>
              <AnimatePresence>
                {jobs.map((job) => (
                  <JobCard
                    key={job._id}
                    job={job}
                    onEdit={() => setEditingJob(job)}
                    onDelete={() => handleDelete(job._id)}
                  />
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobList;