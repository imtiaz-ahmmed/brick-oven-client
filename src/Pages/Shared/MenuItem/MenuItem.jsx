const MenuItem = ({ item }) => {
  const { name, image, recipe, price } = item;
  return (
    <div className="flex space-x-4">
      <img
        className="w-[118px] h-[104px]"
        style={{ borderRadius: "0 120px 120px 120px" }}
        src={image}
        alt=""
      />
      <div>
        <h3 className="uppercase text-lg">{name} -----------------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-lg text-yellow-500">${price}</p>
    </div>
  );
};

export default MenuItem;
