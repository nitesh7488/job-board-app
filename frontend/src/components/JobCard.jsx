import React from 'react';

const JobCard = ({ job, onEdit, onDelete }) => {
  return (
    <div style={{ border: '1px solid gray', padding: '12px', marginBottom: '10px' }}>
      <h4>{job.title}</h4>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>
      <button onClick={onEdit} style={{ marginRight: '10px' }}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

export default JobCard;
