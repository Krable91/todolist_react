import React from "react";

const API_KEY = "54fa039968941dd936a6aaf91f814f80";
const COORDS = "coords";

class Weather extends React.Component {
    state = {
        temp: 0,
        place: ""
    }

    getWeather(lat, lon) {
        const {temp, place} = this.state;
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
        )
        .then(res => res.json())
        .then(json => {
            this.temp = json.main.temp;
            this.place = json.name;
            this.setState({temp, place})
            console.log(this.temp);
            console.log(this.place);
            /*weather.innerHTML = `${Math.floor(temp - 273)}°C   /    ${place}`;*/
        })
    }   
    saveCoords(coordsObj){
        localStorage.setItem(COORDS, JSON.stringify(coordsObj));
    }   
    handleGeoSucces(position){
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const coordsObj = {
            latitude,
            longitude
        };
        this.saveCoords(coordsObj);
        this.getWeather(latitude, longitude);
    }   
    askForCoords() {
        navigator.geolocation.getCurrentPosition(this.handleGeoSucces);
        console.log("askForCoords");
    }   
    loadCoords() {
        const loadedCoords = localStorage.getItem(COORDS);
        if (loadedCoords === null) {
            this.askForCoords();
        } else {
            const parseCoords = JSON.parse(loadedCoords);
            console.log(parseCoords);
            this.getWeather(parseCoords.latitude, parseCoords.longitude);
                //getWeather();
        }
    }

    componentDidMount(){
        this.loadCoords();
        console.log("componentDidMount");
    }

render() {
    return (
    <div>
        <span>{Math.floor(this.temp - 273)}°C   /    {this.place}</span>
    </div>
    )}

}

export default Weather;