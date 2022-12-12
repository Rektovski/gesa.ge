import './App.css';
import {ChakraProvider} from '@chakra-ui/react'
import NavigationBar from "./main/components/NavigationBar";
import Footer from "./main/components/Footer";

export default function App() {
    return (
        <ChakraProvider>
            <div className="App">
                <NavigationBar/>
                <Footer/>
            </div>
        </ChakraProvider>
    );
}
