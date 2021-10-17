import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import AboutUs from './components/AboutUs/AboutUs';
import Articles from './components/Articles/Articles';
import ErrorPage from './components/ErrorPage/ErrorPage';

import Footer from './components/Footer/Footer';
import Navigation from './components/NavBar/Navigation';
import Booking from './components/Booking/Booking/Booking';
import Login from './components/Login/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="">
     <AuthProvider>
     <Router>
     <Header></Header>
     <Navigation></Navigation>
     <Switch>
       <Route exact path="/">
          <Home></Home>
       </Route>
       <Route exact path ="/service">
          <Services></Services>
       </Route>
       <Route exact path="/about">
         <AboutUs></AboutUs>
       </Route>
       <Route exact path="/articles">
         <Articles></Articles>
       </Route>
       
       <Route exact path ='/home'>
          <Home></Home>
       </Route>
       <Route exact path ='/login'>
          <Login></Login>
       </Route>
       <PrivateRoute exact path="/booking/:serviceId">
           <Booking></Booking>
       </PrivateRoute>
       <Route  path ='*'>
          <ErrorPage></ErrorPage>
       </Route>
     </Switch>
     <Footer></Footer>
     </Router>
     
     </AuthProvider>
    </div>
  );
}

export default App;
