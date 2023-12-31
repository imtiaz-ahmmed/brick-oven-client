import SectionTitle from "../../../Components/SharedComponents/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";
import { Link } from "react-router-dom";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section>
      <SectionTitle
        headings={"From Our Menu"}
        subHeadings={"Popular Items"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-10 mb-12">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center mb-8">
        <Link to="/menu" className="btn btn-outline border-0 border-b-4">
          View Full Menu
        </Link>
      </div>
    </section>
  );
};

export default PopularMenu;
