// import logo from './logo.svg';
import './App.css';
import Navbar from './components/nav';
import About from './pages/about';
import Animals from './pages/animals';
// import Addanimal from './pages/addanimal';

function App() {
  return (
    <div class='App'>
      <Navbar/>

      <About/>

      <Animals/>

      {/* <Addanimal/> */}
    </div>
  )
}

export default App;
