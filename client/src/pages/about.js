import Carousel from "../components/carousel";
import { CarouselImages } from "../components/carouselImages";

function About() {
    return (
        <>
        <section id='about'>
            <div>
                <h2>
                    Coulee Region Humane Society Wildlife Rehabilitation
                </h2>
                <Carousel slides={CarouselImages}/>
                <p>
                    Lorum Ippsum blah blah blah.
                </p>
            </div>
        </section>
        </>
    );
}

export default About;