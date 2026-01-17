import React, { useState } from 'react';
import './App.css';
import LeadForm from './components/LeadForm';

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="header">
          <h1 className="main-heading">Transform Your Business Today</h1>
          <p className="subheading">
            Join thousands of successful entrepreneurs who have revolutionized their business 
            with our proven strategies. Get started now and unlock your potential.
          </p>
        </header>
        
        <LeadForm />
      </div>
    </div>
  );
}

export default App;