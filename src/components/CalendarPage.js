import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { saveAs } from 'file-saver';
import { createEvent } from 'ics'; 

const CalendarPage = () => {
  const events = [
    { date: '2025-01-15', event: 'Mid Term Exam', description: 'Mid-term exam for all courses' },
    { date: '2025-02-01', event: 'Project Submission', description: 'Submit your final project report' },
  ];

  // Handle calendar date click
  const handleDateClick = (date) => {
    const event = events.find(e => new Date(e.date).toLocaleDateString() === date.toLocaleDateString());
    alert(event ? event.event : 'No events on this date');
  };

  // Generate an .ics file for the event and download it
  const generateICS = (event) => {
    const date = new Date(event.date); // Convert string to Date object
    const startDate = date.toISOString(); // Convert to ISO string (e.g., 2025-01-15T00:00:00.000Z)

    const eventDetails = {
      start: startDate.split('T'), // Split the ISO date to get the date and time
      duration: { hours: 1, minutes: 0 },
      title: event.event,
      description: event.description,
      location: 'Your Location', // Adjust this if needed
      url: '', // You can add an event URL if you want
      status: 'CONFIRMED',
    };

    // Create the event and handle the download
    createEvent(eventDetails, (error, file) => {
      if (error) {
        console.error(error);
      } else {
        saveAs(file, `${event.event}.ics`);
      }
    });
  };

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">Calendar</h2>

      <div className="mb-6">
        <Calendar
          onClickDay={handleDateClick}
          className="rounded-lg border border-gray-300 shadow-sm"
        />
      </div>

      <div className="event-list mt-6">
        <h3 className="text-xl font-semibold text-gray-800">Upcoming Events</h3>
        <ul className="space-y-4 mt-4">
          {events.map((event, index) => (
            <li key={index} className="flex justify-between items-center p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm">
              <div>
                <p className="text-lg font-semibold text-gray-700">{event.event}</p>
                <p className="text-sm text-gray-500">{event.date}</p>
              </div>
              <button
                className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none"
                onClick={() => generateICS(event)}
              >
                Add to Calendar
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CalendarPage;
