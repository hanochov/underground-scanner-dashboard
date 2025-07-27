import AboutFeatures from "../components/About/AboutFeatures";
import AboutHeader from "../components/About/AboutHeader";
import AboutMission from "../components/About/AboutMission";

function About() {
  return (
    <div className="min-h-screen bg-[#000004] text-white py-20 px-6">
      <AboutHeader />
      <AboutFeatures />
      <AboutMission />
    </div>
  );
}

export default About;
