import React from 'react';

const NeetResultPage = () => {
  // Example static data for NEET results
  const results = [
    { rollNumber: '123456', name: 'John Doe', score: 670, rank: 105, category: 'General' },
    { rollNumber: '123457', name: 'Jane Smith', score: 650, rank: 203, category: 'OBC' },
    { rollNumber: '123458', name: 'Sam Wilson', score: 590, rank: 450, category: 'SC' },
    { rollNumber: '123459', name: 'Emily Davis', score: 620, rank: 320, category: 'ST' },
  ];

  // Inline CSS styles
  const containerStyle = {
    padding: '20px',
    backgroundColor: '#f9f9f9',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
  };

  const headingStyle = {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#333',
  };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    margin: '0 auto',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const thStyle = {
    padding: '12px',
    textAlign: 'center',
    backgroundColor: '#42A5F5',
    color: 'white',
    fontWeight: 'bold',
  };

  const tdStyle = {
    padding: '12px',
    textAlign: 'center',
    color: '#555',
    border: '1px solid #ddd',
  };

  const rowEvenStyle = {
    backgroundColor: '#f2f2f2',
  };

  const rowHoverStyle = {
    backgroundColor: '#f1f1f1',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>NEET Results</h1>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Roll Number</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Score</th>
            <th style={thStyle}>Rank</th>
            <th style={thStyle}>Category</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <tr
              key={index}
              style={index % 2 === 0 ? rowEvenStyle : null}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = rowHoverStyle.backgroundColor)}
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = index % 2 === 0 ? rowEvenStyle.backgroundColor : '')
              }
            >
              <td style={tdStyle}>{result.rollNumber}</td>
              <td style={tdStyle}>{result.name}</td>
              <td style={tdStyle}>{result.score}</td>
              <td style={tdStyle}>{result.rank}</td>
              <td style={tdStyle}>{result.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NeetResultPage;
