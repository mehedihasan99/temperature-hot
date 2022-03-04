const API_key = `04bd46c4110812f769d6450fdf9a27ad`;
const searchTemperature = () =>{
    const cityName = document.getElementById("city-name").value ;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_key}&units=metric`;
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data));
}
const setInnerText = (id, text) =>{
    document.getElementById(id).innerText = text;
}
const displayTemperature = (temperature) =>{
    console.log(temperature);
    setInnerText("city", temperature.name);
    setInnerText('temp', temperature.main.temp);
    setInnerText('cloud', temperature.weather[0].main)
    // set icon
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const iconImg = document.getElementById("iconImg");
    iconImg.setAttribute('src', url);
}