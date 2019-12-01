import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Error from './components/Error';
import Weather from './components/Weather';

function App() {

  // Main State
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [error, setError] = useState(false);
  const [result, setResult] = useState({});

  // State Hook
  useEffect(() => {
    if (city === '') return;
    const getWather = async () => {
      const appId = '...';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`
  
      const response = await fetch(url);
      const result = await response.json();
      setResult(result);
      
    }
    getWather();
  }, [city, country]);

  // Form Submit action, set states
  const submitSearch = data => {
    if (data.city === '' || data.country === ''){
      setError(true);
      return;
    }
    setCity(data.city);
    setCountry(data.country);
    setError(false);
  }

  // Create conditinoal component, error or response view
  let resultComponent;
  if (error) {
    resultComponent = <Error message='Missing field'/>
  } else if (result && result.cod === '404') {
    resultComponent = <Error message='City not found'/>
  } else {
    resultComponent = <Weather weather={result}/>
  }


  return (
    <div>
      <Header
        title='React Weather (Hooks)'
      />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Form
                submitSearch={submitSearch}
              />
            </div>
            <div className="col s12 m6">
              {resultComponent}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
