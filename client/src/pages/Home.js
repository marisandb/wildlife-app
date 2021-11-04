import Carousel from "../components/carousel/carousel";
import { CarouselImages } from "../components/carousel/carouselImages";
import { Button, Heading, Box, Container, Spacer, Flex , Center, Image} from "@chakra-ui/react"
import {FaFacebook} from "react-icons/fa"

function Home() {
    return (
        <section id='about'>
            <Carousel slides={CarouselImages}/>
            {/* Donation Area */}
            <Center> 
            <Heading p="5"> Want to help rescue wildlife? </Heading>
            <Box>
            <Button p="5" colorScheme="green" size="lg" > DONATE HERE </Button>
            </Box>
            </Center>
            <Flex justifyContent="center">
            <Center> 
            <Image boxSize="200px" src="https://images.squarespace-cdn.com/content/v1/53ab1c20e4b009b45dc8601b/1520455579847-5LVW6M8S9WG96OWAN5W5/Animal+Control+Logo+3B+UpUp.jpg?format=750w" /> 
            <Box>
            <Container> The Coulee Region Humane Society’s Wildlife Rehabilitation program is largely funded by donations from local supporters.
            We receive hundreds of injured and/or orphaned animals every year. These include but are not limited to: turtles, 
            squirrels, rabbits, foxes, opossums, bats, raccoons, ducklings, pigeons, hawks, falcons, eagles and others. Please consider donating to help care for these wildlife animals.</Container>
            </Box>
            </Center>
            </Flex>
            {/* Facebook links */}
            <Box>
            <Center>
                <Heading p="5"> Visit our Facebook Page!</Heading>
                <a href="https://www.facebook.com/CRHSWildlife"><Button colorScheme="facebook" leftIcon={<FaFacebook />}> Facebook </Button></a>
            </Center>
            <Flex>
                <Box />
                <iframe title="bat post" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FCRHSWildlife%2Fposts%2F1723726841145851&show_text=true&width=500" width="500" height="800" scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                <Spacer />
                <Box />
                <iframe title="flower post" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FCRHSWildlife%2Fposts%2F1722778474574021&show_text=true&width=500" width="500" height="800" scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                <Spacer />
                <Box />
                <iframe title="birds of prey" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FCRHSWildlife%2Fposts%2F1713905518794650&show_text=true&width=500" width="500" height="800" scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            </Flex>
            </Box>
        </section>
    );
}

export default Home;