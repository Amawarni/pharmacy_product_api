import './App.css';
import Header from './component/Header';
import AddProduct from './component/AddProduct';
import {BrowserRouter as Router, Route} from "react-router-dom"
import AllProducts from './component/AllProducts';


function App() {
  return (
    <Router>
      <div>
          <Header/>
           
            <Route path="/add" exact component = {AddProduct} />

         
            <Route path= "/" exact component = {AllProducts}/>
     
    </div>
    </Router>
  );
}

export default App;
