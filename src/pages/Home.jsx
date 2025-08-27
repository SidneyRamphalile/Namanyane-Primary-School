import Header from "../components/Header";
import Values from "../components/Values";
import GoogleMap from "../components/GoogleMap";
import VisionMission from "../components/VisionMission";
import Announcements from "../components/Announcements";
import FunFacts from "../components/FunFacts";



function Home() {
  return (
    <div>
      <Header />
      <Values />
      <VisionMission/>
      <FunFacts/>
      <GoogleMap />
    </div>
  );
}

export default Home;





