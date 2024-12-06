import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
const Post = ({ setJobs, setInternships }) => {
  const [postType, setPostType] = useState('job');
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [skills, setSkills] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = {
      title,
      company,
      location,
      description,
      skills: skills.split(','),
      postedDate: new Date().toLocaleDateString(),
      role: postType === 'job' ? 'Job' : 'Internship', // Add role for filtering later
    };

    if (postType === 'job') {
      setJobs((prevJobs) => [...prevJobs, postData]);
    } else {
      setInternships((prevInternships) => [...prevInternships, postData]);
    }

    // Reset the form fields
    setTitle('');
    setCompany('');
    setLocation('');
    setDescription('');
    setSkills('');
  };

  return (
    <div
      className="container my-5 d-flex justify-content-center align-items-center"
      style={{
        minHeight: '100vh',
        // background: 'linear-gradient(135deg, #6a11cb, #2575fc)',
        color: '#fff',
      }}
    >
      <div
        className="card shadow-lg p-4"
        style={{
          width: '40rem',
          borderRadius: '15px',
          background: '#ffffffcc',
          color: '#333',
        }}
      >
        <h3 className="text-center mb-4" style={{ color: '#6a11cb' }}>
          Post a {postType === 'job' ? 'Job' : 'Internship'}
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="postType" className="form-label">
              Post Type
            </label>
            <select
              id="postType"
              className="form-select shadow-sm"
              value={postType}
              onChange={(e) => setPostType(e.target.value)}
              style={{ borderColor: '#6a11cb' }}
            >
              <option value="job">Job</option>
              <option value="internship">Internship</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control shadow-sm"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter job or internship title"
              style={{ borderColor: '#6a11cb' }}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="company" className="form-label">
              Company
            </label>
            <input
              type="text"
              className="form-control shadow-sm"
              id="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Enter company name"
              style={{ borderColor: '#6a11cb' }}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="location" className="form-label">
              Location
            </label>
            <input
              type="text"
              className="form-control shadow-sm"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter location"
              style={{ borderColor: '#6a11cb' }}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              className="form-control shadow-sm"
              id="description"
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the job or internship role"
              style={{ borderColor: '#6a11cb' }}
              required
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="skills" className="form-label">
              Skills (comma separated)
            </label>
            <input
              type="text"
              className="form-control shadow-sm"
              id="skills"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              placeholder="e.g., React, Node.js, Python"
              style={{ borderColor: '#6a11cb' }}
              required
            />
          </div>
          <button
            type="submit"
            className="btn w-100 shadow-sm"
            style={{
              background: 'linear-gradient(90deg, #6a11cb, #2575fc)',
              color: '#fff',
              border: 'none',
            }}
          >
            Post {postType === 'job' ? 'Job' : 'Internship'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Post;
