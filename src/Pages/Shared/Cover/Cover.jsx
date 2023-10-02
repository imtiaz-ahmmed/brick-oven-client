import { Parallax } from "react-parallax";
const Cover = ({ heading, description, img }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the menu"
      strength={-200}
    >
      <div className="hero md:h-[500px]">
        <div className="hero-overlay bg-opacity-25"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className=" bg-black opacity-60 text-white px-6 py-4 md:px-48 md:py-14">
            <h1 className="mb-5 text-xl md:text-5xl font-bold uppercase">
              {heading}
            </h1>
            <p className="mb-5  uppercase">{description}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
