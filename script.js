const container = document.createElement("div");
container.classList.add("container",);
document.body.append(container);

const box = document.createElement("div");
box.classList.add("row");
container.append(box);

async function getCountryWeather() {

    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    for (countries of data) {
        const response2 = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${countries.latlng[0]}&lon=${countries.latlng[1]}&appid=fbb352a417c0f980535df5d4a273be35&units=metric`
        );
        const data2 = await response2.json();
        const card = document.createElement("div");
        card.classList.add("card", "text-center", "col-sm-12", "col-lg-4");
        box.append(card);

        const header = document.createElement("H1");
        header.setAttribute("id", "title");
        header.classList.add("text-center");
        header.innerHTML = `${countries.name.common}`;
        card.append(header);

        const img = document.createElement("img");
        img.setAttribute("src", `${countries.flags.png}`)
        card.append(img);
        const para = document.createElement("p");
        para.classList.add("card-body");
        para.innerText = `Weather:${data2.weather[0].description}
Temperature:${data2.main.temp}
Wind Speed:${data2.wind.speed}
Pressure:${data2.main.pressure}
`;
        card.append(para);
        

        }
    }

    getCountryWeather();


