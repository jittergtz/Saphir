"use client"
import React, { useState } from 'react';

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${date}.${month}.${year}`;
}

function DateHome() {
  const [currentDate, setCurrentDate] = useState(getDate());

  return (
    <div className=' text-3xl  bg-neutral-100 bg-opacity-10 pl-1 py-2 rounded-lg w-48 gap-2 text-neutral-300 '>
      <p className=''>{currentDate}</p>
    </div>
  );
}

export default DateHome;