import React, { useState } from "react";

export default function Dayz() {
  const [currentMonth, setCurrentMonth] = useState(
    new Date(new Date().getFullYear(), new Date().getMonth(), 1)
  );
  return (
    <div className=" h-full min-h-full absolute w-full flex justify-center dark:bg-gray-400">
      <div className=" w-full flex mt-28 items-center flex-col">
        <Calendar
          currentMonth={currentMonth}
          setCurrentMonth={setCurrentMonth}
        />
      </div>
    </div>
  );
}

// Sum digits of day, month, and year
const sumDigits = (num: Number) =>
  String(num)
    .split("")
    .reduce((sum, digit) => sum + parseInt(digit, 10), 0);

const isSpecialDate = (date: Date, targetSum: Number) => {
  // Format date to dd-mm-yyyy
  const day = date.getDate();
  const month = date.getMonth() + 1; // Months are 0-based in JavaScript
  const year = date.getFullYear();

  let totalSum = sumDigits(day) + sumDigits(month) + sumDigits(year);

  // Reduce the sum to a single digit
  while (totalSum >= 10) {
    totalSum = sumDigits(totalSum);
  }

  return totalSum === targetSum;
};

// Helper function to get the name of the month and the year
const getMonthYear = (date: Date) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
};

// Helper function to generate the calendar days
const generateCalendarDays = (date: Date) => {
  const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
  const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();

  const startDay = firstDayOfMonth.getDay(); // Get the day of the week for the first day of the month

  // Calendar grid with empty placeholders for days before the start day of the month
  const calendarDays = [];
  for (let i = 0; i < startDay; i++) {
    calendarDays.push(undefined);
  }
  // Add the actual days of the month
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }

  return calendarDays;
};

function addMonth(date: Date) {
  // Extract year and month from the given date
  const year = date.getFullYear();
  const month = date.getMonth();

  // Create a new date with the month incremented by 1
  // If the month is December (11), it will automatically roll over to January (0) of the next year
  const newDate = new Date(year, month + 1, 1);

  return newDate;
}

function subtractMonth(date: Date) {
  // Extract year and month from the given date
  const year = date.getFullYear();
  const month = date.getMonth();

  // Create a new date with the month decremented by 1
  // If the month is January (0), it will automatically roll over to December (11) of the previous year
  const newDate = new Date(year, month - 1, 1);

  return newDate;
}

const Calendar = ({
  currentMonth,
  setCurrentMonth,
}: {
  currentMonth: Date;
  setCurrentMonth: React.Dispatch<React.SetStateAction<Date>>;
}) => {
  const calendarDate = new Date(currentMonth);
  const monthYear = getMonthYear(calendarDate);
  const calendarDays = generateCalendarDays(calendarDate);

  // Calculations for today
  const today = new Date();
  const todayIsDanger = isSpecialDate(today, 4);
  const todayIsLucky = isSpecialDate(today, 8);
  const todayIsGood = isSpecialDate(today, 3);
  return (
    <div className="flex items-center justify-center py-8 px-4 flex-col gap-2 cursor-default" suppressHydrationWarning>
      <div className="flex justify-between w-full">
        <div className="flex items-center gap-2 font-mono shadow-lg rounded px-2 py-1.5 dark:bg-gray-800 bg-white dark:text-gray-100 text-gray-800">
          {today.toLocaleDateString()}
        </div>
        <div className="flex items-center gap-2 font-mono shadow-lg rounded px-2 py-1.5 dark:bg-gray-800 bg-white italic dark:text-gray-100 text-gray-800">
          Just another
          {todayIsDanger ? (
            <span className="text-red-500">danger</span>
          ) : todayIsLucky ? (
            <span className="text-green-500">lucky</span>
          ) : todayIsGood ? (
            <span className="text-blue-500">good</span>
          ) : (
            <span>normal</span>
          )}
          day.
        </div>
      </div>
      <div className="max-w-sm w-full shadow-lg ">
        <div className="p-5 dark:bg-gray-800 bg-white rounded  flex-shrink">
          <div className="px-4 flex items-center justify-between">
            <span
              tabIndex={0}
              className="focus:outline-none text-base font-bold dark:text-gray-100 text-gray-800"
            >
              {monthYear}
            </span>
            <div className="flex items-center">
              <button
                aria-label="calendar backward"
                className="focus:text-gray-400 hover:text-gray-400 text-gray-800 dark:text-gray-100"
                onClick={() => {
                  setCurrentMonth(subtractMonth(currentMonth));
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-chevron-left"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="15 6 9 12 15 18" />
                </svg>
              </button>
              <button
                aria-label="calendar forward"
                className="focus:text-gray-400 hover:text-gray-400 ml-3 text-gray-800 dark:text-gray-100"
                onClick={() => {
                  setCurrentMonth(addMonth(currentMonth));
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-chevron-right"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="9 6 15 12 9 18" />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between pt-12 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                    <th key={day}>
                      <div className="w-full flex justify-center">
                        <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                          {day}
                        </p>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Render the days in the calendar */}
                {Array.from({ length: Math.ceil(calendarDays.length / 7) }).map(
                  (_, weekIndex) => (
                    <tr key={weekIndex}>
                      {calendarDays
                        .slice(weekIndex * 7, (weekIndex + 1) * 7)
                        .map((day, dayIndex) => {
                          const currentDate = new Date(
                            calendarDate.getFullYear(),
                            calendarDate.getMonth(),
                            day
                          );
                          const isDanger = day && isSpecialDate(currentDate, 4);
                          const isLucky = day && isSpecialDate(currentDate, 8);
                          const isGood = day && isSpecialDate(currentDate, 3);
                          return (
                            <td key={dayIndex} className="pt-6">
                              <div className="px-2 py-2 flex w-full justify-center">
                                {day ? (
                                  <p
                                    className={`text-base font-medium ${
                                      isDanger
                                        ? "bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
                                        : isLucky
                                        ? "bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
                                        : isGood
                                        ? "bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
                                        : "text-gray-500 dark:text-gray-100"
                                    }`}
                                  >
                                    {day}
                                  </p>
                                ) : null}
                              </div>
                            </td>
                          );
                        })}
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="flex justify-between w-full uppercase">
        <div className="flex items-center gap-2 font-mono shadow-lg rounded px-2 py-1.5 dark:bg-gray-800 bg-white dark:text-gray-100 text-gray-800">
          <div className="bg-red-500 text-white text-xs rounded w-5 h-5 flex items-center justify-center">
            4
          </div>
          Danger
        </div>
        <div className="flex items-center gap-2 font-mono shadow-lg rounded px-2 py-1.5 dark:bg-gray-800 bg-white dark:text-gray-100 text-gray-800">
          <div className="bg-green-500 text-white text-xs rounded w-5 h-5 flex items-center justify-center">
            8
          </div>
          Lucky
        </div>
        <div className="flex items-center gap-2 font-mono shadow-lg rounded px-2 py-1.5 dark:bg-gray-800 bg-white dark:text-gray-100 text-gray-800">
          <div className="bg-blue-500 text-white text-xs rounded w-5 h-5 flex items-center justify-center">
            3
          </div>
          Good
        </div>
      </div>
    </div>
  );
};
