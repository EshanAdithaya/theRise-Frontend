import React, { useState } from 'react';
import { FaThermometerHalf, FaClock, FaRobot } from 'react-icons/fa';

const TemperatureControl = () => {
  const [mode, setMode] = useState('auto');
  const [schedule, setSchedule] = useState([
    { time: '06:00', temperature: 22 },
    { time: '18:00', temperature: 20 },
  ]);
  const [range, setRange] = useState({ min: 18, max: 26 });

  const handleModeChange = (newMode) => {
    setMode(newMode);
  };

  const handleScheduleChange = (index, field, value) => {
    const newSchedule = [...schedule];
    newSchedule[index][field] = value;
    setSchedule(newSchedule);
  };

  const handleRangeChange = (field, value) => {
    setRange({ ...range, [field]: Number(value) });
  };

  const addScheduleItem = () => {
    setSchedule([...schedule, { time: '12:00', temperature: 22 }]);
  };

  const removeScheduleItem = (index) => {
    const newSchedule = schedule.filter((_, i) => i !== index);
    setSchedule(newSchedule);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-red-600 flex items-center mb-4">
        <FaThermometerHalf className="mr-2" />
        Temperature Control
      </h2>
      <div className="mb-4">
        <span className="mr-4">Mode:</span>
        <button
          className={`mr-2 px-3 py-1 rounded ${mode === 'auto' ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
          onClick={() => handleModeChange('auto')}
        >
          <FaRobot className="inline-block mr-1" /> Auto
        </button>
        <button
          className={`px-3 py-1 rounded ${mode === 'scheduled' ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
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
              <input
                type="time"
                value={item.time}
                onChange={(e) => handleScheduleChange(index, 'time', e.target.value)}
                className="mr-2 p-1 border rounded"
              />
              <input
                type="number"
                value={item.temperature}
                onChange={(e) => handleScheduleChange(index, 'temperature', e.target.value)}
                className="mr-2 p-1 border rounded w-16"
              />
              <span className="mr-2">°C</span>
              <button onClick={() => removeScheduleItem(index)} className="text-red-500">Remove</button>
            </div>
          ))}
          <button onClick={addScheduleItem} className="text-red-500">+ Add Schedule</button>
        </div>
      )}
      {mode === 'auto' && (
        <div>
          <p className="text-gray-600 mb-2">AI will maintain temperature within the following range:</p>
          <div className="flex items-center">
            <input
              type="number"
              value={range.min}
              onChange={(e) => handleRangeChange('min', e.target.value)}
              className="mr-2 p-1 border rounded w-16"
            />
            <span className="mr-2">°C to</span>
            <input
              type="number"
              value={range.max}
              onChange={(e) => handleRangeChange('max', e.target.value)}
              className="mr-2 p-1 border rounded w-16"
            />
            <span>°C</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default TemperatureControl;