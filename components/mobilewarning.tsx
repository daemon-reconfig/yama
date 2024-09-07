"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Yama from '../app/Yama.png';
const MobileBlocker: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  if (!isMobile) return null;

  return (
    <div className="fixed inset-0 bg-black text-center flex flex-col items-center justify-center z-50">
      <div className="text-6xl font-extrabold text-terminal-green animate-pulse">
        <span className="text-white">⚠️</span> Access Denied
      </div>
      <p className="mt-4 text-xl text-white">
        This site is not available on mobile devices.
      </p>
      <div className="mt-4">
        <Image src={Yama} width={100} height={100} alt="Yama"/>
      </div>
    </div>
  );
};

export default MobileBlocker;
