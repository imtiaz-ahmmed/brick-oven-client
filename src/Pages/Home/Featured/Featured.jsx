import SectionTitle from "../../../Components/SharedComponents/SectionTitle";
import image from "../../../assets/home/featured.jpg";
import "./Featured.css";
const Featured = () => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentDate = new Date().getDate();
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  return (
    <section className="featured-bg bg-fixed p-12 md:p-20 text-white">
      <SectionTitle
        headings={"From our menu"}
        subHeadings={"Check it out"}
      ></SectionTitle>
      <div className="flex flex-col md:flex-row gap-12 items-center justify-center p-8 bg-gray-700 bg-opacity-40">
        <div className="md:w-1/2">
          <img src={image} alt="" />
        </div>
        <div className="md:w-1/2  ">
          <p className="text-lg">
            {monthNames[currentMonth]} {currentDate}, {currentYear}
          </p>
          <h4 className="uppercase text-2xl my-5">WHERE CAN I GET SOME?</h4>
          <p>
            Brick Oven, a culinary gem nestled in the heart of the city, offers
            a delectable dining experience. With rustic charm and a cozy
            ambiance, its the perfect place for a romantic dinner or a family
            gathering.{" "}
          </p>
          <button className="btn glass my-5">Order Now</button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
