import MenuItem from "../../Shared/MenuItem/MenuItem";

const Items = ({ items }) => {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-10 mb-12 p-4">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center mb-8">
        <button className="btn btn-outline border-0 border-b-4">
          Order Your Favorite Food
        </button>
      </div>
    </>
  );
};

export default Items;
