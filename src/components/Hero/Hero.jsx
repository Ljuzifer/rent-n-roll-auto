import { SectionContainer } from "../../GlobalStyle";
import { HeroDiv, PartHeroDiv } from "./Hero.styled";
import hero from "../../imgs/cars_1.webp";
import font from "../../imgs/hero-font.jpg";

export default function Hero() {
    return (
        <SectionContainer>
            <HeroDiv font={hero}>
                <h1>
                    Welcome to
                    <br /> <span>Rent`N`Roll Auto</span>
                </h1>
                <p>Your trusted partner for car rentals</p>
            </HeroDiv>

            <PartHeroDiv>
                <h2>About Us</h2>
                <p>Welcome to Rent`N`Roll Auto, your premier destination for reliable and affordable car rentals.</p>
                <p>
                    At Rent`N`Roll Auto, we understand that convenience, flexibility, and quality are paramount when it
                    comes to car rentals. Our mission is to provide you with a seamless and enjoyable experience from
                    the moment you choose your vehicle to the completion of your journey.
                </p>
                <p>
                    What sets us apart? It`s our commitment to customer satisfaction and our diverse fleet of
                    well-maintained vehicles. Whether you need a compact car for a quick city trip, an SUV for a family
                    adventure, or a luxury sedan for a special occasion, we have the perfect ride for you.
                </p>
                <p>
                    Our team is dedicated to ensuring your safety and comfort. We prioritize regular maintenance,
                    cleanliness, and customer service, so you can focus on the road ahead with peace of mind.
                </p>
                <p>
                    Thank you for considering Rent`N`Roll Auto for your car rental needs. We look forward to being your
                    trusted partner in every journey.
                </p>
            </PartHeroDiv>

            <PartHeroDiv>
                <h2>Our Fleet</h2>
                <p>
                    Explore our diverse fleet of vehicles, including sedans, SUVs, coupes, and more. Whether you need a
                    car for a short trip or a long-term rental, we have the perfect option for you.
                </p>
            </PartHeroDiv>

            <PartHeroDiv img={font}>
                <h3>
                    <a href="tel:+380730000000">Contact Us</a>
                    <p>Have questions or ready to book a car? Contact our team for assistance.</p>
                </h3>
            </PartHeroDiv>
        </SectionContainer>
    );
}
