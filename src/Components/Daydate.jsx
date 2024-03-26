import React from "react";
function Daydate() {
  const dayName = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thrusday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const monthsName = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const waqt = new Date();
  let days = waqt.getUTCDay();
  let months = waqt.getUTCMonth();
  let dates = waqt.getUTCDate();
  let year = waqt.getUTCFullYear();
  const day = dayName[days - 1];
  const month = monthsName[months];
  return (
    <>
      <div>
        <span className="">
          {day}, {month}-{dates},{year}
        </span>
      </div>
    </>
  );
}
export default Daydate;
