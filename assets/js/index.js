
const nineAM = document.getElementById('9am');
const tenAM = document.getElementById('10am');
const elevenAM = document.getElementById('11am');
const twelvePM = document.getElementById('12pm');
const onePM = document.getElementById('1pm');
const twoPM = document.getElementById('2pm');
const threePM = document.getElementById('3pm');
const fourPM = document.getElementById('4pm');
const fivePM = document.getElementById('5pm');

// Local storage for content
const saveNine = document.getElementById('saveNine');
const saveNineField = () => {
  let nineAMText = nineAM.value;
  localStorage.setItem("nine", nineAMText);
  console.log(localStorage.getItem("nine"));
}
saveNine.addEventListener("click", saveNineField);

const saveTen = document.getElementById('saveTen');
const saveTenField = () => {
  let tenAMText = tenAM.value;
  localStorage.setItem("ten", tenAMText);
  console.log(localStorage.getItem("ten"));
}
saveTen.addEventListener("click", saveTenField);

const saveEleven = document.getElementById('saveEleven');
const saveElevenField = () => {
  let elevenAMText = elevenAM.value;
  localStorage.setItem("eleven", elevenAMText);
  console.log(localStorage.getItem("eleven"));
}
saveEleven.addEventListener("click", saveElevenField);

const saveTwelve = document.getElementById('saveTwelve');
const saveTwelveField = () => {
  let twelvePMText = twelvePM.value;
  localStorage.setItem("twelve", twelvePMText);
}
saveTwelve.addEventListener("click", saveTwelveField);

const saveOne = document.getElementById('saveOne');
const saveOneField = () => {
  let onePMText = onePM.value;
  localStorage.setItem("one", onePMText);
  console.log(localStorage.getItem("one"));
}
saveOne.addEventListener("click", saveOneField);

const saveTwo = document.getElementById('saveTwo');
const saveTwoField = () => {
  let twoPMText = twoPM.value;
  localStorage.setItem("two", twoPMText);
  console.log(localStorage.getItem("two"));
}
saveTwo.addEventListener("click", saveTwoField);

const saveThree = document.getElementById('saveThree');
const saveThreeField = () => {
  let threePMText = threePM.value;
  localStorage.setItem("three", threePMText);
  console.log(localStorage.getItem("three"));
}
saveThree.addEventListener("click", saveThreeField);

const saveFour = document.getElementById('saveFour');
const saveFourField = () => {
  let fourPMText = fourPM.value;
  localStorage.setItem("four", fourPMText);
  console.log(localStorage.getItem("four"));
}
saveFour.addEventListener("click", saveFourField);

const saveFive = document.getElementById('saveFive');
const saveFiveField = () => {
  let fivePMText = fivePM.value;
  localStorage.setItem("five", fivePMText);
  console.log(localStorage.getItem("five"));
}
saveFive.addEventListener("click", saveFiveField);


let toDoList = [];

const initPlanner = () => {
      updateContent();
      getDateAndTime();
      checkTimes();
}

