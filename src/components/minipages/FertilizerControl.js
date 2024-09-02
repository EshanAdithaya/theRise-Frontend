import React, { useState } from 'react';
import { FaLeaf, FaClock, FaRobot } from 'react-icons/fa';

const FertilizerControl = () => {
  const [mode, setMode] = useState('auto');
  const [schedule, setSchedule] = useState([
    { day: 'Monday', time: '08:00' },
    { day: 'Thursday', time: '08:00' },
  ]);

  const handleModeChange = (newMode) => {
    setMode(newMode);
  };

  const handleScheduleChange = (index, field, value) => {
    const newSchedule = [...schedule];
    newSchedule[index][field] = value;
    setSchedule(newSchedule);
  };

  const addScheduleItem = () => {
    setSchedule([...schedule, { day: 'Monday', time: '08:00' }]);
  };

  const removeScheduleItem = (index) => {
    const newSchedule = schedule.filter((_, i) => i !== index);
    setSchedule(newSchedule);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-green-600 flex items-center mb-4">
        <FaLeaf className="mr-2" />
        Fertilizer Control
      </h2>
      <div className="mb-4">
        <span className="mr-4">Mode:</span>
        <button
          className={`mr-2 px-3 py-1 rounded ${mode === 'auto' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
          onClick={() => handleModeChange('auto')}
        >
          <FaRobot className="inline-block mr-1" /> Auto
        </button>
        <button
          className={`px-3 py-1 rounded ${mode === 'scheduled' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
          onClick={() => handleModeChange('scheduled')}
        >
          <FaClock className="inline-block mr-1" /> Scheduled
        </button>
      </div>
      {mode === 'scheduled' && (
        <div>
          <h3 className="font-semibold mb-2">Schedule:</h3>
          {schedule.map((item, index) => (
            <div key={index} className="flex items-center mb-2">
              <select
                value={item.day}
                onChange={(e) => handleScheduleChange(index, 'day', e.target.value)}
                className="mr-2 p-1 border rounded"
              >
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                  <option key={day} value={day}>{day}</option>
                ))}
              </select>
              <input
                type="time"
                value={item.time}
                onChange={(e) => handleScheduleChange(index, 'time', e.target.value)}
                className="mr-2 p-1 border rounded"
              />
              <button onClick={() => removeScheduleItem(index)} className="text-red-500">Remove</button>
            </div>
          ))}
          <button onClick={addScheduleItem} className="text-green-500">+ Add Schedule</button>
        </div>
      )}
      {mode === 'auto' && (
        <p className="text-gray-600">AI will automatically detect nutrient levels and apply fertilizer as needed.</p>
      )}
    </div>
  );
};

export default FertilizerControl;