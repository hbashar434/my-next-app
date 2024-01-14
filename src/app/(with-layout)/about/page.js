import Image from "next/image";
import techMind from "public/tech-mind.jpg";
import daisy from "@/assets/daisy.jpg";

export const metadata = {
  title: "About | Next App",
  description: "next app",
};

const AboutPage = async () => {
  const res = await fetch(
    "https://nextjs-orpin-omega-98.vercel.app/api/restaurants"
  );
  const data = await res.json();
  return (
    <div className="text-5xl font-bold text-indigo-600">
      AboutPage {data.length}
      <p className="border-2 border-indigo-600" />
      <Image src={techMind} alt="tech-mind" width={400} />
      <p className="border-2 border-indigo-600" />
      <Image src={daisy} alt="daisy for you!" width={400} />
      <p className="border-2 border-indigo-600" />
    </div>
  );
};

export default AboutPage;
