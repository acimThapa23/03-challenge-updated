const form = document.getElementsByClassName("form-control")[0];
const labels = document.querySelectorAll("label");
const btn = document.getElementsByClassName("btn")[0];
const yearResult = document.querySelectorAll("h1")[0];
const monthResult = document.querySelectorAll("h1")[1];
const dayResult = document.querySelectorAll("h1")[2];
const year = document.getElementById("year");
const month = document.getElementById("month");
const day = document.getElementById("day");

//new varaible for assigning user provided values to an object
let dateStr = {};
let isError = false;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let validMonth = checkError(month);
  let validYear = checkError(year);
  let validDay = checkError(day);

  if (!validMonth && !validYear && !validDay) {
    dateStr = {
      day: day.value,
      month: month.value,
      year: year.value,
    };

    if (dateStr.month > 12 || dateStr.day > 31) {
      isError = true;
      return;
      // yearResult.querySelector("span").innerText = "--";
      // monthResult.querySelector("span").innerText = "--";
      // dayResult.querySelector("span").innerText = "--";
    }

    const dates = new Date(dateStr.year, dateStr.month, dateStr.day);
    const today = new Date();
    const yearOutput = today.getFullYear() - dates.getFullYear();
    const monthOutput = today.getMonth() - dates.getMonth();
    const dayOutput = today.getDate() - dates.getDate();

    yearResult.querySelector("span").innerHTML = yearOutput;
    monthResult.querySelector("span").innerHTML = monthOutput + 1;
    dayResult.querySelector("span").innerHTML = dayOutput;

    // console.log(new Date("2012", 2, 2));
  } else {
    return;
  }
  console.log("hi");
});

///function to check error and error handling
function checkError(element) {
  if (element.value === "" || isError) {
    element.classList.add("error");
    element.previousElementSibling.classList.add("show-alert");
    // const elementWithAlert = element.classList.contains("error");
    element.nextElementSibling.classList.add("show-span");
    yearResult.querySelector("span").innerText = "--";
    monthResult.querySelector("span").innerText = "--";
    dayResult.querySelector("span").innerText = "--";
    return element;
  } else {
    element.classList.remove("error");
    element.previousElementSibling.classList.remove("show-alert");
    element.nextElementSibling.classList.remove("show-span");
  }
}
