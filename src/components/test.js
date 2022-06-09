const data = {
  "request": {
    "type": "City",
    "query": "New York, United States of America",
    "language": "en",
    "unit": "m"
  },
  "location": {
    "name": "New York",
    "country": "United States of America",
    "region": "New York",
    "lat": "40.714",
    "lon": "-74.006",
    "timezone_id": "America\/New_York",
    "localtime": "2022-06-08 10:30",
    "localtime_epoch": 1654684200,
    "utc_offset": "-4.0"
  },
  "current": {
    "observation_time": "02:30 PM",
    "temperature": 24,
    "weather_code": 116,
    "weather_icons": ["https:\/\/assets.weatherstack.com\/images\/wsymbols01_png_64\/wsymbol_0002_sunny_intervals.png"],
    "weather_descriptions": ["Partly cloudy"],
    "wind_speed": 22,
    "wind_degree": 290,
    "wind_dir": "WNW",
    "pressure": 1012,
    "precip": 0,
    "humidity": 60,
    "cloudcover": 50,
    "feelslike": 26,
    "uv_index": 5,
    "visibility": 16,
    "is_day": "yes"
  },
  "historical": {
    "2015-01-21": {
      "date": "2015-01-21",
      "date_epoch": 1421798400,
      "astro": {
        "sunrise": "08:15 AM",
        "sunset": "06:00 PM",
        "moonrise": "08:42 AM",
        "moonset": "07:46 PM",
        "moon_phase": "New Moon",
        "moon_illumination": 7
      },
      "mintemp": -1,
      "maxtemp": 1,
      "avgtemp": 0,
      "totalsnow": 0.3,
      "sunhour": 4.9,
      "uv_index": 2,
      "hourly": [{
        "time": "0",
        "temperature": 0,
        "wind_speed": 14,
        "wind_degree": 328,
        "wind_dir": "NNW",
        "weather_code": 113,
        "weather_icons": ["https:\/\/assets.weatherstack.com\/images\/wsymbols01_png_64\/wsymbol_0008_clear_sky_night.png"],
        "weather_descriptions": ["Clear"],
        "precip": 0,
        "humidity": 62,
        "visibility": 10,
        "pressure": 1019,
        "cloudcover": 5,
        "heatindex": 0,
        "dewpoint": -6,
        "windchill": -5,
        "windgust": 16,
        "feelslike": -5,
        "chanceofrain": 0,
        "chanceofremdry": 0,
        "chanceofwindy": 0,
        "chanceofovercast": 0,
        "chanceofsunshine": 0,
        "chanceoffrost": 0,
        "chanceofhightemp": 0,
        "chanceoffog": 0,
        "chanceofsnow": 0,
        "chanceofthunder": 0,
        "uv_index": 1
      }, {
        "time": "300",
        "temperature": 0,
        "wind_speed": 15,
        "wind_degree": 21,
        "wind_dir": "NNE",
        "weather_code": 113,
        "weather_icons": ["https:\/\/assets.weatherstack.com\/images\/wsymbols01_png_64\/wsymbol_0008_clear_sky_night.png"],
        "weather_descriptions": ["Clear"],
        "precip": 0,
        "humidity": 68,
        "visibility": 10,
        "pressure": 1020,
        "cloudcover": 5,
        "heatindex": 0,
        "dewpoint": -5,
        "windchill": -4,
        "windgust": 17,
        "feelslike": -4,
        "chanceofrain": 0,
        "chanceofremdry": 0,
        "chanceofwindy": 0,
        "chanceofovercast": 0,
        "chanceofsunshine": 0,
        "chanceoffrost": 0,
        "chanceofhightemp": 0,
        "chanceoffog": 0,
        "chanceofsnow": 0,
        "chanceofthunder": 0,
        "uv_index": 1
      }]
    }
  }
}

//
// var obj = {}
// const arr = Object.values(data.historical);
// // console.log(arr.length);
// for(i=0; i<arr.length;i++){
//   // console.log(arr[i]);
//   obj = arr[i];
//   // console.log(obj);
// }
// // console.log(obj.hourly[0].humidity);
// const hourly = obj.hourly;
// hourly.forEach(hour=>{
//   console.log(hour);
// })

export default data;
