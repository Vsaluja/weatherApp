
const form = document.getElementById("form");
const input = document.getElementById("input");
const submit = document.getElementById("submit");
const display = document.getElementById("display");
const tempStatus = document.querySelector(".temp-status")
const cityName = document.querySelector(".city")
const temp = document.querySelector(".temp")

// Shows current weather of my city halifax
window.addEventListener("load", () => {
    const weather = async () => {
        let response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=halifax&appid=5d44f90ca00905d2ec7bfdb8bce56e6b")
        let answer = await response.json();

        return answer;
    }

    (async () => {
        let x = await weather();

        cityName.innerText = `${x.name}, ${x.sys.country}`
        temp.innerText = `${Math.floor(Math.round(x.main.temp - 273.15))}°C`

        let tempMood = x.weather[0].main;

        console.log(tempMood);
        if (tempMood == "Clear") {
            tempStatus.innerHTML = `<i class="fa-solid fa-sun " style="color: #e7ca0d;"></i>`;
        }
        else if (tempMood == "Rain") {
            tempStatus.innerHTML = `<i class="fa-solid fa-cloud-showers-heavy" style="color: #bdbdbd;"></i>`;
        }
        else if (tempMood == "Mist") {
            tempStatus.innerHTML = `<i class="fa-solid fa-cloud-showers-heavy" style="color: #bdbdbd;"></i>`;
        }
        else if (tempMood == "Clouds") {
            tempStatus.innerHTML = `<i class="fa-solid fa-cloud " style="color: #f2f2f2;"></i>`;
        }
        else if (tempMood == "Haze") {
            tempStatus.innerHTML = `<i class="fa-solid fa-smog " style="color: #f2f2f2;"></i>`;
        }

    })();

})

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let city = input.value;

    if (input.value == "") {
        alert("Please enter name of a city");
    }

    else {



        const weather = async () => {
            let response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=5d44f90ca00905d2ec7bfdb8bce56e6b")
            let answer = await response.json();

            return answer;
        }
        // let iHTML = "";

        (async () => {
            let x = await weather();
            console.log(x);



            // iHTML = iHTML + `

            // <div class="container-fluid output-container">

            // <div class="row justify-content-center">
            // <div class="col-12 col-lg-8">
            // <div class="output">
            // <p class="city">${x.name}, ${x.sys.country}</p>
            // <span class="temp">${Math.floor(Math.round(x.main.temp-273.15))}°C</span>
            // <span class="temp-status"></span>
            // </div>
            // </div>
            // </div>
            // </div>
            // `

            // Above code wasn't working with the cloud and sunny icons

            cityName.innerText = `${x.name}, ${x.sys.country}`
            temp.innerText = `${Math.floor(Math.round(x.main.temp - 273.15))}°C`

            let tempMood = x.weather[0].main;

            console.log(tempMood);
            if (tempMood == "Clear") {
                tempStatus.innerHTML = `<i class="fa-solid fa-sun " style="color: #e7ca0d;"></i>`;
            }
            else if (tempMood == "Rain") {
                tempStatus.innerHTML = `<i class="fa-solid fa-cloud-showers-heavy" style="color: #fff;"></i>`;
            }
            else if (tempMood == "Mist") {
                tempStatus.innerHTML = `<i class="fa-solid fa-cloud-showers-heavy" style="color: #fff;"></i>`;
            }
            else if (tempMood == "Clouds") {
                tempStatus.innerHTML = `<i class="fa-solid fa-cloud " style="color: #fff;"></i>`;
            }
            else if (tempMood == "Haze") {
                tempStatus.innerHTML = `<i class="fa-solid fa-smog " style="color: #fff;"></i>`;
            }



            // display.innerHTML = iHTML;

        })();




        input.value = "";
    }

})