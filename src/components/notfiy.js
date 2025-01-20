import React, { useState } from 'react';

const NotificationPage = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'New event added: Mid Term Exam', date: '2025-01-10' },
    { id: 2, message: 'Deadline for project submission is nearing', date: '2025-01-15' },
  ]);

  return (
    <div className="container p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Notifications</h2>

      <ul className="space-y-4">
        {notifications.map(notification => (
          <li key={notification.id} className="bg-gray-50 p-4 rounded-lg shadow-sm hover:bg-gray-100 transition-colors duration-200">
            <div className="flex justify-between items-center">
              <p className="text-lg font-medium text-gray-700 mr-4">{notification.message}</p>
              <p className="text-gray-700">{notification.date}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationPage;
