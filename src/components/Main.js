import React, { useEffect, useState } from 'react';
import coldbg from '../assets/coldbg.jpg';
import { FaMapMarkerAlt } from "react-icons/fa";

const Main = () => {

    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Bali");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=3605d3f1066c83c6b0b59f4f3be5d6cf`
            const response = await fetch(url);
            //console.log(response);

            const resJson = await response.json();

            setCity(resJson);
           // console.log(resJson.main);

        }

        fetchApi();
    }, [search])

    return (
        <div className="overlay">
            <div className="bg" style={{ backgroundImage: `url(${coldbg})` }}>

                <div className="input-section">
                    <input type="text" value={search} onChange={(e) => { setSearch(e.target.value) }} placeholder="Enter City..." />
                    <button>Search</button>
                </div>

                {!city ? (
                    <h4 className="error-msg">Oops! Sorry, No Data Found ☹️</h4>
                    ):(
                    <div className="details">
                        <div className="details-section location ">
                            
                        <div className="icon">
                            {city.weather ?
                                (<img src={`https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`} alt="pic" />)
                                : <h4 className="error-msg">Oops! Sorry, No Data Found ☹️</h4>}
                        </div>
                        <div className="weather">
                            {city.weather ? (<p>{city.weather[0].main}</p>) : null}
                        </div>
                            <h2 className="location-section">
                             <div className="location-icon">
                             <FaMapMarkerAlt />
                             </div>
                             
                                {search}
                            </h2>
                            {city.main ? (<h1 className="temp">🌡️Temp: {city.main.temp}°Cel</h1>) : null}
                            
                        </div>
                     
                        <div className=" details-section sub-details-section">
                            {city.main ? (<h3 className="min-max">
                            ❄️ Min:  {city.main.temp_min}°Cel
                            </h3 >) : null}


                            {city.main ? (<h3 className="min-max">
                            🌞 Max:  {city.main.temp_max}°Cel
                            </h3 >) : null}


                            {city.main ? (<h3 className="min-max humidity">
                               💧 Humidity:  {city.main.humidity}%
                            </h3 >) : null}

                        </div>
                        </div>
                       
                     )

                }

</div>
            </div>
      
    )
}

export default Main;