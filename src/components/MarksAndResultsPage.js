import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const MarksAndResultsPage = () => {
  // Example performance data
  const performanceData = {
    labels: ['Math', 'Science', 'English', 'History'],
    datasets: [
      {
        label: 'Performance',
        data: [85, 90, 78, 92], // Marks in each subject
        backgroundColor: ['#42A5F5', '#66BB6A', '#FF7043', '#FFA726'],
        borderColor: ['#42A5F5', '#66BB6A', '#FF7043', '#FFA726'],
        borderWidth: 1,
      },
    ],
  };

  // Example internal exam marks data
  const internalMarks = [
    { subject: 'Math', marks: 85, grade: 'A' },
    { subject: 'Science', marks: 90, grade: 'A+' },
    { subject: 'English', marks: 78, grade: 'B+' },
    { subject: 'History', marks: 92, grade: 'A+' },
  ];

  return (
    <div className="marks-results-container">
      <h2 className="page-title">Marks and Results Dashboard</h2>

      {/* Performance Graph */}
      <div className="performance-graph">
        <h3>Performance Analysis</h3>
        <Pie data={performanceData} options={{ responsive: true }} />
      </div>

      {/* Internal Marks Table */}
      <div className="marks-table">
        <h3>Internal Exam Marks</h3>
        <table>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Marks</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {internalMarks.map((mark, index) => (
              <tr key={index}>
                <td>{mark.subject}</td>
                <td>{mark.marks}</td>
                <td>{mark.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Links to Exam Results Pages */}
      <div className="exam-links">
        <Link to="/exam-results/board" className="exam-link">Board Exam Results</Link>
        <Link to="/exam-results/jee" className="exam-link">JEE Exam Results</Link>
        <Link to="/exam-results/neet" className="exam-link">NEET Exam Results</Link>
        <Link to="/exam-results/mhtcet" className="exam-link">MHT-CET Exam Results</Link>
      </div>
    </div>
  );
};

export default MarksAndResultsPage;
