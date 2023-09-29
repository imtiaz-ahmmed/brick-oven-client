import About from "../About/About";
import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import ChefItems from "../ChefItems/ChefItems";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Category></Category>
      <About></About>
      <PopularMenu></PopularMenu>
      <CallUs></CallUs>
      <ChefItems></ChefItems>
    </>
  );
};

export default Home;
