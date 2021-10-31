import './App.css';
import {} from 'react-bootstrap';
import Header from './shared/Header/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './authentication/Login/Login';
import Admin from './components/Admin/Admin';
import AuthProvider from './context/AuthProvider';
import UserDestinations from './components/Events/UserDestinations';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import ManageBooking from './components/ManageBooking/ManageBooking';
import PrivateRoute from './PrivateRoute/PrivateRoute';

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

            <PrivateRoute exact path="/bookings">
              <UserDestinations></UserDestinations>
            </PrivateRoute>
            <PrivateRoute exact path="/manageBookings">
              <ManageBooking></ManageBooking>
            </PrivateRoute>
            <PrivateRoute exact path="/placeorder/:placeOrderId">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>

            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/admin">
              <Admin></Admin>
            </PrivateRoute>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
