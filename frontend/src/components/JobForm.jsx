import React, { useEffect, useState } from 'react';

const JobForm = ({ onSubmit, editingJob }) => {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
  });

  useEffect(() => {
    if (editingJob) {
      setFormData(editingJob);
    } else {
      setFormData({ title: '', company: '', location: '' });
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
    <form onSubmit={handleSubmit}>
      <h3>{editingJob ? 'Edit Job' : 'Add Job'}</h3>
      <input
        type="text"
        name="title"
        placeholder="Job Title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="company"
        placeholder="Company"
        value={formData.company}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="location"
        placeholder="Location"
        value={formData.location}
        onChange={handleChange}
        required
      />
      <button type="submit">{editingJob ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default JobForm;
