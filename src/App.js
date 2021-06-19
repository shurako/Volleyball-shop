
import './App.css';
import Header from './Components/Header Components/Header';
import Carousel from "./Components/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AdvantagesBar from './Components/AdvantagesBarComponents/AdvantagesBar';
import PromotedProducts from './Components/PromotedProducts/PromotedProducts';
import PartnersBar from './Components/PartnersBarComponents/PartnersBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import MainPage from './Components/MainPage';
import ProductCard from './Components/ProductComponents/ProductCard';
import ProductPage from './Components/ProductPages/ProductPage';


function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Switch>
        <Route path = {'/shoes'} component = {ProductPage}/>
        <Route path = {'/'} exact component = {MainPage}/>
      </Switch>
      </Router>
      
    </div>
  );
}

export default App;
