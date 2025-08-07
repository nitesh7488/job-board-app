import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const JobForm = ({ onSubmit, editingJob }) => {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    salary: '',
    description: ''
  });

  useEffect(() => {
    if (editingJob) {
      setFormData(editingJob);
    } else {
      setFormData({ 
        title: '', 
        company: '', 
        location: '',
        salary: '',
        description: '' 
      });
    }
  }, [editingJob]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <motion.div
      className="card shadow-sm mb-4"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="card-body">
        <h4 className="card-title mb-4 d-flex align-items-center">
          <i className={`bi ${editingJob ? 'bi-pencil-square' : 'bi-plus-circle'} me-2`}></i>
          {editingJob ? 'Edit Job' : 'Add New Job'}
        </h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-bold">Job Title</label>
            <div className="input-group">
              <span className="input-group-text"><i className="bi bi-card-heading"></i></span>
              <input
                type="text"
                name="title"
                className="form-control"
                value={formData.title}
                onChange={handleChange}
                required
                placeholder="Job Title"
              />
            </div>
          </div>
          
          <div className="mb-3">
            <label className="form-label fw-bold">Company</label>
            <div className="input-group">
              <span className="input-group-text"><i className="bi bi-building"></i></span>
              <input
                type="text"
                name="company"
                className="form-control"
                value={formData.company}
                onChange={handleChange}
                required
                placeholder="Company Name"
              />
            </div>
          </div>
          
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label fw-bold">Location</label>
              <div className="input-group">
                <span className="input-group-text"><i className="bi bi-geo-alt"></i></span>
                <input
                  type="text"
                  name="location"
                  className="form-control"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  placeholder="Job Location"
                />
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label fw-bold">Salary</label>
              <div className="input-group">
                <span className="input-group-text"><i className="bi bi-cash"></i></span>
                <input
                  type="text"
                  name="salary"
                  className="form-control"
                  value={formData.salary}
                  onChange={handleChange}
                  placeholder="Salary (optional)"
                />
              </div>
            </div>
          </div>
          
          <div className="mb-4">
            <label className="form-label fw-bold">Description</label>
            <textarea
              name="description"
              className="form-control"
              rows="3"
              value={formData.description}
              onChange={handleChange}
              placeholder="Job description and requirements..."
            ></textarea>
          </div>
          
          <motion.button 
            type="submit" 
            className="btn btn-success w-100 py-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <i className={`bi ${editingJob ? 'bi-check-circle' : 'bi-plus-lg'} me-2`}></i>
            {editingJob ? 'Update Job' : 'Add Job'}
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
};

export default JobForm;