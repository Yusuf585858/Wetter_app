let outputTime = document.getElementById("outputTime");
let outputWind = document.getElementById("outputWind");
let outputWind2 = document.getElementById("outputWind2");
let outputCloud = document.getElementById("outputCloud");
let outputPressure = document.getElementById("outputPressure");
let outputHumidity = document.getElementById("outputHumidity");
let outputSunrise = document.getElementById("outputSunrise");
let outputSunset = document.getElementById("outputSunset");
let outputGeo = document.getElementById("outputGeo");
let outputGeo2 = document.getElementById("outputGeo2");
let outputDes = document.getElementById("description");
let image = document.getElementById("image");

function suchen() {
    let input = document.getElementById("inputCity").value;




    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=a18dc3c27f68e4fdaa6bc399f8e93c76`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            image.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            //image.innerHTML = image.src;

            des = data.weather[0].description;
            outputDes.innerHTML = des;

            geo = data.coord.lat;
            geo2 = data.coord.lon;
            outputGeo.innerHTML = geo;
            outputGeo2.innerHTML = geo2;

            wind = data.wind.speed;
            wind2 = data.wind.deg;
            outputWind.innerHTML = wind;
            outputWind2.innerHTML = wind2;

            pressure = data.main.pressure;
            outputPressure.innerHTML = pressure + " hpa";

            humidity = data.main.humidity;
            outputHumidity.innerHTML = humidity + " %";

            cloud = data.weather[0].description;
            outputCloud.innerHTML = cloud;

            outputSunrise.innerHTML = (new Date(data.sys.sunrise * 1000 + data.timezone * 1000 - 3600 * 1000)).toLocaleTimeString(data.sys.country);

            outputSunset.innerHTML = (new Date(data.sys.sunset * 1000 + data.timezone * 1000 - 3600 * 1000)).toLocaleTimeString(data.sys.country);

            localTime = new Date().getTime();//von utc+1 auf utc==>data timezone in sek
            let allTime = new Date(localTime - 3600 * 1000 + data.timezone * 1000);
            outputTime.innerHTML = allTime.toLocaleTimeString() + allTime.toLocaleDateString();




        });

}