import About from "../../About/About";
import Banner from "../../Banner/Banner";
import Category from "../../Category/Category";
import PopularMenu from "../../PopularMenu/PopularMenu";
import CallUs from "../CallUs/CallUs";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Category></Category>
      <About></About>
      <PopularMenu></PopularMenu>
      <CallUs></CallUs>
    </>
  );
};

export default Home;
