import React from 'react';
import { motion } from 'framer-motion';

const JobCard = ({ job, onEdit, onDelete }) => {
  return (
    <motion.div
      className="card mb-3 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
      exit={{ opacity: 0, x: -100 }}
      layout
    >
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start">
          <div>
            <h5 className="card-title fw-bold text-primary">{job.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              <i className="bi bi-building me-2"></i>
              {job.company}
            </h6>
            <p className="card-text">
              <i className="bi bi-geo-alt me-2"></i>
              {job.location}
            </p>
          </div>
          <div className="btn-group btn-group-sm">
            <motion.button 
              onClick={onEdit} 
              className="btn btn-outline-primary me-1"
              title="Edit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="bi bi-pencil"></i>
            </motion.button>
            <motion.button 
              onClick={onDelete} 
              className="btn btn-outline-danger"
              title="Delete"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="bi bi-trash"></i>
            </motion.button>
          </div>
        </div>
        
        {job.salary && (
          <div className="mt-2">
            <span className="badge bg-success">
              <i className="bi bi-cash me-1"></i>
              {job.salary}
            </span>
          </div>
        )}
        
        {job.description && (
          <div className="mt-2">
            <p className="card-text text-muted small">{job.description}</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default JobCard;