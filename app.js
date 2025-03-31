const resultDiv = document.getElementsByClassName("weatherResult");
const getResult = document.getElementById("getWeather");
const currBtn = document.getElementById("getCurrentLocation");
const refreshBTn = document.getElementById("refreshWeather");
const forecastDiv = document.getElementsByClassName("forecast-data")[0];
const progressBar = document.getElementById("progress");
const progressMsg = document.getElementById("progress-msg");
const dataList = document.querySelector("datalist");
const input = document.querySelector("#city");

input.addEventListener("input", function () {
    const value = this.value.toLowerCase();
    dataList.innerHTML = ""; 

    if (value) {
        const filter = indianCity.filter(item => item.toLowerCase().includes(value));
        filter.forEach(item => {
            const option = document.createElement("option");
            option.value = item;
            dataList.appendChild(option);
        });
    }
});

async function getWeather(currCity = "") {
    const cityInput = document.getElementById("city").value.trim().toLowerCase();
    const city = cityInput ? cityInput : currCity;

    progressBar.style.visibility = "visible";
    progressMsg.innerText = "Fetching city";
    progressBar.setAttribute("value","33");

    if (!city) {
        progressMsg.innerText = "❌ Please enter a valid city or allow location access";
        progressBar.style.visibility = "hidden";
        return;
    }

    const getRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`);
    const getData = await getRes.json();

    progressMsg.innerText = "Fetching Data from Server";
    progressBar.setAttribute("value","66");

    if (!getData.results || getData.results.length === 0) { 
        progressMsg.innerText = "❌ Please enter a valid city or allow location access";
        progressBar.style.visibility = "hidden";
        return;
    }

    let latitude = getData.results[0].latitude;
    let longitude = getData.results[0].longitude;
    let cityName = getData.results[0].name;
    let countryName = getData.results[0].country;

    const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m&daily=temperature_2m_max,temperature_2m_min&timezone=auto&temperature_unit=celsius&windspeed_unit=kmh&precipitation_unit=mm`
    );
    const data = await response.json();

    progressMsg.innerText = "Completed";
    progressBar.setAttribute("value","100");
    setTimeout(() => {
        progressBar.style.visibility = "hidden";
        progressMsg.innerText = "";
        input.value = "";
    }, 1200);

    console.log(data);
    document.querySelector(".city-name").innerText = `${cityName} ${countryName} `;
    document.getElementById("temperature").innerText = "Temperature: " + data.current_weather.temperature + "°C";
    document.getElementById("wind-speed").innerText = "Wind Speed: " + data.current_weather.windspeed + " km/h";
    document.getElementById("humidity").innerText = "Humidity: " + data.hourly.relativehumidity_2m[0] + "%";

    forecastDiv.innerHTML = "";
    for (let i = 0; i < data.daily.time.length; i++) {
        let date = new Date(data.daily.time[i]);
        let day = date.toLocaleDateString("en-US", { weekday: "long" }); 
        forecastDiv.innerHTML += `<pre>Date: ${data.daily.time[i]} Day: ${day} Max: ${data.daily.temperature_2m_max[i]}°C Min: ${data.daily.temperature_2m_min[i]}°C</pre>`;
    }
    document.querySelector(".forecast-msg").style.visibility = "visible";
}

getResult.onclick = function () {
    getWeather();
};

function getCurrLocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
            enableHighAccuracy: true,
            maximumAge: 0,
        });
    });
}

async function fetchCurrLocation() {
    try {
        const position = await getCurrLocation();
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
        const data = await response.json();

        if (data.address && data.address.city) {
            getWeather(data.address.city); 
        } else {
            console.log("Unable to determine city from location.");
        }
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}

currBtn.onclick = function () {
    fetchCurrLocation();
};

