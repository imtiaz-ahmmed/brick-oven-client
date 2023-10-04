import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import bgMenu from "../../../assets/menu/banner3.jpg";
import bgDessert from "../../../assets/menu/dessert-bg.jpeg";
import bgSoup from "../../../assets/menu/soup-bg.jpg";
import bgSalad from "../../../assets/menu/salad-bg.jpg";
import bgPizza from "../../../assets/menu/pizza-bg.jpg";
import bgDrinks from "../../../assets/menu/drinks-bg.jpg";
import useMenu from "../../../Hooks/useMenu";
import Items from "../Items/Items";
import SectionTitle from "../../../Components/SharedComponents/SectionTitle";
const Menu = () => {
  const [menu] = useMenu();
  const offers = menu.filter((item) => item.category === "offered");
  const desserts = menu.filter((item) => item.category === "dessert");
  const soups = menu.filter((item) => item.category === "soup");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Helmet>
        <title>Brick Oven || Menu</title>
      </Helmet>
      <Cover
        heading="Our Menu"
        description="Would you like to try a dish?"
        img={bgMenu}
      ></Cover>
      <SectionTitle
        headings={"Today's Offer"}
        subHeadings={"Don't Miss"}
      ></SectionTitle>
      <Items items={offers}></Items>
      <Cover
        heading="Desserts"
        description="Would you like to taste our Desserts?"
        img={bgDessert}
      ></Cover>
      <Items items={desserts}></Items>
      <Cover
        heading="Drinks"
        description="Would you like to taste our Drinks?"
        img={bgDrinks}
      ></Cover>
      <Items items={drinks}></Items>
      <Cover
        heading="Soups"
        description="Would you like to taste our Soups?"
        img={bgSoup}
      ></Cover>
      <Items items={soups}></Items>
      <Cover
        heading="Salads"
        description="Would you like to taste our Salads?"
        img={bgSalad}
      ></Cover>
      <Items items={salads}></Items>
      <Cover
        heading="Pizzas"
        description="Would you like to taste our Pizzas?"
        img={bgPizza}
      ></Cover>
      <Items items={pizzas}></Items>
    </div>
  );
};

export default Menu;
