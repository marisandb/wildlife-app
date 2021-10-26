// import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Nav/nav';
import About from './pages/About/about';
import Animals from './pages/Animals/animals';
// import Addanimal from './pages/addanimal';

function App() {
  return (
    <div class='App'>
      <Navbar/>

      <Switch>
      <Route path='/' component={About}/>
      <Route path='/animals' component={Animals}/>
      {/* <Route path='/intake-form' component={Addanimal}/> */}
      </Switch>
    </div>
  )
}

export default App;
