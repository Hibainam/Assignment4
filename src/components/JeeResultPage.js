import React from 'react';

const JeeResultPage = () => {
  // Example JEE result data (mock data)
  const jeeResult = {
    name: 'John Doe',
    rollNumber: '67890',
    marks: 120,
    totalMarks: 300,
    rank: 2500,
  };

  return (
    <div className="exam-result-container">
      <h2>JEE Exam Result</h2>
      <div className="exam-result-details">
        <p><strong>Name:</strong> {jeeResult.name}</p>
        <p><strong>Roll Number:</strong> {jeeResult.rollNumber}</p>
        <p><strong>Marks:</strong> {jeeResult.marks}</p>
        <p><strong>Total Marks:</strong> {jeeResult.totalMarks}</p>
        <p><strong>Rank:</strong> {jeeResult.rank}</p>

        {/* Download Scorecard */}
        <a href="/path/to/jee-scorecard.pdf" download className="download-btn">
          Download Scorecard
        </a>
      </div>
    </div>
  );
};

export default JeeResultPage;
