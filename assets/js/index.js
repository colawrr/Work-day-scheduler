const today = moment().format('LLLL');
      document.getElementById("currentDay").innerHTML = today;

      localStorage.setItem("task","");
document.getElementById("text").innerHTML = localStorage.getItem("task");

if (typeof(Storage) !== "undefined") {
      // Store
      localStorage.setItem("inputText", "");
      // Retrieve
      document.getElementById("text").innerHTML = localStorage.getItem("/");
    }