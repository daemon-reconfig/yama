import About from "@/components/about";
import { NavDock } from "@/components/navdock";
import { BackgroundBeamsWithCollision } from "@/components/ui/bg-beams";
import { EvervaultCard } from "@/components/ui/hover-timer";


export default function Home() {
  return (
    <>
    {/* add favicon */}
    <link rel="icon" href="/favicon.ico" />
    <EvervaultCard />
    <BackgroundBeamsWithCollision >
      
            <About />
        
    </BackgroundBeamsWithCollision>     
    <div className="fixed bottom-0 left-0 right-0 z-20">
      <NavDock />
    </div>
    
    </>
  );
}
