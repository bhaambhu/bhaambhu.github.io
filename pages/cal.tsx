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

function Calendar() {
  return (
    <div className="flex items-center justify-center min-h-screen w-full from-red-100 via-red-300 to-red-500 bg-gradient-to-br">
      <div className="w-full max-w-lg p-6 mx-auto bg-white rounded-2xl shadow-xl flex flex-col">
        <div className="flex justify-between pb-4">
          <div className="-rotate-90 cursor-pointer">
            <svg
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.001 6L6.00098 1L1.00098 6"
                stroke="black"
                stroke-opacity="0.4"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <span className="uppercase text-sm font-semibold text-gray-600">
            january - 2022
          </span>
          <div className="rotate-90 cursor-pointer">
            <svg
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.001 6L6.00098 1L1.00098 6"
                stroke="black"
                stroke-opacity="0.4"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="flex justify-between font-medium uppercase text-xs pt-4 pb-2 border-t">
          <div className="px-3 border rounded-sm w-14 h-5 flex items-center justify-center border-red-500 text-red-500 shadow-md">
            sun
          </div>

          <span className="px-3 border rounded-sm w-14 h-5 flex items-center justify-center border-green-500 text-green-500 shadow-md">
            mon
          </span>

          <span className="px-3 border rounded-sm w-14 h-5 flex items-center justify-center border-green-500 text-green-500 shadow-md">
            tue
          </span>

          <span className="px-3 border rounded-sm w-14 h-5 flex items-center justify-center border-green-500 text-green-500 shadow-md">
            wed
          </span>

          <span className="px-3 border rounded-sm w-14 h-5 flex items-center justify-center border-green-500 text-green-500 shadow-md">
            thu
          </span>

          <span className="px-3 border rounded-sm w-14 h-5 flex items-center justify-center border-green-500 text-green-500 shadow-md">
            fri
          </span>

          <span className="px-3 border rounded-sm w-14 h-5 flex items-center justify-center border-green-500 text-green-500 shadow-md">
            sat
          </span>
        </div>

        <div className="flex justify-between font-medium text-sm pb-2">
          <span className="px-1 text-gray-400 w-14 flex justify-center items-center">
            30
          </span>

          <span className="px-1 text-gray-400 w-14 flex justify-center items-center">
            31
          </span>

          <span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
            01
          </span>

          <span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
            02
          </span>

          <span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
            03
          </span>

          <span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
            04
          </span>

          <span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
            05
          </span>
        </div>
        <div className="flex justify-between font-medium text-sm pb-2">
          <span className="px-1 w-14 flex justify-center items-center border border-red-500 text-red-500 cursor-pointer">
            06
          </span>

          <span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
            07
          </span>

          <span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
            08
          </span>

          <span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
            09
          </span>

          <span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
            10
          </span>

          <span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
            11
          </span>

          <span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
            12
          </span>
        </div>

        <div className="flex justify-between font-medium text-sm pb-2">
          <span className="px-1 w-14 flex justify-center items-center border border-red-500 text-red-500 cursor-pointer">
            13
          </span>

          <span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
            14
          </span>

          <span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
            15
          </span>

          <span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
            16
          </span>

          <span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
            17
          </span>

          <span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
            18
          </span>

          <span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
            19
          </span>
        </div>

        <div className="flex justify-between font-medium text-sm pb-2">
          <span className="px-1 w-14 flex justify-center items-center border border-red-500 text-red-500 cursor-pointer">
            20
          </span>

          <span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
            21
          </span>

          <span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
            22
          </span>

          <span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
            23
          </span>

          <span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
            24
          </span>

          <span className="px-1 w-14 flex justify-center items-center border border-green-500 text-white bg-green-500 rounded-2xl cursor-pointer shadow-md">
            25
          </span>

          <span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
            26
          </span>
        </div>

        <div className="flex justify-between font-medium text-sm pb-2">
          <span className="px-1 w-14 flex justify-center items-center border border-red-500 text-red-500 cursor-pointer">
            27
          </span>

          <span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
            28
          </span>

          <span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
            29
          </span>

          <span className="px-1 w-14 flex justify-center items-center border hover:border-green-500 hover:text-green-500 cursor-pointer">
            30
          </span>

          <span className="px-1 text-gray-400 w-14 flex justify-center items-center">
            01
          </span>

          <span className="px-1 text-gray-400 w-14 flex justify-center items-center">
            02
          </span>

          <span className="px-1 text-gray-400 w-14 flex justify-center items-center">
            03
          </span>
        </div>
      </div>
    </div>
  );
}

const isSpecialDate = (date: Date) => {
  // Format date to dd-mm-yyyy
  const day = date.getDate();
  const month = date.getMonth() + 1; // Months are 0-based in JavaScript
  const year = date.getFullYear();

  // Sum digits of day, month, and year
  const sumDigits = (num: Number) =>
    String(num)
      .split("")
      .reduce((sum, digit) => sum + parseInt(digit, 10), 0);

  let totalSum = sumDigits(day) + sumDigits(month) + sumDigits(year);

  // Reduce the sum to a single digit
  while (totalSum >= 10) {
    totalSum = sumDigits(totalSum);
  }

  return totalSum === 4;
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
    <div className="flex items-center justify-center py-8 px-4">
      <div className="max-w-sm w-full shadow-lg">
        <div className="md:p-8 p-5 dark:bg-gray-800 bg-white rounded-t">
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
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
                          const isSpecial = day && isSpecialDate(currentDate);
                          return (
                            <td key={dayIndex} className="pt-6">
                              <div className="px-2 py-2 cursor-pointer flex w-full justify-center">
                                {day ? (
                                  <p
                                    className={`text-base font-medium ${
                                      isSpecial
                                        ? "bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
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
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
                  stroke-width="1.5"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
