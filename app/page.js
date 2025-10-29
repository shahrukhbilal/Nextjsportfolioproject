import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MySkillsSection from "@/components/MySkillsSection";
import MyJourney from "@/components/MyJourney";

export default function Home() {
  return (
    <main>
  
      <Hero />
     <div className="py-10"> <MySkillsSection></MySkillsSection></div>
     <div className="py-10"> <MyJourney></MyJourney></div>
    </main>
  );
}
