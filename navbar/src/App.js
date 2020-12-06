import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Home from './pages/home'
import About from './pages/about'
import Store from './pages/store'
import Contact from './pages/contact'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
 <Navbar/>
      <header className="App-header">
<Router>
 <Switch>
       
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/store' component={Store} />
            <Route path='/contact' component={Contact} />
            
      
    </Switch>
</Router>
      </header>
    </div>
  );
}

export default App;
