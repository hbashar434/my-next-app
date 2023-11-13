const SomeBlogPage = ({ params }) => {
  const [year, id] = params.segments;
  console.log(year, id);

  return (
    <div>
      SomeBlogPage {year} for {id}
    </div>
  );
};

export default SomeBlogPage;
