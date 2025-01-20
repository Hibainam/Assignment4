// ProfilePage.js
import React, { useState } from 'react';
import '../pages/ProfilePage.css';

const ProfilePage = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [personalDetails, setPersonalDetails] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    dob: "2000-01-01",  // Default Date of Birth
  });
  const [academicDetails, setAcademicDetails] = useState({
    course: "Computer Science",
    year: "2nd Year",
  });
  const [profileLogo, setProfileLogo] = useState(null);

  const handleChange = (e, section) => {
    const { name, value } = e.target;
    if (section === 'personal') {
      setPersonalDetails({ ...personalDetails, [name]: value });
    } else {
      setAcademicDetails({ ...academicDetails, [name]: value });
    }
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileLogo(reader.result); // Set the image as a base64 URL
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditToggle = () => {
    setIsEditable((prevEditable) => !prevEditable);
  };

  return (
    <div className="container p-6">
      <h2 className="text-xl font-semibold">My Profile</h2>

      {/* Profile Logo */}
      <div className="mt-4 text-center">
        <div className="profile-avatar">
          <img 
            src={profileLogo || 'https://via.placeholder.com/120'} 
            alt="Profile Logo" 
            className="rounded-full w-30 h-30 object-cover mb-4" 
          />
        </div>
        <input 
          type="file" 
          onChange={handleLogoChange} 
          accept="image/*"
          className="btn"
        />
      </div>

      {/* Personal Details */}
      <div className="mt-6">
        <h3 className="text-lg font-medium">Personal Details</h3>
        <input
          type="text"
          name="name"
          value={personalDetails.name}
          onChange={(e) => handleChange(e, 'personal')}
          disabled={!isEditable}
          className="input w-full mt-2"
        />
        <input
          type="email"
          name="email"
          value={personalDetails.email}
          onChange={(e) => handleChange(e, 'personal')}
          disabled={!isEditable}
          className="input w-full mt-2"
        />
        <input
          type="date"
          name="dob"
          value={personalDetails.dob}
          onChange={(e) => handleChange(e, 'personal')}
          disabled={!isEditable}
          className="input w-full mt-2"
        />
      </div>

      {/* Academic Details */}
      <div className="mt-6">
        <h3 className="text-lg font-medium">Academic Details</h3>
        <input
          type="text"
          name="course"
          value={academicDetails.course}
          onChange={(e) => handleChange(e, 'academic')}
          disabled={!isEditable}
          className="input w-full mt-2"
        />
        <input
          type="text"
          name="year"
          value={academicDetails.year}
          onChange={(e) => handleChange(e, 'academic')}
          disabled={!isEditable}
          className="input w-full mt-2"
        />
      </div>

      {/* Edit/Save Button */}
      <button
        onClick={handleEditToggle}
        className="btn mt-4"
      >
        {isEditable ? 'Save' : 'Edit'}
      </button>
    </div>
  );
};

export default ProfilePage;
