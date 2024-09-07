"use client";
import React from "react";
import {
    IconBrandDiscord,
  IconBrandInstagram,
  IconExchange,
  IconFlag,
  IconHome,
  IconTerminal2,
} from "@tabler/icons-react";
import { FloatingDock } from "./ui/dock";

export function NavDock() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-terminal-green" />
      ),
      href: "/",
    },

    {
      title: "Terminal",
      icon: (
        <IconTerminal2 className="h-full w-full text-terminal-green" />
      ),
      href: "/terminal",
    },
    {
      title: "Deceptions",
      icon: (
        <IconFlag className="h-full w-full text-terminal-green" />
      ),
      href: "https://ctf.yama.ninja",
    },
    {
      title: "Changelog",
      icon: (
        <IconExchange className="h-full w-full text-terminal-green" />
      ),
      href: "/changelog",
    },

    {
      title: "Discord",
      icon: (
        <IconBrandDiscord className="h-full w-full text-terminal-green" />
      ),
      href: "https://discord.gg/5rdQJ9s6pf",
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-terminal-green" />
      ),
      href: "#",
    },
  ];
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full flex items-center justify-center p-4">
      <FloatingDock
        mobileClassName="translate-y-20" 
        items={links}
      />
    </div>
  );
}
