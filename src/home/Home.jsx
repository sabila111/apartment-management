import Banner from "./Banner";
import Building from "./building/Building";
import FancyCoupn from "./Fancy/FancyCoupn";
import LocationSection from "./locationSection";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Building></Building>
            <FancyCoupn></FancyCoupn>
            <LocationSection></LocationSection>
        </div>
    );
};

export default Home;