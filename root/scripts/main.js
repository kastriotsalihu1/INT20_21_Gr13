var toggleDuration = 800;

window.onload = (event) => {

  try {
    plantTree(parseInt((xCoordinate.length * yCoordinate.length) / 8));
  } catch (e) {
    console.log("You can't plant trees here!");
  }
  
  $(document.body).on("click", "#hamburger", function () {
    $("nav").toggleClass("hidenav");
  });

  $("#user").on("click", function (e) {
    $("#settingdropdown").animate(
      {
        height: "toggle",
        opacity: "toggle",
      },
      "fast"
    );
  });
  const toggleSwitch = document.querySelector(
    '.theme-switch input[type="checkbox"]'
  );

  console.log(toggleSwitch);
  const currentTheme = localStorage.getItem("theme");

  if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);

    if (currentTheme === "dark_mode") {
      toggleSwitch.checked = true;
    }
  }

  //GEOLOCATION and DARKMODE BASED ON TIME
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos) {
    var crd = pos.coords;

    getSun(crd.latitude, crd.longitude).then((data) => {
      const sunrise = parseInt(data.results.sunrise.substring(11, 13));
      const sunset = parseInt(data.results.sunset.substring(11, 13));
      timedDarkMode(sunrise, sunset);
    });
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
    timedDarkMode(6, 20);
  }

  function timedDarkMode(sunrise, sunset) {
    const hours = new Date().getUTCHours();
    const isday = hours > sunrise && hours < sunset;
    darkMode(!isday);
  }

  navigator.geolocation.getCurrentPosition(success, error, options);

  async function getSun(lat, lng) {
    let response = await fetch(
      "https://api.sunrise-sunset.org/json?lat=" +
        lat +
        "&lng=" +
        lng +
        "&date=today&formatted=0"
    );
    let data = response.json();
    // console.log(response.json);
    return data;
  }
  //GEOLOCATION and DARKMODE BASED ON TIME

  function switchTheme(e) {
    darkMode(e.target.checked);
  }

  function darkMode(value) {
    if (value) {
      document.documentElement.setAttribute("data-theme", "dark_mode");
      localStorage.setItem("theme", "dark_mode");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
    toggleSwitch.checked = value;
  }

  toggleSwitch.addEventListener("change", switchTheme, false);
};
