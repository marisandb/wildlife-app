import './App.css';
import About from './pages/about';
import { ChakraProvider } from "@chakra-ui/react"
// import IntakeForm from './pages/addanimal';

function App() {
  return (
    <ChakraProvider>
    <div className="App">
      <About/>
      {/* <IntakeForm/> */}

    </div>
    </ChakraProvider>
  );
}

export default App;
