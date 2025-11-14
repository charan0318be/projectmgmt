import React, { useState } from "react";

const Calendar = () => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const today = new Date();

  // State for current month and year
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  // Calculate number of days in current month
  const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();

  // Calculate starting day of the week (0=Sun, 6=Sat)
  const getStartDay = (month, year) => new Date(year, month, 1).getDay();

  const daysInMonth = getDaysInMonth(currentMonth, currentYear);
  const startDay = getStartDay(currentMonth, currentYear);

  // Generate calendar cells
  const calendarCells = [];
  for (let i = 0; i < startDay; i++) calendarCells.push(null); // empty cells before 1st
  for (let i = 1; i <= daysInMonth; i++) calendarCells.push(i);

  // Handlers for month navigation
  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">{monthNames[currentMonth]} {currentYear}</h2>
        <div className="flex gap-2">
          <button
            onClick={handlePrevMonth}
            className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600"
          >
            &lt; Prev
          </button>
          <button
            onClick={handleNextMonth}
            className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600"
          >
            Next &gt;
          </button>
        </div>
      </div>

      {/* Weekday Headers */}
      <div className="grid grid-cols-7 gap-2 text-center text-sm font-semibold text-gray-600 mb-2">
        {daysOfWeek.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2 text-sm">
        {calendarCells.map((day, i) => {
          const isToday =
            day === today.getDate() &&
            currentMonth === today.getMonth() &&
            currentYear === today.getFullYear();
          const isWeekend = i % 7 === 0 || i % 7 === 6;

          return (
            <div
              key={i}
              className={`h-24 rounded shadow flex items-start justify-start p-2 cursor-pointer
                ${day ? "bg-white hover:bg-gray-100" : "bg-gray-100"}
                ${isToday ? "border-2 border-red-500" : ""}
                ${isWeekend && day ? "bg-blue-50" : ""}
              `}
              onClick={() => day && alert(`Clicked on ${day}-${currentMonth + 1}-${currentYear}`)}
            >
              {day && <span className="text-gray-700 font-medium">{day}</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
