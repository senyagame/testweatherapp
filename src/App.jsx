import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import WeatherMateimg from './Assets/WeatherMate-lmg.png';
import Regions from './Regions';
import './App.css';

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
  }, [isDarkTheme]);

  return (
    <Router>
      <div className={`App ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      
        <button onClick={toggleTheme} className="theme-toggle">
          {isDarkTheme ? 'Светлая тема' : 'Тёмная тема'}
        </button>
        
        
        <section className="welcome">
          <div className="welcome_text">
            <h1>Вас приветствует WeatherMate!</h1>
            <p>Это приложение позволяет узнать прогноз погоды в доступных для просмотра городах.</p>
            <Link to="/regions"> 
              <button className="select-region-button">Выберите регион</button>
            </Link>
          </div>
          
          <div className="welcome_img">
            <img src={WeatherMateimg} alt="WeatherMate" className="enlarged-image" />
          </div>
        </section>

      
        <Switch>
          <Route path="/regions">
            <Regions /> 
          </Route>
          <Route path="/">
            <section className="welcome">
              <h1>Добро пожаловать на главную страницу!</h1>
            </section>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;