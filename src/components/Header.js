import React, { useState} from 'react';
import Main from './Main';

const Header = () => {

    const [darkMode, setDarkMode] = useState(false);

    return(
        <>
        <div className={darkMode ? "dark-mode" : "light-mode"}>
            <h1 className="title">React Weather App⛅</h1>
          <div className="switch-container">
            <label className="switch">
              <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
              <span className="slider round" />
            </label>
            <label className="switch-label">{darkMode ? "Dark" : "Light"}</label>
          </div>
          <Main />
        </div>
      </>
    );
}

export default Header; 