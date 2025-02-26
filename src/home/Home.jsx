import Banner from "./Banner";
import Building from "./building/Building";
import FancyCoupn from "./Fancy/FancyCoupn";
import FeaturedBuildings from "./FeaturedBuilding/FeaturedBuildings";
import LocationSection from "./locationSection";
import Testimonial from "./testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Building></Building>
            <FeaturedBuildings></FeaturedBuildings>
            <FancyCoupn></FancyCoupn>
            <LocationSection></LocationSection>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;