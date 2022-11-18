import { useEffect } from 'react';
import './css/App.css';
import RouterDom from './rutas/RouterDom';

function App() {

  const makeAPICall = async () => {
    try {
      const response = await fetch('http://localhost:8080/', { mode: 'cors' });
      const data = await response.json();
      console.log({ data })
    }
    catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    makeAPICall()
  }, []);
  return (
    <div className="App">
      <RouterDom />
    </div>
  );
}

export default App;
