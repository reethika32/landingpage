import React, { useState } from 'react';
import axios from 'axios';
import './LeadForm.css';

// Construct API URL based on environment
const getApiUrl = () => {
  // If explicitly set, use that
  if (process.env.REACT_APP_API_URL) {
    return process.env.REACT_APP_API_URL;
  }
  // For production/netlify, use same origin (redirects /api/* to functions)
  if (window.location.hostname !== 'localhost') {
    return window.location.origin;
  }
  // For local development
  return 'http://localhost:5000';
};

const API_URL = getApiUrl();

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  
  const [status, setStatus] = useState({
    loading: false,
    message: '',
    type: '' // 'success' or 'error'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear status when user starts typing
    if (status.message) {
      setStatus({ loading: false, message: '', type: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, message: '', type: '' });

    try {
      const response = await axios.post(`${API_URL}/leads`, formData);
      
      setStatus({
        loading: false,
        message: response.data.message || 'Thank you! We will contact you soon.',
        type: 'success'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: ''
      });
    } catch (error) {
      setStatus({
        loading: false,
        message: error.response?.data?.message || 'Something went wrong. Please try again.',
        type: 'error'
      });
    }
  };

  return (
    <div className="lead-form-container">
      <form className="lead-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        {status.message && (
          <div className={`status-message ${status.type}`}>
            {status.message}
          </div>
        )}

        <button 
          type="submit" 
          className="submit-button"
          disabled={status.loading}
        >
          {status.loading ? 'Submitting...' : 'Get Started Now'}
        </button>
      </form>
    </div>
  );
};

export default LeadForm;