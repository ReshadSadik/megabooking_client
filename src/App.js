import './App.css';
import {} from 'react-bootstrap';
import Header from './shared/Header/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Donations from './components/Donations/Donations';
import Events from './components/Events/Events';
import Login from './authentication/Login/Login';
import Admin from './components/Admin/Admin';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/donations">
              <Donations></Donations>
            </Route>
            <Route exact path="/bookings">
              <Events></Events>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/admin">
              <Admin></Admin>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
