// ScheduleContext.js
import React, { createContext, useState } from 'react';

export const ScheduleContext = createContext();

export const ScheduleProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([
    { id: '1', date: '2024-05-27', time: '10:00' },
    { id: '2', date: '2024-05-28', time: '14:00' },
  ]);

  const addAppointment = (date, time) => {
    const newAppointment = {
      id: Math.random().toString(),
      date,
      time,
    };
    setAppointments((currentAppointments) => [
      ...currentAppointments,
      newAppointment,
    ]);
  };

  return (
    <ScheduleContext.Provider value={{ appointments, addAppointment }}>
      {children}
    </ScheduleContext.Provider>
  );
};
