import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/Homepage';
import ShopPage from './pages/shop/Shop';
import signInAndSignUp from './pages/sign-in-and-sign-up/Sign-in-and-sign-up';

import Header from './components/header/Header';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={signInAndSignUp}/>
      </Switch>

    </div>
  );
}

export default App;
