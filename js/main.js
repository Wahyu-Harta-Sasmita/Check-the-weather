const weatherApi = 'http://api.weatherapi.com/v1/current.json?key=6dcda5a175c640d2b9c23239242301&q=London&aqi=no';

const keyword = document.querySelector(".keyword");
const btnSearch = document.querySelector(".btn-search");
const container = document.getElementById("container");

btnSearch.onclick = () => {
    fetch(`${weatherApi}&q=${keyword.value}`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);

            let element = "";

            element = showElements(data);

            container.innerHTML = element;
        });
}

function showElements(data) {
    return `<h2>${data.location.name}, ${data.location.region}, ${data.location.country}</h2>
    <div class="content">
        <img src="https:${data.current.condition.icon}" alt="icon-cloud">
        <p>${data.current.temp_c} ℃</p>
    </div>
    <p>${data.current.last_updated}</p>
    <p>${data.current.condition.text}</p>`;
}