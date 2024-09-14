import Challenges from "@/components/challenges";
import { NavDock } from "@/components/navdock";
import Link from "next/link"; // Import Link from next/link

export default function ChallengesPage() {
    return (
        <div>
            <Challenges />
            <NavDock />
        </div>
    );
}
