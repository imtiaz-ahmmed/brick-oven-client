const MenuItem = ({ item }) => {
  const { name, image, recipe, price } = item;
  return (
    <div className="md:flex  space-x-4">
      <img
        className="w-[118px] h-[104px] m-2 md:m-0"
        style={{ borderRadius: "0 120px 120px 120px" }}
        src={image}
        alt=""
      />
      <div>
        <h3 className="uppercase text-lg">{name} ----------------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-lg text-yellow-500">${price}</p>
    </div>
  );
};

export default MenuItem;
