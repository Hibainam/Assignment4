import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import correct Router components
import LoginForm from './components/LoginForm';  // Correct path if necessary
import StudentDashboard from './components/StudentDashboard';  // Correct path if necessary
import ProfilePage from './components/ProfilePage';
import AttendanceDashboard from './components/AttendanceDashboard';
import CalendarPage from './components/CalendarPage';
import ProfileEdit from './components/ProfileEdit';
import Registration from './components/Registration';
import MarksAndResultsPage from './components/MarksAndResultsPage';
import BoardResultPage from './components/BoardResultPage';
import JeeResultPage from './components/JeeResultPage';
import NeetResultPage from './components/NeetResultPage';
import MhtcetResultPage from './components/MhtcetResultPage';
import './output.css';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Define routes for the main app */}
        <Route path="/" element={<LoginForm />} />  {/* Set LoginForm as default route */}
        <Route path="/Registration" element={<Registration />} />
        <Route path="/StudentDashboard" element={<StudentDashboard />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/edit" element={<ProfileEdit />} /> {/* Edit profile route */}
        <Route path="/attendance" element={<AttendanceDashboard />} />
        <Route path="/calendar" element={<CalendarPage />} />

        {/* Define routes for Marks and Results */}
        <Route path="/marks-and-results" element={<MarksAndResultsPage />} />
        <Route path="/exam-results/board" element={<BoardResultPage />} />
        <Route path="/exam-results/jee" element={<JeeResultPage />} />
        <Route path="/exam-results/neet" element={<NeetResultPage />} />
        <Route path="/exam-results/mhtcet" element={<MhtcetResultPage />} />
      </Routes>
    </Router>
  );
}

export default App;
