import './App.scss';
import { ChakraProvider } from '@chakra-ui/react'
import ContainerComponent from './components/ContainerComponent'

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <ContainerComponent />
      </ChakraProvider>
    </div>
  );
}

export default App;
