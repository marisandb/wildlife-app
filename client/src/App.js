import './App.css';
import About from './pages/about';
import { ChakraProvider } from "@chakra-ui/react"
import IntakeForm from './pages/addanimal';

function App() {
  return (
    <ChakraProvider>
    <div className="App">
      <header className="App-header">
        <About/>
        <IntakeForm/>
      </header>
    </div>
    </ChakraProvider>
  );
}

export default App;
