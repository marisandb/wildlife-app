<<<<<<< HEAD
import Carousel from "../components/carousel";
import { CarouselImages } from "../components/carouselImages";
import { Button, Heading, Box, HStack, SimpleGrid, Container } from "@chakra-ui/react"
import {FaFacebook} from "react-icons/fa"

function About() {
    return (
        <section id='about'>
            <div>
                <Heading>
                    Coulee Region Humane Society Wildlife Rehabilitation
                </Heading>
                <Carousel slides={CarouselImages}/>
            </div>
            <Box borderWidth="1px" borderRadius="lg" borderColor="green" overflow="hidden" alignContent="center">
            <Button colorScheme="green" size="lg" > DONATE HERE </Button>
            <Container> The Coulee Region Humane Society’s Wildlife Rehabilitation program is largely funded by donations from local supporters.
            We receive hundreds of injured and/or orphaned animals every year. These include but are not limited to: turtles, 
            squirrels, rabbits, foxes, opossums, bats, raccoons, ducklings, pigeons, hawks, falcons, eagles and others. Please consider donating to help care for these wildlife animals.</Container>
            </Box>
            <SimpleGrid>
            <Box borderWidth="1px" borderColor="green">
            <Heading> Visit our Facebook Page!</Heading>
            <a href="https://www.facebook.com/CRHSWildlife"><Button colorScheme="facebook" leftIcon={<FaFacebook />}> Facebook </Button></a>
            <HStack spacing={8}>
            <iframe title="bat post" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FCRHSWildlife%2Fposts%2F1723726841145851&show_text=true&width=500" width="500" height="800" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            <iframe title="flower post" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FCRHSWildlife%2Fposts%2F1722778474574021&show_text=true&width=500" width="500" height="800" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            <iframe title="birds of prey" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FCRHSWildlife%2Fposts%2F1713905518794650&show_text=true&width=500" width="500" height="800" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            </HStack>
            </Box>
            </SimpleGrid>
        </section>
    );
}
=======
// import "./App.css";
// import About from "./pages/about";
// import { ChakraProvider } from "@chakra-ui/react";
// // import IntakeForm from './pages/addanimal';
>>>>>>> origin/clarissa

// function App() {
//   return (
//     <ChakraProvider>
//       <div className="App">
//         <About />
//         {/* <IntakeForm/> */}
//       </div>
//     </ChakraProvider>
//   );
// }

// export default App;
