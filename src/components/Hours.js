import React, { useState } from 'react';

const Hours = () => {
  const [selectedDay, setSelectedDay] = useState(new Date().getDay());
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const getHoursRangeForDay = (day) => {
    if (day >= 1 && day <= 5) { // Monday to Friday
      return '10:00 AM - 4:00 PM';
    } else { // Saturday and Sunday
      return '9:00 AM - 10:00 PM';
    }
  };

  const handleDayChange = (event) => {
    setSelectedDay(parseInt(event.target.value));
  };

  return (
    <div>
      <h3>Available hours for <select value={selectedDay} onChange={handleDayChange}>
        {daysOfWeek.map((day, index) => (
          <option key={index} value={index}>{day}</option>
        ))}
      </select>: {getHoursRangeForDay(selectedDay)}</h3>
    </div>
  );
};

export default Hours;
