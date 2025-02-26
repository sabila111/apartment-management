import Banner from "./Banner";
import Building from "./building/Building";
import FancyCoupn from "./Fancy/FancyCoupn";
import Faq from "./Faq";
import FeaturedBuildings from "./FeaturedBuilding/FeaturedBuildings";
import LocationSection from "./locationSection";
import News from "./News";
import Testimonial from "./testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Building></Building>
            <FeaturedBuildings></FeaturedBuildings>
            <FancyCoupn></FancyCoupn>
            <Testimonial></Testimonial>
            <Faq></Faq>
            <News></News>
            <LocationSection></LocationSection>
           
        </div>
    );
};

export default Home;