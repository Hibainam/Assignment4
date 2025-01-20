import React from 'react';

const BoardResultPage = () => {
  // Example data for the board result (mock data)
  const boardResult = {
    name: 'John Doe',
    rollNumber: '12345',
    marks: {
      math: 90,
      science: 85,
      english: 88,
      history: 92,
    },
    totalMarks: 360,
    percentage: 89.5,
  };

  return (
    <div className="exam-result-container">
      <h2>Board Exam Result</h2>
      <div className="exam-result-details">
        <p><strong>Name:</strong> {boardResult.name}</p>
        <p><strong>Roll Number:</strong> {boardResult.rollNumber}</p>
        <p><strong>Marks:</strong></p>
        <ul>
          <li>Math: {boardResult.marks.math}</li>
          <li>Science: {boardResult.marks.science}</li>
          <li>English: {boardResult.marks.english}</li>
          <li>History: {boardResult.marks.history}</li>
        </ul>
        <p><strong>Total Marks:</strong> {boardResult.totalMarks}</p>
        <p><strong>Percentage:</strong> {boardResult.percentage}%</p>

        {/* Download Scorecard */}
        <a href="/path/to/board-scorecard.pdf" download className="download-btn">
          Download Scorecard
        </a>
      </div>
    </div>
  );
};

export default BoardResultPage;
