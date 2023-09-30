import { Helmet } from "react-helmet-async";
import About from "../About/About";
import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import ChefItems from "../ChefItems/ChefItems";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonitals/Testimonials";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Brick Oven || Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <About></About>
      <PopularMenu></PopularMenu>
      <CallUs></CallUs>
      <ChefItems></ChefItems>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </>
  );
};

export default Home;
