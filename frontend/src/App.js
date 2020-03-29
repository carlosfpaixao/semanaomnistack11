import React from 'react';

import './global.css';

//import Header from './Header';

//import Logon from './pages/Logon';

import Routes from './routes';

// JSX (JavaScript XML)
/* 
function App() {

  //let counter = useState(0);
  const [counter, setCounter] = useState(0);

  function increment() {
    //counter += 1;
    setCounter(counter + 1);

    //console.log(counter);
  }

  return (
    <div>
      <Header title="Semana ">Omnistack | Contador: {counter}</Header>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
} */

function App() {
  return (
    <Routes />
  );
}

export default App;
