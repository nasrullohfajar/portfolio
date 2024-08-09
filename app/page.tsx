import Hero from "@/components/Hero";
import Navbar from "@/components/ui/Navbar";
import ShootingStars from "@/components/ui/background/ShootingStars";
import StarsBackground from "@/components/ui/background/StarsBackground";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto px-5 sm:px-10">
      <div className="max-w-7xl w-full">
        <Navbar
          navItems={[
            { name: "About", link: "#about" },
            { name: "Project", link: "#project" },
            { name: "Contact", link: "#contact" },
          ]}
        />

        <StarsBackground starDensity={0.00005} />

        <ShootingStars
          minSpeed={1}
          maxSpeed={3}
          minDelay={5000}
          maxDelay={8000}
        />
        <Hero />
      </div>
    </main>
  );
}
