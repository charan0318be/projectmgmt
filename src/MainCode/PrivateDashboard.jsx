import React, { useState, useEffect } from "react";

// Employee Shift View
const EmployeeShiftView = ({ shifts, setShifts, onBack }) => {
  const handleDelete = (index) => {
    const updatedShifts = shifts.filter((_, i) => i !== index);
    setShifts(updatedShifts);
  };

  const handleEdit = (index) => {
    const newStart = prompt("Enter new Start Time:", shifts[index].start);
    const newHalf = prompt("Enter new Half Day Time:", shifts[index].halfDay);
    const newEnd = prompt("Enter new End Time:", shifts[index].end);
    if (newStart && newHalf && newEnd) {
      const updatedShifts = [...shifts];
      updatedShifts[index] = { ...updatedShifts[index], start: newStart, halfDay: newHalf, end: newEnd };
      setShifts(updatedShifts);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Employee Shift</h2>
        <button onClick={onBack} className="text-sm text-blue-600 underline">Back to Dashboard</button>
      </div>

      {shifts.map((shift, i) => (
        <div key={i} className="bg-white p-4 rounded shadow space-y-2">
          <h3 className="font-semibold">{shift.name}</h3>
          <p>Start Time: {shift.start}</p>
          <p>Half Day: {shift.halfDay}</p>
          <p>End Time: {shift.end}</p>
          <p>Late mark (minutes): {shift.lateMark}</p>
          <p>Max check-in/day: {shift.maxCheckIn}</p>
          <p>Office opens on: {shift.officeOpen}</p>
          <p>Default: {shift.default}</p>
          <div className="flex gap-2 mt-2">
            <button
              onClick={() => handleEdit(i)}
              className="bg-yellow-400 px-3 py-1 rounded text-white hover:bg-yellow-500 text-sm"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(i)}
              className="bg-red-500 px-3 py-1 rounded text-white hover:bg-red-600 text-sm"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

// Clock In View
const ClockInView = ({ currentTime, onBack }) => (
  <div className="min-h-screen bg-gray-100 p-6 space-y-6">
    <div className="flex justify-between items-center">
      <h2 className="text-xl font-bold">Clock In</h2>
      <button onClick={onBack} className="text-sm text-blue-600 underline">Back to Dashboard</button>
    </div>
    <p className="text-sm text-gray-600">Timestamp: {currentTime.toLocaleString()}</p>
    <p className="text-sm text-gray-600">Shift: General Shift</p>
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium mb-1">Location</label>
        <select className="w-full border rounded p-2">
          <option>Worksuite</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Working From</label>
        <select className="w-full border rounded p-2">
          <option>Office</option>
        </select>
      </div>
    </div>
    <div className="flex gap-4 mt-6">
      <button onClick={onBack} className="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
      <button className="bg-red-500 text-white px-4 py-2 rounded">Clock In</button>
    </div>
  </div>
);

// Private Dashboard
const PrivateDashboard = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [clockedIn, setClockedIn] = useState(false);
  const [view, setView] = useState("dashboard");
  const [tasks, setTasks] = useState({ pending: 5, overdue: 2 });
  const [projects, setProjects] = useState({ ongoing: 3, completed: 7 });
  const [timelogs, setTimelogs] = useState({ Sun: 0, Mon: 8, Tue: 7, Wed: 8, Thu: 6, Fri: 5, Sat: 0 });
  const [shiftSchedule] = useState([
   
  ]);
  const [shifts, setShifts] = useState([
    { name: "General Shift", start: "09:00 AM", halfDay: "01:00 PM", end: "06:00 PM", lateMark: 15, maxCheckIn: 2, officeOpen: "Mon-Fri", default: "Yes" },
    { name: "Night Shift", start: "10:00 PM", halfDay: "02:00 AM", end: "06:00 AM", lateMark: 10, maxCheckIn: 1, officeOpen: "Mon-Sat", default: "No" },
    { name: "Day Shift", start: "08:00 AM", halfDay: "12:00 PM", end: "04:00 PM", lateMark: 5, maxCheckIn: 2, officeOpen: "Mon-Fri", default: "Yes" },
  ]);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const totalHours = Object.values(timelogs).reduce((acc, h) => acc + h, 0);

  if (view === "shift") return <EmployeeShiftView shifts={shifts} setShifts={setShifts} onBack={() => setView("dashboard")} />;
  if (view === "clock") return <ClockInView currentTime={currentTime} onBack={() => setView("dashboard")} />;

  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-500">Home &gt; Dashboard</div>
        <button className="bg-red-500 text-white px-4 py-2 rounded text-sm hover:bg-red-600">Upgrade Plan</button>
      </div>

      {/* Banner */}
      <div className="bg-teal-200 text-sm text-gray-700 p-3 rounded shadow">
        The demo resets every 3 hours. Explore all features for testing before purchase.
      </div>

      {/* Welcome Panel */}
      <div className="bg-white p-6 rounded shadow flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold">Welcome Marie O'Kon</h2>
          <p className="text-sm text-gray-500">Junior</p>
          <p className="text-sm text-gray-500">Employee ID: EMP-1</p>
          <p className="text-sm text-gray-500">Tasks: {tasks.pending} pending / {tasks.overdue} overdue</p>
          <p className="text-sm text-gray-500">Projects: {projects.ongoing} ongoing / {projects.completed} completed</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-semibold mb-2">{currentTime.toLocaleTimeString()}</p>
          <button
            onClick={() => setView("clock")}
            className={`px-4 py-2 rounded ${clockedIn ? "bg-green-500 hover:bg-green-600" : "bg-red-500 hover:bg-red-600"} text-white`}
          >
            {clockedIn ? "Clock Out" : "Clock In"}
          </button>
        </div>
      </div>

      {/* Widgets */}
      <div className="grid grid-cols-3 gap-4 text-sm">
        {[`Tasks: ${tasks.pending} / ${tasks.overdue}`, `Projects: ${projects.ongoing} / ${projects.completed}`, "Follow Ups", "Deals", "Hosting Suggestions", "Document Expiry"].map((label) => (
          <div key={label} className="bg-white p-4 rounded shadow cursor-pointer hover:bg-gray-100">
            <p className="text-gray-500">{label}</p>
            <p className="text-xl font-semibold">Demo</p>
          </div>
        ))}
      </div>

      {/* Shift Schedule */}
      <div className="bg-white p-6 rounded shadow">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Shift Schedule</h3>
          <button
            onClick={() => setView("shift")}
            className="bg-red-500 text-white px-4 py-2 rounded text-sm hover:bg-red-600"
          >
            Employee Shift
          </button>
        </div>
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-2 border">Date</th>
              <th className="text-left p-2 border">Shift</th>
              <th className="text-left p-2 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {shiftSchedule.map((shift, i) => (
              <tr key={i}>
                <td className="p-2 border">{shift.date}</td>
                <td className="p-2 border">{shift.shift}</td>
                <td className="p-2 border">{shift.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Week Timelogs */}
      <div className="bg-white p-6 rounded shadow">
        <h3 className="text-lg font-semibold mb-4">Week Timelogs (This Week)</h3>
        <div className="grid grid-cols-7 gap-2 text-center text-sm text-gray-500">
          {Object.entries(timelogs).map(([day, hours]) => (
            <div key={day}>
              <div className="h-24 bg-gray-100 rounded mb-2 flex items-center justify-center">
                {hours} hrs
              </div>
              {day}
            </div>
          ))}
        </div>
        <div className="mt-4 text-sm text-gray-600">
          <p>Total Hours: {totalHours} hrs</p>
          <p>Break Hours: 2 hrs</p>
        </div>
      </div>
    </div>
  );
};

export default PrivateDashboard;
