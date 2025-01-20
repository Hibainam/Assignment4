import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { jsPDF } from 'jspdf'; // Import jsPDF for PDF generation
import 'jspdf-autotable';
import 'font-awesome/css/font-awesome.min.css';
import '../pages/dashboard.css';
import CalendarPage from './CalendarPage';
import NotificationPage from './notfiy';
import EventsPage from './EventsPage'; // Import the EventsPage
import NeetResultPage from './NeetResultPage';

// Importing chart.js for performance analysis graphs
ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [profileImage, setProfileImage] = useState('/path/to/default-image.jpg');

  const attendanceData = {
    labels: ['Present', 'Absent'],
    datasets: [
      {
        label: 'Attendance',
        data: [80, 20],
        backgroundColor: ['#42A5F5', '#FF7043'],
        borderColor: ['#42A5F5', '#FF7043'],
        borderWidth: 1,
      },
    ],
  };

  const performanceData = {
    labels: ['Maths', 'Science', 'English', 'History'],
    datasets: [
      {
        label: 'Internal Exam Performance',
        data: [85, 90, 75, 88],
        backgroundColor: ['#42A5F5', '#FF7043', '#66BB6A', '#FFEB3B'],
        borderColor: ['#42A5F5', '#FF7043', '#66BB6A', '#FFEB3B'],
        borderWidth: 1,
      },
    ],
  };

  const marksTableData = [
    { subject: 'Maths', marks: 85 },
    { subject: 'Science', marks: 90 },
    { subject: 'English', marks: 75 },
    { subject: 'History', marks: 88 },
  ];

  const handleLogout = async () => {
    try {
      // Example fetch call
      const response = await fetch('/account/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        console.log('Logged out successfully');
        window.location.href = '/login';
      } else {
        console.error('Logout failed');
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  // Function to generate and download the PDF
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('Exam Results', 14, 20);

    // Add internal exam performance data
    doc.setFontSize(12);

    // Add Marks Table
    const marksTable = marksTableData.map(row => [row.subject, row.marks]);
    doc.autoTable({
      startY: 30,
      head: [['Subject', 'Marks']],
      body: marksTable,
    });

    // Save the generated PDF
    doc.save('exam-results.pdf');
  };

  return (
    <div className="dashboard-container">
      <div className="side-nav">
        <h2 className="side-nav-title">Dashboard</h2>
        <button
          className={`side-nav-item ${activeTab === 'profile' ? 'active' : ''}`}
          onClick={() => setActiveTab('profile')}
        >
          <i className="fa fa-user"></i> My Profile
        </button>
        <button
          className={`side-nav-item ${activeTab === 'attendance' ? 'active' : ''}`}
          onClick={() => setActiveTab('attendance')}
        >
          <i className="fa fa-calendar-check-o"></i> Attendance
        </button>
        <button
          className={`side-nav-item ${activeTab === 'calendar' ? 'active' : ''}`}
          onClick={() => setActiveTab('calendar')}
        >
          <i className="fa fa-calendar"></i> Calendar
        </button>
        <button
          className={`side-nav-item ${activeTab === 'notifications' ? 'active' : ''}`}
          onClick={() => setActiveTab('notifications')}
        >
          <i className="fa fa-bell"></i> Notifications
        </button>
        <button
          className={`side-nav-item ${activeTab === 'events' ? 'active' : ''}`}
          onClick={() => setActiveTab('events')}
        >
          <i className="fa fa-calendar"></i> Events
        </button>
        <button
          className={`side-nav-item ${activeTab === 'marks-results' ? 'active' : ''}`}
          onClick={() => setActiveTab('marks-results')}
        >
          <i className="fa fa-graduation-cap"></i> Marks 
        </button>
        
        <button
          className={`side-nav-item ${activeTab === 'NeetResultPage' ? 'active' : ''}`}
          onClick={() => setActiveTab('NeetResultPage')}
        >
          <i className="fa fa-graduation-cap"></i> Result
        </button>
        <button className="side-nav-item logout-btn" onClick={handleLogout}>
          <i className="fa fa-sign-out"></i> Logout
        </button>
      </div>

      <div className="main-content">
        {/* Active tab content here */}
        {activeTab === 'profile' && (
          <div className="tab-content profile">
            <h3>My Profile</h3>
            <div className="profile-image">
              <img src="./logohome.jpg" alt="Profile" className="profile-img" />
            </div>
            <p><i className="fa fa-id-card"></i> Name: John Doe</p>
            <p><i className="fa fa-user"></i> Roll Number: 12345</p>
            <p><i className="fa fa-envelope"></i> Email: john.doe@example.com</p>
            <p><i className="fa fa-graduation-cap"></i> Course: Computer Science</p>
            <p><i className="fa fa-calendar"></i> Date of Birth: 1995-05-15</p>
            <Link to="/profile" className="edit-profile-link">
              <i className="fa fa-pencil"></i> Edit Profile
            </Link>
          </div>
        )}

        {activeTab === 'attendance' && (
          <div className="tab-content attendance">
            <h3>Attendance Dashboard</h3>
            <p><i className="fa fa-check-circle"></i> Daily Attendance: 80%</p>
            <p><i className="fa fa-calendar"></i> Monthly Attendance: 85%</p>
            <p><i className="fa fa-bar-chart"></i> Overall Attendance: 90%</p>
            <div className="attendance-chart">
              <Pie data={attendanceData} options={{ responsive: true }} />
            </div>
          </div>
        )}

        {activeTab === 'marks-results' && (
          <div className="tab-content marks-results">
            <h3>Marks & Results</h3>

            {/* Performance Analysis Chart */}
            <div className="performance-chart">
              <h4 className="performance-title">Performance Analysis</h4>
              <div className="performance-chart-container">
                <Pie data={performanceData} options={{ responsive: true }} />
              </div>
            </div>

            {/* Marks Table */}
            <div className="marks-table">
              <h4>Internal Exam Marks</h4>
              <table>
                <thead>
                  <tr>
                    <th>Subject</th>
                    <th>Marks</th>
                  </tr>
                </thead>
                <tbody>
                  {marksTableData.map((row, index) => (
                    <tr key={index}>
                      <td>{row.subject}</td>
                      <td>{row.marks}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Download PDF Button */}
            <div className="mt-6">
              <button
                onClick={generatePDF}
                className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Download Exam Results as PDF
              </button>
            </div>
          </div>
        )}

        {activeTab === 'calendar' && <CalendarPage />}
        {activeTab === 'notifications' && <NotificationPage />}
        {activeTab === 'events' && <EventsPage />}
        {activeTab === 'NeetResultPage' && <NeetResultPage />}
      </div>
    </div>
  );
};

export default Dashboard;