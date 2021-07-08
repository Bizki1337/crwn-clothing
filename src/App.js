import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/Homepage';

import './App.css';

const HatsPage = () => (
  <div>
    <h1 style={{fontSize: '20em'}}>Poshel nahuy</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/hats' component={HatsPage}/>
      </Switch>

    </div>
  );
}

export default App;
