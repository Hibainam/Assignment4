import React from 'react';
import { Pie } from 'react-chartjs-2';
import '../pages/AttendanceDashboard.css';

const AttendanceDashboard = () => {
  const attendanceData = {
    daily: [
      { date: '2025-01-01', status: 'Present' },
      { date: '2025-01-02', status: 'Absent' },
    ],
    monthly: [
      { month: 'January', daysPresent: 20, totalDays: 30 },
    ],
    overall: {
      totalPresent: 150,
      totalDays: 180,
    },
  };

  // Prepare data for Pie Chart
  const pieChartData = {
    labels: ['Present', 'Absent'],
    datasets: [
      {
        data: [
          attendanceData.overall.totalPresent,
          attendanceData.overall.totalDays - attendanceData.overall.totalPresent,
        ],
        backgroundColor: ['#4caf50', '#f44336'], // Green for Present, Red for Absent
        hoverBackgroundColor: ['#66bb6a', '#ef5350'],
      },
    ],
  };

  return (
    <div className="container p-6">
      <h2 className="text-xl font-semibold">Attendance Dashboard</h2>

      <div className="mt-6">
        <h3 className="text-lg">Daily Attendance</h3>
        <table className="table-auto mt-2 w-full">
          <thead>
            <tr>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.daily.map((data, index) => (
              <tr key={index}>
                <td>{data.date}</td>
                <td>{data.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6">
        <h3 className="text-lg">Monthly Attendance</h3>
        <table className="table-auto mt-2 w-full">
          <thead>
            <tr>
              <th>Month</th>
              <th>Days Present</th>
              <th>Total Days</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.monthly.map((data, index) => (
              <tr key={index}>
                <td>{data.month}</td>
                <td>{data.daysPresent}</td>
                <td>{data.totalDays}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6">
        <h3 className="text-lg">Overall Attendance</h3>
        <p>Total Present: {attendanceData.overall.totalPresent}</p>
        <p>Total Days: {attendanceData.overall.totalDays}</p>

        <div className="mt-6">
          <h3 className="text-lg">Attendance Summary (Pie Chart)</h3>
          <div className="w-1/2 mx-auto">
            <Pie data={pieChartData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceDashboard;
