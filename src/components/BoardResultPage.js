import React from 'react';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

const BoardResultsPage = () => {
  const boardResults = [
    { subject: 'Physics', marks: 95 },
    { subject: 'Chemistry', marks: 92 },
    { subject: 'Mathematics', marks: 98 },
    { subject: 'English', marks: 88 },
  ];

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('Board Exam Results', 14, 20);

    const tableData = boardResults.map(row => [row.subject, row.marks]);
    doc.autoTable({
      startY: 30,
      head: [['Subject', 'Marks']],
      body: tableData,
    });

    doc.save('board-results.pdf');
  };

  return (
    <div>
      <h2>Board Exam Results</h2>
      <table>
        <thead>
          <tr>
            <th>Subject</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {boardResults.map((row, index) => (
            <tr key={index}>
              <td>{row.subject}</td>
              <td>{row.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={generatePDF} className="btn-download">
        Download Scorecard
      </button>
    </div>
  );
};

export default BoardResultsPage;
