window.addEventListener("load", () => {
    const form = document.getElementById("weather-form");
    const input = document.getElementById("weather-input");
    const submit = document.getElementById("weather-submit");
    // const output_el = document.querySelector(".output");
    const city = document.querySelector('.city');
    const temp = document.querySelector('.temp');
    const temp_status = document.querySelector('.temp-status');



    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const cityValue = input.value;

        if (cityValue == "") {
            alert("Please enter a city name");
            return;
        }

        const weatherCheck = async () => {

            let response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityValue + "&appid=5d44f90ca00905d2ec7bfdb8bce56e6b")

            let answer = await response.json();

            return answer;
        }

        (async () => {

            let x = await weatherCheck();
            console.log(x);

            city.innerText = `${x.name}, ${x.sys.country}`;
            temp.innerText = `${Math.floor(Math.round(x.main.temp-273.15))}°C`;

            let temp_mood = x.weather[0].main;
            
            if(temp_mood == "Clear"){
                temp_status.innerHTML = `<i class="fa-solid fa-sun " style="color: #e7ca0d;"></i>`;
            }
            else if (temp_mood == "Rain") {
                tempStatus.innerHTML = `<i class="fa-solid fa-cloud-showers-heavy" style="color: #bdbdbd;"></i>`;
            }
            else if (temp_mood == "Mist") {
                tempStatus.innerHTML = `<i class="fa-solid fa-cloud-showers-heavy" style="color: #bdbdbd;"></i>`;
            }
            else if (temp_mood == "Clouds") {
                tempStatus.innerHTML = `<i class="fa-solid fa-cloud " style="color: #f2f2f2;"></i>`;
            }
            else if (temp_mood == "Haze") {
                tempStatus.innerHTML = `<i class="fa-solid fa-smog " style="color: #f2f2f2;"></i>`;
            }



        })();


        // let box_el = document.createElement('div');
        // box_el.classList.add('box');
        // output_el.appendChild(box_el);
    
        // let h2_el = document.createElement('h2');
        // h2_el.classList.add('city');
        // h2_el.innerText = "Delhi, IN"
        // box_el.appendChild(h2_el);

        // let inner_el = document.createElement('div');
        // inner_el.classList.add('inner');
        // box_el.appendChild(inner_el);

        // let temp_el = document.createElement('span');
        // temp_el.classList.add('temp');
        // temp_el.innerText = "19C";
        // inner_el.appendChild(temp_el);

        // let temp_status_el = document.createElement('span');
        // temp_status_el.classList.add('temp-status')
        // temp_status_el.innerText = "Cloud";
        // inner_el.appendChild(temp_status_el);


        input.value = "";
    })


})