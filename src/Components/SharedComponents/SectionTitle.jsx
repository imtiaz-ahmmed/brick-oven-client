const SectionTitle = ({ subHeadings, headings }) => {
  return (
    <div className="text-center mx-auto md:w-4/12 my-8">
      <p className="text-yellow-500 italic mb-2">---{subHeadings}---</p>
      <h3 className="text-4xl uppercase border-y-4 py-2">{headings}</h3>
    </div>
  );
};

export default SectionTitle;
