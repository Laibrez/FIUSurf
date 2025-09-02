import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, MapPin, Clock, Users } from "lucide-react";

export default function Calendar() {
  const calendarRef = useRef(null); // Reference for the calendar section

  const scrollToCalendar = () => {
    if (calendarRef.current) {
      calendarRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="calendar" ref={calendarRef} className="min-h-screen bg-[#f5f0e6] p-6 flex flex-col items-center">
      {/* Calendar Section */}
      <div className="w-full flex justify-center mt-8">
        <iframe
          src="https://calendar.google.com/calendar/embed?src=fiusurfclub%40gmail.com&ctz=America%2FNew_York"
          style={{ border: 0 }}
          width="800"
          height="600"
          frameBorder="0"
          scrolling="no"
        ></iframe>
      </div>
    </div>
  );
}
