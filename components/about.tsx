import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./ui/text-generator";
import { YamaText } from "./yamatext";
import { CardSpotlight } from "./ui/spotlight";

export default function AboutPage() {
  const yamaDescription = `
    Yama is a clandestine cult of hackers known for their sophisticated techniques and elusive nature. Operating in the shadows of the digital world, Yama members are rumored to possess unparalleled skills in cybersecurity, cryptography, and computer science. Their motives often remain shrouded in secrecy, with some believing they aim to challenge the status quo of global cybersecurity, while others think their goals are more nefarious. The enigmatic nature of Yama only adds to their mystique, as they continue to be a subject of intrigue and speculation in the hacking community.
  `;

  return (
    <CardSpotlight className="flex flex-col justify-center items-center w-full h-full">
      <div className={cn("p-8 max-w-4xl text-center relative z-20 w-full")}>
        <div className="relative">
          <YamaText />
        </div>

        <div className="text-base leading-relaxed text-neutral-300 max-w-full mt-6 overflow-y-visible">
          <TextGenerateEffect
            words={yamaDescription}
            filter={true}
            duration={0.8}
            className="text-neutral-200"
          />
        </div>
      </div>
    </CardSpotlight>
  );
}
