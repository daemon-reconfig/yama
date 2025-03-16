import About from "@/components/about";
import { NavDock } from "@/components/navdock";

export default function Home() {
  return (
    <>
    {/* add favicon */}
    <link rel="icon" href="/favicon.ico" />
      
            <About />
        
    <div className="fixed bottom-0 left-0 right-0 z-20">
      <NavDock />
    </div>
    
    </>
  );
}
