import React, { useState } from "react";
import { FaCalendarAlt, FaLocationArrow, FaThumbsUp } from "react-icons/fa";

// Defining event data
const events = [
  {
    id: 1,
    title: "Football Match",
    type: "Sports",
    date: "2025-02-20",
    description: "Join us for an exciting football match.",
    location: "Stadium A",
  },
  {
    id: 2,
    title: "Dance Performance",
    type: "Cultural",
    date: "2025-03-10",
    description: "Enjoy a mesmerizing dance performance.",
    location: "Cultural Hall",
  },
  {
    id: 3,
    title: "Music Concert",
    type: "Cultural",
    date: "2025-04-05",
    description: "A live music concert with famous bands.",
    location: "Main Auditorium",
  },
  // You can add more events here
];

const EventsPage = () => {
  const [rsvps, setRsvps] = useState({});

  const handleRSVP = (eventId) => {
    setRsvps((prevRsvps) => ({
      ...prevRsvps,
      [eventId]: !prevRsvps[eventId],
    }));
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-semibold text-center mb-8">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">{event.title}</h2>
              <span className="text-sm font-semibold text-blue-500">{event.type}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600 mb-4">
              <FaCalendarAlt />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600 mb-4">
              <FaLocationArrow />
              <span>{event.location}</span>
            </div>
            <p className="text-gray-700 mb-4">{event.description}</p>
            <button
              onClick={() => handleRSVP(event.id)}
              className={`w-full py-2 px-4 rounded-lg text-white ${
                rsvps[event.id] ? "bg-green-500" : "bg-blue-500"
              } hover:bg-opacity-80 transition-all duration-300`}
            >
              <FaThumbsUp className="inline mr-2" />
              {rsvps[event.id] ? "RSVP'd" : "RSVP"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
