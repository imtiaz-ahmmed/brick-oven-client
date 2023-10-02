import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import bgMenu from "../../../assets/menu/banner3.jpg";
import useMenu from "../../../Hooks/useMenu";
import Items from "../Items/Items";
import SectionTitle from "../../../Components/SharedComponents/SectionTitle";
const Menu = () => {
  const [menu] = useMenu();
  const offers = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Brick Oven || Menu</title>
      </Helmet>
      <Cover
        heading="Our Menu"
        description="Would you like to try a dish!"
        img={bgMenu}
      ></Cover>
      <SectionTitle
        headings={"Today's Offer"}
        subHeadings={"Don't Miss"}
      ></SectionTitle>
      <Items items={offers}></Items>
    </div>
  );
};

export default Menu;
