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


function App() {
  return (
    <div className="">
     <Router>
     <Header></Header>
     <Navigation></Navigation>
     <Switch>
       <Route exact path="/home">
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
       <Route  path ='*'>
          <ErrorPage></ErrorPage>
       </Route>
       <Route  path ='/'>
          <Home></Home>
       </Route>
       
     </Switch>
     <Footer></Footer>
     </Router>
     
    </div>
  );
}

export default App;
