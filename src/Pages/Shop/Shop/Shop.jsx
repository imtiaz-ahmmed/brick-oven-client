import Cover from "../../Shared/Cover/Cover";
import shopCoverImg from "../../../assets/shop/banner2.jpg";

const Shop = () => {
  return (
    <section>
      <Cover
        heading="Our Shop"
        img={shopCoverImg}
        description={"Would you like to try a dish?"}
      ></Cover>
    </section>
  );
};

export default Shop;
