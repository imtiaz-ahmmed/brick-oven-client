import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import bgMenu from "../../../assets/menu/banner3.jpg";
const Menu = () => {
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
    </div>
  );
};

export default Menu;
