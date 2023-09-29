import SectionTitle from "../../../Components/SharedComponents/SectionTitle";
import image1 from "../../../assets/menu/salad-bg.jpg";
import image2 from "../../../assets/menu/soup-bg.jpg";
import image3 from "../../../assets/menu/pizza-bg.jpg";
const ChefItems = () => {
  return (
    <section className="mb-12">
      <SectionTitle
        headings={"Chef Recommendation"}
        subHeadings={"Should Try"}
      ></SectionTitle>
      <div className="flex flex-col md:flex-row gap-4 items-center ">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={image1} alt="salad" />
          </figure>
          <div className="card-body">
            <h2 className="card-title mx-auto font-bold">Cease Salad</h2>
            <p className="mx-auto text-center">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
            <div className="card-actions justify-center">
              <button className="btn btn-outline btn-warning">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={image2} alt="salad" />
          </figure>
          <div className="card-body">
            <h2 className="card-title mx-auto font-bold">
              Creamy Tomato Basil Soup
            </h2>
            <p className="mx-auto text-center">
              Pepper,Basil leaves,Cream,vegetable,Tomatoes,Garlic,Onion.
            </p>
            <div className="card-actions justify-center">
              <button className="btn btn-outline btn-warning">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={image3} alt="salad" />
          </figure>
          <div className="card-body">
            <h2 className="card-title mx-auto font-bold"> BBQ Chicken Pizza</h2>
            <p className="mx-auto text-center">
              Chicken, Barbecue sauce,Mozzarella cheese, Cilantro leaves,Olive.
            </p>
            <div className="card-actions justify-center">
              <button className="btn btn-outline btn-warning">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefItems;
