import { Helmet } from "react-helmet";
import Banner from "./Banner";
import Categories from "./Categories";
import Description from "./Description";
import Featured from "./Featured";
import Testimonials from "./Testimonials";
import PopularMenu from "./PopularMenu";


const Home = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Bistro Boss | Home</title>
            </Helmet>
           <Banner/>
           <Categories/>
           <Description/>
           <PopularMenu/>
           <Featured/>
           <Testimonials/>
        </div>
    );
};

export default Home;