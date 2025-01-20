import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/profiledit.css';

const ProfileEdit = () => {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [course, setCourse] = useState('Computer Science');
  const navigate = useNavigate();

  const handleSave = () => {
    // Save updated data (you can send it to a backend or store it locally)
    console.log('Profile updated:', { name, email, course });

    // Redirect to the dashboard or profile page
    navigate('/dashboard');
  };

  const handleBack = () => {
    // Redirect to StudentDashboard
    navigate('/StudentDashboard');
  };

  return (
    <div className="profile-edit">
      <h3>Edit Profile</h3>
      <form>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Course</label>
          <input
            type="text"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />
        </div>
        <div className="button-group">
          <button type="button" onClick={handleBack} className="back-button">
            Back
          </button>
          <button type="button" onClick={handleSave} className="save-button">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileEdit;
