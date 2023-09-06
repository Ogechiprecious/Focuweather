// ACCUWEATHER API -
const key = 'Iaosrb6TpJN4LoPVACPmGTjTsT8csGai';

// Get weather information-
const getWeather = async (id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return (data[0]);
};

// Get city API call - 
const getCity = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    // whenever you see a question mark at the end of something it means we are adding query parameters to the end od that URL.
    const query = `?apikey=${key}&q=${city}`;
    const response = await fetch(base + query);
    const data = await response.json();

    return (data[0]);
};

// getCity('lagos').then(data => {
//     return getWeather(data.Key);
// }).then (data => {
//     console.log(data)
// }).catch(err => console.log(err));

//  getWeather("4607");