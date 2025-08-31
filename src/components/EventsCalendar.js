import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, MapPin, Clock, Users } from "lucide-react";

export default function EventsCalendar() {
  // Months
  const months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December",
  ];

  // Break months
  const breakMonths = [4, 5, 6, 7, 11]; // index-based: May=4, Dec=11 etc.

  // Enhanced events data with details
  const eventsData = {
    January: {
      daysInMonth: 31,
      startDay: 3,
      events: {
        2: [
          { name: "Advanced Practice", time: "8:00 AM", location: "Main Beach", type: "practice" },
          { name: "Crew Meetup", time: "6:00 PM", location: "Beach Cafe", type: "social" }
        ],
        5: [{ name: "Beginners Practice", time: "10:00 AM", location: "South Beach", type: "practice" }],
        9: [{ name: "Breath Workshop", time: "2:00 PM", location: "Surf School", type: "workshop" }],
        12: [{ name: "Beach Cleanup", time: "9:00 AM", location: "North Shore", type: "community" }],
        18: [{ name: "Crew Meetup", time: "7:00 PM", location: "Beach Cafe", type: "social" }],
        21: [{ name: "Advanced Practice", time: "8:00 AM", location: "Main Beach", type: "practice" }],
        26: [{ name: "Beginners Practice", time: "10:00 AM", location: "South Beach", type: "practice" }],
      },
    },
    February: {
      daysInMonth: 28,
      startDay: 6,
      events: {
        3: [
          { name: "Crew Meetup", time: "6:00 PM", location: "Beach Cafe", type: "social" },
          { name: "Breath Workshop", time: "2:00 PM", location: "Surf School", type: "workshop" }
        ],
        7: [{ name: "Advanced Practice", time: "8:00 AM", location: "Main Beach", type: "practice" }],
        11: [{ name: "Beginners Practice", time: "10:00 AM", location: "South Beach", type: "practice" }],
        16: [{ name: "Beach Cleanup", time: "9:00 AM", location: "North Shore", type: "community" }],
        23: [{ name: "Advanced Practice", time: "8:00 AM", location: "Main Beach", type: "practice" }],
      },
    },
    March: {
      daysInMonth: 31,
      startDay: 6,
      events: {
        1: [
          { name: "Advanced Practice", time: "8:00 AM", location: "Main Beach", type: "practice" },
          { name: "Crew Meetup", time: "6:00 PM", location: "Beach Cafe", type: "social" }
        ],
        4: [{ name: "Beginners Practice", time: "10:00 AM", location: "South Beach", type: "practice" }],
        7: [{ name: "Breath Workshop", time: "2:00 PM", location: "Surf School", type: "workshop" }],
        14: [{ name: "Beach Cleanup", time: "9:00 AM", location: "North Shore", type: "community" }],
        18: [{ name: "Advanced Practice", time: "8:00 AM", location: "Main Beach", type: "practice" }],
        25: [{ name: "Beginners Practice", time: "10:00 AM", location: "South Beach", type: "practice" }],
      },
    },
    April: {
      daysInMonth: 30,
      startDay: 2,
      events: {
        2: [{ name: "Crew Meetup", time: "6:00 PM", location: "Beach Cafe", type: "social" }],
        6: [{ name: "Advanced Practice", time: "8:00 AM", location: "Main Beach", type: "practice" }],
        11: [{ name: "Beginners Practice", time: "10:00 AM", location: "South Beach", type: "practice" }],
        20: [{ name: "Beach Cleanup", time: "9:00 AM", location: "North Shore", type: "community" }],
        28: [{ name: "Breath Workshop", time: "2:00 PM", location: "Surf School", type: "workshop" }],
      },
    },
    September: {
      daysInMonth: 30,
      startDay: 1,
      events: {
        5: [{ name: "Crew Meetup", time: "6:00 PM", location: "Beach Cafe", type: "social" }],
        9: [{ name: "Advanced Practice", time: "8:00 AM", location: "Main Beach", type: "practice" }],
        13: [{ name: "Beginners Practice", time: "10:00 AM", location: "South Beach", type: "practice" }],
        21: [{ name: "Beach Cleanup", time: "9:00 AM", location: "North Shore", type: "community" }],
        27: [{ name: "Breath Workshop", time: "2:00 PM", location: "Surf School", type: "workshop" }],
      },
    },
    October: {
      daysInMonth: 31,
      startDay: 3,
      events: {
        4: [{ name: "Advanced Practice", time: "8:00 AM", location: "Main Beach", type: "practice" }],
        8: [{ name: "Crew Meetup", time: "6:00 PM", location: "Beach Cafe", type: "social" }],
        15: [{ name: "Beginners Practice", time: "10:00 AM", location: "South Beach", type: "practice" }],
        22: [{ name: "Beach Cleanup", time: "9:00 AM", location: "North Shore", type: "community" }],
        29: [{ name: "Breath Workshop", time: "2:00 PM", location: "Surf School", type: "workshop" }],
      },
    },
    November: {
      daysInMonth: 30,
      startDay: 5,
      events: {
        2: [{ name: "Crew Meetup", time: "6:00 PM", location: "Beach Cafe", type: "social" }],
        7: [{ name: "Advanced Practice", time: "8:00 AM", location: "Main Beach", type: "practice" }],
        14: [{ name: "Beginners Practice", time: "10:00 AM", location: "South Beach", type: "practice" }],
        19: [{ name: "Beach Cleanup", time: "9:00 AM", location: "North Shore", type: "community" }],
        25: [{ name: "Breath Workshop", time: "2:00 PM", location: "Surf School", type: "workshop" }],
      },
    },
  };

  // Get the font class from your project for "Join us..." sentence
  const surfFontClass = "font-sans tracking-tight";

  const [currentMonth, setCurrentMonth] = useState(2); // March by default
  const [selectedDay, setSelectedDay] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const goPrev = () => {
    setCurrentMonth((prev) => (prev === 0 ? 11 : prev - 1));
  };

  const goNext = () => {
    setCurrentMonth((prev) => (prev === 11 ? 0 : prev + 1));
  };

  const handleDayClick = (day) => {
    const monthName = months[currentMonth];
    const events = eventsData[monthName]?.events[day];
    if (events && events.length > 0) {
      setSelectedDay({ day, events, month: monthName });
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedDay(null);
  };

  const getEventTypeColor = (type) => {
    switch (type) {
      case 'practice': return 'bg-blue-500';
      case 'social': return 'bg-purple-500';
      case 'workshop': return 'bg-green-500';
      case 'community': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  const monthName = months[currentMonth];
  const isBreakMonth = breakMonths.includes(currentMonth);

  return (
    <div className="min-h-screen bg-[#f5f0e6] p-6 flex flex-col items-center">
      {/* Header */}
      <div className="flex items-center gap-6 mb-6">
        <button
          onClick={goPrev}
          className="p-2 rounded-full hover:bg-blue-200 transition"
        >
          <ChevronLeft className="w-8 h-8 text-blue-800" />
        </button>
        <h1
          className={`text-5xl font-bold text-blue-900 ${surfFontClass}`}
        >
          {monthName.toUpperCase()}
        </h1>
        <button
          onClick={goNext}
          className="p-2 rounded-full hover:bg-blue-200 transition"
        >
          <ChevronRight className="w-8 h-8 text-blue-800" />
        </button>
      </div>

      {/* Subtitle */}
      <p
        className={`text-lg mb-8 text-green-700 text-center max-w-xl ${surfFontClass}`}
      >
        Join us for epic surf sessions, competitions, and community events
      </p>

      {/* Break Months */}
      {isBreakMonth ? (
        <div
          className={`text-4xl text-blue-900 font-bold mt-20 ${surfFontClass}`}
        >
          WE ARE ON A BREAK!
        </div>
      ) : (
        <div className="grid grid-cols-7 gap-2 w-full max-w-6xl">
          {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((d) => (
            <div
              key={d}
              className={`text-center font-bold text-blue-800 ${surfFontClass}`}
            >
              {d}
            </div>
          ))}

          {/* Empty boxes before first day */}
          {Array.from({
            length: eventsData[monthName]?.startDay || 0,
          }).map((_, i) => (
            <div key={`empty-${i}`} className="h-32 bg-transparent" />
          ))}

          {/* Days */}
          {Array.from({
            length: eventsData[monthName]?.daysInMonth || 0,
          }).map((_, i) => {
            const day = i + 1;
            const events = eventsData[monthName]?.events[day] || [];
            const hasEvents = events.length > 0;
            return (
              <motion.div
                key={day}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: day * 0.01 }}
                onClick={() => handleDayClick(day)}
                className={`h-32 bg-blue-100 rounded-xl p-3 shadow hover:shadow-lg transition-all flex flex-col cursor-pointer ${
                  hasEvents ? 'hover:bg-blue-200 hover:scale-105' : 'hover:bg-blue-150'
                }`}
              >
                <div className={`text-blue-900 font-bold mb-2 text-lg ${surfFontClass}`}>
                  {day}
                </div>
                <div className="space-y-1 flex-1">
                  {events.slice(0, 2).map((event, idx) => (
                    <p
                      key={idx}
                      className={`text-sm text-green-800 font-medium truncate ${surfFontClass}`}
                    >
                      {event.name}
                    </p>
                  ))}
                  {events.length > 2 && (
                    <p className={`text-xs text-gray-600 ${surfFontClass}`}>
                      +{events.length - 2} more
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      )}

      {/* Modal */}
      {showModal && selectedDay && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl p-6 max-w-md w-full max-h-96 overflow-y-auto shadow-2xl"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className={`text-2xl font-bold text-blue-900 ${surfFontClass}`}>
                {selectedDay.month} {selectedDay.day}
              </h2>
              <button
                onClick={closeModal}
                className="p-1 rounded-full hover:bg-gray-100 transition"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            <div className="space-y-4">
              {selectedDay.events.map((event, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-gray-50 rounded-xl p-4 border-l-4 border-blue-500"
                >
                  <h3 className={`font-bold text-lg text-blue-900 mb-2 ${surfFontClass}`}>
                    {event.name}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-green-600" />
                      <span className={`text-gray-700 ${surfFontClass}`}>{event.time}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-green-600" />
                      <span className={`text-gray-700 ${surfFontClass}`}>{event.location}</span>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <span className={`px-3 py-1 rounded-full text-white text-xs font-medium ${getEventTypeColor(event.type)}`}>
                      {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                    </span>
                  </div>

                  <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                    <Users className="w-4 h-4" />
                    Join Event
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}


