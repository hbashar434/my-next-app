export const metadata = {
  title: "Profile | Next App",
  description: "next app",
};

const SingleProfilePage = ({ params }) => {
  const [year, id] = params.segments || [];
  return (
    <div className="text-5xl font-bold text-indigo-500">
      SingleProfile {year || new Date().getFullYear()} for {id || 0.013}
    </div>
  );
};

export default SingleProfilePage;
