// const calculateDaysBetweenDates = (d1,d2)=>{
//    let day1 = new Date (d1);
//    let day2 = new Date(d2);

//    let diff = Math.abs(day1-day2);

//    return diff/ (24*60*60*1000)
// }

// method 2

// const calculateDaysBetweenDates = (d1,d2)=>{
//     let day1 = new Date(d1);
//     let day2 = new Date(d2);

//     let totalDay = day2- day1;
//     // console.log(totalDay);

//     let diffDate = totalDay / (1000*3600*24)
//     // console.log(diffDate);
//     return diffDate;

// }

// calculate weeks

const calculateDaysBetweenDates = (d1,d2) => {
  let day1 = new Date(d1);
  let day2 = new Date(d2);

  let totalDay = Math.abs(day1-day2);

//   let Diff = totalDay/ (1000*3600*24*7);
let Diff = totalDay / (24*60*60*1000*7)
  return Diff;
};

console.log(calculateDaysBetweenDates("2024-01-01", "2024-01-31"));



// 24: This represents the number of hours in a day.
// 60: This represents the number of minutes in an hour.
// 60: This represents the number of seconds in a minute.
// 1000: This represents the number of milliseconds in a second.
// 7: This represents the number of days in a week.
// When you multiply these together, you get the total num

// 1000: This represents the number of milliseconds in a second.
// 3600: This represents the number of seconds in an hour. It's calculated as 
// 60
//  seconds/minute
// ×
// 60
//  minutes/hour
// =
// 3600
//  seconds/hour
// 60 seconds/minute×60 minutes/hour=3600 seconds/hour.
// 24: This represents the number of hours in a day.
