import service from "../../assets/home/chef-service.jpg";

const About = () => {
  const backgroundImageStyles = {
    backgroundImage: `url(${service})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "400px",
    display: "flex",
    alignItems: "center",
  };
  return (
    <div style={backgroundImageStyles}>
      <div className="text-center w-3/4 mx-auto bg-white p-16">
        <h3 className="text-4xl uppercase mb-5 ">Brick Oven </h3>
        <p className="text-clip">
          Brick Oven, a charming restaurant nestled in the heart of the city,
          offers a delightful dining experience. Known for its rustic ambiance
          and delectable wood-fired pizzas, it caters to both casual diners and
          food enthusiasts. With a diverse menu and friendly service, Brick Oven
          promises a memorable culinary journey.
        </p>
      </div>
    </div>
  );
};

export default About;