// function to display current date and time
const getDateAndTime = () => {
     let today = moment().format('LLLL');
      document.getElementById("currentDay").innerHTML = today;
} 


      const updateContent = () => {
            nineAM.innerHTML = localStorage.getItem("nine");
            tenAM.innerHTML = localStorage.getItem("ten");
            elevenAM.innerHTML = localStorage.getItem("eleven");
            twelvePM.innerHTML = localStorage.getItem("twelve");
            onePM.innerHTML = localStorage.getItem("one");
            twoPM.innerHTML = localStorage.getItem("two");
            threePM.innerHTML = localStorage.getItem("three");
            fourPM.innerHTML = localStorage.getItem("four");
            fivePM.innerHTML = localStorage.getItem("five");
          }
          
          const checkTimes = () => {
            let currentTime = moment().hour();
            if (currentTime >= 9 && currentTime < 10) {
              nineAM.style.background = "#ff6961";
            }
            else if (currentTime <9) {
                  nineAM.style.background = "#77dd77";
                  tenAM.style.background = "#77dd77";
                  elevenAM.style.background = "#77dd77";
                  twelvePM.style.background = "#77dd77";
                  onePM.style.background = "#77dd77";
                  twoPM.style.background = "#77dd77";
                  threePM.style.background = "#77dd77";
                  fourPM.style.background = "#77dd77";
                  fivePM.style.background = "#77dd77";
            }
            else if (currentTime >= 10 && currentTime < 11) {
              nineAM.style.background = "#d3d3d3";
              nineAM.setAttribute("readonly", true);
              tenAM.style.background = "#ff6961";
            }
            else if (currentTime <10) {
                  tenAM.style.background = "#77dd77";
                  elevenAM.style.background = "#77dd77";
                  twelvePM.style.background = "#77dd77";
                  onePM.style.background = "#77dd77";
                  twoPM.style.background = "#77dd77";
                  threePM.style.background = "#77dd77";
                  fourPM.style.background = "#77dd77";
                  fivePM.style.background = "#77dd77";
            }

            else if (currentTime >= 11 && currentTime < 12) {
              nineAM.style.background = "#d3d3d3";
              nineAM.setAttribute("readonly", true);
              tenAM.style.background = "#d3d3d3";
              tenAM.setAttribute("readonly", true);
              elevenAM.style.background = "#ff6961";
            }
            else if (currentTime <11) {
                  elevenAM.style.background = "#77dd77";
                  twelvePM.style.background = "#77dd77";
                  onePM.style.background = "#77dd77";
                  twoPM.style.background = "#77dd77";
                  threePM.style.background = "#77dd77";
                  fourPM.style.background = "#77dd77";
                  fivePM.style.background = "#77dd77";
            }

            else if (currentTime >= 12 && currentTime < 13) {
              nineAM.style.background = "#d3d3d3";
              nineAM.setAttribute("readonly", true);
              tenAM.style.background = "#d3d3d3";
              tenAM.setAttribute("readonly", true);
              elevenAM.style.background = "#d3d3d3";
              elevenAM.setAttribute("readonly", true);
              twelvePM.style.background = "#ff6961";
            }
            else if (currentTime <12) {
                  twelvePM.style.background = "#77dd77";
                  onePM.style.background = "#77dd77";
                  twoPM.style.background = "#77dd77";
                  threePM.style.background = "#77dd77";
                  fourPM.style.background = "#77dd77";
                  fivePM.style.background = "#77dd77";
            }

            else if (currentTime >= 13 && currentTime < 14) {
              nineAM.style.background = "#d3d3d3";
              nineAM.setAttribute("readonly", true);
              tenAM.style.background = "#d3d3d3";
              tenAM.setAttribute("readonly", true);
              elevenAM.style.background = "#d3d3d3";
              elevenAM.setAttribute("readonly", true);
              twelvePM.style.background = "#d3d3d3";
              twelvePM.setAttribute("readonly", true);
              onePM.style.background = "#ff6961";
            }

            else if (currentTime <13) {
                  onePM.style.background = "#77dd77";
                  twoPM.style.background = "#77dd77";
                  threePM.style.background = "#77dd77";
                  fourPM.style.background = "#77dd77";
                  fivePM.style.background = "#77dd77";
            }

            else if (currentTime >= 14 && currentTime < 15) {
              nineAM.style.background = "#d3d3d3";
              nineAM.setAttribute("readonly", true);
              tenAM.style.background = "#d3d3d3";
              tenAM.setAttribute("readonly", true);
              elevenAM.style.background = "#d3d3d3";
              elevenAM.setAttribute("readonly", true);
              twelvePM.style.background = "#d3d3d3";
              twelvePM.setAttribute("readonly", true);
              onePM.style.background = "#d3d3d3";
              onePM.setAttribute("readonly", true);
              twoPM.style.background = "#ff6961";
            }

            else if (currentTime <14) {
                  twoPM.style.background = "#77dd77";
                  threePM.style.background = "#77dd77";
                  fourPM.style.background = "#77dd77";
                  fivePM.style.background = "#77dd77";
            }

            else if (currentTime >= 15 && currentTime < 16) {
              nineAM.style.background = "#d3d3d3";
              nineAM.setAttribute("readonly", true);
              tenAM.style.background = "#d3d3d3";
              tenAM.setAttribute("readonly", true);
              elevenAM.style.background = "#d3d3d3";
              elevenAM.setAttribute("readonly", true);
              twelvePM.style.background = "#d3d3d3";
              twelvePM.setAttribute("readonly", true);
              onePM.style.background = "#d3d3d3";
              onePM.setAttribute("readonly", true);
              twoPM.style.background = "#d3d3d3";
              twoPM.setAttribute("readonly", true);
              threePM.style.background = "#ff6961";
            }

            else if (currentTime <15) {
                  threePM.style.background = "#77dd77";
                  fourPM.style.background = "#77dd77";
                  fivePM.style.background = "#77dd77";
            }

            else if (currentTime >= 16 && currentTime < 17) {
              nineAM.style.background = "#d3d3d3";
              nineAM.setAttribute("readonly", true);
              tenAM.style.background = "#d3d3d3";
              tenAM.setAttribute("readonly", true);
              elevenAM.style.background = "#d3d3d3";
              elevenAM.setAttribute("readonly", true);
              twelvePM.style.background = "#d3d3d3";
              twelvePM.setAttribute("readonly", true);
              onePM.style.background = "#d3d3d3";
              onePM.setAttribute("readonly", true);
              twoPM.style.background = "#d3d3d3";
              twoPM.setAttribute("readonly", true);
              threePM.style.background = "#d3d3d3";
              threePM.setAttribute("readonly", true);
              fourPM.style.background = "#ff6961";
            }

            else if (currentTime <16) {
                  fourPM.style.background = "#77dd77";
                  fivePM.style.background = "#77dd77";
            }

            else if (currentTime >= 17 && currentTime < 18) {
              nineAM.style.background = "#d3d3d3";
              nineAM.setAttribute("readonly", true);
              tenAM.style.background = "#d3d3d3";
              tenAM.setAttribute("readonly", true);
              elevenAM.style.background = "#d3d3d3";
              elevenAM.setAttribute("readonly", true);
              twelvePM.style.background = "#d3d3d3";
              twelvePM.setAttribute("readonly", true);
              onePM.style.background = "#d3d3d3";
              onePM.setAttribute("readonly", true);
              twoPM.style.background = "#d3d3d3";
              twoPM.setAttribute("readonly", true);
              threePM.style.background = "#d3d3d3";
              threePM.setAttribute("readonly", true);
              fourPM.style.background = "#d3d3d3";
              fourPM.setAttribute("readonly", true);
              fivePM.style.background = "#ff6961";
            }

            else if (currentTime <17) {
                  fivePM.style.background = "#77dd77";
            }

            else if (currentTime >= 18) {
              nineAM.style.background = "#d3d3d3";
              nineAM.setAttribute("readonly", true);
              tenAM.style.background = "#d3d3d3";
              tenAM.setAttribute("readonly", true);
              elevenAM.style.background = "#d3d3d3";
              elevenAM.setAttribute("readonly", true);
              twelvePM.style.background = "#d3d3d3";
              twelvePM.setAttribute("readonly", true);
              onePM.style.background = "#d3d3d3";
              onePM.setAttribute("readonly", true);
              twoPM.style.background = "#d3d3d3";
              twoPM.setAttribute("readonly", true);
              threePM.style.background = "#d3d3d3";
              threePM.setAttribute("readonly", true);
              fourPM.style.background = "#d3d3d3";
              fourPM.setAttribute("readonly", true);
              fivePM.style.background = "#d3d3d3";
              fivePM.setAttribute("readonly", true);
            }
          
          }
          
          initPlanner();


