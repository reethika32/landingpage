import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './LeadsView.css';

// Construct API URL based on environment
const getApiUrl = () => {
  if (process.env.REACT_APP_API_URL) {
    return process.env.REACT_APP_API_URL;
  }
  if (window.location.hostname !== 'localhost') {
    return window.location.origin;
  }
  return 'http://localhost:5000';
};

const API_URL = getApiUrl();

const LeadsView = () => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/api/leads`);
      setLeads(response.data.data || []);
      setError('');
    } catch (err) {
      setError('Failed to fetch leads. Make sure the backend is running.');
      console.error('Error fetching leads:', err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="leads-view-container">
        <div className="leads-view-card">
          <h2>Loading leads...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="leads-view-container">
      <div className="leads-view-card">
        <div className="leads-header">
          <h2>📋 Stored Leads Database</h2>
          <button onClick={fetchLeads} className="refresh-btn">🔄 Refresh</button>
        </div>
        
        {error && <div className="error-message">{error}</div>}
        
        {leads.length === 0 ? (
          <div className="no-leads">
            <p>No leads found in database yet.</p>
            <p>Submit a lead through the form to see it here!</p>
          </div>
        ) : (
          <>
            <div className="leads-count">
              <strong>Total Leads: {leads.length}</strong>
            </div>
            <div className="leads-table-container">
              <table className="leads-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Submitted At</th>
                  </tr>
                </thead>
                <tbody>
                  {leads.map((lead, index) => (
                    <tr key={lead._id}>
                      <td>{index + 1}</td>
                      <td>{lead.name}</td>
                      <td>{lead.email}</td>
                      <td>{lead.phone}</td>
                      <td>{formatDate(lead.createdAt)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LeadsView;