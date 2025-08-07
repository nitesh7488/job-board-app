import React from 'react';
import JobList from './components/JobList';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="container">
      <h1>Job Board</h1>
      <JobList />
      <ToastContainer />
    </div>
  );
}

export default App;
