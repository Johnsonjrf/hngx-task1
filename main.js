const utcTimeElementag = document.querySelector(".currentUtcTime");//the html tag to display the utc time
const dayOfTheWeekTag = document.querySelector(".day");//the html tag to display the day of the week
const toggleSwitch = document.querySelector(".switcher");


const days = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");//an array of days


// give current UTC time and day of the week in real-time at an interval of 1s
setInterval(() => {
    // get current UTC time
    const currentUtcTime = Math.floor(new Date().getTime()/1000)
    // get current day method that returns the digit of the day
    var day = new Date().getDay()
    //display the current day in a tag
    dayOfTheWeekTag.innerHTML = days[day]
    //display the current UTC time in a tag
    utcTimeElementag.innerHTML = currentUtcTime
    
    
}, 1000);

// toggle the theme mode
toggleSwitch.addEventListener("click", () => {
    document.body.classList.toggle("theme");

    if(localStorage.getItem("themeMode") == "light") {
        localStorage.setItem("themeMode", "dark")
    } else {
        localStorage.setItem("themeMode", "light")
    }
})

// Local storage to store data
if (localStorage.getItem("themeMode") == "light") {//remove the lightmode if it is already in lightmode
    document.body.classList.remove("theme")
} else if (localStorage.getItem("themeMode") == "dark") { //remove the darkmode if it is already in lightmode
    document.body.classList.add("theme")
} else { //otherwise set it to darkmode by default
    localStorage.setItem("themeMode", "light")
}


