import './App.css';
import Header from './component/Header';
import AddProduct from './component/AddProduct';
import {BrowserRouter as Router, Route} from "react-router-dom"
import AllProducts from './component/AllProducts';


function App() {
  return (
    <Router>
      <div style={{ backgroundImage: "url(/img/p1.jpg)" , 
         flex: 1,
    width: '100vw',
    height: '110vh',
    backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'}}>
      
          <Header/>
           
            <Route path="/add" exact component = {AddProduct} />

         
            <Route path= "/" exact component = {AllProducts}/>
     
    </div>
    </Router>
  );
}

export default App;
