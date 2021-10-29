import './App.css';
import About from './pages/about';
import { ChakraProvider } from "@chakra-ui/react"

function App() {
  return (
    <ChakraProvider>
    <div className="App">
      <header className="App-header">
        <About/>
      </header>
    </div>
    </ChakraProvider>
  );
}

export default App;
