import React, { useState } from "react";

export default function Cal() {
  const [currentMonth, setCurrentMonth] = useState(
    new Date(new Date().getFullYear(), new Date().getMonth(), 1)
  );
  return (
    <div className=" h-full min-h-full absolute w-full flex justify-center items-center dark:bg-gray-400">
      <div className=" w-full flex items-center justify-center">
        {/* <Calendar /> */}
        <Calendar2
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

const Calendar2 = ({
  currentMonth,
  setCurrentMonth,
}: {
  currentMonth: Date;
  setCurrentMonth: React.Dispatch<React.SetStateAction<Date>>;
}) => {
  const calendarDate = new Date(currentMonth);
  const monthYear = getMonthYear(calendarDate);
  const calendarDays = generateCalendarDays(calendarDate);

  return (
    <div className="flex items-center justify-center py-8 px-4 ">
      <div className="max-w-sm w-full shadow-lg">
        <div className="md:p-8 p-5 dark:bg-gray-800 bg-white rounded min-w-[430px] flex-shrink">
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
                  {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day) => (
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
                              <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
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
    </div>
  );
};

function Calendar3() {
  return (
    <div className="flex items-center justify-center py-8 px-4">
      <div className="max-w-sm w-full shadow-lg">
        <div className="md:p-8 p-5 dark:bg-gray-800 bg-white rounded-t">
          <div className="px-4 flex items-center justify-between">
            <span
              tabIndex={0}
              className="focus:outline-none  text-base font-bold dark:text-gray-100 text-gray-800"
            >
              October 2020
            </span>
            <div className="flex items-center">
              <button
                aria-label="calendar backward"
                className="focus:text-gray-400 hover:text-gray-400 text-gray-800 dark:text-gray-100"
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
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler  icon-tabler-chevron-right"
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
                  <th>
                    <div className="w-full flex justify-center">
                      <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                        Mo
                      </p>
                    </div>
                  </th>
                  <th>
                    <div className="w-full flex justify-center">
                      <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                        Tu
                      </p>
                    </div>
                  </th>
                  <th>
                    <div className="w-full flex justify-center">
                      <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                        We
                      </p>
                    </div>
                  </th>
                  <th>
                    <div className="w-full flex justify-center">
                      <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                        Th
                      </p>
                    </div>
                  </th>
                  <th>
                    <div className="w-full flex justify-center">
                      <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                        Fr
                      </p>
                    </div>
                  </th>
                  <th>
                    <div className="w-full flex justify-center">
                      <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                        Sa
                      </p>
                    </div>
                  </th>
                  <th>
                    <div className="w-full flex justify-center">
                      <p className="text-base font-medium text-center text-gray-800 dark:text-gray-100">
                        Su
                      </p>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="pt-6">
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                  </td>
                  <td className="pt-6">
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center"></div>
                  </td>
                  <td className="pt-6">
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                        1
                      </p>
                    </div>
                  </td>
                  <td className="pt-6">
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                        2
                      </p>
                    </div>
                  </td>
                  <td className="pt-6">
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100">
                        3
                      </p>
                    </div>
                  </td>
                  <td className="pt-6">
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100">
                        4
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                        5
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                        6
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                        7
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="w-full h-full">
                      <div className="flex items-center justify-center w-full rounded-full cursor-pointer">
                        <a
                          role="link"
                          tabIndex={0}
                          className="focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-indigo-500 hover:bg-indigo-500 text-base w-8 h-8 flex items-center justify-center font-medium text-white bg-indigo-700 rounded-full"
                        >
                          8
                        </a>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                        9
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100">
                        10
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100">
                        11
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                        12
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                        13
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                        14
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                        15
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                        16
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100">
                        17
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100">
                        18
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                        19
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                        20
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                        21
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                        22
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                        23
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100">
                        24
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100">
                        25
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                        26
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                        27
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                        28
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                        29
                      </p>
                    </div>
                  </td>
                  <td>
                    <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                      <p className="text-base text-gray-500 dark:text-gray-100 font-medium">
                        30
                      </p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}